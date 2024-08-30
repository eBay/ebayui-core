import{b,a as U}from"./utils-DWCsNc5l.js";import{t as X}from"./index-CCz6reEH.js";import{C as m}from"./index-B6okYLMy.js";import{r as k,b as f,c as x,t as B}from"./registry-BVpmXZbM.js";import{i as _,r as n}from"./attr-tag-DphMQldM.js";import{_ as w}from"./render-tag-mtfFSHEK.js";import{_ as T}from"./empty-component-BCB5DEsP.js";import{_ as r}from"./const-element-St90kC48.js";/* empty css             */import"./dynamic-tag-CptWGHl0.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-EuiajR5E.js";import"./index-BYXJZKRQ.js";import"./index-DNKYtym0.js";/* empty css             */import"./of-fallback-C2gEBeKK.js";import"./index-eGtaP7gF.js";import"./index-DSBRYoSW.js";import"./index-DoeQzs2M.js";import"./index-D7GlLQHj.js";import"./index-D52eSIAE.js";import"./index-blmbJU0z.js";import"./index-DnXwn7Kz.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const Y=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,S="_tAvykum",u=B(S);k.r(S,()=>T);const M={};u._=f(function(i,a,s,t,C,v){w(m,_(()=>{n("items",{badgeNumber:1,ariaLabel:"1 item unread",renderBody:e=>{e.t("item 1 that has very long text",t)}}),n("items",{badgeNumber:99,ariaLabel:"99 items unread",renderBody:e=>{e.t("item 2",t)}}),n("items",{badgeNumber:10,ariaLabel:"10 item unread",renderBody:e=>{e.t("item 3",t)}})},{...i,items:void 0}),a,s,"0",[["keydown","emit",!1,["keydown"]],["change","emit",!1,["change"]],["select","emit",!1,["select"]]])},{t:S,s:!0},M);u.Component=x(M,u._);const Z=`<ebay-menu
    ...input
    on-keydown('emit', 'keydown')
    on-change('emit', 'change')
    on-select('emit', 'select')
>
    <@item badgeNumber=1 aria-label="1 item unread">item 1 that has very long text</@item>
    <@item badgeNumber=99 aria-label="99 items unread">item 2</@item>
    <@item badgeNumber=10 aria-label="10 item unread">item 3</@item>
</ebay-menu>
`,$="PF_DWcxd",y=B($),ee=r("style",null,1).t(`
    span.sprite-flag {
        background-image: url('https://ir.ebaystatic.com/pictures/aw/pics/cmp/ds3/sprds3_21.png');
        background-repeat: none;
        display: inline-block;
        height: 20px;
        margin-right: 8px;
        vertical-align: middle;
        width: 26px;
    }
`),te=r("span",{style:"background-position: 0 -25px",class:"sprite-flag"},0),ne=r("span",null,1).t("Austria"),ae=r("span",{style:"background-position: 0 -100px",class:"sprite-flag"},0),ie=r("span",null,1).t("Denmark"),re=r("span",{style:"background-position: 0 -275px",class:"sprite-flag"},0),se=r("span",null,1).t("Norway");k.r($,()=>T);const Q={};y._=f(function(i,a,s,t,C,v){a.n(ee,t),w(m,_(()=>{n("items",{renderBody:e=>{e.n(te,t),e.n(ne,t)}}),n("items",{renderBody:e=>{e.n(ae,t),e.n(ie,t)}}),n("items",{renderBody:e=>{e.n(re,t),e.n(se,t)}})},{text:"Country",...i,items:void 0}),a,s,"1",[["keydown","emit",!1,["keydown"]],["change","emit",!1,["change"]],["select","emit",!1,["select"]]])},{t:$,s:!0},Q);y.Component=x(Q,y._);const oe=`<style>
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
`,A="$hWwQAr",h=B(A),me=r("h3",null,1).t("Click inside the menu, then type a name to see focus change. The search will see if any names start with the input, then if there are no matches it will search for the input string anywhere in the names."),de=r("h4",null,1).t("Wait 2 seconds for the typeahead to reset and then try typing again to reset the search.");k.r(A,()=>T);const G={};h._=f(function(i,a,s,t,C,v){a.n(me,t),a.n(de,t),w(m,_(()=>{n("items",{renderBody:e=>{e.t("Albania",t)}}),n("items",{renderBody:e=>{e.t("Alcania",t)}}),n("items",{renderBody:e=>{e.t("Alcdnia",t)}}),n("items",{renderBody:e=>{e.t("Austen",t)}}),n("items",{renderBody:e=>{e.t("Austin",t)}}),n("items",{renderBody:e=>{e.t("Jack",t)}}),n("items",{renderBody:e=>{e.t("Jackman",t)}}),n("items",{renderBody:e=>{e.t("Jackson",t)}}),n("items",{renderBody:e=>{e.t("Jasper",t)}}),n("items",{renderBody:e=>{e.t("Julia",t)}}),n("items",{renderBody:e=>{e.t("Julio",t)}}),n("items",{renderBody:e=>{e.t("Julius",t)}}),n("items",{renderBody:e=>{e.t("Luca",t)}}),n("items",{renderBody:e=>{e.t("Lucais",t)}}),n("items",{renderBody:e=>{e.t("Lucan",t)}}),n("items",{renderBody:e=>{e.t("Lucian",t)}}),n("items",{renderBody:e=>{e.t("Lucius",t)}})},{text:"Button",...i,items:void 0}),a,s,"2",[["keydown","emit",!1,["keydown"]],["change","emit",!1,["change"]],["select","emit",!1,["select"]]])},{t:A,s:!0},G);h.Component=x(G,h._);const ce=`<h3>
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
`,J="sMtOyITe",g=B(J);k.r(J,()=>T);const H={};g._=f(function(i,a,s,t,C,v){w(m,_(()=>{n("items",{renderBody:e=>{e.t("item 1 that has very long text",t)}}),n("items",{renderBody:e=>{e.t("item 2",t)}}),n("items",{separator:!0}),n("items",{renderBody:e=>{e.t("item 3",t)}}),n("items",{renderBody:e=>{e.t("item 4",t)}}),n("items",{renderBody:e=>{e.t("item 5",t)}})},{...i,items:void 0}),a,s,"0",[["keydown","emit",!1,["keydown"]],["change","emit",!1,["change"]],["select","emit",!1,["select"]]])},{t:J,s:!0},H);g.Component=x(H,g._);const le=`<ebay-menu
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
`,pe=i=>({input:U(i)}),Ve={title:"building blocks/ebay-menu",component:m,parameters:{docs:{description:{component:Y}}},argTypes:{type:{control:{type:"text"},description:'Can be "radio" / "checkbox"'},priority:{control:{type:"select"},options:["primary","secondary","none"],description:'button priority, "primary" / "secondary" (default) / "none"'},checked:{description:"will set the corresponding index item to `checked` state and use the `aria-checked` attribute in markup"},item:{name:"@item",table:{category:"@attribute tags"}},value:{control:{type:"text"},table:{category:"@item attributes"},description:"the value to use with event responses for for the `checked` array"},badgeNumber:{controls:{hideNoControlsWarning:!0},table:{category:"@item attributes"},description:"used as the number to be placed in the badge"},"aria-label":{controls:{hideNoControlsWarning:!0},table:{category:"@item attributes"},description:"Passed as the `aria-label` directly to the badge. Required only if badge number is provided"},onKeydown:{action:"on-keydown",description:"Triggered on keydown",table:{category:"Events",defaultValue:{summary:"{ el, index, checked }"}}},onChange:{action:"on-change",description:"Triggered on item checked change, (checkbox/radio type only)",table:{category:"Events",defaultValue:{summary:"radio: { el, index, checked } | checkbox: { el, [indexes], [checked] }"}}},onSelect:{action:"on-select",description:"Triggered on item clicked (non radio/checkbox)",table:{category:"Events",defaultValue:{summary:"{ el, index, checked }"}}}}},o=pe.bind({});o.args={items:[{renderBody:"item 1 that has very long text"},{renderBody:"item 2"},{renderBody:"item 3"}]};o.parameters={docs:{source:{code:X("ebay-menu",o.args,{items:"item"})}}};const d=b(h,ce),c=b(u,Z),l=b(y,oe),p=b(g,le);var L,E,N;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(N=(E=o.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var D,W,R;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:"buildExtensionTemplate(TypeaheadTemplate, TypeaheadTemplateCode)",...(R=(W=d.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var V,O,P;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:"buildExtensionTemplate(BadgedTemplate, BadgedTemplateCode)",...(P=(O=c.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var j,q,z;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:"buildExtensionTemplate(SpritesTemplate, SpritesTemplateCode)",...(z=(q=l.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var F,I,K;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:"buildExtensionTemplate(SeparatorTemplate, SeparatorTemplateCode)",...(K=(I=p.parameters)==null?void 0:I.docs)==null?void 0:K.source}}};const Oe=["Default","Typeahead","Badged","Sprites","Separator"];export{c as Badged,o as Default,p as Separator,l as Sprites,d as Typeahead,Oe as __namedExportsOrder,Ve as default};
