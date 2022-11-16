const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const template = require('../index.marko');
const { mock, mockFive } = require('./mock');
use(require('chai-dom'));

const colorsAll = ['primary', 'tertiary', 'secondary', 'quaternary', 'quinary'];
const colorsThree = ['primary', 'tertiary', 'secondary'];

it('renders defaults given input contains 3 portions', async () => {
    const { getByText } = await render(template, mock);

    mock.values.forEach((item, i) => {
        const textEl = getByText(item.text);
        expect(textEl.innerHTML).contains(item.text);
        expect(textEl.parentElement.innerHTML).contains(item.percentage * 100);
        expect(textEl.parentElement).has.class(`chart-legend__item--${colorsThree[i]}`);
    });
});

it('renders defaults given input contains 8 portions', async () => {
    const { getByText } = await render(template, mockFive);

    mockFive.values.forEach((item, i) => {
        const textEl = getByText(item.text);
        expect(textEl.innerHTML).contains(item.text);
        expect(textEl.parentElement.innerHTML).contains(item.percentage * 100);
        expect(textEl.parentElement).has.class(`chart-legend__item--${colorsAll[i]}`);
    });
});
