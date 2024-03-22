import{t as V}from"./index-CCz6reEH.js";import{a as Z}from"./utils-DWCsNc5l.js";import{c as b}from"./index-T2ggES50.js";import{r as y,b as h,d as f,t as _}from"./registry-DoALHDDx.js";import{i as T,a as c}from"./attr-tag-DphMQldM.js";import{_ as q}from"./index-B4yidIVj.js";import{_ as g}from"./render-tag-BBOJ9dEX.js";import{_ as j}from"./const-element-_KqHYBBN.js";import"./dynamic-tag-B1GLaPEW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-mP6JM4Am.js";/* empty css             */const F=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-toggle-button
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.0.0
    </span>
</h1>

Group of toggle buttons.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/buttons-ebay-toggle-button)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/buttons-ebay-toggle-button)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-toggle-button/examples)
`,S="BZ89/ARx",u=_(S);y.r(S,()=>u);const G={};u._=h(function(t,l,a,o,v,w){g(b,T(()=>(c("subtitle",{renderBody:e=>{e.t("Subtitle",o)}}),c("icon",{renderBody:e=>{g(q,{},e,a,"1")}}),e=>{e.t("Title",o)}),{layoutType:"list",...t,subtitle:void 0,icon:void 0}),l,a,"0",[["toggle","emit",!1,["toggle"]]])},{t:S,i:!0},G);u.Component=f(G,u._);const J=`<ebay-toggle-button layoutType="list" ...input onToggle("emit", "toggle")>
    Title
    <@subtitle>Subtitle</@subtitle>
    <@icon><ebay-archive-24-icon/></@icon>
</ebay-toggle-button>
`,k="EoQzbGzS",p=_(k);y.r(k,()=>p);const L={};p._=h(function(t,l,a,o,v,w){const{src:e,alt:O,fillPlacement:H,...Q}=t;g(b,T(()=>(c("subtitle",{renderBody:d=>{d.t("Subtitle",o)}}),c("img",{src:e,alt:O,fillPlacement:H}),d=>{d.t("Title",o)}),{layoutType:"list",...Q,subtitle:void 0,img:void 0}),l,a,"0",[["toggle","emit",!1,["toggle"]]])},{t:k,i:!0},L);p.Component=f(L,p._);const K=`$ const { src, alt, fillPlacement, ...buttonInput } = input
<ebay-toggle-button layoutType="list" ...buttonInput onToggle("emit", "toggle")>
    Title
    <@subtitle>Subtitle</@subtitle>
    <@img src=src alt=alt fillPlacement=fillPlacement />
</ebay-toggle-button>
`,x="DUjx0c59",m=_(x),N=j("p",null,1).t("Subtitle 1"),X=j("p",null,1).t("Subtitle 2");y.r(x,()=>m);const U={};m._=h(function(t,l,a,o,v,w){g(b,T(()=>(c("subtitle",{renderBody:e=>{e.n(N,o),e.n(X,o)}}),e=>{e.t("Title",o)}),{layoutType:"list",...t,subtitle:void 0}),l,a,"0",[["toggle","emit",!1,["toggle"]]])},{t:x,i:!0},U);m.Component=f(U,m._);const Y=`<ebay-toggle-button layoutType="list" ...input onToggle("emit", "toggle")>
    Title
    <@subtitle>
        <p>Subtitle 1</p>
        <p>Subtitle 2</p>
    </@subtitle>
</ebay-toggle-button>
`,tt=t=>({input:Z(t)}),bt={title:"buttons/ebay-toggle-button",component:b,parameters:{docs:{description:{component:F}}},argTypes:{renderBody:{control:{type:"text"}},layoutType:{type:"string",control:{type:"select"},options:["minimal","list","gallery"],description:'Enforced layout type of the button. May be `"minimal"` (default), `"list"`, or `"gallery"`. Gallery layout may only be used when there is also an icon or an image.'},pressed:{type:"boolean",control:{type:"boolean"},description:"Pressed state of the button"},title:{type:"string",control:{type:"text"},description:"Title attribute for the button"},subtitle:{type:"string|@subtitle",control:{type:"text"},description:"Subtitle attribute for the button"},icon:{name:"@icon",description:"An `<ebay-[name]-icon>` to show as the button's icon",table:{category:"@attribute tags"}},img:{name:"@img",description:"An `<img>` to show as the button's image",table:{category:"@attribute tags"}},subtitleTag:{name:"@subtitle",description:"May be used instead of the `subtitle` attribute for more control. Should contain no more than two brief lines of text",table:{category:"@attribute tags"}},src:{table:{category:"@img attributes"},control:{type:"text"},description:"Link to the image source"},alt:{table:{category:"@img attributes"},control:{type:"text"},description:"Alt text for the image"},fillPlacement:{table:{category:"@img attributes"},control:{type:"text"},description:"Placement of the image within the given bounds using the CSS `background-position` property. Options include [keywords, lengths, and edge distances](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position). Using this property will switch the image fit from `contain` to `cover`"},onToggle:{action:"on-toggle",description:"Triggered when the button is toggled",table:{category:"Events",defaultValue:{summary:"{ originalEvent, pressed }"}}}}},n=tt.bind({});n.args={renderBody:"Title"};n.parameters={docs:{source:{code:V("ebay-toggle-button",n.args)}}};const r=t=>({input:t,component:u});r.args={};r.parameters={docs:{source:{code:J}}};const i=t=>({input:t,component:p});i.args={layoutType:"gallery",src:"https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg",fillPlacement:"top"};i.parameters={docs:{source:{code:K}}};const s=t=>({input:t,component:m});s.args={};s.parameters={docs:{source:{code:Y}}};var B,I,$;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...($=(I=n.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var C,W,P;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  input: args,
  component: WithIconTemplate
})`,...(P=(W=r.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var E,M,D;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  input: args,
  component: WithImageTemplate
})`,...(D=(M=i.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var R,z,A;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
  input: args,
  component: MultilineSubtitleTemplate
})`,...(A=(z=s.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const dt=["Default","WithIcon","WithImage","MultilineSubtitle"];export{n as Default,s as MultilineSubtitle,r as WithIcon,i as WithImage,dt as __namedExportsOrder,bt as default};
