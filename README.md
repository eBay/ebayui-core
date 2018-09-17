<p>
    <a href="https://travis-ci.org/eBay/ebayui-core"><img src="https://api.travis-ci.org/eBay/ebayui-core.svg?branch=master" alt="Build Status" /></a>
    <a href='https://coveralls.io/github/eBay/ebayui-core?branch=master'><img src='https://coveralls.io/repos/eBay/ebayui-core/badge.svg?branch=master&service=github' alt='Coverage Status' /></a>
    <a alt='BrowserStack status' href="https://www.browserstack.com/automate/public-build/TDJIdHBrVHFTRmdhQUVFZDNLMjlHa2NlbzVtV1JBQUQ4M2V6NWV2VklUMD0tLWp4TGg0WXM2MWRvczZRQXZDdnVPS1E9PQ==--d4c94a4abb28b6aa3bf5fd56068b01e77a0952a0"><img src='https://www.browserstack.com/automate/badge.svg?badge_key=TDJIdHBrVHFTRmdhQUVFZDNLMjlHa2NlbzVtV1JBQUQ4M2V6NWV2VklUMD0tLWp4TGg0WXM2MWRvczZRQXZDdnVPS1E9PQ==--d4c94a4abb28b6aa3bf5fd56068b01e77a0952a0'/></a>
    <a href="https://david-dm.org/eBay/ebayui-core"><img src="https://david-dm.org/eBay/ebayui-core.svg" alt="Dependency status" /></a>
    <a href="https://david-dm.org/eBay/ebayui-core#info=devDependencies"><img src="https://david-dm.org/eBay/ebayui-core/dev-status.svg" alt="devDependency status" /></a>
</p>

# eBayUI Core

> Collection of core eBay components; considered to be the building blocks for all composite structures, pages &amp; apps.

The eBayUI components are Marko custom tags that follow the core principles of HTML. For example:

- Input attributes can only be of type String or Boolean
- State can be manipulated directly from the DOM node
- Events are fired through both Marko and the DOM

For more information, please read [Building a UI Component in 2017 and Beyond](https://medium.com/@senthil_hi/building-a-ui-component-in-2017-and-beyond-1f6d5c4d464).

### Requirements

* [Node.js](https://nodejs.org/en/)
* [Marko](https://markojs.com) (v3+)
* [eBay Skin](https://ebay.github.io/skin/) (v5+)

*Note:\
Marko v3 requires [Marko Widgets v6](https://github.com/marko-js/marko-widgets)\
Marko v4 requires [Marko Widgets v7](https://github.com/marko-js/marko-widgets/tree/v7)*

### Components
* [`ebay-breadcrumb`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-breadcrumb)
* [`ebay-button`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-button)
* [`ebay-carousel`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-carousel)
* [`ebay-checkbox`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-checkbox)
* [`ebay-combobox`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-combobox)
* [`ebay-dialog`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-dialog)
* [`ebay-icon`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-icon)
* [`ebay-menu`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-menu)
* [`ebay-notice`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-notice)
* [`ebay-pagination`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-pagination)
* [`ebay-radio`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-radio)
* [`ebay-select`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-select)
* [`ebay-switch`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-switch)
* [`ebay-tab`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-tab)
* [`ebay-textbox`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-textbox)

## Getting Started

The eBayUI core components are available as the `@ebay/ebayui-core` package on [NPM](https://www.npmjs.com/package/@ebay/ebayui-core).

Use npm or yarn to add the package dependency to your project:

```sh
yarn add @ebay/ebayui-core
```

### Custom Tags

Once the package dependency is added, the eBay [customs tags](https://markojs.com/docs/custom-tags/) are now available for use in your Marko templates. For example, to use an `ebay-menu` component:

_template.marko_
```marko
<ebay-menu text="Sort" type="radio">
    <ebay-menu-item>Price</ebay-menu-item>
    <ebay-menu-item>Time</ebay-menu-item>
    <ebay-menu-item>Distance</ebay-menu-item>
</ebay-menu>
```

On Marko v3, remember to include the component's resources in your `browser.json` file.

_browser.json_
```js
{
    "dependencies": [
        "@ebay/ebayui-core/ebay-menu"
    ]
}
```

### Attributes

Attributes provide initial state for a component. We can see that the menu has `text` and `type` attributes:

_template.marko_

```marko
<ebay-menu text="Sort" type="radio">
    <ebay-menu-item>Price</ebay-menu-item>
    <ebay-menu-item>Time</ebay-menu-item>
    <ebay-menu-item>Distance</ebay-menu-item>
</ebay-menu>
```

Some attributes are stateful and can be updated via the DOM. The text attribute, for example:

```js
var menu = document.querySelector('.menu');
menu.text = 'Sortieren';
```

#### Pass-Through Attributes

HTML attributes can be used on any component, and they will be passed through to the most prominent tag of the component. The most prominent tag is usually the root, but individual components will note if it varies for specific cases.

Example of static usage:
```marko
<ebay-button id="my-button"/>
```

For using pass-through attributes dynamically, they should be sent through the `html-attributes` attribute:
```marko
<!-- data.htmlAttributes = { id: 'my-button' } -->
<ebay-button html-attributes=data.htmlAttributes/>
```

Static and dynamic pass-through attributes can be used simulatenously (html-attributes takes precedence in conflicts):
```marko
<!-- data.htmlAttributes = { id: 'my-button' } -->
<ebay-button html-attributes=data.htmlAttributes type="submit"/>
```

### Events

Events can be handled via the DOM. For example, the menu emits a `menu-change` event:

```js
menu.addEventListener('menu-change', onMenuChange);
```

Events can also be handled using Marko syntax:

_template.marko_

```marko
<ebay-menu text="Sort" type="radio" w-onchange("onMenuChange")>
    <ebay-menu-item>Price</ebay-menu-item>
    <ebay-menu-item>Time</ebay-menu-item>
    <ebay-menu-item>Distance</ebay-menu-item>
</ebay-menu>
```

*Note:  when using DOM events, you should also handle event destruction and delegation as needed.*

## Browser Policy

All components are developed and tested cross-browser using [BrowserStack](https://www.browserstack.com/automate/public-build/TDJIdHBrVHFTRmdhQUVFZDNLMjlHa2NlbzVtV1JBQUQ4M2V6NWV2VklUMD0tLWp4TGg0WXM2MWRvczZRQXZDdnVPS1E9PQ==--d4c94a4abb28b6aa3bf5fd56068b01e77a0952a0), in accordance with our official [eBay Browser Policy](https://github.com/eBay/browserslist-config).

<a alt='BrowserStack status' href="https://www.browserstack.com/automate/public-build/TDJIdHBrVHFTRmdhQUVFZDNLMjlHa2NlbzVtV1JBQUQ4M2V6NWV2VklUMD0tLWp4TGg0WXM2MWRvczZRQXZDdnVPS1E9PQ==--d4c94a4abb28b6aa3bf5fd56068b01e77a0952a0"><img src='https://www.browserstack.com/automate/badge.svg?badge_key=TDJIdHBrVHFTRmdhQUVFZDNLMjlHa2NlbzVtV1JBQUQ4M2V6NWV2VklUMD0tLWp4TGg0WXM2MWRvczZRQXZDdnVPS1E9PQ==--d4c94a4abb28b6aa3bf5fd56068b01e77a0952a0'/></a>

## Releases &amp; Milestones

For upcoming roadmap and release history, please refer to our [releases](https://github.com/eBay/ebayui-core/releases) and [milestones](https://github.com/eBay/ebayui-core/milestones) pages.

### Versioning

The ebayui-core package follows strict [Semantic Versioning](http://semver.org).

Given a version number MAJOR.MINOR.PATCH:

* MAJOR version is incremented when we make incompatible API changes
* MINOR version is incremented when we add functionality in a backwards-compatible manner
* PATCH version is incremented when we make backwards-compatible bug fixes.

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

Use of this source code is governed by a MIT-style license that can be found in the LICENSE file or at https://opensource.org/licenses/MIT.
