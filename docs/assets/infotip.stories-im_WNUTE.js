import{b as V}from"./utils-DWCsNc5l.js";import{t as h,r as _,b as g,e as J,p as K,f as w,d as x}from"./registry-D0x2Lw0V.js";/* empty css                    */import{_ as y}from"./dynamic-tag-BSuzyz1c.js";import{_ as Q}from"./index-DB1td1iE.js";import{_ as r}from"./render-tag-Buaq4gMc.js";import{_ as U,a as W}from"./index-B-Dee02Y.js";import{i as C,a as l}from"./attr-tag-W-ozfNNY.js";import{_ as X}from"./index-Deoy7Vmg.js";import{_ as j}from"./const-element-DTwCHAHi.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-BZpHAKBe.js";/* empty css             */import"./index-Cb2Litza.js";import"./index-D7B88Psz.js";import"./index-D7GlLQHj.js";import"./index--35j0Bzx.js";import"./index-naZEvJVz.js";import"./index-BWLs-RUD.js";import"./index-blmbJU0z.js";const Y=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;class Z extends Marko.Component{onInput(t){this.state={open:t.open||!1}}setOpen(t){this.input.variant==="modal"&&(this.state.open=t)}handleOpenModal(){this.setOpen(!0)}handleExpand(){this.setOpen(!0),this.emit("expand")}handleOverlayClose(){this.getComponent("base").collapse()}isExpanded(){return this.getComponent("base").isExpanded()}expand(){this.getComponent("base").expand()}collapse(){this.getComponent("base").collapse()}handleCollapse(){this.setOpen(!1),this.getEl("host").focus(),this.emit("collapse")}}const T="1dizbRwG",p=h(T),k=p;_.r(T,()=>p);const P=Z;p._=g(function(o,t,e,i,c,v){const{a11yCloseButtonText:a,ariaLabel:B,class:N,content:E,disabled:q,heading:b,icon:$,open:ae,pointer:ie="bottom",variant:se,...F}=o;var s=o.variant==="modal",L=s?"dialog--mini":"infotip";t.be("span",null,"0",i,null,0),r(U,{open:c.open,type:L,overlayId:e.elId("overlay"),offset:o.offset,pointer:o.pointer,placement:o.placement,renderBody:n=>{n.be("span",J(K(F),{class:w(["infotip",s===!0&&"dialog--mini",N])}),"1",i,null,4,{pa:{class:1}}),n.be("button",{class:w([`${L}__host`,"icon-btn","icon-btn--transparent"]),type:"button",disabled:q,"aria-label":B},"@host",i,null,0,{onclick:e.d("click",s&&"handleOpenModal",!1)}),$?y(n,$,null,null,null,null,e,"2"):r(Q,{},n,e,"3"),n.ee(),s!==!0&&r(W,{type:"infotip",id:e.elId("overlay"),heading:b,content:E,a11yCloseText:a},n,e,"4",[["overlay-close","handleOverlayClose",!1]]),n.ee()}},t,e,"@base",[["base-expand",s?void 0:"handleExpand",!1],["base-collapse",s?void 0:"handleCollapse",!1]]),t.ee(),s===!0&&r(X,C(()=>(l("header",{renderBody:n=>{y(n,b&&b.renderBody,null,null,null,null,e,"6")}}),n=>{y(n,E,null,null,null,null,e,"7")}),{open:c.open,a11yCloseText:a,ariaLabel:B}),t,e,"5",[["open","handleExpand",!1],["close","handleCollapse",!1]])},{t:T},P);p.Component=x(P,p._);const I="OzPNp5o+",m=h(I),ee=j("p",null,1).t("This is some important info");_.r(I,()=>m);const G={};m._=g(function(o,t,e,i,c,v){r(k,C(()=>{l("heading",{renderBody:a=>{a.t("Important",i)}}),l("content",{renderBody:a=>{a.n(ee,i)}})},{a11yCloseButtonText:"Dismiss infotip",ariaLabel:"Important information",...o}),t,e,"0",[["expand","emit",!1,["expand"]],["collapse","emit",!1,["collapse"]]])},{t:I,i:!0},G);m.Component=x(G,m._);const te=`<ebay-infotip
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
`,O="uuR6Szj0",d=h(O),ne=j("p",null,1).t("This is some important info");_.r(O,()=>d);const H={};d._=g(function(o,t,e,i,c,v){r(k,C(()=>{l("heading",{renderBody:a=>{a.t("Important",i)}}),l("content",{renderBody:a=>{a.n(ne,i)}})},{a11yCloseButtonText:"Dismiss infotip",ariaLabel:"Important information",open:!0,...o}),t,e,"0",[["expand","emit",!1,["expand"]],["collapse","emit",!1,["collapse"]]])},{t:O,i:!0},H);d.Component=x(H,d._);const oe=`<ebay-infotip
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
`,Ee={title:"buttons/ebay-infotip",component:k,parameters:{docs:{description:{component:Y}}},argTypes:{heading:{name:"@heading",table:{category:"@attribute tags"}},content:{name:"@content",table:{category:"@attribute tags"}},icon:{name:"@icon",table:{category:"@attribute tags"}},variant:{control:{type:"select"},options:["default","modal"],description:"Either modal or default. If modal will show the mobile version of infotip"},placement:{options:["top","right","bottom","left","top-start","right-start","bottom-start","left-start","top-end","right-end","bottom-end","left-end"],control:{type:"select"},description:"places infotip position"},offset:{control:{type:"number"},description:"offsets infotip position",table:{defaultValue:{summary:"6"}}},disabled:{control:{type:"boolean"},description:"adds a `disabled` attribute to the button"},a11yCloseButtonText:{control:{type:"text"},description:"A11y text for close button"},ariaLabel:{control:{type:"text"},description:'A descriptive label of what the infotip button represents (e.g. "Important information")'},open:{control:{type:"boolean"},description:"allows dev to specify whether infotip is open or closed"},onCollapse:{action:"on-collapse",description:"Triggered on menu collapse",table:{category:"Events",defaultValue:{summary:""}}},onExpand:{action:"on-expand",description:"Triggered on menu expand",table:{category:"Events",defaultValue:{summary:""}}}}},f=V(m,te,{a11yCloseButtonText:"Dismiss infotip",ariaLabel:"Important information"}),u=V(d,oe,{a11yCloseButtonText:"Dismiss infotip",ariaLabel:"Important information",open:!0});var R,D,S;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  a11yCloseButtonText: "Dismiss infotip",
  ariaLabel: "Important information"
})`,...(S=(D=f.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var z,M,A;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`buildExtensionTemplate(OpenOnRenderTemplate, OpenOnRenderTemplateCode, {
  a11yCloseButtonText: "Dismiss infotip",
  ariaLabel: "Important information",
  open: true
})`,...(A=(M=u.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};const $e=["Default","OpenOnRender"];export{f as Default,u as OpenOnRender,$e as __namedExportsOrder,Ee as default};
