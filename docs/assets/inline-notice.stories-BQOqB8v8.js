import{b as $}from"./utils-DWCsNc5l.js";import{t as u,r as f,b as h,d as b}from"./registry-B-klnak9.js";import{_ as w}from"./index-CDSZsPQJ.js";import{_}from"./render-tag-BBOJ9dEX.js";import{_ as y}from"./const-element-Usj7mXQw.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-stgrgPA5.js";import"./index-BJEuXy1Q.js";/* empty css             */import"./index-DGzRQIaV.js";import"./dynamic-tag-DQCvkDdb.js";import"./index-C2nZXLsq.js";import"./index-PNIKNjCK.js";/* empty css                    *//* empty css               *//* empty css             */import"./index-B6IacUrT.js";import"./index-blmbJU0z.js";const S=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,p="PgT_Aig",t=u(p),g=t;f.r(p,()=>t);const k={};t._=h(function(a,i,r,s,x,C){const{status:e="attention",class:E,...D}=a;_(w,{...D,class:[`inline-notice--${e}`,E],status:e,prefixClass:"inline-notice",root:"div",headerRoot:"span",mainRoot:"span",noA11yLabel:!0},i,r,"0")},{t:p,i:!0},k);t.Component=b(k,t._);const m="NtNmtcfj",n=u(m),v=y("p",null,2).e("strong",null,1).t("Error:").t(" Please take another look at the following:"),B=y("p",null,5).e("a",{href:"#"},1).t("Card number").t(", ").e("a",{href:"#"},1).t("Expiration date").t(" & ").e("a",{href:"#"},1).t("Security code");f.r(m,()=>n);const T={};n._=h(function(a,i,r,s,x,C){_(g,{...a,renderBody:e=>{e.n(v,s),e.n(B,s)}},i,r,"0")},{t:m,i:!0},T);n.Component=b(T,n._);const N=`<ebay-inline-notice ...input>
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
`,X={title:"notices & tips/ebay-inline-notice",component:g,parameters:{docs:{description:{component:S}}},argTypes:{status:{table:{defaultValue:{summary:"attention"}},description:"The icon used and status of the noptice",options:["attention","confirmation","information"],type:"select"},icon:{table:{defaultValue:{summary:"default"}},options:["default","none"],type:"select",description:'matches whatever is specified by the "status", or if none hides icon'},a11yText:{description:"adding description for the notice for a11y users"}}},o=$(n,N);var c,l,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const Y=["Default"];export{o as Default,Y as __namedExportsOrder,X as default};
