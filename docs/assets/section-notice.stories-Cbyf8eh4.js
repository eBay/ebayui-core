import{t as F}from"./index-CCz6reEH.js";import{b as L,a as U}from"./utils-DWCsNc5l.js";import{t as b,r as g,b as _,d as k}from"./registry-B-klnak9.js";/* empty css             */import{_ as q}from"./index-CDSZsPQJ.js";import{_ as y}from"./render-tag-BBOJ9dEX.js";import{_ as r}from"./const-element-Usj7mXQw.js";import{i as M,a as h}from"./attr-tag-DphMQldM.js";import{_ as K}from"./index-B3D3pI-7.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-stgrgPA5.js";import"./index-BJEuXy1Q.js";import"./index-DGzRQIaV.js";import"./dynamic-tag-DQCvkDdb.js";import"./index-C2nZXLsq.js";import"./index-PNIKNjCK.js";/* empty css                    *//* empty css               *//* empty css             */import"./index-B6IacUrT.js";import"./index-blmbJU0z.js";const Q=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;class X extends Marko.Component{onCreate(){this.state={dismissed:!1}}onInput(n){this.state={dismissed:n.dismissed||!1}}onDismiss(){this.state.dismissed=!0,this.emit("dismiss")}}const T="paVhGEVc",c=b(T),x=c;g.r(T,()=>c);const J=X;c._=_(function(o,n,a,e,f,S){const{a11yRoleDescription:t="Notice",status:d,class:H,...O}=o;f.dismissed||y(q,{...O,status:d,role:"region",prefixClass:"section-notice",type:"section",mainRoot:"span",a11yRoleDescription:t,class:[d==="education"&&"section-notice--large-icon",H]},n,a,"0",[["dismiss","onDismiss",!1]])},{t:T},J);c.Component=k(J,c._);const w="kvcMfNte",m=b(w),Y=r("div",null,1).t("Notice title"),Z=r("p",null,2).e("strong",null,1).t("Error:").t(" Please take another look at the following:"),tt=r("p",null,5).e("a",{href:"#"},1).t("Card number").t(", ").e("a",{href:"#"},1).t("Expiration date").t(" & ").e("a",{href:"#"},1).t("Security code");g.r(w,()=>m);const j={};m._=_(function(o,n,a,e,f,S){y(x,M(()=>(h("title",{renderBody:t=>{t.n(Y,e)}}),h("footer",{renderBody:t=>{y(K,{renderBody:d=>{d.t("Footer",e)}},t,a,"2")}}),t=>{t.n(Z,e),t.n(tt,e)}),{...o,title:void 0,footer:void 0}),n,a,"0")},{t:w,i:!0},j);m.Component=k(j,m._);const et=`import type { Input as SectionNoticeInput } from "<ebay-section-notice>"
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
`,C="MJdk$HJm",p=b(C),ot=r("div",null,1).t("Notice title"),nt=r("p",null,2).e("strong",null,1).t("Error:").t(" Please take another look at the following:"),it=r("p",null,5).e("a",{href:"#"},1).t("Card number").t(", ").e("a",{href:"#"},1).t("Expiration date").t(" & ").e("a",{href:"#"},1).t("Security code");g.r(C,()=>p);const z={};p._=_(function(o,n,a,e,f,S){y(x,M(()=>(h("title",{renderBody:t=>{t.n(ot,e)}}),h("cta",{href:"https://www.ebay.com",renderBody:t=>{t.t("Link here",e)}}),t=>{t.n(nt,e),t.n(it,e)}),{...o,title:void 0,cta:void 0}),n,a,"0",[["dismiss","emit",!1,["dismiss"]]])},{t:C},z);p.Component=k(z,p._);const st=`import type { Input as SectionNoticeInput } from "<ebay-section-notice>"
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
`,G=o=>({input:U(o)}),Nt={title:"notices & tips/ebay-section-notice",component:x,parameters:{docs:{description:{component:Q}}},argTypes:{status:{table:{defaultValue:{summary:"attention"}},description:"The icon used and status of the notice",options:["attention","confirmation","information"],type:"select"},icon:{table:{defaultValue:{summary:"default"}},options:["default","none"],type:"select",description:'matches whatever is specified by the "status", or if none hides icon'},a11yText:{description:"adding description for the notice for a11y users"},a11yRoleDescription:{table:{defaultValue:{summary:"Notice"}},description:"The roledescription to announce the component type for a11y users."},dismissed:{description:"whether or not the notice is dismissed",type:"boolean"},title:{name:"@title",description:"The title content to be displayed.",table:{category:"@attribute tags"}},footer:{name:"@footer",description:"The footer content to be displayed. Used to show a CTA button generally",table:{category:"@attribute tags"}},cta:{name:"@cta",description:"This allows the addition of a main CTA link",table:{category:"@attribute tags"}},onDismiss:{action:"on-dismiss",description:"Triggered on notice dismiss",table:{category:"Events",defaultValue:{summary:""}}}}},i=G.bind({});i.args={a11yText:"attention",status:"attention",a11yRoleDescription:"Notice",renderBody:"<p>Section notice info. Things you need to know.</p>"};i.parameters={docs:{source:{code:F("ebay-section-notice",i.args)}}};const s=G.bind({});s.args={a11yText:"attention",status:"attention",a11yRoleDescription:"Notice",title:{renderBody:"Section notice title"},renderBody:"<p>Section notice info. Things you need to know.</p>"};s.parameters={docs:{source:{code:F("ebay-section-notice",s.args)}}};const l=L(m,et,{a11yText:"attention",status:"attention"}),u=L(p,st,{a11yText:"information",a11yIconText:"",a11yDismissText:"Dismiss Notice",status:"information",icon:null});var D,E,N;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(N=(E=i.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var v,B,$;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...($=(B=s.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var I,R,A;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`buildExtensionTemplate(withAction, withActionCode, {
  a11yText: "attention",
  status: "attention"
})`,...(A=(R=l.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var V,W,P;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`buildExtensionTemplate(withDismiss, withDismissCode, {
  a11yText: "information",
  a11yIconText: "",
  a11yDismissText: "Dismiss Notice",
  status: "information",
  icon: null
})`,...(P=(W=u.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};const vt=["Basic","WithTitle","WithAction","WithDismiss"];export{i as Basic,l as WithAction,u as WithDismiss,s as WithTitle,vt as __namedExportsOrder,Nt as default};
