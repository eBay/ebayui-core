import{t as Q}from"./index-CCz6reEH.js";import{b as I,a as tt}from"./utils-DWCsNc5l.js";import{t as _,r as k,b as T,d as x}from"./registry-ZV7By7ZP.js";/* empty css             */import{_ as et}from"./index-DLcyrLTy.js";import{_ as c}from"./render-tag-Buaq4gMc.js";import{_ as i}from"./const-element-BsegXDZ8.js";import{i as v,a as d}from"./attr-tag-DphMQldM.js";import{_ as ot}from"./index-Ua3GrIQd.js";import{_ as nt}from"./index-eL1FBXX1.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-CrQkrzO8.js";import"./index-Z5IdgrQn.js";import"./index-D7M5CzEP.js";import"./dynamic-tag-Dub0dLVC.js";import"./index-BazW8NNv.js";/* empty css             */import"./index-blmbJU0z.js";const it=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;class at extends Marko.Component{onCreate(){this.state={dismissed:!1}}onInput(n){this.state={dismissed:n.dismissed||!1}}onDismiss(){this.state.dismissed=!0,this.emit("dismiss")}}const E="OCFpWpE+",m=_(E),w=m;k.r(E,()=>m);const U=at;m._=T(function(o,n,a,e,y,C){const{a11yRoleDescription:t="Notice",status:h,class:Y,...Z}=o;y.dismissed||c(et,{...Z,status:h,role:"region",prefixClass:"section-notice",type:"section",mainRoot:"span",a11yRoleDescription:t,class:[h==="education"&&"section-notice--large-icon",Y]},n,a,"0",[["dismiss","onDismiss",!1]])},{t:E},U);m.Component=x(U,m._);const D="VQ1tlugC",p=_(D),st=i("div",null,1).t("Notice title"),rt=i("p",null,2).e("strong",null,1).t("Error:").t(" Please take another look at the following:"),ct=i("p",null,5).e("a",{href:"#"},1).t("Card number").t(", ").e("a",{href:"#"},1).t("Expiration date").t(" & ").e("a",{href:"#"},1).t("Security code");k.r(D,()=>p);const G={};p._=T(function(o,n,a,e,y,C){c(w,v(()=>(d("title",{renderBody:t=>{t.n(st,e)}}),d("footer",{renderBody:t=>{c(ot,{renderBody:h=>{h.t("Footer",e)}},t,a,"2")}}),t=>{t.n(rt,e),t.n(ct,e)}),{...o,title:void 0,footer:void 0}),n,a,"0")},{t:D,i:!0},G);p.Component=x(G,p._);const dt=`import type { Input as SectionNoticeInput } from "<ebay-section-notice>"
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
`,S="gIBlDN2z",l=_(S),mt=i("div",null,1).t("Notice title"),pt=i("p",null,1).t("The eBay vault will store items for you."),lt=i("p",null,1).e("a",{href:"#"},1).t("Try it");k.r(S,()=>l);const H={};l._=T(function(o,n,a,e,y,C){c(w,v(()=>(d("title",{renderBody:t=>{t.n(mt,e)}}),t=>{t.n(pt,e),t.n(lt,e)}),{...o,educationIcon:nt,a11yText:"ebay vault",title:void 0}),n,a,"0")},{t:S,i:!0},H);l.Component=x(H,l._);const ut=`import TheVaultIcon from '<ebay-the-ebay-vault-24-icon>'
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
`,B="9qmcJqBD",u=_(B),yt=i("div",null,1).t("Notice title"),ht=i("p",null,2).e("strong",null,1).t("Error:").t(" Please take another look at the following:"),ft=i("p",null,5).e("a",{href:"#"},1).t("Card number").t(", ").e("a",{href:"#"},1).t("Expiration date").t(" & ").e("a",{href:"#"},1).t("Security code");k.r(B,()=>u);const K={};u._=T(function(o,n,a,e,y,C){c(w,v(()=>(d("title",{renderBody:t=>{t.n(yt,e)}}),d("cta",{href:"https://www.ebay.com",renderBody:t=>{t.t("Link here",e)}}),t=>{t.n(ht,e),t.n(ft,e)}),{...o,title:void 0,cta:void 0}),n,a,"0",[["dismiss","emit",!1,["dismiss"]]])},{t:B},K);u.Component=x(K,u._);const bt=`import type { Input as SectionNoticeInput } from "<ebay-section-notice>"
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
`,X=o=>({input:tt(o)}),Ft={title:"notices & tips/ebay-section-notice",component:w,parameters:{docs:{description:{component:it}}},argTypes:{status:{table:{defaultValue:{summary:"attention"}},description:"The icon used and status of the notice",options:["attention","confirmation","information","education"],type:"select"},icon:{table:{defaultValue:{summary:"default"}},options:["default","none"],type:"select",description:'matches whatever is specified by the "status", or if none hides icon'},educationIcon:{name:"@educationIcon",description:"For status education, an `<ebay-[name]-icon>` to show as the button's icon",table:{category:"Education tags",defaultValue:{summary:"ebay-lightbulb-24-icon"}}},prominent:{description:"For status education, whether notice on the page should be prominent",type:"boolean",defaultValue:{summary:"false"},table:{category:"Education tags"}},a11yText:{description:"adding description for the notice for a11y users"},a11yRoleDescription:{table:{defaultValue:{summary:"Notice"}},description:"The roledescription to announce the component type for a11y users."},dismissed:{description:"whether or not the notice is dismissed",type:"boolean"},title:{name:"@title",description:"The title content to be displayed.",table:{category:"@attribute tags"}},footer:{name:"@footer",description:"The footer content to be displayed. Used to show a CTA button generally",table:{category:"@attribute tags"}},cta:{name:"@cta",description:"This allows the addition of a main CTA link",table:{category:"@attribute tags"}},onDismiss:{action:"on-dismiss",description:"Triggered on notice dismiss",table:{category:"Events",defaultValue:{summary:""}}}}},s=X.bind({});s.args={a11yText:"attention",status:"attention",a11yRoleDescription:"Notice",renderBody:"<p>Section notice info. Things you need to know.</p>"};s.parameters={docs:{source:{code:Q("ebay-section-notice",s.args)}}};const r=X.bind({});r.args={a11yText:"attention",status:"attention",a11yRoleDescription:"Notice",title:{renderBody:"Section notice title"},renderBody:"<p>Section notice info. Things you need to know.</p>"};r.parameters={docs:{source:{code:Q("ebay-section-notice",r.args)}}};const f=I(p,dt,{a11yText:"attention",status:"attention"}),b=I(u,bt,{a11yText:"information",a11yIconText:"",a11yDismissText:"Dismiss Notice",status:"information",icon:null}),g=I(l,ut,{a11yText:"education",status:"education",prominent:!1});var $,N,R;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(R=(N=s.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var V,W,A;r.parameters={...r.parameters,docs:{...(V=r.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(A=(W=r.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var F,P,L;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`buildExtensionTemplate(withAction, withActionCode, {
  a11yText: "attention",
  status: "attention"
})`,...(L=(P=f.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var q,z,O;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`buildExtensionTemplate(withDismiss, withDismissCode, {
  a11yText: "information",
  a11yIconText: "",
  a11yDismissText: "Dismiss Notice",
  status: "information",
  icon: null
})`,...(O=(z=b.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var j,J,M;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`buildExtensionTemplate(withIcon, withIconCode, {
  a11yText: "education",
  status: "education",
  prominent: false
})`,...(M=(J=g.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};const Pt=["Basic","WithTitle","WithAction","WithDismiss","WithEducationIcon"];export{s as Basic,f as WithAction,b as WithDismiss,g as WithEducationIcon,r as WithTitle,Pt as __namedExportsOrder,Ft as default};
