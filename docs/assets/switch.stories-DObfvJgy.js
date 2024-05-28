import{t as j}from"./index-CCz6reEH.js";import{t as p,r as m,b as d,f as z,g as G,e as H,p as J,d as _}from"./registry-DcejNBCz.js";import{_ as h}from"./const-element-Bq6J7aqh.js";import{_ as v}from"./render-tag-BBOJ9dEX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const K=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;class M extends Marko.Component{handleChange(e,s){this.input.disabled||this.emit("change",{originalEvent:e,value:s.value,checked:s.checked})}}const b="KBhefEPr",l=p(b),u=l;function P(){}const Q=h("span",{class:"switch__button"},0);m.r(b,()=>M);const O={};l._=d(function(t,e,s,a,y,w){const{class:B,style:A,...N}=t;t.toJSON=P,e.be("span",{class:z(["switch",B]),style:G(A)},"0",a,null,1),e.e("input",H(J(N),{type:"checkbox",role:"switch",class:"switch__control"}),"1",a,0,4,{onchange:s.d("change","handleChange",!1)}),e.n(Q,a),e.ee()},{t:b,s:!0},O);l.Component=_(O,l._);const g="fTrlGwCp",c=p(g),R=h("label",{class:"field__label field__label--start",for:"switch"},1).t("Option");m.r(g,()=>c);const L={};c._=d(function(t,e,s,a,y,w){e.be("span",{class:"field"},"0",a,null,1),e.n(R,a),v(u,{...t,id:"switch"},e,s,"2",[["change","emit",!1,["change"]]]),e.ee()},{t:g},L);c.Component=_(L,c._);const f="QXB7NAk8",i=p(f),V=h("label",{class:"field__label field__label--start field__label--disabled",for:"switch"},1).t("Option");m.r(f,()=>i);const W={};i._=d(function(t,e,s,a,y,w){e.be("span",{class:"field"},"0",a,null,1),e.n(V,a),v(u,{...t,disabled:!0,id:"switch"},e,s,"2",[["change","emit",!1,["change"]]]),e.ee()},{t:f},W);i.Component=_(W,i._);const X=`import type { Input as SwitchInput } from "<ebay-switch>";
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
`,F=t=>({input:t}),se={title:"form input/ebay-switch",component:u,parameters:{docs:{description:{component:K}}},argTypes:{onChange:{action:"on-change",description:"Triggered on change",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value, checked }"}}}}},o=t=>({input:t,component:c});o.args={};o.parameters={docs:{source:{code:X}}};const r=t=>({input:t,component:i});r.args={};r.parameters={docs:{source:{code:q}}};const n=F.bind({});n.args={};n.parameters={docs:{source:{code:j("ebay-switch",n.args)}}};var k,C,S;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  input: args,
  component: WithLabelTemplate
})`,...(S=(C=o.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var x,I,$;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  input: args,
  component: DisabledTemplate
})`,...($=(I=r.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var T,D,E;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  input: args
})`,...(E=(D=n.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const ne=["WithLabel","Disabled","Isolated"];export{r as Disabled,n as Isolated,o as WithLabel,ne as __namedExportsOrder,se as default};
