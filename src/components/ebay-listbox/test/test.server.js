const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/server');
const options = [{
    value: 1,
    label: 'option 1'
}, {
    value: 2,
    label: 'option 2'
}];

test('renders basic version', context => {
    const input = { options };
    const $ = testUtils.getCheerio(context.render(input));
    expect($('.listbox').length).to.equal(1);
    expect($('.listbox__control').length).to.equal(1);
    expect($('.listbox__options[role=listbox]').length).to.equal(1);
    expect($('.listbox__option[role=option]').length).to.equal(2);
    expect($('.listbox__option[role=option][aria-selected="true"]').length).to.equal(1);
});

test('renders with second item selected', context => {
    const input = { options };
    input.options[0].selected = false;
    input.options[1].selected = true;
    const $ = testUtils.getCheerio(context.render(input));
    expect($('.listbox').length).to.equal(1);
    expect($('.listbox__control').length).to.equal(1);
    expect($('.listbox__options[role=listbox]').length).to.equal(1);
    expect($('.listbox__option[role=option]').length).to.equal(2);
    expect($('.listbox__option[role=option][aria-selected="true"]:nth-child(2)').length).to.equal(1);
});
