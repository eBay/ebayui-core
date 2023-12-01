import{t as $}from"./index-a17a703b.js";import{a as H}from"./utils-44f5c40b.js";import{t as w,r as v,_ as S,g as K,p as L,a as x}from"./registry-08dff688.js";/* empty css                    */import{_ as A}from"./index-a879355c.js";import{_ as l}from"./render-tag-73fdbff3.js";import{_ as I}from"./dynamic-tag-bb62150b.js";import{_ as U,a as V}from"./index-5a4cbbcd.js";import"./preserve-attrs-3aff3526.js";import{h as j}from"./index-ad737ebd.js";import{_ as z}from"./index-e4d367c5.js";import{_ as h}from"./self-iterator-81a0b488.js";import{_ as G}from"./v-element-062756a8.js";import"./_commonjsHelpers-725317a4.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-155d5ffa.js";import"./index-3f14fa50.js";/* empty css             */import"./index-002669f7.js";import"./index-5f81e013.js";import"./index-6cab0bb0.js";const M=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;const N={onCreate(){this.state={open:!1}},onInput(t){(t.open===!0||t.open===!1)&&(this.state.open=t.open)},handleExpand(){this.state.open=!0,this.emit("expand")},handleCollapse(){this.state.open=!1,this.emit("collapse")},handleKeydown(t){j(t,()=>{this.state.open=!1})}},d="fao1/RDK",p=w(d),B=p,O=typeof window<"u";var Y=["pointer","styleTop","styleLeft","styleRight","styleBottom","noHover","host","content","heading"];v.r(d,()=>p);const T=N;p._=S(function(t,s,e,r,m,R){var o=t.pointer||"bottom";O&&m.open&&l(A,{to:typeof window=="object"&&document,__events:["on","keydown"]},s,e,"0",[["keydown","handleKeydown",!1]]),s.be("span",null,"1",r,null,0),l(U,{open:m.open,type:"tooltip",pointer:o,overlayId:e.elId("overlay"),styleLeft:t.styleLeft,styleTop:t.styleTop,styleRight:t.styleRight,styleBottom:t.styleBottom,noHover:t.noHover,renderBody:c=>{c.be("span",K(L(t,Y),{class:"tooltip"}),"2",r,null,4,{pa:["class"]}),I(c,t.host,null,null,null,null,e,"3"),l(V,{type:"tooltip",id:e.elId("overlay"),pointer:o,styleLeft:t.styleLeft,styleTop:t.styleTop,styleRight:t.styleRight,styleBottom:t.styleBottom,heading:t.heading,content:t.content},c,e,"4"),c.ee()}},s,e,"@base",[["base-expand","handleExpand",!1],["base-collapse","handleCollapse",!1]]),s.ee()},{t:d},T);p.Component=x(T,p._);const y="T1UMLGBB",i=w(y),q=G("p",null,"3",null,1,0).t("Use Access Key 'S' to display settings.");v.r(y,()=>i);const C={};i._=S(function(t,s,e,r,m,R){l(B,{open:t.open,host:{renderBody:o=>{o.be("button",{name:"icon-btn-1",accesskey:"i",class:"icon-btn tooltip__host",type:"button","aria-label":"Developer-handled label"},"1",r,null,0),l(z,{},o,e,"2"),o.ee()},[Symbol.iterator]:h},content:{renderBody:o=>{o.n(q,r)},[Symbol.iterator]:h}},s,e,"0")},{t:y,i:!0},C);i.Component=x(C,i._);const D=`<ebay-tooltip open=input.open>
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
`,E=t=>({input:H(t)}),ht={title:"notices & tips/ebay-tooltip",component:B,parameters:{docs:{description:{component:M}}},argTypes:{pointer:{options:["top-left","top","top-right","right","right-bottom","right-top","bottom-left","bottom-right","bottom","left","left-bottom","left-top"],control:{type:"select"},description:"options are `top-left`, `top`, `top-right`, `right`, `right-bottom`, `right-top`, `bottom-left`, `bottom-right`, `bottom`, `left`, `left-bottom`, `left-top`"},styleTop:{control:{type:"text"},description:"a style property for the CSS `top` rule"},styleLeft:{control:{type:"text"},description:"a style property for the CSS `left` rule"},styleRight:{control:{type:"text"},description:"a style property for the CSS `right` rule"},styleBottom:{control:{type:"text"},description:"a style property for the CSS `bottom` rule"},noHover:{control:{type:"boolean"},description:"disable hover (and only use focus) to open the tooltip"},host:{name:"@host",description:"The body which will be wrapped as the tooltip's host",table:{category:"@attribute tags"}},content:{name:"@content",description:"The content to be displayed in the tooltip",table:{category:"@attribute tags"}},open:{control:{type:"boolean"},description:"allows dev to specify whether tooltip is open or closed"},onCollapse:{action:"on-collapse",description:"Triggered on menu collapse",table:{category:"Events",defaultValue:{summary:""}}},onExpand:{action:"on-expand",description:"Triggered on menu expand",table:{category:"Events",defaultValue:{summary:""}}}}},n=E.bind({});n.args={host:{renderBody:'<a href="https://www.ebay.com" class="tooltip__host">View options</a>'},content:{renderBody:"<p>Use Access Key 'S' to display settings.</p>"}};n.parameters={docs:{source:{code:$("ebay-tooltip",n.args)}}};const a=t=>({input:E(t).input,component:i});a.parameters={controls:{exclude:/./}};a.parameters={docs:{source:{code:D}}};var b,g,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var _,u,k;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  // eslint-disable-next-line new-cap
  input: Template(args).input,
  component: buttonComponent
})`,...(k=(u=a.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};const bt=["Standard","buttonHost"];export{n as Standard,bt as __namedExportsOrder,a as buttonHost,ht as default};
//# sourceMappingURL=tooltip.stories-19ee0f61.js.map
