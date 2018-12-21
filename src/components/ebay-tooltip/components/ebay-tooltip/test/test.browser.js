const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../../../common/test-utils/browser');
const renderer = require('../');
const locationStyles = require('./location-styles.json');

const pointerLocations = [
    'top-left',
    'top',
    'top-right',
    'right',
    'right-bottom',
    'right-top',
    'bottom-left',
    'bottom-right',
    'bottom',
    'left',
    'left-bottom',
    'left-top'
];

describe('given the default tooltip', () => {
    let widget;
    let hostEl;

    beforeEach(() => {
        const input = {
            host: {},
            content: {}
        };
        widget = renderer.renderSync(input).appendTo(document.body).getWidget();
        hostEl = widget.el.querySelector('.tooltip__host');
    });

    afterEach(() => widget.destroy());

    describe('when the host element is hovered', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('tooltip-expand', spy);
            testUtils.triggerEvent(hostEl, 'expander-expand');
        });

        test('then it emits the marko event from expander-expand event', () => {
            expect(spy.calledOnce).to.equal(true);
        });
    });

    describe('when the host element loses hover', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('tooltip-collapse', spy);
            testUtils.triggerEvent(hostEl, 'expander-collapse');
        });

        test('then it emits the marko event from expander-collapse event', () => {
            expect(spy.calledOnce).to.equal(true);
        });
    });
});

describe('given a custom-aligned tooltip', () => {
    const customLocation = '20px';
    let widget;
    let hostEl;

    beforeEach(() => {
        const input = {
            host: {},
            content: {},
            styleLeft: customLocation,
            styleTop: customLocation
        };
        widget = renderer.renderSync(input).appendTo(document.body).getWidget();
        hostEl = widget.el.querySelector('.tooltip__host');
    });

    afterEach(() => widget.destroy());

    describe('when the overlay is aligned', () => {
        let overlay;
        beforeEach(() => {
            overlay = widget.el.querySelector('.tooltip__overlay');
            testUtils.triggerEvent(hostEl, 'expander-expand');
        });

        test('then it sets the overlay styles correctly', () => {
            expect(overlay.style.transform).to.equal('');
            expect(overlay.style.left).to.equal('20px');
            expect(overlay.style.top).to.equal('20px');
            expect(overlay.style.right).to.equal('');
            expect(overlay.style.bottom).to.equal('');
        });
    });
});

pointerLocations.forEach(location => {
    describe(`given the default tooltip with location ${location}`, () => {
        let widget;
        let hostEl;

        beforeEach(() => {
            const input = {
                host: {},
                content: {},
                location
            };
            widget = renderer.renderSync(input).appendTo(document.body).getWidget();
            hostEl = widget.el.querySelector('.tooltip__host');
        });

        afterEach(() => widget.destroy());

        describe('when the host element is hovered', () => {
            let spy;
            let overlay;
            beforeEach(() => {
                spy = sinon.spy();
                overlay = widget.el.querySelector('.tooltip__overlay');
                widget.on('tooltip-expand', spy);
                testUtils.triggerEvent(hostEl, 'expander-expand');
            });

            test('then it emits the marko event from expander-expand event', () => {
                expect(spy.calledOnce).to.equal(true);
            });

            test('then it aligns the overlay', () => {
                expect(overlay.style.transform).to.equal(locationStyles[location].overlayTransform);
                expect(overlay.style.left).to.equal(locationStyles[location].overlayLeft);
                expect(overlay.style.top).to.equal(locationStyles[location].overlayTop);
                expect(overlay.style.right).to.equal(locationStyles[location].overlayRight);
                expect(overlay.style.bottom).to.equal(locationStyles[location].overlayBottom);
            });
        });
    });
});
