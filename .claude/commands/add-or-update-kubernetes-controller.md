---
name: add-or-update-kubernetes-controller
description: Workflow command scaffold for add-or-update-kubernetes-controller in sealos.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /add-or-update-kubernetes-controller

Use this workflow when working on **add-or-update-kubernetes-controller** in `sealos`.

## Goal

Adds a new Kubernetes controller or updates an existing one, including CRDs, controller logic, manifests, and documentation.

## Common Files

- `controllers/*/api/v1/*_types.go`
- `controllers/*/config/crd/bases/*.yaml`
- `controllers/*/controllers/*.go`
- `controllers/*/deploy/*`
- `controllers/*/config/manager/*.yaml`
- `controllers/*/README.md`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Create or update API type definitions (e.g., *_types.go)
- Update or add CRD YAMLs under config/crd/bases/
- Implement or update controller logic in controllers/xxx/controllers/
- Update or add deployment manifests (deploy/, config/manager/, etc.)
- Update Makefile, Dockerfile, and PROJECT files as needed

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.