import { configure } from '@storybook/marko';

configure(require.context('../src/', true, /\.stories\.js$/), module);