const { createIconFromAttribute } = require('../../common/migrators');

// Transforms an `icon` attribute into an `<ebay-menu:_icon>` tag
function migrator(el, context) {
    createIconFromAttribute(el, context, 'icon');
}

module.exports = migrator;
