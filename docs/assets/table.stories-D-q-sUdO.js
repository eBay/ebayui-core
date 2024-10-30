import{b as w}from"./utils-DWCsNc5l.js";import{t as C,r as $,b as v,d as te,p as F,e as re,g as ye,c as T}from"./registry-CyswyZw5.js";import{_ as He}from"./index-CwcHcKbG.js";import{_ as d}from"./render-tag-CLyPs9qZ.js";import{_ as ue}from"./dynamic-tag-CXXozR29.js";import{_ as Je,a as Ye,b as Ze}from"./index-CdyZQHp6.js";import{_ as f}from"./of-fallback-C2gEBeKK.js";import{_ as _e}from"./index-DbANkeq_.js";import{i as p,r}from"./attr-tag-DphMQldM.js";import{_ as L}from"./index-Bi2aHGGV.js";import{_ as et}from"./empty-component-BCB5DEsP.js";import{_ as tt}from"./index-BV-wPGJu.js";import{_ as rt}from"./index-CB-pGbnx.js";import{_ as he}from"./index-BEDTdAEW.js";import{_ as me}from"./index-D57sw9Ri.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";/* empty css              */import"./index-CLOjxbak.js";import"./index-Bq4u441m.js";/* empty css             */import"./index-DBaA0FxL.js";import"./index-htxwKVWG.js";import"./index-DcOOfxWY.js";import"./index-DnpUnw6F.js";/* empty css                    *//* empty css               *//* empty css             */import"./index-s6KmHAjI.js";import"./index-CbT4wDAv.js";class lt extends Marko.Component{onCreate(){this.state={selected:{},sorted:{},allSelected:"false"}}onInput(a){this.state.selected=this.getSelectedRowStateFromInput(a),this.state.allSelected=this.getAllSelectedState(a),this.state.sorted=this.getSortedColStateFromInput(a)}getSelectedRowStateFromInput(a){const n={};if(a.row)for(const[t,s]of Object.entries([...a.row])){const y=s.name||t;n[y]=s.selected||!1}return n}getSortedColStateFromInput(a){const n={};for(const[t,s]of Object.entries([...a.header])){const y=s.name||t;s.sort===!0?n[y]="none":s.sort&&(n[y]=s.sort)}return n}getAllSelectedState(a){if(a.allSelected)return a.allSelected;let n=0,t=0;for(const[s,y]of Object.entries(this.state.selected))y&&n++,t++;return n===0?"false":n===t?"true":"mixed"}headerSelect(){const{allSelected:a}=this.state;this.state.selected=[...this.input.row||[]].reduce((n,{name:t},s)=>(n[t||s]=a!=="true",n),{}),this.state.allSelected=a!=="true"?"true":"false",this.emit("select",{selected:this.state.selected,allSelected:this.state.allSelected})}rowSelect(a,{checked:n}){this.state.selected[a]=n,this.setStateDirty("selected"),this.state.allSelected=this.getAllSelectedState(this.input),this.emit("select",{selected:this.state.selected})}sortColumn(a){const n={asc:"desc",desc:"none",none:"asc"},t=this.state.sorted[a];if(t){const s=n[t];this.state.sorted=Object.keys(this.state.sorted).reduce((y,u)=>(y[u]=u===a?s:"none",y),{}),this.emit("sort",{sorted:{[a]:s}})}}}const le="qF$tvxK",S=C(le);var at=["compact","relaxed"],pe=["numeric","icon-action"];$.r(le,()=>S);const We=lt;S._=v(function(c,a,n,t,s,y){const{class:u,density:e,header:o,row:l,allSelected:h,a11ySelectAllText:i,a11ySelectRowText:H,mode:J="none",...Ke}=c;a.be("div",te(F(Ke),{class:re(["table",J==="selection"&&"table--mode-selection",e&&at.includes(e)&&`table--density-${e}`,u]),role:"group",tabindex:"0"}),"0",t,null,4),a.be("table",null,"1",t,null,0),a.be("thead",null,"2",t,null,0),a.be("tr",null,"3",t,null,0);{J==="selection"&&(a.be("th",{class:"table-cell"},"4",t,null,1),d(He,{ariaLabel:i??"Select all rows",checked:s.allSelected},a,n,"5",[["change","headerSelect",!1]]),a.ee());let Y=0;for(const k of f(o)){let x=Y++;const b=`[${x}]`,{columnType:W="normal",class:j,name:Z=`${x}`,sort:ce,renderBody:_,href:g,...Q}=k,m=s.sorted[Z];let P;m==="asc"?P="ascending":m==="desc"&&(P="descending"),a.be("th",te(F(Q),{class:re(["table-cell",k.columnType&&pe.includes(k.columnType)&&`table-cell--${k.columnType}`,j]),"aria-sort":P}),"6"+b,t,null,4);{let q={};g?q={href:g}:m&&(q={type:"button","aria-pressed":m!=="none"?"true":"false"});const N=g?"a":m?"button":null;N?a.be(N,ye(q),"7"+b,t,null,4,{onclick:n.d("click",g?void 0:"sortColumn",!1,[Z])}):a.bf(`f_${"7"+b}`,t),ue(a,_,null,null,null,null,n,"8"+b),m&&(a.t(" ",t),m==="asc"?d(Je,{},a,n,"9"+b):m==="desc"?d(Ye,{},a,n,"10"+b):d(Ze,{},a,n,"11"+b)),N?a.ee():a.ef()}a.ee()}}a.ee(),a.ee(),a.be("tbody",null,"12",t,null,0);{let Y=0;for(const k of f(l||[])){let x=Y++;const b=`[${x}]`,{cell:W,name:j=`${x}`,selected:Z,...ce}=k;a.be("tr",ye(F(ce)),"13"+b,t,null,4);{J==="selection"&&(a.be("th",{scope:"row",class:"table__cell"},"14"+b,t,null,0),d(_e,{ariaLabel:H??"Select row",checked:s.selected[j]},a,n,"15"+b,[["change","rowSelect",!1,[j]]]),a.ee());let _=0;for(const g of f(o)){let Q=_++;const m=`[${Q+b}]`,P=Array.isArray(W)?W[Q]:W;if(P){const{class:q,renderBody:N,...Ge}=P,De=["table-cell",g.columnType&&pe.includes(g.columnType)&&`table-cell--${g.columnType}`],ze=g.columnType==="row-header"?"th":"td";a.be(ze,te(F(Ge),{class:re([De,q])}),"16"+m,t,null,4);{const ee=g.columnType==="layout"&&"div";ee?a.be(ee,{class:"table-cell__layout"},"17"+m,t,null,1):a.bf(`f_${"17"+m}`,t),ue(a,N,null,null,null,null,n,"18"+m),ee?a.ee():a.ef()}a.ee()}}}a.ee()}}a.ee(),a.ee(),a.ee()},{t:le},We);S.Component=T(We,S._);const nt=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`,B=[{seller:"Nintendo",item:{title:"Nintendo Switch Brand New Gaming System with Four Controllers",subtitle:"SKU : A43BTR5678 • Quantity : 1",titleShort:"Switch",image:{url:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg",alt:"Nintendo Switch"}},status:"Ready to Ship",statusType:"recent",listPrice:"$287.96",quantityAvailable:"300",orders:{number:"00-10542-89507",quantity:100},watchers:"95",protection:"$17.99",shipping:"FREE",delivery:"4/1 - 4/5"},{seller:"Nintendo",item:{title:"Nintendo SNES Brand New Gaming System with Four Controllers",subtitle:"SKU : A43BTR5678 • Quantity : 1",titleShort:"SNES",image:{url:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg",alt:"Nintendo Switch"}},status:"Ready to Ship",statusType:"recent",listPrice:"$89.85",quantityAvailable:"45",orders:{number:"00-10542-89507",quantity:200},watchers:"5",protection:"$18.95",shipping:"FREE",delivery:"4/11 - 4/15"},{seller:"Microsoft",item:{title:"Microsoft XBOX 360 Brand New Gaming System with Four Controllers",subtitle:"SKU : A43BTR5678 • Quantity : 1",titleShort:"XBOX 360",image:{url:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg",alt:"Microsoft XBOX"}},status:"Backorder",statusType:"time-sensitive",listPrice:"$499.99",quantityAvailable:"345",orders:{number:"00-10542-89507",quantity:100},watchers:"205",protection:"$17.99",shipping:"FREE",delivery:"4/17 - 4/25"},{seller:"Microsoft",item:{title:"Microsoft XBOX One Brand New Gaming System with Four Controllers",subtitle:"SKU : A43BTR5678 • Quantity : 1",titleShort:"XBOX One",image:{url:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg",alt:"Microsoft XBOX"}},status:"Preparing",statusType:"neutral",listPrice:"$499.99",quantityAvailable:"399",orders:{number:"00-10542-89507",quantity:100},watchers:"305",protection:"$27.99",shipping:"FREE",delivery:"4/9 - 4/11"},{seller:"Sony",item:{title:"Sony Playstation 5 Brand New Gaming System with Four Controllers",subtitle:"SKU : A43BTR5678 • Quantity : 1",titleShort:"Playstation 5",image:{url:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg",alt:"Sony Playstation 5"}},status:"Restocking",statusType:"trustworthy",listPrice:"$519.99",quantityAvailable:"205",orders:{number:"00-10542-89507",quantity:100},watchers:"199",protection:"$29.99",shipping:"FREE",delivery:"4/11 - 4/15"}],ae="wRvjOXYk",A=C(ae);$.r(ae,()=>A);const je={};A._=v(function(c,a,n,t,s,y){d(S,p(()=>{r("header",{columnType:"row-header",renderBody:e=>{e.t("Seller",t)}}),r("header",{renderBody:e=>{e.t("Item",t)}}),r("header",{renderBody:e=>{e.t("Status",t)}}),r("header",{columnType:"numeric",renderBody:e=>{e.t("List Price",t)}}),r("header",{columnType:"numeric",renderBody:e=>{e.t("Quantity Available",t)}}),r("header",{renderBody:e=>{e.t("Orders",t)}}),r("header",{columnType:"numeric",renderBody:e=>{e.t("Watchers",t)}}),r("header",{columnType:"numeric",renderBody:e=>{e.t("Protection",t)}}),r("header",{renderBody:e=>{e.t("Shipping",t)}}),r("header",{renderBody:e=>{e.t("Delivery",t)}});let u=0;for(const e of f(B)){const o=`[${u++}]`;r("row",p(()=>{r("cell",{renderBody:l=>{l.t(e.seller,t)}}),r("cell",{renderBody:l=>{l.t(e.item.title,t)}}),r("cell",{renderBody:l=>{d(L,{status:e.statusType,renderBody:h=>{h.t(e.status,t)}},l,n,"1"+o)}}),r("cell",{renderBody:l=>{l.t(e.listPrice,t)}}),r("cell",{renderBody:l=>{l.t(e.quantityAvailable,t)}}),r("cell",{renderBody:l=>{l.be("a",{href:"https://ebay.com"},"2"+o,t,null,0),l.t(e.orders.number,t),l.ee()}}),r("cell",{renderBody:l=>{l.t(e.watchers,t)}}),r("cell",{renderBody:l=>{l.t(e.protection,t)}}),r("cell",{renderBody:l=>{l.t(e.shipping,t)}}),r("cell",{renderBody:l=>{l.t(e.delivery,t)}})}))}},{...c,header:void 0,row:void 0}),a,n,"0")},{t:ae,i:!0},je);A.Component=T(je,A._);const Qe=`import data from "./data.json";

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
`,ne="QEohpsP",z=C(ne);$.r(ne,()=>et);const Fe={};z._=v(function(c,a,n,t,s,y){d(S,p(()=>{r("header",{columnType:"row-header",renderBody:e=>{e.t("Seller",t)}}),r("header",{renderBody:e=>{e.t("Item",t)}}),r("header",{renderBody:e=>{e.t("Status",t)}}),r("header",{columnType:"numeric",renderBody:e=>{e.t("List Price",t)}}),r("header",{columnType:"numeric",renderBody:e=>{e.t("Quantity Available",t)}}),r("header",{renderBody:e=>{e.t("Orders",t)}}),r("header",{columnType:"numeric",renderBody:e=>{e.t("Watchers",t)}}),r("header",{columnType:"numeric",renderBody:e=>{e.t("Protection",t)}}),r("header",{renderBody:e=>{e.t("Shipping",t)}}),r("header",{renderBody:e=>{e.t("Delivery",t)}});let u=0;for(const e of f(B)){let o=u++;const l=`[${o}]`,h=o===0;r("row",p(()=>{r("cell",{renderBody:i=>{i.t(e.seller,t)}}),r("cell",{renderBody:i=>{i.t(e.item.title,t)}}),r("cell",{renderBody:i=>{d(L,{status:e.statusType,renderBody:H=>{H.t(e.status,t)}},i,n,"1"+l)}}),r("cell",{renderBody:i=>{i.t(e.listPrice,t)}}),r("cell",{renderBody:i=>{i.t(e.quantityAvailable,t)}}),r("cell",{renderBody:i=>{i.be("a",{href:"https://ebay.com"},"2"+l,t,null,0),i.t(e.orders.number,t),i.ee()}}),r("cell",{renderBody:i=>{i.t(e.watchers,t)}}),r("cell",{renderBody:i=>{i.t(e.protection,t)}}),r("cell",{renderBody:i=>{i.t(e.shipping,t)}}),r("cell",{renderBody:i=>{i.t(e.delivery,t)}})},{name:`row_${o}`,selected:h}))}},{mode:"selection",...c,header:void 0,row:void 0}),a,n,"0",[["select","emit",!1,["select"]]])},{t:ne,s:!0},Fe);z.Component=T(Fe,z._);const st=`import data from "./data.json";

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
`,se="cosvCjvl",E=C(se);$.r(se,()=>E);const Xe={};E._=v(function(c,a,n,t,s,y){d(S,p(()=>{r("header",{columnType:"row-header",renderBody:e=>{e.t("Seller",t)}}),r("header",{renderBody:e=>{e.t("Item",t)}}),r("header",{renderBody:e=>{e.t("Condition",t)}}),r("header",{columnType:"layout",renderBody:e=>{e.t("Mutiple Actions",t)}}),r("header",{columnType:"icon-action",renderBody:e=>{e.t("Actions Plus",t)}}),r("header",{columnType:"numeric",renderBody:e=>{e.t("List Price",t)}}),r("header",{columnType:"numeric",renderBody:e=>{e.t("Quantity Available",t)}}),r("header",{renderBody:e=>{e.t("Orders",t)}}),r("header",{columnType:"numeric",renderBody:e=>{e.t("Watchers",t)}}),r("header",{columnType:"numeric",renderBody:e=>{e.t("Protection",t)}}),r("header",{renderBody:e=>{e.t("Shipping",t)}}),r("header",{renderBody:e=>{e.t("Delivery",t)}});let u=0;for(const e of f(B)){const o=`[${u++}]`;r("row",p(()=>{r("cell",{renderBody:l=>{l.t(e.seller,t)}}),r("cell",{renderBody:l=>{l.t(e.item.titleShort,t)}}),r("cell",{renderBody:l=>{d(tt,p(()=>{r("options",{text:"New"}),r("options",{text:"New without box",selected:!0}),r("options",{text:"Used"})},{borderless:!0}),l,n,"1"+o)}}),r("cell",{renderBody:l=>{d(rt,{href:"https://www.ebay.com",renderBody:h=>{h.t("Edit Listing",t)}},l,n,"2"+o),d(me,{renderBody:h=>{d(he,{},h,n,"4"+o)}},l,n,"3"+o)}}),r("cell",{renderBody:l=>{d(me,{renderBody:h=>{d(he,{},h,n,"6"+o)}},l,n,"5"+o)}}),r("cell",{renderBody:l=>{l.t(e.listPrice,t)}}),r("cell",{renderBody:l=>{l.t(e.quantityAvailable,t)}}),r("cell",{renderBody:l=>{l.be("a",{href:"https://ebay.com"},"7"+o,t,null,0),l.t(e.orders.number,t),l.ee()}}),r("cell",{renderBody:l=>{l.t(e.watchers,t)}}),r("cell",{renderBody:l=>{l.t(e.protection,t)}}),r("cell",{renderBody:l=>{l.t(e.shipping,t)}}),r("cell",{renderBody:l=>{l.t(e.delivery,t)}})}))}},{...c,header:void 0,row:void 0}),a,n,"0")},{t:se,i:!0},Xe);E.Component=T(Xe,E._);const ot=`import data from "./data.json";

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
`,oe="sMtqZJve",I=C(oe);$.r(oe,()=>I);const Me={onCreate(){this.state={sorted:{sellerCol:"asc"}}},onSort(c,...a){this.state.sorted=c.sorted,this.emit("sort",c,...a)}};I._=v(function(c,a,n,t,s,y){d(S,p(()=>{r("header",{name:"sellerCol",columnType:"row-header",sort:s.sorted.sellerCol||"none",renderBody:e=>{e.t("Seller",t)}}),r("header",{name:"itemCol",sort:s.sorted.itemCol||"none",renderBody:e=>{e.t("Item",t)}}),r("header",{name:"statusCol",sort:s.sorted.statusCol||"none",renderBody:e=>{e.t("Status",t)}}),r("header",{name:"listPriceCol",columnType:"numeric",sort:s.sorted.listPriceCol||"none",renderBody:e=>{e.t("List Price",t)}}),r("header",{name:"quantityCol",columnType:"numeric",sort:s.sorted.quantityCol||"none",renderBody:e=>{e.t("Quantity Available",t)}}),r("header",{name:"orderCol",sort:s.sorted.orderCol||"none",renderBody:e=>{e.t("Orders",t)}}),r("header",{name:"watchersCol",columnType:"numeric",sort:s.sorted.watchersCol||"none",renderBody:e=>{e.t("Watchers",t)}}),r("header",{name:"protectionCol",columnType:"numeric",sort:s.sorted.protectionCol||"none",renderBody:e=>{e.t("Protection",t)}}),r("header",{name:"shippingCol",sort:s.sorted.shippingCol||"none",renderBody:e=>{e.t("Shipping",t)}}),r("header",{name:"deliveryCol",sort:s.sorted.deliveryCol||"none",renderBody:e=>{e.t("Delivery",t)}});let u=0;for(const e of f(B)){const o=`[${u++}]`;r("row",p(()=>{r("cell",{renderBody:l=>{l.t(e.seller,t)}}),r("cell",{renderBody:l=>{l.t(e.item.title,t)}}),r("cell",{renderBody:l=>{d(L,{status:e.statusType,renderBody:h=>{h.t(e.status,t)}},l,n,"1"+o)}}),r("cell",{renderBody:l=>{l.t(e.listPrice,t)}}),r("cell",{renderBody:l=>{l.t(e.quantityAvailable,t)}}),r("cell",{renderBody:l=>{l.be("a",{href:"https://ebay.com"},"2"+o,t,null,0),l.t(e.orders.number,t),l.ee()}}),r("cell",{renderBody:l=>{l.t(e.watchers,t)}}),r("cell",{renderBody:l=>{l.t(e.protection,t)}}),r("cell",{renderBody:l=>{l.t(e.shipping,t)}}),r("cell",{renderBody:l=>{l.t(e.delivery,t)}})}))}},{...c,header:void 0,row:void 0}),a,n,"0",[["sort","onSort",!1]])},{t:oe},Me);I.Component=T(Me,I._);const it=`import data from "./data.json";
import { type TableSort } from "../component";
class {
    declare state: {
        sorted: Record<string, TableSort>;
    };
    onCreate() {
        this.state = { sorted: { sellerCol: "asc" } };
    }
    onSort(event: { sorted: Record<string, TableSort> }, ...params: any) {
        this.state.sorted = event.sorted;
        this.emit("sort", event, ...params);
    }
}

<ebay-table on-sort("onSort") ...input>
    <@header
        name="sellerCol"
        column-type="row-header"
        sort=(state.sorted.sellerCol || "none")
    >
        Seller
    </@header>
    <@header name="itemCol" sort=(state.sorted.itemCol || "none")>
        Item
    </@header>
    <@header name="statusCol" sort=(state.sorted.statusCol || "none")>
        Status
    </@header>
    <@header
        name="listPriceCol"
        column-type="numeric"
        sort=(state.sorted.listPriceCol || "none")
    >
        List Price
    </@header>
    <@header
        name="quantityCol"
        column-type="numeric"
        sort=(state.sorted.quantityCol || "none")
    >
        Quantity Available
    </@header>
    <@header name="orderCol" sort=(state.sorted.orderCol || "none")>
        Orders
    </@header>
    <@header
        name="watchersCol"
        column-type="numeric"
        sort=(state.sorted.watchersCol || "none")
    >
        Watchers
    </@header>
    <@header
        name="protectionCol"
        column-type="numeric"
        sort=(state.sorted.protectionCol || "none")
    >
        Protection
    </@header>
    <@header name="shippingCol" sort=(state.sorted.shippingCol || "none")>
        Shipping
    </@header>
    <@header name="deliveryCol" sort=(state.sorted.deliveryCol || "none")>
        Delivery
    </@header>
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
`,ie="XseMqWji",O=C(ie);$.r(ie,()=>O);const Ve={};O._=v(function(c,a,n,t,s,y){d(S,p(()=>{r("header",{columnType:"row-header",sort:"asc",href:"https://www.ebay.com",renderBody:e=>{e.t("Seller",t)}}),r("header",{renderBody:e=>{e.t("Item",t)}}),r("header",{renderBody:e=>{e.t("Status",t)}}),r("header",{columnType:"numeric",renderBody:e=>{e.t("List Price",t)}}),r("header",{columnType:"numeric",renderBody:e=>{e.t("Quantity Available",t)}}),r("header",{renderBody:e=>{e.t("Orders",t)}}),r("header",{columnType:"numeric",renderBody:e=>{e.t("Watchers",t)}}),r("header",{columnType:"numeric",renderBody:e=>{e.t("Protection",t)}}),r("header",{renderBody:e=>{e.t("Shipping",t)}}),r("header",{renderBody:e=>{e.t("Delivery",t)}});let u=0;for(const e of f(B)){const o=`[${u++}]`;r("row",p(()=>{r("cell",{renderBody:l=>{l.t(e.seller,t)}}),r("cell",{renderBody:l=>{l.t(e.item.title,t)}}),r("cell",{renderBody:l=>{d(L,{status:e.statusType,renderBody:h=>{h.t(e.status,t)}},l,n,"1"+o)}}),r("cell",{renderBody:l=>{l.t(e.listPrice,t)}}),r("cell",{renderBody:l=>{l.t(e.quantityAvailable,t)}}),r("cell",{renderBody:l=>{l.be("a",{href:"https://ebay.com"},"2"+o,t,null,0),l.t(e.orders.number,t),l.ee()}}),r("cell",{renderBody:l=>{l.t(e.watchers,t)}}),r("cell",{renderBody:l=>{l.t(e.protection,t)}}),r("cell",{renderBody:l=>{l.t(e.shipping,t)}}),r("cell",{renderBody:l=>{l.t(e.delivery,t)}})}))}},{...c,header:void 0,row:void 0}),a,n,"0")},{t:ie,i:!0},Ve);O.Component=T(Ve,O._);const dt=`import data from "./data.json";

<ebay-table ...input>
    <@header
        column-type="row-header"
        sort=("asc" as const)
        href="https://www.ebay.com"
    >
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
`,de="oIrVjD",R=C(de);$.r(de,()=>R);const Ue={onCreate(){this.state={sorted:{},data:B}},onSort(c,...a){this.state.sorted=c.sorted,this.state.data=[...B].sort((n,t)=>this.state.sorted.listPriceCol==="asc"?Number(n.listPrice.substring(1))-Number(t.listPrice.substring(1)):this.state.sorted.listPriceCol==="desc"?Number(t.listPrice.substring(1))-Number(n.listPrice.substring(1)):this.state.sorted.quantityCol==="asc"?Number(n.quantityAvailable)-Number(t.quantityAvailable):this.state.sorted.quantityCol==="desc"?Number(t.quantityAvailable)-Number(n.quantityAvailable):0),this.emit("sort",c,...a)}};R._=v(function(c,a,n,t,s,y){d(S,p(()=>{r("header",{name:"sellerCol",columnType:"row-header",renderBody:e=>{e.t("Seller",t)}}),r("header",{name:"itemCol",renderBody:e=>{e.t("Item",t)}}),r("header",{name:"statusCol",renderBody:e=>{e.t("Status",t)}}),r("header",{name:"listPriceCol",columnType:"numeric",sort:s.sorted.listPriceCol||"none",renderBody:e=>{e.t("List Price",t)}}),r("header",{name:"quantityCol",columnType:"numeric",sort:s.sorted.quantityCol||"none",renderBody:e=>{e.t("Quantity Available",t)}}),r("header",{name:"orderCol",renderBody:e=>{e.t("Orders",t)}}),r("header",{name:"watchersCol",columnType:"numeric",renderBody:e=>{e.t("Watchers",t)}}),r("header",{name:"protectionCol",columnType:"numeric",renderBody:e=>{e.t("Protection",t)}}),r("header",{name:"shippingCol",renderBody:e=>{e.t("Shipping",t)}}),r("header",{name:"deliveryCol",renderBody:e=>{e.t("Delivery",t)}});let u=0;for(const e of f(s.data)){const o=`[${u++}]`;r("row",p(()=>{r("cell",{renderBody:l=>{l.t(e.seller,t)}}),r("cell",{renderBody:l=>{l.t(e.item.title,t)}}),r("cell",{renderBody:l=>{d(L,{status:e.statusType,renderBody:h=>{h.t(e.status,t)}},l,n,"1"+o)}}),r("cell",{renderBody:l=>{l.t(e.listPrice,t)}}),r("cell",{renderBody:l=>{l.t(e.quantityAvailable,t)}}),r("cell",{renderBody:l=>{l.be("a",{href:"https://ebay.com"},"2"+o,t,null,0),l.t(e.orders.number,t),l.ee()}}),r("cell",{renderBody:l=>{l.t(e.watchers,t)}}),r("cell",{renderBody:l=>{l.t(e.protection,t)}}),r("cell",{renderBody:l=>{l.t(e.shipping,t)}}),r("cell",{renderBody:l=>{l.t(e.delivery,t)}})}))}},{...c,header:void 0,row:void 0}),a,n,"0",[["sort","onSort",!1]])},{t:de},Ue);R.Component=T(Ue,R._);const ct=`import data from "./data.json";
import { type TableSort } from "../component";
class {
    declare state: {
        sorted: Record<string, TableSort>;
        data: typeof data;
    };
    onCreate() {
        this.state = { sorted: {}, data };
    }
    onSort(event: { sorted: Record<string, TableSort> }, ...params: any) {
        this.state.sorted = event.sorted;
        this.state.data = [...data].sort((a, b) => {
            if (this.state.sorted.listPriceCol === "asc") {
                return (
                    Number(a.listPrice.substring(1)) -
                    Number(b.listPrice.substring(1))
                );
            } else if (this.state.sorted.listPriceCol === "desc") {
                return (
                    Number(b.listPrice.substring(1)) -
                    Number(a.listPrice.substring(1))
                );
            } else if (this.state.sorted.quantityCol === "asc") {
                return (
                    Number(a.quantityAvailable) - Number(b.quantityAvailable)
                );
            } else if (this.state.sorted.quantityCol === "desc") {
                return (
                    Number(b.quantityAvailable) - Number(a.quantityAvailable)
                );
            }
            return 0;
        });
        this.emit("sort", event, ...params);
    }
}
<ebay-table on-sort("onSort") ...input>
    <@header name="sellerCol" column-type="row-header">
        Seller
    </@header>
    <@header name="itemCol">
        Item
    </@header>
    <@header name="statusCol">
        Status
    </@header>
    <@header
        name="listPriceCol"
        column-type="numeric"
        sort=(state.sorted.listPriceCol || "none")
    >
        List Price
    </@header>
    <@header
        name="quantityCol"
        column-type="numeric"
        sort=(state.sorted.quantityCol || "none")
    >
        Quantity Available
    </@header>
    <@header name="orderCol">
        Orders
    </@header>
    <@header name="watchersCol" column-type="numeric">
        Watchers
    </@header>
    <@header name="protectionCol" column-type="numeric">
        Protection
    </@header>
    <@header name="shippingCol">
        Shipping
    </@header>
    <@header name="deliveryCol">
        Delivery
    </@header>
    <for|r| of=state.data>
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
`,Xt={title:"data-display/ebay-table",component:S,parameters:{docs:{description:{component:nt}}},argTypes:{density:{control:{type:"select"},description:"table density",options:["compact","relaxed","none"]},mode:{control:{type:"select"},description:"table mode",options:["selection","none"]},allSelected:{control:{type:"select"},description:"Select all tri-state checkbox state",options:["true","false","mixed"]},header:{name:"@header",description:"header attribute tags",table:{category:"@attribute tags"}},row:{name:"@row",description:"row attribute tags",table:{category:"@attribute tags"}},columnName:{name:"name",control:{type:"text"},description:"Column name, default is index",table:{category:"@header attribute tags"}},columnType:{name:"column-type",control:{type:"select"},options:["normal","numeric","row-header","layout","icon-action"],table:{category:"@header attribute tags"}},href:{name:"href",control:{type:"text"},description:"If set, column sorting will be a link to this href",table:{category:"@header attribute tags"}},rowName:{name:"name",control:{type:"text"},description:"Row name, default is index",table:{category:"@row attribute tags"}},selected:{name:"selected",control:{type:"boolean"},table:{category:"@row attribute tags"}},cell:{controls:{hideNoControlsWarning:!0},name:"@cell",description:"cell attribute tags",table:{category:"@row attribute tags"}},onSelect:{action:"on-select",description:"Triggered on selection",table:{category:"Events",defaultValue:{summary:"{ selected, allSelected }"}}},onSort:{action:"on-sort",description:"Triggered on column sort",table:{category:"Events",defaultValue:{summary:"{ sorted }"}}}}},X=w(A,Qe),M=w(A,Qe,{density:"compact"}),V=w(z,st,{a11ySelectAllText:"Select all",a11ySelectRowText:"Select row"}),U=w(E,ot),K=w(I,it),G=w(O,dt),D=w(R,ct);var be,Se,ge;X.parameters={...X.parameters,docs:{...(be=X.parameters)==null?void 0:be.docs,source:{originalSource:"buildExtensionTemplate(defaultTemplate, defaultCode)",...(ge=(Se=X.parameters)==null?void 0:Se.docs)==null?void 0:ge.source}}};var fe,Be,we;M.parameters={...M.parameters,docs:{...(fe=M.parameters)==null?void 0:fe.docs,source:{originalSource:`buildExtensionTemplate(defaultTemplate, defaultCode, {
  density: "compact"
})`,...(we=(Be=M.parameters)==null?void 0:Be.docs)==null?void 0:we.source}}};var Ce,$e,ve;V.parameters={...V.parameters,docs:{...(Ce=V.parameters)==null?void 0:Ce.docs,source:{originalSource:`buildExtensionTemplate(selectionTemplate, selectionCode, {
  a11ySelectAllText: "Select all",
  a11ySelectRowText: "Select row"
})`,...(ve=($e=V.parameters)==null?void 0:$e.docs)==null?void 0:ve.source}}};var Te,ke,Pe;U.parameters={...U.parameters,docs:{...(Te=U.parameters)==null?void 0:Te.docs,source:{originalSource:"buildExtensionTemplate(withActionsTemplate, withActionsCode)",...(Pe=(ke=U.parameters)==null?void 0:ke.docs)==null?void 0:Pe.source}}};var Ae,xe,qe;K.parameters={...K.parameters,docs:{...(Ae=K.parameters)==null?void 0:Ae.docs,source:{originalSource:"buildExtensionTemplate(sortTemplate, sortCode)",...(qe=(xe=K.parameters)==null?void 0:xe.docs)==null?void 0:qe.source}}};var Ne,Ee,Ie;G.parameters={...G.parameters,docs:{...(Ne=G.parameters)==null?void 0:Ne.docs,source:{originalSource:"buildExtensionTemplate(sortWithLinkTemplate, sortWithLinkCode)",...(Ie=(Ee=G.parameters)==null?void 0:Ee.docs)==null?void 0:Ie.source}}};var Oe,Re,Le;D.parameters={...D.parameters,docs:{...(Oe=D.parameters)==null?void 0:Oe.docs,source:{originalSource:"buildExtensionTemplate(sortClientSideTemplate, sortClientSideCode)",...(Le=(Re=D.parameters)==null?void 0:Re.docs)==null?void 0:Le.source}}};const Mt=["Default","TableDensity","SelectionModeBasic","TableWithActions","ColumnSorting","ColumnSortingWithLink","ColumnSortingClientSide"];export{K as ColumnSorting,D as ColumnSortingClientSide,G as ColumnSortingWithLink,X as Default,V as SelectionModeBasic,M as TableDensity,U as TableWithActions,Mt as __namedExportsOrder,Xt as default};
