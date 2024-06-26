import{a as D}from"./utils-DWCsNc5l.js";import{t as I}from"./index-CCz6reEH.js";import{t as R,r as U,b as A,e as b,p as d,f as p,d as M}from"./registry-B-klnak9.js";/* empty css             */import{_ as m}from"./dynamic-tag-DQCvkDdb.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const $=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,l="lPhcEUti",r=R(l),j=r;U.r(l,()=>r);const y={};r._=A(function(s,e,i,a,H,L){const{selectedIndex:g=0,class:_,tabs:k,tabMatchesCurrentUrl:w,renderBody:v,...T}=s;var x=w===!1?"true":"page";e.be("div",b(d(T),{class:p(["fake-tabs",_])}),"0",a,null,4),e.be("ul",{class:"fake-tabs__items"},"1",a,null,1);{let S=0;for(const n of k||[]){let c=S++;const o=`[${c}]`,{href:C,...E}=n;var B=g===c;e.be("li",b(d(E),{class:p([n.class,"fake-tabs__item"])}),"2"+o,a,null,4),e.be("a",{"aria-current":B&&x,href:C},"3"+o,a,null,0),m(e,n.renderBody,null,null,null,null,i,"4"+o),e.ee(),e.ee()}}e.ee(),e.be("div",{class:"fake-tabs__content"},"5",a,null,1),e.be("div",{class:"fake-tabs__panel"},"6",a,null,1),e.be("div",{class:"fake-tabs__cell"},"7",a,null,1),e.be("div",null,"8",a,null,0),m(e,v,null,null,null,null,i,"9"),e.ee(),e.ee(),e.ee(),e.ee(),e.ee()},{t:l,i:!0},y);r.Component=M(y,r._);const z=s=>({input:D(s)}),N={title:"navigation & disclosure/ebay-fake-tabs",component:j,parameters:{docs:{description:{component:$}}},argTypes:{selectedIndex:{control:{type:"number"},description:"0-based index of selected tab tab and panel"},tabMatchesCurrentUrl:{control:{type:"boolean"},description:'Specify whether the href of the currently active fake tab matches the current window url. Default is true. This property is used to configure the underlying aria-current attribute (i.e. a value of "page" (default) or "true").'},tab:{name:"@tab",table:{category:"@attribute tags"}},href:{control:{type:"text"},description:"The link to take the user to for each tab",table:{category:"@tag attributes"}}}},t=z.bind({});t.args={tabs:[{renderBody:"Tab 1",href:"https://www.ebay.com"},{renderBody:"Tab 2",href:"https://www.ebay.com"},{renderBody:"Tab 3",href:"https://www.ebay.com"}],renderBody:"Lorum ipsom dolor"};t.parameters={docs:{source:{code:I("ebay-fake-tabs",t.args,{tabs:"tab"})}}};var u,h,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const Q=["Standard"];export{t as Standard,Q as __namedExportsOrder,N as default};
