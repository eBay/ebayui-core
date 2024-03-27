import{t as it}from"./index-CCz6reEH.js";import{b as $,a as at}from"./utils-DWCsNc5l.js";import{t as b,r as _,b as f,d as h}from"./registry-DoALHDDx.js";/* empty css             */import{_ as st}from"./index-CfPikhFy.js";import{_ as r}from"./render-tag-BBOJ9dEX.js";import{_ as a}from"./const-element-_KqHYBBN.js";import{i as C,a as m}from"./attr-tag-DphMQldM.js";import{_ as rt}from"./index-DWLEzt3x.js";import{_ as O}from"./index-DvGvB9kh.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-hXWCJ6_4.js";import"./index-mP6JM4Am.js";import"./index-Ds_Wbn7W.js";import"./dynamic-tag-B1GLaPEW.js";import"./index-Cwd2w34Z.js";import"./index-BKx7n7_D.js";/* empty css                    *//* empty css               *//* empty css             */import"./index-BjnxPuxR.js";import"./index-blmbJU0z.js";const ct=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;class mt extends Marko.Component{onCreate(){this.state={dismissed:!1}}onInput(n){this.state={dismissed:n.dismissed||!1}}onDismiss(){this.state.dismissed=!0,this.emit("dismiss")}}const w="K65lneZs",p=b(w),T=p;_.r(w,()=>p);const Y=mt;p._=f(function(o,n,i,e,c,k){const{a11yRoleDescription:t="Notice",status:P,class:tt,variant:et,iconVariant:ot,...nt}=o;c.dismissed||r(st,{...nt,role:"region",prefixClass:"education-notice",type:"section",mainRoot:"div",iconClass:[ot==="prominent"&&"icon--prominent"],a11yRoleDescription:t,class:[et==="prominent"&&"education-notice--prominent",tt]},n,i,"0",[["dismiss","onDismiss",!1]])},{t:w},Y);p.Component=h(Y,p._);const E="1NvlvNch",d=b(E),pt=a("div",null,1).t("Educaiton title"),dt=a("p",null,1).t("Please take another look at the following");_.r(E,()=>d);const G={};d._=f(function(o,n,i,e,c,k){r(T,C(()=>(m("title",{renderBody:t=>{t.n(pt,e)}}),m("footer",{renderBody:t=>{r(rt,{renderBody:P=>{P.t("Footer",e)}},t,i,"2")}}),t=>{t.n(dt,e)}),{...o,title:void 0,footer:void 0}),n,i,"0")},{t:E,i:!0},G);d.Component=h(G,d._);const lt=`import type { Input as EducationNoticeInput } from "<ebay-education-notice>";
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
`,D="v05KJACx",l=b(D),ut=a("div",null,1).t("Notice title"),yt=a("p",null,1).t("The eBay vault will store items for you.");_.r(D,()=>l);const Q={};l._=f(function(o,n,i,e,c,k){r(T,C(()=>(m("title",{renderBody:t=>{t.n(ut,e)}}),t=>{t.n(yt,e)}),{...o,a11yText:"ebay vault",variant:"prominent",educationIcon:O,title:void 0}),n,i,"0")},{t:D,i:!0},Q);l.Component=h(Q,l._);const bt=`import vaultIcon from '<ebay-the-ebay-vault-24-icon>';

<ebay-education-notice ...input a11y-text="ebay vault" variant="prominent" education-icon=vaultIcon>
    <@title>
        <div>Notice title</div>
    </@title>
    <p>
        The eBay vault will store items for you.
    </p>
</ebay-education-notice>
`,N="6yZJjHet",u=b(N),_t=a("div",null,1).t("Notice title"),ft=a("p",null,1).t("The eBay vault will store items for you.");_.r(N,()=>u);const U={};u._=f(function(o,n,i,e,c,k){r(T,C(()=>(m("title",{renderBody:t=>{t.n(_t,e)}}),t=>{t.n(ft,e)}),{...o,a11yText:"ebay vault",iconVariant:"prominent",educationIcon:O,title:void 0}),n,i,"0")},{t:N,i:!0},U);u.Component=h(U,u._);const ht=`import vaultIcon from '<ebay-the-ebay-vault-24-icon>';

<ebay-education-notice ...input a11y-text="ebay vault" icon-variant="prominent" education-icon=vaultIcon>
    <@title>
        <div>Notice title</div>
    </@title>
    <p>
        The eBay vault will store items for you.
    </p>
</ebay-education-notice>
`,B="f8fMyYyL",y=b(B),Tt=a("div",null,1).t("Notice title"),kt=a("p",null,1).t("The eBay vault will store items for you.");_.r(B,()=>y);const X={};y._=f(function(o,n,i,e,c,k){r(T,C(()=>(m("title",{renderBody:t=>{t.n(Tt,e)}}),t=>{t.n(kt,e)}),{...o,title:void 0}),n,i,"0",[["dismiss","emit",!1,["dismiss"]]])},{t:B},X);y.Component=h(X,y._);const vt=`import type { Input as EducationNoticeInput } from "<ebay-education-notice>"
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
`,gt=o=>({input:at(o)}),At={title:"notices & tips/ebay-education-notice",component:T,parameters:{docs:{description:{component:ct}}},argTypes:{educationIcon:{name:"@educationIcon",description:"For status education, an `<ebay-[name]-icon>` to show as the button's icon",table:{defaultValue:{summary:"ebay-lightbulb-24-icon",category:"@attribute tags"}}},variant:{description:"Either none or prominent. If prominent, the notice will be more prominent",options:["none","prominent"],type:"select",defaultValue:{summary:"none"}},iconVariant:{description:"Either none or prominent. If prominent, the icon will be more prominent",options:["none","prominent"],type:"select",defaultValue:{summary:"none"}},a11yText:{description:"adding description for the notice for a11y users"},a11yRoleDescription:{table:{defaultValue:{summary:"Notice"}},description:"The roledescription to announce the component type for a11y users."},dismissed:{description:"whether or not the notice is dismissed",type:"boolean"},title:{name:"@title",description:"The title content to be displayed.",table:{required:!0,category:"@attribute tags"}},footer:{name:"@footer",description:"The footer content to be displayed. Contains a button or link.",table:{category:"@attribute tags"}},onDismiss:{action:"on-dismiss",description:"Triggered on notice dismiss",table:{category:"Events",defaultValue:{summary:""}}}}},s=gt.bind({});s.args={a11yText:"education",a11yRoleDescription:"Notice",title:{renderBody:"Education notice title"},renderBody:"<p>Education notice info. Things you need to know.</p>"};s.parameters={docs:{source:{code:it("ebay-education-notice",s.args)}}};const v=$(l,bt,{a11yText:"attention",status:"attention"}),g=$(u,ht,{a11yText:"attention",status:"attention"}),x=$(y,vt,{a11yText:"information",a11yIconText:"",a11yDismissText:"Dismiss Notice"}),I=$(d,lt,{a11yText:"information"});var F,S,R;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(R=(S=s.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var V,W,j;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`buildExtensionTemplate(ProminentTemplate, ProminentTemplateCode, {
  a11yText: "attention",
  status: "attention"
})`,...(j=(W=v.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var q,J,K;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`buildExtensionTemplate(ProminentIconTemplate, ProminentIconTemplateCode, {
  a11yText: "attention",
  status: "attention"
})`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,M,Z;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`buildExtensionTemplate(withDismiss, withDismissCode, {
  a11yText: "information",
  a11yIconText: "",
  a11yDismissText: "Dismiss Notice"
})`,...(Z=(M=x.parameters)==null?void 0:M.docs)==null?void 0:Z.source}}};var z,A,H;I.parameters={...I.parameters,docs:{...(z=I.parameters)==null?void 0:z.docs,source:{originalSource:`buildExtensionTemplate(withFooter, withFooterCode, {
  a11yText: "information"
})`,...(H=(A=I.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};const Ht=["Default","Prominent","ProminentIcon","WithDismiss","WithFooter"];export{s as Default,v as Prominent,g as ProminentIcon,x as WithDismiss,I as WithFooter,Ht as __namedExportsOrder,At as default};
