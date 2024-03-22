import{b as A}from"./utils-DWCsNc5l.js";import{t as h,r as g,b as _,e as U,p as W,f as L,d as x}from"./registry-DoALHDDx.js";/* empty css                    */import{_ as y}from"./dynamic-tag-B1GLaPEW.js";import{_ as X}from"./index-BXtTA7wC.js";import{_ as l}from"./render-tag-BBOJ9dEX.js";import{_ as Y,a as Z}from"./index-D_7TLoE6.js";import{i as C,a as r}from"./attr-tag-DphMQldM.js";import{_ as ee}from"./index-g_K2bcmL.js";import{_ as F}from"./const-element-_KqHYBBN.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-mP6JM4Am.js";/* empty css             */import"./index-Cwd2w34Z.js";import"./index-D7B88Psz.js";import"./index-D7GlLQHj.js";import"./index--35j0Bzx.js";import"./index-C36gxz_G.js";import"./index-Dn2VikhO.js";import"./index-blmbJU0z.js";const te=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;class ne extends Marko.Component{onInput(t){this.state={open:t.open||!1}}setOpen(t){this.input.variant==="modal"&&(this.state.open=t)}handleOpenModal(){this.setOpen(!0)}handleExpand(){this.setOpen(!0),this.emit("expand")}handleOverlayClose(){this.getComponent("base").collapse()}isExpanded(){return this.getComponent("base").isExpanded()}expand(){this.getComponent("base").expand()}collapse(){this.getComponent("base").collapse()}handleCollapse(){this.setOpen(!1),this.getEl("host").focus(),this.emit("collapse")}}const T="1dizbRwG",p=h(T),k=p;g.r(T,()=>p);const j=ne;p._=_(function(o,t,e,i,c,O){const{a11yCloseButtonText:a,ariaLabel:B,class:H,content:E,disabled:N,heading:b,icon:$,open:le,pointer:re="bottom",variant:pe,noFlip:q,noShift:J,notInline:K,...Q}=o;var s=o.variant==="modal",w=s?"dialog--mini":"infotip";t.be("span",null,"0",i,null,0),l(Y,{open:c.open,type:w,overlayId:e.elId("overlay"),noFlip:q,noShift:J,notInline:K,offset:o.offset,pointer:o.pointer,placement:o.placement,renderBody:n=>{n.be("span",U(W(Q),{class:L(["infotip",s===!0&&"dialog--mini",H])}),"1",i,null,4,{pa:{class:1}}),n.be("button",{class:L([`${w}__host`,"icon-btn","icon-btn--transparent"]),type:"button",disabled:N,"aria-label":B},"@host",i,null,0,{onclick:e.d("click",s&&"handleOpenModal",!1)}),$?y(n,$,null,null,null,null,e,"2"):l(X,{},n,e,"3"),n.ee(),s!==!0&&l(Z,{type:"infotip",id:e.elId("overlay"),heading:b,content:E,a11yCloseText:a},n,e,"4",[["overlay-close","handleOverlayClose",!1]]),n.ee()}},t,e,"@base",[["base-expand",s?void 0:"handleExpand",!1],["base-collapse",s?void 0:"handleCollapse",!1]]),t.ee(),s===!0&&l(ee,C(()=>(r("header",{renderBody:n=>{y(n,b&&b.renderBody,null,null,null,null,e,"6")}}),n=>{y(n,E,null,null,null,null,e,"7")}),{open:c.open,a11yCloseText:a,ariaLabel:B}),t,e,"5",[["open","handleExpand",!1],["close","handleCollapse",!1]])},{t:T},j);p.Component=x(j,p._);const v="OzPNp5o+",m=h(v),oe=F("p",null,1).t("This is some important info");g.r(v,()=>m);const P={};m._=_(function(o,t,e,i,c,O){l(k,C(()=>{r("heading",{renderBody:a=>{a.t("Important",i)}}),r("content",{renderBody:a=>{a.n(oe,i)}})},{a11yCloseButtonText:"Dismiss infotip",ariaLabel:"Important information",...o,heading:void 0,content:void 0}),t,e,"0",[["expand","emit",!1,["expand"]],["collapse","emit",!1,["collapse"]]])},{t:v,i:!0},P);m.Component=x(P,m._);const ae=`<ebay-infotip
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
`,I="uuR6Szj0",d=h(I),ie=F("p",null,1).t("This is some important info");g.r(I,()=>d);const G={};d._=_(function(o,t,e,i,c,O){l(k,C(()=>{r("heading",{renderBody:a=>{a.t("Important",i)}}),r("content",{renderBody:a=>{a.n(ie,i)}})},{a11yCloseButtonText:"Dismiss infotip",ariaLabel:"Important information",open:!0,...o,heading:void 0,content:void 0}),t,e,"0",[["expand","emit",!1,["expand"]],["collapse","emit",!1,["collapse"]]])},{t:I,i:!0},G);d.Component=x(G,d._);const se=`<ebay-infotip
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
`,Le={title:"buttons/ebay-infotip",component:k,parameters:{docs:{description:{component:te}}},argTypes:{heading:{name:"@heading",table:{category:"@attribute tags"}},content:{name:"@content",table:{category:"@attribute tags"}},icon:{name:"@icon",table:{category:"@attribute tags"}},variant:{control:{type:"select"},options:["default","modal"],description:"Either modal or default. If modal will show the mobile version of infotip"},placement:{options:["top","right","bottom","left","top-start","right-start","bottom-start","left-start","top-end","right-end","bottom-end","left-end"],control:{type:"select"},description:"places infotip position"},offset:{control:{type:"number"},description:"offsets infotip position",table:{defaultValue:{summary:"6"}}},noFlip:{control:{type:"boolean"},description:"disables flipping infotip when its offscreen",table:{defaultValue:{summary:"false"}}},noShift:{control:{type:"boolean"},description:"disables shifting infotip when its offscreen",table:{defaultValue:{summary:"false"}}},notInline:{control:{type:"boolean"},description:"disables moving infotip to be inline with content when it is rendered",table:{defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},description:"adds a `disabled` attribute to the button"},a11yCloseButtonText:{control:{type:"text"},description:"A11y text for close button"},ariaLabel:{control:{type:"text"},description:'A descriptive label of what the infotip button represents (e.g. "Important information")'},open:{control:{type:"boolean"},description:"allows dev to specify whether infotip is open or closed"},onCollapse:{action:"on-collapse",description:"Triggered on menu collapse",table:{category:"Events",defaultValue:{summary:""}}},onExpand:{action:"on-expand",description:"Triggered on menu expand",table:{category:"Events",defaultValue:{summary:""}}}}},f=A(m,ae,{a11yCloseButtonText:"Dismiss infotip",ariaLabel:"Important information"}),u=A(d,se,{a11yCloseButtonText:"Dismiss infotip",ariaLabel:"Important information",open:!0});var S,R,D;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  a11yCloseButtonText: "Dismiss infotip",
  ariaLabel: "Important information"
})`,...(D=(R=f.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var V,z,M;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`buildExtensionTemplate(OpenOnRenderTemplate, OpenOnRenderTemplateCode, {
  a11yCloseButtonText: "Dismiss infotip",
  ariaLabel: "Important information",
  open: true
})`,...(M=(z=u.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};const Se=["Default","OpenOnRender"];export{f as Default,u as OpenOnRender,Se as __namedExportsOrder,Le as default};
