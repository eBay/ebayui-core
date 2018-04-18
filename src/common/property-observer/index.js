const _get = require('lodash.get');
const _set = require('lodash.set');

/**
 * For each attribute, define getter and setter on root DOM element of the widget
 * @param {Object} widget
 * @param {Array} attributes
 */
function observeRoot(widget, attributes, callback) {
    attributes.forEach(attribute => {
        Object.defineProperty(widget.el, attribute, {
            get() {
                return widget.state[attribute];
            },
            set(value) {
                widget.setState(attribute, value);
                if (callback) {
                    callback(value);
                }
            }
        });
    });
}

/**
 * Define getter and setter on a non-root DOM element of the widget
 * @param {Object} widget: Widget instance
 * @param {HTMLElement} el: Element for attaching observer
 * @param {String} attribute: Name of stateful property
 * @param {String} path: Path to part of state that needs to be accessed
 * @param {String} dirtyPath: Path to use with setStateDirty()
 */
function observeInner(widget, el, attribute, path, dirtyPath, callback) {
    Object.defineProperty(el, attribute, {
        get() {
            return _get(widget.state, `${path}.${attribute}`);
        },
        set(value) {
            _set(widget.state, `${path}.${attribute}`, value);
            if (dirtyPath) {
                widget.setStateDirty(dirtyPath);
            }
            callback(el);
        }
    });
}

module.exports = { observeRoot, observeInner };
