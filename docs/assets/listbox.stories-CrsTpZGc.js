import{b as O,a as _}from"./utils-DWCsNc5l.js";import{t as k}from"./index-CCz6reEH.js";import{C as x}from"./index-DL8yen09.js";import{r as v,b as w,d as T,t as C}from"./registry-DoALHDDx.js";import{i,r,a as s}from"./attr-tag-DphMQldM.js";import{_ as D}from"./render-tag-BBOJ9dEX.js";import"./dynamic-tag-B1GLaPEW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DopldULf.js";import"./index-mP6JM4Am.js";/* empty css             */import"./index-BUA-308i.js";import"./index-Ku187Omj.js";import"./index-D7GlLQHj.js";import"./index-blmbJU0z.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const S=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,p="HdZGovD2",o=C(p);v.r(p,()=>o);const g={};o._=w(function(l,h,f,a,F,R){D(x,i(()=>{r("options",i(()=>{s("description",{renderBody:e=>{e.t("Option 1 extra info",a)}})},{value:"1",text:"Option 1"})),r("options",i(()=>{s("description",{renderBody:e=>{e.t("Option 2 extra info",a)}})},{value:"2",text:"Option 2"})),r("options",i(()=>{s("description",{renderBody:e=>{e.t("Option 3 extra info",a)}})},{value:"3",text:"Option 3"}))},{name:"formFieldName"}),h,f,"0")},{t:p,i:!0},g);o.Component=T(g,o._);const B=`<ebay-listbox name="formFieldName">
    <@option value="1" text="Option 1"><@description>Option 1 extra info</@description></@option>
    <@option value="2" text="Option 2"><@description>Option 2 extra info</@description></@option>
    <@option value="3" text="Option 3"><@description>Option 3 extra info</@description></@option>
</ebay-listbox>
`,E=l=>({input:_(l)}),M={title:"building blocks/ebay-listbox",component:x,parameters:{docs:{description:{component:S}}},argTypes:{name:{control:{type:"text"},description:"used for the `name` attribute of the native `<select>`"},listSelection:{table:{defaultValue:{summary:"manual"}},description:"If manual then user will need to press enter to select an item using keyboard. Otherwise auto will automatically select as the user presses up/down",options:["manual","auto"],type:"select"},selected:{description:"allows you to set the selected index option to `selected`"},option:{name:"@option",table:{category:"@attribute tags"}},text:{control:{type:"text"},table:{category:"@option attributes"}},value:{control:{type:"text"},table:{category:"@option attributes"}},disabled:{control:{type:"boolean"},table:{category:"@option attributes"}},onChange:{action:"on-change",description:"Triggered on item clicked",table:{category:"Events",defaultValue:{summary:"{ el, index, selected, wasClicked }"}}}}},t=E.bind({});t.args={options:[{value:"1",text:"Option 1"},{value:"2",text:"Option 2"},{value:"3",text:"Option 3"}]};t.parameters={docs:{source:{code:k("ebay-listbox",t.args)}}};const n=O(o,B);var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,b,y;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:"buildExtensionTemplate(WithDescriptionTemplate, WithDescriptionTemplateCode)",...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const P=["Standard","withDescription"];export{t as Standard,P as __namedExportsOrder,M as default,n as withDescription};
