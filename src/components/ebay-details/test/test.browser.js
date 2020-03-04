const assign = require('core-js-pure/features/object/assign');
const { expect, use } = require('chai');
const { render, fireEvent, cleanup } = require('@marko/testing-library');
const mock = require('./mock');
const template = require('..');

use(require('chai-dom'));
afterEach(cleanup);
let component;

describe('given the details is in the default state', () => {
    const input = mock.Default_Details;

    beforeEach(async() => {
        component = await render(template, input);
    });

    it('should render with open false', () => {
        expect(component.getByText(input.text).closest('details').open).to.equal(false);
    });
});

describe('given the details is in the open state', () => {
    const input = mock.Open_Details;

    beforeEach(async() => {
        component = await render(template, input);
    });

    it('should render with open false', () => {
        expect(component.getByText(input.text).closest('details').open).to.equal(true);
    });
});

describe('given the details is in the default state and click is triggered', () => {
    const input = mock.Default_Details;
    const detailsText = input.text;

    beforeEach(async() => {
        component = await render(template, input);
    });

    describe('click on details', () => {
        beforeEach(async() => {
            await fireEvent.click(component.getByText(detailsText));
        });

        it('then it emits the details-toggle and click', () => {
            verifyToggleEvent(true);
            verifyClickEvent();
        });
    });

    describe('details should properly toggle open property', () => {
        beforeEach(async() => {
            await component.rerender(assign({}, input, { open: true }));
        });

        it('then it should have open true', () => {
            expect(component.getByText(detailsText).closest('details').open).to.equal(true);
        });
    });
});

describe('given the details is in the open state and click is triggered', () => {
    const input = mock.Open_Details;
    const detailsText = input.text;

    beforeEach(async() => {
        component = await render(template, input);
    });

    describe('click on details', () => {
        beforeEach(async() => {
            verifyToggleEvent(true);

            await fireEvent.click(component.getByText(detailsText));
        });

        it('then it emits the details-toggle and click', () => {
            verifyToggleEvent(false);
            verifyClickEvent();
        });
    });

    describe('details should properly toggle open property', () => {
        beforeEach(async() => {
            verifyToggleEvent(true);
            await component.rerender(assign({}, input, { open: false }));
        });

        it('then it should have open true', () => {
            expect(component.getByText(detailsText).closest('details').open).to.equal(false);
        });
    });
});

function verifyToggleEvent(isOpen) {
    const toggleEvent = component.emitted('details-toggle');
    expect(toggleEvent).to.length(1);

    const [[eventArg]] = toggleEvent;
    expect(eventArg).has.property('open', isOpen);
    expect(eventArg).has.property('originalEvent').is.an.instanceOf(Event);
}

function verifyClickEvent() {
    const toggleEvent = component.emitted('details-click');
    expect(toggleEvent).to.length(1);

    const [[eventArg]] = toggleEvent;
    expect(eventArg).has.property('originalEvent').is.an.instanceOf(Event);
}
