import { expect, use } from 'chai';
import { render, within } from '@marko/testing-library';
import template from '..';
import * as testUtils from '../../../common/test-utils/server';
import * as mock from './mock';

use(require('chai-dom'));

describe('stepper', () => {
    it('renders basic stepper', async () => {
        const input = mock.ProgressStepper;
        const { getByLabelText, getByRole, getAllByRole, getByText } = await render(
            template,
            input
        );

        expect(getByLabelText(input.a11yHeadingText)).has.class('progress-stepper');

        expect(getAllByRole('presentation')).has.length(3);
        expect(getByRole('list').parentElement).does.not.have.class('progress-stepper--vertical');

        const list = getAllByRole('listitem');
        expect(list).has.length(4);

        expect(getByText('status 2').parentElement.parentElement).has.attr('aria-current');

        checkItem(list[0], 'confirmation');
        checkItem(list[1], 'confirmation');
        checkItem(list[2], 'status 2', true);
        checkItem(list[3], 'status 3', true);

        expect(getByLabelText('a11yIconLabel')).has.attr('role', 'img');
    });

    it('renders vertical stepper', async () => {
        const input = mock.progressStepperVertical;
        const { getByText, getByRole, getAllByRole } = await render(template, input);
        expect(getAllByRole('presentation')).has.length(3);
        expect(getByRole('list').parentElement).has.class('progress-stepper--vertical');

        const list = getAllByRole('listitem');
        expect(list).has.length(4);
        expect(getByText('status 2').parentElement.parentElement).has.attr('aria-current');

        checkItem(list[0], 'confirmation');
        checkItem(list[1], 'confirmation');
        checkItem(list[2], 'status 2', true);
        checkItem(list[3], 'status 3', true);
    });

    it('renders stepper with states', async () => {
        const input = mock.progressStepperStates;
        const { getAllByRole } = await render(template, input);
        expect(getAllByRole('presentation')).has.length(4);

        const list = getAllByRole('listitem');
        expect(list).has.length(5);

        checkItem(list[0], 'confirmation');
        checkItem(list[1], 'status 1', true);
        checkItem(list[2], 'status 2', true);
        checkItem(list[3], 'attention');
        checkItem(list[4], 'information');
    });

    function checkItem(list, icon, text) {
        const firstChild = list.children[0].children[0];
        if (text) {
            expect(within(list).getAllByText(icon)).has.length(1);
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
