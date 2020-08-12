const { setAttributeIfPresent } = require('../../common/migrators');

/**
 * @description
 * Changes attribute of button events
 */

function migrator(el, context) {
    setAttributeIfPresent(el, context, 'on-button-click', 'on-click');
    setAttributeIfPresent(el, context, 'on-button-escape', 'on-escape');
    return el;
}

module.exports = migrator;
