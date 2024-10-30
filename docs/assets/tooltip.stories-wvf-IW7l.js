import{t as M}from"./index-CCz6reEH.js";import{a as Y}from"./utils-DWCsNc5l.js";import{t as k,r as v,b as x,d as z,p as N,c as S}from"./registry-CyswyZw5.js";/* empty css                    *//* empty css                */import{_ as O}from"./index-DWCO0K8G.js";import{_ as p}from"./render-tag-CLyPs9qZ.js";import{_ as P}from"./dynamic-tag-CXXozR29.js";import{_ as q,a as G}from"./index-DPsecISu.js";import{h as J}from"./index-CbT4wDAv.js";import{_ as L}from"./index-C9d-pH_p.js";import{i as Q,a as h}from"./attr-tag-DphMQldM.js";import{_ as W}from"./const-element-B9h58Dwq.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-Dv-vWuE6.js";import"./index-Bq4u441m.js";/* empty css             */import"./index-DbKxOVwg.js";import"./index-D7GlLQHj.js";import"./index-CZ_CdPGB.js";const X=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;class Z extends Marko.Component{onCreate(){this.state={open:!1}}onInput(e){(e.open===!0||e.open===!1)&&(this.state.open=e.open)}handleExpand(){this.state.open=!0,this.emit("expand")}handleCollapse(){this.state.open=!1,this.emit("collapse")}handleKeydown(e){J(e,()=>{this.state.open=!1})}}const m="YfTPmpyg",i=k(m),D=typeof window<"u";v.r(m,()=>i);const T=Z;i._=x(function(o,e,t,r,d,I){const{content:n,heading:B,host:$,noHover:V,offset:H,placement:K,pointer:A="bottom",noShift:R,notInline:F,noFlip:U,...j}=o;D&&d.open&&p(O,{to:typeof window=="object"&&document,__events:["on","keydown"]},e,t,"0",[["keydown","handleKeydown",!1]]),e.be("span",null,"1",r,null,0),p(q,{open:d.open,type:"tooltip",overlayId:t.elId("overlay"),noFlip:U,notInline:F,noShift:R,noHover:V,pointer:A,placement:K,offset:H,renderBody:c=>{c.be("span",z(N(j),{class:"tooltip"}),"2",r,null,4,{pa:{class:1}}),P(c,$,null,null,null,null,t,"3"),p(G,{type:"tooltip",id:t.elId("overlay"),heading:B,content:n},c,t,"4"),c.ee()}},e,t,"@base",[["base-expand","handleExpand",!1],["base-collapse","handleCollapse",!1]]),e.ee()},{t:m},T);i.Component=S(T,i._);const b="MRvnaVde",l=k(b),ee=W("p",null,1).t("Use Access Key 'S' to display settings.");v.r(b,()=>l);const C={};l._=x(function(o,e,t,r,d,I){p(i,Q(()=>{h("host",{renderBody:n=>{n.be("button",{name:"icon-btn-1",accesskey:"i",class:"icon-btn tooltip__host",type:"button","aria-label":"Developer-handled label"},"1",r,null,0),p(L,{},n,t,"2"),n.ee()}}),h("content",{renderBody:n=>{n.n(ee,r)}})},{open:o.open}),e,t,"0")},{t:b,i:!0},C);l.Component=S(C,l._);const te=`export interface Input {
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
`,E=o=>({input:Y(o)}),xe={title:"notices & tips/ebay-tooltip",component:i,parameters:{docs:{description:{component:X}}},argTypes:{placement:{options:["top","right","bottom","left","top-start","right-start","bottom-start","left-start","top-end","right-end","bottom-end","left-end"],control:{type:"select"},description:"places tooltip position"},offset:{control:{type:"number"},description:"offsets tooltip position"},noHover:{control:{type:"boolean"},description:"disable hover (and only use focus) to open the tooltip"},host:{name:"@host",description:"The body which will be wrapped as the tooltip's host",table:{category:"@attribute tags"}},content:{name:"@content",description:"The content to be displayed in the tooltip",table:{category:"@attribute tags"}},open:{control:{type:"boolean"},description:"allows dev to specify whether tooltip is open or closed"},noFlip:{control:{type:"boolean"},description:"disables flipping tooltip when its offscreen",table:{defaultValue:{summary:"false"}}},noShift:{control:{type:"boolean"},description:"disables shifting tooltip when its offscreen",table:{defaultValue:{summary:"false"}}},notInline:{control:{type:"boolean"},description:"disables moving tooltip to be inline with content when it is rendered",table:{defaultValue:{summary:"false"}}},onCollapse:{action:"on-collapse",description:"Triggered on menu collapse",table:{category:"Events",defaultValue:{summary:""}}},onExpand:{action:"on-expand",description:"Triggered on menu expand",table:{category:"Events",defaultValue:{summary:""}}}}},a=E.bind({});a.args={host:{renderBody:'<a href="https://www.ebay.com" class="tooltip__host">View options</a>'},content:{renderBody:"<p>Use Access Key 'S' to display settings.</p>"}};a.parameters={docs:{source:{code:M("ebay-tooltip",a.args)}}};const s=o=>({input:E(o).input,component:l});s.parameters={controls:{exclude:/./}};s.parameters={docs:{source:{code:te}}};var y,u,f;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var _,g,w;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  // eslint-disable-next-line new-cap
  input: Template(args).input,
  component: buttonComponent
})`,...(w=(g=s.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};const Se=["Standard","buttonHost"];export{a as Standard,Se as __namedExportsOrder,s as buttonHost,xe as default};
