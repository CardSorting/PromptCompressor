import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const failures = []

function read(relativePath) {
  const absolutePath = resolve(root, relativePath)
  if (!existsSync(absolutePath)) {
    failures.push(`missing: ${relativePath}`)
    return ''
  }
  return readFileSync(absolutePath, 'utf8')
}

function requireText(relativePath, text) {
  const content = read(relativePath)
  if (content && !content.includes(text)) {
    failures.push(`${relativePath}: missing ${JSON.stringify(text)}`)
  }
}

const requiredFiles = [
  'README.md',
  'CONTRIBUTING.md',
  'LICENSE',
  'NOTICE',
  'SECURITY.md',
  'CHANGELOG.md',
  'docs/README.md',
  'docs/ARCHITECTURE.md',
  'docs/GETTING_STARTED.md',
  'docs/API.md',
  'docs/OPERATIONS.md',
  'docs/PORTING_INVENTORY.md',
  'docs/PROVENANCE.md',
  'docs/LICENSING.md',
  'docs/DEVELOPMENT.md',
  '.wiki/index.md',
  '.wiki/agent/playbook.md',
  '.wiki/agent/agent-memory.md',
  '.wiki/agent/key-findings.md',
  '.wiki/agent/patterns.md',
  '.wiki/agent/common-pitfalls.md',
  '.wiki/agent/troubleshooting.md',
  '.wiki/adr/README.md',
]

for (const file of requiredFiles) read(file)

requireText('docs/README.md', 'ARCHITECTURE.md')
requireText('docs/README.md', '.wiki/index.md')
requireText('docs/README.md', 'npm run docs:check')
requireText('docs/ARCHITECTURE.md', 'reconcile provider usage')
requireText('docs/ARCHITECTURE.md', 'receiving application owns')
requireText('LICENSE', 'Apache License')
requireText('LICENSE', 'Version 2.0')
requireText('LICENSE', 'END OF TERMS AND CONDITIONS')
requireText('NOTICE', 'https://github.com/CardSorting/PromptCompressor')
requireText('NOTICE', 'docs/LICENSING.md')
requireText('docs/LICENSING.md', 'Apache License, Version 2.0')
requireText('docs/LICENSING.md', 'Third-party material')
requireText('docs/PROVENANCE.md', 'Apache License, Version 2.0')
requireText('CONTRIBUTING.md', 'npm run docs:check')

const wikiIndex = read('.wiki/index.md')
for (const file of [
  'agent/playbook.md',
  'agent/agent-memory.md',
  'agent/key-findings.md',
  'agent/patterns.md',
  'agent/common-pitfalls.md',
  'agent/troubleshooting.md',
  'adr/README.md',
]) {
  if (wikiIndex && !wikiIndex.includes(file)) {
    failures.push(`.wiki/index.md: missing link to ${file}`)
  }
}

const adrDirectory = resolve(root, '.wiki/adr')
const adrIndex = read('.wiki/adr/README.md')
const adrFiles = existsSync(adrDirectory)
  ? readdirSync(adrDirectory).filter((file) => /^ADR-\d+-.*\.md$/.test(file))
  : []

if (adrFiles.length === 0) failures.push('.wiki/adr: no ADR files found')

for (const file of adrFiles) {
  if (!adrIndex.includes(`(${file})`)) {
    failures.push(`.wiki/adr/README.md: missing index entry for ${file}`)
  }
  const content = read(`.wiki/adr/${file}`)
  for (const marker of ['Status:', 'Date:', 'Author:', 'Implementing Surfaces:', '## 1.', '## 2.', '## 3.', '## 4.']) {
    if (content && !content.includes(marker)) {
      failures.push(`.wiki/adr/${file}: missing ${JSON.stringify(marker)}`)
    }
  }
}

const packageJson = JSON.parse(read('package.json'))
for (const script of ['check', 'docs:check']) {
  if (!packageJson.scripts?.[script]) failures.push(`package.json: missing ${script} script`)
}
if (packageJson.license !== 'Apache-2.0') {
  failures.push(`package.json: expected license Apache-2.0, got ${JSON.stringify(packageJson.license)}`)
}
for (const file of ['README.md', 'LICENSE', 'NOTICE', 'CONTRIBUTING.md', 'SECURITY.md', 'CHANGELOG.md', 'docs']) {
  if (!packageJson.files?.includes(file)) {
    failures.push(`package.json: files does not include ${file}`)
  }
}

function checkLocalLinks(relativePath) {
  const content = read(relativePath)
  const directory = dirname(resolve(root, relativePath))
  const linkPattern = /\[[^\]]+\]\(([^)]+)\)/g
  for (const match of content.matchAll(linkPattern)) {
    const rawTarget = match[1].trim().split('#')[0]
    if (!rawTarget || rawTarget.startsWith('http://') || rawTarget.startsWith('https://') || rawTarget.startsWith('mailto:')) continue
    const target = resolve(directory, rawTarget)
    if (!existsSync(target)) failures.push(`${relativePath}: broken local link ${rawTarget}`)
  }
}

for (const file of requiredFiles) {
  if (file.endsWith('.md')) checkLocalLinks(file)
}

if (failures.length > 0) {
  console.error('Documentation audit failed:')
  for (const failure of failures) console.error(`- ${failure}`)
  process.exitCode = 1
} else {
  console.log(`Documentation audit passed: ${requiredFiles.length} canonical files, ${adrFiles.length} ADR(s), and local links verified.`)
}
