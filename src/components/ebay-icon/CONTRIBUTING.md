# Contributing to <ebay-icon>

## How To Add a New Icon

1.  First add the icon to the [DS4 or DS6 folders](https://github.com/eBay/skin/tree/master/src/svg) in [@ebay/skin](https://github.com/eBay/skin).
2.  Publish the changes in @ebay/skin and update the dependency in this repository.
3.  Run `node ./scripts/import-svg` from this project to import the icons into this repository.

Notes:

- All Icons are automatically added to `./src/components/components/ebay-icon-base/icons` and this folder should not be touched.
