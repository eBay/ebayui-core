import{t as Q}from"./index-CCz6reEH.js";import{a as V}from"./utils-DWCsNc5l.js";import{_ as b}from"./index-B-JzFWhN.js";import{r as y,b as h,c as f,t as _}from"./registry-CtNeIPU8.js";import{i as T,a as c}from"./attr-tag-DphMQldM.js";import{_ as Z}from"./index-hO5YpS5d.js";import{_ as p}from"./render-tag-mtfFSHEK.js";import{_ as S}from"./empty-component-BCB5DEsP.js";import{_ as U}from"./const-element-D4l_3TxL.js";import"./dynamic-tag-HMZVE1pc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-B6qYX52F.js";/* empty css             */const q=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`,k="lkiUvFp",m=_(k);y.r(k,()=>S);const j={};m._=h(function(t,l,a,o,v,$){p(b,T(()=>(c("subtitle",{renderBody:e=>{e.t("Subtitle",o)}}),c("icon",{renderBody:e=>{p(Z,{},e,a,"1")}}),e=>{e.t("Title",o)}),{layoutType:"list",...t,subtitle:void 0,icon:void 0}),l,a,"0",[["toggle","emit",!1,["toggle"]]])},{t:k,s:!0},j);m.Component=f(j,m._);const J=`<ebay-toggle-button layoutType="list" ...input onToggle("emit", "toggle")>
    Title
    <@subtitle>Subtitle</@subtitle>
    <@icon><ebay-archive-24-icon/></@icon>
</ebay-toggle-button>
`,x="zKtQkrZ",u=_(x);y.r(x,()=>S);const G={};u._=h(function(t,l,a,o,v,$){const{src:e,alt:O,fillPlacement:F,...H}=t;p(b,T(()=>(c("subtitle",{renderBody:d=>{d.t("Subtitle",o)}}),c("img",{src:e,alt:O,fillPlacement:F}),d=>{d.t("Title",o)}),{layoutType:"list",...H,subtitle:void 0,img:void 0}),l,a,"0",[["toggle","emit",!1,["toggle"]]])},{t:x,s:!0},G);u.Component=f(G,u._);const N=`$ const { src, alt, fillPlacement, ...buttonInput } = input
<ebay-toggle-button layoutType="list" ...buttonInput onToggle("emit", "toggle")>
    Title
    <@subtitle>Subtitle</@subtitle>
    <@img src=src alt=alt fillPlacement=fillPlacement />
</ebay-toggle-button>
`,w="hwpwnSK",g=_(w),X=U("p",null,1).t("Subtitle 1"),Y=U("p",null,1).t("Subtitle 2");y.r(w,()=>S);const K={};g._=h(function(t,l,a,o,v,$){p(b,T(()=>(c("subtitle",{renderBody:e=>{e.n(X,o),e.n(Y,o)}}),e=>{e.t("Title",o)}),{layoutType:"list",...t,subtitle:void 0}),l,a,"0",[["toggle","emit",!1,["toggle"]]])},{t:w,s:!0},K);g.Component=f(K,g._);const tt=`<ebay-toggle-button layoutType="list" ...input onToggle("emit", "toggle")>
    Title
    <@subtitle>
        <p>Subtitle 1</p>
        <p>Subtitle 2</p>
    </@subtitle>
</ebay-toggle-button>
`,et=t=>({input:V(t)}),yt={title:"buttons/ebay-toggle-button",component:b,parameters:{docs:{description:{component:q}}},argTypes:{renderBody:{control:{type:"text"}},layoutType:{type:"string",control:{type:"select"},options:["minimal","list","gallery"],description:'Enforced layout type of the button. May be `"minimal"` (default), `"list"`, or `"gallery"`. Gallery layout may only be used when there is also an icon or an image.'},pressed:{type:"boolean",control:{type:"boolean"},description:"Pressed state of the button"},title:{type:"string",control:{type:"text"},description:"Title attribute for the button"},subtitle:{type:"string|@subtitle",control:{type:"text"},description:"Subtitle attribute for the button"},icon:{name:"@icon",description:"An `<ebay-[name]-icon>` to show as the button's icon",table:{category:"@attribute tags"}},img:{name:"@img",description:"An `<img>` to show as the button's image",table:{category:"@attribute tags"}},subtitleTag:{name:"@subtitle",description:"May be used instead of the `subtitle` attribute for more control. Should contain no more than two brief lines of text",table:{category:"@attribute tags"}},src:{table:{category:"@img attributes"},control:{type:"text"},description:"Link to the image source"},alt:{table:{category:"@img attributes"},control:{type:"text"},description:"Alt text for the image"},fillPlacement:{table:{category:"@img attributes"},control:{type:"text"},description:"Placement of the image within the given bounds using the CSS `background-position` property. Options include [keywords, lengths, and edge distances](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position). Using this property will switch the image fit from `contain` to `cover`"},onToggle:{action:"on-toggle",description:"Triggered when the button is toggled",table:{category:"Events",defaultValue:{summary:"{ originalEvent, pressed }"}}}}},n=et.bind({});n.args={renderBody:"Title"};n.parameters={docs:{source:{code:Q("ebay-toggle-button",n.args)}}};const r=t=>({input:t,component:m});r.args={};r.parameters={docs:{source:{code:J}}};const i=t=>({input:t,component:u});i.args={layoutType:"gallery",src:"https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg",fillPlacement:"top"};i.parameters={docs:{source:{code:N}}};const s=t=>({input:t,component:g});s.args={};s.parameters={docs:{source:{code:tt}}};var I,B,C;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(C=(B=n.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var W,P,E;r.parameters={...r.parameters,docs:{...(W=r.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
  input: args,
  component: WithIconTemplate
})`,...(E=(P=r.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var M,D,R;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
  input: args,
  component: WithImageTemplate
})`,...(R=(D=i.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var z,A,L;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  input: args,
  component: MultilineSubtitleTemplate
})`,...(L=(A=s.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};const ht=["Default","WithIcon","WithImage","MultilineSubtitle"];export{n as Default,s as MultilineSubtitle,r as WithIcon,i as WithImage,ht as __namedExportsOrder,yt as default};
