---
header: "Lesson 3.1: Git"
marp: true
theme: default
size: 16:9
paginate: true
color: #111
backgroundColor: #eee
_footer: "@2026 Ludvig Alvir"
---

# Git

---

## Using the console

- cd (change directory "/"-root "~/"-home "./"-current position)
- ls (list files)
- mkdir (make directory)
- rm (remove files)
- touch (create a new file)
- code . (open VS Code in the current directory)

---

## What is Git?

- A version control system
- Tracks changes in source code during software development
- Allows multiple developers to work on a project simultaneously

---

## Markdown

```markdown
# This is a heading

This is a paragraph with **bold** text and _italic_ text.

- List item 1
- List item 2

1. First item
2. Second item

## This is a subheading

We use Markdown to format text in a simple and readable way.
Typically used in README files.
```

---

# Git Commands

---

## git add

- Stages changes for the next commit
- Usage: `git add <file>` or `git add .` to stage all changes

---

## git commit

- Records staged changes to the repository
- Usage: `git commit -m "Commit message"`

---

## git push

- Uploads local commits to a remote repository
- Usage: `git push origin <branch-name>`

---

## git pull

- Fetches and merges changes from the remote repository to the local branch
- Usage: `git pull origin <branch-name>`

---

## git checkout

- Switches branches or restores working tree files
- Usage: `git checkout <branch-name>`
- To create and switch to a new branch: `git checkout -b <new-branch-name>`

---

## git branch

- Lists, creates, or deletes branches
- Usage:
  - List branches: `git branch`
  - Create a new branch: `git branch <new-branch-name>`
  - Delete a branch: `git branch -d <branch-name>`

---

## git merge

- Combines changes from one branch into another
- Usage: `git merge <branch-name>`
- Make sure to be on the branch you want to merge into before running the command
- Example: `git checkout main` then `git merge <branch-name>`
