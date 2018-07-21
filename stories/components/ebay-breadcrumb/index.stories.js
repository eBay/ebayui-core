
import { storiesOf } from '@storybook/marko';
import { withKnobs, boolean, text, object, number, array } from '@storybook/addon-knobs';
import Breadcrumb from './../../../src/components/ebay-breadcrumb/';
import BreadcrumbHeadingLevel from './../../../src/components/ebay-breadcrumb/examples/1-breadcrumb-heading-level/template.marko';
import BreadcrumbLastPageAsCurrent from './../../../src/components/ebay-breadcrumb/examples/2-last-page-as-current/template.marko';
import BreadcrumbLastPageAsParent from './../../../src/components/ebay-breadcrumb/examples/3-last-page-as-parent/template.marko';
import BreadcrumbPageWithCustomAttributes from './../../../src/components/ebay-breadcrumb/examples/4-page-with-custom-attributes/template.marko';
import BreadcrumbHijax from './../../../src/components/ebay-breadcrumb/examples/5-hijax/template.marko';

storiesOf('ebayui/ebay-breadcrumb', module)
  .addDecorator(withKnobs)
  .add('<dynamic>', () => {
    const headingText = text('headingText', 'Page navigation');
    const headingLevel = text('headingLevel', 'h3');
    const hijax = boolean('hijax', false);
    const items = object('items', [
      { href: 'http://www.ebay.com/sch/nikon', renderBody: 'Search nikon' },
      { href: 'http://www.ebay.com/sch/nike', renderBody: 'Search nike' }
    ]);
    
    return Breadcrumb.renderSync({
      headingText,
      headingLevel,
      hijax,
      items
    });
  });

storiesOf('ebayui/ebay-breadcrumb', module)
  .add('breadcrumb heading level', () => {
    return BreadcrumbHeadingLevel.renderSync({});
  });

storiesOf('ebayui/ebay-breadcrumb', module)
  .add('last page as current', () => {
    return BreadcrumbLastPageAsCurrent.renderSync({});
  });

storiesOf('ebayui/ebay-breadcrumb', module)
  .add('last page as parent', () => {
    return BreadcrumbLastPageAsParent.renderSync({});
  });

storiesOf('ebayui/ebay-breadcrumb', module)
  .add('page with custom attributes', () => {
    return BreadcrumbPageWithCustomAttributes.renderSync({});
  });

storiesOf('ebayui/ebay-breadcrumb', module)
  .add('hijax', () => {
    return BreadcrumbHijax.renderSync({});
  });
