import{t as z}from"./index-CCz6reEH.js";import{t as p,r as m,b as d,f as A,g as B,e as F,p as G,d as _}from"./registry-B-klnak9.js";import{_ as h}from"./const-element-Usj7mXQw.js";import{_ as v}from"./render-tag-BBOJ9dEX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const H=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-switch
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.2.0
    </span>
</h1>

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/form-input-ebay-switch)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/form-input-ebay-switch)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-switch/examples)
`;class J extends Marko.Component{handleChange(e,s){this.input.disabled||this.emit("change",{originalEvent:e,value:s.value,checked:s.checked})}}const b="EEFUMgdc",l=p(b),g=l;function N(){}const P=h("span",{class:"switch__button"},0);m.r(b,()=>J);const O={};l._=d(function(t,e,s,a,y,w){const{class:M,style:V,...j}=t;t.toJSON=N,e.be("span",{class:A(["switch",M]),style:B(V)},"0",a,null,1),e.e("input",F(G(j),{type:"checkbox",role:"switch",class:"switch__control"}),"1",a,0,4,{onchange:s.d("change","handleChange",!1)}),e.n(P,a),e.ee()},{t:b,s:!0},O);l.Component=_(O,l._);const u="SZVGiexg",c=p(u),R=h("label",{class:"field__label field__label--start",for:"switch"},1).t("Option");m.r(u,()=>c);const L={};c._=d(function(t,e,s,a,y,w){e.be("span",{class:"field"},"0",a,null,1),e.n(R,a),v(g,{...t,id:"switch"},e,s,"2",[["change","emit",!1,["change"]]]),e.ee()},{t:u},L);c.Component=_(L,c._);const f="Lrs$Pttd",i=p(f),U=h("label",{class:"field__label field__label--start field__label--disabled",for:"switch"},1).t("Option");m.r(f,()=>i);const W={};i._=d(function(t,e,s,a,y,w){e.be("span",{class:"field"},"0",a,null,1),e.n(U,a),v(g,{...t,disabled:!0,id:"switch"},e,s,"2",[["change","emit",!1,["change"]]]),e.ee()},{t:f},W);i.Component=_(W,i._);const Z=`import type { Input as SwitchInput } from "<ebay-switch>";
export type Input = SwitchInput;

class {}

<span class="field">
    <label class="field__label field__label--start" for="switch">
        Option
    </label>
    <ebay-switch ...input id="switch" on-change("emit", "change") />
</span>
`,q=`import type { Input as SwitchInput } from "<ebay-switch>";
export type Input = SwitchInput;

class {}

<span class="field">
    <label class="field__label field__label--start field__label--disabled" for="switch">
        Option
    </label>
    <ebay-switch ...input disabled id="switch" on-change("emit", "change") />
</span>
`,K=t=>({input:t}),se={title:"form input/ebay-switch",component:g,parameters:{docs:{description:{component:H}}},argTypes:{onChange:{action:"on-change",description:"Triggered on change",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value, checked }"}}}}},o=t=>({input:t,component:c});o.args={};o.parameters={docs:{source:{code:Z}}};const r=t=>({input:t,component:i});r.args={};r.parameters={docs:{source:{code:q}}};const n=K.bind({});n.args={};n.parameters={docs:{source:{code:z("ebay-switch",n.args)}}};var k,S,C;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  input: args,
  component: WithLabelTemplate
})`,...(C=(S=o.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var x,$,I;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  input: args,
  component: DisabledTemplate
})`,...(I=($=r.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var T,E,D;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  input: args
})`,...(D=(E=n.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};const ne=["WithLabel","Disabled","Isolated"];export{r as Disabled,n as Isolated,o as WithLabel,ne as __namedExportsOrder,se as default};
