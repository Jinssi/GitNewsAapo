# GitNews API

> Blazingly fast changelog aggregation. Also blazingly insecure. We only budgeted for one adverb.

[![build](https://img.shields.io/badge/build-works%20on%20my%20machine-yellow)](#)
[![coverage](https://img.shields.io/badge/coverage-vibes-informational)](#)
[![security](https://img.shields.io/badge/security-see%20below-critical)](#)

## STOP

This repo is a **deliberately vulnerable demo**. Every flaw in here was put there on purpose
by someone who was paid to do it. Do not deploy this. Do not copy from it. Do not let it
near a network you like.

If you found this repo by searching "express mysql query example" — I am so sorry. Close the tab.
Go read the docs. Be better than me.

## What it does

Aggregates changelogs. Serves them over HTTP. Accepts user input with the trusting
enthusiasm of a golden retriever.

```bash
npm install   # 9 packages are looking for work. 9 packages have found it.
npm start
```

## Features

| Endpoint | What we told the PM | What it actually is |
|---|---|---|
| `GET /search` | Fast full-text search | A shell prompt with extra steps |
| `GET /reports/updates` | Flexible sorting | Your database, but everyone's |
| `GET /files/download` | CSV export | `cat` as a service |
| `GET /proxy/preview` | Link previews | A very polite request forgery |
| `GET /proxy/out` | Outbound links | Wherever the internet wants, honestly |

## Architecture

```
request ──> express ──> string concatenation ──> hope
```

We considered parameterized queries. We considered them for about four seconds.

## Dependency policy

Our `package.json` is a museum. Every version in there was current during a
different geopolitical era. `lodash@4.17.15` has seen things.

We pin exact versions because we believe in **stability**, and nothing is more
stable than a package that stopped receiving security patches in 2020.

Dependabot has opinions about this. Dependabot is correct. Dependabot is also
somehow at 47 unread PRs.

## Security

We hash passwords with MD5, because it's fast, and speed is a feature.

Session tokens come from `Math.random()`. The name has "random" in it. Case closed.

The JWT signing secret is committed to this repository. This means every developer
has access to it, which is basically zero-trust if you squint. Onboarding is instant.

> **Threat model:** nobody would do that.

## Contributing

1. Open a PR.
2. CodeQL comments on it.
3. Copilot also comments on it.
4. Reflect on your choices.
5. Click "Autofix" and pretend steps 2 through 4 didn't happen.

Commit messages must be written in the present tense and the passive voice, so no
one can be held accountable. "Mistakes were made to the auth module."

## FAQ

**Q: Is this production ready?**  
A: It's in production. Those are different questions.

**Q: Why is `ORDER BY` concatenated directly into the query?**  
A: You can't parameterize a column name. So I gave up on the whole line. This is
called *consistency*.

**Q: There's an XSS in the search results page.**  
A: That's not a question.

**Q: Why does `/proxy/preview` fetch any URL I give it?**  
A: It's a *preview*. It previews. What did you want, discretion?

**Q: How did this pass code review?**  
A: It didn't. That's the demo.

## License

MIT, which is Latin for "you were warned."
