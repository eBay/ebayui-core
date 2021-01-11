import React from "react";
import { AddonPanel } from "@storybook/components";
import { addons, types } from "@storybook/addons";
import { useParameter } from "@storybook/api";

const Content = () => {
  const results = useParameter("source", ''); // story's parameter being retrieved here
  const str = results.renderToString ? results.renderToString() : '';
  return (
    <div>
        {str}
    </div>
  );
};

addons.register("ebayui/code-syntax", () => {
  addons.add("design-addon/panel", {
    title: "Code Syntax",
    type: types.PANEL,
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <Content />
      </AddonPanel>
    ),
  });
});
