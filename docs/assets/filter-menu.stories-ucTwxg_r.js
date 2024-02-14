import{t as n}from"./index-iqhZMf16.js";import{a}from"./utils-NX-dnf4r.js";import{C as s}from"./index-SwC3eOBR.js";import"./registry-zqrnEiYK.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";import"./index-qcbGa1eL.js";/* empty css              */import"./index-vNEQ4tAH.js";import"./index-T-tr__32.js";/* empty css             */import"./render-tag-_0PNNh6Y.js";import"./index-aYjb7RMT.js";import"./index-GxCEZ36B.js";import"./dynamic-tag-4Gch17f1.js";import"./index-sDZ0BqWo.js";import"./index-j_KV6Utw.js";import"./index-J8CKH9U9.js";import"./index-QGVtTfuc.js";import"./index-XjwwBzg5.js";import"./index-j-rYSiF3.js";const c=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
