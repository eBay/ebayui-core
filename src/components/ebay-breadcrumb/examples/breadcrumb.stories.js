import { withKnobs, text } from '@storybook/addon-knobs';

export default { title: 'breadcrumb', decorators: [withKnobs] };

import examplesTemplate from './template.marko';
import template from '..';

export const playground = () => ({
    component: template,
    input: {
        a11yHeadingText: text('a11y-heading-text', 'Page navigation'),
        a11yHeadingTag: text('a11y-heading-tag', 'h3'),
        items: [{
            href: 'http://www.ebay.com/',
            renderBody(out) {
                out.h('eBay');
            }
        }, {
            href: 'https://www.ebay.com/rpp/cell-phone-pda',
            renderBody(out) {
                out.h('Cell Phones, Smart Watches & Accessories');
            }
        }, {
            href: 'https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905',
            renderBody(out) {
                out.h('Smart Watch Accessories');
            }
        }, {
            href: 'https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906',
            renderBody(out) {
                out.h('Smart Watch Bands');
            }
        }]
    }
});

export const examples = () => ({ component: examplesTemplate });

// import lastAsParent from './03-last-page-as-parent/template.marko';
// export const lastPageAsParent = () => ({
//     component: lastAsParent
// });

// import custom from './04-page-with-custom-attributes/template.marko';
// export const pageWithCustomAttributes = () => ({
//     component: custom
// });

// import hijaxClicks from './05-hijax/template.marko';
// export const hijax = () => ({
//     component: hijaxClicks
// });
