---
name: axiom-lean-debt
description: Collect AXIOM's deliberate lean shortcuts marked with `axiom-lean:` comments into a debt ledger. Use when asked what shortcuts were deferred or what lean debt remains. Does not edit unless explicitly asked to write the ledger.
---

# Collect AXIOM Lean Debt

Search the repo for `axiom-lean:` comment markers, excluding `.git`,
`node_modules`, and generated caches. Each marker should name the shortcut's
ceiling and the trigger to revisit it.

Report one row per marker:

`path:line - shortcut - ceiling - revisit trigger`

Flag any marker that lacks a concrete trigger as `no-trigger`.
If none are found, say `No axiom-lean debt. Clean ledger.`

This is read-only unless the user explicitly asks to persist the ledger.
