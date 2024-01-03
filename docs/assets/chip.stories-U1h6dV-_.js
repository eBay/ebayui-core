import{t as y}from"./index-iqhZMf16.js";import{a as k}from"./utils-NX-dnf4r.js";import{t as x,r as B,b as D,f as T,p as E,d as S}from"./registry-EgEQwbXk.js";import{_ as v}from"./dynamic-tag-7vXwaVzE.js";import{_ as w}from"./index-YaSSGaP-.js";import{_ as C}from"./render-tag-_0PNNh6Y.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";import"./index-eucXA0ea.js";/* empty css             */const R=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,i="16+/P/p6",o=x(i),A=o;B.r(i,()=>o);const h={};o._=D(function(s,e,r,n,I,H){const{renderBody:_,a11yDeleteButton:c,...f}=s;e.be("span",T({class:"chip"},E(f)),"0",n,null,4),e.be("span",{class:"chip__text",id:r.elId("title")},"1",n,null,1),v(e,_,null,null,null,null,r,"2"),e.ee(),c&&(e.be("button",{type:"button",class:"chip__button","aria-label":c,"aria-describedby":r.elId("text")},"3",n,null,0,{onclick:r.d("click","emit",!1,["delete"])}),C(w,{},e,r,"4"),e.ee()),e.ee()},{t:i,i:!0},h);o.Component=S(h,o._);const g=s=>({input:k(s)}),F={title:"building blocks/ebay-chip",component:A,parameters:{docs:{description:{component:R}}},argTypes:{renderBody:{control:{type:"text"},description:"Text to be displayed in the chip"},a11yDeleteButton:{control:{type:"text"},description:"A11y text for the delete button, also determines if delete button is shown"},onDelete:{action:"on-delete",description:"Triggered when delete button is clicked",table:{category:"Events",defaultValue:{summary:"[ Event, HTMLElement ]"}}}}},t=g.bind({});t.args={renderBody:"chip text"};t.parameters={docs:{source:{code:y("ebay-chip",t.args)}}};const a=g.bind({});a.args={renderBody:"chip text",a11yDeleteButton:"Delete"};a.parameters={docs:{source:{code:y("ebay-chip",a.args)}}};var l,p,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,b,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(u=(b=a.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};const G=["Default","WithDelete"];export{t as Default,a as WithDelete,G as __namedExportsOrder,F as default};
