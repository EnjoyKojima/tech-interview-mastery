# Repository instructions

## Start every implementation from the latest `main`

- Before changing code for any implementation task, fetch `origin` and confirm the state of the working tree.
- Update from `origin/main` before implementation begins. When working directly on `main`, use a fast-forward-only pull (`git pull --ff-only origin main`).
- When using a feature branch, create it from the latest `origin/main`, or bring the branch up to date with `origin/main` before editing.
- Do not deploy or continue implementation from a stale local `main`.
- If uncommitted work or conflicts prevent a safe update, preserve the work first and resolve the situation without overwriting user changes. Do not start implementation until the latest `main` has been incorporated.

## Use a worktree and pull request for every change

- Perform every requested code or documentation change in a dedicated Git worktree created from the latest `origin/main`.
- Create a feature branch in that worktree and open a pull request targeting `main`; do not implement changes directly in the primary `main` worktree.
- Keep each worktree and pull request scoped to a single requested change.

## Let `main` deploy automatically

- Pushing or merging changes into `main` triggers the repository's automatic production deployment.
- Do not run a manual production deployment for normal pull-request work unless the user explicitly requests it or the automatic deployment is unavailable.
- Treat the pull request as the completion target for requested changes; production deployment follows after the change reaches `main`.
