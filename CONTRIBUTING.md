# Contributing

This page contains instructions and guidelines for anybody contributing code to the eBayUI project.

## Table of Contents

* [Development](#development)
* [Pull Requests](#pull-requests)
* [Branching Strategy](#branching-strategy)
* [Unit Tests](#unit-tests)
* [Definition of Done](#definition-of-done)
* [Releases](#releases)

## Development

This section includes information on system requirements, running the local server, tests and package scripts.

### System Requirements

* [Node.js](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/en/)

Clone this repo to your local environment then run `yarn` to install all dependencies.

### Local Server

Execute `yarn start` to start the local web server at [http://localhost:3000](http://localhost:3000). This is a quick method to run and debug code, but it will only work in modern browsers since it does not include transpilation.

For debugging older browsers, the demo can be run against transpiled source code via `yarn start:prod`.

The demo page will render the `examples/` for each component. To selectively include certain examples for debugging, add `.only` to their folder names.

### Tests

Execute `yarn test` to run all tests and generate coverage reports at `./coverage/index.html`.

### Marko Lifecycle Functions

Because eBayUI components are written in Marko, the component files may contain many of the Marko lifecycle functions. Within a given component's `index.js` file you will find the lifecycle functions intermixed with the component functions. Documentation on these functions can be found in the [Marko documentation on lifecycle events](http://v3.markojs.com/docs/marko-widgets/component-lifecycle/).

### Package Scripts

Execute `yarn run`, or check the "scripts" section of `package.json` to view all available utility scripts.

Please ensure all scripts in `package.json` are Unix *and* Windows friendly.

### Continuous Integration (CI)

To ensure that all components function correctly in both Marko v3 and v4, we run our entire test suite against both versions. This requires automated installation of Marko versions, and is best executed in the CI (to avoid conflicting with local environments). The CI runs a specific `build:ci` task in the NPM scripts for this purpose.

By default when in the CI all browser tests will be ran against the supported list of browsers using [BrowserStack](http://browserstack.com). If you would like to manually test with your own BrowserStack account you can do so by adding a `.env` file to the root of this project with the following environment variables:

```bash
BUILD_NUMBER="local"
REPO_SLUG="ebay/ebayui-core"
BROWSERSTACK_USER="YOUR BROWSERSTACK USERNAME"
BROWSERSTACK_ACCESS_KEY="YOUR BROWSERSTACK ACCESS KEY"
```

Finally run `yarn test:browserstack` to begin the tests.

## Pull Requests

This section contains information and etiquette regarding pull requests (or "PRs" as they are often called).

### Before You Start

If you are creating a new component or significantly altering an existing one, please ensure that an issue has been created *before* you start any work, and that it has been assigned to you. The same goes for any big new additions or changes to the project structure, CI or documentation.

We want to avoid cases where developers build something that does not align with our wants & needs. We also want to be able to carefully plan our sprint and test cycles with minimal disruption. We especially want to avoid cases where two developers duplicate work.

### Writing Code

The contents of a pull request should be related to a single issue only (or, at most, perhaps two very closely related issues). The reviewer has the right to reject a pull request that contains anything non-issue related.

Whilst it may be tempting to fix any other [broken windows](https://www.rtuin.nl/2012/08/software-development-and-the-broken-windows-theory/) that you encounter, it can distract the reviewer from the main issue at hand, make their job more time-consuming and increase the chance of regressions. Remember too, if the main issue were to get rolled back (for whatever reason), then there is a good chance that your non-related fixes would get rolled back along with it too. Which is probably not what anyone wants. So please be a good citizen and create separate issues or pull requests for the broken windows that you find.

### Moving Code

Please try and isolate "noisy" commits that only *move* many files or lines of code, from commits that actually modify code logic. The reviewer has the right to reject a pull request that is difficult to reason with due to too much *unnecessary* noise in the diff.

For example, assuming moving some code doesn't put the app into a broken state, the move can be considered a safe atomic commit (e.g. "moved functions x, y and z to bottom of file"). The actual *fixes* to functions x, y and z can then be made in a follow up commit (e.g. "fixed functions x, y and z") which will be easier for the reviewer to diff.

### Avoiding Conflicts

It is your responsibility to ensure that your feature branch has no merge conflicts with it's base branch. A pull request created and sent for review containing many conflicts does not inspire confidence in the reviewer.

The best way to ensure there are no conflicts is by keeping your branch up to date with it's base branch and resolving any conflicts in your own branch early & often. You may do this either by rebasing or merging. If you are the only developer working in the feature branch (you need to be sure), it is usually better to rebase. If another developer is sharing your branch, then merging is the safer option (as it doesn't require a force push).

If you are working on a large feature, that takes many days, then there is a good chance that the base branch will have received many other commits during that time. If you wait till the very end you may find you have to deal with some difficult merge conflicts. On the other hand, if your pull request was created quickly and only touches a small surface area, then more than likely you will not run into any conflicts at the time the pull request is created. It doesn't hurt to keep a watchful eye on the base branch though.

### Commit History

Whilst having multiple "work in progress", "almost done" and "merged branch" type commits in a feature branch is fine, we wish to refrain from them polluting the milestone and master branch history. On the flip side, although rarer in comparison, we might also have some *atomic* commits in our feature branch that we absolutely wish to keep as part of the project history.

Before creating your pull request you have two options regarding what to do with the commit history of your feature branch:

1. Squash all superfluous commits. If more than 1 commit remains, then clearly label your PR as "do not squash" in order to keep this commit history. Any subsequent commits to the branch (i.e. those made after code review) may also need squashing by you.
1. Do not squash any commits and clearly mark your PR as "must squash" to indicate to the reviewer that you do not wish to keep any commit history. If you wish to keep any subsequent commits (i.e. after code review), you will now need to switch tracks to option 1 above.

If a pull request is received with a bewildering commit history that is difficult to reason with (e.g. 10+ commits containing obscure commit messages, previously committed code, old branch merges, etc), it will most likely be deemed too risky and therefore closed immediately.

### Merging the Pull Request

An admin will merge or squash the pull request when it receives two approvals. Please try to avoid committing any more code at this point unless it is absolutely necessary, as this may invalidate the prior approvals (depending on branch settings).

The final commit message should include a reference to the pull request number. Commit descriptions are optional/rare and should be kept short. GitHub will by default annotate the description with a list of all commits in the pull request - this description is unnecessary and should be deleted.

## Branching Strategy

Members of the eBayUI team must work in the main repository. Non-members must work in their own fork.

Do not attempt to commit feature work directly to the master branch. Pushes to the master branch  should only be used for important corrections to the documentation or website. The master branch **always** reflects the current production facing code.

All other branches are "milestone" branches or "issue" branches.

Every milestone branch must be created from the master branch. The branch name must match the milestone name, For example, when beginning work on the 2.9.0 release, a "2.9.0" milestone branch would be created from the master branch.

Work for every issue must go in it's own branch. The branch name will match the issue number. For example, for issue number 202, a branch named "202" would be created. Remember: more than one developer may work in an issue branch, so please be courteous!

Issue branches must be created from the relevant milestone branch. For example, if issue 202 will go out in the v2.6.7 milestone, then the 202 issue branch must be created from the 2.6.7 milestone branch. This helps to keep any rebasing sane.

<strike>When work on an issue branch is complete and committed upstream, the Travis CI job must successfully run on that branch.</strike>

When all milestone issues are complete, and merged into the milestone branch, an admin will either perform a pre-release, or they will merge the milestone branch into the master branch in preparation for a final release.

A milestone branch will be deleted after it has been merged into master. There is no need to keep these milestone branches lying around, as we can go back to any point in time using git tags.

With this strategy, there are rarely more than a handful of branches at any one moment in time:

* master branch (reflects current production code/release)
* next minor or major milestone branch
* next patch milestone branch
* *n* number of feature/issue branches (usually 1 - 3)

## Unit Tests

Each component has two suites of unit tests: server-side tests & client-side tests.

Our unit tests follow the "black-box" approach. We test only the exposed, public API. We do not explicitly test the internal, private methods. Private methods are considered to be tested *implicitly* whenever we test part of the public API (which can be evidenced via code coverage reports).

Server side testing is predominantly concerned with the testing of *rendering*. Given an input of a marko tag and it's attributes, we test that the rendered output matches our expected outcome.

Browser side testing is predominantly concerned with the testing of *state*. For this we follow the Given-When-Then approach (i.e. *given* a component is in a well-defined state, *when* a well-defined action is performed on it, *then* we assert that it meets the expected outcome).

For both types of tests, please observe the following golden rules:

* A test should only test one thing
    * Watch out for the words 'and' & 'or' in your test description!
* A test should not contain conditional logic
    * We don't want to have to write tests for our tests!
* A test description should avoid interpolated strings
    * Test descriptions should be human readable (readable != parsable)

Above all, all aspects of a test should be human readable. A simple litmus test for this is that anybody should be able to read the test and, within a few seconds, be able to tell you what the *purpose* of the test is. If they are confused, or ask questions, then it is not a well written test. Go back and refactor!

## Definition of Done

A component is considered "done", and ready for merge into release branch, when the following 3 checkpoints have been satisfied:

1) Foundational layer review

* Visual design (DS6)
* Markup structure (Bones)
* Accessibility pattern (MIND)
* CSS (Skin)

2) Component layer review

* Tag API
* Event API
* Unit tests
* Integration test
* Performance test
* Documentation

3) Code review

* Linter should catch syntax and style issues
* Prefer performance over readability
* Prefer readability over "space saving" code
* Apply the single-responsibility principle to functions
* Refactor long functions into several small functions
* Identify and move common utility functions to libraries or static methods
* All CSS should come from Skin

## Releases

All major and minor releases should be preceded by one or more pre-releases.

All releases should be tagged in git (`npm version` does this for you), and that tag pushed to GitHub (e.g. `git push origin v1.0.0`). From that tag, a Git release should be created.

Pre-releases must be published to NPM from a milestone branch using the `npm publish --tag beta` command.

Final releases must be published to NPM from the `master` branch.

After every major and minor release, please take the opportunity to upgrade any outdated dependencies and devDependencies (*hint*: run `yarn outdated` to see outdated dependencies). Except for major version upgrades, the version in `package.json` should always reflect the last known working version, not the version you are upgrading to.

More information to follow.
