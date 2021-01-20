import React from "react";
import { AddonPanel } from "@storybook/components";
import addonApi, { addons, types } from "@storybook/addons";
import { useStorybookApi } from "@storybook/api";

const Content = (props) => {
  const {getCurrentStoryData} = useStorybookApi();
  const currentState = getCurrentStoryData();
  const curId = currentState && currentState.id
  const objSource = props.rawSources && props.rawSources[curId];
  const source = objSource && objSource.raw;

  return <div  dangerouslySetInnerHTML={{ __html: source }}></div>;
};

let currentId;

addons.register("ebayui/code-syntax", () => {
  const channel = addonApi.getChannel();
  let rawSources;
  function fetchSources() {
    fetch("./rawSources.json")
      .then((response) => response.json())
      .then((data) => {
        if (!rawSources || currentId !== data.id) {
          currentId = data.id;
          rawSources = data.files;
          channel.emit("sourceCode/rawSources", data.files);
        }
      });
  }

  fetchSources();

  addons.add("design-addon/panel", {
    title: "Code Syntax",
    type: types.PANEL,
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <Content rawSources={rawSources} />
      </AddonPanel>
    ),
  });
});
