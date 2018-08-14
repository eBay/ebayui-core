
import { storiesOf } from '@storybook/marko';
import { withKnobs, boolean, text, object, number, array } from '@storybook/addon-knobs';
import { withNotes, withMarkdownNotes } from '@storybook/addon-notes';
import { checkA11y } from '@storybook/addon-a11y';  
import Button from './../../../src/components/ebay-button/';
import ButtonPrimary from './../../../src/components/ebay-button/examples/01-primary/template.marko';
import ButtonRaw from './../../../src/components/ebay-button/examples/02-raw/template.marko';
import ButtonSmall from './../../../src/components/ebay-button/examples/03-small/template.marko';
import ButtonLarge from './../../../src/components/ebay-button/examples/04-large/template.marko';
import ButtonFake from './../../../src/components/ebay-button/examples/05-fake/template.marko';
import ButtonDisabled from './../../../src/components/ebay-button/examples/06-disabled/template.marko';
import ButtonPartiallyDisabled from './../../../src/components/ebay-button/examples/07-partially-disabled/template.marko';
import ButtonFluid from './../../../src/components/ebay-button/examples/08-fluid/template.marko';
import ButtonPrimaryLargeFluid from './../../../src/components/ebay-button/examples/09-primary-large-fluid/template.marko';
import ButtonReadme from './readme.md.js';

storiesOf('ebayui/ebay-button', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .add('<dynamic>', () => {
    const priority = text('priority', 'primary');
    const size = text('size', 'medium');
    const href = text('href', '');
    const fluid = boolean('fluid', '');
    const disabled = boolean('disabled', false);
  	const partiallyDisabled = boolean('partially-disabled', false);
    const renderBody = text('renderBody', 'Hello');

    return Button.renderSync({
      priority,
      size,
      href,
      fluid,
      disabled,
      partiallyDisabled,
      renderBody
    });
  }, { notes: { markdown: ButtonReadme.component } });

  
storiesOf('ebayui/ebay-button', module)
  .addDecorator(withNotes)
  .add('primary', () => {
    return ButtonPrimary.renderSync({});
  }, { notes: { markdown: ButtonReadme.primary } });

storiesOf('ebayui/ebay-button', module)
  .addDecorator(withNotes)
  .add('raw', () => {
    return ButtonRaw.renderSync({});
  }, { notes: { markdown: ButtonReadme.raw } });

storiesOf('ebayui/ebay-button', module)
  .addDecorator(withNotes)
  .add('small', () => {
    return ButtonSmall.renderSync({});
  }, { notes: { markdown: ButtonReadme.small } });

storiesOf('ebayui/ebay-button', module)
  .addDecorator(withNotes)
  .add('large', () => {
    return ButtonLarge.renderSync({});
  }, { notes: { markdown: ButtonReadme.large } });

storiesOf('ebayui/ebay-button', module)
  .addDecorator(withNotes)
  .add('fake', () => {
    return ButtonFake.renderSync({});
  }, { notes: { markdown: ButtonReadme.fake } });

storiesOf('ebayui/ebay-button', module)
  .addDecorator(withNotes)
  .add('disabled', () => {
    return ButtonDisabled.renderSync({});
  }, { notes: { markdown: ButtonReadme.disabled } });

storiesOf('ebayui/ebay-button', module)
  .addDecorator(withNotes)
  .add('partially disabled', () => {
    return ButtonPartiallyDisabled.renderSync({});
  }, { notes: { markdown: ButtonReadme.partiallydisabled } });

storiesOf('ebayui/ebay-button', module)
  .addDecorator(withNotes)
  .add('fluid', () => {
    return ButtonFluid.renderSync({});
  }, { notes: { markdown: ButtonReadme.fluid } });

storiesOf('ebayui/ebay-button', module)
  .addDecorator(withNotes)
  .add('primary large fluid', () => {
    return ButtonPrimaryLargeFluid.renderSync({});
  }, { notes: { markdown: ButtonReadme.primarylargefluid } });             
