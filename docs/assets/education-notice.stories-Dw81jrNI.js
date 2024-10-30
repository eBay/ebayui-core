import{t as ot}from"./index-CCz6reEH.js";import{b as I,a as nt}from"./utils-DWCsNc5l.js";import{t as _,r as b,b as f,c as h}from"./registry-CyswyZw5.js";/* empty css             */import{_ as it}from"./index-BGECcGBv.js";import{_ as c}from"./render-tag-CLyPs9qZ.js";import{_ as r}from"./const-element-B9h58Dwq.js";import{i as $,a as p}from"./attr-tag-DphMQldM.js";import{_ as at}from"./index-hxBxjry_.js";import{_ as rt,a as st}from"./index--4qVRjMM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-DildQKBF.js";import"./index-Bq4u441m.js";import"./index-Xqw4EkRf.js";import"./dynamic-tag-CXXozR29.js";import"./index-Dv-vWuE6.js";import"./index-D57sw9Ri.js";/* empty css                    *//* empty css               *//* empty css             */import"./index-s6KmHAjI.js";import"./index-CbT4wDAv.js";const ct=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;class mt extends Marko.Component{onCreate(){this.state={dismissed:!1}}onInput(n){this.state={dismissed:n.dismissed||!1}}onDismiss(){this.state.dismissed=!0,this.emit("dismiss")}}const w="ssatwdnc",a=_(w);b.r(w,()=>a);const O=mt;a._=f(function(o,n,i,e,m,T){const{a11yRoleDescription:t="Notice",status:N,class:Q,variant:Z,iconVariant:tt,...et}=o;m.dismissed||c(it,{...et,role:"region",prefixClass:"education-notice",type:"section",mainRoot:"div",iconClass:[tt==="prominent"&&"icon--prominent"],a11yRoleDescription:t,class:[Z==="prominent"&&"education-notice--prominent",Q]},n,i,"0",[["dismiss","onDismiss",!1]])},{t:w},O);a.Component=h(O,a._);const E="KjYGUYXk",d=_(E),pt=r("div",null,1).t("Educaiton title"),dt=r("p",null,1).t("Please take another look at the following");b.r(E,()=>d);const A={};d._=f(function(o,n,i,e,m,T){c(a,$(()=>(p("title",{renderBody:t=>{t.n(pt,e)}}),p("footer",{renderBody:t=>{c(at,{renderBody:N=>{N.t("Footer",e)}},t,i,"2")}}),t=>{t.n(dt,e)}),{...o,title:void 0,footer:void 0}),n,i,"0")},{t:E,i:!0},A);d.Component=h(A,d._);const lt=`import type { Input as EducationNoticeInput } from "<ebay-education-notice>";
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
`,C="BMBIjlSj",l=_(C),ut=r("div",null,1).t("Notice title"),yt=r("p",null,1).t("The eBay vault will store items for you.");b.r(C,()=>l);const H={};l._=f(function(o,n,i,e,m,T){c(a,$(()=>(p("title",{renderBody:t=>{t.n(ut,e)}}),t=>{t.n(yt,e)}),{...o,a11yText:"ebay vault",variant:"prominent",educationIcon:rt,title:void 0}),n,i,"0")},{t:C,i:!0},H);l.Component=h(H,l._);const _t=`import vaultIcon from '<ebay-the-ebay-vault-24-icon>';

<ebay-education-notice ...input a11y-text="ebay vault" variant="prominent" education-icon=vaultIcon>
    <@title>
        <div>Notice title</div>
    </@title>
    <p>
        The eBay vault will store items for you.
    </p>
</ebay-education-notice>
`,B="EMcqXMdm",u=_(B),bt=r("div",null,1).t("Notice title"),ft=r("p",null,1).t("The eBay vault will store items for you.");b.r(B,()=>u);const J={};u._=f(function(o,n,i,e,m,T){c(a,$(()=>(p("title",{renderBody:t=>{t.n(bt,e)}}),t=>{t.n(ft,e)}),{...o,a11yText:"ebay vault",iconVariant:"prominent",educationIcon:st,title:void 0}),n,i,"0")},{t:B,i:!0},J);u.Component=h(J,u._);const ht=`import authGuarantee from '<ebay-authenticity-guarantee-24-icon>';

<ebay-education-notice ...input a11y-text="ebay vault" icon-variant="prominent" education-icon=authGuarantee>
    <@title>
        <div>Notice title</div>
    </@title>
    <p>
        The eBay vault will store items for you.
    </p>
</ebay-education-notice>
`,D="ygrtUhEg",y=_(D),Tt=r("div",null,1).t("Notice title"),gt=r("p",null,1).t("The eBay vault will store items for you.");b.r(D,()=>y);const L={};y._=f(function(o,n,i,e,m,T){c(a,$(()=>(p("title",{renderBody:t=>{t.n(Tt,e)}}),t=>{t.n(gt,e)}),{...o,title:void 0}),n,i,"0",[["dismiss","emit",!1,["dismiss"]]])},{t:D},L);y.Component=h(L,y._);const kt=`import type { Input as EducationNoticeInput } from "<ebay-education-notice>"
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
`,vt=o=>({input:nt(o)}),Kt={title:"notices & tips/ebay-education-notice",component:a,parameters:{docs:{description:{component:ct}}},argTypes:{educationIcon:{name:"@educationIcon",description:"For status education, an `<ebay-[name]-icon>` to show as the button's icon",table:{defaultValue:{summary:"ebay-lightbulb-24-icon",category:"@attribute tags"}}},variant:{description:"Either none or prominent. If prominent, the notice will be more prominent",options:["none","prominent"],type:"select",defaultValue:{summary:"none"}},iconVariant:{description:"Either none or prominent. If prominent, the icon will be more prominent",options:["none","prominent"],type:"select",defaultValue:{summary:"none"}},a11yText:{description:"adding description for the notice for a11y users"},a11yRoleDescription:{table:{defaultValue:{summary:"Notice"}},description:"The roledescription to announce the component type for a11y users."},dismissed:{description:"whether or not the notice is dismissed",type:"boolean"},title:{name:"@title",description:"The title content to be displayed.",table:{required:!0,category:"@attribute tags"}},footer:{name:"@footer",description:"The footer content to be displayed. Contains a button or link.",table:{category:"@attribute tags"}},onDismiss:{action:"on-dismiss",description:"Triggered on notice dismiss",table:{category:"Events",defaultValue:{summary:""}}}}},s=vt.bind({});s.args={a11yText:"education",a11yRoleDescription:"Notice",title:{renderBody:"Education notice title"},renderBody:"<p>Education notice info. Things you need to know.</p>"};s.parameters={docs:{source:{code:ot("ebay-education-notice",s.args)}}};const g=I(l,_t,{a11yText:"attention",status:"attention"}),k=I(u,ht,{a11yText:"attention",status:"attention"}),v=I(y,kt,{a11yText:"information",a11yIconText:"",a11yDismissText:"Dismiss Notice"}),x=I(d,lt,{a11yText:"information"});var P,S,F;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(F=(S=s.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var R,V,j;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`buildExtensionTemplate(ProminentTemplate, ProminentTemplateCode, {
  a11yText: "attention",
  status: "attention"
})`,...(j=(V=g.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var M,W,q;k.parameters={...k.parameters,docs:{...(M=k.parameters)==null?void 0:M.docs,source:{originalSource:`buildExtensionTemplate(ProminentIconTemplate, ProminentIconTemplateCode, {
  a11yText: "attention",
  status: "attention"
})`,...(q=(W=k.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var G,U,X;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`buildExtensionTemplate(withDismiss, withDismissCode, {
  a11yText: "information",
  a11yIconText: "",
  a11yDismissText: "Dismiss Notice"
})`,...(X=(U=v.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,z,K;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`buildExtensionTemplate(withFooter, withFooterCode, {
  a11yText: "information"
})`,...(K=(z=x.parameters)==null?void 0:z.docs)==null?void 0:K.source}}};const Ot=["Default","Prominent","ProminentIcon","WithDismiss","WithFooter"];export{s as Default,g as Prominent,k as ProminentIcon,v as WithDismiss,x as WithFooter,Ot as __namedExportsOrder,Kt as default};
