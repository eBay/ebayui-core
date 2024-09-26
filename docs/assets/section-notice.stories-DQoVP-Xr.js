import{t as P}from"./index-CCz6reEH.js";import{b as M,a as O}from"./utils-DWCsNc5l.js";import{t as b,r as g,b as _,c as k}from"./registry-CtNeIPU8.js";/* empty css             */import{_ as U}from"./index-Cu-kbuRk.js";import{_ as y}from"./render-tag-mtfFSHEK.js";import{_ as c}from"./const-element-D4l_3TxL.js";import{i as F,a as h}from"./attr-tag-DphMQldM.js";import{_ as q}from"./index-qNYgSJLs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-CVm234Yh.js";import"./index-B6qYX52F.js";import"./index-TT4a-3DX.js";import"./dynamic-tag-HMZVE1pc.js";import"./index-Ca3E2DLc.js";import"./index-CHlJc7fe.js";/* empty css                    *//* empty css               *//* empty css             */import"./index-BwvkvsZu.js";import"./index-CbT4wDAv.js";const K=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;class Q extends Marko.Component{onCreate(){this.state={dismissed:!1}}onInput(n){this.state={dismissed:n.dismissed||!1}}onDismiss(){this.state.dismissed=!0,this.emit("dismiss")}}const T="paVhGEVc",a=b(T);g.r(T,()=>a);const J=Q;a._=_(function(o,n,r,e,f,S){const{a11yRoleDescription:t="Notice",status:d,class:G,...H}=o;f.dismissed||y(U,{...H,status:d,role:"region",prefixClass:"section-notice",type:"section",mainRoot:"span",a11yRoleDescription:t,class:[d==="education"&&"section-notice--large-icon",G]},n,r,"0",[["dismiss","onDismiss",!1]])},{t:T},J);a.Component=k(J,a._);const x="kvcMfNte",m=b(x),X=c("div",null,1).t("Notice title"),Y=c("p",null,2).e("strong",null,1).t("Error:").t(" Please take another look at the following:"),Z=c("p",null,5).e("a",{href:"#"},1).t("Card number").t(", ").e("a",{href:"#"},1).t("Expiration date").t(" & ").e("a",{href:"#"},1).t("Security code");g.r(x,()=>m);const L={};m._=_(function(o,n,r,e,f,S){y(a,F(()=>(h("title",{renderBody:t=>{t.n(X,e)}}),h("footer",{renderBody:t=>{y(q,{renderBody:d=>{d.t("Footer",e)}},t,r,"2")}}),t=>{t.n(Y,e),t.n(Z,e)}),{...o,title:void 0,footer:void 0}),n,r,"0")},{t:x,i:!0},L);m.Component=k(L,m._);const tt=`import type { Input as SectionNoticeInput } from "<ebay-section-notice>"
export type Input = SectionNoticeInput;

<ebay-section-notice ...input>
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
`,w="MJdk$HJm",p=b(w),et=c("div",null,1).t("Notice title"),ot=c("p",null,2).e("strong",null,1).t("Error:").t(" Please take another look at the following:"),nt=c("p",null,5).e("a",{href:"#"},1).t("Card number").t(", ").e("a",{href:"#"},1).t("Expiration date").t(" & ").e("a",{href:"#"},1).t("Security code");g.r(w,()=>p);const j={};p._=_(function(o,n,r,e,f,S){y(a,F(()=>(h("title",{renderBody:t=>{t.n(et,e)}}),h("cta",{href:"https://www.ebay.com",renderBody:t=>{t.t("Link here",e)}}),t=>{t.n(ot,e),t.n(nt,e)}),{...o,title:void 0,cta:void 0}),n,r,"0",[["dismiss","emit",!1,["dismiss"]]])},{t:w},j);p.Component=k(j,p._);const it=`import type { Input as SectionNoticeInput } from "<ebay-section-notice>"
export type Input = SectionNoticeInput;

class {}

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
`,z=o=>({input:O(o)}),Et={title:"notices & tips/ebay-section-notice",component:a,parameters:{docs:{description:{component:K}}},argTypes:{status:{table:{defaultValue:{summary:"attention"}},description:"The icon used and status of the notice",options:["attention","confirmation","information"],type:"select"},icon:{table:{defaultValue:{summary:"default"}},options:["default","none"],type:"select",description:'matches whatever is specified by the "status", or if none hides icon'},a11yText:{description:"adding description for the notice for a11y users"},a11yRoleDescription:{table:{defaultValue:{summary:"Notice"}},description:"The roledescription to announce the component type for a11y users."},dismissed:{description:"whether or not the notice is dismissed",type:"boolean"},title:{name:"@title",description:"The title content to be displayed.",table:{category:"@attribute tags"}},footer:{name:"@footer",description:"The footer content to be displayed. Used to show a CTA button generally",table:{category:"@attribute tags"}},cta:{name:"@cta",description:"This allows the addition of a main CTA link",table:{category:"@attribute tags"}},onDismiss:{action:"on-dismiss",description:"Triggered on notice dismiss",table:{category:"Events",defaultValue:{summary:""}}}}},i=z.bind({});i.args={a11yText:"attention",status:"attention",a11yRoleDescription:"Notice",renderBody:"<p>Section notice info. Things you need to know.</p>"};i.parameters={docs:{source:{code:P("ebay-section-notice",i.args)}}};const s=z.bind({});s.args={a11yText:"attention",status:"attention",a11yRoleDescription:"Notice",title:{renderBody:"Section notice title"},renderBody:"<p>Section notice info. Things you need to know.</p>"};s.parameters={docs:{source:{code:P("ebay-section-notice",s.args)}}};const l=M(m,tt,{a11yText:"attention",status:"attention"}),u=M(p,it,{a11yText:"information",a11yIconText:"",a11yDismissText:"Dismiss Notice",status:"information",icon:null});var C,D,E;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(E=(D=i.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var N,v,B;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(B=(v=s.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var $,I,R;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`buildExtensionTemplate(withAction, withActionCode, {
  a11yText: "attention",
  status: "attention"
})`,...(R=(I=l.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var A,V,W;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`buildExtensionTemplate(withDismiss, withDismissCode, {
  a11yText: "information",
  a11yIconText: "",
  a11yDismissText: "Dismiss Notice",
  status: "information",
  icon: null
})`,...(W=(V=u.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const Nt=["Basic","WithTitle","WithAction","WithDismiss"];export{i as Basic,l as WithAction,u as WithDismiss,s as WithTitle,Nt as __namedExportsOrder,Et as default};
