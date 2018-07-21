
import { storiesOf } from '@storybook/marko';
import { withKnobs, boolean, text, object, number, array } from '@storybook/addon-knobs';
import Dialog from './../../../src/components/ebay-dialog/';
import DialogBasic from './../../../src/components/ebay-dialog/examples/1-basic/template.marko';
import DialogScrolling from './../../../src/components/ebay-dialog/examples/2-scrolling/template.marko';
import DialogFullscreen from './../../../src/components/ebay-dialog/examples/3-fullscreen/template.marko';
import DialogPanelLeft from './../../../src/components/ebay-dialog/examples/4-panel-left/template.marko';
import DialogPanelRight from './../../../src/components/ebay-dialog/examples/5-panel-right/template.marko';
import DialogFill from './../../../src/components/ebay-dialog/examples/6-fill/template.marko';
import DialogFocus from './../../../src/components/ebay-dialog/examples/7-focus/template.marko';


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
        
