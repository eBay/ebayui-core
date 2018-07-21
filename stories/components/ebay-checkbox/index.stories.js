
import { storiesOf } from '@storybook/marko';
import { withKnobs, boolean, text, object, number, array } from '@storybook/addon-knobs';
import Checkbox from './../../../src/components/ebay-checkbox/';
import CheckboxDefault from './../../../src/components/ebay-checkbox/examples/1-default/template.marko';
import CheckboxDisabled from './../../../src/components/ebay-checkbox/examples/2-disabled/template.marko';
import CheckboxGroupedCheckbox from './../../../src/components/ebay-checkbox/examples/3-grouped-checkbox/template.marko';
import CheckboxCustomColor from './../../../src/components/ebay-checkbox/examples/4-custom-color/template.marko';

storiesOf('ebayui/ebay-checkbox', module)
  .addDecorator(withKnobs)
  .add('<dynamic>', () => {
    const disabled = boolean('disabled', false);
    return Checkbox.renderSync({
      disabled
    });
  });
  
storiesOf('ebayui/ebay-checkbox', module)
  .add('default', () => {
    return CheckboxDefault.renderSync({});
  });

storiesOf('ebayui/ebay-checkbox', module)
  .add('disabled', () => {
    return CheckboxDisabled.renderSync({});
  });

storiesOf('ebayui/ebay-checkbox', module)
  .add('grouped checkbox', () => {
    return CheckboxGroupedCheckbox.renderSync({});
  });

storiesOf('ebayui/ebay-checkbox', module)
  .add('custom color', () => {
    return CheckboxCustomColor.renderSync({});
  });
