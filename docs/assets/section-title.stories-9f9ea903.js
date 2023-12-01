import{t as G}from"./index-a17a703b.js";import{a as I}from"./utils-44f5c40b.js";import{t as h,r as v,_ as w,g as f,p as _,h as m,j as L,a as S}from"./registry-08dff688.js";import{_ as g}from"./dynamic-tag-bb62150b.js";import{_ as s}from"./self-iterator-81a0b488.js";import{C as N}from"./index-71a30e80.js";import{_ as p}from"./render-tag-73fdbff3.js";import{_ as V}from"./index-2fee81df.js";import{_ as X}from"./index-4d4607bc.js";import"./_commonjsHelpers-725317a4.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-1f66c961.js";/* empty css               */import"./index-9a052758.js";import"./index-e5d8eaff.js";import"./index-3f14fa50.js";/* empty css             */import"./index-7cd25606.js";import"./index-ad737ebd.js";/* empty css                    */import"./index-72fab6ce.js";import"./index-ad2763da.js";import"./index-76d3e631.js";/* empty css             */import"./index-dbe5ade1.js";import"./index-b642b221.js";import"./index-feffb5f2.js";import"./index-8601134f.js";import"./index-124ac9a6.js";import"./index-5f81e013.js";import"./index-2e2d6c5e.js";import"./index-002669f7.js";import"./index-6cab0bb0.js";/* empty css                    *//* empty css             */const Z=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-section-title
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/navigation-disclosure-ebay-section-title)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/navigation-disclosure-ebay-section-title)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-section-title/examples)
`;const T="hNFvZ8bf",b=h(T),k=b;var D=["ctaText","href","title","subtitle","info","overflow"];v.r(T,()=>b);const M={};b._=w(function(e,t,i,o,A,C){const r=e.ctaText||"See All";t.be("div",f(_(e,D),{class:m(["section-title",e.class])}),"0",o,null,4),t.be("div",{class:m(["section-title__title-container",e.title&&e.title.class]),style:L(e.title&&e.title.style)},"1",o,null,1),t.be("h2",{id:i.elId("title"),class:"section-title__title"},"@title",o,null,1),g(t,e.title||e.renderBody,null,null,null,null,i,"2"),t.ee(),e.subtitle&&(t.be("span",f(_(e.subtitle),{class:m(["section-title__subtitle",e.subtitle.class])}),"3",o,null,4),g(t,e.subtitle.renderBody,null,null,null,null,i,"4"),t.ee()),t.ee(),e.info&&(t.be("div",f(_(e.info),{class:m(["section-title__info",e.info.class])}),"5",o,null,4),g(t,e.info.renderBody,null,null,null,null,i,"6"),t.ee()),e.href&&(t.be("div",{class:"section-title__cta"},"7",o,null,1),t.be("a",{href:e.href,tabindex:"-1","aria-hidden":"true"},"8",o,null,0),t.be("span",{class:"section-title__cta-text"},"9",o,null,1),t.t(r,o),t.ee(),t.ee(),t.ee()),e.overflow&&(t.be("div",f(_(e.overflow),{class:m(["section-title__overflow",e.overflow.class])}),"10",o,null,4),g(t,e.overflow.renderBody,null,null,null,null,i,"11"),t.ee()),t.ee()},{t:T,i:!0},M);b.Component=S(M,b._);const B="nW1sEHTF",y=h(B);v.r(B,()=>y);const q={};y._=w(function(e,t,i,o,A,C){p(k,{title:{renderBody:r=>{r.t("Today’s Deals – All With Free Shipping",o)},[Symbol.iterator]:s},subtitle:{renderBody:r=>{r.t("Plus, guaranteed best prices.",o)},[Symbol.iterator]:s},overflow:{renderBody:r=>{const l=[];l.push({renderBody:n=>{n.t("item 1",o)},[Symbol.iterator]:s}),l.push({renderBody:n=>{n.t("item 2",o)},[Symbol.iterator]:s}),l.push({renderBody:n=>{n.t("item 3",o)},[Symbol.iterator]:s}),p(N,{variant:"overflow",a11yText:"eBay Menu",items:l},r,i,"1")},[Symbol.iterator]:s}},t,i,"0")},{t:B,i:!0},q);y.Component=S(q,y._);const J=`<ebay-section-title>
    <@title>Today’s Deals – All With Free Shipping</@title>
    <@subtitle>Plus, guaranteed best prices.</@subtitle>
    <@overflow>
        <ebay-menu-button variant='overflow' a11y-text='eBay Menu'>
            <@item>item 1</@item>
            <@item>item 2</@item>
            <@item>item 3</@item>
        </ebay-menu-button>
    </@overflow>
</ebay-section-title>
`,x="X6GMHuW+",u=h(x);v.r(x,()=>u);const z={};u._=w(function(e,t,i,o,A,C){p(k,{href:"https://www.ebay.com",title:{renderBody:r=>{r.t("Today’s Deals – All With Free Shipping",o)},[Symbol.iterator]:s},subtitle:{renderBody:r=>{r.t("Plus, guaranteed best prices.",o)},[Symbol.iterator]:s},info:{renderBody:r=>{p(X,{renderBody:l=>{p(V,{},l,i,"2")}},r,i,"1")},[Symbol.iterator]:s}},t,i,"0")},{t:x,i:!0},z);u.Component=S(z,u._);const K=`<ebay-section-title href="https://www.ebay.com">
    <@title>Today’s Deals – All With Free Shipping</@title>
    <@subtitle>Plus, guaranteed best prices.</@subtitle>
    <@info>
        <ebay-icon-button>
            <ebay-save-16-icon/>
        </ebay-icon-button>
    </@info>
</ebay-section-title>
`,Q=e=>({input:I(e)}),je={title:"navigation & disclosure/ebay-section-title",component:k,parameters:{docs:{description:{component:Z}}},argTypes:{href:{control:{type:"text"},description:"RL. Title content and optional CTA content will link to this"},ctaText:{control:{type:"text"},description:"The text for the CTA. Only used when href is set.",table:{defaultValue:{summary:"See All"}}},title:{name:"@title",description:"The main title content to be displayed. Title tag is required when using other sub-tags.",table:{category:"@attribute tags"}},subtitle:{name:"@subtitle",description:"The subtitle content to be displayed",table:{category:"@attribute tags"}},info:{name:"@info",control:{type:"json"},description:"Placeholder for `<ebay-infotip>` component",table:{category:"@attribute tags"}},overflow:{name:"@overflow",control:{type:"json"},description:"Placeholder for `<ebay-menu-button>` component",table:{category:"@attribute tags"}}}},a=Q.bind({});a.args={title:{renderBody:"Todays Best Deals"},subtitle:{renderBody:"with free shipping!"}};a.parameters={docs:{source:{code:G("ebay-section-title",a.args)}}};const c=()=>({component:u});c.parameters={docs:{source:{buttonSeeAllComponentCode:K}}};const d=()=>({component:y});d.parameters={docs:{source:{overflowComponentCode:J}}};var $,F,P;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(P=(F=a.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var W,j,O;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`() => ({
  component: buttonSeeAllComponent
})`,...(O=(j=c.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var R,E,H;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`() => ({
  component: overflowComponent
})`,...(H=(E=d.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const Oe=["Standard","iconAndSeeAll","withOverflow"];export{a as Standard,Oe as __namedExportsOrder,je as default,c as iconAndSeeAll,d as withOverflow};
//# sourceMappingURL=section-title.stories-9f9ea903.js.map
