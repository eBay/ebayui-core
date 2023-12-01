import{t as A}from"./index-a17a703b.js";import{t as m,r as d,_ as u,h as I,j as J,g as z,p as G,a as b}from"./registry-08dff688.js";import{_ as f}from"./v-element-062756a8.js";import{_ as K}from"./render-tag-73fdbff3.js";import"./_commonjsHelpers-725317a4.js";import"./_commonjs-dynamic-modules-302442b1.js";const H=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;const Q={handleChange(e){this.input.disabled||this.emit("change",{originalEvent:e,value:e.target.value,checked:e.target.checked})}},_="KBhefEPr",p=m(_),g=p;function R(){}var V=["class","style","toJSON"];const X=f("span",{class:"switch__button"},"2",null,0,1);d.r(_,()=>Q);const N={};p._=u(function(e,t,r,n,o,w){e.toJSON=R,t.be("span",{class:I(["switch",e.class]),style:J(e.style)},"0",n,null,1),t.e("input",z(G(e,V),{type:"checkbox",role:"switch",class:"switch__control"}),"1",n,0,4,{onchange:r.d("change","handleChange",!1)}),t.n(X,n),t.ee()},{t:_,s:!0},N);p.Component=b(N,p._);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?O(Object(r),!0).forEach(function(n){q(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function q(e,t,r){return t=F(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function F(e){var t=M(e,"string");return typeof t=="symbol"?t:String(t)}function M(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const y="fTrlGwCp",i=m(y),U=f("label",{class:"field__label field__label--start",for:"switch"},"1",null,1,0).t("Option");d.r(y,()=>i);const L={};i._=u(function(e,t,r,n,o,w){t.be("span",{class:"field"},"0",n,null,1),t.n(U,n),K(g,v(v({},e),{},{id:"switch"}),t,r,"2",[["change","emit",!1,["change"]]]),t.ee()},{t:y},L);i.Component=b(L,i._);function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?P(Object(r),!0).forEach(function(n){Y(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Y(e,t,r){return t=Z(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Z(e){var t=ee(e,"string");return typeof t=="symbol"?t:String(t)}function ee(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const h="QXB7NAk8",l=m(h),te=f("label",{class:"field__label field__label--start field__label--disabled",for:"switch"},"1",null,1,0).t("Option");d.r(h,()=>l);const W={};l._=u(function(e,t,r,n,o,w){t.be("span",{class:"field"},"0",n,null,1),t.n(te,n),K(g,j(j({},e),{},{disabled:!0,id:"switch"}),t,r,"2",[["change","emit",!1,["change"]]]),t.ee()},{t:h},W);l.Component=b(W,l._);const re=`class {}

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
`,ae=e=>({input:{...e,renderBody:e.renderBody?t=>{t.html(e.renderBody)}:null}}),me={title:"form input/ebay-switch",component:g,parameters:{docs:{description:{component:H}}},argTypes:{onChange:{action:"on-change",description:"Triggered on change",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value, checked }"}}}}},s=e=>({input:e,component:i});s.args={};s.parameters={docs:{source:{code:re}}};const c=e=>({input:e,component:l});c.args={};c.parameters={docs:{source:{code:ne}}};const a=ae.bind({});a.args={};a.parameters={docs:{source:{code:A("ebay-switch",a.args)}}};var k,S,$;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  input: args,
  component: WithLabelTemplate
})`,...($=(S=s.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var D,C,T;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
  input: args,
  component: DisabledTemplate
})`,...(T=(C=c.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var E,B,x;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(x=(B=a.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};const de=["WithLabel","Disabled","Isolated"];export{c as Disabled,a as Isolated,s as WithLabel,de as __namedExportsOrder,me as default};
//# sourceMappingURL=switch.stories-17fce414.js.map
