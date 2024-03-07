import{b as S}from"./utils-DWCsNc5l.js";import{t as u,r as f,b as h,d as b}from"./registry-ZV7By7ZP.js";import{_ as $}from"./index-DLcyrLTy.js";import{_ as y}from"./render-tag-Buaq4gMc.js";import{_}from"./const-element-BsegXDZ8.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-CrQkrzO8.js";import"./index-Z5IdgrQn.js";/* empty css             */import"./index-D7M5CzEP.js";import"./dynamic-tag-Dub0dLVC.js";import"./index-BazW8NNv.js";const w=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,p="Aji/saGX",t=u(p),g=t;f.r(p,()=>t);const k={};t._=h(function(a,i,s,r,T,C){const{status:e="attention",class:E,...D}=a;y($,{...D,class:[`inline-notice--${e}`,E],status:e,prefixClass:"inline-notice",root:"div",headerRoot:"span",mainRoot:"span",noA11yLabel:!0},i,s,"0")},{t:p,i:!0},k);t.Component=b(k,t._);const c="sSzWYfNS",n=u(c),v=_("p",null,2).e("strong",null,1).t("Error:").t(" Please take another look at the following:"),B=_("p",null,5).e("a",{href:"#"},1).t("Card number").t(", ").e("a",{href:"#"},1).t("Expiration date").t(" & ").e("a",{href:"#"},1).t("Security code");f.r(c,()=>n);const x={};n._=h(function(a,i,s,r,T,C){y(g,{...a,renderBody:e=>{e.n(v,r),e.n(B,r)}},i,s,"0")},{t:c,i:!0},x);n.Component=b(x,n._);const R=`<ebay-inline-notice ...input>
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
`,q={title:"notices & tips/ebay-inline-notice",component:g,parameters:{docs:{description:{component:w}}},argTypes:{status:{table:{defaultValue:{summary:"attention"}},description:"The icon used and status of the noptice",options:["attention","confirmation","information"],type:"select"},icon:{table:{defaultValue:{summary:"default"}},options:["default","none"],type:"select",description:'matches whatever is specified by the "status", or if none hides icon'},a11yText:{description:"adding description for the notice for a11y users"}}},o=S(n,R);var m,l,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const F=["Default"];export{o as Default,F as __namedExportsOrder,q as default};
