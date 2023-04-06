# Finigami OTP login task

This is a software intended to run a task for Finigami OTP login task.

## Installation

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install the dependencies.

```bash
npm i
```

## Deployments

We have one live environment ( ````production```` ). Hosted in vercel
via CI/CD pipeline. To push changes in dev we directly push to the ````dev```` branch, to push in production we push in
````main```` branch

Domain for ````prod```` environment is <https://finigami-login-app-task.vercel.app/>

## Contribution Guidelines

Whenever working on a new feature

* Please pull dev branch to have the latest stable code
* Create a new ````feature_branch````
* After feature is completed and dev tested
* Perform rebase from dev branch

```bash
git rebase dev
```

* Raise a PR to dev branch and fix conflicts if any via

```bash
git pull origin dev
```

* After PR is approved by [jyotirsharma](https://github.com/jyotirsharma) will merge it in dev
* Check the deployment in <https://finigami-login-app-task.vercel.app/>
