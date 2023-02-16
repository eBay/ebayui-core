import { composeStories } from '@storybook/marko/dist/testing';
import { snapshotHTML } from '../../../common/test-utils/snapshots';
import { createRenderBody } from '../../../common/test-utils/shared';
import * as stories from '../combobox.stories';
const { testPassThroughAttributes } = require('../../../common/test-utils/server');

const { Isolated, FloatingLabel } = composeStories(stories);

const htmlSnap = snapshotHTML(__dirname);

describe('combobox', () => {
    it('renders basic version', async () => {
        await htmlSnap(Isolated);
    });

    it('renders empty', async () => {
        await htmlSnap(Isolated, { options: [] });
    });

    it('renders with second item selected', async () => {
        await htmlSnap(Isolated, { value: Isolated.args.options[2].text });
    });

    it('renders with borderless enabled', async () => {
        await htmlSnap(Isolated, { borderless: true });
    });

    it('renders with actionable button', async () => {
        await htmlSnap(Isolated, {
            button: {
                renderBody: createRenderBody('button'),
            },
        });
    });

    it('renders with default actionable button', async () => {
        await htmlSnap(Isolated, {
            button: {
                ariaLabel: 'Actionable Button',
            },
        });
    });

    it('renders with floating label', async () => {
        await htmlSnap(FloatingLabel);
    });

    testPassThroughAttributes(Isolated, {
        input: Isolated.args,
        getClassAndStyleEl(component) {
            return component.container.firstElementChild;
        },
    });
});

describe('combobox-option', () => {
    testPassThroughAttributes(Isolated, {
        child: {
            name: 'options',
            input: {
                text: 'test',
                value: 'value',
            },
            multiple: true,
        },
    });
});
