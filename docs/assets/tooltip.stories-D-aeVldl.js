import{t as j}from"./index-CCz6reEH.js";import{a as M}from"./utils-DWCsNc5l.js";import{t as w,r as v,b as x,e as z,p as G,d as T}from"./registry-D0x2Lw0V.js";/* empty css                    */import{_ as L}from"./index-BWLs-RUD.js";import{_ as p}from"./render-tag-Buaq4gMc.js";import{_ as N}from"./dynamic-tag-BSuzyz1c.js";import{_ as O,a as Y}from"./index-B-Dee02Y.js";import{h as q}from"./index-blmbJU0z.js";import{_ as D}from"./index-D0RQY2o_.js";import{i as F,a as y}from"./attr-tag-W-ozfNNY.js";import{_ as J}from"./const-element-DTwCHAHi.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-Cb2Litza.js";import"./index-BZpHAKBe.js";/* empty css             */import"./index-D7B88Psz.js";import"./index-D7GlLQHj.js";import"./index--35j0Bzx.js";const P=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;class Q extends Marko.Component{onCreate(){this.state={open:!1}}onInput(e){(e.open===!0||e.open===!1)&&(this.state.open=e.open)}handleExpand(){this.state.open=!0,this.emit("expand")}handleCollapse(){this.state.open=!1,this.emit("collapse")}handleKeydown(e){q(e,()=>{this.state.open=!1})}}const d="fao1/RDK",i=w(d),B=i,W=typeof window<"u";v.r(d,()=>i);const C=Q;i._=x(function(o,e,t,r,m,$){const{content:n,heading:I,host:K,noHover:H,offset:A,placement:R,pointer:U="bottom",...V}=o;W&&m.open&&p(L,{to:typeof window=="object"&&document,__events:["on","keydown"]},e,t,"0",[["keydown","handleKeydown",!1]]),e.be("span",null,"1",r,null,0),p(O,{open:m.open,type:"tooltip",overlayId:t.elId("overlay"),noHover:H,pointer:U,placement:R,offset:A,renderBody:c=>{c.be("span",z(G(V),{class:"tooltip"}),"2",r,null,4,{pa:{class:1}}),N(c,K,null,null,null,null,t,"3"),p(Y,{type:"tooltip",id:t.elId("overlay"),heading:I,content:n},c,t,"4"),c.ee()}},e,t,"@base",[["base-expand","handleExpand",!1],["base-collapse","handleCollapse",!1]]),e.ee()},{t:d},C);i.Component=T(C,i._);const b="T1UMLGBB",l=w(b),X=J("p",null,1).t("Use Access Key 'S' to display settings.");v.r(b,()=>l);const S={};l._=x(function(o,e,t,r,m,$){p(B,F(()=>{y("host",{renderBody:n=>{n.be("button",{name:"icon-btn-1",accesskey:"i",class:"icon-btn tooltip__host",type:"button","aria-label":"Developer-handled label"},"1",r,null,0),p(D,{},n,t,"2"),n.ee()}}),y("content",{renderBody:n=>{n.n(X,r)}})},{open:o.open}),e,t,"0")},{t:b,i:!0},S);l.Component=T(S,l._);const Z=`export interface Input {
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
`,E=o=>({input:M(o)}),ke={title:"notices & tips/ebay-tooltip",component:B,parameters:{docs:{description:{component:P}}},argTypes:{placement:{options:["top","right","bottom","left","top-start","right-start","bottom-start","left-start","top-end","right-end","bottom-end","left-end"],control:{type:"select"},description:"places tooltip position"},offset:{control:{type:"number"},description:"offsets tooltip position"},noHover:{control:{type:"boolean"},description:"disable hover (and only use focus) to open the tooltip"},host:{name:"@host",description:"The body which will be wrapped as the tooltip's host",table:{category:"@attribute tags"}},content:{name:"@content",description:"The content to be displayed in the tooltip",table:{category:"@attribute tags"}},open:{control:{type:"boolean"},description:"allows dev to specify whether tooltip is open or closed"},onCollapse:{action:"on-collapse",description:"Triggered on menu collapse",table:{category:"Events",defaultValue:{summary:""}}},onExpand:{action:"on-expand",description:"Triggered on menu expand",table:{category:"Events",defaultValue:{summary:""}}}}},a=E.bind({});a.args={host:{renderBody:'<a href="https://www.ebay.com" class="tooltip__host">View options</a>'},content:{renderBody:"<p>Use Access Key 'S' to display settings.</p>"}};a.parameters={docs:{source:{code:j("ebay-tooltip",a.args)}}};const s=o=>({input:E(o).input,component:l});s.parameters={controls:{exclude:/./}};s.parameters={docs:{source:{code:Z}}};var h,u,_;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(_=(u=a.parameters)==null?void 0:u.docs)==null?void 0:_.source}}};var f,g,k;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  // eslint-disable-next-line new-cap
  input: Template(args).input,
  component: buttonComponent
})`,...(k=(g=s.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const we=["Standard","buttonHost"];export{a as Standard,we as __namedExportsOrder,s as buttonHost,ke as default};
