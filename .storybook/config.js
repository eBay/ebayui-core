import { configure, addDecorator } from '@storybook/marko';
import { checkA11y } from '@storybook/addon-a11y';

addDecorator(checkA11y);
addDecorator(checkA11y);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
