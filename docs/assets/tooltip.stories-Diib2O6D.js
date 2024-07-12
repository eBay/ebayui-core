import{t as Y}from"./index-CCz6reEH.js";import{a as z}from"./utils-DWCsNc5l.js";import{t as k,r as v,b as x,e as N,p as O,d as S}from"./registry-B-klnak9.js";/* empty css                    */import{_ as P}from"./index-C_i8Cqa-.js";import{_ as r}from"./render-tag-BBOJ9dEX.js";import{_ as q}from"./dynamic-tag-DQCvkDdb.js";import{_ as G,a as J}from"./index-CHOwn5yG.js";import{h as L}from"./index-blmbJU0z.js";import{_ as Q}from"./index-r__B1H68.js";import{i as W,a as h}from"./attr-tag-DphMQldM.js";import{_ as X}from"./const-element-Usj7mXQw.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-B7rF6VLM.js";import"./index-dBnCH2W1.js";/* empty css             */import"./index-D7B88Psz.js";import"./index-D7GlLQHj.js";import"./index--35j0Bzx.js";const Z=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;class D extends Marko.Component{onCreate(){this.state={open:!1}}onInput(e){(e.open===!0||e.open===!1)&&(this.state.open=e.open)}handleExpand(){this.state.open=!0,this.emit("expand")}handleCollapse(){this.state.open=!1,this.emit("collapse")}handleKeydown(e){L(e,()=>{this.state.open=!1})}}const m="YfTPmpyg",p=k(m),T=p,ee=typeof window<"u";v.r(m,()=>p);const C=D;p._=x(function(o,e,t,i,d,B){const{content:n,heading:$,host:V,noHover:H,offset:K,placement:A,pointer:R="bottom",noShift:F,notInline:U,noFlip:j,...M}=o;ee&&d.open&&r(P,{to:typeof window=="object"&&document,__events:["on","keydown"]},e,t,"0",[["keydown","handleKeydown",!1]]),e.be("span",null,"1",i,null,0),r(G,{open:d.open,type:"tooltip",overlayId:t.elId("overlay"),noFlip:j,notInline:U,noShift:F,noHover:H,pointer:R,placement:A,offset:K,renderBody:c=>{c.be("span",N(O(M),{class:"tooltip"}),"2",i,null,4,{pa:{class:1}}),q(c,V,null,null,null,null,t,"3"),r(J,{type:"tooltip",id:t.elId("overlay"),heading:$,content:n},c,t,"4"),c.ee()}},e,t,"@base",[["base-expand","handleExpand",!1],["base-collapse","handleCollapse",!1]]),e.ee()},{t:m},C);p.Component=S(C,p._);const b="MRvnaVde",l=k(b),te=X("p",null,1).t("Use Access Key 'S' to display settings.");v.r(b,()=>l);const E={};l._=x(function(o,e,t,i,d,B){r(T,W(()=>{h("host",{renderBody:n=>{n.be("button",{name:"icon-btn-1",accesskey:"i",class:"icon-btn tooltip__host",type:"button","aria-label":"Developer-handled label"},"1",i,null,0),r(Q,{},n,t,"2"),n.ee()}}),h("content",{renderBody:n=>{n.n(te,i)}})},{open:o.open}),e,t,"0")},{t:b,i:!0},E);l.Component=S(E,l._);const oe=`export interface Input {
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
`,I=o=>({input:z(o)}),xe={title:"notices & tips/ebay-tooltip",component:T,parameters:{docs:{description:{component:Z}}},argTypes:{placement:{options:["top","right","bottom","left","top-start","right-start","bottom-start","left-start","top-end","right-end","bottom-end","left-end"],control:{type:"select"},description:"places tooltip position"},offset:{control:{type:"number"},description:"offsets tooltip position"},noHover:{control:{type:"boolean"},description:"disable hover (and only use focus) to open the tooltip"},host:{name:"@host",description:"The body which will be wrapped as the tooltip's host",table:{category:"@attribute tags"}},content:{name:"@content",description:"The content to be displayed in the tooltip",table:{category:"@attribute tags"}},open:{control:{type:"boolean"},description:"allows dev to specify whether tooltip is open or closed"},noFlip:{control:{type:"boolean"},description:"disables flipping tooltip when its offscreen",table:{defaultValue:{summary:"false"}}},noShift:{control:{type:"boolean"},description:"disables shifting tooltip when its offscreen",table:{defaultValue:{summary:"false"}}},notInline:{control:{type:"boolean"},description:"disables moving tooltip to be inline with content when it is rendered",table:{defaultValue:{summary:"false"}}},onCollapse:{action:"on-collapse",description:"Triggered on menu collapse",table:{category:"Events",defaultValue:{summary:""}}},onExpand:{action:"on-expand",description:"Triggered on menu expand",table:{category:"Events",defaultValue:{summary:""}}}}},a=I.bind({});a.args={host:{renderBody:'<a href="https://www.ebay.com" class="tooltip__host">View options</a>'},content:{renderBody:"<p>Use Access Key 'S' to display settings.</p>"}};a.parameters={docs:{source:{code:Y("ebay-tooltip",a.args)}}};const s=o=>({input:I(o).input,component:l});s.parameters={controls:{exclude:/./}};s.parameters={docs:{source:{code:oe}}};var y,u,f;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var _,g,w;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  // eslint-disable-next-line new-cap
  input: Template(args).input,
  component: buttonComponent
})`,...(w=(g=s.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};const Se=["Standard","buttonHost"];export{a as Standard,Se as __namedExportsOrder,s as buttonHost,xe as default};
