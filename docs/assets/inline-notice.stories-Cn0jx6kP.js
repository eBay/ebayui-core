import{b as S}from"./utils-DWCsNc5l.js";import{t as u,r as f,b as h,d as b}from"./registry-DoALHDDx.js";import{_ as $}from"./index-CfPikhFy.js";import{_ as y}from"./render-tag-BBOJ9dEX.js";import{_}from"./const-element-_KqHYBBN.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-hXWCJ6_4.js";import"./index-mP6JM4Am.js";/* empty css             */import"./index-Ds_Wbn7W.js";import"./dynamic-tag-B1GLaPEW.js";import"./index-Cwd2w34Z.js";import"./index-BKx7n7_D.js";/* empty css                    *//* empty css               *//* empty css             */import"./index-BjnxPuxR.js";import"./index-blmbJU0z.js";const w=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,p="Aji/saGX",t=u(p),g=t;f.r(p,()=>t);const k={};t._=h(function(a,i,r,s,T,C){const{status:e="attention",class:E,...D}=a;y($,{...D,class:[`inline-notice--${e}`,E],status:e,prefixClass:"inline-notice",root:"div",headerRoot:"span",mainRoot:"span",noA11yLabel:!0},i,r,"0")},{t:p,i:!0},k);t.Component=b(k,t._);const m="sSzWYfNS",n=u(m),v=_("p",null,2).e("strong",null,1).t("Error:").t(" Please take another look at the following:"),B=_("p",null,5).e("a",{href:"#"},1).t("Card number").t(", ").e("a",{href:"#"},1).t("Expiration date").t(" & ").e("a",{href:"#"},1).t("Security code");f.r(m,()=>n);const x={};n._=h(function(a,i,r,s,T,C){y(g,{...a,renderBody:e=>{e.n(v,s),e.n(B,s)}},i,r,"0")},{t:m,i:!0},x);n.Component=b(x,n._);const R=`<ebay-inline-notice ...input>
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
`,Q={title:"notices & tips/ebay-inline-notice",component:g,parameters:{docs:{description:{component:w}}},argTypes:{status:{table:{defaultValue:{summary:"attention"}},description:"The icon used and status of the noptice",options:["attention","confirmation","information"],type:"select"},icon:{table:{defaultValue:{summary:"default"}},options:["default","none"],type:"select",description:'matches whatever is specified by the "status", or if none hides icon'},a11yText:{description:"adding description for the notice for a11y users"}}},o=S(n,R);var c,l,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const U=["Default"];export{o as Default,U as __namedExportsOrder,Q as default};
