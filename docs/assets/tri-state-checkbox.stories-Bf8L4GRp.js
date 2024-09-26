import{t as q}from"./index-CCz6reEH.js";import{t as _,r as g,b as y,f as Q,e as X,d as G,p as J,c as x}from"./registry-CtNeIPU8.js";import{_ as Y}from"./index-D7ppfoJM.js";/* empty css              */import{_ as Z,a as D}from"./index-DcQ8Yt9o.js";import{_ as c}from"./render-tag-mtfFSHEK.js";import{a as ee,c as te,_ as ae,b as se}from"./index-DC55x-1T.js";import{_ as ne}from"./of-fallback-C2gEBeKK.js";import{_ as A}from"./const-element-D4l_3TxL.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-B6qYX52F.js";/* empty css             */const ce=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`;class oe extends Marko.Component{onInput(e){this.state={checked:e.checked||"false"}}triggerChange(){this.state.checked==="true"?this.state.checked="false":this.state.checked==="false"&&!this.input.skipMixed?this.state.checked="mixed":this.state.checked="true"}handleChange(e,t){e.preventDefault(),this.triggerChange(),this.forwardEvent("change",e,t)}handleKeydown(e,t){this.forwardEvent("keydown",e,t)}handleFocus(e,t){this.forwardEvent("focus",e,t)}forwardEvent(e,t,s){var i;const n=(s||((i=this.el)==null?void 0:i.querySelector("input"))).value,m=this.state.checked;this.emit(`${e}`,{originalEvent:t,value:n,checked:m})}}const w="LQAPTnRe",l=_(w);g.r(w,()=>l);const U=oe;l._=y(function(a,e,t,s,n,m){const{class:i,style:C,size:o,skipMixed:f,checked:he,...R}=a;e.be("span",{style:Q(C),class:X(["checkbox",i])},"0",s,null,1),e.e("input",G(J(R),{class:"checkbox__control",checked:n.checked==="true","aria-checked":n.checked,type:"checkbox"}),"1",s,0,4,{onclick:t.d("click","handleChange",!1),onfocus:t.d("focus","handleFocus",!1),onkeydown:t.d("keydown","handleKeydown",!1)}),e.be("span",{class:"checkbox__icon",hidden:""},"2",s,null,0),n.checked==="mixed"?o==="large"?c(Z,{focusable:"false",noSkinClasses:!0},e,t,"3"):c(D,{focusable:"false",noSkinClasses:!0},e,t,"4"):n.checked==="true"?o==="large"?c(ee,{class:"checkbox__checked",focusable:"false",noSkinClasses:!0},e,t,"5"):c(te,{class:"checkbox__checked",focusable:"false",noSkinClasses:!0},e,t,"6"):o==="large"?c(ae,{class:"checkbox__unchecked",focusable:"false",noSkinClasses:!0},e,t,"7"):c(se,{class:"checkbox__unchecked",focusable:"false",noSkinClasses:!0},e,t,"8"),e.ee(),e.ee()},{t:w},U);l.Component=x(U,l._);const S="SVPoXeDd",k=_(S);g.r(S,()=>k);const j={onCreate(){this.state={count:2,checked:[!1,!0,!0,!1],cachedChecked:[!1,!0,!0,!1],cacheCount:2}},handleChange(a,{checked:e}){this.state.checked[a]=e,this.state.cachedChecked=[...this.state.checked],this.state.count+=e?1:-1,this.state.cacheCount=this.state.count},handleParentChange({checked:a}){let e;a==="true"?(this.state.checked.fill(!0),e=this.state.checked.length):a==="mixed"?(this.state.checked=[...this.state.cachedChecked],e=this.state.cacheCount):(this.state.checked.fill(!1),e=0),this.state.count=e},get checked(){return this.state.count===0?"false":this.state.count===this.state.checked.length?"true":"mixed"},get skipMixed(){const a=this.state.cacheCount;return a===0||a===this.state.checked.length}};k._=y(function(a,e,t,s,n,m){e.be("div",{class:"field"},"0",s,null,1),c(l,{skipMixed:s.skipMixed,checked:s.checked,id:t.elId("checkbox-all")},e,t,"1",[["change","handleParentChange",!1]]),e.be("label",{class:"field__label field__label--end",for:t.elId("checkbox-all")},"2",s,null,0),e.t("Select all",s),e.ee(),e.ee(),e.be("div",{class:"container",style:"margin-left: 10px"},"3",s,null,1);{let i=0;for(const C of ne(n.checked)){let o=i++;const f=`[${o}]`;e.be("div",{class:"field"},"4"+f,s,null,1),c(Y,{id:t.elId(`checkbox-${o}`),checked:C},e,t,"5"+f,[["change","handleChange",!1,[o]]]),e.be("label",{class:"field__label field__label--end",for:t.elId(`checkbox-${o}`)},"6"+f,s,null,0),e.t("Option ",s),e.t(o,s),e.ee(),e.ee()}}e.ee()},{t:S},j);k.Component=x(j,k._);const $="NHhBUman",b=_($),le=A("label",{class:"field__label field__label--end",for:"checkbox"},1).t("Option");g.r($,()=>b);const H={};b._=y(function(a,e,t,s,n,m){e.be("span",{class:"field"},"0",s,null,1),c(l,{...a,class:"field__control",id:"checkbox"},e,t,"1",[["change","emit",!1,["change"]],["focus","emit",!1,["focus"]],["keydown","emit",!1,["keydown"]]]),e.n(le,s),e.ee()},{t:$},H);b.Component=x(H,b._);const I="L$pbmDij",u=_(I),re=A("label",{class:"field__label field__label--end field__label--disabled",for:"checkbox"},1).t("Option");g.r(I,()=>u);const K={};u._=y(function(a,e,t,s,n,m){e.be("span",{class:"field"},"0",s,null,1),c(l,{...a,disabled:!0,class:"field__control",id:"checkbox"},e,t,"1",[["change","emit",!1,["change"]],["focus","emit",!1,["focus"]],["keydown","emit",!1,["keydown"]]]),e.n(re,s),e.ee()},{t:I},K);u.Component=x(K,u._);const ie=`import type { Input as TriStateCheckboxInput } from "<ebay-tri-state-checkbox>";
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
`,N=a=>({input:{...a,renderBody:a.renderBody?e=>{e.html(a.renderBody)}:null}}),$e={title:"form input/ebay-tri-state-checkbox",component:l,parameters:{docs:{description:{component:ce}}},argTypes:{checked:{options:["false","mixed","true"],type:{category:"Options"},description:'Either "true", "false" or "mixed". Defaults to "false". Changes the checkbox state to the given one depdending on the checked state.',table:{defaultValue:{summary:"false"}}},skipMixed:{type:"boolean",control:{type:"boolean"},description:"If set, then will skip the mixed toggle when clicking on checkbox. Used if in some cases you want to toggle between all items selected or none."},size:{options:["regular","large"],type:{category:"Options"},description:'Either "large" or "regular". Sets the checkbox icon. Default is regular. For mweb this should be set to large. (Note: The dimensions of the checkbox will not change, but only the icon)',table:{defaultValue:{summary:"regular"}}},onChange:{action:"on-change",description:"Triggered on change",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value, checked }"}}},onFocus:{action:"on-focus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}}}},d=a=>({input:a,component:b});d.args={};d.parameters={docs:{source:{code:ie}}};const h=a=>({input:a,component:u});h.args={};h.parameters={docs:{source:{code:de}}};const p=N.bind({});p.component=k;const r=N.bind({});r.args={};r.parameters={docs:{source:{code:q("ebay-tri-state-checkbox",r.args)}}};var T,v,E;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  input: args,
  component: WithLabelTemplate
})`,...(E=(v=d.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var B,O,M;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  input: args,
  component: DisabledTemplate
})`,...(M=(O=h.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var L,V,F;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(F=(V=p.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var P,W,z;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(z=(W=r.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};const Ie=["WithLabel","Disabled","mixedImplementation","Isolated"];export{h as Disabled,r as Isolated,d as WithLabel,Ie as __namedExportsOrder,$e as default,p as mixedImplementation};
