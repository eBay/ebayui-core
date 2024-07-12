import{a as u}from"./utils-DWCsNc5l.js";import{t as b,r as d,b as y,d as g}from"./registry-B-klnak9.js";import{_ as f}from"./index-D3D01f3T.js";import{_ as r}from"./render-tag-BBOJ9dEX.js";import{_ as h}from"./index-C4ES2whh.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-dBnCH2W1.js";/* empty css             *//* empty css                    *//* empty css               *//* empty css             */import"./dynamic-tag-DQCvkDdb.js";import"./index-B6IacUrT.js";import"./index-blmbJU0z.js";const a="LpCBApth",t=b(a),_=t;d.r(a,()=>t);const l={};t._=y(function(o,m,n,T,B,V){r(h,{...o,renderBody:p=>{r(f,{},p,n,"1")}},m,n,"0",[["click","emit",!1,["click"]],["escape","emit",!1,["escape"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]]])},{t:a},l);t.Component=g(l,t._);const k=`class {}

<ebay-icon-button
    on-click('emit', 'click')
    on-escape('emit', 'escape')
    on-focus('emit', 'focus')
    on-blur('emit', 'blur')
    ...input
>
    <ebay-menu-24-icon/>
</ebay-icon-button>
`,v=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`,E=o=>({input:u(o)}),q={title:"buttons/ebay-icon-button",component:_,parameters:{docs:{description:{component:v}}},argTypes:{href:{description:"url for link behaviour (switches to anchor tag)"},disabled:{description:"",table:{category:"Toggles",defaultValue:{summary:"false"}},control:{type:"boolean"}},size:{description:"alternative size for the icon button",options:["small","regular","large"],control:{type:"select"},table:{defaultValue:{summary:"regular"}}},priority:{options:["primary","secondary","tertiary","none"],description:"Priority of the button. Toggle the color and border of the button",table:{defaultValue:{summary:"none"}},type:{category:"Options"}},partiallyDisabled:{description:"programmatically disabled, but remains keyboard focusable",table:{defaultValue:{summary:"false"},category:"Toggles"},control:{type:"boolean"}},badgeNumber:{description:"number to show in badge",table:{category:"Badge (only with variant=icon)"},type:"number"},badgeAriaLabel:{description:"`aria-label` for badge",table:{category:"Badge"}},transparent:{description:"is icon button is transparent or not",table:{defaultValue:{summary:"false"},category:"Toggles"},control:{type:"boolean"}},onClick:{action:"on-click",description:"Triggered on click",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onEscape:{action:"on-escape",description:"Triggered on escape key",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onFocus:{action:"on-focus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onBlur:{action:"on-blur",description:"Triggered on blur",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},spread:{control:{type:"object"},description:"Additional attributes being passed to component",table:{category:"Other"}}}},e=E.bind({});e.args={href:"",disabled:!1,partiallyDisabled:!1,badgeNumber:0,"aria-label":"menu"};e.parameters={docs:{source:{code:k}}};var i,s,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const G=["Default"];export{e as Default,G as __namedExportsOrder,q as default};
