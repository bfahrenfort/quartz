---
title: You Don't Need GitHub CLI - a Translation Guide
tags:
  - programming
  - project
  - toc
  - glossary
  - misc
date: 2026-04-23
lastmod: 2026-04-23
draft: false
---
GitHub CLI has begun opting all users into telemetry. Not a fan. Here's how to do everything you use it for, without using the `gh` utility.

## Quick Reference

| `gh` Command                              | Alternative                                                                                                                                                                  |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `gh auth login`                           | SSH config; see below                                                                                                                                                        |
| `gh auth switch`                          | Local repository configuration; see below                                                                                                                                    |
| `gh alias`                                | Shell alias, alternatively `git config --global alias.<alias name>`                                                                                                          |
| `gh api`                                  | Web requests; `curl`                                                                                                                                                         |
| `gh agent-task`, `gh copilot`, `gh skill` | Learn programming                                                                                                                                                            |
| `gh browse`                               | Consider [git-open](https://github.com/paulirish/git-open)                                                                                                                   |
| `gh codespace`                            | Uncertain; if you need a replicable development environment consider [devcontainers](https://containers.dev/)? Or just open the browser if you need specifically a codespace |
| `gh completion`                           | Your shell has completions for git commands; e.g. [zsh](https://git-scm.com/book/id/v2/Appendix-A:-Git-in-Other-Environments-Git-in-Zsh)                                     |
| `gh issue`                                | Not really                                                                                                                                                                   |
| `gh pr checkout`                          | `git fetch origin pull/<pr number>/head:<name of new local branch> && git switch <name of new local branch>`                                                                 |
| `gh pr <most others>`                     | Not really                                                                                                                                                                   |
| `gh search code`                          | For local code, try [ripgrep](https://github.com/burntsushi/ripgrep) or [fzf](https://github.com/junegunn/fzf); not really an alternative for searching all of GitHub        |
## Authentication
For simple use cases (single account), it's very simple to have your SSH agent handle authentication for you.

Ensure the OpenSSH Authentication Agent (not an AI agent, just an always-on lightweight program/daemon) runs on startup with a system service; Powershell `Set-Service ssh-agent -StartupType Automatic` or `systemctl --user enable --now ssh-agent.service`.

Generate a key: `ssh-keygen -t ed25519 -C "your_email@example.com"
Add the public key to your GitHub account.

Tell git what account you are: `git config --global user.name "name"`
Tell git your email address: `git config --global user.email "email"`

Create a file named `config` in your ssh configuration folder. On linux this will likely be `~/.ssh/config`; Windows it may likely be in the same place.
```
Host github.com
  User git
  IdentityFile <filepath of your key file>
```

Now, whenever you want to push to a repo, make sure the upstream you want to push to is SSH formatted: `git remote set-url origin git@github.com:user/repo.git`. Pull and push will use the SSH key you set to authenticate!
### Multiaccount
Important step: **Unset your global name and email.**
`git config --global --unset user.name` 
`git config --global --unset user.email` 

For each account, create and add an SSH key, as well as an SSH config:
```
# user 1
Host <something unique, e.g. github-user1>
  HostName github.com
  User git
  IdentityFile <filepath>

# user 2
Host <something else unique>
  HostName github.com
  User git
  IdentityFile <another filepath>
```

In a repo you want to use user1 in: `git config user.name "user1"` and corresponding email. 
In the repo for user 1: `git remote set-url origin git@github-user1:user/repo.git`

Similar process for repos for user2! This can be automated with any shell script.
