import{b,a as F}from"./utils-DWCsNc5l.js";import{t as G}from"./index-CCz6reEH.js";import{C as p}from"./index-uu7ORin4.js";import{r as k,b as f,d as x,t as B}from"./registry-D0x2Lw0V.js";import{i as w,r as n}from"./attr-tag-W-ozfNNY.js";import{_ as T}from"./render-tag-Buaq4gMc.js";import{_ as r}from"./const-element-DTwCHAHi.js";/* empty css             */import"./dynamic-tag-BSuzyz1c.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-ClYQ9iWr.js";import"./index-C37XbWVa.js";import"./index-BZpHAKBe.js";/* empty css             */import"./index-eGtaP7gF.js";import"./index-dh1GPFcN.js";import"./index-Ku187Omj.js";import"./index-D7GlLQHj.js";import"./index-blmbJU0z.js";import"./index-DYoOQ_vw.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const I=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,S="8RfdMvlx",m=B(S);k.r(S,()=>m);const P={};m._=f(function(i,a,s,t,_,C){T(p,w(()=>{n("items",{badgeNumber:1,ariaLabel:"1 item unread",renderBody:e=>{e.t("item 1 that has very long text",t)}}),n("items",{badgeNumber:99,ariaLabel:"99 items unread",renderBody:e=>{e.t("item 2",t)}}),n("items",{badgeNumber:10,ariaLabel:"10 item unread",renderBody:e=>{e.t("item 3",t)}})},{...i}),a,s,"0",[["keydown","emit",!1,["keydown"]],["change","emit",!1,["change"]],["select","emit",!1,["select"]]])},{t:S,i:!0},P);m.Component=x(P,m._);const Y=`<ebay-menu
    ...input
    on-keydown('emit', 'keydown')
    on-change('emit', 'change')
    on-select('emit', 'select')
>
    <@item badgeNumber=1 aria-label="1 item unread">item 1 that has very long text</@item>
    <@item badgeNumber=99 aria-label="99 items unread">item 2</@item>
    <@item badgeNumber=10 aria-label="10 item unread">item 3</@item>
</ebay-menu>
`,v="QsUVfuH8",d=B(v),Z=r("style",null,1).t(`
    span.sprite-flag {
        background-image: url('https://ir.ebaystatic.com/pictures/aw/pics/cmp/ds3/sprds3_21.png');
        background-repeat: none;
        display: inline-block;
        height: 20px;
        margin-right: 8px;
        vertical-align: middle;
        width: 26px;
    }
`),ee=r("span",{style:"background-position: 0 -25px",class:"sprite-flag"},0),te=r("span",null,1).t("Austria"),ne=r("span",{style:"background-position: 0 -100px",class:"sprite-flag"},0),ae=r("span",null,1).t("Denmark"),ie=r("span",{style:"background-position: 0 -275px",class:"sprite-flag"},0),re=r("span",null,1).t("Norway");k.r(v,()=>d);const Q={};d._=f(function(i,a,s,t,_,C){a.n(Z,t),T(p,w(()=>{n("items",{renderBody:e=>{e.n(ee,t),e.n(te,t)}}),n("items",{renderBody:e=>{e.n(ne,t),e.n(ae,t)}}),n("items",{renderBody:e=>{e.n(ie,t),e.n(re,t)}})},{text:"Country",...i}),a,s,"1",[["keydown","emit",!1,["keydown"]],["change","emit",!1,["change"]],["select","emit",!1,["select"]]])},{t:v,i:!0},Q);d.Component=x(Q,d._);const se=`<style>
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
`,$="BlAT2rHi",c=B($),oe=r("h3",null,1).t("Click inside the menu, then type a name to see focus change. The search will see if any names start with the input, then if there are no matches it will search for the input string anywhere in the names."),me=r("h4",null,1).t("Wait 2 seconds for the typeahead to reset and then try typing again to reset the search.");k.r($,()=>c);const U={};c._=f(function(i,a,s,t,_,C){a.n(oe,t),a.n(me,t),T(p,w(()=>{n("items",{renderBody:e=>{e.t("Albania",t)}}),n("items",{renderBody:e=>{e.t("Alcania",t)}}),n("items",{renderBody:e=>{e.t("Alcdnia",t)}}),n("items",{renderBody:e=>{e.t("Austen",t)}}),n("items",{renderBody:e=>{e.t("Austin",t)}}),n("items",{renderBody:e=>{e.t("Jack",t)}}),n("items",{renderBody:e=>{e.t("Jackman",t)}}),n("items",{renderBody:e=>{e.t("Jackson",t)}}),n("items",{renderBody:e=>{e.t("Jasper",t)}}),n("items",{renderBody:e=>{e.t("Julia",t)}}),n("items",{renderBody:e=>{e.t("Julio",t)}}),n("items",{renderBody:e=>{e.t("Julius",t)}}),n("items",{renderBody:e=>{e.t("Luca",t)}}),n("items",{renderBody:e=>{e.t("Lucais",t)}}),n("items",{renderBody:e=>{e.t("Lucan",t)}}),n("items",{renderBody:e=>{e.t("Lucian",t)}}),n("items",{renderBody:e=>{e.t("Lucius",t)}})},{text:"Button",...i}),a,s,"2",[["keydown","emit",!1,["keydown"]],["change","emit",!1,["change"]],["select","emit",!1,["select"]]])},{t:$,i:!0},U);c.Component=x(U,c._);const de=`<h3>
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
`,J="XmcNkHwp",l=B(J);k.r(J,()=>l);const X={};l._=f(function(i,a,s,t,_,C){T(p,w(()=>{n("items",{renderBody:e=>{e.t("item 1 that has very long text",t)}}),n("items",{renderBody:e=>{e.t("item 2",t)}}),n("items",{separator:!0}),n("items",{renderBody:e=>{e.t("item 3",t)}}),n("items",{renderBody:e=>{e.t("item 4",t)}}),n("items",{renderBody:e=>{e.t("item 5",t)}})},{...i}),a,s,"0",[["keydown","emit",!1,["keydown"]],["change","emit",!1,["change"]],["select","emit",!1,["select"]]])},{t:J,i:!0},X);l.Component=x(X,l._);const ce=`<ebay-menu
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
`,le=i=>({input:F(i)}),Ne={title:"building blocks/ebay-menu",component:p,parameters:{docs:{description:{component:I}}},argTypes:{type:{control:{type:"text"},description:'Can be "radio" / "checkbox"'},priority:{control:{type:"select"},options:["primary","secondary","none"],description:'button priority, "primary" / "secondary" (default) / "none"'},checked:{description:"will set the corresponding index item to `checked` state and use the `aria-checked` attribute in markup"},item:{name:"@item",table:{category:"@attribute tags"}},value:{control:{type:"text"},table:{category:"@item attributes"},description:"the value to use with event responses for for the `checked` array"},badgeNumber:{controls:{hideNoControlsWarning:!0},table:{category:"@item attributes"},description:"used as the number to be placed in the badge"},"aria-label":{controls:{hideNoControlsWarning:!0},table:{category:"@item attributes"},description:"Passed as the `aria-label` directly to the badge. Required only if badge number is provided"},onKeydown:{action:"on-keydown",description:"Triggered on keydown",table:{category:"Events",defaultValue:{summary:"{ el, index, checked }"}}},onChange:{action:"on-change",description:"Triggered on item checked change, (checkbox/radio type only)",table:{category:"Events",defaultValue:{summary:"radio: { el, index, checked } | checkbox: { el, [indexes], [checked] }"}}},onSelect:{action:"on-select",description:"Triggered on item clicked (non radio/checkbox)",table:{category:"Events",defaultValue:{summary:"{ el, index, checked }"}}}}},o=le.bind({});o.args={items:[{renderBody:"item 1 that has very long text"},{renderBody:"item 2"},{renderBody:"item 3"}]};o.parameters={docs:{source:{code:G("ebay-menu",o.args,{items:"item"})}}};const u=b(c,de),y=b(m,Y),h=b(d,se),g=b(l,ce);var A,L,E;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(E=(L=o.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var N,D,R;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:"buildExtensionTemplate(TypeaheadTemplate, TypeaheadTemplateCode)",...(R=(D=u.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var V,W,H;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:"buildExtensionTemplate(BadgedTemplate, BadgedTemplateCode)",...(H=(W=y.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var j,q,z;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:"buildExtensionTemplate(SpritesTemplate, SpritesTemplateCode)",...(z=(q=h.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var K,M,O;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:"buildExtensionTemplate(SeparatorTemplate, SeparatorTemplateCode)",...(O=(M=g.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const De=["Default","Typeahead","Badged","Sprites","Separator"];export{y as Badged,o as Default,g as Separator,h as Sprites,u as Typeahead,De as __namedExportsOrder,Ne as default};
