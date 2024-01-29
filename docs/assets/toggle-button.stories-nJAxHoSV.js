import{t as Q}from"./index-iqhZMf16.js";import{a as V}from"./utils-NX-dnf4r.js";import{c as b}from"./index-fVK3ApgG.js";import{r as y,b as h,d as f,t as _}from"./registry-EgEQwbXk.js";import{_ as c}from"./self-iterator-6yU_KG2T.js";import{_ as Z}from"./index-2gAmNIEZ.js";import{_ as g}from"./render-tag-_0PNNh6Y.js";import{_ as A}from"./v-element-wxdcHeY-.js";import"./dynamic-tag-7vXwaVzE.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";import"./index-rIGlTtcv.js";/* empty css             */const q=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`,S="BZ89/ARx",m=_(S);y.r(S,()=>m);const j={};m._=h(function(t,l,r,o,x,B){g(b,{layoutType:"list",...t,subtitle:{renderBody:e=>{e.t("Subtitle",o)},[Symbol.iterator]:c},icon:{renderBody:e=>{g(Z,{},e,r,"1")},[Symbol.iterator]:c},renderBody:e=>{e.t("Title",o)}},l,r,"0",[["toggle","emit",!1,["toggle"]]])},{t:S,i:!0},j);m.Component=f(j,m._);const F=`<ebay-toggle-button layoutType="list" ...input onToggle("emit", "toggle")>
    Title
    <@subtitle>Subtitle</@subtitle>
    <@icon><ebay-archive-24-icon/></@icon>
</ebay-toggle-button>
`,T="EoQzbGzS",p=_(T);y.r(T,()=>p);const G={};p._=h(function(t,l,r,o,x,B){const{src:e,alt:U,fillPlacement:O,...H}=t;g(b,{layoutType:"list",...H,subtitle:{renderBody:d=>{d.t("Subtitle",o)},[Symbol.iterator]:c},img:{src:e,alt:U,fillPlacement:O,[Symbol.iterator]:c},renderBody:d=>{d.t("Title",o)}},l,r,"0",[["toggle","emit",!1,["toggle"]]])},{t:T,i:!0},G);p.Component=f(G,p._);const J=`$ const { src, alt, fillPlacement, ...buttonInput } = input
<ebay-toggle-button layoutType="list" ...buttonInput onToggle("emit", "toggle")>
    Title
    <@subtitle>Subtitle</@subtitle>
    <@img src=src alt=alt fillPlacement=fillPlacement />
</ebay-toggle-button>
`,k="DUjx0c59",u=_(k),K=A("p",null,"1",null,1,0).t("Subtitle 1"),N=A("p",null,"2",null,1,0).t("Subtitle 2");y.r(k,()=>u);const L={};u._=h(function(t,l,r,o,x,B){g(b,{layoutType:"list",...t,subtitle:{renderBody:e=>{e.n(K,o),e.n(N,o)},[Symbol.iterator]:c},renderBody:e=>{e.t("Title",o)}},l,r,"0",[["toggle","emit",!1,["toggle"]]])},{t:k,i:!0},L);u.Component=f(L,u._);const X=`<ebay-toggle-button layoutType="list" ...input onToggle("emit", "toggle")>
    Title
    <@subtitle>
        <p>Subtitle 1</p>
        <p>Subtitle 2</p>
    </@subtitle>
</ebay-toggle-button>
`,Y=t=>({input:V(t)}),gt={title:"buttons/ebay-toggle-button",component:b,parameters:{docs:{description:{component:q}}},argTypes:{renderBody:{control:{type:"text"}},layoutType:{type:"string",control:{type:"select"},options:["minimal","list","gallery"],description:'Enforced layout type of the button. May be `"minimal"` (default), `"list"`, or `"gallery"`. Gallery layout may only be used when there is also an icon or an image.'},pressed:{type:"boolean",control:{type:"boolean"},description:"Pressed state of the button"},title:{type:"string",control:{type:"text"},description:"Title attribute for the button"},subtitle:{type:"string|@subtitle",control:{type:"text"},description:"Subtitle attribute for the button"},icon:{name:"@icon",description:"An `<ebay-[name]-icon>` to show as the button's icon",table:{category:"@attribute tags"}},img:{name:"@img",description:"An `<img>` to show as the button's image",table:{category:"@attribute tags"}},subtitleTag:{name:"@subtitle",description:"May be used instead of the `subtitle` attribute for more control. Should contain no more than two brief lines of text",table:{category:"@attribute tags"}},src:{table:{category:"@img attributes"},control:{type:"text"},description:"Link to the image source"},alt:{table:{category:"@img attributes"},control:{type:"text"},description:"Alt text for the image"},fillPlacement:{table:{category:"@img attributes"},control:{type:"text"},description:"Placement of the image within the given bounds using the CSS `background-position` property. Options include [keywords, lengths, and edge distances](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position). Using this property will switch the image fit from `contain` to `cover`"},onToggle:{action:"on-toggle",description:"Triggered when the button is toggled",table:{category:"Events",defaultValue:{summary:"{ originalEvent, pressed }"}}}}},n=Y.bind({});n.args={renderBody:"Title"};n.parameters={docs:{source:{code:Q("ebay-toggle-button",n.args)}}};const a=t=>({input:t,component:m});a.args={};a.parameters={docs:{source:{code:F}}};const i=t=>({input:t,component:p});i.args={layoutType:"gallery",src:"https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg",fillPlacement:"top"};i.parameters={docs:{source:{code:J}}};const s=t=>({input:t,component:u});s.args={};s.parameters={docs:{source:{code:X}}};var w,I,$;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...($=(I=n.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var C,W,P;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  input: args,
  component: WithIconTemplate
})`,...(P=(W=a.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var E,v,M;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  input: args,
  component: WithImageTemplate
})`,...(M=(v=i.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var D,R,z;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
  input: args,
  component: MultilineSubtitleTemplate
})`,...(z=(R=s.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};const bt=["Default","WithIcon","WithImage","MultilineSubtitle"];export{n as Default,s as MultilineSubtitle,a as WithIcon,i as WithImage,bt as __namedExportsOrder,gt as default};
