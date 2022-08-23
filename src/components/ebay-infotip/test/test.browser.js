import { expect, use } from 'chai';
import chaiDom from 'chai-dom';
import { composeStories } from '@storybook/marko/dist/testing';
import { render, fireEvent, cleanup, waitFor } from '@marko/testing-library';
import { fastAnimations } from '../../../common/test-utils/browser';
import * as stories from '../infotip.stories';

const { Standard, OpenOnRender } = composeStories(stories);

use(chaiDom);
before(fastAnimations.start);
after(fastAnimations.stop);
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given the default infotip', () => {
    beforeEach(async () => {
        component = await render(Standard);
    });

    thenItCanBeOpenAndClosed();

    describe('when it is rerendered', () => {
        // Needed to change input for rerender to work correctly
        beforeEach(async () => await component.rerender());
        thenItCanBeOpenAndClosed();
    });

    function thenItCanBeOpenAndClosed() {
        describe('when the host element is clicked', () => {
            beforeEach(async () => {
                await fireEvent.click(component.getAllByLabelText('Important information')[0]);
            });

            it('then it emits the expand event', () => {
                expect(component.emitted('expand')).has.length(1);
            });

            it('then it is expanded', () => {
                expect(component.getByLabelText('Important information')).has.attr(
                    'aria-expanded',
                    'true'
                );
            });

            describe('when the host element is clicked a second time to close', () => {
                beforeEach(async () => {
                    await fireEvent.click(component.getByLabelText('Important information'));
                });

                it('then it emits the collapse event', async () => {
                    await waitFor(() => expect(component.emitted('collapse')).has.length(1));
                });

                it('then it is collapsed', () => {
                    expect(component.getByLabelText('Important information')).does.not.have.attr(
                        'aria-expanded',
                        'true'
                    );
                });
            });
        });
    }
});

describe('given the modal infotip', () => {
    beforeEach(async () => {
        component = await render(Standard, { variant: 'modal' });
    });

    describe('when the host element is clicked', () => {
        beforeEach(async () => {
            await fireEvent.click(component.getAllByLabelText('Important information')[0]);
        });

        it('then it emits the expand event', async () => {
            await waitFor(() => expect(component.emitted('expand')).has.length(1));
        });

        it('then it is expanded', async () => {
            await waitFor(() => {
                expect(component.getByRole('dialog')).does.not.have.attr('hidden');
            });
        });
    });
});

describe('given the modal infotip opened', () => {
    beforeEach(async () => {
        component = await render(OpenOnRender, { variant: 'modal' });
    });

    describe('when the host element is opened and then closed', () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByLabelText('close'));
        });

        it('then it emits the collapse event', async () => {
            await waitFor(() => expect(component.emitted('collapse')).has.length(1));
        });

        it('then it is collapsed', async () => {
            await waitFor(() => {
                expect(component.getByRole('dialog', { hidden: true })).has.attr('hidden');
            });
        });
    });
});
