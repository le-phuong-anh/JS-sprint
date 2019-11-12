# Git

## 1. Flow

```
$ git checkout -b <BRANCH_NAME>
code...
$ git add .
$ git commit -m "<MESSAGES>"
$ git checkout develop
$ git fetch <origin OR upstream>
$ git pull <origin OR upstream>
$ git checkout <BRANCH_NAME>
$ git merge develop
$ git push <origin OR upstream>
```

## 2. Check status

```
$ git log --oneline    /* log of all commits and its ID*/
$ git status           /* status of stage & commit */
$ git remote -v        /* check existing remote */
$ git remote add <REMOTE_ALIAS> <REPOSITORY_URL>
$ git remote remove <REMOTE_ALIAS>
```

## 3. Others

```
$ git branch                 /* see existing branches */
$ git clone <REPOSITORY_URL> /* download repo to computer */
$ git init                   /* create hidden .git folder */
```
