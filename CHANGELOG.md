# eBayUI-Core Changelog

## 15.2.0

### Minor Changes

- [#2451](https://github.com/eBay/ebayui-core/pull/2451) [`9559cae`](https://github.com/eBay/ebayui-core/commit/9559cae4d39efba2a21597266437450448812613) Thanks [@saiponnada](https://github.com/saiponnada)! - feat(accordion): update expansion icon

- [#2452](https://github.com/eBay/ebayui-core/pull/2452) [`74fcd1f`](https://github.com/eBay/ebayui-core/commit/74fcd1fcdf48f7edc20c3b8ac6968d9608d50640) Thanks [@agliga](https://github.com/agliga)! - feat(video): updated to match new specs

- [#2453](https://github.com/eBay/ebayui-core/pull/2453) [`54351d9`](https://github.com/eBay/ebayui-core/commit/54351d9e260937adb30a4a9ca7e676c507dab171) Thanks [@agliga](https://github.com/agliga)! - feat(table): added loading body state

- [#2454](https://github.com/eBay/ebayui-core/pull/2454) [`9f857cb`](https://github.com/eBay/ebayui-core/commit/9f857cbd05f9d2b588af26906e799c8b0ef56edd) Thanks [@saiponnada](https://github.com/saiponnada)! - feat(skeleton): added example for grouped skeletons

- [#2446](https://github.com/eBay/ebayui-core/pull/2446) [`9bd9d23`](https://github.com/eBay/ebayui-core/commit/9bd9d23be6d1fc0c52d748d8ddbbfa3b6bd23561) Thanks [@agliga](https://github.com/agliga)! - fix(event-utils): updated to use key

### Patch Changes

- [#2445](https://github.com/eBay/ebayui-core/pull/2445) [`876dff4`](https://github.com/eBay/ebayui-core/commit/876dff44bfc1f3e4fda6bdfdc39577c51c71110c) Thanks [@agliga](https://github.com/agliga)! - fix(icon-btn): added swap to icon-link for href and target support

- [#2465](https://github.com/eBay/ebayui-core/pull/2465) [`46423cb`](https://github.com/eBay/ebayui-core/commit/46423cb9e671f2d8e79d2d6315592b7aa73c7837) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Fix carousel scrolling bug

## 15.1.4

### Patch Changes

- [#2455](https://github.com/eBay/ebayui-core/pull/2455) [`7c4b564`](https://github.com/eBay/ebayui-core/commit/7c4b564d132ddea8e4d027336b9b69a0cb733997) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Fix hydration for accordion

## 15.1.3

### Patch Changes

- [`101334e`](https://github.com/eBay/ebayui-core/commit/101334e94412c53f7e14886c64a216bb3cb50388) Thanks [@agliga](https://github.com/agliga)! - fix(dropdown): removed flip from middleware

## 15.1.2

### Patch Changes

- [`fbd39e8`](https://github.com/eBay/ebayui-core/commit/fbd39e8ced1dcea4a0def9c6db3889e1de63042c) Thanks [@agliga](https://github.com/agliga)! - feat(charts): removed less dependency

## 15.1.1

### Patch Changes

- [`34de91d`](https://github.com/eBay/ebayui-core/commit/34de91d94cfff6301fe31561a648e54cf443d940) Thanks [@agliga](https://github.com/agliga)! - chore: updated makeup-active-descendant to fix a problem with combobox jumping

## 15.1.0

### Minor Changes

- [#2433](https://github.com/eBay/ebayui-core/pull/2433) [`f82f058`](https://github.com/eBay/ebayui-core/commit/f82f058e140b5adae3694ff1fb0717f21ee0b8ba) Thanks [@agliga](https://github.com/agliga)! - feat(avatar): added image position option

- [#2426](https://github.com/eBay/ebayui-core/pull/2426) [`ac954a8`](https://github.com/eBay/ebayui-core/commit/ac954a8789de769487fba9d1414de57bc3b8f3c9) Thanks [@agliga](https://github.com/agliga)! - feat(textbox): added check to show prefix label only if floating is not set

- [`79efea5`](https://github.com/eBay/ebayui-core/commit/79efea5456b42b41fdcaa3db11201737b1e35a49) Thanks [@agliga](https://github.com/agliga)! - feat(dropdowns): added fixed strategy option

### Patch Changes

- [#2429](https://github.com/eBay/ebayui-core/pull/2429) [`d929e04`](https://github.com/eBay/ebayui-core/commit/d929e04aba285749d89d81a5453059ab62c10e52) Thanks [@agliga](https://github.com/agliga)! - fix(section-title): removed tabindex=-1 and aria-hidden from anchor tag

## 15.0.2

### Patch Changes

- [#2436](https://github.com/eBay/ebayui-core/pull/2436) [`7460452`](https://github.com/eBay/ebayui-core/commit/74604526f5a1e64916a1d7eacd18fe833abd0321) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Fix arrow function for Marko 4

## 15.0.1

### Patch Changes

- [#2420](https://github.com/eBay/ebayui-core/pull/2420) [`9b3c7a8`](https://github.com/eBay/ebayui-core/commit/9b3c7a802cc571402b7950969cd9506f4a8c9fcc) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Downgrade shaka-player to prevent autoplay bug

## 15.0.0

### Major Changes

- [#2384](https://github.com/eBay/ebayui-core/pull/2384) [`aad6f91`](https://github.com/eBay/ebayui-core/commit/aad6f91497c136185490bbf6218a8d38b1dd3093) Thanks [@agliga](https://github.com/agliga)! - fix(combobox): remove view all options
  `view-all-options` is no longer a valid option for combobox. Use `autocomplete: none` instead

- [#2415](https://github.com/eBay/ebayui-core/pull/2415) [`02f4e69`](https://github.com/eBay/ebayui-core/commit/02f4e69475226fe4265a951b5b0a6cd62f2eb3dd) Thanks [@agliga](https://github.com/agliga)! - feat(marko-json): changed all attribute tags to be singular

- [#2357](https://github.com/eBay/ebayui-core/pull/2357) [`549c3c3`](https://github.com/eBay/ebayui-core/commit/549c3c3f7369df4d7e3d0ae0fb3d7549ee315c17) Thanks [@saiponnada](https://github.com/saiponnada)! - feat(ebay-accordion): new component

- [#2381](https://github.com/eBay/ebayui-core/pull/2381) [`02f0cd8`](https://github.com/eBay/ebayui-core/commit/02f0cd887d0eb073bb1378ef515aa9e4db9d4d0a) Thanks [@agliga](https://github.com/agliga)! - feat(dropdowns): added support for floating-ui

- [#2413](https://github.com/eBay/ebayui-core/pull/2413) [`b2f1c6b`](https://github.com/eBay/ebayui-core/commit/b2f1c6baee10dbd2e238a3e5d26cf8f333948976) Thanks [@agliga](https://github.com/agliga)! - feat(notice): removed celebration from status

- [#2411](https://github.com/eBay/ebayui-core/pull/2411) [`57d2b60`](https://github.com/eBay/ebayui-core/commit/57d2b6009bdb25543845f30f0cc298d6d44a1c3f) Thanks [@agliga](https://github.com/agliga)! - chore: renamed ebay-fullscreen-dialog to ebay-fullscreen-dialog-deprecated and ebay-drawer-dialog to ebay-drawer-dialog-deprecated

- [#2406](https://github.com/eBay/ebayui-core/pull/2406) [`7dfbfce`](https://github.com/eBay/ebayui-core/commit/7dfbfce3d8b56d8895b130507666d5ce0010de43) Thanks [@agliga](https://github.com/agliga)! - chore: removed deprecated code

### Minor Changes

- [#2413](https://github.com/eBay/ebayui-core/pull/2413) [`e40437c`](https://github.com/eBay/ebayui-core/commit/e40437cf8c2e301ed00958831e14996b2fec2757) Thanks [@agliga](https://github.com/agliga)! - fix(ebay-table): update row-header attribute, removed aria-pressed

- [#2413](https://github.com/eBay/ebayui-core/pull/2413) [`6bddc30`](https://github.com/eBay/ebayui-core/commit/6bddc309ac8ffbff98302ec88ecd403e5c962723) Thanks [@agliga](https://github.com/agliga)! - Add area chart

### Patch Changes

- [#2407](https://github.com/eBay/ebayui-core/pull/2407) [`e40902f`](https://github.com/eBay/ebayui-core/commit/e40902f378ffdd69b79bab48356ada97725bd7a2) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Ensure custom styles are included in build

- [#2413](https://github.com/eBay/ebayui-core/pull/2413) [`c2b5b9d`](https://github.com/eBay/ebayui-core/commit/c2b5b9d6678516df4a7dc40aef5f37df1fad6b01) Thanks [@agliga](https://github.com/agliga)! - Refactor to simplify types

- [#2408](https://github.com/eBay/ebayui-core/pull/2408) [`eb53ada`](https://github.com/eBay/ebayui-core/commit/eb53adaf7b1380ffa13292a844f47c00549c5cfe) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Remove chevron from combobox

- [#2413](https://github.com/eBay/ebayui-core/pull/2413) [`bd170c2`](https://github.com/eBay/ebayui-core/commit/bd170c2448a49d2e3cc8f7441063b94f9b1156c5) Thanks [@agliga](https://github.com/agliga)! - TS fix for combobox

- [#2413](https://github.com/eBay/ebayui-core/pull/2413) [`21197e5`](https://github.com/eBay/ebayui-core/commit/21197e55618b0c01fb522d6417307d0e4c6d4877) Thanks [@agliga](https://github.com/agliga)! - Upgrade dependencies

- [#2413](https://github.com/eBay/ebayui-core/pull/2413) [`d316e9f`](https://github.com/eBay/ebayui-core/commit/d316e9f7eac27aea776d11ed5ed556c1928cfd9d) Thanks [@agliga](https://github.com/agliga)! - Updated the component-browser.ts file to reference shared attributes from tags-html.d.ts and added the Textbox class implementation.

## 14.6.9

### Patch Changes

- [#2402](https://github.com/eBay/ebayui-core/pull/2402) [`6fea187`](https://github.com/eBay/ebayui-core/commit/6fea187704aa350922c4cc4009a2cbea929340a0) Thanks [@agliga](https://github.com/agliga)! - fix(combobox): reverted removing of view all options

## 14.6.8

### Patch Changes

- [`55f2485`](https://github.com/eBay/ebayui-core/commit/55f24852abf3bbe501739f7d79268e97f61b4244) Thanks [@agliga](https://github.com/agliga)! - chore: updated shaka-player and model-viewer versions

- [`1b96861`](https://github.com/eBay/ebayui-core/commit/1b96861b9ae2380cf422ce129aeb208866d43683) Thanks [@agliga](https://github.com/agliga)! - fix(video): removed report from last argument

## 14.6.7

### Patch Changes

- [`2cbf433`](https://github.com/eBay/ebayui-core/commit/2cbf43374041102ae8598f00bbf9e83af3cf874c) Thanks [@agliga](https://github.com/agliga)! - fix(@internal): added correct lasso remap

## 14.6.6

### Patch Changes

- [#2377](https://github.com/eBay/ebayui-core/pull/2377) [`06d6ae6`](https://github.com/eBay/ebayui-core/commit/06d6ae60cb3dff261c208666a1f985bcdd2f8eb4) Thanks [@agliga](https://github.com/agliga)! - fix(dialog): added request animation frame before running keyboardTrap

## 14.6.5

### Patch Changes

- [#2374](https://github.com/eBay/ebayui-core/pull/2374) [`20eebd9`](https://github.com/eBay/ebayui-core/commit/20eebd97ce4da58efb0d6a28c7558de2e4f129f9) Thanks [@agliga](https://github.com/agliga)! - chore(@internal): added split imports

## 14.6.4

### Patch Changes

- [#2367](https://github.com/eBay/ebayui-core/pull/2367) [`69acb3f`](https://github.com/eBay/ebayui-core/commit/69acb3f34c86dd2185016fcd759072ec65f2e6b4) Thanks [@agliga](https://github.com/agliga)! - fix(@internal): added commonjs support for older bundles

## 14.6.3

### Patch Changes

- [#2364](https://github.com/eBay/ebayui-core/pull/2364) [`086ffc8`](https://github.com/eBay/ebayui-core/commit/086ffc84c965ba60df233dad1c63d277539966ad) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Install three as a peer dependency

## 14.6.2

### Patch Changes

- [#2362](https://github.com/eBay/ebayui-core/pull/2362) [`d490819`](https://github.com/eBay/ebayui-core/commit/d4908190fae46de481bfb2149cae9cb5a92a0642) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Fix lasso issue

## 14.6.1

### Patch Changes

- [#2359](https://github.com/eBay/ebayui-core/pull/2359) [`5bc9ec1`](https://github.com/eBay/ebayui-core/commit/5bc9ec1701c9cf6d17236ba921b9b85cc5cf1a8c) Thanks [@agliga](https://github.com/agliga)! - feat(internal): added support for webpack 4

## 14.6.0

### Minor Changes

- [#2351](https://github.com/eBay/ebayui-core/pull/2351) [`8024cfe`](https://github.com/eBay/ebayui-core/commit/8024cfe2a7db3c6e21c0fbbe1edda25198358694) Thanks [@LuLaValva](https://github.com/LuLaValva)! - feat(eek): added size option

- [#2348](https://github.com/eBay/ebayui-core/pull/2348) [`981e76a`](https://github.com/eBay/ebayui-core/commit/981e76ac2d00d961a552a59dfa3914b3f1148516) Thanks [@saiponnada](https://github.com/saiponnada)! - docs(contributing): updated tests section

- [#2337](https://github.com/eBay/ebayui-core/pull/2337) [`9c308b4`](https://github.com/eBay/ebayui-core/commit/9c308b46736f2ac646cec07d4e92f2ada1a10954) Thanks [@agliga](https://github.com/agliga)! - feat: added async loading instead of cdn loader

- [#2352](https://github.com/eBay/ebayui-core/pull/2352) [`a5b2e69`](https://github.com/eBay/ebayui-core/commit/a5b2e6967a53593a2766f651ebed89328b7e093f) Thanks [@WinkeeFace](https://github.com/WinkeeFace)! - fix(ebay-carousel): fix width calculation for last pill when font not loaded (#2344)

## 14.5.1

### Patch Changes

- [#2345](https://github.com/eBay/ebayui-core/pull/2345) [`04956d5`](https://github.com/eBay/ebayui-core/commit/04956d5abf3d9d5ae1abd0787656745293c2899e) Thanks [@saiponnada](https://github.com/saiponnada)! - fix(combobox): updated to default filtering behavior

## 14.5.0

### Minor Changes

- [#2330](https://github.com/eBay/ebayui-core/pull/2330) [`9ebb7c9`](https://github.com/eBay/ebayui-core/commit/9ebb7c92885b3beef4266639513297e8af74cdd0) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Search header for filter menu & filter menu button

- [#2320](https://github.com/eBay/ebayui-core/pull/2320) [`73ff807`](https://github.com/eBay/ebayui-core/commit/73ff807fa1d9989ece78b9c5482d40b4351e2f49) Thanks [@saiponnada](https://github.com/saiponnada)! - fix(combobox): added viewAllOptions control

- [#2319](https://github.com/eBay/ebayui-core/pull/2319) [`a41ae29`](https://github.com/eBay/ebayui-core/commit/a41ae2928ea9301a6bda8ca5dbce835519777b99) Thanks [@saiponnada](https://github.com/saiponnada)! - feat(carousel): respect reduced-motion during autoplay

- [#2327](https://github.com/eBay/ebayui-core/pull/2327) [`30b5859`](https://github.com/eBay/ebayui-core/commit/30b58590f04f3ef65a96f6026b182b8947e9c964) Thanks [@agliga](https://github.com/agliga)! - ebay-ccd: new component

### Patch Changes

- [#2324](https://github.com/eBay/ebayui-core/pull/2324) [`60ebb19`](https://github.com/eBay/ebayui-core/commit/60ebb196d8dc0f1a2bf443d62c1dedab33987a61) Thanks [@UDAY556](https://github.com/UDAY556)! - Added localization for ebay-video component

- [#2332](https://github.com/eBay/ebayui-core/pull/2332) [`c006353`](https://github.com/eBay/ebayui-core/commit/c00635390b9c302cce10135d2f59b6a22c298019) Thanks [@ArtBlue](https://github.com/ArtBlue)! - refactor(storybook/examples): fully migrate stories and examples to typescript

## 14.4.1

### Patch Changes

- [#2315](https://github.com/eBay/ebayui-core/pull/2315) [`d53c7f6`](https://github.com/eBay/ebayui-core/commit/d53c7f6df4081796667c576c8a95b0a70cd364fe) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Fix collapseOnSelect

## 14.4.0

### Minor Changes

- [#2289](https://github.com/eBay/ebayui-core/pull/2289) [`c32467f`](https://github.com/eBay/ebayui-core/commit/c32467fd9e1262582beaa5c54ce3bb247f551b70) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Add ebay-file-preview-card and ebay-file-preview-card-group

- [#2308](https://github.com/eBay/ebayui-core/pull/2308) [`6bd3dee`](https://github.com/eBay/ebayui-core/commit/6bd3deeb9f260860a2b682aae26f4784561ee230) Thanks [@agliga](https://github.com/agliga)! - feat(ebay-table): support column type layout and icon-action

- [#2308](https://github.com/eBay/ebayui-core/pull/2308) [`5ad8039`](https://github.com/eBay/ebayui-core/commit/5ad8039ce493de56a739d38433b5474faa7ce327) Thanks [@agliga](https://github.com/agliga)! - fix(combobox): remove role-description attribute

- [#2308](https://github.com/eBay/ebayui-core/pull/2308) [`8e95e94`](https://github.com/eBay/ebayui-core/commit/8e95e94f6bb508e50baf05365b40850d27f889d1) Thanks [@agliga](https://github.com/agliga)! - Add ebay-file-input

- [#2308](https://github.com/eBay/ebayui-core/pull/2308) [`e2f71a3`](https://github.com/eBay/ebayui-core/commit/e2f71a34beeb687f0ddf1b45b9f77a463a7c6f31) Thanks [@agliga](https://github.com/agliga)! - feat(ebay-table): ebay-table base component with density attribute

- [#2291](https://github.com/eBay/ebayui-core/pull/2291) [`a23c4ec`](https://github.com/eBay/ebayui-core/commit/a23c4ecb58d0887f3be2b7996e6efbda5dbccfa7) Thanks [@bill-min](https://github.com/bill-min)! - feat(ebay-table): suppport column sorting

- [#2308](https://github.com/eBay/ebayui-core/pull/2308) [`dc1460b`](https://github.com/eBay/ebayui-core/commit/dc1460b151d6894f97c21803789f641fc4d1979b) Thanks [@agliga](https://github.com/agliga)! - feat(ebay-table): adding support for selection mode

### Patch Changes

- [#2308](https://github.com/eBay/ebayui-core/pull/2308) [`6cdc7f1`](https://github.com/eBay/ebayui-core/commit/6cdc7f11211a126a70243d69cf597087462fef67) Thanks [@agliga](https://github.com/agliga)! - Fix clearing behavior for calendar and date-textbox

- [#2308](https://github.com/eBay/ebayui-core/pull/2308) [`7e82613`](https://github.com/eBay/ebayui-core/commit/7e8261332d8b39ddafc62bd7a837339a94bd49bf) Thanks [@agliga](https://github.com/agliga)! - Update TS

- [#2310](https://github.com/eBay/ebayui-core/pull/2310) [`11532a6`](https://github.com/eBay/ebayui-core/commit/11532a681defc8585e900566def3b452e8893c19) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Update types to encourage modern attr tag syntax

- [#2306](https://github.com/eBay/ebayui-core/pull/2306) [`047647b`](https://github.com/eBay/ebayui-core/commit/047647bf1c410daf5516912519e7db368f2bc61a) Thanks [@JereMIbq1995](https://github.com/JereMIbq1995)! - ebay-video: shaka config can now be added as input

## 14.3.0

### Minor Changes

- [#2253](https://github.com/eBay/ebayui-core/pull/2253) [`b8110ef`](https://github.com/eBay/ebayui-core/commit/b8110ef70840ed1f8625e88fce2f0b230b32ae46) Thanks [@agliga](https://github.com/agliga)! - tech-debt: swapped tests to vitest

- [#2257](https://github.com/eBay/ebayui-core/pull/2257) [`9469d34`](https://github.com/eBay/ebayui-core/commit/9469d34dee7ebc46de2bdd98c04668d36079c8db) Thanks [@agliga](https://github.com/agliga)! - fix(phone-input): updated mask to work on safari

### Patch Changes

- [#2266](https://github.com/eBay/ebayui-core/pull/2266) [`53442d4`](https://github.com/eBay/ebayui-core/commit/53442d41316da778442d07f40f9a8cd6f4a35606) Thanks [@agliga](https://github.com/agliga)! - fix(listbox/textbox): updated marko-jsons

- [#2272](https://github.com/eBay/ebayui-core/pull/2272) [`899f082`](https://github.com/eBay/ebayui-core/commit/899f0821ca687601303f0cd2734bff414d13ce6c) Thanks [@lorenzolevy](https://github.com/lorenzolevy)! - Adds esModuleInterop flag in tsconfig to avoid importing undefined default property for line-chart tooltip module

- [#2262](https://github.com/eBay/ebayui-core/pull/2262) [`e9d0c66`](https://github.com/eBay/ebayui-core/commit/e9d0c6692591d593453dcf92e6ef75b4a61e5005) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Make overflow icon sizes consistent

- [#2238](https://github.com/eBay/ebayui-core/pull/2238) [`cd855f1`](https://github.com/eBay/ebayui-core/commit/cd855f16b2f2cefe706dda064a6e8007f2d5279f) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Change default number of pages for pagination

- [#2268](https://github.com/eBay/ebayui-core/pull/2268) [`661f98d`](https://github.com/eBay/ebayui-core/commit/661f98dcf39bf45d88ee5cdf086fa66ad881df6b) Thanks [@agliga](https://github.com/agliga)! - feat(menu/filter-menu): added keydown events and attributes

- [#2273](https://github.com/eBay/ebayui-core/pull/2273) [`514350e`](https://github.com/eBay/ebayui-core/commit/514350eb91ef142b1357a4ed4e5a21f0fbee3ab6) Thanks [@lorenzolevy](https://github.com/lorenzolevy)! - fix(line-chart): adds renderTooltipOutside input to allow for renders in modal

- [#2256](https://github.com/eBay/ebayui-core/pull/2256) [`d7edf41`](https://github.com/eBay/ebayui-core/commit/d7edf41c2d6760b3c75211391b392ddac053c79c) Thanks [@lorenzolevy](https://github.com/lorenzolevy)! - fix(line-chart): updated deprecated token for tooltip bg

## 14.2.0

### Minor Changes

- [#2228](https://github.com/eBay/ebayui-core/pull/2228) [`b1f4dc1`](https://github.com/eBay/ebayui-core/commit/b1f4dc101360979f59017509632ba6bfbd9ec3a1) Thanks [@ArtBlue](https://github.com/ArtBlue)! - feat(toggle-button-group): added min columns option

### Patch Changes

- [#2242](https://github.com/eBay/ebayui-core/pull/2242) [`155233f`](https://github.com/eBay/ebayui-core/commit/155233fee23c318d4aa41195b6a83610ab166d0a) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Menu button single item fix

- [#2248](https://github.com/eBay/ebayui-core/pull/2248) [`2273d56`](https://github.com/eBay/ebayui-core/commit/2273d5644287d10f6bc2055d1bae495b37351337) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Update toggle button types

- [#2246](https://github.com/eBay/ebayui-core/pull/2246) [`81a3106`](https://github.com/eBay/ebayui-core/commit/81a31066ffcdae15e7ae7c5197df2d8ad47a181e) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Use local time in calendar

## 14.1.0

### Minor Changes

- [#2224](https://github.com/eBay/ebayui-core/pull/2224) [`658fda8`](https://github.com/eBay/ebayui-core/commit/658fda81bb81c45de842892e57ab23359a319f59) Thanks [@agliga](https://github.com/agliga)! - ebay-details: updated chevron to be 16 from 12

### Patch Changes

- [#2211](https://github.com/eBay/ebayui-core/pull/2211) [`371d277`](https://github.com/eBay/ebayui-core/commit/371d2778358820b384a7f2c065e8ddf4da9a4fe1) Thanks [@agliga](https://github.com/agliga)! - fix(carousel): removed flickering from controlled

- [#2224](https://github.com/eBay/ebayui-core/pull/2224) [`abe01b8`](https://github.com/eBay/ebayui-core/commit/abe01b80d48c9fb7c6716f6ad4585f3fecd11c69) Thanks [@agliga](https://github.com/agliga)! - Override fr-CA date formatting

- [#2219](https://github.com/eBay/ebayui-core/pull/2219) [`3c84bb4`](https://github.com/eBay/ebayui-core/commit/3c84bb418998b8c991796aba91cf3bda7917d08a) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Edit lightbox dialog documentation

## 14.0.2

### Patch Changes

- [`44e2331`](https://github.com/eBay/ebayui-core/commit/44e2331c10c3155c0d1588822072ec28807db221) Thanks [@agliga](https://github.com/agliga)! - ebay-icon: fixed information icon color typo

- [#2213](https://github.com/eBay/ebayui-core/pull/2213) [`9bdbe20`](https://github.com/eBay/ebayui-core/commit/9bdbe20314d96a67ba7f70af7c3a9e0eca33e1bb) Thanks [@agliga](https://github.com/agliga)! - icon-button: added aria-label support in storybook

## 14.0.1

### Patch Changes

- [#2216](https://github.com/eBay/ebayui-core/pull/2216) [`ef45eef`](https://github.com/eBay/ebayui-core/commit/ef45eef00557a39ab4dceea89b1c1569a95d9fac) Thanks [@agliga](https://github.com/agliga)! - icon: fixed legacy program badge, added color to filled icons, fixed fit icons

## 14.0.0

### Major Changes

- [#2191](https://github.com/eBay/ebayui-core/pull/2191) [`1290638`](https://github.com/eBay/ebayui-core/commit/129063895b51d733417923db313975895e4ace60) Thanks [@LuLaValva](https://github.com/LuLaValva)! - feat(date-textbox): localize date placeholders

- [#2196](https://github.com/eBay/ebayui-core/pull/2196) [`80f76ae`](https://github.com/eBay/ebayui-core/commit/80f76aeffe2a07e96b2c2c8b5eeedf43f80735ff) Thanks [@agliga](https://github.com/agliga)! - ebay-chips: changed a11yDeleteButton to a11yDeleteButtonText

- [#2196](https://github.com/eBay/ebayui-core/pull/2196) [`e149501`](https://github.com/eBay/ebayui-core/commit/e149501f91213435644e3445d490d06ccb187ef0) Thanks [@agliga](https://github.com/agliga)! - ebay-icon: synced with class changes

- [#2199](https://github.com/eBay/ebayui-core/pull/2199) [`80f7185`](https://github.com/eBay/ebayui-core/commit/80f71850ce3a0ea1f5e7d730e834e9ea2c8c2e39) Thanks [@agliga](https://github.com/agliga)! - feat(toggle-button-group): removed columns and changed ul layout

- [#2193](https://github.com/eBay/ebayui-core/pull/2193) [`dac2644`](https://github.com/eBay/ebayui-core/commit/dac2644e6d5c8aa03816038fb735d220d38488f7) Thanks [@LuLaValva](https://github.com/LuLaValva)! - refactor(phone-input): use Intl for country names instead of hardcoding

- [#2196](https://github.com/eBay/ebayui-core/pull/2196) [`9812150`](https://github.com/eBay/ebayui-core/commit/981215044603915b94ea8791bbd94d201c910b29) Thanks [@agliga](https://github.com/agliga)! - lightbox-dialog: added large/fullscreen size

### Minor Changes

- [#2200](https://github.com/eBay/ebayui-core/pull/2200) [`2cbba20`](https://github.com/eBay/ebayui-core/commit/2cbba205f7cee8432a8e6ca804d9464f662bdb6a) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Add prefix and postfix to textbox

- [#2202](https://github.com/eBay/ebayui-core/pull/2202) [`d535781`](https://github.com/eBay/ebayui-core/commit/d535781ac847d4909f65feeef17c7a5cc8083a01) Thanks [@agliga](https://github.com/agliga)! - feat(listbox-button): added postfix-label

## 14.0.0-next.0

### Major Changes

- [#2191](https://github.com/eBay/ebayui-core/pull/2191) [`1290638`](https://github.com/eBay/ebayui-core/commit/129063895b51d733417923db313975895e4ace60) Thanks [@LuLaValva](https://github.com/LuLaValva)! - feat(date-textbox): localize date placeholders

- [#2196](https://github.com/eBay/ebayui-core/pull/2196) [`80f76ae`](https://github.com/eBay/ebayui-core/commit/80f76aeffe2a07e96b2c2c8b5eeedf43f80735ff) Thanks [@agliga](https://github.com/agliga)! - ebay-chips: changed a11yDeleteButton to a11yDeleteButtonText

- [#2196](https://github.com/eBay/ebayui-core/pull/2196) [`e149501`](https://github.com/eBay/ebayui-core/commit/e149501f91213435644e3445d490d06ccb187ef0) Thanks [@agliga](https://github.com/agliga)! - ebay-icon: synced with class changes

- [#2199](https://github.com/eBay/ebayui-core/pull/2199) [`80f7185`](https://github.com/eBay/ebayui-core/commit/80f71850ce3a0ea1f5e7d730e834e9ea2c8c2e39) Thanks [@agliga](https://github.com/agliga)! - feat(toggle-button-group): removed columns and changed ul layout

- [#2193](https://github.com/eBay/ebayui-core/pull/2193) [`dac2644`](https://github.com/eBay/ebayui-core/commit/dac2644e6d5c8aa03816038fb735d220d38488f7) Thanks [@LuLaValva](https://github.com/LuLaValva)! - refactor(phone-input): use Intl for country names instead of hardcoding

- [#2196](https://github.com/eBay/ebayui-core/pull/2196) [`9812150`](https://github.com/eBay/ebayui-core/commit/981215044603915b94ea8791bbd94d201c910b29) Thanks [@agliga](https://github.com/agliga)! - lightbox-dialog: added large/fullscreen size

### Minor Changes

- [#2200](https://github.com/eBay/ebayui-core/pull/2200) [`2cbba20`](https://github.com/eBay/ebayui-core/commit/2cbba205f7cee8432a8e6ca804d9464f662bdb6a) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Add prefix and postfix to textbox

- [#2202](https://github.com/eBay/ebayui-core/pull/2202) [`d535781`](https://github.com/eBay/ebayui-core/commit/d535781ac847d4909f65feeef17c7a5cc8083a01) Thanks [@agliga](https://github.com/agliga)! - feat(listbox-button): added postfix-label

## 13.5.2

### Patch Changes

- [#2187](https://github.com/eBay/ebayui-core/pull/2187) [`b294759`](https://github.com/eBay/ebayui-core/commit/b294759fe896cce730d97c2467da2d085efe88e2) Thanks [@LuLaValva](https://github.com/LuLaValva)! - revert original export for date-utils

- [#2192](https://github.com/eBay/ebayui-core/pull/2192) [`569abba`](https://github.com/eBay/ebayui-core/commit/569abba8f2dfc8dc847a34cd7e852bd49ffe2b91) Thanks [@LuLaValva](https://github.com/LuLaValva)! - add info for invalid-date event

## 13.5.1

### Patch Changes

- [`81f420b`](https://github.com/eBay/ebayui-core/commit/81f420bcc9618651725ff3786779e808803e19a1) Thanks [@agliga](https://github.com/agliga)! - listbox-button: added reset for active descendant when there is a state change

## 13.5.0

### Minor Changes

- [#2160](https://github.com/eBay/ebayui-core/pull/2160) [`5c71772`](https://github.com/eBay/ebayui-core/commit/5c717724d00608146bc82fbe2680244843b30c12) Thanks [@LuLaValva](https://github.com/LuLaValva)! - feat: add localized formatting using date-fns

- [#2178](https://github.com/eBay/ebayui-core/pull/2178) [`88e0f01`](https://github.com/eBay/ebayui-core/commit/88e0f01c7c18a3ac82bc756241a656c89e7134c0) Thanks [@agliga](https://github.com/agliga)! - calendar: added default date override

- [#2171](https://github.com/eBay/ebayui-core/pull/2171) [`6b5d179`](https://github.com/eBay/ebayui-core/commit/6b5d179b88ffbb8f83ea3c6f7054ee0a9f315f2a) Thanks [@agliga](https://github.com/agliga)! - confirm-dialog: added reject on escape keypress

- [#2178](https://github.com/eBay/ebayui-core/pull/2178) [`88e0f01`](https://github.com/eBay/ebayui-core/commit/88e0f01c7c18a3ac82bc756241a656c89e7134c0) Thanks [@agliga](https://github.com/agliga)! - date-textbox: added disabled state

- [#2178](https://github.com/eBay/ebayui-core/pull/2178) [`88e0f01`](https://github.com/eBay/ebayui-core/commit/88e0f01c7c18a3ac82bc756241a656c89e7134c0) Thanks [@agliga](https://github.com/agliga)! - chore: updated makeup-floating-label to fix placeholder shifting on select

### Patch Changes

- [#2180](https://github.com/eBay/ebayui-core/pull/2180) [`ad640bc`](https://github.com/eBay/ebayui-core/commit/ad640bc9ceb383781c937a3a52c875010f3853df) Thanks [@LuLaValva](https://github.com/LuLaValva)! - fix(page-notice): update marko-tag.json

## 13.5.0-next.0

### Minor Changes

- [#2160](https://github.com/eBay/ebayui-core/pull/2160) [`5c71772`](https://github.com/eBay/ebayui-core/commit/5c717724d00608146bc82fbe2680244843b30c12) Thanks [@LuLaValva](https://github.com/LuLaValva)! - feat: add localized formatting using date-fns

- [#2172](https://github.com/eBay/ebayui-core/pull/2172) [`88e0f01`](https://github.com/eBay/ebayui-core/commit/88e0f01c7c18a3ac82bc756241a656c89e7134c0) Thanks [@github-actions](https://github.com/apps/github-actions)! - calendar: added default date override

- [#2171](https://github.com/eBay/ebayui-core/pull/2171) [`6b5d179`](https://github.com/eBay/ebayui-core/commit/6b5d179b88ffbb8f83ea3c6f7054ee0a9f315f2a) Thanks [@agliga](https://github.com/agliga)! - confirm-dialog: added reject on escape keypress

- [#2172](https://github.com/eBay/ebayui-core/pull/2172) [`88e0f01`](https://github.com/eBay/ebayui-core/commit/88e0f01c7c18a3ac82bc756241a656c89e7134c0) Thanks [@github-actions](https://github.com/apps/github-actions)! - date-textbox: added disabled state

- [#2172](https://github.com/eBay/ebayui-core/pull/2172) [`88e0f01`](https://github.com/eBay/ebayui-core/commit/88e0f01c7c18a3ac82bc756241a656c89e7134c0) Thanks [@github-actions](https://github.com/apps/github-actions)! - chore: updated makeup-floating-label to fix placeholder shifting on select

## 13.4.1

### Patch Changes

- [#2169](https://github.com/eBay/ebayui-core/pull/2169) [`c49973f`](https://github.com/eBay/ebayui-core/commit/c49973f3e502baa9cc281d4eb0da9831aff0072a) Thanks [@agliga](https://github.com/agliga)! - icon: removed flags from depdendencies

## 13.4.0

### Minor Changes

- [#2162](https://github.com/eBay/ebayui-core/pull/2162) [`275bdac`](https://github.com/eBay/ebayui-core/commit/275bdac4688733764c62ec98150119c7614bb9ef) Thanks [@agliga](https://github.com/agliga)! - phone-input: new component

- [#2157](https://github.com/eBay/ebayui-core/pull/2157) [`4f8e826`](https://github.com/eBay/ebayui-core/commit/4f8e826d9378eba7f39aed2de7785085e4ce99c7) Thanks [@agliga](https://github.com/agliga)! - ebay-date-textbox: added floating label support

- [#2156](https://github.com/eBay/ebayui-core/pull/2156) [`3322847`](https://github.com/eBay/ebayui-core/commit/332284786f11d42dafc7cf023087bd34894f191c) Thanks [@agliga](https://github.com/agliga)! - icon-button: added priority attribute

- [#2141](https://github.com/eBay/ebayui-core/pull/2141) [`7c26a76`](https://github.com/eBay/ebayui-core/commit/7c26a7647fdde40774f05f061daf84d202b5b621) Thanks [@cordeliadillon](https://github.com/cordeliadillon)! - progress-bar-expressive: new module

### Patch Changes

- [#2154](https://github.com/eBay/ebayui-core/pull/2154) [`3c1cb8e`](https://github.com/eBay/ebayui-core/commit/3c1cb8eb62f0eb47265fafe3e47502ade04b26bf) Thanks [@agliga](https://github.com/agliga)! - docs(snackbar): updated docs to support @action

## 13.4.0-next.0

### Minor Changes

- [`275bdac`](https://github.com/eBay/ebayui-core/commit/275bdac4688733764c62ec98150119c7614bb9ef) Thanks [@agliga](https://github.com/agliga)! - phone-input: new component

- [#2157](https://github.com/eBay/ebayui-core/pull/2157) [`4f8e826`](https://github.com/eBay/ebayui-core/commit/4f8e826d9378eba7f39aed2de7785085e4ce99c7) Thanks [@agliga](https://github.com/agliga)! - ebay-date-textbox: added floating label support

- [#2156](https://github.com/eBay/ebayui-core/pull/2156) [`3322847`](https://github.com/eBay/ebayui-core/commit/332284786f11d42dafc7cf023087bd34894f191c) Thanks [@agliga](https://github.com/agliga)! - icon-button: added priority attribute

- [#2141](https://github.com/eBay/ebayui-core/pull/2141) [`7c26a76`](https://github.com/eBay/ebayui-core/commit/7c26a7647fdde40774f05f061daf84d202b5b621) Thanks [@cordeliadillon](https://github.com/cordeliadillon)! - progress-bar-expressive: new module

### Patch Changes

- [#2154](https://github.com/eBay/ebayui-core/pull/2154) [`3c1cb8e`](https://github.com/eBay/ebayui-core/commit/3c1cb8eb62f0eb47265fafe3e47502ade04b26bf) Thanks [@agliga](https://github.com/agliga)! - docs(snackbar): updated docs to support @action

## 13.3.1

### Patch Changes

- [#2146](https://github.com/eBay/ebayui-core/pull/2146) [`4d93d4b`](https://github.com/eBay/ebayui-core/commit/4d93d4b034f1ea0a26f7fd51e06e999573194d08) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Notice base dismiss keydown fix

## 13.3.0

### Minor Changes

- [#2125](https://github.com/eBay/ebayui-core/pull/2125) [`6fac247`](https://github.com/eBay/ebayui-core/commit/6fac24752763c72f0584beb625402784adcddd44) Thanks [@agliga](https://github.com/agliga)! - education-notice: new component

- [#2139](https://github.com/eBay/ebayui-core/pull/2139) [`c1f16c2`](https://github.com/eBay/ebayui-core/commit/c1f16c2462fe0e25e140d48c47319168a88cd087) Thanks [@saiponnada](https://github.com/saiponnada)! - fix(button): add partially disabled support to button variants

- [#2128](https://github.com/eBay/ebayui-core/pull/2128) [`a782388`](https://github.com/eBay/ebayui-core/commit/a78238835031034f815d15d9107ed9310fd881ca) Thanks [@agliga](https://github.com/agliga)! - tooltip-base: added options to disable floating-ui middleware

### Patch Changes

- [#2137](https://github.com/eBay/ebayui-core/pull/2137) [`3d7ac4b`](https://github.com/eBay/ebayui-core/commit/3d7ac4b43f8500e8d5269b396057639bafdd02e7) Thanks [@agliga](https://github.com/agliga)! - chips-combobox: changed icon to be 12px, added docs for placeholder, fixed a11y text for remove

- [#2142](https://github.com/eBay/ebayui-core/pull/2142) [`3cd7333`](https://github.com/eBay/ebayui-core/commit/3cd7333944522a11b5bcc917611641f5d07127c3) Thanks [@agliga](https://github.com/agliga)! - Fix education icon types

- [#2131](https://github.com/eBay/ebayui-core/pull/2131) [`8348891`](https://github.com/eBay/ebayui-core/commit/83488912147a4c4702f322ba38041d15613527d3) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Fix types for ebay-tourtip

- [#2136](https://github.com/eBay/ebayui-core/pull/2136) [`e064638`](https://github.com/eBay/ebayui-core/commit/e06463813047ce1ce8a6c5fe7596efeacac4e422) Thanks [@agliga](https://github.com/agliga)! - listbox-button: removed btn--form whenn listbox is borderless

## 13.3.0-next.0

### Minor Changes

- [#2125](https://github.com/eBay/ebayui-core/pull/2125) [`6fac247`](https://github.com/eBay/ebayui-core/commit/6fac24752763c72f0584beb625402784adcddd44) Thanks [@agliga](https://github.com/agliga)! - education-notice: new component

- [#2139](https://github.com/eBay/ebayui-core/pull/2139) [`c1f16c2`](https://github.com/eBay/ebayui-core/commit/c1f16c2462fe0e25e140d48c47319168a88cd087) Thanks [@saiponnada](https://github.com/saiponnada)! - fix(button): add partially disabled support to button variants

- [#2128](https://github.com/eBay/ebayui-core/pull/2128) [`a782388`](https://github.com/eBay/ebayui-core/commit/a78238835031034f815d15d9107ed9310fd881ca) Thanks [@agliga](https://github.com/agliga)! - tooltip-base: added options to disable floating-ui middleware

### Patch Changes

- [#2137](https://github.com/eBay/ebayui-core/pull/2137) [`3d7ac4b`](https://github.com/eBay/ebayui-core/commit/3d7ac4b43f8500e8d5269b396057639bafdd02e7) Thanks [@agliga](https://github.com/agliga)! - chips-combobox: changed icon to be 12px, added docs for placeholder, fixed a11y text for remove

- [#2124](https://github.com/eBay/ebayui-core/pull/2124) [`3cd7333`](https://github.com/eBay/ebayui-core/commit/3cd7333944522a11b5bcc917611641f5d07127c3) Thanks [@github-actions](https://github.com/apps/github-actions)! - Fix education icon types

- [#2131](https://github.com/eBay/ebayui-core/pull/2131) [`8348891`](https://github.com/eBay/ebayui-core/commit/83488912147a4c4702f322ba38041d15613527d3) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Fix types for ebay-tourtip

- [#2136](https://github.com/eBay/ebayui-core/pull/2136) [`e064638`](https://github.com/eBay/ebayui-core/commit/e06463813047ce1ce8a6c5fe7596efeacac4e422) Thanks [@agliga](https://github.com/agliga)! - listbox-button: removed btn--form whenn listbox is borderless

## 13.2.4

### Patch Changes

- [#2134](https://github.com/eBay/ebayui-core/pull/2134) [`9ce7e55`](https://github.com/eBay/ebayui-core/commit/9ce7e55d9a87193171a725303f669e63f0ef7ad8) Thanks [@agliga](https://github.com/agliga)! - ebay-carousel: updated paddles to use 16px icons

- [`7b35647`](https://github.com/eBay/ebayui-core/commit/7b35647c375b83f25e08e170a7b0fce760ed7893) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Fix types for ebay-tourtip

## 13.2.3

### Patch Changes

- [#2122](https://github.com/eBay/ebayui-core/pull/2122) [`3937eff`](https://github.com/eBay/ebayui-core/commit/3937effb66dd35e7eaf0386280377f93f0b9a7ee) Thanks [@mkchang](https://github.com/mkchang)! - Fix signal custom class passthrough

## 13.2.2

### Patch Changes

- [#2112](https://github.com/eBay/ebayui-core/pull/2112) [`2e9da42`](https://github.com/eBay/ebayui-core/commit/2e9da42fbf82cc34d05f4418658001832b91d730) Thanks [@agliga](https://github.com/agliga)! - (ebay-icon): added gradient support for server

- [`8b21b40`](https://github.com/eBay/ebayui-core/commit/8b21b4037e13c1bf655f2374e54847ef006ff850) Thanks [@agliga](https://github.com/agliga)! - chore(ebay-icon): reimported icons from skin

## 13.2.1

### Patch Changes

- [#2110](https://github.com/eBay/ebayui-core/pull/2110) [`3f5edb2`](https://github.com/eBay/ebayui-core/commit/3f5edb2d92d12c59ce171c014c0ba20b2f798ac7) Thanks [@agliga](https://github.com/agliga)! - (ebay-tooltip-base): added option to ignore flip

- [`6042554`](https://github.com/eBay/ebayui-core/commit/60425549c4a785be1192390545bcca63c9488fdc) Thanks [@agliga](https://github.com/agliga)! - fix(listbox-button): added import for button styles

## 13.2.0

### Minor Changes

- [#2105](https://github.com/eBay/ebayui-core/pull/2105) [`5677ad9`](https://github.com/eBay/ebayui-core/commit/5677ad93623f99cca2fcd87a450f810c3aefa840) Thanks [@agliga](https://github.com/agliga)! - ebay-menu-button: fixed prefix label docs

- [#2105](https://github.com/eBay/ebayui-core/pull/2105) [`5677ad9`](https://github.com/eBay/ebayui-core/commit/5677ad93623f99cca2fcd87a450f810c3aefa840) Thanks [@agliga](https://github.com/agliga)! - ebay-tourtip: fixed shifting on page loads

- [#2105](https://github.com/eBay/ebayui-core/pull/2105) [`5677ad9`](https://github.com/eBay/ebayui-core/commit/5677ad93623f99cca2fcd87a450f810c3aefa840) Thanks [@agliga](https://github.com/agliga)! - Added auto publish to master

- [#2105](https://github.com/eBay/ebayui-core/pull/2105) [`5677ad9`](https://github.com/eBay/ebayui-core/commit/5677ad93623f99cca2fcd87a450f810c3aefa840) Thanks [@agliga](https://github.com/agliga)! - ebay-menu: fixed badge-aria-label docs

- [#2105](https://github.com/eBay/ebayui-core/pull/2105) [`5677ad9`](https://github.com/eBay/ebayui-core/commit/5677ad93623f99cca2fcd87a450f810c3aefa840) Thanks [@agliga](https://github.com/agliga)! - pass through attributes to ebay-confirm-dialog

## 13.2.0-next.0

### Minor Changes

- [`5677ad9`](https://github.com/eBay/ebayui-core/commit/5677ad93623f99cca2fcd87a450f810c3aefa840) Thanks [@agliga](https://github.com/agliga)! - ebay-menu-button: fixed prefix label docs

- [`5677ad9`](https://github.com/eBay/ebayui-core/commit/5677ad93623f99cca2fcd87a450f810c3aefa840) Thanks [@agliga](https://github.com/agliga)! - ebay-tourtip: fixed shifting on page loads

- [`5677ad9`](https://github.com/eBay/ebayui-core/commit/5677ad93623f99cca2fcd87a450f810c3aefa840) Thanks [@agliga](https://github.com/agliga)! - Added auto publish to master

- [`5677ad9`](https://github.com/eBay/ebayui-core/commit/5677ad93623f99cca2fcd87a450f810c3aefa840) Thanks [@agliga](https://github.com/agliga)! - ebay-menu: fixed badge-aria-label docs

- [`5677ad9`](https://github.com/eBay/ebayui-core/commit/5677ad93623f99cca2fcd87a450f810c3aefa840) Thanks [@agliga](https://github.com/agliga)! - pass through attributes to ebay-confirm-dialog

## 13.1.6

### Patch Changes

- [#2100](https://github.com/eBay/ebayui-core/pull/2100) [`277f12b`](https://github.com/eBay/ebayui-core/commit/277f12beaec60fb4d195932de189109d97931d82) Thanks [@LuLaValva](https://github.com/LuLaValva)! - fix segmented-buttons-import error

## 13.1.5

### Patch Changes

- [#2094](https://github.com/eBay/ebayui-core/pull/2094) [`182b335`](https://github.com/eBay/ebayui-core/commit/182b3353c5fa2a3574477db9c7888310a2cc025f) Thanks [@LuLaValva](https://github.com/LuLaValva)! - optimize icons with toJSON

## 13.1.4

### Patch Changes

- [#2096](https://github.com/eBay/ebayui-core/pull/2096) [`8217c8c`](https://github.com/eBay/ebayui-core/commit/8217c8cbad0f0b1f0335bcdec9e607f5e37aa031) Thanks [@agliga](https://github.com/agliga)! - added auto publish to master

A record of all notable changes are documented under [releases](https://github.com/eBay/ebayui-core/releases).

eBayUI-Core releases follow [Semantic Versioning](http://semver.org):

1. MAJOR version when we make incompatible API changes,
1. MINOR version when we add functionality in a backwards-compatible manner
1. PATCH version when we make backwards-compatible bug fixes.

Please remember to always read the release notes in full before upgrading major versions!
