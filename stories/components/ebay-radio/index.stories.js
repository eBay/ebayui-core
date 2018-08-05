
import { storiesOf } from '@storybook/marko';
import { withKnobs, boolean, text, object, number, array } from '@storybook/addon-knobs';
import Radio from './../../../src/components/ebay-radio/';
import RadioDefault from './../../../src/components/ebay-radio/examples/01-default/template.marko';
import RadioDisabled from './../../../src/components/ebay-radio/examples/02-disabled/template.marko';
import RadioGroupedRadio from './../../../src/components/ebay-radio/examples/03-grouped-radio/template.marko';
import RadioCustomColor from './../../../src/components/ebay-radio/examples/04-custom-color/template.marko';

storiesOf('ebayui/ebay-radio', module)
  .addDecorator(withKnobs)
  .add('<dynamic>', () => {
    const disabled = boolean('disabled', false);
    return Radio.renderSync({
      disabled
    });
  });
  
storiesOf('ebayui/ebay-radio', module)
  .add('default', () => {
    return RadioDefault.renderSync({});
  });

storiesOf('ebayui/ebay-radio', module)
  .add('disabled', () => {
    return RadioDisabled.renderSync({});
  });

storiesOf('ebayui/ebay-radio', module)
  .add('grouped radio', () => {
    return RadioGroupedRadio.renderSync({});
  });

storiesOf('ebayui/ebay-radio', module)
  .add('custom color', () => {
    return RadioCustomColor.renderSync({});
  });
