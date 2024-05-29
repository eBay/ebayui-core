import{b,a as W}from"./utils-DWCsNc5l.js";import{t as q}from"./index-CCz6reEH.js";import{C as h}from"./index-Cuu6o1xX.js";import{r as y,b as g,d as f,t as k}from"./registry-DcejNBCz.js";import{i as _,r}from"./attr-tag-DphMQldM.js";import{_ as x}from"./render-tag-BBOJ9dEX.js";import{_ as n}from"./const-element-Bq6J7aqh.js";/* empty css             */import"./dynamic-tag-CH7Ufq3Q.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BIEPBgsb.js";import"./index-BUT952VY.js";import"./index-CMkz4cmR.js";/* empty css             */import"./index-blmbJU0z.js";import"./index-DYoOQ_vw.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const z=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-fake-menu
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

The dropdown portion of the menu-button. Used to build a list of links which link out to other pages. This can be used to create custom dropdowns.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/building-blocks-ebay-fake-menu)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/building-blocks-ebay-fake-menu)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-fake-menu/examples)
`,w="0g8n7TBr",s=k(w);y.r(w,()=>s);const O={};s._=g(function(c,o,i,t,B,C){x(h,_(()=>{r("items",{href:"#",current:!0,itemMatchesUrl:!1,renderBody:e=>{e.t("item 1",t)}}),r("items",{type:"button",renderBody:e=>{e.t("item 2",t)}}),r("items",{href:"#",renderBody:e=>{e.t("item 3",t)}})}),o,i,"0")},{t:w,i:!0},O);s.Component=f(O,s._);const H=`<ebay-fake-menu>
    <@item href="#" current itemMatchesUrl=false>item 1</@item>
    <@item type="button">item 2</@item>
    <@item href="#">item 3</@item>
</ebay-fake-menu>
`,T="PBmplDH0",m=k(T),K=n("style",null,1).t(`
    span.sprite-flag {
        background-image: url('https://ir.ebaystatic.com/pictures/aw/pics/cmp/ds3/sprds3_21.png');
        background-repeat: none;
        display: inline-block;
        height: 20px;
        margin-right: 8px;
        vertical-align: middle;
        width: 26px;
    }
`),F=n("span",{class:"sprite-flag",style:"background-position: 0 -25px"},0),G=n("span",null,1).t("Austria"),J=n("span",{class:"sprite-flag",style:"background-position: 0 -100px"},0),Q=n("span",null,1).t("Denmark"),X=n("span",{class:"sprite-flag",style:"background-position: 0 -275px"},0),Y=n("span",null,1).t("Norway");y.r(T,()=>m);const P={};m._=g(function(c,o,i,t,B,C){o.n(K,t),x(h,_(()=>{r("items",{href:"#",renderBody:e=>{e.n(F,t),e.n(G,t)}}),r("items",{href:"#",renderBody:e=>{e.n(J,t),e.n(Q,t)}}),r("items",{href:"#",renderBody:e=>{e.n(X,t),e.n(Y,t)}})}),o,i,"1")},{t:T,i:!0},P);m.Component=f(P,m._);const Z=`<style>
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

<ebay-fake-menu>
    <@item href="#">
        <span class="sprite-flag" style="background-position: 0 -25px"/>
        <span>Austria</span>
    </@item>
    <@item href="#">
        <span class="sprite-flag" style="background-position: 0 -100px"/>
        <span>Denmark</span>
    </@item>
    <@item href="#">
        <span class="sprite-flag" style="background-position: 0 -275px"/>
        <span>Norway</span>
    </@item>
</ebay-fake-menu>
`,S="LliOuL4m",p=k(S);y.r(S,()=>p);const V={};p._=g(function(c,o,i,t,B,C){x(h,_(()=>{r("items",{href:"#",renderBody:e=>{e.t("item 1 that has very long text",t)}}),r("items",{href:"#",renderBody:e=>{e.t("item 2",t)}}),r("items",{separator:!0}),r("items",{href:"#",renderBody:e=>{e.t("item 3",t)}}),r("items",{href:"#",renderBody:e=>{e.t("item 4",t)}}),r("items",{href:"#",renderBody:e=>{e.t("item 5",t)}})}),o,i,"0")},{t:S,i:!0},V);p.Component=f(V,p._);const ee=`<ebay-fake-menu>
    <@item href="#">item 1 that has very long text</@item>
    <@item href="#">item 2</@item>
    <@separator/>
    <@item href="#">item 3</@item>
    <@item href="#">item 4</@item>
    <@item href="#">item 5</@item>
</ebay-fake-menu>
`,te=c=>({input:W(c)}),ke={title:"building blocks/ebay-fake-menu",component:h,parameters:{docs:{description:{component:z}}},argTypes:{type:{control:{type:"select"},options:["fake","radio","checkbox"],description:'Can be "fake"/ "radio" / "checkbox"'},priority:{control:{type:"select"},options:["primary","secondary","none"],description:'button priority, "primary" / "secondary" (default) / "none"'},item:{name:"@item",table:{category:"@attribute tags"}},href:{control:{type:"text"},table:{category:"@item attribute tags"},description:"for link that looks like a menu-item. If set to null then will disable item"},itemType:{name:"type",control:{type:"text"},description:'Set to "button" for fake menu-item `<button>`',table:{category:"@item attribute tags"}},itemMatchesUrl:{type:"boolean",control:{type:"boolean"},description:"used in conjunction with `current` -- This determines whether aria-current will be `page` or `true` -- Defaults to `true` which gives aria-current a value of `page`"},checked:{table:{category:"@item attribute tags"},description:"whether or not item is checked"},current:{table:{category:"@item attribute tags"},description:"whether or not the href is the current href of the page"},value:{control:{type:"text"},table:{category:"@item attributes"},description:"the value to use with event responses for for the `checked` array"},"badge-number":{controls:{hideNoControlsWarning:!0},table:{category:"@item attributes"},description:"used as the number to be placed in the badge"},"aria-label":{controls:{hideNoControlsWarning:!0},description:"Passed as the `aria-label` directly to the badge. Required only if badge number is provided",table:{category:"@item attribute tags"}},onKeydown:{action:"on-keydown",description:"Triggered on keydown",table:{category:"Events",defaultValue:{summary:"{ el, index, checked }"}}},onSelect:{action:"on-select",description:"Triggered on item clicked (non radio/checkbox)",table:{category:"Events",defaultValue:{summary:"{ el, index, checked }"}}}}},a=te.bind({});a.args={items:[{renderBody:"item 1 that has very long text",href:"https://www.ebay.com"},{renderBody:"item 2",href:"https://www.ebay.com"},{renderBody:"item 3",href:"https://www.ebay.com"}]};a.parameters={docs:{source:{code:q("ebay-fake-menu",a.args,{items:"item"})}}};const d=b(s,H),l=b(m,Z),u=b(p,ee);var v,E,M;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(M=(E=a.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var $,D,I;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:"buildExtensionTemplate(ItemMatchesTemplate, ItemMatchesTemplateCode)",...(I=(D=d.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var N,R,U;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:"buildExtensionTemplate(SpritesTemplate, SpritesTemplateCode)",...(U=(R=l.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var j,A,L;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:"buildExtensionTemplate(SeparatorTemplate, SeparatorTemplateCode)",...(L=(A=u.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};const _e=["Standard","ItemMatches","Sprites","Separator"];export{d as ItemMatches,u as Separator,l as Sprites,a as Standard,_e as __namedExportsOrder,ke as default};
