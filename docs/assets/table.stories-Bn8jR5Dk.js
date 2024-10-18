import{b as N}from"./utils-DWCsNc5l.js";import{t as F,r as I,b as O,d as R,p as B,e as q,g as be,c as j}from"./registry-CtNeIPU8.js";import{_ as Se}from"./index-C-RTu_gc.js";import{_ as m}from"./render-tag-mtfFSHEK.js";import{_ as U}from"./dynamic-tag-HMZVE1pc.js";import{_ as g}from"./of-fallback-C2gEBeKK.js";import{_ as ge}from"./index-BpeRn_HR.js";import{i as k,r as l}from"./attr-tag-DphMQldM.js";import{_ as re}from"./index-DkX_5R08.js";import{_ as fe}from"./empty-component-BCB5DEsP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";/* empty css              */import"./index-DcQ8Yt9o.js";import"./index-B6qYX52F.js";/* empty css             */import"./index-DDW0Exv-.js";class we extends Marko.Component{onCreate(){this.state={selected:{},allSelected:"false"}}onInput(r){this.state.selected=this.getSelectedRowStateFromInput(r),this.state.allSelected=this.getAllSelectedState(r)}getSelectedRowStateFromInput(r){const n={};if(r.row)for(const[t,i]of Object.entries([...r.row])){const y=i.name||t;n[y]=i.selected||!1}return n}getAllSelectedState(r){if(r.allSelected)return r.allSelected;let n=0,t=0;for(const[i,y]of Object.entries(this.state.selected))y&&n++,t++;return n===0?"false":n===t?"true":"mixed"}headerSelect(){const{allSelected:r}=this.state;this.state.selected=[...this.input.row||[]].reduce((n,{name:t},i)=>(n[t||i]=r!=="true",n),{}),this.state.allSelected=r!=="true"?"true":"false",this.emit("select",{selected:this.state.selected,allSelected:this.state.allSelected})}rowSelect(r,{checked:n}){this.state.selected[r]=n,this.setStateDirty("selected"),this.state.allSelected=this.getAllSelectedState(this.input),this.emit("select",{selected:this.state.selected})}}const Q="qF$tvxK",c=F(Q);var Be=["compact","relaxed"];I.r(Q,()=>c);const le=we;c._=O(function(d,r,n,t,i,y){const{class:p,density:e,header:o,row:a,allSelected:f,a11ySelectAllText:s,a11ySelectRowText:x,mode:A="none",...oe}=d;r.be("div",R(B(oe),{class:q(["table",A==="selection"&&"table--mode-selection",e&&Be.includes(e)&&`table--density-${e}`,p]),role:"group",tabindex:"0"}),"0",t,null,4),r.be("table",null,"1",t,null,0),r.be("thead",null,"2",t,null,0),r.be("tr",null,"3",t,null,0);{A==="selection"&&(r.be("th",{class:"table__cell"},"4",t,null,1),m(Se,{ariaLabel:s??"Select all rows",checked:i.allSelected},r,n,"5",[["change","headerSelect",!1]]),r.ee());let C=0;for(const E of g(o)){const b=`[${C++}]`,{columnType:u="normal",class:S,renderBody:w,...D}=E;r.be("th",R(B(D),{class:q(["table__cell",u==="numeric"&&"table__cell--numeric",S])}),"6"+b,t,null,4),U(r,w,null,null,null,null,n,"7"+b),r.ee()}}r.ee(),r.ee(),r.be("tbody",null,"8",t,null,0);{let C=0;for(const E of g(a||[])){let b=C++;const u=`[${b}]`,{cell:S,name:w=b,selected:D,...ce}=E;r.be("tr",be(B(ce)),"9"+u,t,null,4);{A==="selection"&&(r.be("th",{scope:"row",class:"table__cell"},"10"+u,t,null,0),m(ge,{ariaLabel:x??"Select row",checked:i.selected[w]},r,n,"11"+u,[["change","rowSelect",!1,[w]]]),r.ee());let de=0;for(const P of g(o)){let K=de++;const L=`[${K+u}]`,G=Array.isArray(S)?S[K]:S;if(G){const{class:ye,renderBody:ue,...me}=G,he=["table__cell",P.columnType==="numeric"&&"table__cell--numeric"],pe=P.columnType==="row-header"?"th":"td";r.be(pe,R(B(me),{scope:P.columnType==="row-header"?"row":void 0,class:q([he,ye])}),"12"+L,t,null,4),U(r,ue,null,null,null,null,n,"13"+L),r.ee()}}}r.ee()}}r.ee(),r.ee(),r.ee()},{t:Q},le);c.Component=j(le,c._);const $e=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`,ae=[{seller:"Nintendo",item:{title:"Nintendo Switch Brand New Gaming System with Four Controllers",subtitle:"SKU : A43BTR5678 • Quantity : 1",image:{url:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg",alt:"Nintendo Switch"}},status:"Ready to Ship",statusType:"recent",listPrice:"$287.96",quantityAvailable:"300",orders:{number:"00-10542-89507",quantity:100},watchers:"95",protection:"$17.99",shipping:"FREE",delivery:"4/1 - 4/5"},{seller:"Nintendo",item:{title:"Nintendo SNES Brand New Gaming System with Four Controllers",subtitle:"SKU : A43BTR5678 • Quantity : 1",image:{url:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg",alt:"Nintendo Switch"}},status:"Ready to Ship",statusType:"recent",listPrice:"$89.85",quantityAvailable:"45",orders:{number:"00-10542-89507",quantity:200},watchers:"5",protection:"$18.95",shipping:"FREE",delivery:"4/11 - 4/15"},{seller:"Microsoft",item:{title:"Microsoft XBOX 360 Brand New Gaming System with Four Controllers",subtitle:"SKU : A43BTR5678 • Quantity : 1",image:{url:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg",alt:"Microsoft XBOX"}},status:"Backorder",statusType:"time-sensitive",listPrice:"$499.99",quantityAvailable:"345",orders:{number:"00-10542-89507",quantity:100},watchers:"205",protection:"$17.99",shipping:"FREE",delivery:"4/17 - 4/25"},{seller:"Microsoft",item:{title:"Microsoft XBOX One Brand New Gaming System with Four Controllers",subtitle:"SKU : A43BTR5678 • Quantity : 1",image:{url:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg",alt:"Microsoft XBOX"}},status:"Preparing",statusType:"neutral",listPrice:"$499.99",quantityAvailable:"399",orders:{number:"00-10542-89507",quantity:100},watchers:"305",protection:"$27.99",shipping:"FREE",delivery:"4/9 - 4/11"},{seller:"Sony",item:{title:"Sony Playstation 5 Brand New Gaming System with Four Controllers",subtitle:"SKU : A43BTR5678 • Quantity : 1",image:{url:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg",alt:"Sony Playstation 5"}},status:"Restocking",statusType:"trustworthy",listPrice:"$519.99",quantityAvailable:"205",orders:{number:"00-10542-89507",quantity:100},watchers:"199",protection:"$29.99",shipping:"FREE",delivery:"4/11 - 4/15"}],M="wRvjOXYk",h=F(M);I.r(M,()=>h);const se={};h._=O(function(d,r,n,t,i,y){m(c,k(()=>{l("header",{columnType:"row-header",renderBody:e=>{e.t("Seller",t)}}),l("header",{renderBody:e=>{e.t("Item",t)}}),l("header",{renderBody:e=>{e.t("Status",t)}}),l("header",{columnType:"numeric",renderBody:e=>{e.t("List Price",t)}}),l("header",{columnType:"numeric",renderBody:e=>{e.t("Quantity Available",t)}}),l("header",{renderBody:e=>{e.t("Orders",t)}}),l("header",{columnType:"numeric",renderBody:e=>{e.t("Watchers",t)}}),l("header",{columnType:"numeric",renderBody:e=>{e.t("Protection",t)}}),l("header",{renderBody:e=>{e.t("Shipping",t)}}),l("header",{renderBody:e=>{e.t("Delivery",t)}});let p=0;for(const e of g(ae)){const o=`[${p++}]`;l("row",k(()=>{l("cell",{renderBody:a=>{a.t(e.seller,t)}}),l("cell",{renderBody:a=>{a.t(e.item.title,t)}}),l("cell",{renderBody:a=>{m(re,{status:e.statusType,renderBody:f=>{f.t(e.status,t)}},a,n,"1"+o)}}),l("cell",{renderBody:a=>{a.t(e.listPrice,t)}}),l("cell",{renderBody:a=>{a.t(e.quantityAvailable,t)}}),l("cell",{renderBody:a=>{a.be("a",{href:"https://ebay.com"},"2"+o,t,null,0),a.t(e.orders.number,t),a.ee()}}),l("cell",{renderBody:a=>{a.t(e.watchers,t)}}),l("cell",{renderBody:a=>{a.t(e.protection,t)}}),l("cell",{renderBody:a=>{a.t(e.shipping,t)}}),l("cell",{renderBody:a=>{a.t(e.delivery,t)}})}))}},{...d,header:void 0,row:void 0}),r,n,"0")},{t:M,i:!0},se);h.Component=j(se,h._);const ne=`import data from "./data.json";

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
`,X="QEohpsP",_=F(X);I.r(X,()=>fe);const ie={};_._=O(function(d,r,n,t,i,y){m(c,k(()=>{l("header",{columnType:"row-header",renderBody:e=>{e.t("Seller",t)}}),l("header",{renderBody:e=>{e.t("Item",t)}}),l("header",{renderBody:e=>{e.t("Status",t)}}),l("header",{columnType:"numeric",renderBody:e=>{e.t("List Price",t)}}),l("header",{columnType:"numeric",renderBody:e=>{e.t("Quantity Available",t)}}),l("header",{renderBody:e=>{e.t("Orders",t)}}),l("header",{columnType:"numeric",renderBody:e=>{e.t("Watchers",t)}}),l("header",{columnType:"numeric",renderBody:e=>{e.t("Protection",t)}}),l("header",{renderBody:e=>{e.t("Shipping",t)}}),l("header",{renderBody:e=>{e.t("Delivery",t)}});let p=0;for(const e of g(ae)){let o=p++;const a=`[${o}]`,f=o===0;l("row",k(()=>{l("cell",{renderBody:s=>{s.t(e.seller,t)}}),l("cell",{renderBody:s=>{s.t(e.item.title,t)}}),l("cell",{renderBody:s=>{m(re,{status:e.statusType,renderBody:x=>{x.t(e.status,t)}},s,n,"1"+a)}}),l("cell",{renderBody:s=>{s.t(e.listPrice,t)}}),l("cell",{renderBody:s=>{s.t(e.quantityAvailable,t)}}),l("cell",{renderBody:s=>{s.be("a",{href:"https://ebay.com"},"2"+a,t,null,0),s.t(e.orders.number,t),s.ee()}}),l("cell",{renderBody:s=>{s.t(e.watchers,t)}}),l("cell",{renderBody:s=>{s.t(e.protection,t)}}),l("cell",{renderBody:s=>{s.t(e.shipping,t)}}),l("cell",{renderBody:s=>{s.t(e.delivery,t)}})},{name:`row_${o}`,selected:f}))}},{mode:"selection",...d,header:void 0,row:void 0}),r,n,"0",[["select","emit",!1,["select"]]])},{t:X,s:!0},ie);_.Component=j(ie,_._);const Te=`import data from "./data.json";

<ebay-table mode="selection" on-select("emit", "select") ...input>
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
    <for|r, i| of=data>
        <!-- first row selected by default -->
        $ const selected = i === 0;
        <@row name=\`row_\${i}\` selected=selected>
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
`,Xe={title:"data-display/table",component:c,parameters:{docs:{description:{component:$e}}},argTypes:{density:{control:{type:"select"},description:"table density",options:["compact","relaxed","none"]},mode:{control:{type:"select"},description:"table mode",options:["selection","none"]},allSelected:{control:{type:"select"},description:"Select all tri-state checkbox state",options:["true","false","mixed"]},header:{name:"@header",description:"header attribute tags",table:{category:"@attribute tags"}},row:{name:"@row",description:"row attribute tags",table:{category:"@attribute tags"}},columnType:{name:"column-type",control:{type:"select"},options:["normal","numeric","row-header"],table:{category:"@header attribute tags"}},selected:{name:"selected",control:{type:"boolean"},table:{category:"@header attribute tags"}},cell:{controls:{hideNoControlsWarning:!0},name:"@cell",description:"cell attribute tags",table:{category:"@row attribute tags"}},onSelect:{action:"on-select",description:"Triggered on selection",table:{category:"Events",defaultValue:{summary:"{ selected, allSelected }"}}}}},$=N(h,ne),T=N(h,ne,{density:"compact"}),v=N(_,Te,{a11ySelectAllText:"Select all",a11ySelectRowText:"Select row"});var W,V,z;$.parameters={...$.parameters,docs:{...(W=$.parameters)==null?void 0:W.docs,source:{originalSource:"buildExtensionTemplate(defaultTemplate, defaultCode)",...(z=(V=$.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var H,Y,J;T.parameters={...T.parameters,docs:{...(H=T.parameters)==null?void 0:H.docs,source:{originalSource:`buildExtensionTemplate(defaultTemplate, defaultCode, {
  density: "compact"
})`,...(J=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var Z,ee,te;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`buildExtensionTemplate(selectionTemplate, selectionCode, {
  a11ySelectAllText: "Select all",
  a11ySelectRowText: "Select row"
})`,...(te=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const De=["Default","TableDensity","SelectionModeBasic"];export{$ as Default,v as SelectionModeBasic,T as TableDensity,De as __namedExportsOrder,Xe as default};
