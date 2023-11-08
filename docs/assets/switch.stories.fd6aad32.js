import{t as W}from"./index.bcb3df20.js";import{t as m,r as d,a as u,d as b,c as V,s as I,m as J,p as z}from"./merge-attrs.9e0d7be9.js";import{v as f}from"./v-element.18e65e73.js";import{r as K}from"./render-tag.1a0b986f.js";import"./_commonjsHelpers.b8add541.js";import"./_commonjs-dynamic-modules.30ae7933.js";const G=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;const H={handleChange(e){this.input.disabled||this.emit("change",{originalEvent:e,value:e.target.value,checked:e.target.checked})}},g="KBhefEPr",p=m(g),y=p;function Q(){}var R=["class","style","toJSON"];const X=f("span",{class:"switch__button"},"2",null,0,1);d.exports.r(g,()=>H);const N={};p._=u(function(e,t,r,n,a,w){e.toJSON=Q,t.be("span",{class:V(["switch",e.class]),style:I(e.style)},"0",n,null,1),t.e("input",J(z(e,R),{type:"checkbox",role:"switch",class:"switch__control"}),"1",n,0,4,{onchange:r.d("change","handleChange",!1)}),t.n(X,n),t.ee()},{t:g,s:!0},N);p.Component=b(N,p._);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?O(Object(r),!0).forEach(function(n){q(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function q(e,t,r){return t=F(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function F(e){var t=M(e,"string");return typeof t=="symbol"?t:String(t)}function M(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const h="fTrlGwCp",i=m(h),U=f("label",{class:"field__label field__label--start",for:"switch"},"1",null,1,0).t("Option");d.exports.r(h,()=>i);const A={};i._=u(function(e,t,r,n,a,w){t.be("span",{class:"field"},"0",n,null,1),t.n(U,n),K(y,v(v({},e),{},{id:"switch"}),t,r,"2",[["change","emit",!1,["change"]]]),t.ee()},{t:h},A);i.Component=b(A,i._);function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?P(Object(r),!0).forEach(function(n){Y(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Y(e,t,r){return t=Z(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Z(e){var t=ee(e,"string");return typeof t=="symbol"?t:String(t)}function ee(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const _="QXB7NAk8",l=m(_),te=f("label",{class:"field__label field__label--start field__label--disabled",for:"switch"},"1",null,1,0).t("Option");d.exports.r(_,()=>l);const L={};l._=u(function(e,t,r,n,a,w){t.be("span",{class:"field"},"0",n,null,1),t.n(te,n),K(y,j(j({},e),{},{disabled:!0,id:"switch"}),t,r,"2",[["change","emit",!1,["change"]]]),t.ee()},{t:_},L);l.Component=b(L,l._);const re=`class {}

<span class="field">
    <label class="field__label field__label--start" for="switch">
        Option
    </label>
    <ebay-switch ...input id="switch" on-change("emit", "change") />
</span>
`,ne=`class {}

<span class="field">
    <label class="field__label field__label--start field__label--disabled" for="switch">
        Option
    </label>
    <ebay-switch ...input disabled id="switch" on-change("emit", "change") />
</span>
`,oe=e=>({input:{...e,renderBody:e.renderBody?t=>{t.html(e.renderBody)}:null}}),me={title:"form input/ebay-switch",component:y,parameters:{docs:{description:{component:G}}},argTypes:{onChange:{action:"on-change",description:"Triggered on change",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value, checked }"}}}}},s=e=>({input:e,component:i});s.args={};s.parameters={docs:{source:{code:re}}};const c=e=>({input:e,component:l});c.args={};c.parameters={docs:{source:{code:ne}}};const o=oe.bind({});o.args={};o.parameters={docs:{source:{code:W("ebay-switch",o.args)}}};var S,k,$;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  input: args,
  component: WithLabelTemplate
})`,...($=(k=s.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};var D,T,C;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
  input: args,
  component: DisabledTemplate
})`,...(C=(T=c.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var x,E,B;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(B=(E=o.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};const de=["WithLabel","Disabled","Isolated"];export{c as Disabled,o as Isolated,s as WithLabel,de as __namedExportsOrder,me as default};
//# sourceMappingURL=switch.stories.fd6aad32.js.map
