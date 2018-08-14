
import { storiesOf } from '@storybook/marko';
import { withKnobs, boolean, text, object, number, array } from '@storybook/addon-knobs';
import { withNotes, withMarkdownNotes } from '@storybook/addon-notes';
import Breadcrumb from './../../../src/components/ebay-breadcrumb/';
import BreadcrumbHeadingLevel from './../../../src/components/ebay-breadcrumb/examples/01-breadcrumb-heading-level/template.marko';
import BreadcrumbLastPageAsCurrent from './../../../src/components/ebay-breadcrumb/examples/02-last-page-as-current/template.marko';
import BreadcrumbLastPageAsParent from './../../../src/components/ebay-breadcrumb/examples/03-last-page-as-parent/template.marko';
import BreadcrumbPageWithCustomAttributes from './../../../src/components/ebay-breadcrumb/examples/04-page-with-custom-attributes/template.marko';
import BreadcrumbHijax from './../../../src/components/ebay-breadcrumb/examples/05-hijax/template.marko';
import BreadcrumbReadme from './readme.md.js';

storiesOf('ebayui/ebay-breadcrumb', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
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
  }, { notes: { markdown: BreadcrumbReadme.component } });

storiesOf('ebayui/ebay-breadcrumb', module)
  .addDecorator(withNotes)
  .add('breadcrumb heading level', () => {
    return BreadcrumbHeadingLevel.renderSync({});
  }, { notes: { markdown: BreadcrumbReadme.headinglevel } });

storiesOf('ebayui/ebay-breadcrumb', module)
  .addDecorator(withNotes)
  .add('last page as current', () => {
    return BreadcrumbLastPageAsCurrent.renderSync({});
  }, { notes: { markdown: BreadcrumbReadme.lastpageascurrent } });

storiesOf('ebayui/ebay-breadcrumb', module)
  .addDecorator(withNotes)
  .add('last page as parent', () => {
    return BreadcrumbLastPageAsParent.renderSync({});
  }, { notes: { markdown: BreadcrumbReadme.lastpageasparent } });

storiesOf('ebayui/ebay-breadcrumb', module)
  .addDecorator(withNotes)
  .add('page with custom attributes', () => {
    return BreadcrumbPageWithCustomAttributes.renderSync({});
  }, { notes: { markdown: BreadcrumbReadme.pagewithcustomattributes } });

storiesOf('ebayui/ebay-breadcrumb', module)
  .addDecorator(withNotes)
  .add('hijax', () => {
    return BreadcrumbHijax.renderSync({});
  }, { notes: { markdown: BreadcrumbReadme.hijax } });
