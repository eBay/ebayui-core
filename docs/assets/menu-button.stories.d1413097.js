import{t as re}from"./index.bcb3df20.js";import{b as O,a as oe}from"./utils.f000f876.js";import{r as S,a as w,d as v,t as _}from"./merge-attrs.9e0d7be9.js";import{s as i}from"./self-iterator.45abe0c9.js";import{C as y}from"./index.d33c8785.js";import{r as p}from"./render-tag.1a0b986f.js";import{_ as ae}from"./index.4a75c0d4.js";import{v as s}from"./v-element.18e65e73.js";import"./_commonjsHelpers.b8add541.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./index.4eb9bcd1.js";/* empty css                    *//* empty css               *//* empty css             */import"./dynamic-tag.70156c9d.js";import"./index.50b31a36.js";import"./index.cfa4da37.js";import"./index.8ef6a7cb.js";import"./index.0ffc8829.js";import"./index.e64e9ede.js";import"./index.aa2d3137.js";/* empty css             */import"./index.7b11c326.js";/* empty css                    */import"./index.f09b57c3.js";import"./index.b54ea0ad.js";import"./index.2c18e3c5.js";/* empty css             */import"./index.6c3a3a4b.js";import"./index.b652c17c.js";import"./index.6c907e4a.js";import"./index.1549cc8a.js";import"./index.34cc28ab.js";import"./index.2f593d82.js";import"./index.0b516267.js";import"./index.8e5d5614.js";const ie=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-menu-button
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/buttons-ebay-menu-button)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/buttons-ebay-menu-button)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-menu-button/examples)
`;function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?$(Object(r),!0).forEach(function(n){se(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function se(e,t,r){return t=le(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function le(e){var t=me(e,"string");return typeof t=="symbol"?t:String(t)}function me(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const j="0HqRYlwL",c=_(j);S.exports.r(j,()=>c);const Z={};c._=w(function(e,t,r,n,l,P){const a=[];a.push({badgeNumber:1,renderBody:o=>{o.t("item 1 that has very long text",n)},[Symbol.iterator]:i}),a.push({badgeNumber:99,renderBody:o=>{o.t("item 2",n)},[Symbol.iterator]:i}),a.push({badgeNumber:10,renderBody:o=>{o.t("item 3",n)},[Symbol.iterator]:i}),p(y,E(E({text:"eBay Menu"},e),{},{items:a}),t,r,"0",[["collapse","emit",!1,["collapse"]],["expand","emit",!1,["expand"]],["change","emit",!1,["change"]],["select","emit",!1,["select"]]])},{t:j,i:!0},Z);c.Component=v(Z,c._);const pe=`<ebay-menu-button
    text='eBay Menu'
    on-collapse('emit', 'collapse')
    on-expand('emit', 'expand')
    on-change('emit', 'change')
    on-select('emit', 'select')
    ...input
>
    <@item badge-number=1>item 1 that has very long text</@item>
    <@item badge-number=99>item 2</@item>
    <@item badge-number=10>item 3</@item>
</ebay-menu-button>
`;function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?C(Object(r),!0).forEach(function(n){ce(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ce(e,t,r){return t=ue(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ue(e){var t=de(e,"string");return typeof t=="symbol"?t:String(t)}function de(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const B="LOG8vef5",u=_(B);S.exports.r(B,()=>u);const ee={};u._=w(function(e,t,r,n,l,P){const a=[];a.push({renderBody:o=>{o.t("item 1",n)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.t("item 2",n)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.t("item 3",n)},[Symbol.iterator]:i}),p(y,D(D({text:"Settings"},e),{},{icon:{renderBody:o=>{p(ae,{},o,r,"1")},[Symbol.iterator]:i},items:a}),t,r,"0",[["collapse","emit",!1,["collapse"]],["expand","emit",!1,["expand"]],["change","emit",!1,["change"]],["select","emit",!1,["select"]]])},{t:B},ee);u.Component=v(ee,u._);const be=`<!--
*
* Note: Due to limitations in Marko v4, this tag must be within a parent component.
* Below we have added an empty class to force this to be the case.
-->
class {}

<ebay-menu-button
    text='Settings'
    on-collapse('emit', 'collapse')
    on-expand('emit', 'expand')
    on-change('emit', 'change')
    on-select('emit', 'select')
    ...input
>
    <@icon><ebay-settings-24-icon/></@icon>
    <@item>item 1</@item>
    <@item>item 2</@item>
    <@item>item 3</@item>
</ebay-menu-button>
`;function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?J(Object(r),!0).forEach(function(n){ye(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ye(e,t,r){return t=fe(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function fe(e){var t=he(e,"string");return typeof t=="symbol"?t:String(t)}function he(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const T="nFHKXgfQ",d=_(T),ge=s("p",null,"1",null,1,0).t("Wait 2 seconds for the typeahead to reset and then try typing again to reset the search."),xe=s("span",null,"3",null,1,0).t("Austen"),Oe=s("span",null,"4",null,1,0).t("Austin"),Se=s("span",null,"5",null,1,0).t("Jack"),we=s("span",null,"6",null,1,0).t("Jackman"),ve=s("span",null,"7",null,1,0).t("Jackson"),_e=s("span",null,"8",null,1,0).t("Jasper"),Pe=s("span",null,"9",null,1,0).t("Julia"),je=s("span",null,"10",null,1,0).t("Julio"),Be=s("span",null,"11",null,1,0).t("Julius"),Te=s("span",null,"12",null,1,0).t("Luca"),ke=s("span",null,"13",null,1,0).t("Lucais"),$e=s("span",null,"14",null,1,0).t("Lucan"),Ee=s("span",null,"15",null,1,0).t("Lucian"),Ce=s("span",null,"16",null,1,0).t("Lucius");S.exports.r(T,()=>d);const te={};d._=w(function(e,t,r,n,l,P){t.be("p",null,"0",n,null,0);{t.t("Click the button, then type a name to see focus change. The search will see if any names start with the input, then if there are no matches it will search for the input string anywhere in the names.",n),t.t(" ",n),t.n(ge,n);const a=[];a.push({renderBody:o=>{o.n(xe,n)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.n(Oe,n)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.n(Se,n)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.n(we,n)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.n(ve,n)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.n(_e,n)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.n(Pe,n)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.n(je,n)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.n(Be,n)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.n(Te,n)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.n(ke,n)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.n($e,n)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.n(Ee,n)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.n(Ce,n)},[Symbol.iterator]:i}),p(y,L(L({text:"Button"},e),{},{items:a}),t,r,"2",[["collapse","emit",!1,["collapse"]],["expand","emit",!1,["expand"]],["change","emit",!1,["change"]],["select","emit",!1,["select"]]])}t.ee()},{t:T,i:!0},te);d.Component=v(te,d._);const De=`<p>
    Click the button, then type a name to see focus change. The search will see if any names start with the input, then if there are no matches it will search for the input string anywhere in the names.\${' '}
    <p>Wait 2 seconds for the typeahead to reset and then try typing again to reset the search.</p>
    <ebay-menu-button
        text='Button'
        on-collapse('emit', 'collapse')
        on-expand('emit', 'expand')
        on-change('emit', 'change')
        on-select('emit', 'select')
        ...input
    >
        <@item><span>Austen</span></@item>
        <@item><span>Austin</span></@item>
        <@item><span>Jack</span></@item>
        <@item><span>Jackman</span></@item>
        <@item><span>Jackson</span></@item>
        <@item><span>Jasper</span></@item>
        <@item><span>Julia</span></@item>
        <@item><span>Julio</span></@item>
        <@item><span>Julius</span></@item>
        <@item><span>Luca</span></@item>
        <@item><span>Lucais</span></@item>
        <@item><span>Lucan</span></@item>
        <@item><span>Lucian</span></@item>
        <@item><span>Lucius</span></@item>
    </ebay-menu-button>
</p>
`;function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?K(Object(r),!0).forEach(function(n){Je(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Je(e,t,r){return t=Le(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Le(e){var t=Ke(e,"string");return typeof t=="symbol"?t:String(t)}function Ke(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const k="yffKs1U5",b=_(k);S.exports.r(k,()=>b);const ne={};b._=w(function(e,t,r,n,l,P){const a=[];a.push({renderBody:o=>{o.t("item 1",n)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.t("item 2",n)},[Symbol.iterator]:i}),a.push({separator:!0,[Symbol.iterator]:i}),a.push({renderBody:o=>{o.t("item 3",n)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.t("item 4",n)},[Symbol.iterator]:i}),a.push({separator:!0,[Symbol.iterator]:i}),a.push({renderBody:o=>{o.t("item 5",n)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.t("item 6",n)},[Symbol.iterator]:i}),p(y,N(N({text:"eBay Menu separator"},e),{},{items:a}),t,r,"0",[["collapse","emit",!1,["collapse"]],["expand","emit",!1,["expand"]],["change","emit",!1,["change"]],["select","emit",!1,["select"]]])},{t:k,i:!0},ne);b.Component=v(ne,b._);const Ne=`<ebay-menu-button
    text='eBay Menu separator'
    on-collapse('emit', 'collapse')
    on-expand('emit', 'expand')
    on-change('emit', 'change')
    on-select('emit', 'select')
    ...input
>
    <@item>item 1</@item>
    <@item>item 2</@item>
    <@item separator/>
    <@item>item 3</@item>
    <@item>item 4</@item>
    <@item separator/>
    <@item>item 5</@item>
    <@item>item 6</@item>
</ebay-menu-button>
`,Ie=e=>({input:oe(e)}),St={title:"buttons/ebay-menu-button",component:y,parameters:{docs:{description:{component:ie}}},argTypes:{text:{control:{type:"text"},description:"button text"},a11yText:{description:"a11y text for the button, especially for cases without text",control:{type:"text"}},noToggleIcon:{type:"boolean",description:"whether to hide the chevron toggle icon",control:{type:"boolean"}},expanded:{type:"boolean",control:{type:"boolean"},description:"whether content is expanded (Note: not supported as initial attribute)"},type:{control:{type:"select"},options:["none","radio","checkbox"],description:'Can be "radio" / "checkbox"'},reverse:{type:"boolean",control:{type:"boolean"},description:"expand menu flyout to the left"},fixWidth:{type:"boolean",control:{type:"boolean"},description:"constrain items container width to button width"},borderless:{type:"boolean",control:{type:"boolean"},description:"whether button has borders. Forces variant=button"},size:{control:{type:"text"},description:'button size, "large" (default: "none")'},priority:{control:{type:"select"},options:["primary","secondary","delete","tertiary","none"],description:'button priority, only used when variant="button"'},checked:{description:"will set the corresponding index item to `checked` state and use the `aria-checked` attribute in markup"},disabled:{type:"boolean",control:{type:"boolean"},description:"Will disable the entire dropdown (disables the ebay-button label) if set to true"},variant:{control:{type:"select"},options:["overflow","form","button"],table:{defaultValue:{summary:"button"}},description:'will change the button style, "overflow", "form" or "button"'},collapseOnSelect:{type:"boolean",control:{type:"boolean"},description:'Will collapse whole menu when an item is selected in menu. Typically used in `type="radio"`'},prefixId:{control:{type:"text"},description:"The id of an external element to use as the prefix label for the menu button. Cannot be used with `prefix-label`"},prefixLabel:{control:{type:"text"},description:"The label to add before each selected item on the button. Cannot be used with `prefix-id` "},item:{name:"@item",table:{category:"@attribute tags"}},icon:{name:"@icon",table:{category:"@attribute tags"}},badgeNumber:{description:"used as the number to be placed in the badge",table:{category:"@item attribute tags"}},badgeAriaLabel:{description:"passed as the `aria-label` directly to the badge",table:{category:"@item attribute tags"}},onCollapse:{action:"on-collapse",description:"Triggered on menu collapse",table:{category:"Events",defaultValue:{summary:""}}},onExpand:{action:"on-expand",description:"Triggered on menu expand",table:{category:"Events",defaultValue:{summary:""}}},onChange:{action:"on-change",description:"Triggered on item checked change, (checkbox/radio type only)",table:{category:"Events",defaultValue:{summary:"radio: { el, index, checked } | checkbox: { el, [indexes], [checked] }"}}},onSelect:{action:"on-select",description:"Triggered on item clicked (non radio/checkbox)",table:{category:"Events",defaultValue:{summary:"{ el, index, checked }"}}}}},m=Ie.bind({});m.args={items:[{renderBody:"item 1 that has very long text"},{renderBody:"item 2"},{renderBody:"item 3"}],text:"eBay Menu"};m.parameters={docs:{source:{code:re("ebay-menu-button",m.args)}}};const f=O(u,be),h=O(b,Ne),g=O(d,De),x=O(c,pe);var I,M,A;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(A=(M=m.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var V,W,R;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:"buildExtensionTemplate(IconTemplate, IconTemplateCode)",...(R=(W=f.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var z,F,H;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:"buildExtensionTemplate(SeparatorTemplate, SeparatorTemplateCode)",...(H=(F=h.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var q,G,Q;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:"buildExtensionTemplate(TypeaheadTemplate, TypeaheadTemplateCode)",...(Q=(G=g.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var U,X,Y;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:"buildExtensionTemplate(BadgedTemplate, BadgedTemplateCode)",...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const wt=["Default","IconText","Separator","Typeahead","Badged"];export{x as Badged,m as Default,f as IconText,h as Separator,g as Typeahead,wt as __namedExportsOrder,St as default};
//# sourceMappingURL=menu-button.stories.d1413097.js.map
