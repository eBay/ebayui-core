const Expander = require('makeup-expander');
const assign = require('core-js-pure/features/object/assign');
const findIndex = require('core-js-pure/features/array/find-index');
const ActiveDescendant = require('makeup-active-descendant');
const scrollKeyPreventer = require('makeup-prevent-scroll-keys');
const elementScroll = require('../../common/element-scroll');

module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    getInitialProps(input) {
        return assign({
            options: []
        }, input);
    },
    getInitialState(input) {
        const index = findIndex(input.options, option => option.selected);

        return assign({}, input, {
            selectedIndex: index === -1 ? 0 : index
        });
    },
    init() {
        // TODO: needs to be in on render.
        const optionsContainer = this.getEl('options');
        this.activeDescendant = ActiveDescendant.createLinear(
            this.el,
            optionsContainer,
            optionsContainer,
            '.listbox-button__option[role=option]',
            {
                activeDescendantClassName: 'listbox-button__option--active',
                autoInit: this.state.selectedIndex,
                autoReset: null
            },
        );

        this.expander = new Expander(this.el, {
            autoCollapse: true,
            expandOnClick: !this.state.disabled,
            contentSelector: '.listbox-button__listbox',
            hostSelector: '.listbox-button__control',
            expandedClass: 'listbox-button--expanded',
            focusManagement: 'content',
            simulateSpacebarClick: true
        });

        this
            .subscribeTo(this.el)
            .on('activeDescendantChange', this.handleListboxChange.bind(this));

        scrollKeyPreventer.add(this.getEl('button'));
        scrollKeyPreventer.add(this.getEl('options'));
    },
    handleExpand() {
        elementScroll.scroll(this.getEls('option')[this.state.selectedIndex]);
        this.emit('listbox-expand');
    },
    handleCollapse() {
        this.emit('listbox-collapse');
    },
    handleListboxChange(event) {
        const selectedIndex = parseInt(event.detail.toIndex, 10);
        const el = this.getEls('option')[selectedIndex];
        const option = this.state.options[selectedIndex];

        elementScroll.scroll(el);
        this.setState('selectedIndex', selectedIndex);

        // TODO: we should not cast the selected value to a string here, but this is a breaking change.
        this.emit('listbox-change', {
            index: selectedIndex,
            selected: [String(option.value)],
            el
        });
    }
});
