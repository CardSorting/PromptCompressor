# Security policy

PromptCompressor can process prompts, message histories, identifiers, telemetry, cache keys, and spend metadata. It does not call providers or transmit data by itself, but host applications remain responsible for protecting the data they pass into it.

## Supported versions

The latest `main` branch and the latest published package version receive security fixes. Older versions should be upgraded before investigation or deployment.

## Report a vulnerability

Please report vulnerabilities privately through [GitHub Security Advisories](https://github.com/CardSorting/PromptCompressor/security/advisories/new). Do not open a public issue for an exploitable cache-isolation, prompt-disclosure, credential, or spend-control problem.

Include:

- affected version or commit;
- a minimal reproduction without real secrets or customer data;
- impact and likely exploit path;
- any proposed mitigation or temporary guard.

Maintainers will acknowledge receipt, assess the issue, and coordinate disclosure after a fix or mitigation is available. Do not include API keys, unredacted prompts, personal data, or provider credentials in reports.

## Security boundaries

- The package has no network or provider credentials; a host must secure its adapters.
- Semantic-cache keys must be tenant-aware and must not expose raw sensitive prompts.
- Process-local caches, WAL/CAS helpers, leases, and analytics are not automatically durable or access-controlled.
- The host must validate provider usage, model routing, retries, and spend alerts before treating them as authoritative.
- High-risk compaction should use `BroccoliCompactionFacade` and preserve the original source for verification.

See [docs/OPERATIONS.md](docs/OPERATIONS.md), [docs/LICENSING.md](docs/LICENSING.md), and [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for operational and ownership boundaries.
