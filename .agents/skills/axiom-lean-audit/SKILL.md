---
name: axiom-lean-audit
description: Whole-repo AXIOM audit for bloat, stale copied setup, unnecessary dependencies, speculative abstractions, and duplicated systems. Produces a ranked report and does not apply fixes.
---

# Audit AXIOM For Lean Complexity

Scan the repository for work AXIOM can avoid owning. Rank the biggest practical
cleanup opportunities first.

Focus on:

- stale copied AI setup, docs, or plugin fragments that contradict AXIOM;
- dependencies, generated caches, build assumptions, or services outside the
  static Three.js architecture;
- duplicate modules or flows for navigation, lessons, experiments, journal,
  Atlas, storage, or rendering;
- abstractions and config that exist for hypothetical future use;
- content volume that increases counts without authored mathematical value;
- `axiom-lean:` comments whose revisit trigger has arrived.

Do not edit during the audit. Report:

`tag - what to cut or simplify - replacement - path`

Use tags: `delete`, `reuse`, `native`, `yagni`, `shrink`, `docs`, `debt`.
End with a compact estimate such as `net: -N files, -M lines possible` only
when the estimate is grounded in inspected files.
