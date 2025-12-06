# Workflow

All needed information about the [Git](https://git-scm.com) workflow.

## Creating a new branch

In the best case, the branch should have a short summary. This avoids conflict with other branches, that also have
similar changes.

- `git checkout -b add-docs-git-workflow main` - to create a new branch from the **main** branch

## Commit messages for the pull requests

Those commit messages are based on [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0) standards

- build: changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: changes to our CI configuration files and scripts (examples: CircleCi, SauceLabs)
- docs: documentation only changes
- feat: a new feature
- fix: a bug fix
- perf: a code change that improves performance
- refactor: a code change that neither fixes a bug nor adds a feature
- revert: changes that have been reverted
- test: adding missing tests or correcting existing tests
- BREAKING CHANGE/BREAKING CHANGES: the commits that contains **BREAKING CHANGE** or **BREAKING CHANGES** in their body
  will be considered breaking changes

## Creating a pull request

After pushing your branch, you need to create a pull request for code review and test. Select the branch from, which you
created the new branch as the target branch (at the moment **main** branch is default). The title of the pull request
can have any description.
