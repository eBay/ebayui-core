import{t as j}from"./index-iqhZMf16.js";import{b as h,a as G}from"./utils-NX-dnf4r.js";import{r as f,b as g,d as x,t as k}from"./registry-BhN9Jjhp.js";import{_ as J}from"./index-d9hKvI3H.js";import{_ as b}from"./render-tag-_0PNNh6Y.js";import{_ as n}from"./self-iterator-6yU_KG2T.js";import{_ as y}from"./index-SqwgQEx0.js";import{_ as W}from"./v-element-Oz1uh6KN.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";import"./index-gdhiSckb.js";/* empty css             */import"./index-iVYzKtn7.js";/* empty css                    *//* empty css               *//* empty css             */import"./dynamic-tag-hjM4Clfs.js";import"./index-64ectTu_.js";import"./index-whtpiCcX.js";import"./index-xPkSph_B.js";import"./index-_setUQZU.js";import"./index-GNsmVmbS.js";import"./index-egrddw8m.js";/* empty css                    */import"./index-0YyykK2d.js";import"./index-oGO7Hbb2.js";import"./index-0p_nhKjG.js";/* empty css             */import"./index-fMA_3jpo.js";import"./index-j-rYSiF3.js";import"./index-l3FQEXUN.js";import"./index-QGVtTfuc.js";import"./index-ERL0bCNR.js";const O=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,w="dhwvkbJ+",m=k(w);f.r(w,()=>m);const A={};m._=g(function(r,i,s,o,T,B){const t=[];t.push({type:"button",renderBody:e=>{e.t("item 1",o)},[Symbol.iterator]:n}),t.push({type:"button",renderBody:e=>{e.t("item 2",o)},[Symbol.iterator]:n}),t.push({type:"button",renderBody:e=>{e.t("item 3",o)},[Symbol.iterator]:n}),b(y,{text:"Settings",...r,icon:{renderBody:e=>{b(J,{},e,s,"1")},[Symbol.iterator]:n},items:t},i,s,"0",[["mousedown","emit",!1,["mosuon-mousedown"]],["select","emit",!1,["select"]],["collapse","emit",!1,["collapse"]],["expand","emit",!1,["expand"]]])},{t:w},A);m.Component=x(A,m._);const q=`<!--
*
* Note: Due to limitations in Marko v4, this tag must be within a parent component.
* Below we have added an empty class to force this to be the case.
-->
class {}

<ebay-fake-menu-button text="Settings"
    on-mousedown("emit", "mosuon-mousedown")
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
`,_="aIsKWFGn",l=k(_),H=W("style",null,"0",null,1,0).t(`
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
`),P=W("span",{class:"custom-label-flag"},"2",null,0,1);f.r(_,()=>l);const F={};l._=g(function(r,i,s,o,T,B){i.n(H,o);const t=[];t.push({href:"#",renderBody:e=>{e.t("item 1 that has very long text",o)},[Symbol.iterator]:n}),t.push({href:"#",renderBody:e=>{e.t("item 2",o)},[Symbol.iterator]:n}),t.push({href:"#",renderBody:e=>{e.t("item 3",o)},[Symbol.iterator]:n}),b(y,{...r,label:{renderBody:e=>{e.n(P,o),e.t(" This is the label you first see",o)},[Symbol.iterator]:n},items:t},i,s,"1",[["mousedown","emit",!1,["mousedown"]],["select","emit",!1,["select"]],["collapse","emit",!1,["collapse"]],["expand","emit",!1,["expand"]]])},{t:_,i:!0},F);l.Component=x(F,l._);const Q=`<style>
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
    on-mousedown('emit', 'mousedown')
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
`,S="TergSRy7",p=k(S);f.r(S,()=>p);const K={};p._=g(function(r,i,s,o,T,B){const t=[];t.push({href:"#",renderBody:e=>{e.t("item 1",o)},[Symbol.iterator]:n}),t.push({href:"#",renderBody:e=>{e.t("item 2",o)},[Symbol.iterator]:n}),t.push({separator:!0,[Symbol.iterator]:n}),t.push({href:"#",renderBody:e=>{e.t("item 3",o)},[Symbol.iterator]:n}),t.push({href:"#",renderBody:e=>{e.t("item 4",o)},[Symbol.iterator]:n}),t.push({href:"#",renderBody:e=>{e.t("item 5",o)},[Symbol.iterator]:n}),t.push({href:"#",renderBody:e=>{e.t("item 6",o)},[Symbol.iterator]:n}),t.push({href:"#",renderBody:e=>{e.t("item 7",o)},[Symbol.iterator]:n}),b(y,{text:"eBay Menu separator",items:t},i,s,"0")},{t:S,i:!0},K);p.Component=x(K,p._);const U=`<ebay-fake-menu-button text="eBay Menu separator">
    <@item href="#">item 1</@item>
    <@item href="#">item 2</@item>
    <@separator/>
    <@item href="#">item 3</@item>
    <@item href="#">item 4</@item>
    <@item href="#">item 5</@item>
    <@item href="#">item 6</@item>
    <@item href="#">item 7</@item>
</ebay-fake-menu-button>
`,X=r=>({input:G(r)}),Me={title:"buttons/ebay-fake-menu-button",component:y,parameters:{docs:{description:{component:O}}},argTypes:{text:{control:{type:"text"},description:"button text"},a11yText:{description:"a11y text for the button, especially for cases without text",control:{type:"text"}},noToggleIcon:{type:"boolean",description:"whether to hide the chevron toggle icon",control:{type:"boolean"}},expanded:{type:"boolean",control:{type:"boolean"},description:"whether content is expanded (Note: not supported as initial attribute)"},reverse:{type:"boolean",control:{type:"boolean"},description:"expand menu flyout to the left"},fixWidth:{type:"boolean",control:{type:"boolean"},description:"constrain items container width to button width"},borderless:{type:"boolean",control:{type:"boolean"},description:"whether button has borders"},size:{control:{type:"text"},description:'button size, "large" (default: "none")'},priority:{control:{type:"select"},options:["primary","secondary","delete","tertiary","none"],description:'button priority, only used when variant="button"'},disabled:{type:"boolean",control:{type:"boolean"},description:"Will disable the entire dropdown (disables the ebay-button label) if set to true"},variant:{control:{type:"select"},options:["overflow","form","button","icon"],description:'will change the button style, "overflow", "form" or "button. Default is form"'},item:{name:"@item",table:{category:"@attribute tags"}},icon:{name:"@icon",table:{category:"@attribute tags"}},href:{control:{type:"text"},table:{category:"@item attribute tags"},description:"for link that looks like a menu-item. If not set for fake type, will also disable the item"},type:{control:{type:"text"},description:'Set to "button" for fake menu-item `<button>`',table:{category:"@item attribute tags"}},checked:{table:{category:"@item attribute tags"},description:"whether or not item is checked"},current:{table:{category:"@item attribute tags"},description:"whether or not the href is the current href of the page"},badgeNumber:{description:"used as the number to be placed in the badge",table:{category:"@item attribute tags"}},badgeAriaLabel:{description:"passed as the `aria-label` directly to the badge",table:{category:"@item attribute tags"}},onKeydown:{action:"on-keydown",description:"Triggered on keydown",table:{category:"Events",defaultValue:{summary:"{ el, index, checked }"}}},onCollapse:{action:"on-collapse",description:"Triggered on menu collapse",table:{category:"Events",defaultValue:{summary:""}}},onExpand:{action:"on-expand",description:"Triggered on menu expand",table:{category:"Events",defaultValue:{summary:""}}},onMousedown:{action:"on-mousedown",description:"Triggered on mouse down on menu item",table:{category:"Events",defaultValue:{summary:""}}},onSelect:{action:"on-select",description:"Triggered on item clicked (non radio/checkbox)",table:{category:"Events",defaultValue:{summary:"{ el, index, checked }"}}}}},a=X.bind({});a.args={items:[{renderBody:"item 1 that has very long text",href:"https://www.ebay.com"},{renderBody:"item 2",href:"https://www.ebay.com"},{renderBody:"item 3",href:"https://www.ebay.com"}],text:"eBay Menu"};a.parameters={docs:{source:{code:j("ebay-fake-menu-button",a.args,{items:"item"})}}};const c=h(m,q),d=h(l,Q),u=h(p,U);var v,C,E;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(E=(C=a.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var $,I,M;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:"buildExtensionTemplate(IconTemplate, IconTemplateCode)",...(M=(I=c.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var L,V,D;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:"buildExtensionTemplate(CustomLabelTemplate, CustomLabelTemplateCode)",...(D=(V=d.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var R,z,N;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:"buildExtensionTemplate(SeparatorTemplate, SeparatorTemplateCode)",...(N=(z=u.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};const Le=["Standard","IconText","CustomLabelText","Separator"];export{d as CustomLabelText,c as IconText,u as Separator,a as Standard,Le as __namedExportsOrder,Me as default};
