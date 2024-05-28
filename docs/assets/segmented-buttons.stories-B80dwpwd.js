<<<<<<< HEAD:docs/assets/segmented-buttons.stories-DIbqu7_3.js
import{t as L}from"./index-CCz6reEH.js";import{b as X,a as Y}from"./utils-DWCsNc5l.js";import{t as Q,r as W,b as w,f as k,e as x,p as v,d as q}from"./registry-Cc025Aii.js";import{_ as m}from"./dynamic-tag-BtS2B08A.js";import{_ as F,a as G}from"./index-B15Z7t4d.js";import{_ as d}from"./render-tag-BBOJ9dEX.js";import{i as b,r as B,a as I}from"./attr-tag-DphMQldM.js";import{_ as J}from"./empty-component-BCB5DEsP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-oHjhF9YT.js";/* empty css             */class K extends Marko.Component{onCreate(){this.state={selectedIndex:0}}onInput(e){let t=(e.buttons||[]).findIndex(n=>n.selected);t===-1&&(t=0),this.state.selectedIndex=t}onButtonClick(e,t){e!==this.state.selectedIndex&&(this.state.selectedIndex=e,this.emit("change",{index:e,value:(this.input.buttons[e]||{}).value||void 0,originalEvent:t}))}}const p="LNSA3gQY",l=Q(p),A=l,P=["large"];W.r(p,()=>l);const O=K;l._=w(function(s,e,t,n,y,R){let{size:o,class:te,buttons:ne,...V}=s;var h=o&&P.includes(o)?o:null;e.be("div",k({class:x(["segmented-buttons",h&&`segmented-buttons--${h}`,s.class])},v(V)),"0",n,null,4),e.be("ul",null,"1",n,null,0);{let j=0;for(const _ of s.buttons||[]){let c=j++;const a=`[${c}]`,{class:D,icon:f,renderBody:N,...H}=_;e.be("li",null,"2"+a,n,null,0),e.be("button",k({class:x(["segmented-buttons__button",D]),"aria-current":y.selectedIndex===c&&"true"},v(H)),"3"+a,n,null,4,{onclick:t.d("click","onButtonClick",!1,[c])}),f?(e.be("span",{class:"segmented-buttons__button-cell"},"4"+a,n,null,1),m(e,f,null,null,null,null,t,"5"+a),e.be("span",null,"6"+a,n,null,0),m(e,_,null,null,null,null,t,"7"+a),e.ee(),e.ee()):m(e,N,null,null,null,null,t,"8"+a),e.ee(),e.ee()}}e.ee(),e.ee()},{t:p},O);l.Component=q(O,l._);const U=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
=======
import{t as L}from"./index-CCz6reEH.js";import{b as X,a as Y}from"./utils-DWCsNc5l.js";import{t as Q,r as W,b as w,e as k,f as x,p as v,d as q}from"./registry-DcejNBCz.js";import{_ as m}from"./dynamic-tag-CH7Ufq3Q.js";import{_ as F,a as G}from"./index-DvVCFzyt.js";import{_ as d}from"./render-tag-BBOJ9dEX.js";import{i as b,r as B,a as I}from"./attr-tag-DphMQldM.js";import{_ as J}from"./empty-component-BCB5DEsP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-CenZB3al.js";/* empty css             */class K extends Marko.Component{onCreate(){this.state={selectedIndex:0}}onInput(e){let t=(e.buttons||[]).findIndex(n=>n.selected);t===-1&&(t=0),this.state.selectedIndex=t}onButtonClick(e,t){e!==this.state.selectedIndex&&(this.state.selectedIndex=e,this.emit("change",{index:e,value:(this.input.buttons[e]||{}).value||void 0,originalEvent:t}))}}const p="LNSA3gQY",l=Q(p),A=l,P=["large"];W.r(p,()=>l);const O=K;l._=w(function(s,e,t,n,y,R){let{size:o,class:te,buttons:ne,...V}=s;var h=o&&P.includes(o)?o:null;e.be("div",k({class:x(["segmented-buttons",h&&`segmented-buttons--${h}`,s.class])},v(V)),"0",n,null,4),e.be("ul",null,"1",n,null,0);{let j=0;for(const _ of s.buttons||[]){let c=j++;const a=`[${c}]`,{class:D,icon:f,renderBody:N,...H}=_;e.be("li",null,"2"+a,n,null,0),e.be("button",k({class:x(["segmented-buttons__button",D]),"aria-current":y.selectedIndex===c&&"true"},v(H)),"3"+a,n,null,4,{onclick:t.d("click","onButtonClick",!1,[c])}),f?(e.be("span",{class:"segmented-buttons__button-cell"},"4"+a,n,null,1),m(e,f,null,null,null,null,t,"5"+a),e.be("span",null,"6"+a,n,null,0),m(e,_,null,null,null,null,t,"7"+a),e.ee(),e.ee()):m(e,N,null,null,null,null,t,"8"+a),e.ee(),e.ee()}}e.ee(),e.ee()},{t:p},O);l.Component=q(O,l._);const U=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
>>>>>>> 0dd633d3f26a93f2dac2c5dddbe8a62ca57c0af5:docs/assets/segmented-buttons.stories-B80dwpwd.js
    <span>
        ebay-segmented-buttons
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.1.0
    </span>
</h1>

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/buttons-ebay-segmented-buttons)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/buttons-ebay-segmented-buttons)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-segmented-buttons/examples)
`,g="NQWoVXOi",u=Q(g);W.r(g,()=>J);const M={};u._=w(function(s,e,t,n,y,R){d(A,b(()=>{B("buttons",b(()=>(I("icon",{renderBody:o=>{d(F,{},o,t,"1")}}),o=>{o.t("Desktop",n)}))),B("buttons",b(()=>(I("icon",{renderBody:o=>{d(G,{},o,t,"2")}}),o=>{o.t("Mobile",n)})))}),e,t,"0",[["change","emit",!1,["change"]]])},{t:g,s:!0},M);u.Component=q(M,u._);const Z=`<ebay-segmented-buttons on-change("emit", "change")>
    <@button>
        <@icon>
            <ebay-full-view-24-icon/>
        </@icon>
        Desktop
    </@button>
    <@button>
        <@icon>
            <ebay-mobile-24-icon/>
        </@icon>
        Mobile
    </@button>
</ebay-segmented-buttons>
`,ee=s=>({input:Y(s)}),ge={title:"buttons/ebay-segmented-buttons",component:A,parameters:{docs:{description:{component:U}}},argTypes:{buttons:{description:"Each button in the segmented button",name:"@buttons",table:{category:"@Attribute Tags"}},selected:{description:"If true, this will be the selected button",table:{category:"@button attribute"}},size:{options:["large","regular"],description:"",table:{defaultValue:{summary:"none"}},type:{category:"Options"}},icon:{description:"The icon to show before the text",name:"@icon",table:{category:"@button attribute"}},onChange:{action:"on-change",description:"Triggered on change",table:{category:"Events",defaultValue:{summary:"{ originalEvent, index, value }"}}},spread:{control:{type:"object"},description:"Additional attributes being passed to component",table:{category:"Other"}}}},r=ee.bind({});r.args={buttons:[{renderBody:"Q1",value:"quarter1"},{renderBody:"Q2",value:"quarter2"},{renderBody:"Q3",value:"quarter3"},{renderBody:"Q4",value:"quarter4"}]};r.parameters={docs:{source:{code:L("ebay-segmented-buttons",r.args,{buttons:"button"})}}};const i=X(u,Z);var C,T,S;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(S=(T=r.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var E,$,z;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:"buildExtensionTemplate(WithIconsTemplate, WithIconsTemplateCode)",...(z=($=i.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};const ye=["Default","WithIcons"];export{r as Default,i as WithIcons,ye as __namedExportsOrder,ge as default};
