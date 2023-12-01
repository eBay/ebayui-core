import{a as g}from"./utils-44f5c40b.js";import{t as f,r as _,_ as h,a as v}from"./registry-08dff688.js";import{_ as O}from"./index-f6d23db8.js";import{_ as c}from"./render-tag-73fdbff3.js";import{_ as k}from"./index-4d4607bc.js";import"./_commonjsHelpers-725317a4.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-3f14fa50.js";/* empty css             *//* empty css                    *//* empty css               *//* empty css             */import"./dynamic-tag-bb62150b.js";import"./index-dbe5ade1.js";import"./index-ad737ebd.js";function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),o.push.apply(o,r)}return o}function u(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?l(Object(o),!0).forEach(function(r){w(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function w(e,t,o){return t=j(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function j(e){var t=E(e,"string");return typeof t=="symbol"?t:String(t)}function E(e,t){if(typeof e!="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var r=o.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const i="j1iwmfR2",a=f(i),P=a;_.r(i,()=>a);const d={};a._=h(function(e,t,o,r,s,D){c(k,u(u({},e),{},{renderBody:y=>{c(O,{},y,o,"1")}}),t,o,"0",[["click","emit",!1,["click"]],["escape","emit",!1,["escape"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]]])},{t:i},d);a.Component=v(d,a._);const S=`class {}

<ebay-icon-button
    on-click('emit', 'click')
    on-escape('emit', 'escape')
    on-focus('emit', 'focus')
    on-blur('emit', 'blur')
    ...input
>
    <ebay-menu-24-icon/>
</ebay-icon-button>
`,T=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`,B=e=>({input:g(e)}),J={title:"buttons/ebay-icon-button",component:P,parameters:{docs:{description:{component:T}}},argTypes:{href:{description:"url for link behaviour (switches to anchor tag)"},disabled:{description:"",table:{category:"Toggles",defaultValue:{summary:"false"}},control:{type:"boolean"}},size:{description:"alternative size for the icon button",options:["small","regular","large"],control:{type:"select"},table:{defaultValue:{summary:"regular"}}},partiallyDisabled:{description:"programmatically disabled, but remains keyboard focusable",table:{defaultValue:{summary:"false"},category:"Toggles"},control:{type:"boolean"}},badgeNumber:{description:"number to show in badge",table:{category:"Badge (only with variant=icon)"},type:"number"},badgeAriaLabel:{description:"`aria-label` for badge",table:{category:"Badge"}},transparent:{description:"is icon button is transparent or not",table:{defaultValue:{summary:"false"},category:"Toggles"},control:{type:"boolean"}},onClick:{action:"on-click",description:"Triggered on click",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onEscape:{action:"on-escape",description:"Triggered on escape key",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onFocus:{action:"on-focus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onBlur:{action:"on-blur",description:"Triggered on blur",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},spread:{control:{type:"object"},description:"Additional attributes being passed to component",table:{category:"Other"}}}},n=B.bind({});n.args={href:"",disabled:!1,partiallyDisabled:!1,badgeNumber:0,"aria-label":"menu"};n.parameters={docs:{source:{code:S}}};var m,p,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(b=(p=n.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const M=["Standard"];export{n as Standard,M as __namedExportsOrder,J as default};
//# sourceMappingURL=icon-button.stories-264c745a.js.map
