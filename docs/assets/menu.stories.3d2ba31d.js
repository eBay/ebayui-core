import{b as w,a as ne}from"./utils.f000f876.js";import{t as oe}from"./index.bcb3df20.js";import{C as y}from"./index.2c18e3c5.js";import{r as k,a as O,d as S,t as v}from"./merge-attrs.9e0d7be9.js";import{s as a}from"./self-iterator.45abe0c9.js";import{r as P}from"./render-tag.1a0b986f.js";import{v as m}from"./v-element.18e65e73.js";/* empty css             */import"./dynamic-tag.70156c9d.js";import"./index.50b31a36.js";import"./index.6c3a3a4b.js";import"./index.aa2d3137.js";/* empty css             */import"./index.b652c17c.js";import"./index.6c907e4a.js";import"./index.1549cc8a.js";import"./index.34cc28ab.js";import"./index.cfa4da37.js";import"./index.2f593d82.js";import"./_commonjsHelpers.b8add541.js";import"./_commonjs-dynamic-modules.30ae7933.js";const ie=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-menu
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/building-blocks-ebay-menu)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/building-blocks-ebay-menu)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-menu/examples)
`;function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$(Object(n),!0).forEach(function(r){ae(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ae(e,t,n){return t=se(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function se(e){var t=me(e,"string");return typeof t=="symbol"?t:String(t)}function me(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const j="8RfdMvlx",l=v(j);k.exports.r(j,()=>l);const Z={};l._=O(function(e,t,n,r,s,x){const i=[];i.push({badgeNumber:1,renderBody:o=>{o.t("item 1 that has very long text",r)},[Symbol.iterator]:a}),i.push({badgeNumber:99,renderBody:o=>{o.t("item 2",r)},[Symbol.iterator]:a}),i.push({badgeNumber:10,renderBody:o=>{o.t("item 3",r)},[Symbol.iterator]:a}),P(y,E(E({},e),{},{items:i}),t,n,"0",[["keydown","emit",!1,["keydown"]],["change","emit",!1,["change"]],["select","emit",!1,["select"]]])},{t:j,i:!0},Z);l.Component=S(Z,l._);const ce=`<ebay-menu
    ...input
    on-keydown('emit', 'keydown')
    on-change('emit', 'change')
    on-select('emit', 'select')
>
    <@item badge-number=1>item 1 that has very long text</@item>
    <@item badge-number=99>item 2</@item>
    <@item badge-number=10>item 3</@item>
</ebay-menu>
`;function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?D(Object(n),!0).forEach(function(r){le(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function le(e,t,n){return t=pe(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pe(e){var t=ue(e,"string");return typeof t=="symbol"?t:String(t)}function ue(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const _="QsUVfuH8",p=v(_),de=m("style",null,"0",null,1,0).t(`
    span.sprite-flag {
        background-image: url('https://ir.ebaystatic.com/pictures/aw/pics/cmp/ds3/sprds3_21.png');
        background-repeat: none;
        display: inline-block;
        height: 20px;
        margin-right: 8px;
        vertical-align: middle;
        width: 26px;
    }
`),ye=m("span",{style:"background-position: 0 -25px",class:"sprite-flag"},"2",null,0,1),be=m("span",null,"3",null,1,0).t("Austria"),ge=m("span",{style:"background-position: 0 -100px",class:"sprite-flag"},"4",null,0,1),fe=m("span",null,"5",null,1,0).t("Denmark"),he=m("span",{style:"background-position: 0 -275px",class:"sprite-flag"},"6",null,0,1),we=m("span",null,"7",null,1,0).t("Norway");k.exports.r(_,()=>p);const ee={};p._=O(function(e,t,n,r,s,x){t.n(de,r);const i=[];i.push({renderBody:o=>{o.n(ye,r),o.n(be,r)},[Symbol.iterator]:a}),i.push({renderBody:o=>{o.n(ge,r),o.n(fe,r)},[Symbol.iterator]:a}),i.push({renderBody:o=>{o.n(he,r),o.n(we,r)},[Symbol.iterator]:a}),P(y,C(C({text:"Country"},e),{},{items:i}),t,n,"1",[["keydown","emit",!1,["keydown"]],["change","emit",!1,["change"]],["select","emit",!1,["select"]]])},{t:_,i:!0},ee);p.Component=S(ee,p._);const ke=`<style>
    span.sprite-flag {
        background-image: url('https://ir.ebaystatic.com/pictures/aw/pics/cmp/ds3/sprds3_21.png');
        background-repeat: none;
        display: inline-block;
        height: 20px;
        margin-right: 8px;
        vertical-align: middle;
        width: 26px;
    }
</style>

<ebay-menu
    text='Country'
    ...input
    on-keydown('emit', 'keydown')
    on-change('emit', 'change')
    on-select('emit', 'select')
>
    <@item><span.sprite-flag style='background-position: 0 -25px'/><span>Austria</span></@item>
    <@item><span.sprite-flag style='background-position: 0 -100px'/><span>Denmark</span></@item>
    <@item><span.sprite-flag style='background-position: 0 -275px'/><span>Norway</span></@item>
</ebay-menu>
`;function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?A(Object(n),!0).forEach(function(r){Oe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Oe(e,t,n){return t=Se(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Se(e){var t=ve(e,"string");return typeof t=="symbol"?t:String(t)}function ve(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const B="BlAT2rHi",u=v(B),Pe=m("h3",null,"0",null,1,0).t("Click inside the menu, then type a name to see focus change. The search will see if any names start with the input, then if there are no matches it will search for the input string anywhere in the names."),xe=m("h4",null,"1",null,1,0).t("Wait 2 seconds for the typeahead to reset and then try typing again to reset the search.");k.exports.r(B,()=>u);const te={};u._=O(function(e,t,n,r,s,x){t.n(Pe,r),t.n(xe,r);const i=[];i.push({renderBody:o=>{o.t("Albania",r)},[Symbol.iterator]:a}),i.push({renderBody:o=>{o.t("Alcania",r)},[Symbol.iterator]:a}),i.push({renderBody:o=>{o.t("Alcdnia",r)},[Symbol.iterator]:a}),i.push({renderBody:o=>{o.t("Austen",r)},[Symbol.iterator]:a}),i.push({renderBody:o=>{o.t("Austin",r)},[Symbol.iterator]:a}),i.push({renderBody:o=>{o.t("Jack",r)},[Symbol.iterator]:a}),i.push({renderBody:o=>{o.t("Jackman",r)},[Symbol.iterator]:a}),i.push({renderBody:o=>{o.t("Jackson",r)},[Symbol.iterator]:a}),i.push({renderBody:o=>{o.t("Jasper",r)},[Symbol.iterator]:a}),i.push({renderBody:o=>{o.t("Julia",r)},[Symbol.iterator]:a}),i.push({renderBody:o=>{o.t("Julio",r)},[Symbol.iterator]:a}),i.push({renderBody:o=>{o.t("Julius",r)},[Symbol.iterator]:a}),i.push({renderBody:o=>{o.t("Luca",r)},[Symbol.iterator]:a}),i.push({renderBody:o=>{o.t("Lucais",r)},[Symbol.iterator]:a}),i.push({renderBody:o=>{o.t("Lucan",r)},[Symbol.iterator]:a}),i.push({renderBody:o=>{o.t("Lucian",r)},[Symbol.iterator]:a}),i.push({renderBody:o=>{o.t("Lucius",r)},[Symbol.iterator]:a}),P(y,J(J({text:"Button"},e),{},{items:i}),t,n,"2",[["keydown","emit",!1,["keydown"]],["change","emit",!1,["change"]],["select","emit",!1,["select"]]])},{t:B,i:!0},te);u.Component=S(te,u._);const je=`<h3>
    Click inside the menu, then type a name to see focus change. The search will see if any names start with the input, then if there are no matches it will search for the input string anywhere in the names.
</h3>
<h4>Wait 2 seconds for the typeahead to reset and then try typing again to reset the search.</h4>
<ebay-menu
    text='Button'
    ...input
    on-keydown('emit', 'keydown')
    on-change('emit', 'change')
    on-select('emit', 'select')
>
    <@item>Albania</@item>
    <@item>Alcania</@item>
    <@item>Alcdnia</@item>
    <@item>Austen</@item>
    <@item>Austin</@item>
    <@item>Jack</@item>
    <@item>Jackman</@item>
    <@item>Jackson</@item>
    <@item>Jasper</@item>
    <@item>Julia</@item>
    <@item>Julio</@item>
    <@item>Julius</@item>
    <@item>Luca</@item>
    <@item>Lucais</@item>
    <@item>Lucan</@item>
    <@item>Lucian</@item>
    <@item>Lucius</@item>
</ebay-menu>
`;function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?L(Object(n),!0).forEach(function(r){_e(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function _e(e,t,n){return t=Be(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Be(e){var t=Te(e,"string");return typeof t=="symbol"?t:String(t)}function Te(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const T="XmcNkHwp",d=v(T);k.exports.r(T,()=>d);const re={};d._=O(function(e,t,n,r,s,x){const i=[];i.push({renderBody:o=>{o.t("item 1 that has very long text",r)},[Symbol.iterator]:a}),i.push({renderBody:o=>{o.t("item 2",r)},[Symbol.iterator]:a}),i.push({separator:!0,[Symbol.iterator]:a}),i.push({renderBody:o=>{o.t("item 3",r)},[Symbol.iterator]:a}),i.push({renderBody:o=>{o.t("item 4",r)},[Symbol.iterator]:a}),i.push({renderBody:o=>{o.t("item 5",r)},[Symbol.iterator]:a}),P(y,N(N({},e),{},{items:i}),t,n,"0",[["keydown","emit",!1,["keydown"]],["change","emit",!1,["change"]],["select","emit",!1,["select"]]])},{t:T,i:!0},re);d.Component=S(re,d._);const $e=`<ebay-menu
    ...input
    on-keydown('emit', 'keydown')
    on-change('emit', 'change')
    on-select('emit', 'select')
>
    <@item>item 1 that has very long text</@item>
    <@item>item 2</@item>
    <@separator/>
    <@item>item 3</@item>
    <@item>item 4</@item>
    <@item>item 5</@item>
</ebay-menu>
`,Ee=e=>({input:ne(e)}),Ze={title:"building blocks/ebay-menu",component:y,parameters:{docs:{description:{component:ie}}},argTypes:{type:{control:{type:"text"},description:'Can be "radio" / "checkbox"'},priority:{control:{type:"select"},options:["primary","secondary","none"],description:'button priority, "primary" / "secondary" (default) / "none"'},checked:{description:"will set the corresponding index item to `checked` state and use the `aria-checked` attribute in markup"},item:{name:"@item",table:{category:"@attribute tags"}},value:{control:{type:"text"},table:{category:"@item attributes"},description:"the value to use with event responses for for the `checked` array"},badgeNumber:{control:{type:"text"},table:{category:"@item attributes"},description:"used as the number to be placed in the badge"},badgeAriaLabel:{control:{type:"text"},table:{category:"@item attributes"},description:"Yes (only if badge number is provided) | passed as the `aria-label` directly to the badge"},onKeydown:{action:"on-keydown",description:"Triggered on keydown",table:{category:"Events",defaultValue:{summary:"{ el, index, checked }"}}},onChange:{action:"on-change",description:"Triggered on item checked change, (checkbox/radio type only)",table:{category:"Events",defaultValue:{summary:"radio: { el, index, checked } | checkbox: { el, [indexes], [checked] }"}}},onSelect:{action:"on-select",description:"Triggered on item clicked (non radio/checkbox)",table:{category:"Events",defaultValue:{summary:"{ el, index, checked }"}}}}},c=Ee.bind({});c.args={items:[{renderBody:"item 1 that has very long text"},{renderBody:"item 2"},{renderBody:"item 3"}]};c.parameters={docs:{source:{code:oe("ebay-menu",c.args,{items:"item"})}}};const b=w(u,je),g=w(l,ce),f=w(p,ke),h=w(d,$e);var K,R,V;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(V=(R=c.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var H,W,z;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:"buildExtensionTemplate(TypeaheadTemplate, TypeaheadTemplateCode)",...(z=(W=b.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var I,M,Q;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:"buildExtensionTemplate(BadgedTemplate, BadgedTemplateCode)",...(Q=(M=g.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var U,X,Y;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:"buildExtensionTemplate(SpritesTemplate, SpritesTemplateCode)",...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var q,F,G;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:"buildExtensionTemplate(SeparatorTemplate, SeparatorTemplateCode)",...(G=(F=h.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const et=["Default","Typeahead","Badged","Sprites","Separator"];export{g as Badged,c as Default,h as Separator,f as Sprites,b as Typeahead,et as __namedExportsOrder,Ze as default};
//# sourceMappingURL=menu.stories.3d2ba31d.js.map
