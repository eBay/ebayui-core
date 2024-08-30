import{t as Q}from"./index-CCz6reEH.js";import{t as _,r as g,b as y,f as X,e as G,d as J,p as Y,c as x}from"./registry-BVpmXZbM.js";import{_ as Z}from"./index-BnEyogjr.js";/* empty css              */import{_ as D,a as ee}from"./index-DHtHsxV6.js";import{_ as c}from"./render-tag-mtfFSHEK.js";import{a as te,c as ae,_ as se,b as ne}from"./index-DxveRb0X.js";import{_ as ce}from"./of-fallback-C2gEBeKK.js";import{_ as U}from"./const-element-St90kC48.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-DNKYtym0.js";/* empty css             */const oe=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`;class le extends Marko.Component{onInput(e){this.state={checked:e.checked||"false"}}triggerChange(){this.state.checked==="true"?this.state.checked="false":this.state.checked==="false"&&!this.input.skipMixed?this.state.checked="mixed":this.state.checked="true"}handleChange(e,t){e.preventDefault(),this.triggerChange(),this.forwardEvent("change",e,t)}handleKeydown(e,t){this.forwardEvent("keydown",e,t)}handleFocus(e,t){this.forwardEvent("focus",e,t)}forwardEvent(e,t,s){var r;const n=(s||((r=this.el)==null?void 0:r.querySelector("input"))).value,h=this.state.checked;this.emit(`${e}`,{originalEvent:t,value:n,checked:h})}}const S="LQAPTnRe",p=_(S),C=p;g.r(S,()=>p);const j=le;p._=y(function(a,e,t,s,n,h){const{class:r,style:w,size:o,skipMixed:f,checked:me,...q}=a;e.be("span",{style:X(w),class:G(["checkbox",r])},"0",s,null,1),e.e("input",J(Y(q),{class:"checkbox__control",checked:n.checked==="true","aria-checked":n.checked,type:"checkbox"}),"1",s,0,4,{onclick:t.d("click","handleChange",!1),onfocus:t.d("focus","handleFocus",!1),onkeydown:t.d("keydown","handleKeydown",!1)}),e.be("span",{class:"checkbox__icon",hidden:""},"2",s,null,0),n.checked==="mixed"?o==="large"?c(D,{focusable:"false",noSkinClasses:!0},e,t,"3"):c(ee,{focusable:"false",noSkinClasses:!0},e,t,"4"):n.checked==="true"?o==="large"?c(te,{class:"checkbox__checked",focusable:"false",noSkinClasses:!0},e,t,"5"):c(ae,{class:"checkbox__checked",focusable:"false",noSkinClasses:!0},e,t,"6"):o==="large"?c(se,{class:"checkbox__unchecked",focusable:"false",noSkinClasses:!0},e,t,"7"):c(ne,{class:"checkbox__unchecked",focusable:"false",noSkinClasses:!0},e,t,"8"),e.ee(),e.ee()},{t:S},j);p.Component=x(j,p._);const $="SVPoXeDd",k=_($);g.r($,()=>k);const H={onCreate(){this.state={count:2,checked:[!1,!0,!0,!1],cachedChecked:[!1,!0,!0,!1],cacheCount:2}},handleChange(a,{checked:e}){this.state.checked[a]=e,this.state.cachedChecked=[...this.state.checked],this.state.count+=e?1:-1,this.state.cacheCount=this.state.count},handleParentChange({checked:a}){let e;a==="true"?(this.state.checked.fill(!0),e=this.state.checked.length):a==="mixed"?(this.state.checked=[...this.state.cachedChecked],e=this.state.cacheCount):(this.state.checked.fill(!1),e=0),this.state.count=e},get checked(){return this.state.count===0?"false":this.state.count===this.state.checked.length?"true":"mixed"},get skipMixed(){const a=this.state.cacheCount;return a===0||a===this.state.checked.length}};k._=y(function(a,e,t,s,n,h){e.be("div",{class:"field"},"0",s,null,1),c(C,{skipMixed:s.skipMixed,checked:s.checked,id:t.elId("checkbox-all")},e,t,"1",[["change","handleParentChange",!1]]),e.be("label",{class:"field__label field__label--end",for:t.elId("checkbox-all")},"2",s,null,0),e.t("Select all",s),e.ee(),e.ee(),e.be("div",{class:"container",style:"margin-left: 10px"},"3",s,null,1);{let r=0;for(const w of ce(n.checked)){let o=r++;const f=`[${o}]`;e.be("div",{class:"field"},"4"+f,s,null,1),c(Z,{id:t.elId(`checkbox-${o}`),checked:w},e,t,"5"+f,[["change","handleChange",!1,[o]]]),e.be("label",{class:"field__label field__label--end",for:t.elId(`checkbox-${o}`)},"6"+f,s,null,0),e.t("Option ",s),e.t(o,s),e.ee(),e.ee()}}e.ee()},{t:$},H);k.Component=x(H,k._);const I="NHhBUman",b=_(I),re=U("label",{class:"field__label field__label--end",for:"checkbox"},1).t("Option");g.r(I,()=>b);const K={};b._=y(function(a,e,t,s,n,h){e.be("span",{class:"field"},"0",s,null,1),c(C,{...a,class:"field__control",id:"checkbox"},e,t,"1",[["change","emit",!1,["change"]],["focus","emit",!1,["focus"]],["keydown","emit",!1,["keydown"]]]),e.n(re,s),e.ee()},{t:I},K);b.Component=x(K,b._);const T="L$pbmDij",u=_(T),ie=U("label",{class:"field__label field__label--end field__label--disabled",for:"checkbox"},1).t("Option");g.r(T,()=>u);const N={};u._=y(function(a,e,t,s,n,h){e.be("span",{class:"field"},"0",s,null,1),c(C,{...a,disabled:!0,class:"field__control",id:"checkbox"},e,t,"1",[["change","emit",!1,["change"]],["focus","emit",!1,["focus"]],["keydown","emit",!1,["keydown"]]]),e.n(ie,s),e.ee()},{t:T},N);u.Component=x(N,u._);const de=`import type { Input as TriStateCheckboxInput } from "<ebay-tri-state-checkbox>";
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
`,he=`import type { Input as TriStateCheckboxInput } from "<ebay-tri-state-checkbox>";
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
`,R=a=>({input:{...a,renderBody:a.renderBody?e=>{e.html(a.renderBody)}:null}}),Ie={title:"form input/ebay-tri-state-checkbox",component:C,parameters:{docs:{description:{component:oe}}},argTypes:{checked:{options:["false","mixed","true"],type:{category:"Options"},description:'Either "true", "false" or "mixed". Defaults to "false". Changes the checkbox state to the given one depdending on the checked state.',table:{defaultValue:{summary:"false"}}},skipMixed:{type:"boolean",control:{type:"boolean"},description:"If set, then will skip the mixed toggle when clicking on checkbox. Used if in some cases you want to toggle between all items selected or none."},size:{options:["regular","large"],type:{category:"Options"},description:'Either "large" or "regular". Sets the checkbox icon. Default is regular. For mweb this should be set to large. (Note: The dimensions of the checkbox will not change, but only the icon)',table:{defaultValue:{summary:"regular"}}},onChange:{action:"on-change",description:"Triggered on change",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value, checked }"}}},onFocus:{action:"on-focus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}}}},i=a=>({input:a,component:b});i.args={};i.parameters={docs:{source:{code:de}}};const d=a=>({input:a,component:u});d.args={};d.parameters={docs:{source:{code:he}}};const m=R.bind({});m.component=k;const l=R.bind({});l.args={};l.parameters={docs:{source:{code:Q("ebay-tri-state-checkbox",l.args)}}};var v,E,B;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  input: args,
  component: WithLabelTemplate
})`,...(B=(E=i.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var O,M,L;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  input: args,
  component: DisabledTemplate
})`,...(L=(M=d.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var V,F,P;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(P=(F=m.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var W,z,A;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(A=(z=l.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const Te=["WithLabel","Disabled","mixedImplementation","Isolated"];export{d as Disabled,l as Isolated,i as WithLabel,Te as __namedExportsOrder,Ie as default,m as mixedImplementation};
