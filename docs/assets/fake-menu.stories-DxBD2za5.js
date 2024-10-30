import{b as h,a as W}from"./utils-DWCsNc5l.js";import{t as q}from"./index-CCz6reEH.js";import{_ as y}from"./index-DIPz__UB.js";import{r as b,b as g,c as f,t as k}from"./registry-CyswyZw5.js";import{i as _,r}from"./attr-tag-DphMQldM.js";import{_ as x}from"./render-tag-CLyPs9qZ.js";import{_ as n}from"./const-element-B9h58Dwq.js";/* empty css             */import"./dynamic-tag-CXXozR29.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-s6KmHAjI.js";import"./index-CqxSgpEp.js";import"./index-Bq4u441m.js";/* empty css             */import"./of-fallback-C2gEBeKK.js";import"./index-CbT4wDAv.js";import"./index-DnXwn7Kz.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const G=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,w="yZTFTjQk",s=k(w);b.r(w,()=>s);const F={};s._=g(function(c,o,i,t,B,v){x(y,_(()=>{r("items",{href:"#",current:!0,itemMatchesUrl:!1,renderBody:e=>{e.t("item 1",t)}}),r("items",{type:"button",renderBody:e=>{e.t("item 2",t)}}),r("items",{href:"#",renderBody:e=>{e.t("item 3",t)}})}),o,i,"0")},{t:w,i:!0},F);s.Component=f(F,s._);const O=`<ebay-fake-menu>
    <@item href="#" current itemMatchesUrl=false>item 1</@item>
    <@item type="button">item 2</@item>
    <@item href="#">item 3</@item>
</ebay-fake-menu>
`,T="FMjzMEed",m=k(T),P=n("style",null,1).t(`
    span.sprite-flag {
        background-image: url('https://ir.ebaystatic.com/pictures/aw/pics/cmp/ds3/sprds3_21.png');
        background-repeat: none;
        display: inline-block;
        height: 20px;
        margin-right: 8px;
        vertical-align: middle;
        width: 26px;
    }
`),Q=n("span",{class:"sprite-flag",style:"background-position: 0 -25px"},0),Z=n("span",null,1).t("Austria"),H=n("span",{class:"sprite-flag",style:"background-position: 0 -100px"},0),J=n("span",null,1).t("Denmark"),L=n("span",{class:"sprite-flag",style:"background-position: 0 -275px"},0),X=n("span",null,1).t("Norway");b.r(T,()=>m);const K={};m._=g(function(c,o,i,t,B,v){o.n(P,t),x(y,_(()=>{r("items",{href:"#",renderBody:e=>{e.n(Q,t),e.n(Z,t)}}),r("items",{href:"#",renderBody:e=>{e.n(H,t),e.n(J,t)}}),r("items",{href:"#",renderBody:e=>{e.n(L,t),e.n(X,t)}})}),o,i,"1")},{t:T,i:!0},K);m.Component=f(K,m._);const Y=`<style>
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
`,S="kSGKlyuc",p=k(S);b.r(S,()=>p);const V={};p._=g(function(c,o,i,t,B,v){x(y,_(()=>{r("items",{href:"#",renderBody:e=>{e.t("item 1 that has very long text",t)}}),r("items",{href:"#",renderBody:e=>{e.t("item 2",t)}}),r("items",{separator:!0}),r("items",{href:"#",renderBody:e=>{e.t("item 3",t)}}),r("items",{href:"#",renderBody:e=>{e.t("item 4",t)}}),r("items",{href:"#",renderBody:e=>{e.t("item 5",t)}})}),o,i,"0")},{t:S,i:!0},V);p.Component=f(V,p._);const ee=`<ebay-fake-menu>
    <@item href="#">item 1 that has very long text</@item>
    <@item href="#">item 2</@item>
    <@separator/>
    <@item href="#">item 3</@item>
    <@item href="#">item 4</@item>
    <@item href="#">item 5</@item>
</ebay-fake-menu>
`,te=c=>({input:W(c)}),_e={title:"building blocks/ebay-fake-menu",component:y,parameters:{docs:{description:{component:G}}},argTypes:{type:{control:{type:"select"},options:["fake","radio","checkbox"],description:'Can be "fake"/ "radio" / "checkbox"'},priority:{control:{type:"select"},options:["primary","secondary","none"],description:'button priority, "primary" / "secondary" (default) / "none"'},item:{name:"@item",table:{category:"@attribute tags"}},href:{control:{type:"text"},table:{category:"@item attribute tags"},description:"for link that looks like a menu-item. If set to null then will disable item"},itemType:{name:"type",control:{type:"text"},description:'Set to "button" for fake menu-item `<button>`',table:{category:"@item attribute tags"}},itemMatchesUrl:{type:"boolean",control:{type:"boolean"},description:"used in conjunction with `current` -- This determines whether aria-current will be `page` or `true` -- Defaults to `true` which gives aria-current a value of `page`"},checked:{table:{category:"@item attribute tags"},description:"whether or not item is checked"},current:{table:{category:"@item attribute tags"},description:"whether or not the href is the current href of the page"},value:{control:{type:"text"},table:{category:"@item attributes"},description:"the value to use with event responses for for the `checked` array"},"badge-number":{controls:{hideNoControlsWarning:!0},table:{category:"@item attributes"},description:"used as the number to be placed in the badge"},"aria-label":{controls:{hideNoControlsWarning:!0},description:"Passed as the `aria-label` directly to the badge. Required only if badge number is provided",table:{category:"@item attribute tags"}},onKeydown:{action:"on-keydown",description:"Triggered on keydown",table:{category:"Events",defaultValue:{summary:"{ el, index, checked }"}}},onSelect:{action:"on-select",description:"Triggered on item clicked (non radio/checkbox)",table:{category:"Events",defaultValue:{summary:"{ el, index, checked }"}}}}},a=te.bind({});a.args={items:[{renderBody:"item 1 that has very long text",href:"https://www.ebay.com"},{renderBody:"item 2",href:"https://www.ebay.com"},{renderBody:"item 3",href:"https://www.ebay.com"}]};a.parameters={docs:{source:{code:q("ebay-fake-menu",a.args,{items:"item"})}}};const d=h(s,O),l=h(m,Y),u=h(p,ee);var C,E,M;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(M=(E=a.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var $,D,I;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:"buildExtensionTemplate(ItemMatchesTemplate, ItemMatchesTemplateCode)",...(I=(D=d.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var j,N,R;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:"buildExtensionTemplate(SpritesTemplate, SpritesTemplateCode)",...(R=(N=l.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var U,z,A;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:"buildExtensionTemplate(SeparatorTemplate, SeparatorTemplateCode)",...(A=(z=u.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const xe=["Standard","ItemMatches","Sprites","Separator"];export{d as ItemMatches,u as Separator,l as Sprites,a as Standard,xe as __namedExportsOrder,_e as default};
