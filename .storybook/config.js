import { configure, storiesOf, addParameters } from "@storybook/marko";
import { withReadme } from "storybook-readme";

configure(() => {
  addParameters({
    options: {
      theme: {}// this is just a workaround for addon-readme
    },
  });
  const hiddenStories = ['ebay-combobox-readonly', 'ebay-pill'];
  const requireReadme = require.context("../src", true, /\/README\.md$/);
  const docsByTag = requireReadme.keys().reduce((result, file) => {
    const [, tag] = /([^/]+)\/README\.md$/.exec(file);
    result[tag] = requireReadme(file).default;
    return result;
  }, {});

  if (process.env.DS !== "4") {
    require('@ebay/skin/marketsans');
  }

  require('@ebay/skin/global');

  const requireExample = require.context(
    "../src",
    true,
    /\/examples\/.*\/template\.marko$/
  );
  requireExample.keys().reduce((storiesByTag, file) => {
    const [, tag, title] = /([^\/]+)\/examples\/\d+-([^\/]+)/.exec(file);
    const component = requireExample(file);

    if (!hiddenStories.includes(tag)) {
      (storiesByTag[tag] =
        storiesByTag[tag] ||
        storiesOf(tag, module).addDecorator(withReadme(docsByTag[tag]))).add(
          title,
          () => ({ component })
        );
    }
    return storiesByTag;
  }, {});
}, module);
