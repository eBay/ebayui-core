import{t as _}from"./index-CCz6reEH.js";import{a as x}from"./utils-DWCsNc5l.js";import{t as S,r as C,b as v,d as w,p as B,e as T,c as A}from"./registry-CyswyZw5.js";import{_ as E}from"./dynamic-tag-CXXozR29.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const I=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;class $ extends Marko.Component{handleButtonClick(e){if(!this.input.disabled){const s=!this.state.selected;this.state.selected=s,this.emit("click",{selected:s,originalEvent:e})}}onInput(e){this.state={selected:e.selected||!1}}}const c="yZKMvWVh",n=S(c);C.r(c,()=>n);const b=$;n._=v(function(r,e,s,a,o,P){const{a11ySelectedText:u,class:y,href:l,renderBody:h,selected:R,useAriaPressed:f,...g}=r;var i=l?"filter-link":"filter-button";const k=l?"a":"button";e.be(k,w(B(g),{class:T([i,`${i}--${o.selected?"selected":"unselected"}`,y]),type:!l&&"button",href:l,"aria-pressed":f!==!1&&!l&&o.selected&&"true"}),"0",a,null,4,{onclick:s.d("click","handleButtonClick",!1)}),e.be("span",{class:`${i}__cell`},"1",a,null,1),e.be("span",null,"2",a,null,0),E(e,h,null,null,null,null,s,"3"),e.ee(),l&&o.selected&&(e.be("span",{class:"clipped",id:s.elId("active-text")},"@active-text",a,null,1),e.t("- ",a),e.t(u||"Selected",a),e.ee()),e.ee(),e.ee()},{t:c},b);n.Component=A(b,n._);const N=r=>({input:x(r)}),H={title:"building blocks/ebay-filter",component:n,parameters:{docs:{description:{component:I}}},argTypes:{href:{control:{type:"text"},description:"for link that looks like a button"},disabled:{control:{type:"boolean"}},selected:{control:{type:"boolean"}},useAriaPressed:{control:{type:"boolean"},description:"defaults to `true`"},a11ySelectedText:{control:{type:"text"},description:'defaults to `"Selected"`, but should be changed based on L10N or I18N',table:{category:"when using fake filters"}},onClick:{action:"on-click",description:"Triggered on item clicked",table:{category:"Events",defaultValue:{summary:"{ el, checked, originalEvent }"}}}}},t=N.bind({});t.args={renderBody:"text",useAriaPressed:!0};t.parameters={docs:{source:{code:_("ebay-filter",t.args)}}};var d,p,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const K=["Standard"];export{t as Standard,K as __namedExportsOrder,H as default};
