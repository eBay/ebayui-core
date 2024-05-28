<<<<<<< HEAD:docs/assets/checkbox.stories-DdJaHY1V.js
import{t as A}from"./index-CCz6reEH.js";import{_ as m}from"./index-C4cPGDQD.js";import{r as u,b as f,d as _,t as g}from"./registry-Cc025Aii.js";import{_ as h}from"./const-element-VPRvcpko.js";import{_ as k}from"./render-tag-BBOJ9dEX.js";/* empty css              */import"./index--L3RBH-m.js";import"./index-oHjhF9YT.js";/* empty css             */import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const B=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
=======
import{t as A}from"./index-CCz6reEH.js";import{_ as m}from"./index-C9DGnzCY.js";import{r as u,b as f,d as _,t as g}from"./registry-DcejNBCz.js";import{_ as h}from"./const-element-Bq6J7aqh.js";import{_ as k}from"./render-tag-BBOJ9dEX.js";/* empty css              */import"./index-ZGlML8bA.js";import"./index-CenZB3al.js";/* empty css             */import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const B=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
>>>>>>> 0dd633d3f26a93f2dac2c5dddbe8a62ca57c0af5:docs/assets/checkbox.stories-T0wMxFL4.js
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
`,y="TY4uXpsV",r=g(y),K=h("legend",null,1).t("Choose an Option");u.r(y,()=>r);const F={};r._=f(function(o,e,l,n,$,T){e.be("fieldset",null,"0",n,null,0);{e.n(K,n);let j=0;for(const p of[1,2,3]){const b=`[${j++}]`;e.be("span",{class:"field"},"2"+b,n,null,1),k(m,{...o,class:"field__control",id:`group-checkbox-${p}`,value:p,name:"checkbox-group"},e,l,"3"+b,[["change","emit",!1,["change"]],["focus","emit",!1,["focus"]],["keydown","emit",!1,["keydown"]]]),e.be("label",{class:"field__label field__label--end",for:`group-checkbox-${p}`},"4"+b,n,null,0),e.t("Option ",n),e.t(p,n),e.ee(),e.ee()}}e.ee()},{t:y},F);r.Component=_(F,r._);const x="4ceLAaWt",i=g(x),N=h("label",{class:"field__label field__label--end",for:"checkbox"},1).t("Option");u.r(x,()=>i);const I={};i._=f(function(o,e,l,n,$,T){e.be("span",{class:"field"},"0",n,null,1),k(m,{...o,class:"field__control",id:"checkbox"},e,l,"1",[["change","emit",!1,["change"]],["focus","emit",!1,["focus"]],["keydown","emit",!1,["keydown"]]]),e.n(N,n),e.ee()},{t:x},I);i.Component=_(I,i._);const w="g54U2cnx",d=g(w),R=h("label",{class:"field__label field__label--end field__label--disabled",for:"checkbox"},1).t("Option");u.r(w,()=>d);const U={};d._=f(function(o,e,l,n,$,T){e.be("span",{class:"field"},"0",n,null,1),k(m,{...o,disabled:!0,class:"field__control",id:"checkbox"},e,l,"1",[["change","emit",!1,["change"]],["focus","emit",!1,["focus"]],["keydown","emit",!1,["keydown"]]]),e.n(R,n),e.ee()},{t:w},U);d.Component=_(U,d._);const X=`class {}

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
`,Y=`// TODO: import field from skin
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
`,H=`// TODO: import field from skin
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
`,J=o=>({input:o}),le={title:"form input/ebay-checkbox",component:m,parameters:{docs:{description:{component:B}}},argTypes:{checked:{description:"if checked or not",table:{defaultValue:{summary:"false"}},type:"boolean"},size:{options:["regular","large"],description:"Sets the checkbox icon. Default is regular. For mweb this should be set to large. (Note: The dimensions of the checkbox will not change, but only the icon)",table:{defaultValue:{summary:"regular"}},type:{category:"Options"}},"icon-style":{options:["rounded","square"],description:"Will change the icon to be rounded or square (square being the legacy and deprecated version)",table:{defaultValue:{summary:"rounded"}},type:{category:"Options"}},onChange:{action:"on-change",description:"Triggered on change",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value, checked }"}}},onFocus:{action:"on-focus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onKeydown:{action:"on-keydown",description:"Triggered on keydown",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}}}},s=o=>({input:o,component:i});s.args={checked:!1};s.parameters={docs:{source:{code:Y}}};const t=o=>({input:o,component:d});t.args={checked:!1};t.parameters={docs:{source:{code:H}}};const c=o=>({input:o,component:r});c.args={};c.parameters={docs:{source:{code:X}}};const a=J.bind({});a.args={checked:!1};a.parameters={docs:{source:{code:A("ebay-checkbox",a.args)}}};var O,v,C;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  input: args,
  component: WithLabelTemplate
})`,...(C=(v=s.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var D,S,E;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
  input: args,
  component: DisabledTemplate
})`,...(E=(S=t.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var V,W,G;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  input: args,
  component: GroupTemplate
})`,...(G=(W=c.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var L,q,z;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
  input: args
})`,...(z=(q=a.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const re=["WithLabel","Disabled","Group","Isolated"];export{t as Disabled,c as Group,a as Isolated,s as WithLabel,re as __namedExportsOrder,le as default};
