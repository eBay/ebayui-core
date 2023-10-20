import{a as n}from"./utils.f000f876.js";import{t as i}from"./index.bcb3df20.js";import{C as r}from"./index.a72b29bb.js";import"./merge-attrs.9e0d7be9.js";import"./_commonjsHelpers.b8add541.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./index.6c3a3a4b.js";import"./index.aa2d3137.js";/* empty css             */import"./render-tag.1a0b986f.js";import"./preserve-attrs.c8bb8439.js";import"./index.1d7fdad6.js";import"./index.1549cc8a.js";import"./index.34cc28ab.js";import"./index.cfa4da37.js";const l=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-listbox
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

Used to generate a menu portion of listbox. For use with a button which hides and shows the menu use \`ebay-listbox-button\` instead.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/building-blocks-ebay-listbox)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/building-blocks-ebay-listbox)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-listbox/examples)
`,p=s=>({input:n(s)}),O={title:"building blocks/ebay-listbox",component:r,parameters:{docs:{description:{component:l}}},argTypes:{name:{control:{type:"text"},description:"used for the `name` attribute of the native `<select>`"},listSelection:{table:{defaultValue:{summary:"manual"}},description:"If manual then user will need to press enter to select an item using keyboard. Otherwise auto will automatically select as the user presses up/down",options:["manual","auto"],type:"select"},selected:{description:"allows you to set the selected index option to `selected`"},option:{name:"@option",table:{category:"@attribute tags"}},text:{control:{type:"text"},table:{category:"@option attributes"}},value:{control:{type:"text"},table:{category:"@option attributes"}},disabled:{control:{type:"boolean"},table:{category:"@option attributes"}},onChange:{action:"on-change",description:"Triggered on item clicked",table:{category:"Events",defaultValue:{summary:"{ el, index, selected, wasClicked }"}}}}},t=p.bind({});t.args={options:[{value:"1",text:"Option 1"},{value:"2",text:"Option 2"},{value:"3",text:"Option 3"}]};t.parameters={docs:{source:{code:i("ebay-listbox",t.args)}}};var e,o,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const E=["Standard"];export{t as Standard,E as __namedExportsOrder,O as default};
//# sourceMappingURL=listbox.stories.0d05bb5f.js.map
