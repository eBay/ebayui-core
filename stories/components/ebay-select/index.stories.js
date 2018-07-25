
import { storiesOf } from '@storybook/marko';
import { withKnobs, boolean, text, object, number, array } from '@storybook/addon-knobs';
import Select from './../../../src/components/ebay-select/';
import SelectBasic from './../../../src/components/ebay-select/examples/01-basic/template.marko';
import SelectSelectedOption from './../../../src/components/ebay-select/examples/02-selected-option/template.marko';
import SelectNestedOptions from './../../../src/components/ebay-select/examples/03-nested-options/template.marko';
import SelectBorderless from './../../../src/components/ebay-select/examples/04-borderless/template.marko';
import SelectDisabled from './../../../src/components/ebay-select/examples/05-disabled/template.marko';

storiesOf('ebayui/ebay-select', module)
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

    return Select.renderSync({
      name,
      selected,
      borderless,
      disabled,
      options
    });
  });
  
storiesOf('ebayui/ebay-select', module)
  .add('basic', () => {
    return SelectBasic.renderSync({});
  });

storiesOf('ebayui/ebay-select', module)
  .add('selected option', () => {
    return SelectSelectedOption.renderSync({});
  });

storiesOf('ebayui/ebay-select', module)
  .add('nested options', () => {
    return SelectNestedOptions.renderSync({});
  });

storiesOf('ebayui/ebay-select', module)
  .add('borderless', () => {
    return SelectBorderless.renderSync({});
  });

storiesOf('ebayui/ebay-select', module)
  .add('disabled', () => {
    return SelectDisabled.renderSync({});
  });
            
