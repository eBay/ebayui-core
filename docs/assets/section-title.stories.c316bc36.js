import{t as q}from"./index.bcb3df20.js";import{a as z}from"./utils.f000f876.js";import{t as v,r as w,a as S,d as T,m as f,c as m,p as h,s as G}from"./merge-attrs.9e0d7be9.js";import{d as g}from"./dynamic-tag.70156c9d.js";import{s as i}from"./self-iterator.45abe0c9.js";import{C as L}from"./index.d33c8785.js";import{r as p}from"./render-tag.1a0b986f.js";import{_ as N}from"./index.545aac0a.js";import{_ as X}from"./index.4eb9bcd1.js";import"./_commonjsHelpers.b8add541.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./index.8ef6a7cb.js";/* empty css               */import"./index.0ffc8829.js";import"./index.e64e9ede.js";import"./index.aa2d3137.js";/* empty css             */import"./index.7b11c326.js";import"./index.cfa4da37.js";/* empty css                    */import"./index.f09b57c3.js";import"./index.b54ea0ad.js";import"./index.2c18e3c5.js";/* empty css             */import"./index.50b31a36.js";import"./index.6c3a3a4b.js";import"./index.b652c17c.js";import"./index.6c907e4a.js";import"./index.1549cc8a.js";import"./index.34cc28ab.js";import"./index.2f593d82.js";import"./index.0b516267.js";import"./index.8e5d5614.js";/* empty css                    *//* empty css             */const Z=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;const _="hNFvZ8bf",b=v(_),B=b;var D=["ctaText","href","title","subtitle","info","overflow"];w.exports.r(_,()=>b);const M={};b._=S(function(e,t,s,o,C,k){const r=e.ctaText||"See All";t.be("div",f(h(e,D),{class:m(["section-title",e.class])}),"0",o,null,4),t.be("div",{class:m(["section-title__title-container",e.title&&e.title.class]),style:G(e.title&&e.title.style)},"1",o,null,1),t.be("h2",{id:s.elId("title"),class:"section-title__title"},"@title",o,null,1),g(t,e.title||e.renderBody,null,null,null,null,s,"2"),t.ee(),e.subtitle&&(t.be("span",f(h(e.subtitle),{class:m(["section-title__subtitle",e.subtitle.class])}),"3",o,null,4),g(t,e.subtitle.renderBody,null,null,null,null,s,"4"),t.ee()),t.ee(),e.info&&(t.be("div",f(h(e.info),{class:m(["section-title__info",e.info.class])}),"5",o,null,4),g(t,e.info.renderBody,null,null,null,null,s,"6"),t.ee()),e.href&&(t.be("div",{class:"section-title__cta"},"7",o,null,1),t.be("a",{href:e.href,tabindex:"-1","aria-hidden":"true"},"8",o,null,0),t.be("span",{class:"section-title__cta-text"},"9",o,null,1),t.t(r,o),t.ee(),t.ee(),t.ee()),e.overflow&&(t.be("div",f(h(e.overflow),{class:m(["section-title__overflow",e.overflow.class])}),"10",o,null,4),g(t,e.overflow.renderBody,null,null,null,null,s,"11"),t.ee()),t.ee()},{t:_,i:!0},M);b.Component=T(M,b._);const x="nW1sEHTF",y=v(x);w.exports.r(x,()=>y);const V={};y._=S(function(e,t,s,o,C,k){p(B,{title:{renderBody:r=>{r.t("Today\u2019s Deals \u2013 All With Free Shipping",o)},[Symbol.iterator]:i},subtitle:{renderBody:r=>{r.t("Plus, guaranteed best prices.",o)},[Symbol.iterator]:i},overflow:{renderBody:r=>{const l=[];l.push({renderBody:n=>{n.t("item 1",o)},[Symbol.iterator]:i}),l.push({renderBody:n=>{n.t("item 2",o)},[Symbol.iterator]:i}),l.push({renderBody:n=>{n.t("item 3",o)},[Symbol.iterator]:i}),p(L,{variant:"overflow",a11yText:"eBay Menu",items:l},r,s,"1")},[Symbol.iterator]:i}},t,s,"0")},{t:x,i:!0},V);y.Component=T(V,y._);const J=`<ebay-section-title>
    <@title>Today\u2019s Deals \u2013 All With Free Shipping</@title>
    <@subtitle>Plus, guaranteed best prices.</@subtitle>
    <@overflow>
        <ebay-menu-button variant='overflow' a11y-text='eBay Menu'>
            <@item>item 1</@item>
            <@item>item 2</@item>
            <@item>item 3</@item>
        </ebay-menu-button>
    </@overflow>
</ebay-section-title>
`,A="X6GMHuW+",u=v(A);w.exports.r(A,()=>u);const I={};u._=S(function(e,t,s,o,C,k){p(B,{href:"https://www.ebay.com",title:{renderBody:r=>{r.t("Today\u2019s Deals \u2013 All With Free Shipping",o)},[Symbol.iterator]:i},subtitle:{renderBody:r=>{r.t("Plus, guaranteed best prices.",o)},[Symbol.iterator]:i},info:{renderBody:r=>{p(X,{renderBody:l=>{p(N,{},l,s,"2")}},r,s,"1")},[Symbol.iterator]:i}},t,s,"0")},{t:A,i:!0},I);u.Component=T(I,u._);const K=`<ebay-section-title href="https://www.ebay.com">
    <@title>Today\u2019s Deals \u2013 All With Free Shipping</@title>
    <@subtitle>Plus, guaranteed best prices.</@subtitle>
    <@info>
        <ebay-icon-button>
            <ebay-save-16-icon/>
        </ebay-icon-button>
    </@info>
</ebay-section-title>
`,Q=e=>({input:z(e)}),Oe={title:"navigation & disclosure/ebay-section-title",component:B,parameters:{docs:{description:{component:Z}}},argTypes:{href:{control:{type:"text"},description:"RL. Title content and optional CTA content will link to this"},ctaText:{control:{type:"text"},description:"The text for the CTA. Only used when href is set.",table:{defaultValue:{summary:"See All"}}},title:{name:"@title",description:"The main title content to be displayed. Title tag is required when using other sub-tags.",table:{category:"@attribute tags"}},subtitle:{name:"@subtitle",description:"The subtitle content to be displayed",table:{category:"@attribute tags"}},info:{name:"@info",control:{type:"json"},description:"Placeholder for `<ebay-infotip>` component",table:{category:"@attribute tags"}},overflow:{name:"@overflow",control:{type:"json"},description:"Placeholder for `<ebay-menu-button>` component",table:{category:"@attribute tags"}}}},a=Q.bind({});a.args={title:{renderBody:"Todays Best Deals"},subtitle:{renderBody:"with free shipping!"}};a.parameters={docs:{source:{code:q("ebay-section-title",a.args)}}};const c=()=>({component:u});c.parameters={docs:{source:{buttonSeeAllComponentCode:K}}};const d=()=>({component:y});d.parameters={docs:{source:{overflowComponentCode:J}}};var $,F,P;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(P=(F=a.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var W,O,R;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`() => ({
  component: buttonSeeAllComponent
})`,...(R=(O=c.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var j,E,H;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`() => ({
  component: overflowComponent
})`,...(H=(E=d.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const Re=["Standard","iconAndSeeAll","withOverflow"];export{a as Standard,Re as __namedExportsOrder,Oe as default,c as iconAndSeeAll,d as withOverflow};
//# sourceMappingURL=section-title.stories.c316bc36.js.map
