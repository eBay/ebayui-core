import{b as A}from"./utils-NX-dnf4r.js";import{t as h,r as _,b as g,f as F,p as J,g as L,d as x}from"./registry-zqrnEiYK.js";/* empty css                    */import{_ as y}from"./dynamic-tag-4Gch17f1.js";import{_ as K}from"./index-fBgtz-n7.js";import{_ as r}from"./render-tag-_0PNNh6Y.js";import{_ as Q,a as U}from"./index-cvF98qL5.js";import"./preserve-attrs-PKQRsRTw.js";import{_ as l}from"./self-iterator-6yU_KG2T.js";import{_ as W}from"./index-H41CNw8Q.js";import{_ as V}from"./v-element-BABk39ab.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";import"./index-T-tr__32.js";/* empty css             */import"./index-avw8iGTO.js";import"./index-l3FQEXUN.js";import"./index-QGVtTfuc.js";import"./index-ERL0bCNR.js";import"./index-XLHqpDln.js";import"./index-DimFlsuh.js";import"./index-XjwwBzg5.js";const X=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;class Y extends Marko.Component{onInput(t){this.state={open:t.open||!1}}setOpen(t){this.input.variant==="modal"&&(this.state.open=t)}handleOpenModal(){this.setOpen(!0)}handleExpand(){this.setOpen(!0),this.emit("expand")}handleOverlayClose(){this.getComponent("base").collapse()}isExpanded(){return this.getComponent("base").isExpanded()}expand(){this.getComponent("base").expand()}collapse(){this.getComponent("base").collapse()}handleCollapse(){this.setOpen(!1),this.getEl("host").focus(),this.emit("collapse")}}const C="1dizbRwG",p=h(C),T=p;_.r(C,()=>p);const j=Y;p._=g(function(n,t,e,i,c,O){const{a11yCloseButtonText:a,ariaLabel:B,class:H,content:v,disabled:N,heading:b,icon:E,open:ne,pointer:ae="bottom",variant:ie,...q}=n;var s=n.variant==="modal",$=s?"dialog--mini":"infotip";t.be("span",null,"0",i,null,0),r(Q,{open:c.open,type:$,overlayId:e.elId("overlay"),offset:n.offset,pointer:n.pointer,placement:n.placement,renderBody:o=>{o.be("span",F(J(q),{class:L(["infotip",s===!0&&"dialog--mini",H])}),"1",i,null,4,{pa:["class"]}),o.be("button",{class:L([`${$}__host`,"icon-btn","icon-btn--transparent"]),type:"button",disabled:N,"aria-label":B},"@host",i,null,0,{onclick:e.d("click",s&&"handleOpenModal",!1)}),E?y(o,E,null,null,null,null,e,"2"):r(K,{},o,e,"3"),o.ee(),s!==!0&&r(U,{type:"infotip",id:e.elId("overlay"),heading:b,content:v,a11yCloseText:a},o,e,"4",[["overlay-close","handleOverlayClose",!1]]),o.ee()}},t,e,"@base",[["base-expand",s?void 0:"handleExpand",!1],["base-collapse",s?void 0:"handleCollapse",!1]]),t.ee(),s===!0&&r(W,{open:c.open,a11yCloseText:a,ariaLabel:B,header:{renderBody:o=>{y(o,b&&b.renderBody,null,null,null,null,e,"6")},[Symbol.iterator]:l},renderBody:o=>{y(o,v,null,null,null,null,e,"7")}},t,e,"5",[["open","handleExpand",!1],["close","handleCollapse",!1]])},{t:C},j);p.Component=x(j,p._);const k="OzPNp5o+",m=h(k),Z=V("p",null,"1",null,1,0).t("This is some important info");_.r(k,()=>m);const P={};m._=g(function(n,t,e,i,c,O){r(T,{a11yCloseButtonText:"Dismiss infotip",ariaLabel:"Important information",...n,heading:{renderBody:a=>{a.t("Important",i)},[Symbol.iterator]:l},content:{renderBody:a=>{a.n(Z,i)},[Symbol.iterator]:l}},t,e,"0",[["expand","emit",!1,["expand"]],["collapse","emit",!1,["collapse"]]])},{t:k,i:!0},P);m.Component=x(P,m._);const ee=`<ebay-infotip
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
`,I="uuR6Szj0",d=h(I),te=V("p",null,"1",null,1,0).t("This is some important info");_.r(I,()=>d);const G={};d._=g(function(n,t,e,i,c,O){r(T,{a11yCloseButtonText:"Dismiss infotip",ariaLabel:"Important information",open:!0,...n,heading:{renderBody:a=>{a.t("Important",i)},[Symbol.iterator]:l},content:{renderBody:a=>{a.n(te,i)},[Symbol.iterator]:l}},t,e,"0",[["expand","emit",!1,["expand"]],["collapse","emit",!1,["collapse"]]])},{t:I,i:!0},G);d.Component=x(G,d._);const oe=`<ebay-infotip
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
`,Ee={title:"buttons/ebay-infotip",component:T,parameters:{docs:{description:{component:X}}},argTypes:{heading:{name:"@heading",table:{category:"@attribute tags"}},content:{name:"@content",table:{category:"@attribute tags"}},icon:{name:"@icon",table:{category:"@attribute tags"}},variant:{control:{type:"select"},options:["default","modal"],description:"Either modal or default. If modal will show the mobile version of infotip"},placement:{options:["top","right","bottom","left","top-start","right-start","bottom-start","left-start","top-end","right-end","bottom-end","left-end"],control:{type:"select"},description:"places infotip position"},offset:{control:{type:"number"},description:"offsets infotip position",table:{defaultValue:{summary:"6"}}},disabled:{control:{type:"boolean"},description:"adds a `disabled` attribute to the button"},a11yCloseButtonText:{control:{type:"text"},description:"A11y text for close button"},ariaLabel:{control:{type:"text"},description:'A descriptive label of what the infotip button represents (e.g. "Important information")'},open:{control:{type:"boolean"},description:"allows dev to specify whether infotip is open or closed"},onCollapse:{action:"on-collapse",description:"Triggered on menu collapse",table:{category:"Events",defaultValue:{summary:""}}},onExpand:{action:"on-expand",description:"Triggered on menu expand",table:{category:"Events",defaultValue:{summary:""}}}}},f=A(m,ee,{a11yCloseButtonText:"Dismiss infotip",ariaLabel:"Important information"}),u=A(d,oe,{a11yCloseButtonText:"Dismiss infotip",ariaLabel:"Important information",open:!0});var S,w,R;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  a11yCloseButtonText: "Dismiss infotip",
  ariaLabel: "Important information"
})`,...(R=(w=f.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var D,z,M;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`buildExtensionTemplate(OpenOnRenderTemplate, OpenOnRenderTemplateCode, {
  a11yCloseButtonText: "Dismiss infotip",
  ariaLabel: "Important information",
  open: true
})`,...(M=(z=u.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};const $e=["Default","OpenOnRender"];export{f as Default,u as OpenOnRender,$e as __namedExportsOrder,Ee as default};
