import{t as x}from"./index-CCz6reEH.js";import{a as S}from"./utils-DWCsNc5l.js";import{t as C,r as v,b as w,d as B,p as T,e as d,c as A}from"./registry-BVpmXZbM.js";import{_ as E}from"./dynamic-tag-CptWGHl0.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const I=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-filter
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

A button with a label which toggles between unselected and selected when clicked (similarly to a checkbox).

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/building-blocks-ebay-filter)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/building-blocks-ebay-filter)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-filter/examples)
`;class $ extends Marko.Component{handleButtonClick(e){if(!this.input.disabled){const s=!this.state.selected;this.state.selected=s,this.emit("click",{selected:s,originalEvent:e})}}onInput(e){this.state={selected:e.selected||!1}}}const c="yZKMvWVh",l=C(c),N=l;v.r(c,()=>l);const u=$;l._=w(function(r,e,s,a,o,R){const{a11ySelectedText:y,class:h,href:n,renderBody:f,selected:M,useAriaPressed:g,...k}=r;var i=n?"filter-link":"filter-button";const _=n?"a":"button";e.be(_,B(T(k),{class:d([i,`${i}--${o.selected?"selected":"unselected"}`,h]),type:!n&&"button",href:n,"aria-pressed":g!==!1&&!n&&o.selected&&"true"}),"0",a,null,4,{onclick:s.d("click","handleButtonClick",!1)}),e.be("span",{class:d(`${i}__cell`)},"1",a,null,1),e.be("span",null,"2",a,null,0),E(e,f,null,null,null,null,s,"3"),e.ee(),n&&o.selected&&(e.be("span",{class:"clipped",id:s.elId("active-text")},"@active-text",a,null,1),e.t("- ",a),e.t(y||"Selected",a),e.ee()),e.ee(),e.ee()},{t:c},u);l.Component=A(u,l._);const P=r=>({input:S(r)}),K={title:"building blocks/ebay-filter",component:N,parameters:{docs:{description:{component:I}}},argTypes:{href:{control:{type:"text"},description:"for link that looks like a button"},disabled:{control:{type:"boolean"}},selected:{control:{type:"boolean"}},useAriaPressed:{control:{type:"boolean"},description:"defaults to `true`"},a11ySelectedText:{control:{type:"text"},description:'defaults to `"Selected"`, but should be changed based on L10N or I18N',table:{category:"when using fake filters"}},onClick:{action:"on-click",description:"Triggered on item clicked",table:{category:"Events",defaultValue:{summary:"{ el, checked, originalEvent }"}}}}},t=P.bind({});t.args={renderBody:"text",useAriaPressed:!0};t.parameters={docs:{source:{code:x("ebay-filter",t.args)}}};var p,m,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const L=["Standard"];export{t as Standard,L as __namedExportsOrder,K as default};
