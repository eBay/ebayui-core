import{b as M}from"./utils-DWCsNc5l.js";import{t as h,r as _,b as g,d as G,p as Q,e as w,c as x}from"./registry-CyswyZw5.js";/* empty css                    */import{_ as y}from"./dynamic-tag-CXXozR29.js";import{_ as W}from"./index-LxnV2Ibq.js";import{_ as r}from"./render-tag-CLyPs9qZ.js";import{_ as X,a as Y}from"./index-DPsecISu.js";import{i as C,a as p}from"./attr-tag-DphMQldM.js";import{_ as Z}from"./index-DpgnR08-.js";import{_ as A}from"./const-element-B9h58Dwq.js";import{_ as ee}from"./empty-component-BCB5DEsP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-Bq4u441m.js";/* empty css             */import"./index-Dv-vWuE6.js";import"./index-DbKxOVwg.js";import"./index-D7GlLQHj.js";import"./index-CZ_CdPGB.js";import"./index-B0y7gXr0.js";import"./index-DWCO0K8G.js";import"./index-CbT4wDAv.js";const te=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;class ne extends Marko.Component{onInput(t){this.state={open:t.open||!1}}setOpen(t){this.input.variant==="modal"&&(this.state.open=t)}handleOpenModal(){this.setOpen(!0)}handleExpand(){this.setOpen(!0),this.emit("expand")}handleOverlayClose(){this.getComponent("base").collapse()}isExpanded(){return this.getComponent("base").isExpanded()}expand(){this.getComponent("base").expand()}collapse(){this.getComponent("base").collapse()}handleCollapse(){this.setOpen(!1),this.getEl("host").focus(),this.emit("collapse")}}const T="UtExJK$k",l=h(T);_.r(T,()=>l);const j=ne;l._=g(function(o,t,e,i,d,I){const{a11yCloseButtonText:a,ariaLabel:O,class:z,content:B,disabled:H,heading:b,icon:E,open:le,pointer:re="bottom",variant:pe,noFlip:J,noShift:N,notInline:P,...U}=o;var s=o.variant==="modal",$=s?"dialog--mini":"infotip";t.be("span",null,"0",i,null,0),r(X,{open:d.open,type:$,overlayId:e.elId("overlay"),noFlip:J,noShift:N,notInline:P,offset:o.offset,pointer:o.pointer,placement:o.placement,renderBody:n=>{n.be("span",G(Q(U),{class:w(["infotip",s===!0&&"dialog--mini",z])}),"1",i,null,4,{pa:{class:1}}),n.be("button",{class:w([`${$}__host`,"icon-btn","icon-btn--transparent"]),type:"button",disabled:H,"aria-label":O},"@host",i,null,0,{onclick:e.d("click",s&&"handleOpenModal",!1)}),E?y(n,E,null,null,null,null,e,"2"):r(W,{},n,e,"3"),n.ee(),s!==!0&&r(Y,{type:"infotip",id:e.elId("overlay"),heading:b,content:B,a11yCloseText:a},n,e,"4",[["overlay-close","handleOverlayClose",!1]]),n.ee()}},t,e,"@base",[["base-expand",s?void 0:"handleExpand",!1],["base-collapse",s?void 0:"handleCollapse",!1]]),t.ee(),s===!0&&r(Z,C(()=>(p("header",{renderBody:n=>{y(n,b&&b.renderBody,null,null,null,null,e,"6")}}),n=>{y(n,B,null,null,null,null,e,"7")}),{open:d.open,a11yCloseText:a,ariaLabel:O}),t,e,"5",[["open","handleExpand",!1],["close","handleCollapse",!1]])},{t:T},j);l.Component=x(j,l._);const k="TNR$recd",m=h(k),oe=A("p",null,1).t("This is some important info");_.r(k,()=>m);const K={};m._=g(function(o,t,e,i,d,I){r(l,C(()=>{p("heading",{renderBody:a=>{a.t("Important",i)}}),p("content",{renderBody:a=>{a.n(oe,i)}})},{a11yCloseButtonText:"Dismiss infotip",ariaLabel:"Important information",...o,heading:void 0,content:void 0}),t,e,"0",[["expand","emit",!1,["expand"]],["collapse","emit",!1,["collapse"]]])},{t:k},K);m.Component=x(K,m._);const ae=`class {}
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
`,v="Rq_oK$Fj",u=h(v),ie=A("p",null,1).t("This is some important info");_.r(v,()=>ee);const q={};u._=g(function(o,t,e,i,d,I){r(l,C(()=>{p("heading",{renderBody:a=>{a.t("Important",i)}}),p("content",{renderBody:a=>{a.n(ie,i)}})},{a11yCloseButtonText:"Dismiss infotip",ariaLabel:"Important information",open:!0,...o,heading:void 0,content:void 0}),t,e,"0",[["expand","emit",!1,["expand"]],["collapse","emit",!1,["collapse"]]])},{t:v,s:!0},q);u.Component=x(q,u._);const se=`<ebay-infotip
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
`,Re={title:"buttons/ebay-infotip",component:l,parameters:{docs:{description:{component:te}}},argTypes:{heading:{name:"@heading",table:{category:"@attribute tags"}},content:{name:"@content",table:{category:"@attribute tags"}},icon:{name:"@icon",table:{category:"@attribute tags"}},variant:{control:{type:"select"},options:["default","modal"],description:"Either modal or default. If modal will show the mobile version of infotip"},placement:{options:["top","right","bottom","left","top-start","right-start","bottom-start","left-start","top-end","right-end","bottom-end","left-end"],control:{type:"select"},description:"places infotip position"},offset:{control:{type:"number"},description:"offsets infotip position",table:{defaultValue:{summary:"6"}}},noFlip:{control:{type:"boolean"},description:"disables flipping infotip when its offscreen",table:{defaultValue:{summary:"false"}}},noShift:{control:{type:"boolean"},description:"disables shifting infotip when its offscreen",table:{defaultValue:{summary:"false"}}},notInline:{control:{type:"boolean"},description:"disables moving infotip to be inline with content when it is rendered",table:{defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},description:"adds a `disabled` attribute to the button"},a11yCloseButtonText:{control:{type:"text"},description:"A11y text for close button"},ariaLabel:{control:{type:"text"},description:'A descriptive label of what the infotip button represents (e.g. "Important information")'},open:{control:{type:"boolean"},description:"allows dev to specify whether infotip is open or closed"},onCollapse:{action:"on-collapse",description:"Triggered on menu collapse",table:{category:"Events",defaultValue:{summary:""}}},onExpand:{action:"on-expand",description:"Triggered on menu expand",table:{category:"Events",defaultValue:{summary:""}}}}},c=M(m,ae,{a11yCloseButtonText:"Dismiss infotip",ariaLabel:"Important information"}),f=M(u,se,{a11yCloseButtonText:"Dismiss infotip",ariaLabel:"Important information",open:!0});var L,R,S;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  a11yCloseButtonText: "Dismiss infotip",
  ariaLabel: "Important information"
})`,...(S=(R=c.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var D,V,F;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`buildExtensionTemplate(OpenOnRenderTemplate, OpenOnRenderTemplateCode, {
  a11yCloseButtonText: "Dismiss infotip",
  ariaLabel: "Important information",
  open: true
})`,...(F=(V=f.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};const Se=["Default","OpenOnRender"];export{c as Default,f as OpenOnRender,Se as __namedExportsOrder,Re as default};
