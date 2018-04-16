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

## Pull Requests

Please ensure an issue exists in GitHub before writing any code. Every pull request must have an associated issue for tracking and triage purposes.

Please always ensure the correct target branch for your pull request (see Branching Strategy below).

### PR Etiquette

The contents of a pull request should be related to a single issue only. The reviewer has the right to reject a pull request that contains anything non-issue related. Whilst tempting to fix any "broken windows" that you encounter, it makes the reviewer's job more time-consuming.

The pull request should contain only a single commit. Please squash all commits before sending your pull request. The reviewer has the right to reject a pull request that hasn't been squashed appropriately. Squashing into a single commit makes the reviewer's job less time consuming, as they rarely care about the steps and "diffs" along the way, only the final code.

The commit message should include a reference to the issue number. A commit description, if present (rarely), should be short. Note that when merging or squashing a pull request, GitHub will by default annotate the description with a list of all commits in the PR - please be sure to delete this list from the description.

In general, the idea is to keep PR's small and manageable.

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

Pre-releases must be published to NPM from a milestone branch.

Final releases must be published to NPM from the `master` branch.

More information to follow.
