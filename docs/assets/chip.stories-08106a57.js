import{t as g}from"./index-a17a703b.js";import{a as B}from"./utils-44f5c40b.js";import{t as v,r as D,_ as O,g as j,p as E,a as S}from"./merge-attrs-f99eec0a.js";import{_ as T}from"./dynamic-tag-c0238d78.js";import{_ as w}from"./index-89a12dc2.js";import{_ as P}from"./render-tag-73fdbff3.js";import"./_commonjsHelpers-725317a4.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-1aa10c61.js";/* empty css             */const A=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;const C=["renderBody","a11yDeleteButton"];function R(e,t){if(e==null)return{};var o=W(e,t),r,a;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function W(e,t){if(e==null)return{};var o={},r=Object.keys(e),a,n;for(n=0;n<r.length;n++)a=r[n],!(t.indexOf(a)>=0)&&(o[a]=e[a]);return o}const l="16+/P/p6",c=v(l),I=c;D.r(l,()=>c);const _={};c._=O(function(e,t,o,r,a,n){const{renderBody:k,a11yDeleteButton:p}=e,x=R(e,C);t.be("span",j({class:"chip"},E(x)),"0",r,null,4),t.be("span",{class:"chip__text",id:o.elId("title")},"1",r,null,1),T(t,k,null,null,null,null,o,"2"),t.ee(),p&&(t.be("button",{type:"button",class:"chip__button","aria-label":p,"aria-describedby":o.elId("text")},"3",r,null,0,{onclick:o.d("click","emit",!1,["delete"])}),P(w,{},t,o,"4"),t.ee()),t.ee()},{t:l,i:!0},_);c.Component=S(_,c._);const f=e=>({input:B(e)}),K={title:"building blocks/ebay-chip",component:I,parameters:{docs:{description:{component:A}}},argTypes:{renderBody:{control:{type:"text"},description:"Text to be displayed in the chip"},a11yDeleteButton:{control:{type:"text"},description:"A11y text for the delete button, also determines if delete button is shown"},onDelete:{action:"on-delete",description:"Triggered when delete button is clicked",table:{category:"Events",defaultValue:{summary:"[ Event, HTMLElement ]"}}}}},s=f.bind({});s.args={renderBody:"chip text"};s.parameters={docs:{source:{code:g("ebay-chip",s.args)}}};const i=f.bind({});i.args={renderBody:"chip text",a11yDeleteButton:"Delete"};i.parameters={docs:{source:{code:g("ebay-chip",i.args)}}};var d,m,b;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(b=(m=s.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var u,y,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const N=["Default","WithDelete"];export{s as Default,i as WithDelete,N as __namedExportsOrder,K as default};
//# sourceMappingURL=chip.stories-08106a57.js.map
