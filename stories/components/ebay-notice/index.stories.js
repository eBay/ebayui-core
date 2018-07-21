
import { storiesOf } from '@storybook/marko';
import { withKnobs, boolean, text, object, number, array } from '@storybook/addon-knobs';
import Notice from './../../../src/components/ebay-notice/';
import NoticePage from './../../../src/components/ebay-notice/examples/1-page-notice/template.marko';
import NoticeInline from './../../../src/components/ebay-notice/examples/2-inline-notice/template.marko';
import NoticeCustomHeading from './../../../src/components/ebay-notice/examples/3-custom-heading/template.marko';
import NoticeDismissible from './../../../src/components/ebay-notice/examples/4-dismissible-notice/template.marko';

storiesOf('ebayui/ebay-notice', module)
  .addDecorator(withKnobs)
  .add('<dynamic>', () => {
    const renderBody = text('renderBody', 'Sample notice text.....');
    const type = text('type', '');
    const status = text('status', '');
    const ariaText = text('aria-text', '');
    const headingLevel = text('heading-level', '');
    const dismissible = boolean('dismissible', false);
    const hidden = boolean('hidden', false);
    const ariaCloseLabel = text('aria-label-close', '');
    
    return Notice.renderSync({
      renderBody,
      type,
      status,
      ariaText,
      headingLevel,
      dismissible,
      hidden,
      ariaCloseLabel
    });
  });

storiesOf('ebayui/ebay-notice', module)
  .add('page notice', () => {
    return NoticePage.renderSync({});
  });

storiesOf('ebayui/ebay-notice', module)
  .add('inline notice', () => {
    return NoticeInline.renderSync({});
  });

storiesOf('ebayui/ebay-notice', module)
  .add('custom heading', () => {
    return NoticeCustomHeading.renderSync({});
  });

storiesOf('ebayui/ebay-notice', module)
  .add('dismissible notice', () => {
    return NoticeDismissible.renderSync({});
  });   
