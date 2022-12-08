import { expect, use } from 'chai';
import chaiDom from 'chai-dom';
import { render } from '@marko/testing-library';
import template from '../index.marko';
import { createRenderBody } from '../../../common/test-utils/shared';

use(chaiDom);

const mock = {
    portions: [
        {
            value: '7',
            text: 'Value 1',
        },
        {
            value: '3',
            text: 'Value 2',
        },
        {
            value: '2',
            text: 'Value 3',
        },
    ],
    description: { renderBody: createRenderBody('description of chart') },
};

const mockFive = {
    ...mock,
    portions: [
        ...mock.portions,
        {
            value: '7',
            text: 'Value 4',
        },
        {
            value: '1',
            text: 'Value 5',
        },
    ],
};

const colorsAll = ['primary', 'tertiary', 'secondary', 'quaternary', 'quinary'];
const colorsThree = ['primary', 'tertiary', 'secondary'];
describe('donut-chart', () => {
    it('renders defaults given input contains 3 portions', async () => {
        const { getByText, getAllByText } = await render(template, mock);
        // const { getByText, getAllByRole, getAllByText } = await render(template, mock);
        const descEl = getAllByText('description of chart');
        // const pathEls = getAllByRole('graphics-symbol');

        expect(descEl[0].innerHTML).contains('description of chart');

        mock.portions.forEach((item, i) => {
            const textEl = getByText(item.text);
            expect(textEl.innerHTML).contains(item.text);
            expect(textEl.parentElement).has.class(`chart-legend__item--${colorsThree[i]}`);
            // expect(pathEls[i]).has.class(`donut-graph__segment--${colorsThree[i]}`);
        });
    });

    it('renders defaults given input contains 5 portions', async () => {
        const { getByText, getAllByText } = await render(template, mockFive);
        // const { getByText, getAllByRole, getAllByText } = await render(template, mockFive);
        const descEl = getAllByText('description of chart');
        // const pathEls = getAllByRole('graphics-symbol');
        expect(descEl[0].innerHTML).contains('description of chart');

        mock.portions.forEach((item, i) => {
            const textEl = getByText(item.text);
            expect(textEl.innerHTML).contains(item.text);
            expect(textEl.parentElement).has.class(`chart-legend__item--${colorsAll[i]}`);
            // expect(pathEls[i]).has.class(`donut-graph__segment--${colorsAll[i]}`);
        });
    });
});
