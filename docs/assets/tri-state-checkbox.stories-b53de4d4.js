import{t as X}from"./index-a17a703b.js";import{t as b,r as p,_ as k,j as Y,h as G,g as Z,p as ee,a as g}from"./merge-attrs-f99eec0a.js";import{C as te}from"./index-ca2269d3.js";/* empty css              */import{_ as ae,a as se}from"./index-3113ad80.js";import{_ as n}from"./render-tag-73fdbff3.js";import{a as re,c as ne,_ as ce,b as oe}from"./index-4874ca33.js";import{_ as V}from"./v-element-6541da74.js";import"./_commonjsHelpers-725317a4.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-1aa10c61.js";/* empty css             */const le=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`,ie={onInput(t){this.state={checked:t.checked||"false"}},triggerChange(){this.state.checked==="true"?this.state.checked="false":this.state.checked==="false"&&!this.input.skipMixed?this.state.checked="mixed":this.state.checked="true"},handleChange(t,e){t.preventDefault(),this.triggerChange(),this.forwardEvent("change",t,e)},handleKeydown(t,e){this.forwardEvent("keydown",t,e)},handleFocus(t,e){this.forwardEvent("focus",t,e)},forwardEvent(t,e,a){const s=(a||this.el.querySelector("input")).value,r=this.state.checked;this.emit(`${t}`,{originalEvent:e,value:s,checked:r})}},w="XYsPtucR",h=b(w),y=h;var de=["class","style","size","toJSON","iconStyle","skipMixed","checked"];p.r(w,()=>h);const A=ie;h._=k(function(t,e,a,s,r,_){e.be("span",{style:Y(t.style),class:G(["checkbox",t.class])},"0",s,null,1),e.e("input",Z(ee(t,de),{class:"checkbox__control",checked:r.checked==="true","aria-checked":r.checked,type:"checkbox"}),"1",s,0,4,{onclick:a.d("click","handleChange",!1),onfocus:a.d("focus","handleFocus",!1),onkeydown:a.d("keydown","handleKeydown",!1)}),e.be("span",{class:"checkbox__icon",hidden:""},"2",s,null,0),r.checked==="mixed"?t.size==="large"?n(ae,{focusable:"false",noSkinClasses:!0},e,a,"3"):n(se,{focusable:"false",noSkinClasses:!0},e,a,"4"):r.checked==="true"?t.size==="large"?n(re,{class:"checkbox__checked",focusable:"false",noSkinClasses:!0},e,a,"5"):n(ne,{class:"checkbox__checked",focusable:"false",noSkinClasses:!0},e,a,"6"):t.size==="large"?n(ce,{class:"checkbox__unchecked",focusable:"false",noSkinClasses:!0},e,a,"7"):n(oe,{class:"checkbox__unchecked",focusable:"false",noSkinClasses:!0},e,a,"8"),e.ee(),e.ee()},{t:w},A);h.Component=g(A,h._);const O="RPK8ulur",u=b(O);p.r(O,()=>u);const R={onCreate(){this.state={count:2,checked:[!1,!0,!0,!1],cachedChecked:[!1,!0,!0,!1],cacheCount:2}},handleChange(t,e){let{checked:a}=e;this.state.checked[t]=a,this.state.cachedChecked=[...this.state.checked],this.state.count+=a?1:-1,this.state.cacheCount=this.state.count},handleParentChange(t){let{checked:e}=t,a;e==="true"?(this.state.checked.fill(!0),a=this.state.checked.length):e==="mixed"?(this.state.checked=[...this.state.cachedChecked],a=this.state.cacheCount):(this.state.checked.fill(!1),a=0),this.state.count=a},get checked(){return this.state.count===0?"false":this.state.count===this.state.checked.length?"true":"mixed"},get skipMixed(){const t=this.state.cacheCount;return t===0||t===this.state.checked.length}};u._=k(function(t,e,a,s,r,_){e.be("div",{class:"field"},"0",s,null,1),n(y,{skipMixed:s.skipMixed,checked:s.checked,id:a.elId("checkbox-all")},e,a,"1",[["change","handleParentChange",!1]]),e.be("label",{class:"field__label field__label--end",for:a.elId("checkbox-all")},"2",s,null,0),e.t("Select all",s),e.ee(),e.ee(),e.be("div",{class:"container",style:"margin-left: 10px"},"3",s,null,1);{let J=0;for(const Q of r.checked||[]){let i=J++;const x="[".concat(i,"]");e.be("div",{class:"field"},"4"+x,s,null,1),n(te,{id:a.elId("checkbox-".concat(i)),checked:Q},e,a,"5"+x,[["change","handleChange",!1,[i]]]),e.be("label",{class:"field__label field__label--end",for:a.elId("checkbox-".concat(i))},"6"+x,s,null,0),e.t("Option ",s),e.t(i,s),e.ee(),e.ee()}}e.ee()},{t:O},R);u.Component=g(R,u._);function S(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),a.push.apply(a,s)}return a}function P(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?S(Object(a),!0).forEach(function(s){he(t,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):S(Object(a)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(a,s))})}return t}function he(t,e,a){return e=ue(e),e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function ue(t){var e=me(t,"string");return typeof e=="symbol"?e:String(e)}function me(t,e){if(typeof t!="object"||t===null)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var s=a.call(t,e||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}const v="/WCBa3Qe",m=b(v),fe=V("label",{class:"field__label field__label--end",for:"checkbox"},"2",null,1,0).t("Option");p.r(v,()=>m);const U={};m._=k(function(t,e,a,s,r,_){e.be("span",{class:"field"},"0",s,null,1),n(y,P(P({},t),{},{class:"field__control",id:"checkbox"}),e,a,"1",[["change","emit",!1,["change"]],["focus","emit",!1,["focus"]],["keydown","emit",!1,["keydown"]]]),e.n(fe,s),e.ee()},{t:v},U);m.Component=g(U,m._);function j(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),a.push.apply(a,s)}return a}function $(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?j(Object(a),!0).forEach(function(s){be(t,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(a,s))})}return t}function be(t,e,a){return e=pe(e),e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function pe(t){var e=ke(t,"string");return typeof e=="symbol"?e:String(e)}function ke(t,e){if(typeof t!="object"||t===null)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var s=a.call(t,e||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}const C="sm/l2NMU",f=b(C),ge=V("label",{class:"field__label field__label--end field__label--disabled",for:"checkbox"},"2",null,1,0).t("Option");p.r(C,()=>f);const q={};f._=k(function(t,e,a,s,r,_){e.be("span",{class:"field"},"0",s,null,1),n(y,$($({},t),{},{disabled:!0,class:"field__control",id:"checkbox"}),e,a,"1",[["change","emit",!1,["change"]],["focus","emit",!1,["focus"]],["keydown","emit",!1,["keydown"]]]),e.n(ge,s),e.ee()},{t:C},q);f.Component=g(q,f._);const ye=`class {}

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
`,H=t=>({input:{...t,renderBody:t.renderBody?e=>{e.html(t.renderBody)}:null}}),Ie={title:"form input/ebay-tri-state-checkbox",component:y,parameters:{docs:{description:{component:le}}},argTypes:{checked:{options:["false","mixed","true"],type:{category:"Options"},description:'Either "true", "false" or "mixed". Defaults to "false". Changes the checkbox state to the given one depdending on the checked state.',table:{defaultValue:{summary:"false"}}},skipMixed:{type:"boolean",control:{type:"boolean"},description:"If set, then will skip the mixed toggle when clicking on checkbox. Used if in some cases you want to toggle between all items selected or none."},size:{options:["regular","large"],type:{category:"Options"},description:'Either "large" or "regular". Sets the checkbox icon. Default is regular. For mweb this should be set to large. (Note: The dimensions of the checkbox will not change, but only the icon)',table:{defaultValue:{summary:"regular"}}},onChange:{action:"on-change",description:"Triggered on change",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value, checked }"}}},onFocus:{action:"on-focus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}}}},o=t=>({input:t,component:m});o.args={};o.parameters={docs:{source:{code:ye}}};const l=t=>({input:t,component:f});l.args={};l.parameters={docs:{source:{code:_e}}};const d=H.bind({});d.component=u;const c=H.bind({});c.args={};c.parameters={docs:{source:{code:X("ebay-tri-state-checkbox",c.args)}}};var E,T,B;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  input: args,
  component: WithLabelTemplate
})`,...(B=(T=o.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var I,K,M;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  input: args,
  component: DisabledTemplate
})`,...(M=(K=l.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var z,D,N;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(N=(D=d.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var W,F,L;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(L=(F=c.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};const Ke=["WithLabel","Disabled","mixedImplementation","Isolated"];export{l as Disabled,c as Isolated,o as WithLabel,Ke as __namedExportsOrder,Ie as default,d as mixedImplementation};
//# sourceMappingURL=tri-state-checkbox.stories-b53de4d4.js.map
