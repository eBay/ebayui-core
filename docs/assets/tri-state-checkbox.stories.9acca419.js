import{t as X}from"./index.bcb3df20.js";import{t as b,r as p,a as g,d as k,s as Y,c as G,m as Z,p as ee}from"./merge-attrs.9e0d7be9.js";import{C as te}from"./index.0aed044d.js";/* empty css              */import{_ as ae,a as se}from"./index.2954dd70.js";import{r}from"./render-tag.1a0b986f.js";import{_ as ne,a as re,b as ce,c as oe}from"./index.c2aaad7e.js";import{v as F}from"./v-element.18e65e73.js";import"./_commonjsHelpers.b8add541.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./index.aa2d3137.js";/* empty css             */const le=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`,ie={onInput(t){this.state={checked:t.checked||"false"}},triggerChange(){this.state.checked==="true"?this.state.checked="false":this.state.checked==="false"&&!this.input.skipMixed?this.state.checked="mixed":this.state.checked="true"},handleChange(t,e){t.preventDefault(),this.triggerChange(),this.forwardEvent("change",t,e)},handleKeydown(t,e){this.forwardEvent("keydown",t,e)},handleFocus(t,e){this.forwardEvent("focus",t,e)},forwardEvent(t,e,a){const s=(a||this.el.querySelector("input")).value,n=this.state.checked;this.emit(`${t}`,{originalEvent:e,value:s,checked:n})}},w="XYsPtucR",h=b(w),y=h;var de=["class","style","size","toJSON","iconStyle","skipMixed","checked"];p.exports.r(w,()=>h);const L=ie;h._=g(function(t,e,a,s,n,_){e.be("span",{style:Y(t.style),class:G(["checkbox",t.class])},"0",s,null,1),e.e("input",Z(ee(t,de),{class:"checkbox__control",checked:n.checked==="true","aria-checked":n.checked,type:"checkbox"}),"1",s,0,4,{onclick:a.d("click","handleChange",!1),onfocus:a.d("focus","handleFocus",!1),onkeydown:a.d("keydown","handleKeydown",!1)}),e.be("span",{class:"checkbox__icon",hidden:""},"2",s,null,0),n.checked==="mixed"?t.size==="large"?r(ae,{focusable:"false",noSkinClasses:!0},e,a,"3"):r(se,{focusable:"false",noSkinClasses:!0},e,a,"4"):n.checked==="true"?t.size==="large"?r(ne,{class:"checkbox__checked",focusable:"false",noSkinClasses:!0},e,a,"5"):r(re,{class:"checkbox__checked",focusable:"false",noSkinClasses:!0},e,a,"6"):t.size==="large"?r(ce,{class:"checkbox__unchecked",focusable:"false",noSkinClasses:!0},e,a,"7"):r(oe,{class:"checkbox__unchecked",focusable:"false",noSkinClasses:!0},e,a,"8"),e.ee(),e.ee()},{t:w},L);h.Component=k(L,h._);const O="RPK8ulur",u=b(O);p.exports.r(O,()=>u);const R={onCreate(){this.state={count:2,checked:[!1,!0,!0,!1],cachedChecked:[!1,!0,!0,!1],cacheCount:2}},handleChange(t,e){let{checked:a}=e;this.state.checked[t]=a,this.state.cachedChecked=[...this.state.checked],this.state.count+=a?1:-1,this.state.cacheCount=this.state.count},handleParentChange(t){let{checked:e}=t,a;e==="true"?(this.state.checked.fill(!0),a=this.state.checked.length):e==="mixed"?(this.state.checked=[...this.state.cachedChecked],a=this.state.cacheCount):(this.state.checked.fill(!1),a=0),this.state.count=a},get checked(){return this.state.count===0?"false":this.state.count===this.state.checked.length?"true":"mixed"},get skipMixed(){const t=this.state.cacheCount;return t===0||t===this.state.checked.length}};u._=g(function(t,e,a,s,n,_){e.be("div",{class:"field"},"0",s,null,1),r(y,{skipMixed:s.skipMixed,checked:s.checked,id:a.elId("checkbox-all")},e,a,"1",[["change","handleParentChange",!1]]),e.be("label",{class:"field__label field__label--end",for:a.elId("checkbox-all")},"2",s,null,0),e.t("Select all",s),e.ee(),e.ee(),e.be("div",{class:"container",style:"margin-left: 10px"},"3",s,null,1);{let J=0;for(const Q of n.checked||[]){let i=J++;const x="[".concat(i,"]");e.be("div",{class:"field"},"4"+x,s,null,1),r(te,{id:a.elId("checkbox-".concat(i)),checked:Q},e,a,"5"+x,[["change","handleChange",!1,[i]]]),e.be("label",{class:"field__label field__label--end",for:a.elId("checkbox-".concat(i))},"6"+x,s,null,0),e.t("Option ",s),e.t(i,s),e.ee(),e.ee()}}e.ee()},{t:O},R);u.Component=k(R,u._);function S(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),a.push.apply(a,s)}return a}function P(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?S(Object(a),!0).forEach(function(s){he(t,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):S(Object(a)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(a,s))})}return t}function he(t,e,a){return e=ue(e),e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function ue(t){var e=fe(t,"string");return typeof e=="symbol"?e:String(e)}function fe(t,e){if(typeof t!="object"||t===null)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var s=a.call(t,e||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}const v="/WCBa3Qe",f=b(v),me=F("label",{class:"field__label field__label--end",for:"checkbox"},"2",null,1,0).t("Option");p.exports.r(v,()=>f);const U={};f._=g(function(t,e,a,s,n,_){e.be("span",{class:"field"},"0",s,null,1),r(y,P(P({},t),{},{class:"field__control",id:"checkbox"}),e,a,"1",[["change","emit",!1,["change"]],["focus","emit",!1,["focus"]],["keydown","emit",!1,["keydown"]]]),e.n(me,s),e.ee()},{t:v},U);f.Component=k(U,f._);function $(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),a.push.apply(a,s)}return a}function j(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?$(Object(a),!0).forEach(function(s){be(t,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):$(Object(a)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(a,s))})}return t}function be(t,e,a){return e=pe(e),e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function pe(t){var e=ge(t,"string");return typeof e=="symbol"?e:String(e)}function ge(t,e){if(typeof t!="object"||t===null)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var s=a.call(t,e||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}const C="sm/l2NMU",m=b(C),ke=F("label",{class:"field__label field__label--end field__label--disabled",for:"checkbox"},"2",null,1,0).t("Option");p.exports.r(C,()=>m);const q={};m._=g(function(t,e,a,s,n,_){e.be("span",{class:"field"},"0",s,null,1),r(y,j(j({},t),{},{disabled:!0,class:"field__control",id:"checkbox"}),e,a,"1",[["change","emit",!1,["change"]],["focus","emit",!1,["focus"]],["keydown","emit",!1,["keydown"]]]),e.n(ke,s),e.ee()},{t:C},q);m.Component=k(q,m._);const ye=`class {}

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
`,_e=`class {}

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
`,H=t=>({input:{...t,renderBody:t.renderBody?e=>{e.html(t.renderBody)}:null}}),Ie={title:"form input/ebay-tri-state-checkbox",component:y,parameters:{docs:{description:{component:le}}},argTypes:{checked:{options:["false","mixed","true"],type:{category:"Options"},description:'Either "true", "false" or "mixed". Defaults to "false". Changes the checkbox state to the given one depdending on the checked state.',table:{defaultValue:{summary:"false"}}},skipMixed:{type:"boolean",control:{type:"boolean"},description:"If set, then will skip the mixed toggle when clicking on checkbox. Used if in some cases you want to toggle between all items selected or none."},size:{options:["regular","large"],type:{category:"Options"},description:'Either "large" or "regular". Sets the checkbox icon. Default is regular. For mweb this should be set to large. (Note: The dimensions of the checkbox will not change, but only the icon)',table:{defaultValue:{summary:"regular"}}},onChange:{action:"on-change",description:"Triggered on change",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value, checked }"}}},onFocus:{action:"on-focus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}}}},o=t=>({input:t,component:f});o.args={};o.parameters={docs:{source:{code:ye}}};const l=t=>({input:t,component:m});l.args={};l.parameters={docs:{source:{code:_e}}};const d=H.bind({});d.component=u;const c=H.bind({});c.args={};c.parameters={docs:{source:{code:X("ebay-tri-state-checkbox",c.args)}}};var E,T,B;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  input: args,
  component: WithLabelTemplate
})`,...(B=(T=o.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var I,K,M;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  input: args,
  component: DisabledTemplate
})`,...(M=(K=l.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var z,V,D;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(D=(V=d.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var N,W,A;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(A=(W=c.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};const Ke=["WithLabel","Disabled","mixedImplementation","Isolated"];export{l as Disabled,c as Isolated,o as WithLabel,Ke as __namedExportsOrder,Ie as default,d as mixedImplementation};
//# sourceMappingURL=tri-state-checkbox.stories.9acca419.js.map
