import{a as v}from"./utils-44f5c40b.js";import{t as x}from"./index-a17a703b.js";import{t as T,r as S,_ as B,g as d,p as b,h as m,a as C}from"./merge-attrs-f99eec0a.js";/* empty css             */import{_ as p}from"./dynamic-tag-c0238d78.js";import"./_commonjsHelpers-725317a4.js";import"./_commonjs-dynamic-modules-302442b1.js";const A=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-fake-tabs
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

Tabs which link to other pages. This can be used to deep link to other pages which switch the current tab.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/navigation-disclosure-ebay-fake-tabs)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/navigation-disclosure-ebay-fake-tabs)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-video/examples)
`,l="owm2hYfS",s=T(l),I=s;var D=["selectedIndex","tabs","panels","tabAriaCurrent"],E=["href"];S.r(l,()=>s);const y={};s._=B(function(a,e,i,t,M,U){var g=a.tabMatchesCurrentUrl===!1?"true":"page";e.be("div",d(b(a,D),{class:m(["fake-tabs",a.class])}),"0",t,null,4);var _=a.selectedIndex||0;e.be("ul",{class:"fake-tabs__items"},"1",t,null,1);{let w=0;for(const n of a.tabs||[]){let c=w++;const o="[".concat(c,"]");var k=_===c;e.be("li",d(b(n,E),{class:m([n.class,"fake-tabs__item"])}),"2"+o,t,null,4),e.be("a",{"aria-current":k&&g,href:n.href},"3"+o,t,null,0),p(e,n.renderBody,null,null,null,null,i,"4"+o),e.ee(),e.ee()}}e.ee(),e.be("div",{class:"fake-tabs__content"},"5",t,null,1),e.be("div",{class:"fake-tabs__panel"},"6",t,null,1),e.be("div",{class:"fake-tabs__cell"},"7",t,null,1),e.be("div",null,"8",t,null,0),p(e,a.renderBody,null,null,null,null,i,"9"),e.ee(),e.ee(),e.ee(),e.ee(),e.ee()},{t:l,i:!0},y);s.Component=C(y,s._);const R=a=>({input:v(a)}),q={title:"navigation & disclosure/ebay-fake-tabs",component:I,parameters:{docs:{description:{component:A}}},argTypes:{selectedIndex:{control:{type:"number"},description:"0-based index of selected tab tab and panel"},tabMatchesCurrentUrl:{control:{type:"boolean"},description:'Specify whether the href of the currently active fake tab matches the current window url. Default is true. This property is used to configure the underlying aria-current attribute (i.e. a value of "page" (default) or "true").'},tab:{name:"@tab",table:{category:"@attribute tags"}},href:{control:{type:"text"},description:"The link to take the user to for each tab",table:{category:"@tag attributes"}}}},r=R.bind({});r.args={tabs:[{renderBody:"Tab 1",href:"https://www.ebay.com"},{renderBody:"Tab 2",href:"https://www.ebay.com"},{renderBody:"Tab 3",href:"https://www.ebay.com"}],renderBody:"Lorum ipsom dolor"};r.parameters={docs:{source:{code:x("ebay-fake-tabs",r.args,{tabs:"tab"})}}};var h,u,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const F=["Standard"];export{r as Standard,F as __namedExportsOrder,q as default};
//# sourceMappingURL=fake-tabs.stories-4f672590.js.map
