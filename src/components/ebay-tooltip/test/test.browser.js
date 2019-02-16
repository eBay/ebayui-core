const sinon = require('sinon');
const expect = require('chai').expect;
const renderer = require('../');
const pointerStyles = require('./location-styles.json');

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
    let baseWidget;

    beforeEach(() => {
        const input = {
            host: {},
            content: {}
        };
        widget = renderer.renderSync(input).appendTo(document.body).getWidget();
        baseWidget = widget.getWidget('base');
    });

    afterEach(() => widget.destroy());

    describe('when the host element is hovered', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('tooltip-expand', spy);
            baseWidget.emit('base-expand');
        });

        test('then it emits the tooltip-expand event', () => {
            expect(spy.calledOnce).to.equal(true);
        });
    });

    describe('when the host element loses hover', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('tooltip-collapse', spy);
            baseWidget.emit('base-collapse');
        });

        test('then it emits the tooltip-collapse event', () => {
            expect(spy.calledOnce).to.equal(true);
        });
    });
});

describe('given a custom-aligned tooltip', () => {
    const customLocation = '20px';
    let widget;
    let baseWidget;

    beforeEach(() => {
        const input = {
            host: {},
            content: {},
            styleLeft: customLocation,
            styleTop: customLocation
        };
        widget = renderer.renderSync(input).appendTo(document.body).getWidget();
        baseWidget = widget.getWidget('base');
    });

    afterEach(() => widget.destroy());

    describe('when the overlay is aligned', () => {
        let overlay;
        beforeEach(() => {
            overlay = widget.el.querySelector('.tooltip__overlay');
            baseWidget.emit('base-expand');
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

pointerLocations.forEach(pointer => {
    describe(`given the default tooltip with pointer ${pointer}`, () => {
        let widget;
        let baseWidget;

        beforeEach(() => {
            const input = {
                host: {},
                content: {},
                pointer
            };
            widget = renderer.renderSync(input).appendTo(document.body).getWidget();
            baseWidget = widget.getWidget('base');
        });

        afterEach(() => widget.destroy());

        describe('when the host element is hovered', () => {
            let spy;
            let overlay;
            beforeEach(() => {
                spy = sinon.spy();
                overlay = widget.el.querySelector('.tooltip__overlay');
                widget.on('tooltip-expand', spy);
                baseWidget.emit('base-expand');
            });

            test('then it emits the tooltip-expand event', () => {
                expect(spy.calledOnce).to.equal(true);
            });

            test('then it aligns the overlay', () => {
                expect(overlay.style.transform).to.equal(pointerStyles[pointer].overlayTransform);
                expect(overlay.style.left).to.equal(pointerStyles[pointer].overlayLeft);
                expect(overlay.style.top).to.equal(pointerStyles[pointer].overlayTop);
                expect(overlay.style.right).to.equal(pointerStyles[pointer].overlayRight);
                expect(overlay.style.bottom).to.equal(pointerStyles[pointer].overlayBottom);
            });
        });
    });
});
