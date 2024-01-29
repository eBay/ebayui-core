import{t as j}from"./index-iqhZMf16.js";import{a as M}from"./utils-NX-dnf4r.js";import{t as w,r as v,b as x,f as z,p as G,d as S}from"./registry-EgEQwbXk.js";/* empty css                    */import{_ as L}from"./index-VGoHc-V3.js";import{_ as p}from"./render-tag-_0PNNh6Y.js";import{_ as N}from"./dynamic-tag-7vXwaVzE.js";import{_ as O,a as Y}from"./index-eY5gfr9K.js";import"./preserve-attrs-lolIpBRv.js";import{h as q}from"./index-XjwwBzg5.js";import{_ as D}from"./index-gHYaHbb4.js";import{_ as y}from"./self-iterator-6yU_KG2T.js";import{_ as F}from"./v-element-wxdcHeY-.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";import"./index-MJalx9GY.js";import"./index-rIGlTtcv.js";/* empty css             */import"./index-l3FQEXUN.js";import"./index-QGVtTfuc.js";import"./index-ERL0bCNR.js";const J=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;class P extends Marko.Component{onCreate(){this.state={open:!1}}onInput(t){(t.open===!0||t.open===!1)&&(this.state.open=t.open)}handleExpand(){this.state.open=!0,this.emit("expand")}handleCollapse(){this.state.open=!1,this.emit("collapse")}handleKeydown(t){q(t,()=>{this.state.open=!1})}}const d="fao1/RDK",i=w(d),T=i,Q=typeof window<"u";v.r(d,()=>i);const B=P;i._=x(function(o,t,e,r,m,$){const{content:n,heading:I,host:K,noHover:H,offset:A,placement:R,pointer:U="bottom",...V}=o;Q&&m.open&&p(L,{to:typeof window=="object"&&document,__events:["on","keydown"]},t,e,"0",[["keydown","handleKeydown",!1]]),t.be("span",null,"1",r,null,0),p(O,{open:m.open,type:"tooltip",overlayId:e.elId("overlay"),noHover:H,pointer:U,placement:R,offset:A,renderBody:c=>{c.be("span",z(G(V),{class:"tooltip"}),"2",r,null,4,{pa:["class"]}),N(c,K,null,null,null,null,e,"3"),p(Y,{type:"tooltip",id:e.elId("overlay"),heading:I,content:n},c,e,"4"),c.ee()}},t,e,"@base",[["base-expand","handleExpand",!1],["base-collapse","handleCollapse",!1]]),t.ee()},{t:d},B);i.Component=S(B,i._);const b="T1UMLGBB",l=w(b),W=F("p",null,"3",null,1,0).t("Use Access Key 'S' to display settings.");v.r(b,()=>l);const C={};l._=x(function(o,t,e,r,m,$){p(T,{open:o.open,host:{renderBody:n=>{n.be("button",{name:"icon-btn-1",accesskey:"i",class:"icon-btn tooltip__host",type:"button","aria-label":"Developer-handled label"},"1",r,null,0),p(D,{},n,e,"2"),n.ee()},[Symbol.iterator]:y},content:{renderBody:n=>{n.n(W,r)},[Symbol.iterator]:y}},t,e,"0")},{t:b,i:!0},C);l.Component=S(C,l._);const X=`export interface Input {
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
`,E=o=>({input:M(o)}),kt={title:"notices & tips/ebay-tooltip",component:T,parameters:{docs:{description:{component:J}}},argTypes:{placement:{options:["top","right","bottom","left","top-start","right-start","bottom-start","left-start","top-end","right-end","bottom-end","left-end"],control:{type:"select"},description:"places tooltip position"},offset:{control:{type:"number"},description:"offsets tooltip position"},noHover:{control:{type:"boolean"},description:"disable hover (and only use focus) to open the tooltip"},host:{name:"@host",description:"The body which will be wrapped as the tooltip's host",table:{category:"@attribute tags"}},content:{name:"@content",description:"The content to be displayed in the tooltip",table:{category:"@attribute tags"}},open:{control:{type:"boolean"},description:"allows dev to specify whether tooltip is open or closed"},onCollapse:{action:"on-collapse",description:"Triggered on menu collapse",table:{category:"Events",defaultValue:{summary:""}}},onExpand:{action:"on-expand",description:"Triggered on menu expand",table:{category:"Events",defaultValue:{summary:""}}}}},a=E.bind({});a.args={host:{renderBody:'<a href="https://www.ebay.com" class="tooltip__host">View options</a>'},content:{renderBody:"<p>Use Access Key 'S' to display settings.</p>"}};a.parameters={docs:{source:{code:j("ebay-tooltip",a.args)}}};const s=o=>({input:E(o).input,component:l});s.parameters={controls:{exclude:/./}};s.parameters={docs:{source:{code:X}}};var h,u,_;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(_=(u=a.parameters)==null?void 0:u.docs)==null?void 0:_.source}}};var f,g,k;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  // eslint-disable-next-line new-cap
  input: Template(args).input,
  component: buttonComponent
})`,...(k=(g=s.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const wt=["Standard","buttonHost"];export{a as Standard,wt as __namedExportsOrder,s as buttonHost,kt as default};
