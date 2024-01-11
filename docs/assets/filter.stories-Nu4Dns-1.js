import{t as x}from"./index-iqhZMf16.js";import{a as C}from"./utils-NX-dnf4r.js";import{t as S,r as w,b as B,f as T,p as v,g as d,d as A}from"./registry-BhN9Jjhp.js";import{_ as E}from"./dynamic-tag-hjM4Clfs.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";const I=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;class $ extends Marko.Component{handleButtonClick(e){if(!this.input.disabled){const s=!this.state.selected;this.state.selected=s,this.emit("click",{selected:s,originalEvent:e})}}onInput(e){this.state={selected:e.selected||!1}}}const c="matLytCm",l=S(c),N=l;w.r(c,()=>l);const u=$;l._=B(function(r,e,s,a,o,R){const{a11ySelectedText:y,class:f,href:n,renderBody:g,selected:L,useAriaPressed:h,...k}=r;var i=n?"filter-link":"filter-button";const _=n?"a":"button";e.be(_,T(v(k),{class:d([i,`${i}--${o.selected?"selected":"unselected"}`,f]),type:!n&&"button",href:n,"aria-pressed":h!==!1&&!n&&o.selected&&"true"}),"0",a,null,4,{onclick:s.d("click","handleButtonClick",!1)}),e.be("span",{class:d(`${i}__cell`)},"1",a,null,1),e.be("span",null,"2",a,null,0),E(e,g,null,null,null,null,s,"3"),e.ee(),n&&o.selected&&(e.be("span",{class:"clipped",id:s.elId("active-text")},"@active-text",a,null,1),e.t("- ",a),e.t(y||"Selected",a),e.ee()),e.ee(),e.ee()},{t:c},u);l.Component=A(u,l._);const P=r=>({input:C(r)}),O={title:"building blocks/ebay-filter",component:N,parameters:{docs:{description:{component:I}}},argTypes:{href:{control:{type:"text"},description:"for link that looks like a button"},disabled:{control:{type:"boolean"}},selected:{control:{type:"boolean"}},useAriaPressed:{control:{type:"boolean"},description:"defaults to `true`"},a11ySelectedText:{control:{type:"text"},description:'defaults to `"Selected"`, but should be changed based on L10N or I18N',table:{category:"when using fake filters"}},onClick:{action:"on-click",description:"Triggered on item clicked",table:{category:"Events",defaultValue:{summary:"{ el, checked, originalEvent }"}}}}},t=P.bind({});t.args={renderBody:"text",useAriaPressed:!0};t.parameters={docs:{source:{code:x("ebay-filter",t.args)}}};var p,m,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const V=["Standard"];export{t as Standard,V as __namedExportsOrder,O as default};
