import{t as v}from"./index-iqhZMf16.js";import{t as S,r as E,b as T,f as B,p as D,g as l,d as C}from"./registry-BhN9Jjhp.js";import{_ as V}from"./index-oGO7Hbb2.js";import{_ as q}from"./render-tag-_0PNNh6Y.js";import{_ as r}from"./dynamic-tag-hjM4Clfs.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";import"./index-gdhiSckb.js";/* empty css             */const w=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;let z=class extends Marko.Component{toggleDetails(e){this.emit("toggle",{originalEvent:e,open:this.getEl("root").open})}clickDetails(e){this.emit("click",{originalEvent:e})}};const n="wXSFZgYA",i=S(n),A=i;function O(){}E.r(n,()=>z);const p={};i._=T(function(a,e,s,o,J,N){const{class:u,open:g,alignment:y,size:b,text:_,renderBody:h,as:f,toJSON:j,...k}=a;a.toJSON=O,e.be("details",B(D(k),{class:l(["details",u]),open:g}),"@root",o,null,4,{ontoggle:s.d("toggle","toggleDetails",!1),onclick:s.d("click","clickDetails",!1)}),e.be("summary",{class:l(["details__summary",b==="small"&&"details__summary--small",y==="center"&&"details__summary--center"])},"0",o,null,1),e.be("span",{class:"details__label"},"1",o,null,1),e.t(_,o),e.ee(),e.be("span",{class:"details__icon",hidden:""},"2",o,null,0),q(V,{},e,s,"3"),e.ee(),e.ee(),r(e,f||"div",null,x=>{r(x,h,null,null,null,null,s,"5")},null,null,s,"4"),e.ee()},{t:n,s:!0},p);i.Component=C(p,i._);const $=a=>({input:{...a,renderBody(e){e.html(a.renderBody)}}}),Z={title:"navigation & disclosure/ebay-details",component:A,parameters:{docs:{description:{component:w}}},argTypes:{renderBody:{},alignment:{type:"options",description:"The position of the details",table:{defaultValue:{summary:"regular"}},options:["regular","center"]},size:{type:"options",description:"Size of the details",table:{defaultValue:{summary:"regular"}},options:["regular","small"]},open:{type:"boolean",description:"Whether details is open",table:{defaultValue:{summary:"false"}}},as:{description:"The root element.",table:{defaultValue:{summary:"div"}}},onToggle:{action:"on-toggle",description:"Triggered on toggle",table:{category:"Events",defaultValue:{summary:"{ originalEvent, open }"}}},onClick:{action:"on-click",description:"Triggered on click",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}}}},t=$.bind({});t.args={renderBody:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",text:"Show me the details!",size:"regular",open:!1,as:"p"};t.parameters={docs:{source:{code:v("ebay-details",t.args)}}};var d,m,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody(out) {
      out.html(args.renderBody);
    }
  }
})`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const G=["Standard"];export{t as Standard,G as __namedExportsOrder,Z as default};
