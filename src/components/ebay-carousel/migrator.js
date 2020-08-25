const { setAttributeIfPresent } = require('../../common/migrators');

/**
 * @description
 * Changes attribute of button events
 */

function migratorMarko4(el, context) {
    setAttributeIfPresent(el, context, 'on-carousel-update', 'on-move');
    setAttributeIfPresent(el, context, 'on-carousel-next', 'on-next');
    setAttributeIfPresent(el, context, 'on-carousel-previous', 'on-previous');
    setAttributeIfPresent(el, context, 'on-carousel-slide', 'on-slide');
    setAttributeIfPresent(el, context, 'on-carousel-scroll', 'on-scroll');
    setAttributeIfPresent(el, context, 'on-carousel-play', 'on-play');
    setAttributeIfPresent(el, context, 'on-carousel-pause', 'on-pause');
    return el;
}

function migratorMarko5() {
    return;
}

module.exports = function migrator(a, b) {
    if (a.hub) {
        return migratorMarko5(a, b);
    }

    return migratorMarko4(a, b);
};
