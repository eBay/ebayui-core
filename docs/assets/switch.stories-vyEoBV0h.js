import{t as j}from"./index-CCz6reEH.js";import{t as p,r as m,b as d,e as z,f as A,d as B,p as F,c as _}from"./registry-CtNeIPU8.js";import{_ as h}from"./const-element-D4l_3TxL.js";import{_ as D}from"./render-tag-mtfFSHEK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const G=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;class H extends Marko.Component{handleChange(e,s){this.input.disabled||this.emit("change",{originalEvent:e,value:s.value,checked:s.checked})}}const b="EEFUMgdc",c=p(b);function J(){}const N=h("span",{class:"switch__button"},0);m.r(b,()=>H);const v={};c._=d(function(t,e,s,a,f,y){const{class:W,style:M,...V}=t;t.toJSON=J,e.be("span",{class:z(["switch",W]),style:A(M)},"0",a,null,1),e.e("input",B(F(V),{type:"checkbox",role:"switch",class:"switch__control"}),"1",a,0,4,{onchange:s.d("change","handleChange",!1)}),e.n(N,a),e.ee()},{t:b,s:!0},v);c.Component=_(v,c._);const u="SZVGiexg",i=p(u),P=h("label",{class:"field__label field__label--start",for:"switch"},1).t("Option");m.r(u,()=>i);const O={};i._=d(function(t,e,s,a,f,y){e.be("span",{class:"field"},"0",a,null,1),e.n(P,a),D(c,{...t,id:"switch"},e,s,"2",[["change","emit",!1,["change"]]]),e.ee()},{t:u},O);i.Component=_(O,i._);const g="Lrs$Pttd",l=p(g),R=h("label",{class:"field__label field__label--start field__label--disabled",for:"switch"},1).t("Option");m.r(g,()=>l);const L={};l._=d(function(t,e,s,a,f,y){e.be("span",{class:"field"},"0",a,null,1),e.n(R,a),D(c,{...t,disabled:!0,id:"switch"},e,s,"2",[["change","emit",!1,["change"]]]),e.ee()},{t:g},L);l.Component=_(L,l._);const U=`import type { Input as SwitchInput } from "<ebay-switch>";
export type Input = SwitchInput;

class {}

<span class="field">
    <label class="field__label field__label--start" for="switch">
        Option
    </label>
    <ebay-switch ...input id="switch" on-change("emit", "change") />
</span>
`,Z=`import type { Input as SwitchInput } from "<ebay-switch>";
export type Input = SwitchInput;

class {}

<span class="field">
    <label class="field__label field__label--start field__label--disabled" for="switch">
        Option
    </label>
    <ebay-switch ...input disabled id="switch" on-change("emit", "change") />
</span>
`,q=t=>({input:t}),ae={title:"form input/ebay-switch",component:c,parameters:{docs:{description:{component:G}}},argTypes:{onChange:{action:"on-change",description:"Triggered on change",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value, checked }"}}}}},o=t=>({input:t,component:i});o.args={};o.parameters={docs:{source:{code:U}}};const r=t=>({input:t,component:l});r.args={};r.parameters={docs:{source:{code:Z}}};const n=q.bind({});n.args={};n.parameters={docs:{source:{code:j("ebay-switch",n.args)}}};var w,k,S;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  input: args,
  component: WithLabelTemplate
})`,...(S=(k=o.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var x,C,$;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  input: args,
  component: DisabledTemplate
})`,...($=(C=r.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var I,T,E;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  input: args
})`,...(E=(T=n.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};const se=["WithLabel","Disabled","Isolated"];export{r as Disabled,n as Isolated,o as WithLabel,se as __namedExportsOrder,ae as default};
