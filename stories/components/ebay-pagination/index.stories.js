
import { storiesOf } from '@storybook/marko';
import { withKnobs, boolean, text, object, number, array } from '@storybook/addon-knobs';
import Pagination from './../../../src/components/ebay-pagination/';
import PaginationBasicLinks from './../../../src/components/ebay-pagination/examples/01-basic-links/template.marko';
import PaginationHijax from './../../../src/components/ebay-pagination/examples/02-hijax/template.marko';
import PaginationArrowsDisabled from './../../../src/components/ebay-pagination/examples/03-arrows-disabled/template.marko';
import PaginationWithoutArrowsInput from './../../../src/components/ebay-pagination/examples/04-without-arrows-input/template.marko';
import PaginationAccessibilityText from './../../../src/components/ebay-pagination/examples/05-accessibility-text/template.marko';

storiesOf('ebayui/ebay-pagination', module)
  .addDecorator(withKnobs)
  .add('<dynamic>', () => {
    const href = text('href', '#');
    const accessibilityPrev = text('accessibility-prev', '');
    const accessibilityNext = text('accessibility-next', '');
    const accessibilityCurrent = text('accessibility-current', '');
    const hijax = boolean('hijax', '');
    const items = object('items', [
        { renderBody: '1', type: 'page', disabled: false },
        { renderBody: '2', type: 'page', disabled: false },
        { renderBody: '3', type: 'page', disabled: false }
      ]);

    return Pagination.renderSync({
      href,
      accessibilityPrev,
      accessibilityNext,
      accessibilityCurrent,
      hijax,
      items
    });
  });
  
storiesOf('ebayui/ebay-pagination', module)
  .add('basic links', () => {
    return PaginationBasicLinks.renderSync({});
  });

storiesOf('ebayui/ebay-pagination', module)
  .add('hijax', () => {
    return PaginationHijax.renderSync({});
  });

storiesOf('ebayui/ebay-pagination', module)
  .add('arrows disabled', () => {
    return PaginationArrowsDisabled.renderSync({});
  });

storiesOf('ebayui/ebay-pagination', module)
  .add('without arrows input', () => {
    return PaginationWithoutArrowsInput.renderSync({});
  });

storiesOf('ebayui/ebay-pagination', module)
  .add('accessibility text', () => {
    return PaginationAccessibilityText.renderSync({});
  });
            
