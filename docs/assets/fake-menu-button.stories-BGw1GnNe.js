import{t as A}from"./index-CCz6reEH.js";import{b as y,a as G}from"./utils-DWCsNc5l.js";import{r as h,b as f,d as g,t as x}from"./registry-DcejNBCz.js";import{_ as J}from"./index-Qb4jJo3P.js";import{_ as c}from"./render-tag-BBOJ9dEX.js";import{i as k,a as z,r as o}from"./attr-tag-DphMQldM.js";import{_ as b}from"./index-DoYcOy-C.js";import{_ as F}from"./const-element-Bq6J7aqh.js";import{_ as O}from"./empty-component-BCB5DEsP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-CMkz4cmR.js";/* empty css             *//* empty css                    */import"./index-Bm7UghsY.js";/* empty css                    *//* empty css               *//* empty css             */import"./dynamic-tag-CH7Ufq3Q.js";import"./index-BIEPBgsb.js";import"./index-blmbJU0z.js";import"./index-Ds0knl6D.js";import"./index-AW2S7xMy.js";import"./index-D4BJokV4.js";import"./index-BfyIUMHf.js";import"./index-J7x9MEuC.js";import"./index--UCSL-gX.js";import"./index-Cuu6o1xX.js";/* empty css             */import"./index-BUT952VY.js";import"./index-DYoOQ_vw.js";import"./index-D7B88Psz.js";import"./index-D7GlLQHj.js";import"./index--35j0Bzx.js";const P=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,w="dhwvkbJ+",s=x(w);h.r(w,()=>s);const K={};s._=f(function(a,r,i,t,B,v){c(b,k(()=>{z("icon",{renderBody:e=>{c(J,{},e,i,"1")}}),o("items",{type:"button",renderBody:e=>{e.t("item 1",t)}}),o("items",{type:"button",renderBody:e=>{e.t("item 2",t)}}),o("items",{type:"button",renderBody:e=>{e.t("item 3",t)}})},{text:"Settings",...a,icon:void 0,items:void 0}),r,i,"0",[["mousedown","emit",!1,["mosuon-mousedown"]],["select","emit",!1,["select"]],["collapse","emit",!1,["collapse"]],["expand","emit",!1,["expand"]]])},{t:w},K);s.Component=g(K,s._);const H=`<!--
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
`,_="aIsKWFGn",u=x(_),Q=F("style",null,1).t(`
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
`),U=F("span",{class:"custom-label-flag"},0);h.r(_,()=>O);const j={};u._=f(function(a,r,i,t,B,v){r.n(Q,t),c(b,k(()=>{z("label",{renderBody:e=>{e.n(U,t),e.t(" This is the label you first see",t)}}),o("items",{href:"#",renderBody:e=>{e.t("item 1 that has very long text",t)}}),o("items",{href:"#",renderBody:e=>{e.t("item 2",t)}}),o("items",{href:"#",renderBody:e=>{e.t("item 3",t)}})},{...a,label:void 0,items:void 0}),r,i,"1",[["mousedown","emit",!1,["mousedown"]],["select","emit",!1,["select"]],["collapse","emit",!1,["collapse"]],["expand","emit",!1,["expand"]]])},{t:_,s:!0},j);u.Component=g(j,u._);const X=`<style>
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
`,T="TergSRy7",m=x(T);h.r(T,()=>m);const q={};m._=f(function(a,r,i,t,B,v){c(b,k(()=>{o("items",{href:"#",renderBody:e=>{e.t("item 1",t)}}),o("items",{href:"#",renderBody:e=>{e.t("item 2",t)}}),o("items",{separator:!0}),o("items",{href:"#",renderBody:e=>{e.t("item 3",t)}}),o("items",{href:"#",renderBody:e=>{e.t("item 4",t)}}),o("items",{href:"#",renderBody:e=>{e.t("item 5",t)}}),o("items",{href:"#",renderBody:e=>{e.t("item 6",t)}}),o("items",{href:"#",renderBody:e=>{e.t("item 7",t)}})},{text:"eBay Menu separator"}),r,i,"0")},{t:T,i:!0},q);m.Component=g(q,m._);const Y=`<ebay-fake-menu-button text="eBay Menu separator">
    <@item href="#">item 1</@item>
    <@item href="#">item 2</@item>
    <@separator/>
    <@item href="#">item 3</@item>
    <@item href="#">item 4</@item>
    <@item href="#">item 5</@item>
    <@item href="#">item 6</@item>
    <@item href="#">item 7</@item>
</ebay-fake-menu-button>
`,Z=a=>({input:G(a)}),Re={title:"buttons/ebay-fake-menu-button",component:b,parameters:{docs:{description:{component:P}}},argTypes:{text:{control:{type:"text"},description:"button text"},a11yText:{description:"a11y text for the button, especially for cases without text",control:{type:"text"}},noToggleIcon:{type:"boolean",description:"whether to hide the chevron toggle icon",control:{type:"boolean"}},expanded:{type:"boolean",control:{type:"boolean"},description:"whether content is expanded (Note: not supported as initial attribute)"},reverse:{type:"boolean",control:{type:"boolean"},description:"expand menu flyout to the left"},fixWidth:{type:"boolean",control:{type:"boolean"},description:"constrain items container width to button width"},borderless:{type:"boolean",control:{type:"boolean"},description:"whether button has borders"},size:{control:{type:"text"},description:'button size, "large" (default: "none")'},priority:{control:{type:"select"},options:["primary","secondary","delete","tertiary","none"],description:'button priority, only used when variant="button"'},disabled:{type:"boolean",control:{type:"boolean"},description:"Will disable the entire dropdown (disables the ebay-button label) if set to true"},variant:{control:{type:"select"},options:["overflow","form","button","icon"],description:'will change the button style, "overflow", "form" or "button. Default is form"'},item:{name:"@item",table:{category:"@attribute tags"}},icon:{name:"@icon",table:{category:"@attribute tags"}},href:{control:{type:"text"},table:{category:"@item attribute tags"},description:"for link that looks like a menu-item. If not set for fake type, will also disable the item"},type:{control:{type:"text"},description:'Set to "button" for fake menu-item `<button>`',table:{category:"@item attribute tags"}},checked:{table:{category:"@item attribute tags"},description:"whether or not item is checked"},current:{table:{category:"@item attribute tags"},description:"whether or not the href is the current href of the page"},badgeNumber:{description:"used as the number to be placed in the badge",controls:{hideNoControlsWarning:!0},table:{category:"@item attribute tags"}},"aria-label":{controls:{hideNoControlsWarning:!0},description:"Passed as the `aria-label` directly to the badge. Required only if badge number is provided",table:{category:"@item attribute tags"}},onKeydown:{action:"on-keydown",description:"Triggered on keydown",table:{category:"Events",defaultValue:{summary:"{ el, index, checked }"}}},onCollapse:{action:"on-collapse",description:"Triggered on menu collapse",table:{category:"Events",defaultValue:{summary:""}}},onExpand:{action:"on-expand",description:"Triggered on menu expand",table:{category:"Events",defaultValue:{summary:""}}},onMousedown:{action:"on-mousedown",description:"Triggered on mouse down on menu item",table:{category:"Events",defaultValue:{summary:""}}},onSelect:{action:"on-select",description:"Triggered on item clicked (non radio/checkbox)",table:{category:"Events",defaultValue:{summary:"{ el, index, checked }"}}}}},n=Z.bind({});n.args={items:[{renderBody:"item 1 that has very long text",href:"https://www.ebay.com"},{renderBody:"item 2",href:"https://www.ebay.com"},{renderBody:"item 3",href:"https://www.ebay.com"}],text:"eBay Menu"};n.parameters={docs:{source:{code:A("ebay-fake-menu-button",n.args,{items:"item"})}}};const l=y(s,H),p=y(u,X),d=y(m,Y);var S,C,E;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(E=(C=n.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var $,I,M;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:"buildExtensionTemplate(IconTemplate, IconTemplateCode)",...(M=(I=l.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var L,N,R;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:"buildExtensionTemplate(CustomLabelTemplate, CustomLabelTemplateCode)",...(R=(N=p.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var V,W,D;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:"buildExtensionTemplate(SeparatorTemplate, SeparatorTemplateCode)",...(D=(W=d.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};const Ve=["Standard","IconText","CustomLabelText","Separator"];export{p as CustomLabelText,l as IconText,d as Separator,n as Standard,Ve as __namedExportsOrder,Re as default};
