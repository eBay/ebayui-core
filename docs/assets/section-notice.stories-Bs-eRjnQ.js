import{t as P}from"./index-CCz6reEH.js";import{b as L,a as U}from"./utils-DWCsNc5l.js";import{t as b,r as g,b as _,d as k}from"./registry-DcejNBCz.js";/* empty css             */import{_ as G}from"./index-BOWzVHUf.js";import{_ as y}from"./render-tag-BBOJ9dEX.js";import{_ as r}from"./const-element-Bq6J7aqh.js";import{i as q,a as h}from"./attr-tag-DphMQldM.js";import{_ as H}from"./index-C8RfWRsO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-CMUTPlxh.js";import"./index-CMkz4cmR.js";import"./index-BZTMgRik.js";import"./dynamic-tag-CH7Ufq3Q.js";import"./index-DRqbb5JY.js";import"./index-Bm7UghsY.js";/* empty css                    *//* empty css               *//* empty css             */import"./index-BIEPBgsb.js";import"./index-blmbJU0z.js";const K=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;class X extends Marko.Component{onCreate(){this.state={dismissed:!1}}onInput(n){this.state={dismissed:n.dismissed||!1}}onDismiss(){this.state.dismissed=!0,this.emit("dismiss")}}const T="OCFpWpE+",c=b(T),x=c;g.r(T,()=>c);const O=X;c._=_(function(o,n,a,e,f,D){const{a11yRoleDescription:t="Notice",status:d,class:M,...Q}=o;f.dismissed||y(G,{...Q,status:d,role:"region",prefixClass:"section-notice",type:"section",mainRoot:"span",a11yRoleDescription:t,class:[d==="education"&&"section-notice--large-icon",M]},n,a,"0",[["dismiss","onDismiss",!1]])},{t:T},O);c.Component=k(O,c._);const w="VQ1tlugC",m=b(w),Y=r("div",null,1).t("Notice title"),Z=r("p",null,2).e("strong",null,1).t("Error:").t(" Please take another look at the following:"),tt=r("p",null,5).e("a",{href:"#"},1).t("Card number").t(", ").e("a",{href:"#"},1).t("Expiration date").t(" & ").e("a",{href:"#"},1).t("Security code");g.r(w,()=>m);const j={};m._=_(function(o,n,a,e,f,D){y(x,q(()=>(h("title",{renderBody:t=>{t.n(Y,e)}}),h("footer",{renderBody:t=>{y(H,{renderBody:d=>{d.t("Footer",e)}},t,a,"2")}}),t=>{t.n(Z,e),t.n(tt,e)}),{...o,title:void 0,footer:void 0}),n,a,"0")},{t:w,i:!0},j);m.Component=k(j,m._);const et=`import type { Input as SectionNoticeInput } from "<ebay-section-notice>"
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
`,C="9qmcJqBD",p=b(C),ot=r("div",null,1).t("Notice title"),nt=r("p",null,2).e("strong",null,1).t("Error:").t(" Please take another look at the following:"),it=r("p",null,5).e("a",{href:"#"},1).t("Card number").t(", ").e("a",{href:"#"},1).t("Expiration date").t(" & ").e("a",{href:"#"},1).t("Security code");g.r(C,()=>p);const z={};p._=_(function(o,n,a,e,f,D){y(x,q(()=>(h("title",{renderBody:t=>{t.n(ot,e)}}),h("cta",{href:"https://www.ebay.com",renderBody:t=>{t.t("Link here",e)}}),t=>{t.n(nt,e),t.n(it,e)}),{...o,title:void 0,cta:void 0}),n,a,"0",[["dismiss","emit",!1,["dismiss"]]])},{t:C},z);p.Component=k(z,p._);const st=`import type { Input as SectionNoticeInput } from "<ebay-section-notice>"
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
`,J=o=>({input:U(o)}),Bt={title:"notices & tips/ebay-section-notice",component:x,parameters:{docs:{description:{component:K}}},argTypes:{status:{table:{defaultValue:{summary:"attention"}},description:"The icon used and status of the notice",options:["attention","confirmation","information"],type:"select"},icon:{table:{defaultValue:{summary:"default"}},options:["default","none"],type:"select",description:'matches whatever is specified by the "status", or if none hides icon'},a11yText:{description:"adding description for the notice for a11y users"},a11yRoleDescription:{table:{defaultValue:{summary:"Notice"}},description:"The roledescription to announce the component type for a11y users."},dismissed:{description:"whether or not the notice is dismissed",type:"boolean"},title:{name:"@title",description:"The title content to be displayed.",table:{category:"@attribute tags"}},footer:{name:"@footer",description:"The footer content to be displayed. Used to show a CTA button generally",table:{category:"@attribute tags"}},cta:{name:"@cta",description:"This allows the addition of a main CTA link",table:{category:"@attribute tags"}},onDismiss:{action:"on-dismiss",description:"Triggered on notice dismiss",table:{category:"Events",defaultValue:{summary:""}}}}},i=J.bind({});i.args={a11yText:"attention",status:"attention",a11yRoleDescription:"Notice",renderBody:"<p>Section notice info. Things you need to know.</p>"};i.parameters={docs:{source:{code:P("ebay-section-notice",i.args)}}};const s=J.bind({});s.args={a11yText:"attention",status:"attention",a11yRoleDescription:"Notice",title:{renderBody:"Section notice title"},renderBody:"<p>Section notice info. Things you need to know.</p>"};s.parameters={docs:{source:{code:P("ebay-section-notice",s.args)}}};const l=L(m,et,{a11yText:"attention",status:"attention"}),u=L(p,st,{a11yText:"information",a11yIconText:"",a11yDismissText:"Dismiss Notice",status:"information",icon:null});var S,E,B;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(B=(E=i.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var N,v,I;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(I=(v=s.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var $,R,A;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`buildExtensionTemplate(withAction, withActionCode, {
  a11yText: "attention",
  status: "attention"
})`,...(A=(R=l.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var W,V,F;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`buildExtensionTemplate(withDismiss, withDismissCode, {
  a11yText: "information",
  a11yIconText: "",
  a11yDismissText: "Dismiss Notice",
  status: "information",
  icon: null
})`,...(F=(V=u.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};const Nt=["Basic","WithTitle","WithAction","WithDismiss"];export{i as Basic,l as WithAction,u as WithDismiss,s as WithTitle,Nt as __namedExportsOrder,Bt as default};
