import{b as T}from"./utils-DWCsNc5l.js";import{t as U,r as V,b as W,d as _,p as u,e as $,g as le,c as L}from"./registry-CtNeIPU8.js";import{_ as P}from"./dynamic-tag-HMZVE1pc.js";import{_ as g}from"./of-fallback-C2gEBeKK.js";import{i as q,r as a}from"./attr-tag-DphMQldM.js";import{_ as ne}from"./index-DkX_5R08.js";import{_ as F}from"./render-tag-mtfFSHEK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";class se extends Marko.Component{}const x="qF$tvxK",s=U(x);var ie=["compact","relaxed"];V.r(x,()=>s);const z=se;s._=W(function(y,l,i,t,Y,J){const{class:f,density:e,header:o,row:r,...B}=y;l.be("div",_(u(B),{class:$(["table",e&&ie.includes(e)&&`table--density-${e}`,f]),role:"group",tabindex:"0"}),"0",t,null,4),l.be("table",null,"1",t,null,0),l.be("thead",null,"2",t,null,0),l.be("tr",null,"3",t,null,0);{let w=0;for(const S of g(o)){const c=`[${w++}]`,{columnType:d="normal",class:k,renderBody:v,...m}=S;l.be("th",_(u(m),{class:$(["table__cell",d==="numeric"&&"table__cell--numeric",k])}),"4"+c,t,null,4),P(l,v,null,null,null,null,i,"5"+c),l.ee()}}l.ee(),l.ee(),l.be("tbody",null,"6",t,null,0);{let w=0;for(const S of g(r||[])){const c=`[${w++}]`,{cell:d,...k}=S;l.be("tr",le(u(k)),"7"+c,t,null,4);{let v=0;for(const m of g(o)){let A=v++;const R=`[${A+c}]`,N=Array.isArray(d)?d[A]:d;if(N){const{class:Z,renderBody:ee,...te}=N,re=["table__cell",m.columnType==="numeric"&&"table__cell--numeric"],ae=m.columnType==="row-header"?"th":"td";l.be(ae,_(u(te),{class:$([re,Z])}),"8"+R,t,null,4),P(l,ee,null,null,null,null,i,"9"+R),l.ee()}}}l.ee()}}l.ee(),l.ee(),l.ee()},{t:x},z);s.Component=L(z,s._);const oe=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-table
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.1.0
    </span>
</h1>

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/data-display-table)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/data-display-table)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-table/examples)
`,ce=[{seller:"Nintendo",item:{title:"Nintendo Switch Brand New Gaming System with Four Controllers",subtitle:"SKU : A43BTR5678 • Quantity : 1",image:{url:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg",alt:"Nintendo Switch"}},status:"Ready to Ship",statusType:"recent",listPrice:"$287.96",quantityAvailable:"300",orders:{number:"00-10542-89507",quantity:100},watchers:"95",protection:"$17.99",shipping:"FREE",delivery:"4/1 - 4/5"},{seller:"Nintendo",item:{title:"Nintendo SNES Brand New Gaming System with Four Controllers",subtitle:"SKU : A43BTR5678 • Quantity : 1",image:{url:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg",alt:"Nintendo Switch"}},status:"Ready to Ship",statusType:"recent",listPrice:"$89.85",quantityAvailable:"45",orders:{number:"00-10542-89507",quantity:200},watchers:"5",protection:"$18.95",shipping:"FREE",delivery:"4/11 - 4/15"},{seller:"Microsoft",item:{title:"Microsoft XBOX 360 Brand New Gaming System with Four Controllers",subtitle:"SKU : A43BTR5678 • Quantity : 1",image:{url:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg",alt:"Microsoft XBOX"}},status:"Backorder",statusType:"time-sensitive",listPrice:"$499.99",quantityAvailable:"345",orders:{number:"00-10542-89507",quantity:100},watchers:"205",protection:"$17.99",shipping:"FREE",delivery:"4/17 - 4/25"},{seller:"Microsoft",item:{title:"Microsoft XBOX One Brand New Gaming System with Four Controllers",subtitle:"SKU : A43BTR5678 • Quantity : 1",image:{url:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg",alt:"Microsoft XBOX"}},status:"Preparing",statusType:"neutral",listPrice:"$499.99",quantityAvailable:"399",orders:{number:"00-10542-89507",quantity:100},watchers:"305",protection:"$27.99",shipping:"FREE",delivery:"4/9 - 4/11"},{seller:"Sony",item:{title:"Sony Playstation 5 Brand New Gaming System with Four Controllers",subtitle:"SKU : A43BTR5678 • Quantity : 1",image:{url:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg",alt:"Sony Playstation 5"}},status:"Restocking",statusType:"trustworthy",listPrice:"$519.99",quantityAvailable:"205",orders:{number:"00-10542-89507",quantity:100},watchers:"199",protection:"$29.99",shipping:"FREE",delivery:"4/11 - 4/15"}],C="wRvjOXYk",n=U(C);V.r(C,()=>n);const H={};n._=W(function(y,l,i,t,Y,J){F(s,q(()=>{a("header",{columnType:"row-header",renderBody:e=>{e.t("Seller",t)}}),a("header",{renderBody:e=>{e.t("Item",t)}}),a("header",{renderBody:e=>{e.t("Status",t)}}),a("header",{columnType:"numeric",renderBody:e=>{e.t("List Price",t)}}),a("header",{columnType:"numeric",renderBody:e=>{e.t("Quantity Available",t)}}),a("header",{renderBody:e=>{e.t("Orders",t)}}),a("header",{columnType:"numeric",renderBody:e=>{e.t("Watchers",t)}}),a("header",{columnType:"numeric",renderBody:e=>{e.t("Protection",t)}}),a("header",{renderBody:e=>{e.t("Shipping",t)}}),a("header",{renderBody:e=>{e.t("Delivery",t)}});let f=0;for(const e of g(ce)){const o=`[${f++}]`;a("row",q(()=>{a("cell",{renderBody:r=>{r.t(e.seller,t)}}),a("cell",{renderBody:r=>{r.t(e.item.title,t)}}),a("cell",{renderBody:r=>{F(ne,{status:e.statusType,renderBody:B=>{B.t(e.status,t)}},r,i,"1"+o)}}),a("cell",{renderBody:r=>{r.t(e.listPrice,t)}}),a("cell",{renderBody:r=>{r.t(e.quantityAvailable,t)}}),a("cell",{renderBody:r=>{r.be("a",{href:"https://ebay.com"},"2"+o,t,null,0),r.t(e.orders.number,t),r.ee()}}),a("cell",{renderBody:r=>{r.t(e.watchers,t)}}),a("cell",{renderBody:r=>{r.t(e.protection,t)}}),a("cell",{renderBody:r=>{r.t(e.shipping,t)}}),a("cell",{renderBody:r=>{r.t(e.delivery,t)}})}))}},{...y,header:void 0,row:void 0}),l,i,"0")},{t:C,i:!0},H);n.Component=L(H,n._);const E=`import data from "./data.json";

<ebay-table ...input>
    <@header column-type="row-header">
        Seller
    </@header>
    <@header>Item</@header>
    <@header>Status</@header>
    <@header column-type="numeric">
        List Price
    </@header>
    <@header column-type="numeric">
        Quantity Available
    </@header>
    <@header>Orders</@header>
    <@header column-type="numeric">
        Watchers
    </@header>
    <@header column-type="numeric">
        Protection
    </@header>
    <@header>Shipping</@header>
    <@header>Delivery</@header>
    <for|r| of=data>
        <@row>
            <@cell>\${r.seller}</@cell>
            <@cell>\${r.item.title}</@cell>
            <@cell>
                <ebay-signal status=r.statusType as any>
                    \${r.status}
                </ebay-signal>
            </@cell>
            <@cell>\${r.listPrice}</@cell>
            <@cell>\${r.quantityAvailable}</@cell>
            <@cell>
                <a href="https://ebay.com">
                    \${r.orders.number}
                </a>
            </@cell>
            <@cell>\${r.watchers}</@cell>
            <@cell>\${r.protection}</@cell>
            <@cell>\${r.shipping}</@cell>
            <@cell>\${r.delivery}</@cell>
        </@row>
    </for>
</ebay-table>
`,Be={title:"data-display/table",component:s,parameters:{docs:{description:{component:oe}}},argTypes:{density:{control:{type:"select"},description:"table density",options:["compact","relaxed","none"]},header:{name:"@header",description:"header attribute tags",table:{category:"@attribute tags"}},row:{name:"@row",description:"row attribute tags",table:{category:"@attribute tags"}},columnType:{name:"column-type",control:{type:"select"},options:["normal","numeric","row-header"],table:{category:"@header attribute tags"}},cell:{controls:{hideNoControlsWarning:!0},name:"@cell",description:"cell attribute tags",table:{category:"@row attribute tags"}}}},p=T(n,E),h=T(n,E,{density:"compact"}),b=T(n,E,{density:"relaxed"});var O,X,j;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:"buildExtensionTemplate(defaultTemplate, defaultCode)",...(j=(X=p.parameters)==null?void 0:X.docs)==null?void 0:j.source}}};var D,M,Q;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`buildExtensionTemplate(defaultTemplate, defaultCode, {
  density: "compact"
})`,...(Q=(M=h.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var I,K,G;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`buildExtensionTemplate(defaultTemplate, defaultCode, {
  density: "relaxed"
})`,...(G=(K=b.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};const we=["Default","Dense","Relaxed"];export{p as Default,h as Dense,b as Relaxed,we as __namedExportsOrder,Be as default};
