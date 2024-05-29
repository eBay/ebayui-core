import{t as nt}from"./index-CCz6reEH.js";import{b as $,a as it}from"./utils-DWCsNc5l.js";import{t as _,r as b,b as f,d as h}from"./registry-DcejNBCz.js";/* empty css             */import{_ as at}from"./index-BOWzVHUf.js";import{_ as r}from"./render-tag-BBOJ9dEX.js";import{_ as a}from"./const-element-Bq6J7aqh.js";import{i as C,a as m}from"./attr-tag-DphMQldM.js";import{_ as st}from"./index-C8RfWRsO.js";import{_ as rt,a as ct}from"./index-CBJTBFbp.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-CMUTPlxh.js";import"./index-CMkz4cmR.js";import"./index-BZTMgRik.js";import"./dynamic-tag-CH7Ufq3Q.js";import"./index-DRqbb5JY.js";import"./index-Bm7UghsY.js";/* empty css                    *//* empty css               *//* empty css             */import"./index-BIEPBgsb.js";import"./index-blmbJU0z.js";const mt=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-education-notice
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

The \`<ebay-education-notice>\` is a tag used to create an education notice element. The notice requires a \`@title\` element and should be wrapped inside a \`<p>\` tag.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/notices-tips-ebay-education-notice)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/notices-tips-ebay-education-notice)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-education-notice/examples)
`;class pt extends Marko.Component{onCreate(){this.state={dismissed:!1}}onInput(n){this.state={dismissed:n.dismissed||!1}}onDismiss(){this.state.dismissed=!0,this.emit("dismiss")}}const w="K65lneZs",p=_(w),T=p;b.r(w,()=>p);const H=pt;p._=f(function(o,n,i,e,c,k){const{a11yRoleDescription:t="Notice",status:P,class:X,variant:tt,iconVariant:et,...ot}=o;c.dismissed||r(at,{...ot,role:"region",prefixClass:"education-notice",type:"section",mainRoot:"div",iconClass:[et==="prominent"&&"icon--prominent"],a11yRoleDescription:t,class:[tt==="prominent"&&"education-notice--prominent",X]},n,i,"0",[["dismiss","onDismiss",!1]])},{t:w},H);p.Component=h(H,p._);const E="1NvlvNch",d=_(E),dt=a("div",null,1).t("Educaiton title"),lt=a("p",null,1).t("Please take another look at the following");b.r(E,()=>d);const O={};d._=f(function(o,n,i,e,c,k){r(T,C(()=>(m("title",{renderBody:t=>{t.n(dt,e)}}),m("footer",{renderBody:t=>{r(st,{renderBody:P=>{P.t("Footer",e)}},t,i,"2")}}),t=>{t.n(lt,e)}),{...o,title:void 0,footer:void 0}),n,i,"0")},{t:E,i:!0},O);d.Component=h(O,d._);const ut=`import type { Input as EducationNoticeInput } from "<ebay-education-notice>";
export type Input = EducationNoticeInput;

<ebay-education-notice ...input>
    <@title>
        <div>Educaiton title</div>
    </@title>
    <@footer>
        <ebay-fake-link>Footer</ebay-fake-link>
    </@footer>
    <p>
        Please take another look at the following
    </p>
</ebay-education-notice>
`,D="v05KJACx",l=_(D),yt=a("div",null,1).t("Notice title"),_t=a("p",null,1).t("The eBay vault will store items for you.");b.r(D,()=>l);const Y={};l._=f(function(o,n,i,e,c,k){r(T,C(()=>(m("title",{renderBody:t=>{t.n(yt,e)}}),t=>{t.n(_t,e)}),{...o,a11yText:"ebay vault",variant:"prominent",educationIcon:rt,title:void 0}),n,i,"0")},{t:D,i:!0},Y);l.Component=h(Y,l._);const bt=`import vaultIcon from '<ebay-the-ebay-vault-24-icon>';

<ebay-education-notice ...input a11y-text="ebay vault" variant="prominent" education-icon=vaultIcon>
    <@title>
        <div>Notice title</div>
    </@title>
    <p>
        The eBay vault will store items for you.
    </p>
</ebay-education-notice>
`,N="6yZJjHet",u=_(N),ft=a("div",null,1).t("Notice title"),ht=a("p",null,1).t("The eBay vault will store items for you.");b.r(N,()=>u);const Q={};u._=f(function(o,n,i,e,c,k){r(T,C(()=>(m("title",{renderBody:t=>{t.n(ft,e)}}),t=>{t.n(ht,e)}),{...o,a11yText:"ebay vault",iconVariant:"prominent",educationIcon:ct,title:void 0}),n,i,"0")},{t:N,i:!0},Q);u.Component=h(Q,u._);const Tt=`import authGuarantee from '<ebay-authenticity-guarantee-24-icon>';

<ebay-education-notice ...input a11y-text="ebay vault" icon-variant="prominent" education-icon=authGuarantee>
    <@title>
        <div>Notice title</div>
    </@title>
    <p>
        The eBay vault will store items for you.
    </p>
</ebay-education-notice>
`,B="f8fMyYyL",y=_(B),kt=a("div",null,1).t("Notice title"),gt=a("p",null,1).t("The eBay vault will store items for you.");b.r(B,()=>y);const U={};y._=f(function(o,n,i,e,c,k){r(T,C(()=>(m("title",{renderBody:t=>{t.n(kt,e)}}),t=>{t.n(gt,e)}),{...o,title:void 0}),n,i,"0",[["dismiss","emit",!1,["dismiss"]]])},{t:B},U);y.Component=h(U,y._);const vt=`import type { Input as EducationNoticeInput } from "<ebay-education-notice>"
export type Input = EducationNoticeInput;

class {}

<ebay-education-notice ...input on-dismiss('emit', 'dismiss')>
    <@title>
        <div>Notice title</div>
    </@title>
    <p>
        The eBay vault will store items for you.
    </p>
</ebay-education-notice>
`,xt=o=>({input:it(o)}),At={title:"notices & tips/ebay-education-notice",component:T,parameters:{docs:{description:{component:mt}}},argTypes:{educationIcon:{name:"@educationIcon",description:"For status education, an `<ebay-[name]-icon>` to show as the button's icon",table:{defaultValue:{summary:"ebay-lightbulb-24-icon",category:"@attribute tags"}}},variant:{description:"Either none or prominent. If prominent, the notice will be more prominent",options:["none","prominent"],type:"select",defaultValue:{summary:"none"}},iconVariant:{description:"Either none or prominent. If prominent, the icon will be more prominent",options:["none","prominent"],type:"select",defaultValue:{summary:"none"}},a11yText:{description:"adding description for the notice for a11y users"},a11yRoleDescription:{table:{defaultValue:{summary:"Notice"}},description:"The roledescription to announce the component type for a11y users."},dismissed:{description:"whether or not the notice is dismissed",type:"boolean"},title:{name:"@title",description:"The title content to be displayed.",table:{required:!0,category:"@attribute tags"}},footer:{name:"@footer",description:"The footer content to be displayed. Contains a button or link.",table:{category:"@attribute tags"}},onDismiss:{action:"on-dismiss",description:"Triggered on notice dismiss",table:{category:"Events",defaultValue:{summary:""}}}}},s=xt.bind({});s.args={a11yText:"education",a11yRoleDescription:"Notice",title:{renderBody:"Education notice title"},renderBody:"<p>Education notice info. Things you need to know.</p>"};s.parameters={docs:{source:{code:nt("ebay-education-notice",s.args)}}};const g=$(l,bt,{a11yText:"attention",status:"attention"}),v=$(u,Tt,{a11yText:"attention",status:"attention"}),x=$(y,vt,{a11yText:"information",a11yIconText:"",a11yDismissText:"Dismiss Notice"}),I=$(d,ut,{a11yText:"information"});var F,S,R;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(R=(S=s.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var V,W,j;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`buildExtensionTemplate(ProminentTemplate, ProminentTemplateCode, {
  a11yText: "attention",
  status: "attention"
})`,...(j=(W=g.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var q,G,J;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`buildExtensionTemplate(ProminentIconTemplate, ProminentIconTemplateCode, {
  a11yText: "attention",
  status: "attention"
})`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,L,M;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`buildExtensionTemplate(withDismiss, withDismissCode, {
  a11yText: "information",
  a11yIconText: "",
  a11yDismissText: "Dismiss Notice"
})`,...(M=(L=x.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var Z,z,A;I.parameters={...I.parameters,docs:{...(Z=I.parameters)==null?void 0:Z.docs,source:{originalSource:`buildExtensionTemplate(withFooter, withFooterCode, {
  a11yText: "information"
})`,...(A=(z=I.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const Ht=["Default","Prominent","ProminentIcon","WithDismiss","WithFooter"];export{s as Default,g as Prominent,v as ProminentIcon,x as WithDismiss,I as WithFooter,Ht as __namedExportsOrder,At as default};
