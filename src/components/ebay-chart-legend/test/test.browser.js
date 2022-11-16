import { expect } from 'chai';
import { render, fireEvent } from '@marko/testing-library';
import template from '../index.marko';
import { mock } from './mock';

describe('given a legend', () => {
    describe('when an item takes focus', () => {
        it('should emit a focus event with the index of the item', async () => {
            const { getByText, emitted, cleanup } = await render(template, mock);
            await fireEvent.focus(getByText(mock.values[1].text).parentElement);
            const emittedValue = emitted('focus');
            expect(emittedValue[0][0]).to.equal(1);
            await cleanup();
        });

        it('should emit a blur event ', async () => {
            const { getByText, emitted, cleanup } = await render(template, mock);
            await fireEvent.focus(getByText(mock.values[1].text).parentElement);
            await fireEvent.blur(getByText(mock.values[1].text).parentElement);
            const emittedValue = emitted('blur');
            expect(emittedValue.length).to.equal(1);
            await cleanup();
        });
    });
});
