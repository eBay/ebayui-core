<p>
    <a href="https://travis-ci.org/eBay/ebayui-core"><img src="https://api.travis-ci.org/eBay/ebayui-core.svg?branch=master" alt="Build Status" /></a>
    <a href='https://coveralls.io/github/eBay/ebayui-core?branch=master'><img src='https://coveralls.io/repos/eBay/ebayui-core/badge.svg?branch=master&service=github' alt='Coverage Status' /></a>
    <a alt='BrowserStack status' href="https://automate.browserstack.com/public-build/Ry9hKzYrbzFaZDRhaVVURy9FMEg3VWhPRGxpaVlZSDNQWExYSXRUNFZEST0tLUtoQWxxOFBkMlFOVjRhUk0rN21IY2c9PQ==--0a38773d707add060a28097f5f014c7bcfcc60a1"><img src='https://automate.browserstack.com/badge.svg?badge_key=Ry9hKzYrbzFaZDRhaVVURy9FMEg3VWhPRGxpaVlZSDNQWExYSXRUNFZEST0tLUtoQWxxOFBkMlFOVjRhUk0rN21IY2c9PQ==--0a38773d707add060a28097f5f014c7bcfcc60a1'/></a>
</p>

# eBayUI Core

> Collection of Marko widgets; considered to be the core building blocks for all eBay components, pages & apps.

## Requirements

-   [Node.js](https://nodejs.org/en/)
-   [Marko](https://markojs.com) (v4+)
-   [eBay Skin](https://ebay.github.io/skin/) (v13+)

_Note: eBayUI Core components utilize Marko flags and, therefore, require `<lasso-page/>` to be added to any page which will have core components._

_Note: `@ebay/skin/global` and `@ebay/skin/marketsans` are required to be loaded by your app for all modules to load correctly._

_Note: In order for spread attributes to work properly, `marko@4.18.22` at least is required_

### Browser Policy

All components are developed and tested cross-browser using [BrowserStack](https://www.browserstack.com/automate/public-build/M1FCV3RrZHhkTG9ZaXBwWmY0VDJvZUhPM1cwM1RCZTBMRUVrODJ0MVg5Yz0tLTMyY0tGZHNKSGpTbk5DeFVURTNGNFE9PQ==--dd4c576f4331f72c56cb7f9a9f4ac4f403d34b0f), in accordance with our official [eBay Browser Policy](https://github.com/eBay/browserslist-config).

<a alt='BrowserStack status' href="https://www.browserstack.com/automate/public-build/M1FCV3RrZHhkTG9ZaXBwWmY0VDJvZUhPM1cwM1RCZTBMRUVrODJ0MVg5Yz0tLTMyY0tGZHNKSGpTbk5DeFVURTNGNFE9PQ==--dd4c576f4331f72c56cb7f9a9f4ac4f403d34b0f"><img src='https://www.browserstack.com/automate/badge.svg?badge_key=M1FCV3RrZHhkTG9ZaXBwWmY0VDJvZUhPM1cwM1RCZTBMRUVrODJ0MVg5Yz0tLTMyY0tGZHNKSGpTbk5DeFVURTNGNFE9PQ==--dd4c576f4331f72c56cb7f9a9f4ac4f403d34b0f'/></a>

### Accessibility (A11Y)

We take accessibility very seriously. Very seriously indeed. Therefore, all components are built in accordance to the <a href="https://ebay.gitbooks.io/mindpatterns/content/">eBay MIND Patterns</a>. These patterns, in turn, build on from the specifications provided by the <a href="https://w3c.github.io/aria-practices/">WAI-ARIA Authoring Practices</a>.

Components are built in a layered, progressively enhanced fashion, utilizing the following resources:

-   <a href="https://github.com/ianmcburnie/bones">Bones (HTML)</a>
-   <a href="https://github.com/eBay/skin">eBay Skin (CSS)</a>
-   <a href="https://github.com/makeup-js">MakeupJS (JavaScript)</a>

Each layer does its bit to enforce and enhance accessibility. We consider this level of support to be one of our chief selling points, and we hope you do too!

## Components

-   [`ebay-3d-viewer`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-3d-viewer)
-   [`ebay-badge`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-badge)
-   [`ebay-breadcrumbs`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-breadcrumbs)
-   [`ebay-button`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-button)
-   [`ebay-carousel`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-carousel)
-   [`ebay-checkbox`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-checkbox)
-   [`ebay-combobox`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-combobox)
-   [`ebay-cta-button`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-cta-button)
-   [`ebay-details`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-details)
-   [`ebay-drawer-dialog`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-drawer-dialog)
-   [`ebay-eek`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-eek)
-   [`ebay-fake-menu`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-fake-menu-button)
-   [`ebay-fake-menu-button`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-fake-menu-button)
-   [`ebay-fake-tabs`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-fake-tabs)
-   [`ebay-filter`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-filter)
-   [`ebay-filter-menu`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-filter-menu)
-   [`ebay-filter-menu-button`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-filter-menu-button)
-   [`ebay-fullscreen-dialog`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-fullscreen-dialog)
-   [`ebay-icon`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-icon)
-   [`ebay-infotip`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-infotip)
-   [`ebay-inline-notice`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-inline-notice)
-   [`ebay-lightbox-dialog`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-lightbox-dialog)
-   [`ebay-listbox-button`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-listbox-button)
-   [`ebay-menu`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-menu)
-   [`ebay-menu-button`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-menu-button)
-   [`ebay-page-notice`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-page-notice)
-   [`ebay-pagination`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-pagination)
-   [`ebay-panel-dialog`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-panel-dialog)
-   [`ebay-progress-bar`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-progress-bar)
-   [`ebay-progress-stepper`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-progress-stepper)
-   [`ebay-radio`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-radio)
-   [`ebay-section-notice`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-section-notice)
-   [`ebay-section-title`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-section-title)
-   [`ebay-select`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-select)
-   [`ebay-signal`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-signal)
-   [`ebay-snackbar-dialog`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-snackbar-dialog)
-   [`ebay-split-button`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-split-button)
-   [`ebay-star-rating-select`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-star-rating-select)
-   [`ebay-switch`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-switch)
-   [`ebay-tabs`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-tabs)
-   [`ebay-textbox`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-textbox)
-   [`ebay-toast`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-toast)
-   [`ebay-tooltip`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-tooltip)
-   [`ebay-tourtip`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-tourtip)

## Getting Started

The eBayUI core components are available as the `@ebay/ebayui-core` package on [NPM](https://www.npmjs.com/package/@ebay/ebayui-core).

Use npm or yarn to add the package dependency to your project:

```sh
npm add @ebay/ebayui-core
```

## Upgrading to the latest versions

See the [upgrade guide](https://github.com/eBay/ebayui-core/tree/master/UPGRADE.md) for more information

### Custom Tags

Once the package dependency is added, the eBay [customs tags](https://markojs.com/docs/custom-tags/) are now available for use in your Marko templates. For example, to use an `ebay-menu` component:

#### _template.marko_

```marko
<ebay-menu text="Sort" type="radio">
    <@item>Price</@item>
    <@item>Time</@item>
    <@item>Distance</@item>
</ebay-menu>
```

### Attributes

Attributes provide initial state for a component. We can see that the menu has `text` and `type` attributes:

#### _template.marko_

```marko
<ebay-menu text="Sort" type="radio">
    <@item>Price</@item>
    <@item>Time</@item>
    <@item>Distance</@item>
</ebay-menu>
```

Passing new attributes to an ebayui component will always reset it's internal state. If you want to persist this state yourself, events are exposed which allow you to synchronize the state into your own components, for example:

```marko
class {
    onCreate() {
        this.state = {
            dialogIsOpen: false
        }
    }

    handleDialogClose() {
        this.state.dialogIsOpen = false;
    }

    handleDialogOpen() {
        this.state.dialogIsOpen = true;
    }
}

<ebay-lightbox-dialog
    open=state.dialogIsOpen
    on-open('handleDialogOpen')
    on-close('handleDialogClose')>
    ...
</ebay-lightbox-dialog>
```

#### Pass-Through Attributes

HTML attributes can be used on any component, and they will be passed through to the most prominent tag of the component. The most prominent tag is usually the root or form control, but individual components will note if it varies for specific cases.

Example of static usage:

```marko
<ebay-button id="my-button"/>
```

For using pass-through attributes dynamically, they should be sent through the `html-attributes` attribute:

```marko
$ const myAttributes = { id: 'my-button' };
<ebay-button html-attributes=myAttributes/>
```

Static and dynamic pass-through attributes can be used simultaneously (html-attributes takes precedence in conflicts):

```marko
$ const myAttributes = { id: 'my-button' };
<ebay-button html-attributes=myAttributes type="submit"/>
```

### Events

Events can also be handled using [Marko syntax](https://markojs.com/docs/events/):

#### _template.marko_

```marko
<ebay-menu text="Sort" type="radio" on-change("onMenuChange")>
    <@item>Price</@item>
    <@item>Time</@item>
    <@item>Distance</@item>
</ebay-menu>
```

## Releases &amp; Milestones

For upcoming roadmap and release history, please refer to our [releases](https://github.com/eBay/ebayui-core/releases) and [milestones](https://github.com/eBay/ebayui-core/milestones) pages.

### Versioning

The ebayui-core package follows strict [Semantic Versioning](http://semver.org).

Given a version number MAJOR.MINOR.PATCH:

-   MAJOR version is incremented when we make incompatible API changes
-   MINOR version is incremented when we add functionality in a backwards-compatible manner
-   PATCH version is incremented when we make backwards-compatible bug fixes.

### Deprecations

Deprecations will be communicated via [release notes](https://github.com/eBay/ebayui-core/releases), so please ensure that you read those carefully. In general, expect any deprecated feature to be removed in the next major version. However, in some cases we may wait a while longer.

### Issues

Please use our [issues page](https://github.com/eBay/ebayui-core/issues) to ask questions, report issues or submit feature requests.

To help track your issue, our admins will assign it with one or more coloured labels:

-   Black: Issue Type (e.g. bug, question, test case)
-   White: Resolution (e.g. wont fix, invalid, duplicate)
-   Gray: Status (e.g. backlog, in progress, help wanted)
-   Red: Blocker (e.g. dependency, discussion, design)
-   Green: Module (e.g. button, radio, dialog)
-   Blue: Aspect (e.g. build, documentation, website)
-   Yellow: Semver Guidance (e.g. breaking change, backwards compatible)
-   Purple: Sprint (e.g. sprint 1, sprint 2, etc)

## Contributing

Looking to contribute to eBay UI? Please visit our [contributing page](CONTRIBUTING.md) for more information.

## License

Copyright (c) 2018 eBay Inc.

Use of this source code is governed by a MIT-style license that can be found in the LICENSE file or at [https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT).
