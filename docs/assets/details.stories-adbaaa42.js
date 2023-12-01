import{t as g}from"./index-a17a703b.js";import{t as y,r as b,_,g as h,p as f,h as n,a as k}from"./registry-08dff688.js";import{_ as v}from"./index-ad2763da.js";import{_ as x}from"./render-tag-73fdbff3.js";import{_ as l}from"./dynamic-tag-bb62150b.js";import"./_commonjsHelpers-725317a4.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-3f14fa50.js";/* empty css             */const S=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;class E{toggleDetails(e){this.emit("toggle",{originalEvent:e,open:this.getEl("root").open})}clickDetails(e){this.emit("click",{originalEvent:e})}}const r="wXSFZgYA",i=y(r),T=i;function B(){}var z=["class","open","alignment","size","text","toJSON"];b.r(r,()=>E);const p={};i._=_(function(a,e,s,o,V,q){a.toJSON=B,e.be("details",h(f(a,z),{class:n(["details",a.class]),open:a.open}),"@root",o,null,4,{ontoggle:s.d("toggle","toggleDetails",!1),onclick:s.d("click","clickDetails",!1)}),e.be("summary",{class:n(["details__summary",a.size==="small"&&"details__summary--small",a.alignment==="center"&&"details__summary--center"])},"0",o,null,1),e.be("span",{class:"details__label"},"1",o,null,1),e.t(a.text,o),e.ee(),e.be("span",{class:"details__icon",hidden:""},"2",o,null,0),x(v,{},e,s,"3"),e.ee(),e.ee(),l(e,a.as||"div",null,u=>{l(u,a.renderBody,null,null,null,null,s,"5")},null,null,s,"4"),e.ee()},{t:r,s:!0},p);i.Component=k(p,i._);const D=a=>({input:{...a,renderBody(e){e.html(a.renderBody)}}}),H={title:"navigation & disclosure/ebay-details",component:T,parameters:{docs:{description:{component:S}}},argTypes:{renderBody:{},alignment:{type:"options",description:"The position of the details",table:{defaultValue:{summary:"regular"}},options:["regular","center"]},size:{type:"options",description:"Size of the details",table:{defaultValue:{summary:"regular"}},options:["regular","small"]},open:{type:"boolean",description:"Whether details is open",table:{defaultValue:{summary:"false"}}},as:{description:"The root element.",table:{defaultValue:{summary:"div"}}},onToggle:{action:"on-toggle",description:"Triggered on toggle",table:{category:"Events",defaultValue:{summary:"{ originalEvent, open }"}}},onClick:{action:"on-click",description:"Triggered on click",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}}}},t=D.bind({});t.args={renderBody:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",text:"Show me the details!",size:"regular",open:!1,as:"p"};t.parameters={docs:{source:{code:g("ebay-details",t.args)}}};var m,d,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody(out) {
      out.html(args.renderBody);
    }
  }
})`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const L=["Standard"];export{t as Standard,L as __namedExportsOrder,H as default};
//# sourceMappingURL=details.stories-adbaaa42.js.map
