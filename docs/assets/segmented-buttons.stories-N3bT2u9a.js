import{t as H}from"./index-iqhZMf16.js";import{b as L,a as X}from"./utils-NX-dnf4r.js";import{t as z,r as Q,b as W,f as x,g as B,p as v,d as w}from"./registry-zqrnEiYK.js";import{_ as b}from"./dynamic-tag-4Gch17f1.js";import{_ as Y,a as F}from"./index-bDnsfnFH.js";import{_ as p}from"./render-tag-_0PNNh6Y.js";import{_ as c}from"./self-iterator-6yU_KG2T.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";import"./index-T-tr__32.js";/* empty css             */const G=["large"];class J extends Marko.Component{onCreate(){this.state={selectedIndex:0}}onInput(e){let t=(e.buttons||[]).findIndex(n=>n.selected);t===-1&&(t=0),this.state.selectedIndex=t}onButtonClick(e,t){e!==this.state.selectedIndex&&(this.state.selectedIndex=e,this.emit("change",{index:e,value:(this.input.buttons[e]||{}).value||void 0,originalEvent:t}))}}const g="LNSA3gQY",i=z(g),q=i;Q.r(g,()=>i);const A=J;i._=W(function(s,e,t,n,h,M){let{size:a,class:o,buttons:Z,...R}=s;var _=a&&G.includes(a)?a:null;e.be("div",x({class:B(["segmented-buttons",_&&`segmented-buttons--${_}`,s.class])},v(R)),"0",n,null,4),e.be("ul",null,"1",n,null,0);{let V=0;for(const f of s.buttons||[]){let m=V++;const r=`[${m}]`,{class:j,icon:k,renderBody:D,...N}=f;e.be("li",null,"2"+r,n,null,0),e.be("button",x({class:B(["segmented-buttons__button",j]),"aria-current":h.selectedIndex===m&&"true"},v(N)),"3"+r,n,null,4,{onclick:t.d("click","onButtonClick",!1,[m])}),k?(e.be("span",{class:"segmented-buttons__button-cell"},"4"+r,n,null,1),b(e,k,null,null,null,null,t,"5"+r),e.be("span",null,"6"+r,n,null,0),b(e,f,null,null,null,null,t,"7"+r),e.ee(),e.ee()):b(e,D,null,null,null,null,t,"8"+r),e.ee(),e.ee()}}e.ee(),e.ee()},{t:g},A);i.Component=w(A,i._);const K=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`,y="NQWoVXOi",u=z(y);Q.r(y,()=>u);const O={};u._=W(function(s,e,t,n,h,M){const a=[];a.push({icon:{renderBody:o=>{p(Y,{},o,t,"1")},[Symbol.iterator]:c},renderBody:o=>{o.t("Desktop",n)},[Symbol.iterator]:c}),a.push({icon:{renderBody:o=>{p(F,{},o,t,"2")},[Symbol.iterator]:c},renderBody:o=>{o.t("Mobile",n)},[Symbol.iterator]:c}),p(q,{buttons:a},e,t,"0",[["change","emit",!1,["change"]]])},{t:y,i:!0},O);u.Component=w(O,u._);const P=`<ebay-segmented-buttons on-change("emit", "change")>
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
`,U=s=>({input:X(s)}),de={title:"buttons/ebay-segmented-buttons",component:q,parameters:{docs:{description:{component:K}}},argTypes:{buttons:{description:"Each button in the segmented button",name:"@buttons",table:{category:"@Attribute Tags"}},selected:{description:"If true, this will be the selected button",table:{category:"@button attribute"}},size:{options:["large","regular"],description:"",table:{defaultValue:{summary:"none"}},type:{category:"Options"}},icon:{description:"The icon to show before the text",name:"@icon",table:{category:"@button attribute"}},onChange:{action:"on-change",description:"Triggered on change",table:{category:"Events",defaultValue:{summary:"{ originalEvent, index, value }"}}},spread:{control:{type:"object"},description:"Additional attributes being passed to component",table:{category:"Other"}}}},l=U.bind({});l.args={buttons:[{renderBody:"Q1",value:"quarter1"},{renderBody:"Q2",value:"quarter2"},{renderBody:"Q3",value:"quarter3"},{renderBody:"Q4",value:"quarter4"}]};l.parameters={docs:{source:{code:H("ebay-segmented-buttons",l.args,{buttons:"button"})}}};const d=L(u,P);var I,S,C;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(C=(S=l.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var T,E,$;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:"buildExtensionTemplate(WithIconsTemplate, WithIconsTemplateCode)",...($=(E=d.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};const me=["Default","WithIcons"];export{l as Default,d as WithIcons,me as __namedExportsOrder,de as default};
