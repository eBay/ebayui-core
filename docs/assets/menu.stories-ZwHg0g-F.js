import{b as k,a as F}from"./utils-NX-dnf4r.js";import{t as G}from"./index-iqhZMf16.js";import{C as u}from"./index-wCG8Mexi.js";import{r as f,b as S,d as x,t as _}from"./registry-zqrnEiYK.js";import{_ as n}from"./self-iterator-6yU_KG2T.js";import{_ as B}from"./render-tag-_0PNNh6Y.js";import{_ as i}from"./v-element-BABk39ab.js";/* empty css             */import"./dynamic-tag-4Gch17f1.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./index-4Ud0-PVY.js";import"./index-Zo2k51hY.js";import"./index-dCAZr4YS.js";/* empty css             */import"./index-sDZ0BqWo.js";import"./index-j_KV6Utw.js";import"./index-J8CKH9U9.js";import"./index-QGVtTfuc.js";import"./index-XjwwBzg5.js";import"./index-j-rYSiF3.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";const I=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,C="8RfdMvlx",d=_(C);f.r(C,()=>d);const U={};d._=S(function(o,r,s,t,w,T){const a=[];a.push({badgeNumber:1,renderBody:e=>{e.t("item 1 that has very long text",t)},[Symbol.iterator]:n}),a.push({badgeNumber:99,renderBody:e=>{e.t("item 2",t)},[Symbol.iterator]:n}),a.push({badgeNumber:10,renderBody:e=>{e.t("item 3",t)},[Symbol.iterator]:n}),B(u,{...o,items:a},r,s,"0",[["keydown","emit",!1,["keydown"]],["change","emit",!1,["change"]],["select","emit",!1,["select"]]])},{t:C,i:!0},U);d.Component=x(U,d._);const P=`<ebay-menu
    ...input
    on-keydown('emit', 'keydown')
    on-change('emit', 'change')
    on-select('emit', 'select')
>
    <@item badgeNumber=1>item 1 that has very long text</@item>
    <@item badgeNumber=99>item 2</@item>
    <@item badgeNumber=10>item 3</@item>
</ebay-menu>
`,v="QsUVfuH8",l=_(v),Z=i("style",null,"0",null,1,0).t(`
    span.sprite-flag {
        background-image: url('https://ir.ebaystatic.com/pictures/aw/pics/cmp/ds3/sprds3_21.png');
        background-repeat: none;
        display: inline-block;
        height: 20px;
        margin-right: 8px;
        vertical-align: middle;
        width: 26px;
    }
`),ee=i("span",{style:"background-position: 0 -25px",class:"sprite-flag"},"2",null,0,1),te=i("span",null,"3",null,1,0).t("Austria"),ae=i("span",{style:"background-position: 0 -100px",class:"sprite-flag"},"4",null,0,1),ne=i("span",null,"5",null,1,0).t("Denmark"),re=i("span",{style:"background-position: 0 -275px",class:"sprite-flag"},"6",null,0,1),oe=i("span",null,"7",null,1,0).t("Norway");f.r(v,()=>l);const X={};l._=S(function(o,r,s,t,w,T){r.n(Z,t);const a=[];a.push({renderBody:e=>{e.n(ee,t),e.n(te,t)},[Symbol.iterator]:n}),a.push({renderBody:e=>{e.n(ae,t),e.n(ne,t)},[Symbol.iterator]:n}),a.push({renderBody:e=>{e.n(re,t),e.n(oe,t)},[Symbol.iterator]:n}),B(u,{text:"Country",...o,items:a},r,s,"1",[["keydown","emit",!1,["keydown"]],["change","emit",!1,["change"]],["select","emit",!1,["select"]]])},{t:v,i:!0},X);l.Component=x(X,l._);const ie=`<style>
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
`,$="BlAT2rHi",c=_($),se=i("h3",null,"0",null,1,0).t("Click inside the menu, then type a name to see focus change. The search will see if any names start with the input, then if there are no matches it will search for the input string anywhere in the names."),me=i("h4",null,"1",null,1,0).t("Wait 2 seconds for the typeahead to reset and then try typing again to reset the search.");f.r($,()=>c);const Y={};c._=S(function(o,r,s,t,w,T){r.n(se,t),r.n(me,t);const a=[];a.push({renderBody:e=>{e.t("Albania",t)},[Symbol.iterator]:n}),a.push({renderBody:e=>{e.t("Alcania",t)},[Symbol.iterator]:n}),a.push({renderBody:e=>{e.t("Alcdnia",t)},[Symbol.iterator]:n}),a.push({renderBody:e=>{e.t("Austen",t)},[Symbol.iterator]:n}),a.push({renderBody:e=>{e.t("Austin",t)},[Symbol.iterator]:n}),a.push({renderBody:e=>{e.t("Jack",t)},[Symbol.iterator]:n}),a.push({renderBody:e=>{e.t("Jackman",t)},[Symbol.iterator]:n}),a.push({renderBody:e=>{e.t("Jackson",t)},[Symbol.iterator]:n}),a.push({renderBody:e=>{e.t("Jasper",t)},[Symbol.iterator]:n}),a.push({renderBody:e=>{e.t("Julia",t)},[Symbol.iterator]:n}),a.push({renderBody:e=>{e.t("Julio",t)},[Symbol.iterator]:n}),a.push({renderBody:e=>{e.t("Julius",t)},[Symbol.iterator]:n}),a.push({renderBody:e=>{e.t("Luca",t)},[Symbol.iterator]:n}),a.push({renderBody:e=>{e.t("Lucais",t)},[Symbol.iterator]:n}),a.push({renderBody:e=>{e.t("Lucan",t)},[Symbol.iterator]:n}),a.push({renderBody:e=>{e.t("Lucian",t)},[Symbol.iterator]:n}),a.push({renderBody:e=>{e.t("Lucius",t)},[Symbol.iterator]:n}),B(u,{text:"Button",...o,items:a},r,s,"2",[["keydown","emit",!1,["keydown"]],["change","emit",!1,["change"]],["select","emit",!1,["select"]]])},{t:$,i:!0},Y);c.Component=x(Y,c._);const de=`<h3>
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
`,A="XmcNkHwp",p=_(A);f.r(A,()=>p);const q={};p._=S(function(o,r,s,t,w,T){const a=[];a.push({renderBody:e=>{e.t("item 1 that has very long text",t)},[Symbol.iterator]:n}),a.push({renderBody:e=>{e.t("item 2",t)},[Symbol.iterator]:n}),a.push({separator:!0,[Symbol.iterator]:n}),a.push({renderBody:e=>{e.t("item 3",t)},[Symbol.iterator]:n}),a.push({renderBody:e=>{e.t("item 4",t)},[Symbol.iterator]:n}),a.push({renderBody:e=>{e.t("item 5",t)},[Symbol.iterator]:n}),B(u,{...o,items:a},r,s,"0",[["keydown","emit",!1,["keydown"]],["change","emit",!1,["change"]],["select","emit",!1,["select"]]])},{t:A,i:!0},q);p.Component=x(q,p._);const le=`<ebay-menu
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
`,ce=o=>({input:F(o)}),Ne={title:"building blocks/ebay-menu",component:u,parameters:{docs:{description:{component:I}}},argTypes:{type:{control:{type:"text"},description:'Can be "radio" / "checkbox"'},priority:{control:{type:"select"},options:["primary","secondary","none"],description:'button priority, "primary" / "secondary" (default) / "none"'},checked:{description:"will set the corresponding index item to `checked` state and use the `aria-checked` attribute in markup"},item:{name:"@item",table:{category:"@attribute tags"}},value:{control:{type:"text"},table:{category:"@item attributes"},description:"the value to use with event responses for for the `checked` array"},badgeNumber:{control:{type:"text"},table:{category:"@item attributes"},description:"used as the number to be placed in the badge"},badgeAriaLabel:{control:{type:"text"},table:{category:"@item attributes"},description:"Yes (only if badge number is provided) | passed as the `aria-label` directly to the badge"},onKeydown:{action:"on-keydown",description:"Triggered on keydown",table:{category:"Events",defaultValue:{summary:"{ el, index, checked }"}}},onChange:{action:"on-change",description:"Triggered on item checked change, (checkbox/radio type only)",table:{category:"Events",defaultValue:{summary:"radio: { el, index, checked } | checkbox: { el, [indexes], [checked] }"}}},onSelect:{action:"on-select",description:"Triggered on item clicked (non radio/checkbox)",table:{category:"Events",defaultValue:{summary:"{ el, index, checked }"}}}}},m=ce.bind({});m.args={items:[{renderBody:"item 1 that has very long text"},{renderBody:"item 2"},{renderBody:"item 3"}]};m.parameters={docs:{source:{code:G("ebay-menu",m.args,{items:"item"})}}};const y=k(c,de),h=k(d,P),b=k(l,ie),g=k(p,le);var J,E,L;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(L=(E=m.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var N,D,R;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:"buildExtensionTemplate(TypeaheadTemplate, TypeaheadTemplateCode)",...(R=(D=y.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var V,H,W;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:"buildExtensionTemplate(BadgedTemplate, BadgedTemplateCode)",...(W=(H=h.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var j,z,K;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:"buildExtensionTemplate(SpritesTemplate, SpritesTemplateCode)",...(K=(z=b.parameters)==null?void 0:z.docs)==null?void 0:K.source}}};var M,O,Q;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:"buildExtensionTemplate(SeparatorTemplate, SeparatorTemplateCode)",...(Q=(O=g.parameters)==null?void 0:O.docs)==null?void 0:Q.source}}};const De=["Default","Typeahead","Badged","Sprites","Separator"];export{h as Badged,m as Default,g as Separator,b as Sprites,y as Typeahead,De as __namedExportsOrder,Ne as default};
