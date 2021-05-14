const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const testUtils = require('../../../common/test-utils/server');
const template = require('..');
const mock = require('./mock');

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
        const input = mock.WizardStepper_Vertical;
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
        const input = mock.WizardStepper_States;
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
