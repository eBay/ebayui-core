import { configure, storiesOf } from "@storybook/marko";
import { withReadme } from "storybook-readme";

configure(() => {
  const hiddenStories = ['ebay-combobox-readonly', 'ebay-pill'];
  const requireReadme = require.context("../src", true, /\/README\.md$/);
  const docsByTag = requireReadme.keys().reduce((result, file) => {
    const [, tag] = /([^/]+)\/README\.md$/.exec(file);
    result[tag] = requireReadme(file).default;
    return result;
  }, {});

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
