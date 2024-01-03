import{b as f,a as _}from"./utils-NX-dnf4r.js";import{t as O}from"./index-iqhZMf16.js";import{C as y}from"./index-0Uqetjhm.js";import{r as k,b as S,d as v,t as w}from"./registry-EgEQwbXk.js";import{_ as e}from"./self-iterator-6yU_KG2T.js";import{_ as T}from"./render-tag-_0PNNh6Y.js";import"./dynamic-tag-7vXwaVzE.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./index-HaLoY7FK.js";import"./index-eucXA0ea.js";/* empty css             */import"./preserve-attrs-lolIpBRv.js";import"./index-QozpcpzM.js";import"./index-J8CKH9U9.js";import"./index-QGVtTfuc.js";import"./index-whtpiCcX.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";const C=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,s="HdZGovD2",i=w(s);k.r(s,()=>i);const x={};i._=S(function(p,g,h,r,E,F){const n=[];n.push({value:"1",text:"Option 1",description:{renderBody:o=>{o.t("Option 1 extra info",r)},[Symbol.iterator]:e},[Symbol.iterator]:e}),n.push({value:"2",text:"Option 2",description:{renderBody:o=>{o.t("Option 2 extra info",r)},[Symbol.iterator]:e},[Symbol.iterator]:e}),n.push({value:"3",text:"Option 3",description:{renderBody:o=>{o.t("Option 3 extra info",r)},[Symbol.iterator]:e},[Symbol.iterator]:e}),T(y,{name:"formFieldName",options:n},g,h,"0")},{t:s,i:!0},x);i.Component=v(x,i._);const D=`<ebay-listbox name="formFieldName">
    <@option value="1" text="Option 1"><@description>Option 1 extra info</@description></@option>
    <@option value="2" text="Option 2"><@description>Option 2 extra info</@description></@option>
    <@option value="3" text="Option 3"><@description>Option 3 extra info</@description></@option>
</ebay-listbox>
`,B=p=>({input:_(p)}),M={title:"building blocks/ebay-listbox",component:y,parameters:{docs:{description:{component:C}}},argTypes:{name:{control:{type:"text"},description:"used for the `name` attribute of the native `<select>`"},listSelection:{table:{defaultValue:{summary:"manual"}},description:"If manual then user will need to press enter to select an item using keyboard. Otherwise auto will automatically select as the user presses up/down",options:["manual","auto"],type:"select"},selected:{description:"allows you to set the selected index option to `selected`"},option:{name:"@option",table:{category:"@attribute tags"}},text:{control:{type:"text"},table:{category:"@option attributes"}},value:{control:{type:"text"},table:{category:"@option attributes"}},disabled:{control:{type:"boolean"},table:{category:"@option attributes"}},onChange:{action:"on-change",description:"Triggered on item clicked",table:{category:"Events",defaultValue:{summary:"{ el, index, selected, wasClicked }"}}}}},t=B.bind({});t.args={options:[{value:"1",text:"Option 1"},{value:"2",text:"Option 2"},{value:"3",text:"Option 3"}]};t.parameters={docs:{source:{code:O("ebay-listbox",t.args)}}};const a=f(i,D);var l,m,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,u,b;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"buildExtensionTemplate(WithDescriptionTemplate, WithDescriptionTemplateCode)",...(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const P=["Standard","withDescription"];export{t as Standard,P as __namedExportsOrder,M as default,a as withDescription};
