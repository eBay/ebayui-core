import{t as n}from"./index-CCz6reEH.js";import{a}from"./utils-DWCsNc5l.js";import{C as s}from"./index-DcNSdUWE.js";import"./registry-B-klnak9.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-DUtXOaCj.js";/* empty css              */import"./index-0_n8TZiB.js";import"./index-C98gAawF.js";/* empty css             */import"./render-tag-BBOJ9dEX.js";import"./index-D11s4y-0.js";import"./index-Bgyy39_y.js";import"./dynamic-tag-DQCvkDdb.js";import"./index-eGtaP7gF.js";import"./index-DSBRYoSW.js";import"./index-DoeQzs2M.js";import"./index-D7GlLQHj.js";import"./index-blmbJU0z.js";import"./index-DYoOQ_vw.js";const c=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-filter-menu
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

The \`ebay-filter-menu\` component is used as a checkbox menu specificially styled for filtering actions. Generally it is coupled with the \`ebay-filter-menu-button\` to create a selectable set of items by which to filter.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/building-blocks-ebay-filter-menu)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/building-blocks-ebay-filter-menu)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-filter-menu/examples)
`,m=i=>({input:a(i)}),_={title:"building blocks/ebay-filter-menu",component:s,parameters:{docs:{description:{component:c}}},argTypes:{type:{options:["radio","checkbox"],control:{type:"select"},description:'Can be "radio" / "checkbox"'},variant:{control:{type:"text"},description:'"" (default) / "form"'},classPrefix:{control:{type:"text"},description:'"filter-menu" (default) / modifies the base prefix for all Skin classes in the menu'},formName:{control:{type:"text"},description:"forms `name` attribute"},formAction:{control:{type:"text"},description:"forms `action` attribute"},formMethod:{control:{type:"text"},description:"forms `method` attribute"},item:{table:{category:"@attribute tags"}},checked:{control:{type:"boolean"},description:"whether or not the item is checked",table:{category:"@item attributes"}},value:{table:{category:"@item attributes"},control:{type:"text"},description:"the item's value (returned in emitted events when checked)"},disabled:{table:{category:"@item attributes"},control:{type:"boolean"},description:"whether or not the item is disabled"},onChange:{action:"on-change",description:"Triggered on item clicked",table:{category:"Events",defaultValue:{summary:"{ el, checked, itemChecked, index, originalEvent }"}}},footerClick:{action:"on-footer-click",description:"Triggered on footer clicked",table:{category:"Events",defaultValue:{summary:"{ checked, originalEvent }"}}},formSubmit:{action:"on-form-submit",description:'when using `variant="form"`, and form is submitted (emits current checked state)',table:{category:"Events",defaultValue:{summary:"{ checked, originalEvent }"}}},footer:{name:"@footer",table:{category:"@attribute tags"}}}},e=m.bind({});e.args={items:[{value:"item 1",renderBody:"item 1"},{value:"item 2",renderBody:"item 2"},{value:"item 3",renderBody:"item 3"}],text:"Button",footer:{renderBody:"Apply",a11yFooterText:"a11y text for footer button"}};e.parameters={docs:{source:{code:n("ebay-filter-menu",e.args,{items:"item"})}}};var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const A=["Standard"];export{e as Standard,A as __namedExportsOrder,_ as default};
