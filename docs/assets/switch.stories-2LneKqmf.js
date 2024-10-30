import{t as O}from"./index-CCz6reEH.js";import{_ as l}from"./index-CtOZtJYO.js";import{r as k,b as S,c as x,t as I}from"./registry-CyswyZw5.js";import{_ as T}from"./const-element-B9h58Dwq.js";import{_ as $}from"./render-tag-CLyPs9qZ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const v=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,p="SZVGiexg",r=I(p),W=T("label",{class:"field__label field__label--start",for:"switch"},1).t("Option");k.r(p,()=>r);const C={};r._=S(function(e,t,c,o,E,L){t.be("span",{class:"field"},"0",o,null,1),t.n(W,o),$(l,{...e,id:"switch"},t,c,"2",[["change","emit",!1,["change"]]]),t.ee()},{t:p},C);r.Component=x(C,r._);const m="Lrs$Pttd",i=I(m),V=T("label",{class:"field__label field__label--start field__label--disabled",for:"switch"},1).t("Option");k.r(m,()=>i);const D={};i._=S(function(e,t,c,o,E,L){t.be("span",{class:"field"},"0",o,null,1),t.n(V,o),$(l,{...e,disabled:!0,id:"switch"},t,c,"2",[["change","emit",!1,["change"]]]),t.ee()},{t:m},D);i.Component=x(D,i._);const j=`import type { Input as SwitchInput } from "<ebay-switch>";
export type Input = SwitchInput;

class {}

<span class="field">
    <label class="field__label field__label--start" for="switch">
        Option
    </label>
    <ebay-switch ...input id="switch" on-change("emit", "change") />
</span>
`,z=`import type { Input as SwitchInput } from "<ebay-switch>";
export type Input = SwitchInput;

class {}

<span class="field">
    <label class="field__label field__label--start field__label--disabled" for="switch">
        Option
    </label>
    <ebay-switch ...input disabled id="switch" on-change("emit", "change") />
</span>
`,B=e=>({input:e}),H={title:"form input/ebay-switch",component:l,parameters:{docs:{description:{component:v}}},argTypes:{onChange:{action:"on-change",description:"Triggered on change",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value, checked }"}}}}},n=e=>({input:e,component:r});n.args={};n.parameters={docs:{source:{code:j}}};const s=e=>({input:e,component:i});s.args={};s.parameters={docs:{source:{code:z}}};const a=B.bind({});a.args={};a.parameters={docs:{source:{code:O("ebay-switch",a.args)}}};var d,b,_;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  input: args,
  component: WithLabelTemplate
})`,...(_=(b=n.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var h,u,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  input: args,
  component: DisabledTemplate
})`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,y,w;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  input: args
})`,...(w=(y=a.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const J=["WithLabel","Disabled","Isolated"];export{s as Disabled,a as Isolated,n as WithLabel,J as __namedExportsOrder,H as default};
