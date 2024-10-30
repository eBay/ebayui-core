import{t as h,r as f,b as $,d as E,f as W,e as H,p as k,c as S}from"./registry-CyswyZw5.js";import{_ as I}from"./dynamic-tag-CXXozR29.js";import{_ as de}from"./of-fallback-C2gEBeKK.js";import{_ as Y,a as Z,b as M,c as pe}from"./index-CKAnA3jr.js";import{_ as r}from"./render-tag-CLyPs9qZ.js";import{i as s,r as i,a as o}from"./attr-tag-DphMQldM.js";import{_ as ue}from"./index-E3zKQBpO.js";import{_ as ge}from"./index-CtOZtJYO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-Bq4u441m.js";/* empty css             */import"./const-element-B9h58Dwq.js";const be=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-list
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.2.0
    </span>
</h1>

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/building-blocks-ebay-list)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/building-blocks-ebay-list)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-list/examples)
`;class ye extends Marko.Component{}const O="coHxQMOk",d=h(O);f.r(O,()=>ye);const D={};d._=$(function(l,n,t,a,w,C){const{class:e,style:ne,items:ie,...re}=l;n.be("div",E({style:W(ne),class:H(["list",e])},k(re)),"0",a,null,4),n.be("ul",null,"1",a,null,0);{let se=0;for(const A of de(ie)){let G=se++;const m=`[${G}]`,{class:le,style:oe,as:J,separator:me,leading:B,trailing:T,...ce}=A;me?n.e("hr",null,"2"+m,a,0,0):(n.be("li",null,"3"+m,a,null,0),I(n,J||"div",()=>({class:["list__body",le],style:oe,...k(ce)}),c=>{if(B){const{class:v,leadingStyle:x,...L}=B;c.be("div",E({class:H(["list__leading",v]),style:W(x)},k(L)),"5"+m,a,null,4),I(c,B,null,null,null,null,t,"6"+m),c.ee()}if(c.be("div",{class:"list__body"},"7"+m,a,null,1),I(c,A,null,null,null,null,t,"8"+m),c.ee(),T){const{class:v,trailingStyle:x,...L}=T;c.be("div",E({class:H(["list__trailing",v]),style:W(x)},k(L)),"9"+m,a,null,4),I(c,T,null,null,null,null,t,"10"+m),c.ee()}},null,null,t,"4"+m,[["click",J==="button"&&"emit",!1,["button-click",{index:G}]]]),n.ee())}}n.ee(),n.ee()},{t:O,s:!0},D);d.Component=S(D,d._);const Q="mnfLLGQ",b=h(Q);f.r(Q,()=>b);const ee={};b._=$(function(l,n,t,a,w,C){r(d,s(()=>{i("items",s(()=>(o("leading",{renderBody:e=>{r(Y,{},e,t,"1")}}),e=>{e.t("Item 1",a)}))),i("items",s(()=>(o("leading",{renderBody:e=>{r(Z,{},e,t,"2")}}),e=>{e.t("Item 2",a)}))),i("items",s(()=>(o("leading",{renderBody:e=>{r(M,{},e,t,"3")}}),e=>{e.t("Item 3",a)})))}),n,t,"0")},{t:Q,i:!0},ee);b.Component=S(ee,b._);const _e=`<ebay-list>
    <@item>
        <@leading>
            <ebay-folder-16-icon/>
        </@leading>
        Item 1
    </@item>
    <@item>
        <@leading>
            <ebay-lamp-16-icon/>
        </@leading>
        Item 2
    </@item>
    <@item>
        <@leading>
            <ebay-file-16-icon/>
        </@leading>
        Item 3
    </@item>
</ebay-list>
`,j="uuIDPkSi",y=h(j);f.r(j,()=>y);const te={};y._=$(function(l,n,t,a,w,C){r(d,s(()=>{i("items",{as:"button",renderBody:e=>{e.t("Item 1",a)}}),i("items",s(()=>(o("trailing",{renderBody:e=>{r(ue,{},e,t,"1")}}),e=>{e.t("Item 2",a)}),{as:"a",href:"https://www.ebay.com"})),i("items",s(()=>(o("trailing",{renderBody:e=>{r(ge,{ariaLabelledby:t.elId("switch-item")},e,t,"2")}}),e=>{e.t("Item 3",a)}),{id:t.elId("switch-item")}))}),n,t,"0",[["button-click","emit",!1,["button-click"]]])},{t:j},te);y.Component=S(te,y._);const ke=`class {}
<ebay-list on-button-click("emit", "button-click")>
    <@item as="button">
        Item 1
    </@item>
    <@item as="a" href="https://www.ebay.com">
        Item 2
        <@trailing>
            <ebay-chevron-right-16-icon/>
        </@trailing>
    </@item>
    <@item id:scoped="switch-item">
        Item 3
        <@trailing>
            <ebay-switch aria-labelledby:scoped="switch-item"/>
        </@trailing>
    </@item>
</ebay-list>
`,z="cWLJCgri",_=h(z);f.r(z,()=>_);const ae={};_._=$(function(l,n,t,a,w,C){r(d,s(()=>{i("items",s(()=>(o("leading",{renderBody:e=>{r(Y,{},e,t,"1")}}),e=>{e.t("Item 1",a)}))),i("items",{separator:!0}),i("items",s(()=>(o("leading",{renderBody:e=>{r(Z,{},e,t,"2")}}),e=>{e.t("Item 2",a)}))),i("items",s(()=>(o("leading",{renderBody:e=>{r(M,{},e,t,"3")}}),e=>{e.t("Item 3",a)}))),i("items",s(()=>(o("leading",{renderBody:e=>{r(M,{},e,t,"4")}}),e=>{e.t("Item 4",a)}))),i("items",{separator:!0}),i("items",s(()=>(o("leading",{renderBody:e=>{r(pe,{},e,t,"5")}}),e=>{e.t("Item 5",a)})))}),n,t,"0")},{t:z,i:!0},ae);_.Component=S(ae,_._);const Ie=`<ebay-list>
    <@item>
        <@leading>
            <ebay-folder-16-icon/>
        </@leading>
        Item 1
    </@item>
    <@item separator/>
    <@item>
        <@leading>
            <ebay-lamp-16-icon/>
        </@leading>
        Item 2
    </@item>
    <@item>
        <@leading>
            <ebay-file-16-icon/>
        </@leading>
        Item 3
    </@item>
    <@item>
        <@leading>
            <ebay-file-16-icon/>
        </@leading>
        Item 4
    </@item>
    <@item separator/>
    <@item>
        <@leading>
            <ebay-lightbulb-16-icon/>
        </@leading>
        Item 5
    </@item>
</ebay-list>
`,He={title:"building blocks/ebay list",component:d,parameters:{docs:{description:{component:be}}},argTypes:{item:{name:"@item",description:"Item to render in the list",table:{category:"@attribute tags"}},as:{name:"as",description:"Element to render the item as",table:{category:"@item attributes"}},leading:{name:"@leading",description:"Leading content to render in the list item",table:{category:"@item attributes"}},trailing:{name:"@trailing",description:"Trailing content to render in the list item",table:{category:"@item attributes"}},separator:{name:"separator",description:"If true, will render the current item as a separator",table:{category:"@item attributes"}},"onButton-click":{action:"on-button-click",description:"Triggered on item click when the item is renderd as a button",table:{category:"Events",defaultValue:{summary:"{ index }"}}}}},p=l=>({input:l,component:b});p.args={};p.parameters={docs:{source:{code:_e}}};const u=l=>({input:l,component:y});u.args={};u.parameters={docs:{source:{code:ke}}};const g=l=>({input:l,component:_});g.args={};g.parameters={docs:{source:{code:Ie}}};var P,R,V;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
  input: args,
  component: StaticTemplate
})`,...(V=(R=p.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var q,F,K;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
  input: args,
  component: InteractiveTemplate
})`,...(K=(F=u.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var N,U,X;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
  input: args,
  component: WithSeparatorTemplate
})`,...(X=(U=g.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const Me=["Static","Interactive","WithSeparator"];export{u as Interactive,p as Static,g as WithSeparator,Me as __namedExportsOrder,He as default};
