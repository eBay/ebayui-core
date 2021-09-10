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
        if (this.input.type !== 'dialog--mini') {
            this._setupMakeup();
        }
    },

    onUpdate() {
        if (this.input.type !== 'dialog--mini') {
            this._setupMakeup();
        }
    },

    onInput(input) {
        if (this._expander) {
            if (input.open === true) {
                this.handleExpand();
                this.expand();
            } else if (input.open === false) {
                this.handleCollapse();
                this.collapse();
            }
        }
    },

    onRender() {
        if (typeof window !== 'undefined') {
            this._cleanupMakeup();
        }
    },

    collapse() {
        this._expander.expanded = false;
    },

    expand() {
        this._expander.expanded = true;
    },

    isExpanded() {
        return this._expander.expanded;
    },

    onDestroy() {
        this._cleanupMakeup();
    },

    _setupExpander(host, hostSelector) {
        const { input } = this;
        const { type } = input;
        const container = this.getEl('container');
        const isTooltip = type === 'tooltip';
        const isInfotip = type === 'infotip';
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
                autoCollapse: isTooltip,
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
            this._expander.destroy();
            this._expander = undefined;
        }
    },
};
