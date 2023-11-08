import{t as g}from"./index.bcb3df20.js";import{t as y,r as b,a as h,d as f,m as _,c as l,p as x}from"./merge-attrs.9e0d7be9.js";import{_ as k}from"./index.b54ea0ad.js";import{r as v}from"./render-tag.1a0b986f.js";import{d as r}from"./dynamic-tag.70156c9d.js";import"./_commonjsHelpers.b8add541.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./index.aa2d3137.js";/* empty css             */const S=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-details
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.2.0
    </span>
</h1>

Details component which expands and collapses extra text on click

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/navigation-disclosure-ebay-details)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/navigation-disclosure-ebay-details)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-details/examples)
`;class E{toggleDetails(e){this.emit("toggle",{originalEvent:e,open:this.getEl("root").open})}clickDetails(e){this.emit("click",{originalEvent:e})}}const n="wXSFZgYA",i=y(n),T=i;function B(){}var V=["class","open","alignment","size","text","toJSON"];b.exports.r(n,()=>E);const p={};i._=h(function(t,e,s,o,D,q){t.toJSON=B,e.be("details",_(x(t,V),{class:l(["details",t.class]),open:t.open}),"@root",o,null,4,{ontoggle:s.d("toggle","toggleDetails",!1),onclick:s.d("click","clickDetails",!1)}),e.be("summary",{class:l(["details__summary",t.size==="small"&&"details__summary--small",t.alignment==="center"&&"details__summary--center"])},"0",o,null,1),e.be("span",{class:"details__label"},"1",o,null,1),e.t(t.text,o),e.ee(),e.be("span",{class:"details__icon",hidden:""},"2",o,null,0),v(k,{},e,s,"3"),e.ee(),e.ee(),r(e,t.as||"div",null,u=>{r(u,t.renderBody,null,null,null,null,s,"5")},null,null,s,"4"),e.ee()},{t:n,s:!0},p);i.Component=f(p,i._);const z=t=>({input:{...t,renderBody(e){e.html(t.renderBody)}}}),H={title:"navigation & disclosure/ebay-details",component:T,parameters:{docs:{description:{component:S}}},argTypes:{renderBody:{},alignment:{type:"options",description:"The position of the details",table:{defaultValue:{summary:"regular"}},options:["regular","center"]},size:{type:"options",description:"Size of the details",table:{defaultValue:{summary:"regular"}},options:["regular","small"]},open:{type:"boolean",description:"Whether details is open",table:{defaultValue:{summary:"false"}}},as:{description:"The root element.",table:{defaultValue:{summary:"div"}}},onToggle:{action:"on-toggle",description:"Triggered on toggle",table:{category:"Events",defaultValue:{summary:"{ originalEvent, open }"}}},onClick:{action:"on-click",description:"Triggered on click",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}}}},a=z.bind({});a.args={renderBody:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",text:"Show me the details!",size:"regular",open:!1,as:"p"};a.parameters={docs:{source:{code:g("ebay-details",a.args)}}};var d,m,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody(out) {
      out.html(args.renderBody);
    }
  }
})`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const L=["Standard"];export{a as Standard,L as __namedExportsOrder,H as default};
//# sourceMappingURL=details.stories.1d8c68e3.js.map
