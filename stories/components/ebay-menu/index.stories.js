
import { storiesOf } from '@storybook/marko';
import { withKnobs, boolean, text, object, number, array } from '@storybook/addon-knobs';
import Menu from './../../../src/components/ebay-menu/';
import MenuBasic from './../../../src/components/ebay-menu/examples/01-basic/template.marko';
import MenuFake from './../../../src/components/ebay-menu/examples/02-fake/template.marko';
import MenuFixWidth from './../../../src/components/ebay-menu/examples/03-fix-width/template.marko';
import MenuReverse from './../../../src/components/ebay-menu/examples/04-reverse/template.marko';
import MenuBorderless from './../../../src/components/ebay-menu/examples/05-borderless/template.marko';
import MenuSmall from './../../../src/components/ebay-menu/examples/06-small/template.marko';
import MenuPrimary from './../../../src/components/ebay-menu/examples/07-primary/template.marko';
import MenuNoLabel from './../../../src/components/ebay-menu/examples/08-no-label/template.marko';
import MenuRadio from './../../../src/components/ebay-menu/examples/09-radio/template.marko';
import MenuCheckbox from './../../../src/components/ebay-menu/examples/10-checkbox/template.marko';

storiesOf('ebayui/ebay-menu', module)
  .addDecorator(withKnobs)
  .add('<dynamic>', () => {
    const label = text('label', 'eBay Menu');
    const expanded = boolean('expanded', false);
    const type = text('type', 'fake');
    const reverse = boolean('reverse', false);
    const fixWidth = boolean('fix-width', false);
    const borderless = boolean('borderless', false);
    const checked = number('checked', 1);
    const items = object('items', [
      { renderBody: 'Item 1', href: '', type: 'Button', checked: 'false', current: 'true'  },
      { renderBody: 'Item 1', href: '', type: '', checked: 'false', current: 'false'  },
      { renderBody: 'Item 1', href: '', type: '', checked: 'false', current: 'false'  }
    ]);
    
    return Menu.renderSync({
      label,
      expanded,
      type,
      reverse,
      fixWidth,
      borderless,
      checked,
      items
    });
  });

storiesOf('ebayui/ebay-menu', module)
  .add('basic', () => {
    return MenuBasic.renderSync({});
  });

storiesOf('ebayui/ebay-menu', module)
  .add('fake', () => {
    return MenuFake.renderSync({});
  });

storiesOf('ebayui/ebay-menu', module)
  .add('fix width', () => {
    return MenuFixWidth.renderSync({});
  });

storiesOf('ebayui/ebay-menu', module)
  .add('reverse', () => {
    return MenuReverse.renderSync({});
  });

storiesOf('ebayui/ebay-menu', module)
  .add('borderless', () => {
    return MenuBorderless.renderSync({});
  });

storiesOf('ebayui/ebay-menu', module)
  .add('small', () => {
    return MenuSmall.renderSync({});
  });

storiesOf('ebayui/ebay-menu', module)
  .add('primary', () => {
    return MenuPrimary.renderSync({});
  });    

storiesOf('ebayui/ebay-menu', module)
  .add('no label', () => {
    return MenuNoLabel.renderSync({});
  });

storiesOf('ebayui/ebay-menu', module)
  .add('radio', () => {
    return MenuRadio.renderSync({});
  });

storiesOf('ebayui/ebay-menu', module)
  .add('checkbox', () => {
    return MenuCheckbox.renderSync({});
  });

   
