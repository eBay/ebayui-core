import { withKnobs, text, number, boolean, radios } from '@storybook/addon-knobs';

export default { title: 'button', decorators: [withKnobs] };

import template from '../index.js';
import examplesTemplate from './template.marko';

export const playground = () => ({
    component: template,
    input: {
        priority: radios('priority', { primary: 'primary', secondary: 'secondary', delete: 'delete', none: 'none' }),
        size: text('size', ''),
        noText: boolean('no-text', false),
        href: text('href', ''),
        fluid: boolean('fluid', false),
        disabled: boolean('disabled', false),
        partiallyDisabled: boolean('partially-disabled', false),
        variant: text('variant', ''),
        fixedHeight: boolean('fixed-height', false),
        truncate: boolean('truncate', false),
        badgeNumber: number('badge-number', null),
        badgeAriaLabel: text('badge-aria-label', ''),
        renderBody(out) {
            out.h(text('label', 'text'));
        }
    }
});

export const examples = () => ({ component: examplesTemplate });

// import btnRaw from './02-raw/template.marko';
// export const raw = () => ({
//     component: btnRaw
// });
