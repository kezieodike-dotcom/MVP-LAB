# Git Collaboration Guide for MVP-LAB

Welcome to the team! To keep our codebase clean and stable, we follow a simple Git workflow.

## 1. Local Setup
Ensure you have the latest code before starting work:
```bash
git checkout main
git pull origin main
```

## 2. Branching Strategy
**Never work directly on `main`.** Always create a descriptive feature branch:
- Format: `feature/short-description` or `fix/issue-name`
- Example: `git checkout -b feature/user-profile-page`

## 3. Atomic Commits
Make small, meaningful commits with clear messages:
```bash
git add .
git commit -m "feat: add user profile header component"
```

## 4. Synchronizing
Push your branch to GitHub to share your progress:
```bash
git push origin feature/user-profile-page
```

## 5. Pull Requests (PRs)
When your task is complete:
1. Go to the [GitHub Repository](https://github.com/kezieodike-dotcom/MVP-LAB).
2. Create a "Pull Request" from your branch to `main`.
3. Ask a teammate (or Antigravity) to review your code.
4. Once approved, merge the PR and delete your remote branch.

## 6. Keeping Branches Updated
If `main` moves ahead while you are working, rebase or merge `main` into your branch:
```bash
git checkout feature/user-profile-page
git fetch origin
git merge origin/main
```
