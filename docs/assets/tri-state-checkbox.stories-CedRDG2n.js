import{t as Q}from"./index-CCz6reEH.js";import{t as g,r as _,b as y,g as X,f as Y,e as G,p as J,d as x}from"./registry-DcejNBCz.js";import{_ as Z}from"./index-DPE6nev1.js";/* empty css              */import{_ as D,a as ee}from"./index-DZSYDIJ0.js";import{_ as c}from"./render-tag-BBOJ9dEX.js";import{a as te,c as ae,_ as se,b as ne}from"./index--F4JyeQF.js";import{_ as R}from"./const-element-Bq6J7aqh.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-CMkz4cmR.js";/* empty css             */const ce=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`;class oe extends Marko.Component{onInput(e){this.state={checked:e.checked||"false"}}triggerChange(){this.state.checked==="true"?this.state.checked="false":this.state.checked==="false"&&!this.input.skipMixed?this.state.checked="mixed":this.state.checked="true"}handleChange(e,t){e.preventDefault(),this.triggerChange(),this.forwardEvent("change",e,t)}handleKeydown(e,t){this.forwardEvent("keydown",e,t)}handleFocus(e,t){this.forwardEvent("focus",e,t)}forwardEvent(e,t,s){var r;const n=(s||((r=this.el)==null?void 0:r.querySelector("input"))).value,h=this.state.checked;this.emit(`${e}`,{originalEvent:t,value:n,checked:h})}}const S="XYsPtucR",p=g(S),C=p;_.r(S,()=>p);const U=oe;p._=y(function(a,e,t,s,n,h){const{class:r,style:w,size:o,skipMixed:f,checked:he,...H}=a;e.be("span",{style:X(w),class:Y(["checkbox",r])},"0",s,null,1),e.e("input",G(J(H),{class:"checkbox__control",checked:n.checked==="true","aria-checked":n.checked,type:"checkbox"}),"1",s,0,4,{onclick:t.d("click","handleChange",!1),onfocus:t.d("focus","handleFocus",!1),onkeydown:t.d("keydown","handleKeydown",!1)}),e.be("span",{class:"checkbox__icon",hidden:""},"2",s,null,0),n.checked==="mixed"?o==="large"?c(D,{focusable:"false",noSkinClasses:!0},e,t,"3"):c(ee,{focusable:"false",noSkinClasses:!0},e,t,"4"):n.checked==="true"?o==="large"?c(te,{class:"checkbox__checked",focusable:"false",noSkinClasses:!0},e,t,"5"):c(ae,{class:"checkbox__checked",focusable:"false",noSkinClasses:!0},e,t,"6"):o==="large"?c(se,{class:"checkbox__unchecked",focusable:"false",noSkinClasses:!0},e,t,"7"):c(ne,{class:"checkbox__unchecked",focusable:"false",noSkinClasses:!0},e,t,"8"),e.ee(),e.ee()},{t:S},U);p.Component=x(U,p._);const $="RPK8ulur",k=g($);_.r($,()=>k);const A={onCreate(){this.state={count:2,checked:[!1,!0,!0,!1],cachedChecked:[!1,!0,!0,!1],cacheCount:2}},handleChange(a,{checked:e}){this.state.checked[a]=e,this.state.cachedChecked=[...this.state.checked],this.state.count+=e?1:-1,this.state.cacheCount=this.state.count},handleParentChange({checked:a}){let e;a==="true"?(this.state.checked.fill(!0),e=this.state.checked.length):a==="mixed"?(this.state.checked=[...this.state.cachedChecked],e=this.state.cacheCount):(this.state.checked.fill(!1),e=0),this.state.count=e},get checked(){return this.state.count===0?"false":this.state.count===this.state.checked.length?"true":"mixed"},get skipMixed(){const a=this.state.cacheCount;return a===0||a===this.state.checked.length}};k._=y(function(a,e,t,s,n,h){e.be("div",{class:"field"},"0",s,null,1),c(C,{skipMixed:s.skipMixed,checked:s.checked,id:t.elId("checkbox-all")},e,t,"1",[["change","handleParentChange",!1]]),e.be("label",{class:"field__label field__label--end",for:t.elId("checkbox-all")},"2",s,null,0),e.t("Select all",s),e.ee(),e.ee(),e.be("div",{class:"container",style:"margin-left: 10px"},"3",s,null,1);{let r=0;for(const w of n.checked||[]){let o=r++;const f=`[${o}]`;e.be("div",{class:"field"},"4"+f,s,null,1),c(Z,{id:t.elId(`checkbox-${o}`),checked:w},e,t,"5"+f,[["change","handleChange",!1,[o]]]),e.be("label",{class:"field__label field__label--end",for:t.elId(`checkbox-${o}`)},"6"+f,s,null,0),e.t("Option ",s),e.t(o,s),e.ee(),e.ee()}}e.ee()},{t:$},A);k.Component=x(A,k._);const I="/WCBa3Qe",u=g(I),le=R("label",{class:"field__label field__label--end",for:"checkbox"},1).t("Option");_.r(I,()=>u);const N={};u._=y(function(a,e,t,s,n,h){e.be("span",{class:"field"},"0",s,null,1),c(C,{...a,class:"field__control",id:"checkbox"},e,t,"1",[["change","emit",!1,["change"]],["focus","emit",!1,["focus"]],["keydown","emit",!1,["keydown"]]]),e.n(le,s),e.ee()},{t:I},N);u.Component=x(N,u._);const v="sm/l2NMU",b=g(v),re=R("label",{class:"field__label field__label--end field__label--disabled",for:"checkbox"},1).t("Option");_.r(v,()=>b);const j={};b._=y(function(a,e,t,s,n,h){e.be("span",{class:"field"},"0",s,null,1),c(C,{...a,disabled:!0,class:"field__control",id:"checkbox"},e,t,"1",[["change","emit",!1,["change"]],["focus","emit",!1,["focus"]],["keydown","emit",!1,["keydown"]]]),e.n(re,s),e.ee()},{t:v},j);b.Component=x(j,b._);const ie=`import type { Input as TriStateCheckboxInput } from "<ebay-tri-state-checkbox>";
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
`,de=`import type { Input as TriStateCheckboxInput } from "<ebay-tri-state-checkbox>";
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
`,q=a=>({input:{...a,renderBody:a.renderBody?e=>{e.html(a.renderBody)}:null}}),Se={title:"form input/ebay-tri-state-checkbox",component:C,parameters:{docs:{description:{component:ce}}},argTypes:{checked:{options:["false","mixed","true"],type:{category:"Options"},description:'Either "true", "false" or "mixed". Defaults to "false". Changes the checkbox state to the given one depdending on the checked state.',table:{defaultValue:{summary:"false"}}},skipMixed:{type:"boolean",control:{type:"boolean"},description:"If set, then will skip the mixed toggle when clicking on checkbox. Used if in some cases you want to toggle between all items selected or none."},size:{options:["regular","large"],type:{category:"Options"},description:'Either "large" or "regular". Sets the checkbox icon. Default is regular. For mweb this should be set to large. (Note: The dimensions of the checkbox will not change, but only the icon)',table:{defaultValue:{summary:"regular"}}},onChange:{action:"on-change",description:"Triggered on change",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value, checked }"}}},onFocus:{action:"on-focus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}}}},i=a=>({input:a,component:u});i.args={};i.parameters={docs:{source:{code:ie}}};const d=a=>({input:a,component:b});d.args={};d.parameters={docs:{source:{code:de}}};const m=q.bind({});m.component=k;const l=q.bind({});l.args={};l.parameters={docs:{source:{code:Q("ebay-tri-state-checkbox",l.args)}}};var T,E,B;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  input: args,
  component: WithLabelTemplate
})`,...(B=(E=i.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var M,O,W;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
  input: args,
  component: DisabledTemplate
})`,...(W=(O=d.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var F,L,P;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(P=(L=m.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var V,z,K;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(K=(z=l.parameters)==null?void 0:z.docs)==null?void 0:K.source}}};const $e=["WithLabel","Disabled","mixedImplementation","Isolated"];export{d as Disabled,l as Isolated,i as WithLabel,$e as __namedExportsOrder,Se as default,m as mixedImplementation};
