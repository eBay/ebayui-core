import{b as A}from"./utils-DWCsNc5l.js";import{t as h,r as _,b as g,e as Q,p as W,f as L,d as x}from"./registry-B-klnak9.js";/* empty css                    */import{_ as y}from"./dynamic-tag-DQCvkDdb.js";import{_ as X}from"./index-Cq6EH_VK.js";import{_ as l}from"./render-tag-BBOJ9dEX.js";import{_ as Y,a as Z}from"./index-DiTsWp84.js";import{i as C,a as r}from"./attr-tag-DphMQldM.js";import{_ as ee}from"./index-CY_AuJ-_.js";import{_ as j}from"./const-element-Usj7mXQw.js";import{_ as te}from"./empty-component-BCB5DEsP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-C98gAawF.js";/* empty css             */import"./index-Cm_Gb0Br.js";import"./index-D7B88Psz.js";import"./index-D7GlLQHj.js";import"./index--35j0Bzx.js";import"./index-DX0IFE80.js";import"./index-C_i8Cqa-.js";import"./index-blmbJU0z.js";const ne=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-infotip
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/buttons-ebay-infotip)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/buttons-ebay-infotip)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-infotip/examples)
`;class oe extends Marko.Component{onInput(t){this.state={open:t.open||!1}}setOpen(t){this.input.variant==="modal"&&(this.state.open=t)}handleOpenModal(){this.setOpen(!0)}handleExpand(){this.setOpen(!0),this.emit("expand")}handleOverlayClose(){this.getComponent("base").collapse()}isExpanded(){return this.getComponent("base").isExpanded()}expand(){this.getComponent("base").expand()}collapse(){this.getComponent("base").collapse()}handleCollapse(){this.setOpen(!1),this.getEl("host").focus(),this.emit("collapse")}}const T="UtExJK$k",p=h(T),k=p;_.r(T,()=>p);const K=oe;p._=g(function(o,t,e,i,d,O){const{a11yCloseButtonText:a,ariaLabel:B,class:H,content:E,disabled:J,heading:b,icon:$,open:re,pointer:pe="bottom",variant:me,noFlip:N,noShift:P,notInline:U,...G}=o;var s=o.variant==="modal",w=s?"dialog--mini":"infotip";t.be("span",null,"0",i,null,0),l(Y,{open:d.open,type:w,overlayId:e.elId("overlay"),noFlip:N,noShift:P,notInline:U,offset:o.offset,pointer:o.pointer,placement:o.placement,renderBody:n=>{n.be("span",Q(W(G),{class:L(["infotip",s===!0&&"dialog--mini",H])}),"1",i,null,4,{pa:{class:1}}),n.be("button",{class:L([`${w}__host`,"icon-btn","icon-btn--transparent"]),type:"button",disabled:J,"aria-label":B},"@host",i,null,0,{onclick:e.d("click",s&&"handleOpenModal",!1)}),$?y(n,$,null,null,null,null,e,"2"):l(X,{},n,e,"3"),n.ee(),s!==!0&&l(Z,{type:"infotip",id:e.elId("overlay"),heading:b,content:E,a11yCloseText:a},n,e,"4",[["overlay-close","handleOverlayClose",!1]]),n.ee()}},t,e,"@base",[["base-expand",s?void 0:"handleExpand",!1],["base-collapse",s?void 0:"handleCollapse",!1]]),t.ee(),s===!0&&l(ee,C(()=>(r("header",{renderBody:n=>{y(n,b&&b.renderBody,null,null,null,null,e,"6")}}),n=>{y(n,E,null,null,null,null,e,"7")}),{open:d.open,a11yCloseText:a,ariaLabel:B}),t,e,"5",[["open","handleExpand",!1],["close","handleCollapse",!1]])},{t:T},K);p.Component=x(K,p._);const v="TNR$recd",m=h(v),ae=j("p",null,1).t("This is some important info");_.r(v,()=>m);const q={};m._=g(function(o,t,e,i,d,O){l(k,C(()=>{r("heading",{renderBody:a=>{a.t("Important",i)}}),r("content",{renderBody:a=>{a.n(ae,i)}})},{a11yCloseButtonText:"Dismiss infotip",ariaLabel:"Important information",...o,heading:void 0,content:void 0}),t,e,"0",[["expand","emit",!1,["expand"]],["collapse","emit",!1,["collapse"]]])},{t:v},q);m.Component=x(q,m._);const ie=`class {}
<ebay-infotip
    a11yCloseButtonText="Dismiss infotip"
    ariaLabel="Important information"
    on-expand('emit', 'expand')
    on-collapse('emit', 'collapse')
    ...input
    >
    <@heading>Important</@heading>
    <@content>
        <p>This is some important info</p>
    </@content>
</ebay-infotip>
`,I="Rq_oK$Fj",u=h(I),se=j("p",null,1).t("This is some important info");_.r(I,()=>te);const z={};u._=g(function(o,t,e,i,d,O){l(k,C(()=>{r("heading",{renderBody:a=>{a.t("Important",i)}}),r("content",{renderBody:a=>{a.n(se,i)}})},{a11yCloseButtonText:"Dismiss infotip",ariaLabel:"Important information",open:!0,...o,heading:void 0,content:void 0}),t,e,"0",[["expand","emit",!1,["expand"]],["collapse","emit",!1,["collapse"]]])},{t:I,s:!0},z);u.Component=x(z,u._);const le=`<ebay-infotip
    a11yCloseButtonText="Dismiss infotip"
    ariaLabel="Important information"
    on-expand('emit', 'expand')
    on-collapse('emit', 'collapse')
    open=true
    ...input
    >
    <@heading>Important</@heading>
    <@content>
        <p>This is some important info</p>
    </@content>
</ebay-infotip>
`,Se={title:"buttons/ebay-infotip",component:k,parameters:{docs:{description:{component:ne}}},argTypes:{heading:{name:"@heading",table:{category:"@attribute tags"}},content:{name:"@content",table:{category:"@attribute tags"}},icon:{name:"@icon",table:{category:"@attribute tags"}},variant:{control:{type:"select"},options:["default","modal"],description:"Either modal or default. If modal will show the mobile version of infotip"},placement:{options:["top","right","bottom","left","top-start","right-start","bottom-start","left-start","top-end","right-end","bottom-end","left-end"],control:{type:"select"},description:"places infotip position"},offset:{control:{type:"number"},description:"offsets infotip position",table:{defaultValue:{summary:"6"}}},noFlip:{control:{type:"boolean"},description:"disables flipping infotip when its offscreen",table:{defaultValue:{summary:"false"}}},noShift:{control:{type:"boolean"},description:"disables shifting infotip when its offscreen",table:{defaultValue:{summary:"false"}}},notInline:{control:{type:"boolean"},description:"disables moving infotip to be inline with content when it is rendered",table:{defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},description:"adds a `disabled` attribute to the button"},a11yCloseButtonText:{control:{type:"text"},description:"A11y text for close button"},ariaLabel:{control:{type:"text"},description:'A descriptive label of what the infotip button represents (e.g. "Important information")'},open:{control:{type:"boolean"},description:"allows dev to specify whether infotip is open or closed"},onCollapse:{action:"on-collapse",description:"Triggered on menu collapse",table:{category:"Events",defaultValue:{summary:""}}},onExpand:{action:"on-expand",description:"Triggered on menu expand",table:{category:"Events",defaultValue:{summary:""}}}}},c=A(m,ie,{a11yCloseButtonText:"Dismiss infotip",ariaLabel:"Important information"}),f=A(u,le,{a11yCloseButtonText:"Dismiss infotip",ariaLabel:"Important information",open:!0});var R,S,D;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  a11yCloseButtonText: "Dismiss infotip",
  ariaLabel: "Important information"
})`,...(D=(S=c.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var V,F,M;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`buildExtensionTemplate(OpenOnRenderTemplate, OpenOnRenderTemplateCode, {
  a11yCloseButtonText: "Dismiss infotip",
  ariaLabel: "Important information",
  open: true
})`,...(M=(F=f.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};const De=["Default","OpenOnRender"];export{c as Default,f as OpenOnRender,De as __namedExportsOrder,Se as default};
