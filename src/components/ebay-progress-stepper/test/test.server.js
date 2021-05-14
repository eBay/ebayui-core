const { expect, use } = require('chai');
const { render, within } = require('@marko/testing-library');
const testUtils = require('../../../common/test-utils/server');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));

describe('stepper', () => {
    it('renders basic stepper', async () => {
        const input = mock.ProgressStepper;
        const { getByRole, getAllByRole, getByText } = await render(template, input);
        expect(getAllByRole('presentation')).has.length(3);
        expect(getByRole('list').parentElement).does.not.have.class('progress-stepper--vertical');

        const list = getAllByRole('listitem');
        expect(list).has.length(4);

        expect(getByText('3').parentElement.parentElement).has.attr('aria-current');

        checkItem(list[0], 'confirmation');
        checkItem(list[1], 'confirmation');
        checkItem(list[2], 3);
        checkItem(list[3], 4);
    });

    it('renders vertical stepper', async () => {
        const input = mock.ProgressStepper_Vertical;
        const { getByText, getByRole, getAllByRole } = await render(template, input);
        expect(getAllByRole('presentation')).has.length(3);
        expect(getByRole('list').parentElement).has.class('progress-stepper--vertical');

        const list = getAllByRole('listitem');
        expect(list).has.length(4);
        expect(getByText('3').parentElement.parentElement).has.attr('aria-current');

        checkItem(list[0], 'confirmation');
        checkItem(list[1], 'confirmation');
        checkItem(list[2], 3);
        checkItem(list[3], 4);
    });

    it('renders stepper with states', async () => {
        const input = mock.ProgressStepper_States;
        const { getAllByRole } = await render(template, input);
        expect(getAllByRole('presentation')).has.length(4);

        const list = getAllByRole('listitem');
        expect(list).has.length(5);

        checkItem(list[0], 'confirmation');
        checkItem(list[1], 2);
        checkItem(list[2], 3);
        checkItem(list[3], 'attention');
        checkItem(list[4], 'information');
    });

    function checkItem(list, icon) {
        const firstChild = list.children[0].children[0];
        if (typeof icon === 'number') {
            expect(within(firstChild).getAllByText(icon)).has.length(1);
        } else {
            expect(firstChild).has.class(`icon--stepper-${icon}`);
        }
    }

    testUtils.testPassThroughAttributes(template);
    testUtils.testPassThroughAttributes(template, {
        child: {
            name: 'step',
            input: mock.ProgressStepper.step[2],
            multiple: true,
        },
    });
});
