import{b as h,a as H}from"./utils-NX-dnf4r.js";import{t as K}from"./index-iqhZMf16.js";import{C as b}from"./index-INhSgQxH.js";import{r as g,b as f,d as k,t as _}from"./registry-EgEQwbXk.js";import{_ as a}from"./self-iterator-6yU_KG2T.js";import{_ as x}from"./render-tag-_0PNNh6Y.js";import{_ as n}from"./v-element-wxdcHeY-.js";/* empty css             */import"./dynamic-tag-7vXwaVzE.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./index-4rNb1p4D.js";import"./index-HaLoY7FK.js";import"./index-eucXA0ea.js";/* empty css             */import"./index-whtpiCcX.js";import"./index-j-rYSiF3.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";const P=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,S="0g8n7TBr",m=_(S);g.r(S,()=>m);const O={};m._=f(function(c,s,i,t,B,v){const r=[];r.push({href:"#",current:!0,itemMatchesUrl:!1,renderBody:e=>{e.t("item 1",t)},[Symbol.iterator]:a}),r.push({type:"button",renderBody:e=>{e.t("item 2",t)},[Symbol.iterator]:a}),r.push({href:"#",renderBody:e=>{e.t("item 3",t)},[Symbol.iterator]:a}),x(b,{items:r},s,i,"0")},{t:S,i:!0},O);m.Component=k(O,m._);const Y=`<ebay-fake-menu>
    <@item href="#" current itemMatchesUrl=false>item 1</@item>
    <@item type="button">item 2</@item>
    <@item href="#">item 3</@item>
</ebay-fake-menu>
`,w="PBmplDH0",p=_(w),q=n("style",null,"0",null,1,0).t(`
    span.sprite-flag {
        background-image: url('https://ir.ebaystatic.com/pictures/aw/pics/cmp/ds3/sprds3_21.png');
        background-repeat: none;
        display: inline-block;
        height: 20px;
        margin-right: 8px;
        vertical-align: middle;
        width: 26px;
    }
`),F=n("span",{class:"sprite-flag",style:"background-position: 0 -25px"},"2",null,0,1),G=n("span",null,"3",null,1,0).t("Austria"),J=n("span",{class:"sprite-flag",style:"background-position: 0 -100px"},"4",null,0,1),Q=n("span",null,"5",null,1,0).t("Denmark"),W=n("span",{class:"sprite-flag",style:"background-position: 0 -275px"},"6",null,0,1),X=n("span",null,"7",null,1,0).t("Norway");g.r(w,()=>p);const V={};p._=f(function(c,s,i,t,B,v){s.n(q,t);const r=[];r.push({href:"#",renderBody:e=>{e.n(F,t),e.n(G,t)},[Symbol.iterator]:a}),r.push({href:"#",renderBody:e=>{e.n(J,t),e.n(Q,t)},[Symbol.iterator]:a}),r.push({href:"#",renderBody:e=>{e.n(W,t),e.n(X,t)},[Symbol.iterator]:a}),x(b,{items:r},s,i,"1")},{t:w,i:!0},V);p.Component=k(V,p._);const Z=`<style>
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
`,T="LliOuL4m",l=_(T);g.r(T,()=>l);const z={};l._=f(function(c,s,i,t,B,v){const r=[];r.push({href:"#",renderBody:e=>{e.t("item 1 that has very long text",t)},[Symbol.iterator]:a}),r.push({href:"#",renderBody:e=>{e.t("item 2",t)},[Symbol.iterator]:a}),r.push({separator:!0,[Symbol.iterator]:a}),r.push({href:"#",renderBody:e=>{e.t("item 3",t)},[Symbol.iterator]:a}),r.push({href:"#",renderBody:e=>{e.t("item 4",t)},[Symbol.iterator]:a}),r.push({href:"#",renderBody:e=>{e.t("item 5",t)},[Symbol.iterator]:a}),x(b,{items:r},s,i,"0")},{t:T,i:!0},z);l.Component=k(z,l._);const ee=`<ebay-fake-menu>
    <@item href="#">item 1 that has very long text</@item>
    <@item href="#">item 2</@item>
    <@separator/>
    <@item href="#">item 3</@item>
    <@item href="#">item 4</@item>
    <@item href="#">item 5</@item>
</ebay-fake-menu>
`,te=c=>({input:H(c)}),ke={title:"building blocks/ebay-fake-menu",component:b,parameters:{docs:{description:{component:P}}},argTypes:{type:{control:{type:"select"},options:["fake","radio","checkbox"],description:'Can be "fake"/ "radio" / "checkbox"'},priority:{control:{type:"select"},options:["primary","secondary","none"],description:'button priority, "primary" / "secondary" (default) / "none"'},item:{name:"@item",table:{category:"@attribute tags"}},href:{control:{type:"text"},table:{category:"@item attribute tags"},description:"for link that looks like a menu-item. If set to null then will disable item"},itemType:{name:"type",control:{type:"text"},description:'Set to "button" for fake menu-item `<button>`',table:{category:"@item attribute tags"}},itemMatchesUrl:{type:"boolean",control:{type:"boolean"},description:"used in conjunction with `current` -- This determines whether aria-current will be `page` or `true` -- Defaults to `true` which gives aria-current a value of `page`"},checked:{table:{category:"@item attribute tags"},description:"whether or not item is checked"},current:{table:{category:"@item attribute tags"},description:"whether or not the href is the current href of the page"},value:{control:{type:"text"},table:{category:"@item attributes"},description:"the value to use with event responses for for the `checked` array"},"badge-number":{control:{type:"text"},table:{category:"@item attributes"},description:"used as the number to be placed in the badge"},"badge-aria-label":{control:{type:"text"},table:{category:"@item attributes"},description:"Yes (only if badge number is provided) | passed as the `aria-label` directly to the badge"},onKeydown:{action:"on-keydown",description:"Triggered on keydown",table:{category:"Events",defaultValue:{summary:"{ el, index, checked }"}}},onSelect:{action:"on-select",description:"Triggered on item clicked (non radio/checkbox)",table:{category:"Events",defaultValue:{summary:"{ el, index, checked }"}}}}},o=te.bind({});o.args={items:[{renderBody:"item 1 that has very long text",href:"https://www.ebay.com"},{renderBody:"item 2",href:"https://www.ebay.com"},{renderBody:"item 3",href:"https://www.ebay.com"}]};o.parameters={docs:{source:{code:K("ebay-fake-menu",o.args,{items:"item"})}}};const d=h(m,Y),u=h(p,Z),y=h(l,ee);var C,E,M;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(M=(E=o.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var $,D,I;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:"buildExtensionTemplate(ItemMatchesTemplate, ItemMatchesTemplateCode)",...(I=(D=d.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var U,R,j;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:"buildExtensionTemplate(SpritesTemplate, SpritesTemplateCode)",...(j=(R=u.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var A,L,N;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:"buildExtensionTemplate(SeparatorTemplate, SeparatorTemplateCode)",...(N=(L=y.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};const _e=["Standard","ItemMatches","Sprites","Separator"];export{d as ItemMatches,y as Separator,u as Sprites,o as Standard,_e as __namedExportsOrder,ke as default};
