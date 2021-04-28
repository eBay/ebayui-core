import { configure, storiesOf, addParameters } from '@storybook/marko';
import { withKnobs } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import { parseFile } from './utils';
import './custom-styles.less';

configure(() => {
    addParameters({
        layout: 'padding',
        options: {
            theme: {}, // this is just a workaround for addon-readme
        },
    });
    const hiddenStories = ['ebay-combobox-readonly', 'ebay-pill'];
    const requireReadme = require.context('../src', true, /\/README\.md$/);
    const docsByTag = requireReadme.keys().reduce((result, file) => {
        const [, tag] = /([^/]+)\/README\.md$/.exec(file);
        result[tag] = requireReadme(file).default;
        return result;
    }, {});

    if (process.env.DS !== '4') {
        require('@ebay/skin/marketsans');
    }

    require('@ebay/skin/global');

    const requireExample = require.context('../src', true, /\/examples\/.*\/template\.marko$/);
    requireExample.keys().reduce((storiesByTag, file) => {
        const { tag, title, fulltag } = parseFile(file);
        const mod = requireExample(file);
        const component = mod.default || mod;

        if (!hiddenStories.includes(fulltag)) {
            (storiesByTag[fulltag] =
                storiesByTag[fulltag] ||
                storiesOf(fulltag, module).addDecorator(withReadme(docsByTag[tag]))).add(
                title,
                () => ({
                    component,
                })
            );
        }
        return storiesByTag;
    }, {});
}, module);

export default {
    title: 'Storybook Knobs',
    decorators: [withKnobs],
};

export const parameters = {
    layout: 'centered',
};
