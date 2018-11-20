const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/browser');
const renderer = require('../');

describe('given the default tooltip', () => {
    let widget;
    let tooltip;

    beforeEach(() => {
        const input = {
            tooltips: [{}],
            contents: [{}]
        };
        widget = renderer.renderSync(input).appendTo(document.body).getWidget();
        tooltip = widget.el.querySelector('.tooltip');
    });

    afterEach(() => widget.destroy());

    describe('when the tooltip is expanded', () => {
        beforeEach(() => {
            testUtils.triggerEvent(tooltip, 'expander-expand');
        });

        test('then it sets the correct expanded state', () => {
            expect(widget.state.expandInit).to.equal(true);
            expect(widget.state.expanded).to.equal(true);
        });
    });

    describe('when the tooltip is collapsed', () => {
        beforeEach(() => {
            testUtils.triggerEvent(tooltip, 'expander-expand');
            testUtils.triggerEvent(tooltip, 'expander-collapse');
        });

        test('then it sets the correct collapsed state', () => {
            expect(widget.state.expandInit).to.equal(true);
            expect(widget.state.expanded).to.equal(false);
        });
    });
});
