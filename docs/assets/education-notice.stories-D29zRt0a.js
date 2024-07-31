import{t as nt}from"./index-CCz6reEH.js";import{b as $,a as it}from"./utils-DWCsNc5l.js";import{t as _,r as b,b as f,d as h}from"./registry-B-klnak9.js";/* empty css             */import{_ as at}from"./index-CDSZsPQJ.js";import{_ as r}from"./render-tag-BBOJ9dEX.js";import{_ as a}from"./const-element-Usj7mXQw.js";import{i as w,a as m}from"./attr-tag-DphMQldM.js";import{_ as st}from"./index-B3D3pI-7.js";import{_ as rt,a as ct}from"./index-CslZeGQj.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-stgrgPA5.js";import"./index-BJEuXy1Q.js";import"./index-DGzRQIaV.js";import"./dynamic-tag-DQCvkDdb.js";import"./index-C2nZXLsq.js";import"./index-PNIKNjCK.js";/* empty css                    *//* empty css               *//* empty css             */import"./index-B6IacUrT.js";import"./index-blmbJU0z.js";const mt=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;class pt extends Marko.Component{onCreate(){this.state={dismissed:!1}}onInput(n){this.state={dismissed:n.dismissed||!1}}onDismiss(){this.state.dismissed=!0,this.emit("dismiss")}}const E="ssatwdnc",p=_(E),T=p;b.r(E,()=>p);const O=pt;p._=f(function(o,n,i,e,c,k){const{a11yRoleDescription:t="Notice",status:P,class:Z,variant:tt,iconVariant:et,...ot}=o;c.dismissed||r(at,{...ot,role:"region",prefixClass:"education-notice",type:"section",mainRoot:"div",iconClass:[et==="prominent"&&"icon--prominent"],a11yRoleDescription:t,class:[tt==="prominent"&&"education-notice--prominent",Z]},n,i,"0",[["dismiss","onDismiss",!1]])},{t:E},O);p.Component=h(O,p._);const C="KjYGUYXk",d=_(C),dt=a("div",null,1).t("Educaiton title"),lt=a("p",null,1).t("Please take another look at the following");b.r(C,()=>d);const A={};d._=f(function(o,n,i,e,c,k){r(T,w(()=>(m("title",{renderBody:t=>{t.n(dt,e)}}),m("footer",{renderBody:t=>{r(st,{renderBody:P=>{P.t("Footer",e)}},t,i,"2")}}),t=>{t.n(lt,e)}),{...o,title:void 0,footer:void 0}),n,i,"0")},{t:C,i:!0},A);d.Component=h(A,d._);const ut=`import type { Input as EducationNoticeInput } from "<ebay-education-notice>";
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
`,B="BMBIjlSj",l=_(B),yt=a("div",null,1).t("Notice title"),_t=a("p",null,1).t("The eBay vault will store items for you.");b.r(B,()=>l);const H={};l._=f(function(o,n,i,e,c,k){r(T,w(()=>(m("title",{renderBody:t=>{t.n(yt,e)}}),t=>{t.n(_t,e)}),{...o,a11yText:"ebay vault",variant:"prominent",educationIcon:rt,title:void 0}),n,i,"0")},{t:B,i:!0},H);l.Component=h(H,l._);const bt=`import vaultIcon from '<ebay-the-ebay-vault-24-icon>';

<ebay-education-notice ...input a11y-text="ebay vault" variant="prominent" education-icon=vaultIcon>
    <@title>
        <div>Notice title</div>
    </@title>
    <p>
        The eBay vault will store items for you.
    </p>
</ebay-education-notice>
`,D="EMcqXMdm",u=_(D),ft=a("div",null,1).t("Notice title"),ht=a("p",null,1).t("The eBay vault will store items for you.");b.r(D,()=>u);const J={};u._=f(function(o,n,i,e,c,k){r(T,w(()=>(m("title",{renderBody:t=>{t.n(ft,e)}}),t=>{t.n(ht,e)}),{...o,a11yText:"ebay vault",iconVariant:"prominent",educationIcon:ct,title:void 0}),n,i,"0")},{t:D,i:!0},J);u.Component=h(J,u._);const Tt=`import authGuarantee from '<ebay-authenticity-guarantee-24-icon>';

<ebay-education-notice ...input a11y-text="ebay vault" icon-variant="prominent" education-icon=authGuarantee>
    <@title>
        <div>Notice title</div>
    </@title>
    <p>
        The eBay vault will store items for you.
    </p>
</ebay-education-notice>
`,N="ygrtUhEg",y=_(N),kt=a("div",null,1).t("Notice title"),gt=a("p",null,1).t("The eBay vault will store items for you.");b.r(N,()=>y);const Q={};y._=f(function(o,n,i,e,c,k){r(T,w(()=>(m("title",{renderBody:t=>{t.n(kt,e)}}),t=>{t.n(gt,e)}),{...o,title:void 0}),n,i,"0",[["dismiss","emit",!1,["dismiss"]]])},{t:N},Q);y.Component=h(Q,y._);const vt=`import type { Input as EducationNoticeInput } from "<ebay-education-notice>"
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
`,xt=o=>({input:it(o)}),Lt={title:"notices & tips/ebay-education-notice",component:T,parameters:{docs:{description:{component:mt}}},argTypes:{educationIcon:{name:"@educationIcon",description:"For status education, an `<ebay-[name]-icon>` to show as the button's icon",table:{defaultValue:{summary:"ebay-lightbulb-24-icon",category:"@attribute tags"}}},variant:{description:"Either none or prominent. If prominent, the notice will be more prominent",options:["none","prominent"],type:"select",defaultValue:{summary:"none"}},iconVariant:{description:"Either none or prominent. If prominent, the icon will be more prominent",options:["none","prominent"],type:"select",defaultValue:{summary:"none"}},a11yText:{description:"adding description for the notice for a11y users"},a11yRoleDescription:{table:{defaultValue:{summary:"Notice"}},description:"The roledescription to announce the component type for a11y users."},dismissed:{description:"whether or not the notice is dismissed",type:"boolean"},title:{name:"@title",description:"The title content to be displayed.",table:{required:!0,category:"@attribute tags"}},footer:{name:"@footer",description:"The footer content to be displayed. Contains a button or link.",table:{category:"@attribute tags"}},onDismiss:{action:"on-dismiss",description:"Triggered on notice dismiss",table:{category:"Events",defaultValue:{summary:""}}}}},s=xt.bind({});s.args={a11yText:"education",a11yRoleDescription:"Notice",title:{renderBody:"Education notice title"},renderBody:"<p>Education notice info. Things you need to know.</p>"};s.parameters={docs:{source:{code:nt("ebay-education-notice",s.args)}}};const g=$(l,bt,{a11yText:"attention",status:"attention"}),v=$(u,Tt,{a11yText:"attention",status:"attention"}),x=$(y,vt,{a11yText:"information",a11yIconText:"",a11yDismissText:"Dismiss Notice"}),I=$(d,ut,{a11yText:"information"});var S,F,R;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(R=(F=s.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var V,j,M;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`buildExtensionTemplate(ProminentTemplate, ProminentTemplateCode, {
  a11yText: "attention",
  status: "attention"
})`,...(M=(j=g.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var W,q,G;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`buildExtensionTemplate(ProminentIconTemplate, ProminentIconTemplateCode, {
  a11yText: "attention",
  status: "attention"
})`,...(G=(q=v.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var U,X,Y;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`buildExtensionTemplate(withDismiss, withDismissCode, {
  a11yText: "information",
  a11yIconText: "",
  a11yDismissText: "Dismiss Notice"
})`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var z,K,L;I.parameters={...I.parameters,docs:{...(z=I.parameters)==null?void 0:z.docs,source:{originalSource:`buildExtensionTemplate(withFooter, withFooterCode, {
  a11yText: "information"
})`,...(L=(K=I.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};const Ot=["Default","Prominent","ProminentIcon","WithDismiss","WithFooter"];export{s as Default,g as Prominent,v as ProminentIcon,x as WithDismiss,I as WithFooter,Ot as __namedExportsOrder,Lt as default};
