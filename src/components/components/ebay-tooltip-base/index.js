const Expander = require('makeup-expander');
const focusables = require('makeup-focusables');

module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    getInitialState(input) {
        return input;
    },
    onRender() {
        const hostClass = `${this.state.type}__host`;
        const hostSelector = `.${hostClass}`;
        const expanderEl = this.el.getElementsByClassName(this.state.type)[0];
    
        this.curFocusable = focusables(this.el)[0];
    
        if (this.curFocusable) {
            this.curFocusable.classList.add(hostClass);
        }
    
        this.host = this.el.querySelector(hostSelector);
    
        const hostAriaDescribedBy = this.host &&
            this.host.hasAttribute('aria-describedby') &&
            this.host.getAttribute('aria-describedby');
        const isTooltip = this.state.type === 'tooltip';
    
        if (this.host) {
            this.expander = new Expander(expanderEl, {
                hostSelector: hostSelector,
                contentSelector: `.${this.state.type}__overlay`,
                expandedClass: `${this.state.type}--expanded`,
                focusManagement: null,
                expandOnFocus: isTooltip,
                expandOnHover: isTooltip && !this.state.noHover,
                expandOnClick: this.state.type === 'infotip',
                autoCollapse: isTooltip
            });
    
            if (!hostAriaDescribedBy && this.el.parentElement) {
                this.host.setAttribute('aria-describedby', `${this.el.parentElement.id}-overlay`);
            }
        }
    },
    onBeforeUpdate() {
        if (this.expander) {
            this.expander.cancelAsync();
        }
    },
    handleExpand() {
        this.emit('base-expand');
    },
    handleCollapse() {
        this.emit('base-collapse');
    }
});
