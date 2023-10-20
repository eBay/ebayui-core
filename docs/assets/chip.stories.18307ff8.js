import{t as g}from"./index.bcb3df20.js";import{a as B}from"./utils.f000f876.js";import{t as v,r as D,a as O,d as T,m as j,p as E}from"./merge-attrs.9e0d7be9.js";import{d as S}from"./dynamic-tag.70156c9d.js";import{_ as w}from"./index.a5276c99.js";import{r as A}from"./render-tag.1a0b986f.js";import"./_commonjsHelpers.b8add541.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./index.aa2d3137.js";/* empty css             */const P=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;const C=["renderBody","a11yDeleteButton"];function R(e,t){if(e==null)return{};var n=W(e,t),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function W(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}const l="16+/P/p6",c=v(l),I=c;D.exports.r(l,()=>c);const f={};c._=O(function(e,t,n,r,o,a){const{renderBody:k,a11yDeleteButton:p}=e,_=R(e,C);t.be("span",j({class:"chip"},E(_)),"0",r,null,4),t.be("span",{class:"chip__text",id:n.elId("title")},"1",r,null,1),S(t,k,null,null,null,null,n,"2"),t.ee(),p&&(t.be("button",{type:"button",class:"chip__button","aria-label":p,"aria-describedby":n.elId("text")},"3",r,null,0,{onclick:n.d("click","emit",!1,["delete"])}),A(w,{},t,n,"4"),t.ee()),t.ee()},{t:l,i:!0},f);c.Component=T(f,c._);const x=e=>({input:B(e)}),K={title:"building blocks/ebay-chip",component:I,parameters:{docs:{description:{component:P}}},argTypes:{renderBody:{control:{type:"text"},description:"Text to be displayed in the chip"},a11yDeleteButton:{control:{type:"text"},description:"A11y text for the delete button, also determines if delete button is shown"},onDelete:{action:"on-delete",description:"Triggered when delete button is clicked",table:{category:"Events",defaultValue:{summary:"[ Event, HTMLElement ]"}}}}},s=x.bind({});s.args={renderBody:"chip text"};s.parameters={docs:{source:{code:g("ebay-chip",s.args)}}};const i=x.bind({});i.args={renderBody:"chip text",a11yDeleteButton:"Delete"};i.parameters={docs:{source:{code:g("ebay-chip",i.args)}}};var d,m,b;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(b=(m=s.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var u,y,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const N=["Default","WithDelete"];export{s as Default,i as WithDelete,N as __namedExportsOrder,K as default};
//# sourceMappingURL=chip.stories.18307ff8.js.map
