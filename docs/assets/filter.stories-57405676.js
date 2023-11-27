import{t as y}from"./index-a17a703b.js";import{a as f}from"./utils-44f5c40b.js";import{t as h,r as g,_ as k,g as _,p as x,h as i,a as S}from"./registry-08dff688.js";import{_ as C}from"./dynamic-tag-bb62150b.js";import"./_commonjsHelpers-725317a4.js";import"./_commonjs-dynamic-modules-302442b1.js";const B=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;const T={handleButtonClick(e){if(!this.input.disabled){const t=!this.state.selected;this.state.selected=t,this.emit("click",{selected:t,originalEvent:e})}},onInput(e){this.state={selected:e.selected||!1}}},c="matLytCm",r=h(c),v=r;var w=["selected","a11ySelectedText","useAriaPressed"];g.r(c,()=>r);const p=T;r._=k(function(e,t,o,a,l,E){var n=e.href?"filter-link":"filter-button";const u=e.href?"a":"button";t.be(u,_(x(e,w),{class:i([n,"".concat(n,"--").concat(l.selected?"selected":"unselected"),e.class]),type:!e.href&&"button","aria-pressed":e.useAriaPressed!==!1&&!e.href&&l.selected&&"true"}),"0",a,null,4,{onclick:o.d("click","handleButtonClick",!1)}),t.be("span",{class:i("".concat(n,"__cell"))},"1",a,null,1),t.be("span",null,"2",a,null,0),C(t,e.renderBody,null,null,null,null,o,"3"),t.ee(),e.href&&l.selected&&(t.be("span",{class:"clipped",id:o.elId("active-text")},"@active-text",a,null,1),t.t("- ",a),t.t(e.a11ySelectedText||"Selected",a),t.ee()),t.ee(),t.ee()},{t:c},p);r.Component=S(p,r._);const A=e=>({input:f(e)}),z={title:"building blocks/ebay-filter",component:v,parameters:{docs:{description:{component:B}}},argTypes:{href:{control:{type:"text"},description:"for link that looks like a button"},disabled:{control:{type:"boolean"}},selected:{control:{type:"boolean"}},useAriaPressed:{control:{type:"boolean"},description:"defaults to `true`"},a11ySelectedText:{control:{type:"text"},description:'defaults to `"Selected"`, but should be changed based on L10N or I18N',table:{category:"when using fake filters"}},onClick:{action:"on-click",description:"Triggered on item clicked",table:{category:"Events",defaultValue:{summary:"{ el, checked, originalEvent }"}}}}},s=A.bind({});s.args={renderBody:"text",useAriaPressed:!0};s.parameters={docs:{source:{code:y("ebay-filter",s.args)}}};var d,m,b;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(b=(m=s.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const D=["Standard"];export{s as Standard,D as __namedExportsOrder,z as default};
//# sourceMappingURL=filter.stories-57405676.js.map
