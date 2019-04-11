const rovingTabindex = require('makeup-roving-tabindex');
const emitAndFire = require('../../common/emit-and-fire');
const eventUtils = require('../../common/event-utils');
const observer = require('../../common/property-observer');

module.exports = require('marko-widgets').defineComponent({
    template: require("./template.marko"),
    getInitialProps(input) {
        return Object.assign({
            activation: 'auto',
            headings: [],
            panels: []
        }, input);
    },
    getInitialState(input) {
        return Object.assign({}, input, {
            index: (parseInt(input.index, 10) || 0) % (input.headings.length || 1)
        });
    },
    init() {
        if (!this.state.fake) {
            const linearRovingTabindex = rovingTabindex.createLinear(
                this.getEl('headings'),
                '.tabs__item',
                { index: this.state.index }
            );
    
            linearRovingTabindex.wrap = true;
        }
    
        observer.observeRoot(this, ['index'], index => this.setIndex(index), true);
    },
    /**
     * Handle a11y for heading
     * https://ebay.gitbooks.io/mindpatterns/content/disclosure/tabs.html
     * @param {KeyboardEvent} event
     * @param {HTMLDivElement} el
     */
    handleHeadingKeydown(event, el) {
        eventUtils.handleActionKeydown(event, () => {
            event.preventDefault();

            if (this.state.activation === 'auto') {
                this.setIndex(el.dataset.index);
            }
        });

        eventUtils.handleLeftRightArrowsKeydown(event, () => {
            event.preventDefault();

            const len = this.state.headings.length;
            const keyCode = event.charCode || event.keyCode;
            const direction = keyCode === 37 ? -1 : 1;
            const index = (this.state.index + len + direction) % len;
            this.getEl(`tab-${index}`).focus();

            if (this.state.activation === 'auto') {
                this.setIndex(index);
            }
        });
    },
    handleHeadingClick(_, el) {
        this.setIndex(el.dataset.index);
    },
    setIndex(index) {
        const len = this.state.headings.length;
        index = parseInt(index, 10) || 0;
        index = (index + len) %  len;

        if (index !== this.state.index) {
            this.setState('index', index);
            emitAndFire(this, 'tab-select', { index });
        }
    }
});
