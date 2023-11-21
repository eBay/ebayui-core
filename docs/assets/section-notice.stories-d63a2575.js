import{t as Y}from"./index-a17a703b.js";import{b as T,a as ie}from"./utils-44f5c40b.js";import{t as h,r as _,_ as O,a as w}from"./merge-attrs-51a02d23.js";/* empty css             */import{_ as ae}from"./index-eb2b3721.js";import{_ as l}from"./render-tag-73fdbff3.js";import{_ as a}from"./v-element-66dc25dc.js";import{_ as u}from"./self-iterator-81a0b488.js";import{c as se}from"./index-92d34436.js";import{_ as ce}from"./index-9b29ffd0.js";import"./_commonjsHelpers-725317a4.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-ed698466.js";import"./index-42c7fb72.js";import"./dynamic-tag-ee96640a.js";import"./index-896cf11b.js";/* empty css             */import"./index-ad737ebd.js";const le=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-section-notice
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

The \`<ebay-section-notice>\` is a tag used to create a custom-designed notice element. The notice can be single or multi-line but each line should be wrapped inside a \`<p>\` tag.

This notice should be used at the top of various sections to display information needed.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/notices-tips-ebay-section-notice)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/notices-tips-ebay-section-notice)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-section-notice/examples)
`;class ue{onCreate(){this.state={dismissed:!1}}onInput(t){this.state={dismissed:t.dismissed||!1}}onDismiss(){this.state.dismissed=!0,this.emit("dismiss")}}function $(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),o.push.apply(o,n)}return o}function E(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?$(Object(o),!0).forEach(function(n){me(e,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):$(Object(o)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))})}return e}function me(e,t,o){return t=pe(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function pe(e){var t=de(e,"string");return typeof t=="symbol"?t:String(t)}function de(e,t){if(typeof e!="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var n=o.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const j="OCFpWpE+",m=h(j),v=m;_.r(j,()=>m);const Z=ue;m._=O(function(e,t,o,n,i,P){i.dismissed||l(ae,E(E({},e),{},{role:"region",prefixClass:"section-notice",type:"section",mainRoot:"span",a11yRoleDescription:e.a11yRoleDescription||"Notice",class:[e.status==="education"&&"section-notice--large-icon",e.class]}),t,o,"0",[["dismiss","onDismiss",!1]])},{t:j},Z);m.Component=w(Z,m._);function x(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),o.push.apply(o,n)}return o}function C(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?x(Object(o),!0).forEach(function(n){fe(e,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):x(Object(o)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))})}return e}function fe(e,t,o){return t=ye(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function ye(e){var t=be(e,"string");return typeof t=="symbol"?t:String(t)}function be(e,t){if(typeof e!="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var n=o.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const S="VQ1tlugC",p=h(S),ge=a("div",null,"1",null,1,0).t("Notice title"),he=a("p",null,"3",null,2,0).e("strong",null,"4",null,1,0).t("Error:").t(" Please take another look at the following:"),_e=a("p",null,"5",null,5,0).e("a",{href:"#"},"6",null,1,0).t("Card number").t(", ").e("a",{href:"#"},"7",null,1,0).t("Expiration date").t(" & ").e("a",{href:"#"},"8",null,1,0).t("Security code");_.r(S,()=>p);const ee={};p._=O(function(e,t,o,n,i,P){l(v,C(C({},e),{},{title:{renderBody:r=>{r.n(ge,n)},[Symbol.iterator]:u},footer:{renderBody:r=>{l(se,{renderBody:re=>{re.t("Footer",n)}},r,o,"2")},[Symbol.iterator]:u},renderBody:r=>{r.n(he,n),r.n(_e,n)}}),t,o,"0")},{t:S,i:!0},ee);p.Component=w(ee,p._);const Oe=`<ebay-section-notice ...input>
    <@title>
        <div>Notice title</div>
    </@title>
    <@footer>
        <ebay-fake-link>Footer</ebay-fake-link>
    </@footer>
    <p>
        <strong>Error:</strong> Please take another look at the following:
    </p>
    <p>
        <a href="#">Card number</a>,
        <a href="#">Expiration date</a>
        &amp;
        <a href="#">Security code</a>
    </p>
</ebay-section-notice>
`;function B(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),o.push.apply(o,n)}return o}function N(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?B(Object(o),!0).forEach(function(n){we(e,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):B(Object(o)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))})}return e}function we(e,t,o){return t=ve(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function ve(e){var t=Pe(e,"string");return typeof t=="symbol"?t:String(t)}function Pe(e,t){if(typeof e!="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var n=o.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const k="gIBlDN2z",d=h(k),Te=a("div",null,"1",null,1,0).t("Notice title"),je=a("p",null,"2",null,1,0).t("The eBay vault will store items for you."),Se=a("p",null,"3",null,1,0).e("a",{href:"#"},"4",null,1,0).t("Try it");_.r(k,()=>d);const te={};d._=O(function(e,t,o,n,i,P){l(v,N(N({},e),{},{educationIcon:ce,a11yText:"ebay vault",title:{renderBody:r=>{r.n(Te,n)},[Symbol.iterator]:u},renderBody:r=>{r.n(je,n),r.n(Se,n)}}),t,o,"0")},{t:k,i:!0},te);d.Component=w(te,d._);const ke=`import TheVaultIcon from '<ebay-the-ebay-vault-24-fit-icon>'
<ebay-section-notice ...input educationIcon=TheVaultIcon a11y-text="ebay vault">
    <@title>
        <div>Notice title</div>
    </@title>
    <p>
        The eBay vault will store items for you.
    </p>
    <p>
        <a href="#">Try it</a>
    </p>
</ebay-section-notice>
`;function I(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),o.push.apply(o,n)}return o}function R(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?I(Object(o),!0).forEach(function(n){De(e,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):I(Object(o)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))})}return e}function De(e,t,o){return t=$e(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function $e(e){var t=Ee(e,"string");return typeof t=="symbol"?t:String(t)}function Ee(e,t){if(typeof e!="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var n=o.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const D="9qmcJqBD",f=h(D),xe=a("div",null,"1",null,1,0).t("Notice title"),Ce=a("p",null,"2",null,2,0).e("strong",null,"3",null,1,0).t("Error:").t(" Please take another look at the following:"),Be=a("p",null,"4",null,5,0).e("a",{href:"#"},"5",null,1,0).t("Card number").t(", ").e("a",{href:"#"},"6",null,1,0).t("Expiration date").t(" & ").e("a",{href:"#"},"7",null,1,0).t("Security code");_.r(D,()=>f);const oe={};f._=O(function(e,t,o,n,i,P){l(v,R(R({},e),{},{title:{renderBody:r=>{r.n(xe,n)},[Symbol.iterator]:u},cta:{href:"https://www.ebay.com",renderBody:r=>{r.t("Link here",n)},[Symbol.iterator]:u},renderBody:r=>{r.n(Ce,n),r.n(Be,n)}}),t,o,"0",[["dismiss","emit",!1,["dismiss"]]])},{t:D},oe);f.Component=w(oe,f._);const Ne=`class {}
<ebay-section-notice ...input on-dismiss('emit', 'dismiss')>
    <@title>
        <div>Notice title</div>
    </@title>
    <@cta href="https://www.ebay.com">Link here</@cta>
    <p>
        <strong>Error:</strong> Please take another look at the following:
    </p>
    <p>
        <a href="#">Card number</a>,
        <a href="#">Expiration date</a>
        &amp;
        <a href="#">Security code</a>
    </p>
</ebay-section-notice>
`,ne=e=>({input:ie(e)}),Ze={title:"notices & tips/ebay-section-notice",component:v,parameters:{docs:{description:{component:le}}},argTypes:{status:{table:{defaultValue:{summary:"attention"}},description:"The icon used and status of the notice",options:["attention","confirmation","information","education"],type:"select"},icon:{table:{defaultValue:{summary:"default"}},options:["default","none"],type:"select",description:'matches whatever is specified by the "status", or if none hides icon'},educationIcon:{name:"@educationIcon",description:"For status education, an `<ebay-[name]-icon>` to show as the button's icon",table:{category:"Education tags",defaultValue:{summary:"ebay-lightbulb-24-icon"}}},prominent:{description:"For status education, whether notice on the page should be prominent",type:"boolean",defaultValue:{summary:"false"},table:{category:"Education tags"}},a11yText:{description:"adding description for the notice for a11y users"},a11yRoleDescription:{table:{defaultValue:{summary:"Notice"}},description:"The roledescription to announce the component type for a11y users."},dismissed:{description:"whether or not the notice is dismissed",type:"boolean"},title:{name:"@title",description:"The title content to be displayed.",table:{category:"@attribute tags"}},footer:{name:"@footer",description:"The footer content to be displayed. Used to show a CTA button generally",table:{category:"@attribute tags"}},cta:{name:"@cta",description:"This allows the addition of a main CTA link",table:{category:"@attribute tags"}},onDismiss:{action:"on-dismiss",description:"Triggered on notice dismiss",table:{category:"Events",defaultValue:{summary:""}}}}},s=ne.bind({});s.args={a11yText:"attention",status:"attention",a11yRoleDescription:"Notice",renderBody:"<p>Section notice info. Things you need to know.</p>"};s.parameters={docs:{source:{code:Y("ebay-section-notice",s.args)}}};const c=ne.bind({});c.args={a11yText:"attention",status:"attention",a11yRoleDescription:"Notice",title:{renderBody:"Section notice title"},renderBody:"<p>Section notice info. Things you need to know.</p>"};c.parameters={docs:{source:{code:Y("ebay-section-notice",c.args)}}};const y=T(p,Oe,{a11yText:"attention",status:"attention"}),b=T(f,Ne,{a11yText:"information",a11yIconText:"",a11yDismissText:"Dismiss Notice",status:"information",icon:null}),g=T(d,ke,{a11yText:"education",status:"education",prominent:!1});var V,W,K;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(K=(W=s.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};var A,F,q;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(q=(F=c.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var z,L,J;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`buildExtensionTemplate(withAction, withActionCode, {
  a11yText: "attention",
  status: "attention"
})`,...(J=(L=y.parameters)==null?void 0:L.docs)==null?void 0:J.source}}};var Q,U,G;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`buildExtensionTemplate(withDismiss, withDismissCode, {
  a11yText: "information",
  a11yIconText: "",
  a11yDismissText: "Dismiss Notice",
  status: "information",
  icon: null
})`,...(G=(U=b.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var H,M,X;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`buildExtensionTemplate(withIcon, withIconCode, {
  a11yText: "education",
  status: "education",
  prominent: false
})`,...(X=(M=g.parameters)==null?void 0:M.docs)==null?void 0:X.source}}};const et=["Basic","WithTitle","WithAction","WithDismiss","WithEducationIcon"];export{s as Basic,y as WithAction,b as WithDismiss,g as WithEducationIcon,c as WithTitle,et as __namedExportsOrder,Ze as default};
//# sourceMappingURL=section-notice.stories-d63a2575.js.map
