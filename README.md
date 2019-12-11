<p>
    <a href="https://travis-ci.org/eBay/ebayui-core"><img src="https://api.travis-ci.org/eBay/ebayui-core.svg?branch=master" alt="Build Status" /></a>
    <a href='https://coveralls.io/github/eBay/ebayui-core?branch=master'><img src='https://coveralls.io/repos/eBay/ebayui-core/badge.svg?branch=master&service=github' alt='Coverage Status' /></a>
    <a alt='BrowserStack status' href="https://www.browserstack.com/automate/public-build/TDJIdHBrVHFTRmdhQUVFZDNLMjlHa2NlbzVtV1JBQUQ4M2V6NWV2VklUMD0tLWp4TGg0WXM2MWRvczZRQXZDdnVPS1E9PQ==--d4c94a4abb28b6aa3bf5fd56068b01e77a0952a0"><img src='https://www.browserstack.com/automate/badge.svg?badge_key=TDJIdHBrVHFTRmdhQUVFZDNLMjlHa2NlbzVtV1JBQUQ4M2V6NWV2VklUMD0tLWp4TGg0WXM2MWRvczZRQXZDdnVPS1E9PQ==--d4c94a4abb28b6aa3bf5fd56068b01e77a0952a0'/></a>
    <a href="https://david-dm.org/eBay/ebayui-core"><img src="https://david-dm.org/eBay/ebayui-core.svg" alt="Dependency status" /></a>
    <a href="https://david-dm.org/eBay/ebayui-core#info=devDependencies"><img src="https://david-dm.org/eBay/ebayui-core/dev-status.svg" alt="devDependency status" /></a>
</p>

# eBayUI Core

> Collection of Marko widgets; considered to be the core building blocks for all eBay components, pages & apps.

## Requirements

* [Node.js](https://nodejs.org/en/)
* [Marko](https://markojs.com) (v3+)
* [eBay Skin](https://ebay.github.io/skin/) (v7+)

*Note:\
Marko v3 requires [Marko Widgets v6](https://github.com/marko-js/marko-widgets)\
Marko v4 requires [Marko Widgets v7](https://github.com/marko-js/marko-widgets/tree/v7)*

*Note: eBayUI Core components utilize Marko flags and, therefore, require `<lasso-page/>` to be added to any page which will have core components. eBayUI Core presently relies on the `skin-ds6` flag to toggle designs to use the Design System 6 version of Skin.*

*Note: In order for spread attributes to work properly, `marko@3.14.5` or `marko@4.18.22` at least is required*

### Browser Policy

All components are developed and tested cross-browser using [BrowserStack](https://www.browserstack.com/automate/public-build/TDJIdHBrVHFTRmdhQUVFZDNLMjlHa2NlbzVtV1JBQUQ4M2V6NWV2VklUMD0tLWp4TGg0WXM2MWRvczZRQXZDdnVPS1E9PQ==--d4c94a4abb28b6aa3bf5fd56068b01e77a0952a0), in accordance with our official [eBay Browser Policy](https://github.com/eBay/browserslist-config).

<a alt='BrowserStack status' href="https://www.browserstack.com/automate/public-build/TDJIdHBrVHFTRmdhQUVFZDNLMjlHa2NlbzVtV1JBQUQ4M2V6NWV2VklUMD0tLWp4TGg0WXM2MWRvczZRQXZDdnVPS1E9PQ==--d4c94a4abb28b6aa3bf5fd56068b01e77a0952a0"><img src='https://www.browserstack.com/automate/badge.svg?badge_key=TDJIdHBrVHFTRmdhQUVFZDNLMjlHa2NlbzVtV1JBQUQ4M2V6NWV2VklUMD0tLWp4TGg0WXM2MWRvczZRQXZDdnVPS1E9PQ==--d4c94a4abb28b6aa3bf5fd56068b01e77a0952a0'/></a>

### Accessibility (A11Y)

We take accessibility very seriously. Very seriously indeed. Therefore, all components are built in accordance to the <a href="https://ebay.gitbooks.io/mindpatterns/content/">eBay MIND Patterns</a>. These patterns, in turn, build on from the specifications provided by the <a href="https://w3c.github.io/aria-practices/">WAI-ARIA Authoring Practices</a>.

Components are built in a layered, progressively enhanced fashion, utilizing the following resources:

* <a href="https://github.com/ianmcburnie/bones">Bones (HTML)</a>
* <a href="https://github.com/eBay/skin">eBay Skin (CSS)</a>
* <a href="https://github.com/makeup-js">MakeupJS (JavaScript)</a>

Each layer does its bit to enforce and enhance accessibility. We consider this level of support to be one of our chief selling points, and we hope you do too!

## Components

* [`ebay-badge`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-badge)
* [`ebay-breadcrumb`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-breadcrumb)
* [`ebay-button`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-button)
* [`ebay-carousel`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-carousel)
* [`ebay-checkbox`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-checkbox)
* [`ebay-combobox`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-combobox)
* [`ebay-cta-button`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-cta-button)
* [`ebay-dialog`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-dialog)
* [`ebay-expand-button`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-expand-button)
* [`ebay-filter`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-filter)
* [`ebay-filter-menu`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-filter-menu)
* [`ebay-filter-menu-button`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-filter-menu-button)
* [`ebay-icon`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-icon)
* [`ebay-infotip`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-infotip)
* [`ebay-listbox-button`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-listbox-button)
* [`ebay-menu-button`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-menu-button)
* [`ebay-notice`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-notice)
* [`ebay-pagination`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-pagination)
* [`ebay-radio`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-radio)
* [`ebay-section-title`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-section-title)
* [`ebay-select`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-select)
* [`ebay-switch`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-switch)
* [`ebay-tab`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-tab)
* [`ebay-textbox`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-textbox)
* [`ebay-tooltip`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-tooltip)
* [`ebay-tourtip`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-tourtip)

## Getting Started

The eBayUI core components are available as the `@ebay/ebayui-core` package on [NPM](https://www.npmjs.com/package/@ebay/ebayui-core).

Use npm or yarn to add the package dependency to your project:

```sh
yarn add @ebay/ebayui-core
```

### Custom Tags

Once the package dependency is added, the eBay [customs tags](https://markojs.com/docs/custom-tags/) are now available for use in your Marko templates. For example, to use an `ebay-menu` component:

#### _template.marko_

```marko
<ebay-menu text="Sort" type="radio">
    <ebay-menu-item>Price</ebay-menu-item>
    <ebay-menu-item>Time</ebay-menu-item>
    <ebay-menu-item>Distance</ebay-menu-item>
</ebay-menu>
```

On Marko v3, remember to include the component's resources in your `browser.json` file.

#### _browser.json_

```js
{
    "dependencies": [
        "@ebay/ebayui-core/ebay-menu"
    ]
}
```

### Attributes

Attributes provide initial state for a component. We can see that the menu has `text` and `type` attributes:

#### _template.marko_

```marko
<ebay-menu text="Sort" type="radio">
    <ebay-menu-item>Price</ebay-menu-item>
    <ebay-menu-item>Time</ebay-menu-item>
    <ebay-menu-item>Distance</ebay-menu-item>
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

<ebay-dialog
    open=state.dialogIsOpen
    on-dialog-open('handleDialogOpen')
    on-dialog-close('handleDialogClose')>
    ...
</ebay-dialog>
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

Events can also be handled using [Marko syntax](https://markojs.com/docs/events/) (or the legacy syntax for [Marko v3](http://v3.markojs.com/docs/marko-widgets/taglib-api/#w-on)):

#### _template.marko_

```marko
<ebay-menu text="Sort" type="radio" on-change("onMenuChange")>
    <ebay-menu-item>Price</ebay-menu-item>
    <ebay-menu-item>Time</ebay-menu-item>
    <ebay-menu-item>Distance</ebay-menu-item>
</ebay-menu>
```

## Releases &amp; Milestones

For upcoming roadmap and release history, please refer to our [releases](https://github.com/eBay/ebayui-core/releases) and [milestones](https://github.com/eBay/ebayui-core/milestones) pages.

### Versioning

The ebayui-core package follows strict [Semantic Versioning](http://semver.org).

Given a version number MAJOR.MINOR.PATCH:

* MAJOR version is incremented when we make incompatible API changes
* MINOR version is incremented when we add functionality in a backwards-compatible manner
* PATCH version is incremented when we make backwards-compatible bug fixes.

### Deprecations

Deprecations will be communicated via [release notes](https://github.com/eBay/ebayui-core/releases), so please ensure that you read those carefully. In general, expect any deprecated feature to be removed in the next major version. However, in some cases we may wait a while longer.

### Issues

Please use our [issues page](https://github.com/eBay/ebayui-core/issues) to ask questions, report issues or submit feature requests.

To help track your issue, our admins will assign it with one or more coloured labels:

* Black: Issue Type (e.g. bug, question, test case)
* White: Resolution (e.g. wont fix, invalid, duplicate)
* Gray: Status (e.g. backlog, in progress, help wanted)
* Red: Blocker (e.g. dependency, discussion, design)
* Green: Module (e.g. button, radio, dialog)
* Blue: Aspect (e.g. build, documentation, website)
* Yellow: Semver Guidance (e.g. breaking change, backwards compatible)
* Purple: Sprint (e.g. sprint 1, sprint 2, etc)

## Contributing

Looking to contribute to eBay UI? Please visit our [contributing page](CONTRIBUTING.md) for more information.

## License

Copyright (c) 2018 eBay Inc.

Use of this source code is governed by a MIT-style license that can be found in the LICENSE file or at [https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT).
