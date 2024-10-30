import{t as A}from"./index-CCz6reEH.js";import{_ as p}from"./index-CwcHcKbG.js";import{r as f,b as k,c as g,t as _}from"./registry-CyswyZw5.js";import{_ as m}from"./render-tag-CLyPs9qZ.js";import{_ as H}from"./index-DbANkeq_.js";import{_ as R}from"./of-fallback-C2gEBeKK.js";import{_ as W}from"./const-element-B9h58Dwq.js";/* empty css              */import"./index-CLOjxbak.js";import"./index-Bq4u441m.js";/* empty css             */import"./index-DBaA0FxL.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const X=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-tri-state-checkbox
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.2.0
    </span>
</h1>

A checkbox that toggles from unchecked, to partially checked, to fully checked states. Uses \`<input/>\` under the hood with custom icons.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/form-input-ebay-tri-state-checkbox)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/form-input-ebay-tri-state-checkbox)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-tri-state-checkbox/examples)
`,y="SVPoXeDd",i=_(y);f.r(y,()=>i);const P={onCreate(){this.state={count:2,checked:[!1,!0,!0,!1],cachedChecked:[!1,!0,!0,!1],cacheCount:2}},handleChange(t,{checked:e}){this.state.checked[t]=e,this.state.cachedChecked=[...this.state.checked],this.state.count+=e?1:-1,this.state.cacheCount=this.state.count},handleParentChange({checked:t}){let e;t==="true"?(this.state.checked.fill(!0),e=this.state.checked.length):t==="mixed"?(this.state.checked=[...this.state.cachedChecked],e=this.state.cacheCount):(this.state.checked.fill(!1),e=0),this.state.count=e},get checked(){return this.state.count===0?"false":this.state.count===this.state.checked.length?"true":"mixed"},get skipMixed(){const t=this.state.cacheCount;return t===0||t===this.state.checked.length}};i._=k(function(t,e,n,a,b,w){e.be("div",{class:"field"},"0",a,null,1),m(p,{skipMixed:a.skipMixed,checked:a.checked,id:n.elId("checkbox-all")},e,n,"1",[["change","handleParentChange",!1]]),e.be("label",{class:"field__label field__label--end",for:n.elId("checkbox-all")},"2",a,null,0),e.t("Select all",a),e.ee(),e.ee(),e.be("div",{class:"container",style:"margin-left: 10px"},"3",a,null,1);{let F=0;for(const N of R(b.checked)){let l=F++;const u=`[${l}]`;e.be("div",{class:"field"},"4"+u,a,null,1),m(H,{id:n.elId(`checkbox-${l}`),checked:N},e,n,"5"+u,[["change","handleChange",!1,[l]]]),e.be("label",{class:"field__label field__label--end",for:n.elId(`checkbox-${l}`)},"6"+u,a,null,0),e.t("Option ",a),e.t(l,a),e.ee(),e.ee()}}e.ee()},{t:y},P);i.Component=g(P,i._);const x="NHhBUman",d=_(x),q=W("label",{class:"field__label field__label--end",for:"checkbox"},1).t("Option");f.r(x,()=>d);const U={};d._=k(function(t,e,n,a,b,w){e.be("span",{class:"field"},"0",a,null,1),m(p,{...t,class:"field__control",id:"checkbox"},e,n,"1",[["change","emit",!1,["change"]],["focus","emit",!1,["focus"]],["keydown","emit",!1,["keydown"]]]),e.n(q,a),e.ee()},{t:x},U);d.Component=g(U,d._);const C="L$pbmDij",h=_(C),G=W("label",{class:"field__label field__label--end field__label--disabled",for:"checkbox"},1).t("Option");f.r(C,()=>h);const j={};h._=k(function(t,e,n,a,b,w){e.be("span",{class:"field"},"0",a,null,1),m(p,{...t,disabled:!0,class:"field__control",id:"checkbox"},e,n,"1",[["change","emit",!1,["change"]],["focus","emit",!1,["focus"]],["keydown","emit",!1,["keydown"]]]),e.n(G,a),e.ee()},{t:C},j);h.Component=g(j,h._);const J=`import type { Input as TriStateCheckboxInput } from "<ebay-tri-state-checkbox>";
export type Input = TriStateCheckboxInput;

class {}

<span class="field">
    <ebay-tri-state-checkbox
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
`,K=`import type { Input as TriStateCheckboxInput } from "<ebay-tri-state-checkbox>";
export type Input = TriStateCheckboxInput;

class {}

<span class="field">
    <ebay-tri-state-checkbox
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
`,z=t=>({input:{...t,renderBody:t.renderBody?e=>{e.html(t.renderBody)}:null}}),he={title:"form input/ebay-tri-state-checkbox",component:p,parameters:{docs:{description:{component:X}}},argTypes:{checked:{options:["false","mixed","true"],type:{category:"Options"},description:'Either "true", "false" or "mixed". Defaults to "false". Changes the checkbox state to the given one depdending on the checked state.',table:{defaultValue:{summary:"false"}}},skipMixed:{type:"boolean",control:{type:"boolean"},description:"If set, then will skip the mixed toggle when clicking on checkbox. Used if in some cases you want to toggle between all items selected or none."},size:{options:["regular","large"],type:{category:"Options"},description:'Either "large" or "regular". Sets the checkbox icon. Default is regular. For mweb this should be set to large. (Note: The dimensions of the checkbox will not change, but only the icon)',table:{defaultValue:{summary:"regular"}}},onChange:{action:"on-change",description:"Triggered on change",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value, checked }"}}},onFocus:{action:"on-focus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}}}},o=t=>({input:t,component:d});o.args={};o.parameters={docs:{source:{code:J}}};const c=t=>({input:t,component:h});c.args={};c.parameters={docs:{source:{code:K}}};const r=z.bind({});r.component=i;const s=z.bind({});s.args={};s.parameters={docs:{source:{code:A("ebay-tri-state-checkbox",s.args)}}};var I,S,$;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  input: args,
  component: WithLabelTemplate
})`,...($=(S=o.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var T,v,B;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  input: args,
  component: DisabledTemplate
})`,...(B=(v=c.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var E,O,D;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(D=(O=r.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var L,V,M;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(M=(V=s.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};const me=["WithLabel","Disabled","mixedImplementation","Isolated"];export{c as Disabled,s as Isolated,o as WithLabel,me as __namedExportsOrder,he as default,r as mixedImplementation};
