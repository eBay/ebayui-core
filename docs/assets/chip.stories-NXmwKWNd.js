import{t as p}from"./index-iqhZMf16.js";import{a as m}from"./utils-NX-dnf4r.js";import{_ as l}from"./index-yCEzkr3d.js";import"./registry-EgEQwbXk.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";import"./dynamic-tag-7vXwaVzE.js";import"./index-MJalx9GY.js";import"./index-rIGlTtcv.js";/* empty css             */import"./render-tag-_0PNNh6Y.js";const u=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-chip
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

A discrete highlighted value.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/building-blocks-ebay-chip)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/building-blocks-ebay-chip)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-chip/examples)
`,c=d=>({input:m(d)}),T={title:"building blocks/ebay-chip",component:l,parameters:{docs:{description:{component:u}}},argTypes:{renderBody:{control:{type:"text"},description:"Text to be displayed in the chip"},a11yDeleteButton:{control:{type:"text"},description:"A11y text for the delete button, also determines if delete button is shown"},onDelete:{action:"on-delete",description:"Triggered when delete button is clicked",table:{category:"Events",defaultValue:{summary:"[ Event, HTMLElement ]"}}}}},e=c.bind({});e.args={renderBody:"chip text"};e.parameters={docs:{source:{code:p("ebay-chip",e.args)}}};const t=c.bind({});t.args={renderBody:"chip text",a11yDeleteButton:"Delete"};t.parameters={docs:{source:{code:p("ebay-chip",t.args)}}};var o,r,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var s,n,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const _=["Default","WithDelete"];export{e as Default,t as WithDelete,_ as __namedExportsOrder,T as default};