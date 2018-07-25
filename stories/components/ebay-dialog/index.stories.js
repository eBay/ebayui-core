
import { storiesOf } from '@storybook/marko';
import { withKnobs, boolean, text, object, number, array } from '@storybook/addon-knobs';
import Dialog from './../../../src/components/ebay-dialog/';
import DialogBasic from './../../../src/components/ebay-dialog/examples/01-basic/template.marko';
import DialogScrolling from './../../../src/components/ebay-dialog/examples/02-scrolling/template.marko';
import DialogFullscreen from './../../../src/components/ebay-dialog/examples/03-fullscreen/template.marko';
import DialogPanelLeft from './../../../src/components/ebay-dialog/examples/04-panel-left/template.marko';
import DialogPanelRight from './../../../src/components/ebay-dialog/examples/05-panel-right/template.marko';
import DialogFill from './../../../src/components/ebay-dialog/examples/06-fill/template.marko';
import DialogFocus from './../../../src/components/ebay-dialog/examples/07-focus/template.marko';


// Does it make sense to have a <dynamic> story for this one?
  
storiesOf('ebayui/ebay-dialog', module)
  .add('basic', () => {
    return DialogBasic.renderSync({});
  });

storiesOf('ebayui/ebay-dialog', module)
  .add('scrolling', () => {
    return DialogScrolling.renderSync({});
  });

storiesOf('ebayui/ebay-dialog', module)
  .add('fullscreen', () => {
    return DialogFullscreen.renderSync({});
  });

storiesOf('ebayui/ebay-dialog', module)
  .add('panel left', () => {
    return DialogPanelLeft.renderSync({});
  });

storiesOf('ebayui/ebay-dialog', module)
  .add('panel right', () => {
    return DialogPanelRight.renderSync({});
  });

storiesOf('ebayui/ebay-dialog', module)
  .add('fill', () => {
    return DialogFill.renderSync({});
  });

storiesOf('ebayui/ebay-dialog', module)
  .add('focus', () => {
    return DialogFocus.renderSync({});
  });
        
