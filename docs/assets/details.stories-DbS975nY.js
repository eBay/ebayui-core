<<<<<<< HEAD:docs/assets/details.stories-DH8xu6ka.js
import{t as v}from"./index-CCz6reEH.js";import{t as E,r as S,b as T,f as B,p as D,e as l,d as C}from"./registry-Cc025Aii.js";import{_ as V}from"./index-Cg9SEWMG.js";import{_ as q}from"./render-tag-BBOJ9dEX.js";import{_ as r}from"./dynamic-tag-BtS2B08A.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-oHjhF9YT.js";/* empty css             */const w=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
=======
import{t as v}from"./index-CCz6reEH.js";import{t as E,r as S,b as T,e as B,p as D,f as l,d as C}from"./registry-DcejNBCz.js";import{_ as V}from"./index-CsP3Cepb.js";import{_ as q}from"./render-tag-BBOJ9dEX.js";import{_ as r}from"./dynamic-tag-CH7Ufq3Q.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-CenZB3al.js";/* empty css             */const w=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
>>>>>>> 0dd633d3f26a93f2dac2c5dddbe8a62ca57c0af5:docs/assets/details.stories-DbS975nY.js
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
`;let z=class extends Marko.Component{toggleDetails(e){this.emit("toggle",{originalEvent:e,open:this.getEl("root").open})}clickDetails(e){this.emit("click",{originalEvent:e})}};const n="wXSFZgYA",i=E(n),A=i;function $(){}S.r(n,()=>z);const p={};i._=T(function(a,e,s,o,j,F){const{class:u,open:g,alignment:y,size:b,text:_,renderBody:h,as:f,...k}=a;a.toJSON=$,e.be("details",B(D(k),{class:l(["details",u]),open:g}),"@root",o,null,4,{ontoggle:s.d("toggle","toggleDetails",!1),onclick:s.d("click","clickDetails",!1)}),e.be("summary",{class:l(["details__summary",b==="small"&&"details__summary--small",y==="center"&&"details__summary--center"])},"0",o,null,1),e.be("span",{class:"details__label"},"1",o,null,1),e.t(_,o),e.ee(),e.be("span",{class:"details__icon",hidden:""},"2",o,null,0),q(V,{},e,s,"3"),e.ee(),e.ee(),r(e,f||"div",null,x=>{r(x,h,null,null,null,null,s,"5")},null,null,s,"4"),e.ee()},{t:n,s:!0},p);i.Component=C(p,i._);const O=a=>({input:{...a,renderBody(e){e.html(a.renderBody)}}}),Y={title:"navigation & disclosure/ebay-details",component:A,parameters:{docs:{description:{component:w}}},argTypes:{renderBody:{},alignment:{type:"options",description:"The position of the details",table:{defaultValue:{summary:"regular"}},options:["regular","center"]},size:{type:"options",description:"Size of the details",table:{defaultValue:{summary:"regular"}},options:["regular","small"]},open:{type:"boolean",description:"Whether details is open",table:{defaultValue:{summary:"false"}}},as:{description:"The root element.",table:{defaultValue:{summary:"div"}}},onToggle:{action:"on-toggle",description:"Triggered on toggle",table:{category:"Events",defaultValue:{summary:"{ originalEvent, open }"}}},onClick:{action:"on-click",description:"Triggered on click",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}}}},t=O.bind({});t.args={renderBody:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",text:"Show me the details!",size:"regular",open:!1,as:"p"};t.parameters={docs:{source:{code:v("ebay-details",t.args)}}};var d,m,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody(out) {
      out.html(args.renderBody);
    }
  }
})`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const Z=["Standard"];export{t as Standard,Z as __namedExportsOrder,Y as default};
