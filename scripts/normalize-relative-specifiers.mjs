import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const sourceRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src');

function collect(directory) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...collect(entryPath));
    } else if (entry.isFile() && entry.name.endsWith('.ts')) {
      files.push(entryPath);
    }
  }
  return files;
}

const relativeSpecifier = /((?:from\s+|import\s*(?:\(\s*)?)["'])(\.\.?\/[^"']+)(["'])/g;
const explicitExtension = /\.(?:[cm]?js|json|css|tsx?|jsx?)$/;

for (const filePath of collect(sourceRoot)) {
  const before = fs.readFileSync(filePath, 'utf8');
  const after = before.replace(relativeSpecifier, (match, prefix, specifier, suffix) => {
    if (explicitExtension.test(specifier)) return match;
    return `${prefix}${specifier}.js${suffix}`;
  });

  if (after !== before) {
    fs.writeFileSync(filePath, after);
  }
}
