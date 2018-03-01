const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/browser');
const mock = require('../mock');
const renderer = require('../');

const privates = renderer.privates;
const constants = privates.constants;
const defaults = privates.defaults;

describe('given the carousel is in the default state', () => {
    let widget;
    let root;

    beforeEach(() => {
        widget = renderer.renderSync().appendTo(document.body).getWidget();
        root = document.querySelector('.carousel');
    });
    afterEach(() => widget.destroy());

    describe('when it is rendered', () => {
        it('then it sets state to correct defaults', () => {
            expect(widget.state.index).to.equal(defaults.index);
            expect(widget.state.type).to.equal(defaults.type);
        });

        it('then it exposes state on root element', () => {
            expect(root.index).to.equal(defaults.index);
        });
    });
});

describe('given the carousel has non-default input', () => {
    const input = { index: 1 };
    let widget;
    let root;

    beforeEach(() => {
        widget = renderer.renderSync(input).appendTo(document.body).getWidget();
        root = document.querySelector('.carousel');
    });
    afterEach(() => widget.destroy());

    describe('when it is rendered', () => {
        it('then it uses state from input attributes', () => {
            expect(root.index).to.equal(input.index);
        });
    });
});

describe('given the carousel with body starts in the default state', () => {
    const input = { items: mock.items };
    let widget;
    let root;
    let list;
    let nextButton;

    beforeEach(() => {
        widget = renderer.renderSync(input).appendTo(document.body).getWidget();
        root = document.querySelector('.carousel');
        list = root.querySelector('.carousel__list');
        nextButton = root.querySelector('.carousel__control--next');
    });
    afterEach(() => widget.destroy());

    describe('when index is updated programmatically', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('carousel-translate', spy);
            widget.update_index(1); // root.index = 1; does not trigger update_index in tests
        });

        it('then it emits the marko event', () => {
            expect(spy.calledOnce).to.equal(true);
        });

        it('then it applies a translation', () => {
            const translation = mock.itemWidth + constants.margin;
            expect(list.style.transform).to.equal(`translateX(-${translation}px)`);
        });
    });

    describe('when next button is clicked', () => {
        let nextSpy;
        let translateSpy;
        beforeEach((done) => {
            nextSpy = sinon.spy();
            translateSpy = sinon.spy();
            widget.on('carousel-next', nextSpy);
            widget.on('carousel-translate', translateSpy);
            testUtils.triggerEvent(nextButton, 'click');
            setTimeout(done);
        });

        it('then it emits the marko next event', () => {
            expect(nextSpy.calledOnce).to.equal(true);
        });

        it('then it emits the marko translate event', () => {
            expect(translateSpy.calledOnce).to.equal(true);
        });

        it('then it applies a translation', () => {
            expect(list.style.transform).to.equal('translateX(-448px)');
        });
    });
});
