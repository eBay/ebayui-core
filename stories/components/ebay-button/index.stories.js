
import { storiesOf } from '@storybook/marko';
import { withKnobs, boolean, text, object, number, array } from '@storybook/addon-knobs';
import Button from './../../../src/components/ebay-button/';
import ButtonPrimary from './../../../src/components/ebay-button/examples/1-primary/template.marko';
import ButtonRaw from './../../../src/components/ebay-button/examples/2-raw/template.marko';
import ButtonSmall from './../../../src/components/ebay-button/examples/3-small/template.marko';
import ButtonLarge from './../../../src/components/ebay-button/examples/4-large/template.marko';
import ButtonFake from './../../../src/components/ebay-button/examples/5-fake/template.marko';
import ButtonDisabled from './../../../src/components/ebay-button/examples/6-disabled/template.marko';
import ButtonPartiallyDisabled from './../../../src/components/ebay-button/examples/7-partially-disabled/template.marko';
import ButtonFluid from './../../../src/components/ebay-button/examples/8-fluid/template.marko';
import ButtonPrimaryLargeFluid from './../../../src/components/ebay-button/examples/9-primary-large-fluid/template.marko';

storiesOf('ebayui/ebay-button', module)
  .addDecorator(withKnobs)
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
  });  
  
storiesOf('ebayui/ebay-button', module)
  .add('primary', () => {
    return ButtonPrimary.renderSync({});
  });

storiesOf('ebayui/ebay-button', module)
  .add('raw', () => {
    return ButtonRaw.renderSync({});
  });

storiesOf('ebayui/ebay-button', module)
  .add('small', () => {
    return ButtonSmall.renderSync({});
  });

storiesOf('ebayui/ebay-button', module)
  .add('large', () => {
    return ButtonLarge.renderSync({});
  });

storiesOf('ebayui/ebay-button', module)
  .add('fake', () => {
    return ButtonFake.renderSync({});
  });

storiesOf('ebayui/ebay-button', module)
  .add('disabled', () => {
    return ButtonDisabled.renderSync({});
  });

storiesOf('ebayui/ebay-button', module)
  .add('partially disabled', () => {
    return ButtonPartiallyDisabled.renderSync({});
  });

storiesOf('ebayui/ebay-button', module)
  .add('fluid', () => {
    return ButtonFluid.renderSync({});
  });

storiesOf('ebayui/ebay-button', module)
  .add('primary large fluid', () => {
    return ButtonPrimaryLargeFluid.renderSync({});
  });               
