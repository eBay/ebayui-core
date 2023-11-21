import{t as J}from"./index-a17a703b.js";import{b as h,a as q}from"./utils-44f5c40b.js";import{r as g,_ as w,a as k,t as x}from"./merge-attrs-51a02d23.js";import{_ as H}from"./index-ed85bc1e.js";import{_ as y}from"./render-tag-73fdbff3.js";import{_ as i}from"./self-iterator-81a0b488.js";import{_ as f}from"./index-128c4339.js";import{_ as W}from"./v-element-66dc25dc.js";import"./_commonjsHelpers-725317a4.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-42c7fb72.js";/* empty css             */import"./index-c59c7858.js";/* empty css                    *//* empty css               *//* empty css             */import"./dynamic-tag-ee96640a.js";import"./index-45512d9c.js";import"./index-ad737ebd.js";import"./index-1bda937f.js";import"./index-89dcddcc.js";import"./index-9c6c531d.js";import"./index-968667d0.js";/* empty css                    */import"./index-ab6a1325.js";import"./index-86563cf8.js";import"./index-c13b6752.js";/* empty css             */import"./index-fdc20a6e.js";import"./index-2e2d6c5e.js";import"./index-002669f7.js";import"./index-5f81e013.js";import"./index-6cab0bb0.js";const Q=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-fake-menu-button
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

A button which shows a menu of links when clicked.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/buttons-ebay-fake-menu-button)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/buttons-ebay-fake-menu-button)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-fake-menu-button/examples)
`;function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(m){return Object.getOwnPropertyDescriptor(e,m).enumerable})),r.push.apply(r,o)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?T(Object(r),!0).forEach(function(o){U(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function U(e,t,r){return t=X(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function X(e){var t=Y(e,"string");return typeof t=="symbol"?t:String(t)}function Y(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const _="dhwvkbJ+",l=x(_);g.r(_,()=>l);const A={};l._=w(function(e,t,r,o,m,O){const a=[];a.push({type:"button",renderBody:n=>{n.t("item 1",o)},[Symbol.iterator]:i}),a.push({type:"button",renderBody:n=>{n.t("item 2",o)},[Symbol.iterator]:i}),a.push({type:"button",renderBody:n=>{n.t("item 3",o)},[Symbol.iterator]:i}),y(f,P(P({text:"Settings"},e),{},{icon:{renderBody:n=>{y(H,{},n,r,"1")},[Symbol.iterator]:i},items:a}),t,r,"0",[["keydown","emit",!1,["keydown"]],["select","emit",!1,["select"]],["collapse","emit",!1,["collapse"]],["expand","emit",!1,["expand"]]])},{t:_},A);l.Component=k(A,l._);const Z=`<!--
*
* Note: Due to limitations in Marko v4, this tag must be within a parent component.
* Below we have added an empty class to force this to be the case.
-->
class {}

<ebay-fake-menu-button text="Settings"
    on-keydown("emit", "keydown")
    on-select("emit", "select")
    on-collapse("emit", "collapse")
    on-expand("emit", "expand")
    ...input>
    <@icon>
        <ebay-settings-24-icon/>
    </@icon>
    <@item type="button">item 1</@item>
    <@item type="button">item 2</@item>
    <@item type="button">item 3</@item>
</ebay-fake-menu-button>
`;function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(m){return Object.getOwnPropertyDescriptor(e,m).enumerable})),r.push.apply(r,o)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?B(Object(r),!0).forEach(function(o){ee(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function ee(e,t,r){return t=te(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function te(e){var t=oe(e,"string");return typeof t=="symbol"?t:String(t)}function oe(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const S="aIsKWFGn",p=x(S),re=W("style",null,"0",null,1,0).t(`
    span.custom-label-flag {
        background-image: url('https://ir.ebaystatic.com/pictures/aw/pics/cmp/ds3/sprds3_21.png');
        background-position: 0 -25px;
        background-repeat: none;
        display: inline-block;
        height: 20px;
        margin-right: 8px;
        vertical-align: middle;
        width: 26px;
    }
`),ne=W("span",{class:"custom-label-flag"},"2",null,0,1);g.r(S,()=>p);const F={};p._=w(function(e,t,r,o,m,O){t.n(re,o);const a=[];a.push({href:"#",renderBody:n=>{n.t("item 1 that has very long text",o)},[Symbol.iterator]:i}),a.push({href:"#",renderBody:n=>{n.t("item 2",o)},[Symbol.iterator]:i}),a.push({href:"#",renderBody:n=>{n.t("item 3",o)},[Symbol.iterator]:i}),y(f,j(j({},e),{},{label:{renderBody:n=>{n.n(ne,o),n.t(" This is the label you first see",o)},[Symbol.iterator]:i},items:a}),t,r,"1",[["keydown","emit",!1,["keydown"]],["select","emit",!1,["select"]],["collapse","emit",!1,["collapse"]],["expand","emit",!1,["expand"]]])},{t:S,i:!0},F);p.Component=k(F,p._);const ae=`<style>
    span.custom-label-flag {
        background-image: url('https://ir.ebaystatic.com/pictures/aw/pics/cmp/ds3/sprds3_21.png');
        background-position: 0 -25px;
        background-repeat: none;
        display: inline-block;
        height: 20px;
        margin-right: 8px;
        vertical-align: middle;
        width: 26px;
    }
</style>

<ebay-fake-menu-button
    on-keydown('emit', 'keydown')
    on-select('emit', 'select')
    on-collapse('emit', 'collapse')
    on-expand('emit', 'expand')
    ...input
>
    <@label><span.custom-label-flag/> This is the label you first see</@label>
    <@item href='#'>item 1 that has very long text</@item>
    <@item href='#'>item 2</@item>
    <@item href='#'>item 3</@item>
</ebay-fake-menu-button>
`,v="TergSRy7",c=x(v);g.r(v,()=>c);const G={};c._=w(function(e,t,r,o,m,O){const a=[];a.push({href:"#",renderBody:n=>{n.t("item 1",o)},[Symbol.iterator]:i}),a.push({href:"#",renderBody:n=>{n.t("item 2",o)},[Symbol.iterator]:i}),a.push({separator:!0,[Symbol.iterator]:i}),a.push({href:"#",renderBody:n=>{n.t("item 3",o)},[Symbol.iterator]:i}),a.push({href:"#",renderBody:n=>{n.t("item 4",o)},[Symbol.iterator]:i}),a.push({href:"#",renderBody:n=>{n.t("item 5",o)},[Symbol.iterator]:i}),a.push({href:"#",renderBody:n=>{n.t("item 6",o)},[Symbol.iterator]:i}),a.push({href:"#",renderBody:n=>{n.t("item 7",o)},[Symbol.iterator]:i}),y(f,{text:"eBay Menu separator",items:a},t,r,"0")},{t:v,i:!0},G);c.Component=k(G,c._);const ie=`<ebay-fake-menu-button text="eBay Menu separator">
    <@item href="#">item 1</@item>
    <@item href="#">item 2</@item>
    <@separator/>
    <@item href="#">item 3</@item>
    <@item href="#">item 4</@item>
    <@item href="#">item 5</@item>
    <@item href="#">item 6</@item>
    <@item href="#">item 7</@item>
</ebay-fake-menu-button>
`,se=e=>({input:q(e)}),ze={title:"buttons/ebay-fake-menu-button",component:f,parameters:{docs:{description:{component:Q}}},argTypes:{text:{control:{type:"text"},description:"button text"},a11yText:{description:"a11y text for the button, especially for cases without text",control:{type:"text"}},noToggleIcon:{type:"boolean",description:"whether to hide the chevron toggle icon",control:{type:"boolean"}},expanded:{type:"boolean",control:{type:"boolean"},description:"whether content is expanded (Note: not supported as initial attribute)"},reverse:{type:"boolean",control:{type:"boolean"},description:"expand menu flyout to the left"},fixWidth:{type:"boolean",control:{type:"boolean"},description:"constrain items container width to button width"},borderless:{type:"boolean",control:{type:"boolean"},description:"whether button has borders"},size:{control:{type:"text"},description:'button size, "large" (default: "none")'},priority:{control:{type:"select"},options:["primary","secondary","delete","tertiary","none"],description:'button priority, only used when variant="button"'},disabled:{type:"boolean",control:{type:"boolean"},description:"Will disable the entire dropdown (disables the ebay-button label) if set to true"},variant:{control:{type:"select"},options:["overflow","form","button"],description:'will change the button style, "overflow", "form" or "button. Default is form"'},item:{name:"@item",table:{category:"@attribute tags"}},icon:{name:"@icon",table:{category:"@attribute tags"}},href:{control:{type:"text"},table:{category:"@item attribute tags"},description:"for link that looks like a menu-item. If not set for fake type, will also disable the item"},type:{control:{type:"text"},description:'Set to "button" for fake menu-item `<button>`',table:{category:"@item attribute tags"}},checked:{table:{category:"@item attribute tags"},description:"whether or not item is checked"},current:{table:{category:"@item attribute tags"},description:"whether or not the href is the current href of the page"},badgeNumber:{description:"used as the number to be placed in the badge",table:{category:"@item attribute tags"}},badgeAriaLabel:{description:"passed as the `aria-label` directly to the badge",table:{category:"@item attribute tags"}},onKeydown:{action:"on-keydown",description:"Triggered on keydown",table:{category:"Events",defaultValue:{summary:"{ el, originalEvent, index }"}}},onCollapse:{action:"on-collapse",description:"Triggered on menu collapse",table:{category:"Events",defaultValue:{summary:""}}},onExpand:{action:"on-expand",description:"Triggered on menu expand",table:{category:"Events",defaultValue:{summary:""}}},onMousedown:{action:"on-mousedown",description:"Triggered on mouse down on menu item",table:{category:"Events",defaultValue:{summary:""}}},onSelect:{action:"on-select",description:"Triggered on item clicked (non radio/checkbox)",table:{category:"Events",defaultValue:{summary:"{ el, originalEvent, index }"}}}}},s=se.bind({});s.args={items:[{renderBody:"item 1 that has very long text",href:"https://www.ebay.com"},{renderBody:"item 2",href:"https://www.ebay.com"},{renderBody:"item 3",href:"https://www.ebay.com"}],text:"eBay Menu"};s.parameters={docs:{source:{code:J("ebay-fake-menu-button",s.args,{items:"item"})}}};const u=h(l,Z),d=h(p,ae),b=h(c,ie);var E,C,$;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...($=(C=s.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var D,I,M;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:"buildExtensionTemplate(IconTemplate, IconTemplateCode)",...(M=(I=u.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var K,L,N;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:"buildExtensionTemplate(CustomLabelTemplate, CustomLabelTemplateCode)",...(N=(L=d.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var V,R,z;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:"buildExtensionTemplate(SeparatorTemplate, SeparatorTemplateCode)",...(z=(R=b.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};const We=["Standard","IconText","CustomLabelText","Separator"];export{d as CustomLabelText,u as IconText,b as Separator,s as Standard,We as __namedExportsOrder,ze as default};
//# sourceMappingURL=fake-menu-button.stories-0eab4308.js.map
