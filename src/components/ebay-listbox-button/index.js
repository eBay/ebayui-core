const Expander = require('makeup-expander');
const findIndex = require('core-js/library/fn/array/find-index');
const ActiveDescendant = require('makeup-active-descendant');
const scrollKeyPreventer = require('makeup-prevent-scroll-keys');
const elementScroll = require('../../common/element-scroll');
const emitAndFire = require('../../common/emit-and-fire');
const observer = require('../../common/property-observer');

module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    getInitialProps(input) {
        return Object.assign({
            options: []
        }, input);
    },
    getInitialState(input) {
        const index = findIndex(input.options, option => option.selected);

        return Object.assign({}, input, {
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
            '.listbox__option[role=option]',
            {
                activeDescendantClassName: 'listbox__option--active',
                autoInit: this.state.selectedIndex,
                autoReset: null
            },
        );

        this.expander = new Expander(this.el, {
            autoCollapse: true,
            expandOnClick: !this.state.disabled,
            contentSelector: `#${optionsContainer.id}`,
            hostSelector: `#${this.getEl('button').id}`,
            expandedClass: 'listbox--expanded',
            focusManagement: 'content',
            simulateSpacebarClick: true
        });

        this
            .subscribeTo(this.el)
            .on('activeDescendantChange', this.handleListboxChange.bind(this));

        observer.observeRoot(this, ['selected'], (index) => {
            this.setSelectedIndex(index);
        });

        observer.observeRoot(this, ['disabled'], () => {
            this.expander.expandOnClick = !this.state.disabled;
        });

        this.getEls('option').forEach((optionEl, i) => {
            Object.defineProperty(optionEl, 'selected', {
                get: () => this.state.selectedIndex === i,
                set: (value) => this.setSelectedIndex(value ? i : 0)
            });
        });

        scrollKeyPreventer.add(this.getEl('button'));
        scrollKeyPreventer.add(this.getEl('options'));
    },
    handleExpand() {
        elementScroll.scroll(this.getEls('option')[this.state.selectedIndex]);
        emitAndFire(this, 'listbox-expand');
    },
    handleCollapse() {
        emitAndFire(this, 'listbox-collapse');
    },
    handleListboxChange(event) {
        this.setSelectedIndex(parseInt(event.detail.toIndex, 10));
    },
    setSelectedIndex(selectedIndex) {
        const el = this.getEls('option')[selectedIndex];
        const option = this.state.options[selectedIndex];

        elementScroll.scroll(el);
        this.setState('selectedIndex', selectedIndex);

        // TODO: we should not cast the selected value to a string here, but this is a breaking change.
        emitAndFire(this, 'listbox-change', {
            index: selectedIndex,
            selected: [String(option.value)],
            el
        });
    }
});
