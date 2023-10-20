import{t as y}from"./index.bcb3df20.js";import{a as f}from"./utils.f000f876.js";import{t as h,r as g,a as k,d as x,m as S,c as i,p as C}from"./merge-attrs.9e0d7be9.js";import{d as T}from"./dynamic-tag.70156c9d.js";import"./_commonjsHelpers.b8add541.js";import"./_commonjs-dynamic-modules.30ae7933.js";const _=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;const A={handleButtonClick(e){if(!this.input.disabled){const t=!this.state.selected;this.state.selected=t,this.emit("click",{selected:t,originalEvent:e})}},onInput(e){this.state={selected:e.selected||!1}}},c="matLytCm",r=h(c),B=r;var v=["selected","a11ySelectedText","useAriaPressed"];g.exports.r(c,()=>r);const p=A;r._=k(function(e,t,l,a,o,E){var n=e.href?"filter-link":"filter-button";const u=e.href?"a":"button";t.be(u,S(C(e,v),{class:i([n,"".concat(n,"--").concat(o.selected?"selected":"unselected"),e.class]),type:!e.href&&"button","aria-pressed":e.useAriaPressed!==!1&&!e.href&&o.selected&&"true"}),"0",a,null,4,{onclick:l.d("click","handleButtonClick",!1)}),t.be("span",{class:i("".concat(n,"__cell"))},"1",a,null,1),t.be("span",null,"2",a,null,0),T(t,e.renderBody,null,null,null,null,l,"3"),t.ee(),e.href&&o.selected&&(t.be("span",{class:"clipped",id:l.elId("active-text")},"@active-text",a,null,1),t.t("- ",a),t.t(e.a11ySelectedText||"Selected",a),t.ee()),t.ee(),t.ee()},{t:c},p);r.Component=x(p,r._);const w=e=>({input:f(e)}),j={title:"building blocks/ebay-filter",component:B,parameters:{docs:{description:{component:_}}},argTypes:{href:{control:{type:"text"},description:"for link that looks like a button"},disabled:{control:{type:"boolean"}},selected:{control:{type:"boolean"}},useAriaPressed:{control:{type:"boolean"},description:"defaults to `true`"},a11ySelectedText:{control:{type:"text"},description:'defaults to `"Selected"`, but should be changed based on L10N or I18N',table:{category:"when using fake filters"}},onClick:{action:"on-click",description:"Triggered on item clicked",table:{category:"Events",defaultValue:{summary:"{ el, checked, originalEvent }"}}}}},s=w.bind({});s.args={renderBody:"text",useAriaPressed:!0};s.parameters={docs:{source:{code:y("ebay-filter",s.args)}}};var d,b,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(m=(b=s.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};const z=["Standard"];export{s as Standard,z as __namedExportsOrder,j as default};
//# sourceMappingURL=filter.stories.68b1283a.js.map
