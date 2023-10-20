import{a as g}from"./utils.f000f876.js";import{t as f,r as h,a as v,d as _}from"./merge-attrs.9e0d7be9.js";import{_ as O}from"./index.c4926510.js";import{r as c}from"./render-tag.1a0b986f.js";import{_ as w}from"./index.4eb9bcd1.js";import"./_commonjsHelpers.b8add541.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./index.aa2d3137.js";/* empty css             *//* empty css                    *//* empty css               *//* empty css             */import"./dynamic-tag.70156c9d.js";import"./index.50b31a36.js";import"./index.cfa4da37.js";function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),o.push.apply(o,r)}return o}function u(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?l(Object(o),!0).forEach(function(r){j(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function j(e,t,o){return t=k(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function k(e){var t=E(e,"string");return typeof t=="symbol"?t:String(t)}function E(e,t){if(typeof e!="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var r=o.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const i="j1iwmfR2",a=f(i),P=a;h.exports.r(i,()=>a);const d={};a._=v(function(e,t,o,r,s,B){c(w,u(u({},e),{},{renderBody:y=>{c(O,{},y,o,"1")}}),t,o,"0",[["click","emit",!1,["click"]],["escape","emit",!1,["escape"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]]])},{t:i},d);a.Component=_(d,a._);const T=`class {}

<ebay-icon-button
    on-click('emit', 'click')
    on-escape('emit', 'escape')
    on-focus('emit', 'focus')
    on-blur('emit', 'blur')
    ...input
>
    <ebay-menu-24-icon/>
</ebay-icon-button>
`,S=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`,x=e=>({input:g(e)}),J={title:"buttons/ebay-icon-button",component:P,parameters:{docs:{description:{component:S}}},argTypes:{href:{description:"url for link behaviour (switches to anchor tag)"},disabled:{description:"",table:{category:"Toggles",defaultValue:{summary:"false"}},control:{type:"boolean"}},size:{description:"alternative size for the icon button",options:["small","regular","large"],control:{type:"select"},table:{defaultValue:{summary:"regular"}}},partiallyDisabled:{description:"programmatically disabled, but remains keyboard focusable",table:{defaultValue:{summary:"false"},category:"Toggles"},control:{type:"boolean"}},badgeNumber:{description:"number to show in badge",table:{category:"Badge (only with variant=icon)"},type:"number"},badgeAriaLabel:{description:"`aria-label` for badge",table:{category:"Badge"}},transparent:{description:"is icon button is transparent or not",table:{defaultValue:{summary:"false"},category:"Toggles"},control:{type:"boolean"}},onClick:{action:"on-click",description:"Triggered on click",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onEscape:{action:"on-escape",description:"Triggered on escape key",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onFocus:{action:"on-focus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onBlur:{action:"on-blur",description:"Triggered on blur",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},spread:{control:{type:"object"},description:"Additional attributes being passed to component",table:{category:"Other"}}}},n=x.bind({});n.args={href:"",disabled:!1,partiallyDisabled:!1,badgeNumber:0,"aria-label":"menu"};n.parameters={docs:{source:{code:T}}};var p,m,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(b=(m=n.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const M=["Standard"];export{n as Standard,M as __namedExportsOrder,J as default};
//# sourceMappingURL=icon-button.stories.4ddb5ddc.js.map
