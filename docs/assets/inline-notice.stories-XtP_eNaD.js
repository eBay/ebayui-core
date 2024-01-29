import{b as S}from"./utils-NX-dnf4r.js";import{t as d,r as f,b as h,d as b}from"./registry-zqrnEiYK.js";import{_ as $}from"./index-ZhNkRMuN.js";import{_ as y}from"./render-tag-_0PNNh6Y.js";import{_}from"./v-element-BABk39ab.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";import"./index-zgZrJxNG.js";import"./index-dCAZr4YS.js";/* empty css             */import"./index-PAD5b3ff.js";import"./dynamic-tag-4Gch17f1.js";import"./index-0sOjhOVp.js";const w=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,l="Aji/saGX",t=d(l),g=t;f.r(l,()=>t);const k={};t._=h(function(a,i,s,r,T,C){const{status:e="attention",class:E,...D}=a;y($,{...D,class:[`inline-notice--${e}`,E],status:e,prefixClass:"inline-notice",root:"div",headerRoot:"span",mainRoot:"span",noA11yLabel:!0},i,s,"0")},{t:l,i:!0},k);t.Component=b(k,t._);const p="sSzWYfNS",n=d(p),v=_("p",null,"1",null,2,0).e("strong",null,"2",null,1,0).t("Error:").t(" Please take another look at the following:"),B=_("p",null,"3",null,5,0).e("a",{href:"#"},"4",null,1,0).t("Card number").t(", ").e("a",{href:"#"},"5",null,1,0).t("Expiration date").t(" & ").e("a",{href:"#"},"6",null,1,0).t("Security code");f.r(p,()=>n);const x={};n._=h(function(a,i,s,r,T,C){y(g,{...a,renderBody:e=>{e.n(v,r),e.n(B,r)}},i,s,"0")},{t:p,i:!0},x);n.Component=b(x,n._);const R=`<ebay-inline-notice ...input>
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
`,q={title:"notices & tips/ebay-inline-notice",component:g,parameters:{docs:{description:{component:w}}},argTypes:{status:{table:{defaultValue:{summary:"attention"}},description:"The icon used and status of the noptice",options:["attention","confirmation","information"],type:"select"},icon:{table:{defaultValue:{summary:"default"}},options:["default","none"],type:"select",description:'matches whatever is specified by the "status", or if none hides icon'},a11yText:{description:"adding description for the notice for a11y users"}}},o=S(n,R);var c,m,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const F=["Default"];export{o as Default,F as __namedExportsOrder,q as default};
