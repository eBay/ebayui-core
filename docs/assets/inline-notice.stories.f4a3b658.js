import{b as T}from"./utils.f000f876.js";import{t as h,r as O,a as _,d as v}from"./merge-attrs.9e0d7be9.js";import{_ as x}from"./index.03fec6cf.js";import{r as P}from"./render-tag.1a0b986f.js";import{v as j}from"./v-element.18e65e73.js";import"./_commonjsHelpers.b8add541.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./index.5fb5e51b.js";import"./index.aa2d3137.js";/* empty css             */import"./dynamic-tag.70156c9d.js";import"./index.a5276c99.js";const k=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-inline-notice
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

The \`<ebay-inline-notice>\` is a tag used to create a custom-designed notice element. The notice can be single or multi-line but each line should be wrapped inside a \`<p>\` tag.

This notice should be rendered inline in the page and should not be used at the top of the page.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/notices-tips-ebay-inline-notice)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/notices-tips-ebay-inline-notice)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-inline-notice/examples)
`;function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?u(Object(n),!0).forEach(function(r){$(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $(e,t,n){return t=C(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){var t=N(e,"string");return typeof t=="symbol"?t:String(t)}function N(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const l="Aji/saGX",a=h(l),w=a;O.exports.r(l,()=>a);const S={};a._=_(function(e,t,n,r,o,E){var i=e.status||"attention";P(x,m(m({},e),{},{class:["inline-notice--".concat(i),e.class],status:i,prefixClass:"inline-notice",root:"div",headerRoot:"span",mainRoot:"span",noA11yLabel:!0}),t,n,"0")},{t:l,i:!0},S);a.Component=v(S,a._);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(r){K(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function K(e,t,n){return t=R(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e){var t=z(e,"string");return typeof t=="symbol"?t:String(t)}function z(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const p="sSzWYfNS",s=h(p),A=j("p",null,"1",null,2,0).e("strong",null,"2",null,1,0).t("Error:").t(" Please take another look at the following:"),B=j("p",null,"3",null,5,0).e("a",{href:"#"},"4",null,1,0).t("Card number").t(", ").e("a",{href:"#"},"5",null,1,0).t("Expiration date").t(" & ").e("a",{href:"#"},"6",null,1,0).t("Security code");O.exports.r(p,()=>s);const D={};s._=_(function(e,t,n,r,o,E){P(w,b(b({},e),{},{renderBody:i=>{i.n(A,r),i.n(B,r)}}),t,n,"0")},{t:p,i:!0},D);s.Component=v(D,s._);const V=`<ebay-inline-notice ...input>
    <p>
        <strong>Error:</strong> Please take another look at the following:
    </p>
    <p>
        <a href="#">Card number</a>,
        <a href="#">Expiration date</a>
        &amp;
        <a href="#">Security code</a>
    </p>
</ebay-inline-notice>
`,U={title:"notices & tips/ebay-inline-notice",component:w,parameters:{docs:{description:{component:k}}},argTypes:{status:{table:{defaultValue:{summary:"attention"}},description:"The icon used and status of the noptice",options:["attention","confirmation","information"],type:"select"},icon:{table:{defaultValue:{summary:"default"}},options:["default","none"],type:"select",description:'matches whatever is specified by the "status", or if none hides icon'},a11yText:{description:"adding description for the notice for a11y users"}}},c=T(s,V);var d,y,g;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...(g=(y=c.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const Z=["Default"];export{c as Default,Z as __namedExportsOrder,U as default};
//# sourceMappingURL=inline-notice.stories.f4a3b658.js.map
