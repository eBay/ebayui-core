<<<<<<< HEAD:docs/assets/tooltip.stories-B8WMOyZ0.js
import{t as z}from"./index-CCz6reEH.js";import{a as G}from"./utils-DWCsNc5l.js";import{t as k,r as v,b as x,f as L,p as N,d as S}from"./registry-Cc025Aii.js";/* empty css                    */import{_ as O}from"./index-COp_WJMj.js";import{_ as r}from"./render-tag-BBOJ9dEX.js";import{_ as Y}from"./dynamic-tag-BtS2B08A.js";import{_ as q,a as D}from"./index-CKYh-FyJ.js";import{h as J}from"./index-blmbJU0z.js";import{_ as P}from"./index-C--JGEo7.js";import{i as Q,a as h}from"./attr-tag-DphMQldM.js";import{_ as W}from"./const-element-VPRvcpko.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-kmWx9eiN.js";import"./index-oHjhF9YT.js";/* empty css             */import"./index-D7B88Psz.js";import"./index-D7GlLQHj.js";import"./index--35j0Bzx.js";const X=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
=======
import{t as z}from"./index-CCz6reEH.js";import{a as G}from"./utils-DWCsNc5l.js";import{t as k,r as v,b as x,e as L,p as N,d as S}from"./registry-DcejNBCz.js";/* empty css                    */import{_ as O}from"./index-B0OhA0dc.js";import{_ as r}from"./render-tag-BBOJ9dEX.js";import{_ as Y}from"./dynamic-tag-CH7Ufq3Q.js";import{_ as q,a as D}from"./index-DpgS2nlb.js";import{h as J}from"./index-blmbJU0z.js";import{_ as P}from"./index-BMCH3HuO.js";import{i as Q,a as h}from"./attr-tag-DphMQldM.js";import{_ as W}from"./const-element-Bq6J7aqh.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-CkvNWpCJ.js";import"./index-CenZB3al.js";/* empty css             */import"./index-D7B88Psz.js";import"./index-D7GlLQHj.js";import"./index--35j0Bzx.js";const X=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
>>>>>>> 0dd633d3f26a93f2dac2c5dddbe8a62ca57c0af5:docs/assets/tooltip.stories-BIC8ArKc.js
    <span>
        ebay-tooltip
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

**Note:** You must supply the \`.tooltip__host\` class to the element in the \`<@host>\` to
which you would like to have the tooltip hover and focus event bindings. In the case that your element
is not focusable, the first focusable element will trigger the tooltip's focus events.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/notices-tips-ebay-tooltip)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/notices-tips-ebay-tooltip)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-tooltip/examples)
`;class Z extends Marko.Component{onCreate(){this.state={open:!1}}onInput(e){(e.open===!0||e.open===!1)&&(this.state.open=e.open)}handleExpand(){this.state.open=!0,this.emit("expand")}handleCollapse(){this.state.open=!1,this.emit("collapse")}handleKeydown(e){J(e,()=>{this.state.open=!1})}}const m="fao1/RDK",p=k(m),T=p,ee=typeof window<"u";v.r(m,()=>p);const B=Z;p._=x(function(o,e,t,i,d,I){const{content:n,heading:$,host:K,noHover:H,offset:V,placement:A,pointer:R="bottom",noShift:U,notInline:F,noFlip:j,...M}=o;ee&&d.open&&r(O,{to:typeof window=="object"&&document,__events:["on","keydown"]},e,t,"0",[["keydown","handleKeydown",!1]]),e.be("span",null,"1",i,null,0),r(q,{open:d.open,type:"tooltip",overlayId:t.elId("overlay"),noFlip:j,notInline:F,noShift:U,noHover:H,pointer:R,placement:A,offset:V,renderBody:c=>{c.be("span",L(N(M),{class:"tooltip"}),"2",i,null,4,{pa:{class:1}}),Y(c,K,null,null,null,null,t,"3"),r(D,{type:"tooltip",id:t.elId("overlay"),heading:$,content:n},c,t,"4"),c.ee()}},e,t,"@base",[["base-expand","handleExpand",!1],["base-collapse","handleCollapse",!1]]),e.ee()},{t:m},B);p.Component=S(B,p._);const b="T1UMLGBB",l=k(b),te=W("p",null,1).t("Use Access Key 'S' to display settings.");v.r(b,()=>l);const C={};l._=x(function(o,e,t,i,d,I){r(T,Q(()=>{h("host",{renderBody:n=>{n.be("button",{name:"icon-btn-1",accesskey:"i",class:"icon-btn tooltip__host",type:"button","aria-label":"Developer-handled label"},"1",i,null,0),r(P,{},n,t,"2"),n.ee()}}),h("content",{renderBody:n=>{n.n(te,i)}})},{open:o.open}),e,t,"0")},{t:b,i:!0},C);l.Component=S(C,l._);const oe=`export interface Input {
    open: boolean;
}

<ebay-tooltip open=input.open>
    <@host>
        <button
            name="icon-btn-1"
            accesskey="i"
            class="icon-btn tooltip__host"
            type="button"
            aria-label="Developer-handled label">
            <ebay-cart-24-icon/>
        </button>
    </@host>
    <@content>
        <p>Use Access Key 'S' to display settings.</p>
    </@content>
</ebay-tooltip>
`,E=o=>({input:G(o)}),xe={title:"notices & tips/ebay-tooltip",component:T,parameters:{docs:{description:{component:X}}},argTypes:{placement:{options:["top","right","bottom","left","top-start","right-start","bottom-start","left-start","top-end","right-end","bottom-end","left-end"],control:{type:"select"},description:"places tooltip position"},offset:{control:{type:"number"},description:"offsets tooltip position"},noHover:{control:{type:"boolean"},description:"disable hover (and only use focus) to open the tooltip"},host:{name:"@host",description:"The body which will be wrapped as the tooltip's host",table:{category:"@attribute tags"}},content:{name:"@content",description:"The content to be displayed in the tooltip",table:{category:"@attribute tags"}},open:{control:{type:"boolean"},description:"allows dev to specify whether tooltip is open or closed"},noFlip:{control:{type:"boolean"},description:"disables flipping tooltip when its offscreen",table:{defaultValue:{summary:"false"}}},noShift:{control:{type:"boolean"},description:"disables shifting tooltip when its offscreen",table:{defaultValue:{summary:"false"}}},notInline:{control:{type:"boolean"},description:"disables moving tooltip to be inline with content when it is rendered",table:{defaultValue:{summary:"false"}}},onCollapse:{action:"on-collapse",description:"Triggered on menu collapse",table:{category:"Events",defaultValue:{summary:""}}},onExpand:{action:"on-expand",description:"Triggered on menu expand",table:{category:"Events",defaultValue:{summary:""}}}}},a=E.bind({});a.args={host:{renderBody:'<a href="https://www.ebay.com" class="tooltip__host">View options</a>'},content:{renderBody:"<p>Use Access Key 'S' to display settings.</p>"}};a.parameters={docs:{source:{code:z("ebay-tooltip",a.args)}}};const s=o=>({input:E(o).input,component:l});s.parameters={controls:{exclude:/./}};s.parameters={docs:{source:{code:oe}}};var y,u,f;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var _,g,w;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  // eslint-disable-next-line new-cap
  input: Template(args).input,
  component: buttonComponent
})`,...(w=(g=s.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};const Se=["Standard","buttonHost"];export{a as Standard,Se as __namedExportsOrder,s as buttonHost,xe as default};
