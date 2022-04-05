import { expect, use } from 'chai';
import { render } from '@marko/testing-library';
import template from '..';
import * as testUtils from '../../../common/test-utils/server';
import * as mock from './mock';

use(require('chai-dom'));

describe('stepper', () => {
    it('renders basic stepper', async () => {
        const input = mock.WizardStepper;
        const { getByRole, getAllByRole } = await render(template, input);
        expect(getAllByRole('presentation')).has.length(3);
        expect(getByRole('list').parentElement).does.not.have.class('stepper--vertical');

        const list = getAllByRole('listitem');
        expect(list).has.length(4);

        checkItem(list[0], 'confirmation', 'confirmation-filled');
        checkItem(list[1], 'confirmation', 'confirmation-filled');
        checkItem(list[2], 'current', 'circle');
        checkItem(list[3], 'upcoming', 'circle');
    });

    it('renders vertical stepper', async () => {
        const input = mock.stepperVertical;
        const { getByRole, getAllByRole } = await render(template, input);
        expect(getAllByRole('presentation')).has.length(3);
        expect(getByRole('list').parentElement).has.class('stepper--vertical');

        const list = getAllByRole('listitem');
        expect(list).has.length(4);

        checkItem(list[0], 'confirmation', 'confirmation-filled');
        checkItem(list[1], 'confirmation', 'confirmation-filled');
        checkItem(list[2], 'current', 'circle');
        checkItem(list[3], 'upcoming', 'circle');
    });

    it('renders stepper with states', async () => {
        const input = mock.stepperStates;
        const { getAllByRole } = await render(template, input);
        expect(getAllByRole('presentation')).has.length(5);

        const list = getAllByRole('listitem');
        expect(list).has.length(6);

        checkItem(list[0], 'confirmation', 'confirmation-filled');
        checkItem(list[1], 'current', 'circle');
        checkItem(list[2], 'upcoming', 'circle', 'attention');
        checkItem(list[3], 'attention', 'attention-filled', 'information');
        checkItem(list[4], 'information', 'information-filled', 'default');
        checkItem(list[5], 'default', 'number');
    });

    function checkItem(list, cls, icon, transition) {
        expect(list).has.class(`stepper__item--${cls}`);
        if (transition) {
            expect(list).has.class(`stepper__item--transition-${transition}`);
        }
        const firstChild = list.children[0].children[0];
        const iconClass = icon === 'number' ? 'badge' : `icon--${icon}`;
        expect(firstChild).has.class(iconClass);
    }

    testUtils.testPassThroughAttributes(template);
    testUtils.testPassThroughAttributes(template, {
        child: {
            name: 'step',
            input: mock.WizardStepper.step[2],
            multiple: true,
        },
    });
});
