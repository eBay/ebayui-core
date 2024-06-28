import{t as H}from"./index-CCz6reEH.js";import{_ as m}from"./index-CbaZ7o5m.js";import{r as u,b as f,d as _,t as g}from"./registry-B-klnak9.js";import{_ as h}from"./const-element-Usj7mXQw.js";import{_ as k}from"./render-tag-BBOJ9dEX.js";/* empty css              */import"./index-BQLO4xjX.js";import"./index-Bd083XES.js";/* empty css             */import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const K=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-checkbox
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.2.0
    </span>
</h1>

Displays an accessible checkbox component. Uses \`<input/>\` under the hood but displays a custom SVG icon.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/form-input-ebay-checkbox)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/form-input-ebay-checkbox)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-checkbox/examples)
`,y="fGHxeZ$d",r=g(y),N=h("legend",null,1).t("Choose an Option");u.r(y,()=>r);const z={};r._=f(function(o,e,l,n,$,O){e.be("fieldset",null,"0",n,null,0);{e.n(N,n);let B=0;for(const p of[1,2,3]){const b=`[${B++}]`;e.be("span",{class:"field"},"2"+b,n,null,1),k(m,{...o,class:"field__control",id:`group-checkbox-${p}`,value:p,name:"checkbox-group"},e,l,"3"+b,[["change","emit",!1,["change"]],["focus","emit",!1,["focus"]],["keydown","emit",!1,["keydown"]]]),e.be("label",{class:"field__label field__label--end",for:`group-checkbox-${p}`},"4"+b,n,null,0),e.t("Option ",n),e.t(p,n),e.ee(),e.ee()}}e.ee()},{t:y},z);r.Component=_(z,r._);const x="CpzIEOFl",i=g(x),Q=h("label",{class:"field__label field__label--end",for:"checkbox"},1).t("Option");u.r(x,()=>i);const I={};i._=f(function(o,e,l,n,$,O){e.be("span",{class:"field"},"0",n,null,1),k(m,{...o,class:"field__control",id:"checkbox"},e,l,"1",[["change","emit",!1,["change"]],["focus","emit",!1,["focus"]],["keydown","emit",!1,["keydown"]]]),e.n(Q,n),e.ee()},{t:x},I);i.Component=_(I,i._);const w="nFGpgQOg",d=g(w),R=h("label",{class:"field__label field__label--end field__label--disabled",for:"checkbox"},1).t("Option");u.r(w,()=>d);const j={};d._=f(function(o,e,l,n,$,O){e.be("span",{class:"field"},"0",n,null,1),k(m,{...o,disabled:!0,class:"field__control",id:"checkbox"},e,l,"1",[["change","emit",!1,["change"]],["focus","emit",!1,["focus"]],["keydown","emit",!1,["keydown"]]]),e.n(R,n),e.ee()},{t:w},j);d.Component=_(j,d._);const U=`class {}

<fieldset>
    <legend>Choose an Option</legend>
    <for|option_num| of=[1, 2, 3]>
        <span class="field">
            <ebay-checkbox
                ...input
                class="field__control"
                id=\`group-checkbox-\${option_num}\`
                value=option_num
                on-change("emit", "change")
                on-focus("emit", "focus")
                on-keydown("emit", "keydown")
                name="checkbox-group"/>
            <label class="field__label field__label--end" for=\`group-checkbox-\${option_num}\`>
                Option \${option_num}
            </label>
        </span>
    </for>
</fieldset>
`,Z=`// TODO: import field from skin
class {}

<span class="field">
    <ebay-checkbox
        ...input
        class="field__control"
        id="checkbox"
        on-change("emit", "change")
        on-focus("emit", "focus")
        on-keydown("emit", "keydown") />
    <label class="field__label field__label--end" for="checkbox">
        Option
    </label>
</span>
`,A=`// TODO: import field from skin
class {}

<span class="field">
    <ebay-checkbox
        ...input
        disabled
        class="field__control"
        id="checkbox"
        on-change("emit", "change")
        on-focus("emit", "focus")
        on-keydown("emit", "keydown") />
    <label class="field__label field__label--end field__label--disabled" for="checkbox">
        Option
    </label>
</span>
`,J=o=>({input:o}),le={title:"form input/ebay-checkbox",component:m,parameters:{docs:{description:{component:K}}},argTypes:{checked:{description:"if checked or not",table:{defaultValue:{summary:"false"}},type:"boolean"},size:{options:["regular","large"],description:"Sets the checkbox icon. Default is regular. For mweb this should be set to large. (Note: The dimensions of the checkbox will not change, but only the icon)",table:{defaultValue:{summary:"regular"}},type:{category:"Options"}},"icon-style":{options:["rounded","square"],description:"Will change the icon to be rounded or square (square being the legacy and deprecated version)",table:{defaultValue:{summary:"rounded"}},type:{category:"Options"}},onChange:{action:"on-change",description:"Triggered on change",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value, checked }"}}},onFocus:{action:"on-focus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onKeydown:{action:"on-keydown",description:"Triggered on keydown",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}}}},s=o=>({input:o,component:i});s.args={checked:!1};s.parameters={docs:{source:{code:Z}}};const t=o=>({input:o,component:d});t.args={checked:!1};t.parameters={docs:{source:{code:A}}};const c=o=>({input:o,component:r});c.args={};c.parameters={docs:{source:{code:U}}};const a=J.bind({});a.args={checked:!1};a.parameters={docs:{source:{code:H("ebay-checkbox",a.args)}}};var T,v,C;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  input: args,
  component: WithLabelTemplate
})`,...(C=(v=s.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var D,E,S;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
  input: args,
  component: DisabledTemplate
})`,...(S=(E=t.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var V,G,W;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  input: args,
  component: GroupTemplate
})`,...(W=(G=c.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var F,L,q;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
  input: args
})`,...(q=(L=a.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};const re=["WithLabel","Disabled","Group","Isolated"];export{t as Disabled,c as Group,a as Isolated,s as WithLabel,re as __namedExportsOrder,le as default};
