import Expander from 'makeup-expander';
import focusables from 'makeup-focusables';

export default {
    handleExpand() {
        this.emit('base-expand');
    },

    handleCollapse() {
        this.emit('base-collapse');
    },

    onMount() {
        this._setupBaseTooltip();
    },

    onUpdate() {
        this._setupBaseTooltip();
    },

    onInput(input) {
        if (input.open === true) {
            this.action = 'expand';
        } else if (input.open === false) {
            this.action = 'collapse';
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
        const isTourtip = type === 'tourtip';
        const expanderEl = container.getElementsByClassName(type)[0];

        if (host && !isTourtip) {
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

    _setupBaseTooltip() {
        if (this.input.type !== 'dialog--mini') {
            this._setupMakeup();
        }
        if (this.action && this._expander) {
            if (this.action === 'expand') {
                this.expand();
            } else if (this.action === 'collapse') {
                this.collapse();
            }
            this.action = null;
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
