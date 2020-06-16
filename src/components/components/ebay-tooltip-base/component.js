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

    collapse() {
        this._expander.collapse();
    },

    expand() {
        this._expander.expand();
    },

    onDestroy() {
        this._cleanupMakeup();
    },

    _setupExpander(host, hostSelector) {
        const { input } = this;
        const { type } = input;
        const container = this.getEl('container');
        const isTooltip = type === 'tooltip';
        const isInfotip = type === 'infotip' || type === 'dialog--mini';
        const expanderEl = container.getElementsByClassName(type)[0];

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

            if (isTooltip && !host.hasAttribute('aria-describedby')) {
                host.setAttribute('aria-describedby', input.overlayId);
            }
        }
    },

    _setupMakeup() {
        const { input } = this;
        const { type } = input;
        const container = this.getEl('container');
        const hostClass = `${type}__host`;
        const hostSelector = `.${hostClass}`;
        let host = container.querySelector(hostSelector);

        if (!host) {
            if (this.cancelFocus) {
                this.cancelFocus();
            }

            this.cancelFocus = focusables(container, false, (curFocusables) => {
                const curFocusable = curFocusables[0];
                if (curFocusable) {
                    host = curFocusable;

                    if (!curFocusable.classList.contains(hostClass)) {
                        curFocusable.classList.add(hostClass);
                    }
                }
                this._setupExpander(host, hostSelector);
            });
        } else {
            this._setupExpander(host, hostSelector);
        }
    },

    _cleanupMakeup() {
        if (this.cancelFocus) {
            this.cancelFocus();
        }

        if (this._expander) {
            this._expander.cancelAsync();
            this._expander = undefined;
        }
    }
};
