import { withKnobs, text, number } from '@storybook/addon-knobs';

export default { title: 'badge', decorators: [withKnobs] };

import template from '../index.marko';
import examplesTemplate from './template.marko';

export const playground = () => ({
    component: template,
    input: {
        number: number('number', 5),
        ariaLabel: text('aria-label', '5 todo items')
    }
});

export const examples = () => ({ component: examplesTemplate });
