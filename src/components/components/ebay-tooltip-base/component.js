const Expander = require('makeup-expander');
const focusables = require('makeup-focusables');

module.exports = {
    handleExpand() {
        this.emit('base-expand');
    },

    handleCollapse() {
        this.emit('base-collapse');
    },

    onMount() {
        this._setupMakeup();
    },

    onUpdate() {
        this._setupMakeup();
    },

    onRender() {
        if (typeof window !== 'undefined') {
            this._cleanupMakeup();
        }
    },

    onDestroy() {
        this._cleanupMakeup();
    },

    _setupMakeup() {
        const { input } = this;
        const { type } = input;
        const container = this.getEl('container');
        const isTooltip = type === 'tooltip';
        const isInfotip = type === 'infotip';
        const hostClass = `${type}__host`;
        const hostSelector = `.${hostClass}`;
        const expanderEl = container.getElementsByClassName(type)[0];
        let host = container.querySelector(hostSelector);

        if (!host) {
            const curFocusable = focusables(container)[0];
            if (curFocusable) {
                host = curFocusable;

                if (!curFocusable.classList.has(hostClass)) {
                    curFocusable.classList.add(hostClass);
                }
            }
        }

        if (host) {
            this._expander = new Expander(expanderEl, {
                hostSelector: hostSelector,
                contentSelector: `.${type}__overlay`,
                expandedClass: `${type}--expanded`,
                focusManagement: null,
                expandOnFocus: isTooltip,
                expandOnHover: isTooltip && !input.noHover,
                expandOnClick: isInfotip,
                autoCollapse: isTooltip
            });

            if (!host.hasAttribute('aria-describedby')) {
                host.setAttribute('aria-describedby', input.overlayId);
            }
        }
    },

    _cleanupMakeup() {
        if (this._expander) {
            this._expander.cancelAsync();
            this._expander = undefined;
        }
    }
};
