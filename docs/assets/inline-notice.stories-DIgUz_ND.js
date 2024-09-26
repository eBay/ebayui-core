import{b as D}from"./utils-DWCsNc5l.js";import{t as u,r as f,b as h,c as b}from"./registry-CtNeIPU8.js";import{_ as $}from"./index-Cu-kbuRk.js";import{_}from"./render-tag-mtfFSHEK.js";import{_ as y}from"./const-element-D4l_3TxL.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-CVm234Yh.js";import"./index-B6qYX52F.js";/* empty css             */import"./index-TT4a-3DX.js";import"./dynamic-tag-HMZVE1pc.js";import"./index-Ca3E2DLc.js";import"./index-CHlJc7fe.js";/* empty css                    *//* empty css               *//* empty css             */import"./index-BwvkvsZu.js";import"./index-CbT4wDAv.js";const w=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,p="PgT_Aig",e=u(p);f.r(p,()=>e);const g={};e._=h(function(a,i,r,s,T,x){const{status:t="attention",class:C,...E}=a;_($,{...E,class:[`inline-notice--${t}`,C],status:t,prefixClass:"inline-notice",root:"div",headerRoot:"span",mainRoot:"span",noA11yLabel:!0},i,r,"0")},{t:p,i:!0},g);e.Component=b(g,e._);const m="NtNmtcfj",n=u(m),S=y("p",null,2).e("strong",null,1).t("Error:").t(" Please take another look at the following:"),v=y("p",null,5).e("a",{href:"#"},1).t("Card number").t(", ").e("a",{href:"#"},1).t("Expiration date").t(" & ").e("a",{href:"#"},1).t("Security code");f.r(m,()=>n);const k={};n._=h(function(a,i,r,s,T,x){_(e,{...a,renderBody:t=>{t.n(S,s),t.n(v,s)}},i,r,"0")},{t:m,i:!0},k);n.Component=b(k,n._);const B=`<ebay-inline-notice ...input>
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
`,W={title:"notices & tips/ebay-inline-notice",component:e,parameters:{docs:{description:{component:w}}},argTypes:{status:{table:{defaultValue:{summary:"attention"}},description:"The icon used and status of the noptice",options:["attention","confirmation","information"],type:"select"},icon:{table:{defaultValue:{summary:"default"}},options:["default","none"],type:"select",description:'matches whatever is specified by the "status", or if none hides icon'},a11yText:{description:"adding description for the notice for a11y users"}}},o=D(n,B);var c,l,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const X=["Default"];export{o as Default,X as __namedExportsOrder,W as default};
