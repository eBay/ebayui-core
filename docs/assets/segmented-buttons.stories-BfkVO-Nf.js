import{t as P}from"./index-CCz6reEH.js";import{b as Z,a as F}from"./utils-DWCsNc5l.js";import{t as z,r as q,b as W,d as k,e as x,p as v,c as M}from"./registry-CtNeIPU8.js";import{_ as m}from"./dynamic-tag-HMZVE1pc.js";import{_ as G}from"./of-fallback-C2gEBeKK.js";import{_ as J,a as K}from"./index-BzG3BO5A.js";import{_ as d}from"./render-tag-mtfFSHEK.js";import{i as b,r as B,a as I}from"./attr-tag-DphMQldM.js";import{_ as L}from"./empty-component-BCB5DEsP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-B6qYX52F.js";/* empty css             */class N extends Marko.Component{onCreate(){this.state={selectedIndex:0}}onInput(e){let t=(e.buttons||[]).findIndex(n=>n.selected);t===-1&&(t=0),this.state.selectedIndex=t}onButtonClick(e,t){e!==this.state.selectedIndex&&(this.state.selectedIndex=e,this.emit("change",{index:e,value:(this.input.buttons[e]||{}).value||void 0,originalEvent:t}))}}const p="PEDetnqc",l=z(p),U=["large"];q.r(p,()=>l);const O=N;l._=W(function(s,e,t,n,y,A){let{size:o,class:te,buttons:ne,...D}=s;var _=o&&U.includes(o)?o:null;e.be("div",k({class:x(["segmented-buttons",_&&`segmented-buttons--${_}`,s.class])},v(D)),"0",n,null,4),e.be("ul",null,"1",n,null,0);{let R=0;for(const h of G(s.buttons||[])){let u=R++;const a=`[${u}]`,{class:j,icon:f,renderBody:V,...H}=h;e.be("li",null,"2"+a,n,null,0),e.be("button",k({class:x(["segmented-buttons__button",j]),"aria-current":y.selectedIndex===u&&"true"},v(H)),"3"+a,n,null,4,{onclick:t.d("click","onButtonClick",!1,[u])}),f?(e.be("span",{class:"segmented-buttons__button-cell"},"4"+a,n,null,1),m(e,f,null,null,null,null,t,"5"+a),e.be("span",null,"6"+a,n,null,0),m(e,h,null,null,null,null,t,"7"+a),e.ee(),e.ee()):m(e,V,null,null,null,null,t,"8"+a),e.ee(),e.ee()}}e.ee(),e.ee()},{t:p},O);l.Component=M(O,l._);const X=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`,g="wESOuZMc",c=z(g);q.r(g,()=>L);const Q={};c._=W(function(s,e,t,n,y,A){d(l,b(()=>{B("buttons",b(()=>(I("icon",{renderBody:o=>{d(J,{},o,t,"1")}}),o=>{o.t("Desktop",n)}))),B("buttons",b(()=>(I("icon",{renderBody:o=>{d(K,{},o,t,"2")}}),o=>{o.t("Mobile",n)})))}),e,t,"0",[["change","emit",!1,["change"]]])},{t:g,s:!0},Q);c.Component=M(Q,c._);const Y=`<ebay-segmented-buttons on-change("emit", "change")>
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
`,ee=s=>({input:F(s)}),ye={title:"buttons/ebay-segmented-buttons",component:l,parameters:{docs:{description:{component:X}}},argTypes:{buttons:{description:"Each button in the segmented button",name:"@buttons",table:{category:"@Attribute Tags"}},selected:{description:"If true, this will be the selected button",table:{category:"@button attribute"}},size:{options:["large","regular"],description:"",table:{defaultValue:{summary:"none"}},type:{category:"Options"}},icon:{description:"The icon to show before the text",name:"@icon",table:{category:"@button attribute"}},onChange:{action:"on-change",description:"Triggered on change",table:{category:"Events",defaultValue:{summary:"{ originalEvent, index, value }"}}},spread:{control:{type:"object"},description:"Additional attributes being passed to component",table:{category:"Other"}}}},r=ee.bind({});r.args={buttons:[{renderBody:"Q1",value:"quarter1"},{renderBody:"Q2",value:"quarter2"},{renderBody:"Q3",value:"quarter3"},{renderBody:"Q4",value:"quarter4"}]};r.parameters={docs:{source:{code:P("ebay-segmented-buttons",r.args,{buttons:"button"})}}};const i=Z(c,Y);var C,T,E;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(E=(T=r.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var S,$,w;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:"buildExtensionTemplate(WithIconsTemplate, WithIconsTemplateCode)",...(w=($=i.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};const _e=["Default","WithIcons"];export{r as Default,i as WithIcons,_e as __namedExportsOrder,ye as default};
