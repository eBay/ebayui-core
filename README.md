[![eBay UI CI](https://github.com/eBay/ebayui-core/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/eBay/ebayui-core/actions/workflows/node.js.yml)
[![Coverage Status](https://coveralls.io/repos/github/eBay/ebayui-core/badge.svg?branch=master)](https://coveralls.io/github/eBay/ebayui-core?branch=master)

# eBayUI Core

> Collection of Marko widgets; considered to be the core building blocks for all eBay components, pages & apps.

## Requirements

- [Node.js](https://nodejs.org/en/)
- [Marko](https://markojs.com) (v4+)
- [eBay Skin](https://ebay.github.io/skin/) (v16+)

_Note: eBayUI Core components utilize Marko flags and, therefore, require `<lasso-page/>` to be added to any page which will have core components._

_Note: `@ebay/skin/global` and `@ebay/skin/marketsans` are required to be loaded by your app for all modules to load correctly._

_Note: In order for spread attributes to work properly, `marko@4.18.22` at least is required_

### Browser Policy

All components are developed and tested cross-browser using [BrowserStack](https://www.browserstack.com/automate/public-build/M1FCV3RrZHhkTG9ZaXBwWmY0VDJvZUhPM1cwM1RCZTBMRUVrODJ0MVg5Yz0tLTMyY0tGZHNKSGpTbk5DeFVURTNGNFE9PQ==--dd4c576f4331f72c56cb7f9a9f4ac4f403d34b0f), in accordance with our official [eBay Browser Policy](https://github.com/eBay/browserslist-config).

<a alt='BrowserStack status' href="https://www.browserstack.com/automate/public-build/M1FCV3RrZHhkTG9ZaXBwWmY0VDJvZUhPM1cwM1RCZTBMRUVrODJ0MVg5Yz0tLTMyY0tGZHNKSGpTbk5DeFVURTNGNFE9PQ==--dd4c576f4331f72c56cb7f9a9f4ac4f403d34b0f"><img src='https://www.browserstack.com/automate/badge.svg?badge_key=M1FCV3RrZHhkTG9ZaXBwWmY0VDJvZUhPM1cwM1RCZTBMRUVrODJ0MVg5Yz0tLTMyY0tGZHNKSGpTbk5DeFVURTNGNFE9PQ==--dd4c576f4331f72c56cb7f9a9f4ac4f403d34b0f'/></a>

### Accessibility (A11Y)

We take accessibility very seriously. Very seriously indeed. Therefore, all components are built in accordance to the <a href="https://ebay.gitbooks.io/mindpatterns/content/">eBay MIND Patterns</a>. These patterns, in turn, build on from the specifications provided by the <a href="https://w3c.github.io/aria-practices/">WAI-ARIA Authoring Practices</a>.

Components are built in a layered, progressively enhanced fashion, utilizing the following resources:

- <a href="https://github.com/ianmcburnie/bones">Bones (HTML)</a>
- <a href="https://github.com/eBay/skin">eBay Skin (CSS)</a>
- <a href="https://github.com/makeup-js">MakeupJS (JavaScript)</a>

Each layer does its bit to enforce and enhance accessibility. We consider this level of support to be one of our chief selling points, and we hope you do too!

## Components

- [`ebay-3d-viewer`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-3d-viewer)
- [`ebay-alert-dialog`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-alert-dialog)
- [`ebay-avatar`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-avatar)
- [`ebay-badge`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-badge)
- [`ebay-breadcrumbs`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-breadcrumbs)
- [`ebay-button`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-button)
- [`ebay-calendar`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-calendar)
- [`ebay-carousel`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-carousel)
- [`ebay-character-count`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-character-count)
- [`ebay-checkbox`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-checkbox)
- [`ebay-chip`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-chip)
- [`ebay-combobox`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-combobox)
- [`ebay-cta-button`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-cta-button)
- [`ebay-date-textbox`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-date-textbox)
- [`ebay-details`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-details)
- [`ebay-drawer-dialog-deprecated`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-drawer-dialog-deprecated)
- [`ebay-eek`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-eek)
- [`ebay-fake-link`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-fake-link)
- [`ebay-fake-menu`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-fake-menu)
- [`ebay-fake-menu-button`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-fake-menu-button)
- [`ebay-fake-tabs`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-fake-tabs)
- [`ebay-filter`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-filter)
- [`ebay-filter-menu`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-filter-menu)
- [`ebay-filter-menu-button`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-filter-menu-button)
- [`ebay-fullscreen-dialog-deprecated`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-fullscreen-dialog-deprecated)
- [`ebay-icon`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-icon)
- [`ebay-icon-button`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-icon-button)
- [`ebay-infotip`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-infotip)
- [`ebay-inline-notice`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-inline-notice)
- [`ebay-lightbox-dialog`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-lightbox-dialog)
- [`ebay-list`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-list)
- [`ebay-listbox-button`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-listbox-button)
- [`ebay-menu`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-menu)
- [`ebay-menu-button`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-menu-button)
- [`ebay-page-notice`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-page-notice)
- [`ebay-pagination`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-pagination)
- [`ebay-panel-dialog`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-panel-dialog)
- [`ebay-phone-input`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-phone-input)
- [`ebay-progress-bar`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-progress-bar)
- [`ebay-progress-bar-expressive`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-progress-bar-expressive)
- [`ebay-progress-spinner`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-progress-spinner)
- [`ebay-progress-stepper`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-progress-stepper)
- [`ebay-radio`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-radio)
- [`ebay-section-notice`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-section-notice)
- [`ebay-section-title`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-section-title)
- [`ebay-segmented-buttons`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-segmented-buttons)
- [`ebay-select`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-select)
- [`ebay-signal`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-signal)
- [`ebay-skeleton`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-skeleton)
- [`ebay-snackbar-dialog`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-snackbar-dialog)
- [`ebay-split-button`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-split-button)
- [`ebay-star-rating`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-star-rating)
- [`ebay-star-rating-select`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-star-rating-select)
- [`ebay-switch`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-switch)
- [`ebay-tabs`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-tabs)
- [`ebay-textbox`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-textbox)
- [`ebay-toast-dialog`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-toast-dialog)
- [`ebay-toggle-button`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-toggle-button)
- [`ebay-toggle-button-group`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-toggle-button-group)
- [`ebay-tooltip`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-tooltip)
- [`ebay-tourtip`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-tourtip)
- [`ebay-tri-state-checkbox`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-tri-state-checkbox)
- [`ebay-video`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-video)

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

- MAJOR version is incremented when we make incompatible API changes
- MINOR version is incremented when we add functionality in a backwards-compatible manner
- PATCH version is incremented when we make backwards-compatible bug fixes.

### Deprecations

Deprecations will be communicated via [release notes](https://github.com/eBay/ebayui-core/releases), so please ensure that you read those carefully. In general, expect any deprecated feature to be removed in the next major version. However, in some cases we may wait a while longer.

### Issues

Please use our [issues page](https://github.com/eBay/ebayui-core/issues) to ask questions, report issues or submit feature requests.

To help track your issue, our admins will assign it with one or more coloured labels:

- Black: Issue Type (e.g. bug, question, test case)
- White: Resolution (e.g. wont fix, invalid, duplicate)
- Gray: Status (e.g. backlog, in progress, help wanted)
- Red: Blocker (e.g. dependency, discussion, design)
- Green: Module (e.g. button, radio, dialog)
- Blue: Aspect (e.g. build, documentation, website)
- Yellow: Semver Guidance (e.g. breaking change, backwards compatible)
- Purple: Sprint (e.g. sprint 1, sprint 2, etc)

## Contributing

Looking to contribute to eBay UI? Please visit our [contributing page](CONTRIBUTING.md) for more information.

## License

Copyright (c) 2018 eBay Inc.

Use of this source code is governed by a MIT-style license that can be found in the LICENSE file or at [https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT).

USE OF SOME COMPONENTS REQUIRES A SEPARATE, NON-OPEN-SOURCE LICENSE FROM THIRD PARTIES

The data visualization components and the charting components of the eBayUI library are designed to use one or more HighCharts® software products. HighCharts® is a registered trademark of HighSoft AS. HighSoft AS is not affiliated with Ebay. Ebay provides no warranties of any kind (e.g., of merchantability, fitness for a particular purpose, and noninfringement), whether express or implied, with respect to the HighCharts® software products that the data visualization components and the charting components are designed to use.

COMMERCIAL USE OF HIGHCHARTS® SOFTWARE PRODUCTS REQUIRES A PAID LICENSE PROVIDED BY HIGHSOFT AS. While many components of the eBayUI library are licensed under the MIT License, the HighCharts® software products which the data visualization components and charting components of the EbayUI library are designed to use are NOT licensed under the MIT License or any other open source license. Rights pertaining to HighCharts® software products (e.g., including, but not limited to, rights to use, install, distribute, publish, merge, duplicate, and modify) are governed by the terms of one or more proprietary license agreements that are available online at http://www.highcharts.com or by the terms of custom license agreements that HighSoft AS may negotiate with its customers at its own discretion. While HighSoft AS may choose to license HighCharts® software products for non-commercial use at no cost, IT IS THE RESPONSIBILITY OF ANY PARTY THAT WISHES TO USE HIGHCHARTS® SOFTWARE PRODUCTS TO VERIFY THE TERMS OF SUCH A LICENSE WITH HIGHSOFT AS. NOTWITHSTANDING ANY PROVISION OF THIS LICENSE, PARTIES WHO ARE NOT LICENSED BY HIGHSOFT AS (OR ITS SUCCESSORS OR ASSIGNS) TO USE HIGHCHARTS® SOFTWARE PRODUCTS ARE NOT LICENSED TO USE THE DATA VISUALIZATION COMPONENTS AND THE CHARTING COMPONENTS OF THE EBAYUI LIBRARY.

This notice shall be included in all copies or substantial portions of the Software.
