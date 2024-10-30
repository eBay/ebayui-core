import{t as K}from"./index-CCz6reEH.js";import{_ as p}from"./index-CEVac10g.js";import{r as f,b as _,c as b,t as g}from"./registry-CyswyZw5.js";import{_ as y}from"./const-element-B9h58Dwq.js";import{_ as h}from"./render-tag-CLyPs9qZ.js";import{_ as q}from"./of-fallback-C2gEBeKK.js";/* empty css              */import"./index-BlwlOQrG.js";import"./index-Bq4u441m.js";/* empty css             */import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const A=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-radio
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.2.0
    </span>
</h1>

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/form-input-ebay-radio)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/form-input-ebay-radio)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-radio/examples)
`,k="XwQknmgc",i=g(k),N=y("legend",null,1).t("Choose an Option");f.r(k,()=>i);const j={};i._=_(function(n,e,r,o,v,B){e.be("fieldset",null,"0",o,null,0);{e.n(N,o);let G=0;for(const m of q([1,2,3])){const u=`[${G++}]`;e.be("span",{class:"field"},"2"+u,o,null,1),h(p,{...n,class:"field__control",id:`group-radio-${m}`,value:m,name:"radio-group"},e,r,"3"+u,[["change","emit",!1,["change"]],["focus","emit",!1,["focus"]],["keydown","emit",!1,["keydown"]]]),e.be("label",{class:"field__label field__label--end",for:`group-radio-${m}`},"4"+u,o,null,0),e.t("Option ",o),e.t(m,o),e.ee(),e.ee()}}e.ee()},{t:k},j);i.Component=b(j,i._);const w="$KuqAoSl",d=g(w),P=y("label",{for:"radio",class:"field__label field__label--end"},1).t("Option");f.r(w,()=>d);const z={};d._=_(function(n,e,r,o,v,B){e.be("span",{class:"field"},"0",o,null,1),h(p,{...n,value:"1",class:"field__control",id:"radio"},e,r,"1",[["change","emit",!1,["change"]],["focus","emit",!1,["focus"]],["keydown","emit",!1,["keydown"]]]),e.n(P,o),e.ee()},{t:w},z);d.Component=b(z,d._);const $="atulBOPj",c=g($),Q=y("label",{for:"radio",class:"field__label field__label--end field__label--disabled"},1).t("Option");f.r($,()=>c);const F={};c._=_(function(n,e,r,o,v,B){e.be("span",{class:"field"},"0",o,null,1),h(p,{...n,disabled:!0,value:"1",class:"field__control",id:"radio"},e,r,"1",[["change","emit",!1,["change"]],["focus","emit",!1,["focus"]],["keydown","emit",!1,["keydown"]]]),e.n(Q,o),e.ee()},{t:$},F);c.Component=b(F,c._);const X=`import type { Input as RadioInput } from "<ebay-radio>"
export type Input = RadioInput;

class {}

<fieldset>
    <legend>Choose an Option</legend>
    <for|label_num| of=[1, 2, 3]>
        <span class="field">
            <ebay-radio
                ...input
                on-change("emit", "change")
                on-focus("emit", "focus")
                on-keydown("emit", "keydown")
                class="field__control"
                id=\`group-radio-\${label_num}\`
                value=label_num
                name="radio-group"
            />
            <label
                class="field__label field__label--end"
                for=\`group-radio-\${label_num}\`
            >
                Option \${label_num}
            </label>
        </span>
    </for>
</fieldset>
`,H=`import type { Input as RadioInput } from "<ebay-radio>"
export type Input = RadioInput;

class {}

<span class="field">
    <ebay-radio
        ...input
        value="1"
        on-change("emit", "change")
        on-focus("emit", "focus")
        on-keydown("emit", "keydown")
        class="field__control"
        id="radio"
    />
    <label for="radio" class="field__label field__label--end">
        Option
    </label>
</span>
`,J=`import type { Input as RadioInput } from "<ebay-radio>"
export type Input = RadioInput;

class {}

<span class="field">
    <ebay-radio
        ...input
        disabled
        value="1"
        on-change("emit", "change")
        on-focus("emit", "focus")
        on-keydown("emit", "keydown")
        class="field__control"
        id="radio"
    />
    <label
        for="radio"
        class="field__label field__label--end field__label--disabled"
    >
        Option
    </label>
</span>
`,M=n=>({input:{...n,renderBody:n.renderBody?e=>{e.html(n.renderBody)}:null}}),de={title:"form input/ebay-radio",component:p,parameters:{docs:{description:{component:A}}},argTypes:{size:{options:["regular","large"],type:{category:"Options"},table:{defaultValue:{summary:"regular"}},description:'Either "large" or "regular". Sets the radio icon. Default is regular. For mweb this should be set to large. (Note: The dimensions of the radio will not change, but only the icon)'},onChange:{action:"on-change",description:"Triggered on change",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onFocus:{action:"on-focus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onKeydown:{action:"on-keydown",description:"Triggered on keydown",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}}}},t=n=>({input:n,component:d});t.parameters={docs:{source:{code:H}}};const l=n=>({input:n,component:c});l.parameters={docs:{source:{code:J}}};const s=n=>({input:{...n,renderBody:n.renderBody?e=>{e.html(n.renderBody)}:null},component:i});s.parameters={docs:{source:{code:X}}};const a=M.bind({});a.args={};a.component=p;a.parameters={docs:{source:{code:K("ebay-radio",a.args)}}};var I,T,C;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  input: args,
  component: WithLabelTemplate
})`,...(C=(T=t.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var E,O,S;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  input: args,
  component: DisabledTemplate
})`,...(S=(O=l.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var x,D,R;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  },
  component: groupTemplate
})`,...(R=(D=s.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var V,L,W;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(W=(L=a.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};const ce=["WithLabel","Disabled","Group","Isolated"];export{l as Disabled,s as Group,a as Isolated,t as WithLabel,ce as __namedExportsOrder,de as default};
