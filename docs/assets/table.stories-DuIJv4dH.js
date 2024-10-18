import{b as N}from"./utils-DWCsNc5l.js";import{t as R,r as _,b as I,d as L,p as k,e as W,g as Ae,c as O}from"./registry-CtNeIPU8.js";import{_ as Ce}from"./index-C-RTu_gc.js";import{_ as o}from"./render-tag-mtfFSHEK.js";import{_ as J}from"./dynamic-tag-HMZVE1pc.js";import{_ as w}from"./of-fallback-C2gEBeKK.js";import{_ as Pe}from"./index-BpeRn_HR.js";import{i as b,r}from"./attr-tag-DphMQldM.js";import{_ as me}from"./index-DkX_5R08.js";import{_ as Ee}from"./empty-component-BCB5DEsP.js";import{_ as Ne}from"./index-aKSyKb2n.js";import{_ as Re}from"./index-CDxNCN3N.js";import{_ as Z}from"./index-CGVSLK7z.js";import{_ as ee}from"./index-CX_T96nQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";/* empty css              */import"./index-DcQ8Yt9o.js";import"./index-B6qYX52F.js";/* empty css             */import"./index-DDW0Exv-.js";import"./index-htxwKVWG.js";import"./index-DfQ7uvCK.js";import"./index-CuJWBWTY.js";/* empty css                    *//* empty css               *//* empty css             */import"./index-BwvkvsZu.js";import"./index-CbT4wDAv.js";class _e extends Marko.Component{onCreate(){this.state={selected:{},allSelected:"false"}}onInput(a){this.state.selected=this.getSelectedRowStateFromInput(a),this.state.allSelected=this.getAllSelectedState(a)}getSelectedRowStateFromInput(a){const n={};if(a.row)for(const[t,d]of Object.entries([...a.row])){const u=d.name||t;n[u]=d.selected||!1}return n}getAllSelectedState(a){if(a.allSelected)return a.allSelected;let n=0,t=0;for(const[d,u]of Object.entries(this.state.selected))u&&n++,t++;return n===0?"false":n===t?"true":"mixed"}headerSelect(){const{allSelected:a}=this.state;this.state.selected=[...this.input.row||[]].reduce((n,{name:t},d)=>(n[t||d]=a!=="true",n),{}),this.state.allSelected=a!=="true"?"true":"false",this.emit("select",{selected:this.state.selected,allSelected:this.state.allSelected})}rowSelect(a,{checked:n}){this.state.selected[a]=n,this.setStateDirty("selected"),this.state.allSelected=this.getAllSelectedState(this.input),this.emit("select",{selected:this.state.selected})}}const U="qF$tvxK",h=R(U);var Ie=["compact","relaxed"],te=["numeric","icon-action"];_.r(U,()=>h);const pe=_e;h._=I(function(y,a,n,t,d,u){const{class:m,density:e,header:i,row:l,allSelected:c,a11ySelectAllText:s,a11ySelectRowText:q,mode:F="none",...Be}=y;a.be("div",L(k(Be),{class:W(["table",F==="selection"&&"table--mode-selection",e&&Ie.includes(e)&&`table--density-${e}`,m]),role:"group",tabindex:"0"}),"0",t,null,4),a.be("table",null,"1",t,null,0),a.be("thead",null,"2",t,null,0),a.be("tr",null,"3",t,null,0);{F==="selection"&&(a.be("th",{class:"table-cell"},"4",t,null,1),o(Ce,{ariaLabel:s??"Select all rows",checked:d.allSelected},a,n,"5",[["change","headerSelect",!1]]),a.ee());let j=0;for(const S of w(i)){const p=`[${j++}]`,{columnType:$="normal",class:T,renderBody:z,...Q}=S;a.be("th",L(k(Q),{class:W(["table-cell",S.columnType&&te.includes(S.columnType)&&`table-cell--${S.columnType}`,T])}),"6"+p,t,null,4),J(a,z,null,null,null,null,n,"7"+p),a.ee()}}a.ee(),a.ee(),a.be("tbody",null,"8",t,null,0);{let j=0;for(const S of w(l||[])){let X=j++;const p=`[${X}]`,{cell:$,name:T=X,selected:z,...Q}=S;a.be("tr",Ae(k(Q)),"9"+p,t,null,4);{F==="selection"&&(a.be("th",{scope:"row",class:"table__cell"},"10"+p,t,null,0),o(Pe,{ariaLabel:q??"Select row",checked:d.selected[T]},a,n,"11"+p,[["change","rowSelect",!1,[T]]]),a.ee());let fe=0;for(const B of w(i)){let H=fe++;const v=`[${H+p}]`,Y=Array.isArray($)?$[H]:$;if(Y){const{class:$e,renderBody:Te,...ve}=Y,ke=["table-cell",B.columnType&&te.includes(B.columnType)&&`table-cell--${B.columnType}`],xe=B.columnType==="row-header"?"th":"td";a.be(xe,L(k(ve),{class:W([ke,$e])}),"12"+v,t,null,4);{const M=B.columnType==="layout"&&"div";M?a.be(M,{class:"table-cell__layout"},"13"+v,t,null,1):a.bf(`f_${"13"+v}`,t),J(a,Te,null,null,null,null,n,"14"+v),M?a.ee():a.ef()}a.ee()}}}a.ee()}}a.ee(),a.ee(),a.ee()},{t:U},pe);h.Component=O(pe,h._);const Oe=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`,K=[{seller:"Nintendo",item:{title:"Nintendo Switch Brand New Gaming System with Four Controllers",subtitle:"SKU : A43BTR5678 • Quantity : 1",titleShort:"Switch",image:{url:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg",alt:"Nintendo Switch"}},status:"Ready to Ship",statusType:"recent",listPrice:"$287.96",quantityAvailable:"300",orders:{number:"00-10542-89507",quantity:100},watchers:"95",protection:"$17.99",shipping:"FREE",delivery:"4/1 - 4/5"},{seller:"Nintendo",item:{title:"Nintendo SNES Brand New Gaming System with Four Controllers",subtitle:"SKU : A43BTR5678 • Quantity : 1",titleShort:"SNES",image:{url:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg",alt:"Nintendo Switch"}},status:"Ready to Ship",statusType:"recent",listPrice:"$89.85",quantityAvailable:"45",orders:{number:"00-10542-89507",quantity:200},watchers:"5",protection:"$18.95",shipping:"FREE",delivery:"4/11 - 4/15"},{seller:"Microsoft",item:{title:"Microsoft XBOX 360 Brand New Gaming System with Four Controllers",subtitle:"SKU : A43BTR5678 • Quantity : 1",titleShort:"XBOX 360",image:{url:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg",alt:"Microsoft XBOX"}},status:"Backorder",statusType:"time-sensitive",listPrice:"$499.99",quantityAvailable:"345",orders:{number:"00-10542-89507",quantity:100},watchers:"205",protection:"$17.99",shipping:"FREE",delivery:"4/17 - 4/25"},{seller:"Microsoft",item:{title:"Microsoft XBOX One Brand New Gaming System with Four Controllers",subtitle:"SKU : A43BTR5678 • Quantity : 1",titleShort:"XBOX One",image:{url:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg",alt:"Microsoft XBOX"}},status:"Preparing",statusType:"neutral",listPrice:"$499.99",quantityAvailable:"399",orders:{number:"00-10542-89507",quantity:100},watchers:"305",protection:"$27.99",shipping:"FREE",delivery:"4/9 - 4/11"},{seller:"Sony",item:{title:"Sony Playstation 5 Brand New Gaming System with Four Controllers",subtitle:"SKU : A43BTR5678 • Quantity : 1",titleShort:"Playstation 5",image:{url:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg",alt:"Sony Playstation 5"}},status:"Restocking",statusType:"trustworthy",listPrice:"$519.99",quantityAvailable:"205",orders:{number:"00-10542-89507",quantity:100},watchers:"199",protection:"$29.99",shipping:"FREE",delivery:"4/11 - 4/15"}],G="wRvjOXYk",g=R(G);_.r(G,()=>g);const be={};g._=I(function(y,a,n,t,d,u){o(h,b(()=>{r("header",{columnType:"row-header",renderBody:e=>{e.t("Seller",t)}}),r("header",{renderBody:e=>{e.t("Item",t)}}),r("header",{renderBody:e=>{e.t("Status",t)}}),r("header",{columnType:"numeric",renderBody:e=>{e.t("List Price",t)}}),r("header",{columnType:"numeric",renderBody:e=>{e.t("Quantity Available",t)}}),r("header",{renderBody:e=>{e.t("Orders",t)}}),r("header",{columnType:"numeric",renderBody:e=>{e.t("Watchers",t)}}),r("header",{columnType:"numeric",renderBody:e=>{e.t("Protection",t)}}),r("header",{renderBody:e=>{e.t("Shipping",t)}}),r("header",{renderBody:e=>{e.t("Delivery",t)}});let m=0;for(const e of w(K)){const i=`[${m++}]`;r("row",b(()=>{r("cell",{renderBody:l=>{l.t(e.seller,t)}}),r("cell",{renderBody:l=>{l.t(e.item.title,t)}}),r("cell",{renderBody:l=>{o(me,{status:e.statusType,renderBody:c=>{c.t(e.status,t)}},l,n,"1"+i)}}),r("cell",{renderBody:l=>{l.t(e.listPrice,t)}}),r("cell",{renderBody:l=>{l.t(e.quantityAvailable,t)}}),r("cell",{renderBody:l=>{l.be("a",{href:"https://ebay.com"},"2"+i,t,null,0),l.t(e.orders.number,t),l.ee()}}),r("cell",{renderBody:l=>{l.t(e.watchers,t)}}),r("cell",{renderBody:l=>{l.t(e.protection,t)}}),r("cell",{renderBody:l=>{l.t(e.shipping,t)}}),r("cell",{renderBody:l=>{l.t(e.delivery,t)}})}))}},{...y,header:void 0,row:void 0}),a,n,"0")},{t:G,i:!0},be);g.Component=O(be,g._);const Se=`import data from "./data.json";

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
`,D="QEohpsP",E=R(D);_.r(D,()=>Ee);const we={};E._=I(function(y,a,n,t,d,u){o(h,b(()=>{r("header",{columnType:"row-header",renderBody:e=>{e.t("Seller",t)}}),r("header",{renderBody:e=>{e.t("Item",t)}}),r("header",{renderBody:e=>{e.t("Status",t)}}),r("header",{columnType:"numeric",renderBody:e=>{e.t("List Price",t)}}),r("header",{columnType:"numeric",renderBody:e=>{e.t("Quantity Available",t)}}),r("header",{renderBody:e=>{e.t("Orders",t)}}),r("header",{columnType:"numeric",renderBody:e=>{e.t("Watchers",t)}}),r("header",{columnType:"numeric",renderBody:e=>{e.t("Protection",t)}}),r("header",{renderBody:e=>{e.t("Shipping",t)}}),r("header",{renderBody:e=>{e.t("Delivery",t)}});let m=0;for(const e of w(K)){let i=m++;const l=`[${i}]`,c=i===0;r("row",b(()=>{r("cell",{renderBody:s=>{s.t(e.seller,t)}}),r("cell",{renderBody:s=>{s.t(e.item.title,t)}}),r("cell",{renderBody:s=>{o(me,{status:e.statusType,renderBody:q=>{q.t(e.status,t)}},s,n,"1"+l)}}),r("cell",{renderBody:s=>{s.t(e.listPrice,t)}}),r("cell",{renderBody:s=>{s.t(e.quantityAvailable,t)}}),r("cell",{renderBody:s=>{s.be("a",{href:"https://ebay.com"},"2"+l,t,null,0),s.t(e.orders.number,t),s.ee()}}),r("cell",{renderBody:s=>{s.t(e.watchers,t)}}),r("cell",{renderBody:s=>{s.t(e.protection,t)}}),r("cell",{renderBody:s=>{s.t(e.shipping,t)}}),r("cell",{renderBody:s=>{s.t(e.delivery,t)}})},{name:`row_${i}`,selected:c}))}},{mode:"selection",...y,header:void 0,row:void 0}),a,n,"0",[["select","emit",!1,["select"]]])},{t:D,s:!0},we);E.Component=O(we,E._);const qe=`import data from "./data.json";

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
`,V="cosvCjvl",f=R(V);_.r(V,()=>f);const ge={};f._=I(function(y,a,n,t,d,u){o(h,b(()=>{r("header",{columnType:"row-header",renderBody:e=>{e.t("Seller",t)}}),r("header",{renderBody:e=>{e.t("Item",t)}}),r("header",{renderBody:e=>{e.t("Condition",t)}}),r("header",{columnType:"layout",renderBody:e=>{e.t("Mutiple Actions",t)}}),r("header",{columnType:"icon-action",renderBody:e=>{e.t("Actions Plus",t)}}),r("header",{columnType:"numeric",renderBody:e=>{e.t("List Price",t)}}),r("header",{columnType:"numeric",renderBody:e=>{e.t("Quantity Available",t)}}),r("header",{renderBody:e=>{e.t("Orders",t)}}),r("header",{columnType:"numeric",renderBody:e=>{e.t("Watchers",t)}}),r("header",{columnType:"numeric",renderBody:e=>{e.t("Protection",t)}}),r("header",{renderBody:e=>{e.t("Shipping",t)}}),r("header",{renderBody:e=>{e.t("Delivery",t)}});let m=0;for(const e of w(K)){const i=`[${m++}]`;r("row",b(()=>{r("cell",{renderBody:l=>{l.t(e.seller,t)}}),r("cell",{renderBody:l=>{l.t(e.item.titleShort,t)}}),r("cell",{renderBody:l=>{o(Ne,b(()=>{r("options",{text:"New"}),r("options",{text:"New without box",selected:!0}),r("options",{text:"Used"})},{borderless:!0}),l,n,"1"+i)}}),r("cell",{renderBody:l=>{o(Re,{href:"https://www.ebay.com",renderBody:c=>{c.t("Edit Listing",t)}},l,n,"2"+i),o(ee,{renderBody:c=>{o(Z,{},c,n,"4"+i)}},l,n,"3"+i)}}),r("cell",{renderBody:l=>{o(ee,{renderBody:c=>{o(Z,{},c,n,"6"+i)}},l,n,"5"+i)}}),r("cell",{renderBody:l=>{l.t(e.listPrice,t)}}),r("cell",{renderBody:l=>{l.t(e.quantityAvailable,t)}}),r("cell",{renderBody:l=>{l.be("a",{href:"https://ebay.com"},"7"+i,t,null,0),l.t(e.orders.number,t),l.ee()}}),r("cell",{renderBody:l=>{l.t(e.watchers,t)}}),r("cell",{renderBody:l=>{l.t(e.protection,t)}}),r("cell",{renderBody:l=>{l.t(e.shipping,t)}}),r("cell",{renderBody:l=>{l.t(e.delivery,t)}})}))}},{...y,header:void 0,row:void 0}),a,n,"0")},{t:V,i:!0},ge);f.Component=O(ge,f._);const Fe=`import data from "./data.json";

<ebay-table ...input>
    <@header column-type="row-header">
        Seller
    </@header>
    <@header>Item</@header>
    <@header>Condition</@header>
    <@header column-type="layout">
        Mutiple Actions
    </@header>
    <@header column-type="icon-action">
        Actions Plus
    </@header>
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
            <@cell>\${r.item.titleShort}</@cell>
            <@cell>
                <ebay-select borderless>
                    <@option text="New"/>
                    <@option text="New without box" selected/>
                    <@option text="Used"/>
                </ebay-select>
            </@cell>
            <@cell>
                <ebay-cta-button href="https://www.ebay.com">
                    Edit Listing
                </ebay-cta-button>
                <ebay-icon-button>
                    <ebay-overflow-vertical-16-icon/>
                </ebay-icon-button>
            </@cell>
            <@cell>
                <ebay-icon-button>
                    <ebay-overflow-vertical-16-icon/>
                </ebay-icon-button>
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
`,ut={title:"data-display/table",component:h,parameters:{docs:{description:{component:Oe}}},argTypes:{density:{control:{type:"select"},description:"table density",options:["compact","relaxed","none"]},mode:{control:{type:"select"},description:"table mode",options:["selection","none"]},allSelected:{control:{type:"select"},description:"Select all tri-state checkbox state",options:["true","false","mixed"]},header:{name:"@header",description:"header attribute tags",table:{category:"@attribute tags"}},row:{name:"@row",description:"row attribute tags",table:{category:"@attribute tags"}},columnType:{name:"column-type",control:{type:"select"},options:["normal","numeric","row-header","layout","icon-action"],table:{category:"@header attribute tags"}},selected:{name:"selected",control:{type:"boolean"},table:{category:"@header attribute tags"}},cell:{controls:{hideNoControlsWarning:!0},name:"@cell",description:"cell attribute tags",table:{category:"@row attribute tags"}},onSelect:{action:"on-select",description:"Triggered on selection",table:{category:"Events",defaultValue:{summary:"{ selected, allSelected }"}}}}},x=N(g,Se),A=N(g,Se,{density:"compact"}),C=N(E,qe,{a11ySelectAllText:"Select all",a11ySelectRowText:"Select row"}),P=N(f,Fe);var re,le,ae;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:"buildExtensionTemplate(defaultTemplate, defaultCode)",...(ae=(le=x.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var ne,se,ie;A.parameters={...A.parameters,docs:{...(ne=A.parameters)==null?void 0:ne.docs,source:{originalSource:`buildExtensionTemplate(defaultTemplate, defaultCode, {
  density: "compact"
})`,...(ie=(se=A.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var oe,de,ce;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`buildExtensionTemplate(selectionTemplate, selectionCode, {
  a11ySelectAllText: "Select all",
  a11ySelectRowText: "Select row"
})`,...(ce=(de=C.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ye,he,ue;P.parameters={...P.parameters,docs:{...(ye=P.parameters)==null?void 0:ye.docs,source:{originalSource:"buildExtensionTemplate(withActionsTemplate, withActionsCode)",...(ue=(he=P.parameters)==null?void 0:he.docs)==null?void 0:ue.source}}};const mt=["Default","TableDensity","SelectionModeBasic","TableWithActions"];export{x as Default,C as SelectionModeBasic,A as TableDensity,P as TableWithActions,mt as __namedExportsOrder,ut as default};
