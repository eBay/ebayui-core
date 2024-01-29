import{t as M}from"./index-iqhZMf16.js";import{b as C,a as Z}from"./utils-NX-dnf4r.js";import{t as g,r as k,b as T,d as x}from"./registry-zqrnEiYK.js";/* empty css             */import{_ as tt}from"./index-ZhNkRMuN.js";import{_ as c}from"./render-tag-_0PNNh6Y.js";import{_ as i}from"./v-element-BABk39ab.js";import{_ as l}from"./self-iterator-6yU_KG2T.js";import{_ as et}from"./index-VMMXlPq4.js";import{_ as ot}from"./index-opp8Qyw0.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";import"./index-zgZrJxNG.js";import"./index-dCAZr4YS.js";import"./index-PAD5b3ff.js";import"./dynamic-tag-4Gch17f1.js";import"./index-0sOjhOVp.js";/* empty css             */import"./index-XjwwBzg5.js";const nt=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;class it extends Marko.Component{onCreate(){this.state={dismissed:!1}}onInput(n){this.state={dismissed:n.dismissed||!1}}onDismiss(){this.state.dismissed=!0,this.emit("dismiss")}}const I="OCFpWpE+",m=g(I),w=m;k.r(I,()=>m);const Q=it;m._=T(function(o,n,a,e,y,S){const{a11yRoleDescription:t="Notice",status:h,class:X,...Y}=o;y.dismissed||c(tt,{...Y,status:h,role:"region",prefixClass:"section-notice",type:"section",mainRoot:"span",a11yRoleDescription:t,class:[h==="education"&&"section-notice--large-icon",X]},n,a,"0",[["dismiss","onDismiss",!1]])},{t:I},Q);m.Component=x(Q,m._);const B="VQ1tlugC",d=g(B),at=i("div",null,"1",null,1,0).t("Notice title"),st=i("p",null,"3",null,2,0).e("strong",null,"4",null,1,0).t("Error:").t(" Please take another look at the following:"),rt=i("p",null,"5",null,5,0).e("a",{href:"#"},"6",null,1,0).t("Card number").t(", ").e("a",{href:"#"},"7",null,1,0).t("Expiration date").t(" & ").e("a",{href:"#"},"8",null,1,0).t("Security code");k.r(B,()=>d);const U={};d._=T(function(o,n,a,e,y,S){c(w,{...o,title:{renderBody:t=>{t.n(at,e)},[Symbol.iterator]:l},footer:{renderBody:t=>{c(et,{renderBody:h=>{h.t("Footer",e)}},t,a,"2")},[Symbol.iterator]:l},renderBody:t=>{t.n(st,e),t.n(rt,e)}},n,a,"0")},{t:B,i:!0},U);d.Component=x(U,d._);const ct=`import type { Input as SectionNoticeInput } from "<ebay-section-notice>"
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
`,E="gIBlDN2z",p=g(E),lt=i("div",null,"1",null,1,0).t("Notice title"),mt=i("p",null,"2",null,1,0).t("The eBay vault will store items for you."),dt=i("p",null,"3",null,1,0).e("a",{href:"#"},"4",null,1,0).t("Try it");k.r(E,()=>p);const G={};p._=T(function(o,n,a,e,y,S){c(w,{...o,educationIcon:ot,a11yText:"ebay vault",title:{renderBody:t=>{t.n(lt,e)},[Symbol.iterator]:l},renderBody:t=>{t.n(mt,e),t.n(dt,e)}},n,a,"0")},{t:E,i:!0},G);p.Component=x(G,p._);const pt=`import TheVaultIcon from '<ebay-the-ebay-vault-24-icon>'
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
`,D="9qmcJqBD",u=g(D),ut=i("div",null,"1",null,1,0).t("Notice title"),yt=i("p",null,"2",null,2,0).e("strong",null,"3",null,1,0).t("Error:").t(" Please take another look at the following:"),ht=i("p",null,"4",null,5,0).e("a",{href:"#"},"5",null,1,0).t("Card number").t(", ").e("a",{href:"#"},"6",null,1,0).t("Expiration date").t(" & ").e("a",{href:"#"},"7",null,1,0).t("Security code");k.r(D,()=>u);const H={};u._=T(function(o,n,a,e,y,S){c(w,{...o,title:{renderBody:t=>{t.n(ut,e)},[Symbol.iterator]:l},cta:{href:"https://www.ebay.com",renderBody:t=>{t.t("Link here",e)},[Symbol.iterator]:l},renderBody:t=>{t.n(yt,e),t.n(ht,e)}},n,a,"0",[["dismiss","emit",!1,["dismiss"]]])},{t:D},H);u.Component=x(H,u._);const bt=`import type { Input as SectionNoticeInput } from "<ebay-section-notice>"
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
`,K=o=>({input:Z(o)}),At={title:"notices & tips/ebay-section-notice",component:w,parameters:{docs:{description:{component:nt}}},argTypes:{status:{table:{defaultValue:{summary:"attention"}},description:"The icon used and status of the notice",options:["attention","confirmation","information","education"],type:"select"},icon:{table:{defaultValue:{summary:"default"}},options:["default","none"],type:"select",description:'matches whatever is specified by the "status", or if none hides icon'},educationIcon:{name:"@educationIcon",description:"For status education, an `<ebay-[name]-icon>` to show as the button's icon",table:{category:"Education tags",defaultValue:{summary:"ebay-lightbulb-24-icon"}}},prominent:{description:"For status education, whether notice on the page should be prominent",type:"boolean",defaultValue:{summary:"false"},table:{category:"Education tags"}},a11yText:{description:"adding description for the notice for a11y users"},a11yRoleDescription:{table:{defaultValue:{summary:"Notice"}},description:"The roledescription to announce the component type for a11y users."},dismissed:{description:"whether or not the notice is dismissed",type:"boolean"},title:{name:"@title",description:"The title content to be displayed.",table:{category:"@attribute tags"}},footer:{name:"@footer",description:"The footer content to be displayed. Used to show a CTA button generally",table:{category:"@attribute tags"}},cta:{name:"@cta",description:"This allows the addition of a main CTA link",table:{category:"@attribute tags"}},onDismiss:{action:"on-dismiss",description:"Triggered on notice dismiss",table:{category:"Events",defaultValue:{summary:""}}}}},s=K.bind({});s.args={a11yText:"attention",status:"attention",a11yRoleDescription:"Notice",renderBody:"<p>Section notice info. Things you need to know.</p>"};s.parameters={docs:{source:{code:M("ebay-section-notice",s.args)}}};const r=K.bind({});r.args={a11yText:"attention",status:"attention",a11yRoleDescription:"Notice",title:{renderBody:"Section notice title"},renderBody:"<p>Section notice info. Things you need to know.</p>"};r.parameters={docs:{source:{code:M("ebay-section-notice",r.args)}}};const b=C(d,ct,{a11yText:"attention",status:"attention"}),f=C(u,bt,{a11yText:"information",a11yIconText:"",a11yDismissText:"Dismiss Notice",status:"information",icon:null}),_=C(p,pt,{a11yText:"education",status:"education",prominent:!1});var $,N,v;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(v=(N=s.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var R,V,W;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(W=(V=r.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var A,F,P;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`buildExtensionTemplate(withAction, withActionCode, {
  a11yText: "attention",
  status: "attention"
})`,...(P=(F=b.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var L,q,z;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`buildExtensionTemplate(withDismiss, withDismissCode, {
  a11yText: "information",
  a11yIconText: "",
  a11yDismissText: "Dismiss Notice",
  status: "information",
  icon: null
})`,...(z=(q=f.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var O,j,J;_.parameters={..._.parameters,docs:{...(O=_.parameters)==null?void 0:O.docs,source:{originalSource:`buildExtensionTemplate(withIcon, withIconCode, {
  a11yText: "education",
  status: "education",
  prominent: false
})`,...(J=(j=_.parameters)==null?void 0:j.docs)==null?void 0:J.source}}};const Ft=["Basic","WithTitle","WithAction","WithDismiss","WithEducationIcon"];export{s as Basic,b as WithAction,f as WithDismiss,_ as WithEducationIcon,r as WithTitle,Ft as __namedExportsOrder,At as default};
