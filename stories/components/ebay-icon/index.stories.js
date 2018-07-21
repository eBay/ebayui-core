
import { storiesOf } from '@storybook/marko';
import { withKnobs, boolean, text, object, number, array } from '@storybook/addon-knobs';
import Icon from './../../../src/components/ebay-icon/';
import IconBackground from './../../../src/components/ebay-icon/examples/1-background/template.marko';
import IconInline from './../../../src/components/ebay-icon/examples/2-inline/template.marko';
import IconInlineCustomColor from './../../../src/components/ebay-icon/examples/3-inline-custom-color/template.marko';
import IconInlineNonDecorative from './../../../src/components/ebay-icon/examples/4-inline-non-decorative/template.marko';

storiesOf('ebayui/ebay-icon', module)
  .addDecorator(withKnobs)
  .add('<dynamic>', () => {
    const type = text('type', 'background');
    const name = text('name', 'arrow-left');
    return Icon.renderSync({
      type,
      name
    });
  });

storiesOf('ebayui/ebay-icon', module)
  .add('background', () => {
    return IconBackground.renderSync({});
  });

storiesOf('ebayui/ebay-icon', module)
  .add('inline', () => {
    return IconInline.renderSync({});
  });

storiesOf('ebayui/ebay-icon', module)
  .add('inline custom color', () => {
    return IconInlineCustomColor.renderSync({});
  });

storiesOf('ebayui/ebay-icon', module)
  .add('inline non decorative', () => {
    return IconInlineNonDecorative.renderSync({});
  });
