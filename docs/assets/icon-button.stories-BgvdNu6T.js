import{a as b}from"./utils-DWCsNc5l.js";import{t as u,r as d,b as y,c as g}from"./registry-CtNeIPU8.js";import{_ as f}from"./index-D6lnt2gS.js";import{_ as r}from"./render-tag-mtfFSHEK.js";import{_ as h}from"./index-CX_T96nQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-B6qYX52F.js";/* empty css             *//* empty css                    *//* empty css               *//* empty css             */import"./dynamic-tag-HMZVE1pc.js";import"./index-BwvkvsZu.js";import"./index-CbT4wDAv.js";const a="LpCBApth",t=u(a);d.r(a,()=>t);const c={};t._=y(function(o,m,n,E,T,B){r(h,{...o,renderBody:p=>{r(f,{},p,n,"1")}},m,n,"0",[["click","emit",!1,["click"]],["escape","emit",!1,["escape"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]]])},{t:a},c);t.Component=g(c,t._);const _=`class {}

<ebay-icon-button
    on-click('emit', 'click')
    on-escape('emit', 'escape')
    on-focus('emit', 'focus')
    on-blur('emit', 'blur')
    ...input
>
    <ebay-menu-24-icon/>
</ebay-icon-button>
`,k=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-icon
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.1.0
    </span>
</h1>

This is a circular button with an icon only.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/buttons-ebay-icon-button)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/buttons-ebay-icon-button)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-icon-button/examples)
`,v=o=>({input:b(o)}),P={title:"buttons/ebay-icon-button",component:t,parameters:{docs:{description:{component:k}}},argTypes:{href:{description:"url for link behaviour (switches to anchor tag)"},disabled:{description:"",table:{category:"Toggles",defaultValue:{summary:"false"}},control:{type:"boolean"}},size:{description:"alternative size for the icon button",options:["small","regular","large"],control:{type:"select"},table:{defaultValue:{summary:"regular"}}},priority:{options:["primary","secondary","tertiary","none"],description:"Priority of the button. Toggle the color and border of the button",table:{defaultValue:{summary:"none"}},type:{category:"Options"}},ariaLabel:{control:{type:"text"},name:"aria-label",description:"A descriptive label of what the icon button represents"},partiallyDisabled:{name:"partially-disabled",description:"programmatically disabled, but remains keyboard focusable",table:{defaultValue:{summary:"false"},category:"Toggles"},control:{type:"boolean"}},badgeNumber:{name:"badge-number",description:"number to show in badge",table:{category:"Badge (only with variant=icon)"},type:"number"},badgeAriaLabel:{name:"badge-aria-label",description:"`aria-label` for badge",table:{category:"Badge"}},transparent:{description:"is icon button is transparent or not",table:{defaultValue:{summary:"false"},category:"Toggles"},control:{type:"boolean"}},onClick:{action:"on-click",description:"Triggered on click",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onEscape:{action:"on-escape",description:"Triggered on escape key",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onFocus:{action:"on-focus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onBlur:{action:"on-blur",description:"Triggered on blur",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},spread:{control:{type:"object"},description:"Additional attributes being passed to component",table:{category:"Other"}}}},e=v.bind({});e.args={href:"",disabled:!1,partiallyDisabled:!1,badgeNumber:0,ariaLabel:"menu"};e.parameters={docs:{source:{code:_}}};var i,s,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const q=["Default"];export{e as Default,q as __namedExportsOrder,P as default};
