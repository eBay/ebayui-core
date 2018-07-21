
import { storiesOf } from '@storybook/marko';
import { withKnobs, boolean, text, object, number, array } from '@storybook/addon-knobs';
import Combobox from './../../../src/components/ebay-combobox/';
import ComboboxBasic from './../../../src/components/ebay-combobox/examples/1-basic/template.marko';
import ComboboxSelectedOption from './../../../src/components/ebay-combobox/examples/2-selected-option/template.marko';
import ComboboxNestedOptions from './../../../src/components/ebay-combobox/examples/3-nested-options/template.marko';
import ComboboxBorderless from './../../../src/components/ebay-combobox/examples/4-borderless/template.marko';
import ComboboxDisabled from './../../../src/components/ebay-combobox/examples/5-disabled/template.marko';

storiesOf('ebayui/ebay-combobox', module)
  .addDecorator(withKnobs)
  .add('<dynamic>', () => {
    const name = text('name', '');
    const selected = number('selected', 1);
    const borderless = boolean('borderless', false);
    const disabled = boolean('disabled', false);

    const options = object('options', [
      { label: 'Option 1', value: 'Option 1'},
      { label: 'Option 2', value: 'Option 2'}
    ]);

    return Combobox.renderSync({
      name,
      selected,
      borderless,
      disabled,
      options
    });
  });
  
storiesOf('ebayui/ebay-combobox', module)
  .add('basic', () => {
    return ComboboxBasic.renderSync({});
  });

storiesOf('ebayui/ebay-combobox', module)
  .add('selected option', () => {
    return ComboboxSelectedOption.renderSync({});
  });

storiesOf('ebayui/ebay-combobox', module)
  .add('nested options', () => {
    return ComboboxNestedOptions.renderSync({});
  });

storiesOf('ebayui/ebay-combobox', module)
  .add('borderless', () => {
    return ComboboxBorderless.renderSync({});
  });

storiesOf('ebayui/ebay-combobox', module)
  .add('disabled', () => {
    return ComboboxDisabled.renderSync({});
  });
            
