import{b as k,a as ne}from"./utils-44f5c40b.js";import{t as oe}from"./index-a17a703b.js";import{C as y}from"./index-76d3e631.js";import{r as w,_ as O,a as S,t as v}from"./registry-08dff688.js";import{_ as i}from"./self-iterator-81a0b488.js";import{_}from"./render-tag-73fdbff3.js";import{_ as m}from"./v-element-062756a8.js";/* empty css             */import"./dynamic-tag-bb62150b.js";import"./_commonjsHelpers-725317a4.js";import"./index-dbe5ade1.js";import"./index-b642b221.js";import"./index-3f14fa50.js";/* empty css             */import"./index-feffb5f2.js";import"./index-8601134f.js";import"./index-124ac9a6.js";import"./index-5f81e013.js";import"./index-ad737ebd.js";import"./index-2e2d6c5e.js";import"./_commonjs-dynamic-modules-302442b1.js";const ae=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$(Object(n),!0).forEach(function(r){ie(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ie(e,t,n){return t=se(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function se(e){var t=me(e,"string");return typeof t=="symbol"?t:String(t)}function me(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const j="8RfdMvlx",l=v(j);w.r(j,()=>l);const Z={};l._=O(function(e,t,n,r,s,P){const a=[];a.push({badgeNumber:1,renderBody:o=>{o.t("item 1 that has very long text",r)},[Symbol.iterator]:i}),a.push({badgeNumber:99,renderBody:o=>{o.t("item 2",r)},[Symbol.iterator]:i}),a.push({badgeNumber:10,renderBody:o=>{o.t("item 3",r)},[Symbol.iterator]:i}),_(y,E(E({},e),{},{items:a}),t,n,"0",[["keydown","emit",!1,["keydown"]],["change","emit",!1,["change"]],["select","emit",!1,["select"]]])},{t:j,i:!0},Z);l.Component=S(Z,l._);const ce=`<ebay-menu
    ...input
    on-keydown('emit', 'keydown')
    on-change('emit', 'change')
    on-select('emit', 'select')
>
    <@item badge-number=1>item 1 that has very long text</@item>
    <@item badge-number=99>item 2</@item>
    <@item badge-number=10>item 3</@item>
</ebay-menu>
`;function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?D(Object(n),!0).forEach(function(r){le(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function le(e,t,n){return t=pe(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pe(e){var t=ue(e,"string");return typeof t=="symbol"?t:String(t)}function ue(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const x="QsUVfuH8",p=v(x),de=m("style",null,"0",null,1,0).t(`
    span.sprite-flag {
        background-image: url('https://ir.ebaystatic.com/pictures/aw/pics/cmp/ds3/sprds3_21.png');
        background-repeat: none;
        display: inline-block;
        height: 20px;
        margin-right: 8px;
        vertical-align: middle;
        width: 26px;
    }
`),ye=m("span",{style:"background-position: 0 -25px",class:"sprite-flag"},"2",null,0,1),be=m("span",null,"3",null,1,0).t("Austria"),ge=m("span",{style:"background-position: 0 -100px",class:"sprite-flag"},"4",null,0,1),fe=m("span",null,"5",null,1,0).t("Denmark"),he=m("span",{style:"background-position: 0 -275px",class:"sprite-flag"},"6",null,0,1),ke=m("span",null,"7",null,1,0).t("Norway");w.r(x,()=>p);const ee={};p._=O(function(e,t,n,r,s,P){t.n(de,r);const a=[];a.push({renderBody:o=>{o.n(ye,r),o.n(be,r)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.n(ge,r),o.n(fe,r)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.n(he,r),o.n(ke,r)},[Symbol.iterator]:i}),_(y,C(C({text:"Country"},e),{},{items:a}),t,n,"1",[["keydown","emit",!1,["keydown"]],["change","emit",!1,["change"]],["select","emit",!1,["select"]]])},{t:x,i:!0},ee);p.Component=S(ee,p._);const we=`<style>
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
`;function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?A(Object(n),!0).forEach(function(r){Oe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Oe(e,t,n){return t=Se(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Se(e){var t=ve(e,"string");return typeof t=="symbol"?t:String(t)}function ve(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const B="BlAT2rHi",u=v(B),_e=m("h3",null,"0",null,1,0).t("Click inside the menu, then type a name to see focus change. The search will see if any names start with the input, then if there are no matches it will search for the input string anywhere in the names."),Pe=m("h4",null,"1",null,1,0).t("Wait 2 seconds for the typeahead to reset and then try typing again to reset the search.");w.r(B,()=>u);const te={};u._=O(function(e,t,n,r,s,P){t.n(_e,r),t.n(Pe,r);const a=[];a.push({renderBody:o=>{o.t("Albania",r)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.t("Alcania",r)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.t("Alcdnia",r)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.t("Austen",r)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.t("Austin",r)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.t("Jack",r)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.t("Jackman",r)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.t("Jackson",r)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.t("Jasper",r)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.t("Julia",r)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.t("Julio",r)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.t("Julius",r)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.t("Luca",r)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.t("Lucais",r)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.t("Lucan",r)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.t("Lucian",r)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.t("Lucius",r)},[Symbol.iterator]:i}),_(y,J(J({text:"Button"},e),{},{items:a}),t,n,"2",[["keydown","emit",!1,["keydown"]],["change","emit",!1,["change"]],["select","emit",!1,["select"]]])},{t:B,i:!0},te);u.Component=S(te,u._);const je=`<h3>
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
`;function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?L(Object(n),!0).forEach(function(r){xe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function xe(e,t,n){return t=Be(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Be(e){var t=Te(e,"string");return typeof t=="symbol"?t:String(t)}function Te(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const T="XmcNkHwp",d=v(T);w.r(T,()=>d);const re={};d._=O(function(e,t,n,r,s,P){const a=[];a.push({renderBody:o=>{o.t("item 1 that has very long text",r)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.t("item 2",r)},[Symbol.iterator]:i}),a.push({separator:!0,[Symbol.iterator]:i}),a.push({renderBody:o=>{o.t("item 3",r)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.t("item 4",r)},[Symbol.iterator]:i}),a.push({renderBody:o=>{o.t("item 5",r)},[Symbol.iterator]:i}),_(y,N(N({},e),{},{items:a}),t,n,"0",[["keydown","emit",!1,["keydown"]],["change","emit",!1,["change"]],["select","emit",!1,["select"]]])},{t:T,i:!0},re);d.Component=S(re,d._);const $e=`<ebay-menu
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
`,Ee=e=>({input:ne(e)}),Ze={title:"building blocks/ebay-menu",component:y,parameters:{docs:{description:{component:ae}}},argTypes:{type:{control:{type:"text"},description:'Can be "radio" / "checkbox"'},priority:{control:{type:"select"},options:["primary","secondary","none"],description:'button priority, "primary" / "secondary" (default) / "none"'},checked:{description:"will set the corresponding index item to `checked` state and use the `aria-checked` attribute in markup"},item:{name:"@item",table:{category:"@attribute tags"}},value:{control:{type:"text"},table:{category:"@item attributes"},description:"the value to use with event responses for for the `checked` array"},badgeNumber:{control:{type:"text"},table:{category:"@item attributes"},description:"used as the number to be placed in the badge"},badgeAriaLabel:{control:{type:"text"},table:{category:"@item attributes"},description:"Yes (only if badge number is provided) | passed as the `aria-label` directly to the badge"},onKeydown:{action:"on-keydown",description:"Triggered on keydown",table:{category:"Events",defaultValue:{summary:"{ el, index, checked }"}}},onChange:{action:"on-change",description:"Triggered on item checked change, (checkbox/radio type only)",table:{category:"Events",defaultValue:{summary:"radio: { el, index, checked } | checkbox: { el, [indexes], [checked] }"}}},onSelect:{action:"on-select",description:"Triggered on item clicked (non radio/checkbox)",table:{category:"Events",defaultValue:{summary:"{ el, index, checked }"}}}}},c=Ee.bind({});c.args={items:[{renderBody:"item 1 that has very long text"},{renderBody:"item 2"},{renderBody:"item 3"}]};c.parameters={docs:{source:{code:oe("ebay-menu",c.args,{items:"item"})}}};const b=k(u,je),g=k(l,ce),f=k(p,we),h=k(d,$e);var K,R,V;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(V=(R=c.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var H,W,z;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:"buildExtensionTemplate(TypeaheadTemplate, TypeaheadTemplateCode)",...(z=(W=b.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var M,Q,U;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:"buildExtensionTemplate(BadgedTemplate, BadgedTemplateCode)",...(U=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,q;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:"buildExtensionTemplate(SpritesTemplate, SpritesTemplateCode)",...(q=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var F,G,I;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:"buildExtensionTemplate(SeparatorTemplate, SeparatorTemplateCode)",...(I=(G=h.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};const et=["Default","Typeahead","Badged","Sprites","Separator"];export{g as Badged,c as Default,h as Separator,f as Sprites,b as Typeahead,et as __namedExportsOrder,Ze as default};
//# sourceMappingURL=menu.stories-8101077b.js.map
