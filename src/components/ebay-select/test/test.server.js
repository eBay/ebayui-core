const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');
const options = [{
    value: 1,
    label: 'option 1'
}, {
    value: 2,
    label: 'option 2'
}];
const emptyOptions = [];

test('renders basic version', context => {
    const input = { options };
    const $ = testUtils.getCheerio(context.render(input));
    expect($('.combobox').length).to.equal(1);
    expect($('.combobox__control').length).to.equal(1);
    expect($('.combobox__options[role=listbox]').length).to.equal(1);
    expect($('.combobox__option[role=option]').length).to.equal(2);
    expect($('.combobox__option[role=option][aria-selected="true"]').length).to.equal(1);
});

test('renders empty', context => {
    const input = { emptyOptions };
    const $ = testUtils.getCheerio(context.render(input));
    expect($('.combobox').length).to.equal(1);
    expect($('.combobox__control').length).to.equal(1);
    expect($('.combobox__options[role=listbox]').length).to.equal(0);
    expect($('.combobox__option[role=option]').length).to.equal(0);
});

test('renders with second item selected', context => {
    const input = { options };
    input.options[0].selected = false;
    input.options[1].selected = true;
    const $ = testUtils.getCheerio(context.render(input));
    expect($('.combobox').length).to.equal(1);
    expect($('.combobox__control').length).to.equal(1);
    expect($('.combobox__options[role=listbox]').length).to.equal(1);
    expect($('.combobox__option[role=option]').length).to.equal(2);
    expect($('.combobox__option[role=option][aria-selected="true"]:nth-child(2)').length).to.equal(1);
});
