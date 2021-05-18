/**
 * @description
 * Changes attribute of button events
 */

function migratorMarko4(el, context) {
    if (el.hasAttribute('no-text')) {
        context.deprecate(
            'no-text has been deprecated from expand-button. Instead just dont include any body content'
        );
        el.removeAttribute('no-text');
    }

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
