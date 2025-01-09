# Upgrade guide for ebayui-core and skin

This guide is put together for teams who are upgrading ebayui and skin to make note of the major breaking changes needed to be aware of, as well as the right path to upgrade.

For more information, please view our [ebayui release notes](https://github.com/eBay/ebayui-core/releases/) or our [skin release notes](https://github.com/eBay/skin/releases/). This should give you a comprehensive guide on each major version on what to upgrade.

The best way to follow this is to jump to the secion in which version you are on, upgrade to the recommended version, resolve the issues mentioned, and then jump to the section of the version you upgraded to and repeat this process until you are on the latest.

## Starting at `eBayUI-core@v4.x.x` and `skin@v9.x.x`

From `v4.x.x` you should start to upgrade to the latest `v5.x.x` version and to skin `v10.x.x`. After upgrading run [@marko/migrate](https://github.com/marko-js/cli/tree/main/packages/migrate) in order to convert your components to the latest versions. (**Note** migrators on this version only work on `marko@4` not on 5+.)
If you upgrade to a later major version, some migrators have been removed.
Make sure your app starts before moving to the next step (it does not have to look correct, since most of those issues should be looked at in the later versions)

### Things to watch out for

- Between version 4 and 5 ebayui we have removed marko 3 support. All out components are written in marko v4 syntax. As long as you are on the compatibility layer you should be safe
- All background icons have been removed. This means you need to use SVG icons. If you are moving to use `ebayui-icon`, wait until getting to at least version 6 in order to use the new icon syntax.
- Some components have been renamed. This should be fixed by running the migratiors.
- DS6 is now the default design system. To use the old legacy ds4, you need to add `ds-4` flag to your lasso config.
- `ebay-pill`, pagination dots on carousl, cards, and skin grid system are all removed. If you need grid system, feel free to go to `v9.0.0` skin tag and copy the code in your app.

### Release notes link for more info

- [ebayui@v5 release notes](https://github.com/eBay/ebayui-core/releases/tag/v5.0.0)
- [skin@v10 release notes](https://github.com/eBay/skin/releases/tag/v10.0.0)

## Starting at `eBayUI-core@v5.x.x` and `skin@v10.x.x` OR `eBayUI-core@v6.x.x` and `skin@v11.x.x`

From `v5.x.x` or `v6.x.x` you should start to upgrade to the latest `v7.x.x` version and to skin `v12.x.x` (difference between `v6 & v11` and `v7 & v12` is mostly rounded components). After upgrading run [@marko/migrate](https://github.com/marko-js/cli/tree/main/packages/migrate) in order to convert your components to the latest versions. (**Note** migrators on this version only work on `marko@4` not on 5+.)
If you upgrade to a later major version, some migrators have been removed.
Make sure your app starts before moving to the next step (it does not have to look correct, since most of those issues should be looked at in the later versions)

### Things to watch out for on `ebayui-core@v6` and `skin@v11`

- `ebayui-core@v6` has a lot of syntax and event changes. Many events have been simplified and made shorter (like instead of `on-button-click` it does `on-click`). These should be auto migrated but need to be migrated on version 7, otherwise they break.
- Icons now are individual components. Before it was `<ebay-icon name="chevron-down"/>` and now it will be `<ebay-chevron-down-icon/>`
- Components like notice and dialog were split up based on their `type` element. **Note** Most can be auto migrated but if `type` is a variable `(like <ebay-notice type=input.dialogType/>`) then it cannot be auto migrated. You can rework your component like this:

```
import pageNotice from '<ebay-page-notice>'
import inlineNotice from '<ebay-inline-notice>'

<${input.noticeType === 'page' ? pageNotice : inlineNotice}>
    Notice body
</>
```

### Things to watch out for on `ebayui-core@v7` and `skin@v12`

- Skin 12 and ebayui 7 added rounded buttons and components by default. In order to turn these off, see `v8.0.0`.

### Release notes link for more info

- [ebayui@v6 release notes](https://github.com/eBay/ebayui-core/releases/tag/v6.0.0)
- [skin@v11 release notes](https://github.com/eBay/skin/releases/tag/v11.0.0)
- [ebayui@v7 release notes](https://github.com/eBay/ebayui-core/releases/tag/v7.0.0)
- [skin@v12 release notes](https://github.com/eBay/skin/releases/tag/v12.0.0)

## Starting at `eBayUI-core@v7.x.x` and `skin@v12.x.x`

From `v7.x.x` you should start to upgrade to the latest `v8.x.x` version and to skin `v13.x.x`. After upgrading run [@marko/migrate](https://github.com/marko-js/cli/tree/main/packages/migrate) in order to convert your components to the latest versions. (**Note** migrators on this verson work with both marko 5 and 4)
From this point, you should start to make sure your component are working properly and look correctly.

### Things to watch out for on `ebayui-core@v8` and `skin@v13`

- For turning off rounded elements import the module `@ebay/skin/square-corner-theme`
- Evolution is the new design system, there are many changes to all components look and feel.
- No more IE11 support
- DS4 icons are consolidated with DS6 icons
- Many deprecated variables removed (in skin)
- Button has been split up into various components base on `variant` argument **Note** Can be auto migrated but if the `variant` is a variable `(like <ebay-dialog type=input.dialogType/>` then it cannot be auto migrated).

### Release notes link for more info

- [ebayui@v8 release notes](https://github.com/eBay/ebayui-core/releases/tag/v8.0.0)
- [skin@v13 release notes](https://github.com/eBay/skin/releases/tag/v13.0.0)

## Final throughts

This should resolve most common issues. If there are any more issues you see with this or other common usecases missed, please file an issue!
Good luck!
