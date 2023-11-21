import{t as U}from"./index-a17a703b.js";import{a as z}from"./utils-44f5c40b.js";import{t as y,r as b,_ as g,a as h}from"./merge-attrs-51a02d23.js";/* empty css             */import{_ as H}from"./index-eb2b3721.js";import{_ as d}from"./render-tag-73fdbff3.js";import{_ as l}from"./v-element-66dc25dc.js";import{_ as f}from"./self-iterator-81a0b488.js";import{c as J}from"./index-92d34436.js";import"./_commonjsHelpers-725317a4.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-ed698466.js";import"./index-42c7fb72.js";import"./dynamic-tag-ee96640a.js";import"./index-896cf11b.js";/* empty css             */import"./index-ad737ebd.js";const X=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-page-notice
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

The \`<ebay-page-notice>\` is a tag used to create a custom-designed notice element. The notice can be single or multi-line but each line should be wrapped inside a \`<p>\` tag.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/notices-tips-ebay-page-notice)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/notices-tips-ebay-page-notice)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-page-notice/examples)
`;class Y{onCreate(){this.state={dismissed:!1}}onInput(t){this.state={dismissed:t.dismissed||!1}}onDismiss(){this.state.dismissed=!0,this.emit("dismiss")}}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,o)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?j(Object(r),!0).forEach(function(o){q(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function q(e,t,r){return t=G(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function G(e){var t=M(e,"string");return typeof t=="symbol"?t:String(t)}function M(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const _="pe4oXAuF",m=y(_),O=m;b.r(_,()=>m);const F=Y;m._=g(function(e,t,r,o,i,v){var n=e.status||"attention";i.dismissed||d(H,k(k({},e),{},{class:["page-notice--".concat(n),e.class],status:n,role:"region",prefixClass:"page-notice"}),t,r,"0",[["dismiss","onDismiss",!1]])},{t:_},F);m.Component=h(F,m._);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,o)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?S(Object(r),!0).forEach(function(o){Q(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function Q(e,t,r){return t=Z(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Z(e){var t=ee(e,"string");return typeof t=="symbol"?t:String(t)}function ee(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const w="7E07Je/p",p=y(w),te=l("div",null,"1",null,1,0).t("Notice title"),re=l("p",null,"3",null,2,0).e("strong",null,"4",null,1,0).t("Error:").t(" Please take another look at the following:"),oe=l("p",null,"5",null,5,0).e("a",{href:"#"},"6",null,1,0).t("Card number").t(", ").e("a",{href:"#"},"7",null,1,0).t("Expiration date").t(" & ").e("a",{href:"#"},"8",null,1,0).t("Security code");b.r(w,()=>p);const R={};p._=g(function(e,t,r,o,i,v){d(O,T(T({},e),{},{title:{renderBody:n=>{n.n(te,o)},[Symbol.iterator]:f},footer:{renderBody:n=>{d(J,{renderBody:L=>{L.t("Footer",o)}},n,r,"2")},[Symbol.iterator]:f},renderBody:n=>{n.n(re,o),n.n(oe,o)}}),t,r,"0")},{t:w,i:!0},R);p.Component=h(R,p._);const ne=`<ebay-page-notice ...input>
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
</ebay-page-notice>
`;function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,o)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?D(Object(r),!0).forEach(function(o){ie(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function ie(e,t,r){return t=ae(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ae(e){var t=se(e,"string");return typeof t=="symbol"?t:String(t)}function se(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const P="2HoyE4gY",u=y(P),ce=l("div",null,"1",null,1,0).t("Notice title"),le=l("p",null,"2",null,2,0).e("strong",null,"3",null,1,0).t("Error:").t(" Please take another look at the following:"),me=l("p",null,"4",null,5,0).e("a",{href:"#"},"5",null,1,0).t("Card number").t(", ").e("a",{href:"#"},"6",null,1,0).t("Expiration date").t(" & ").e("a",{href:"#"},"7",null,1,0).t("Security code");b.r(P,()=>u);const V={};u._=g(function(e,t,r,o,i,v){d(O,E(E({},e),{},{title:{renderBody:n=>{n.n(ce,o)},[Symbol.iterator]:f},cta:{href:"https://www.ebay.com",renderBody:n=>{n.t("Link here",o)},[Symbol.iterator]:f},renderBody:n=>{n.n(le,o),n.n(me,o)}}),t,r,"0",[["dismiss","emit",!1,["dismiss"]]])},{t:P},V);u.Component=h(V,u._);const pe=`class {}
<ebay-page-notice ...input on-dismiss('emit', 'dismiss')>
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
</ebay-page-notice>
`,ue=e=>({input:z(e)}),xe={title:"notices & tips/ebay-page-notice",component:O,parameters:{docs:{description:{component:X}}},argTypes:{status:{table:{defaultValue:{summary:"attention"}},description:"The icon used and status of the notice",options:["attention","confirmation","information","celebration"],type:"select"},icon:{table:{defaultValue:{summary:"default"}},options:["default","none"],type:"select",description:'matches whatever is specified by the "status", or if none hides icon'},a11yIconText:{description:"adding description for the icon in the notice for a11y users"},a11yDismissText:{description:"This adds a dismiss icon allowing the notice to be dismissed/hidden and sets the a11y text on the icon"},dismissed:{description:"whether or not the notice is dismissed",type:"boolean"},title:{name:"@title",description:"The title content to be displayed. Used mostly for celebration notice",table:{category:"@attribute tags"}},footer:{name:"@footer",description:"The footer content to be displayed. Used to show the dismiss button generally",table:{category:"@attribute tags"}},cta:{name:"@cta",description:"This allows the addition of a main CTA link",table:{category:"@attribute tags"}},onDismiss:{action:"on-dismiss",description:"Triggered on notice dismiss",table:{category:"Events",defaultValue:{summary:""}}}}},a=ue.bind({});a.args={a11yText:"attention",a11yIconText:"",a11yDismissText:"",status:null,icon:null,cta:null,dismissed:!1,title:{renderBody:"An error has occurred"},renderBody:`<p><strong>Error:</strong> Please take another look at the following:</p>
    <p>
        <a href='#'>Card number</a>
        ,
        <a href='#'>Expiration date</a>
        &amp;
        <a href='#'>Security code</a>
    </p>`};a.parameters={docs:{source:{code:U("ebay-page-notice",a.args)}}};const s=e=>({input:e,component:p});s.args={a11yText:"attention",a11yIconText:"",a11yDismissText:"",status:null,icon:null};s.parameters={docs:{source:{code:ne}}};const c=e=>({input:e,component:u});c.args={a11yText:"information",a11yIconText:"",a11yDismissText:"Dismiss Notice",status:"information",icon:null};c.parameters={docs:{source:{code:pe}}};var x,$,C;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(C=($=a.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var B,N,A;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  input: args,
  component: withAction
})`,...(A=(N=s.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var K,I,W;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`args => ({
  input: args,
  component: withDismiss
})`,...(W=(I=c.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};const $e=["Basic","WithAction","WithDismiss"];export{a as Basic,s as WithAction,c as WithDismiss,$e as __namedExportsOrder,xe as default};
//# sourceMappingURL=page-notice.stories-2afaf84a.js.map
