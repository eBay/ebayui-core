import{t as fe}from"./index-CCz6reEH.js";import{a as we}from"./utils-DWCsNc5l.js";import{t as A,r as C,b as T,d as F,p as z,e as _e,c as v}from"./registry-CtNeIPU8.js";import{g as Be}from"./index-CBkhZx_4.js";import{_ as Se,a as G}from"./index-B4e67UPm.js";import{_ as V}from"./dynamic-tag-HMZVE1pc.js";import{i as I,r as n}from"./attr-tag-DphMQldM.js";import{_ as Q}from"./of-fallback-C2gEBeKK.js";import{_ as We}from"./index-BFgLCJ45.js";import{_ as h}from"./render-tag-mtfFSHEK.js";import{r as xe}from"./index-CbT4wDAv.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-B6qYX52F.js";/* empty css             *//* empty css                    */import"./index-CX_T96nQ.js";/* empty css                    *//* empty css               *//* empty css             */import"./index-BwvkvsZu.js";import"./index-C241jnEo.js";import"./index-BL5tj0GS.js";import"./index-DW9U_Ppe.js";import"./index-DN2d98YU.js";import"./index-CGVSLK7z.js";import"./index-DfQ7uvCK.js";import"./index-BsOCplYC.js";/* empty css             */import"./index-B1-_MGqD.js";import"./index-DnXwn7Kz.js";import"./index-DXTRRJTV.js";import"./index-D7GlLQHj.js";import"./index-CxthRfyu.js";class ke extends Marko.Component{handleClick(e){this.emit("select",{originalEvent:e,el:e==null?void 0:e.target})}handleMenuBreadcrumb(e){this.emit("select",{originalEvent:e,el:e==null?void 0:e.el})}onCreate(){this.state={hiddenIndex:[]}}onMount(){this._calculateMaxItems(),this.subscribeTo(xe).on("resize",this._calculateMaxItems.bind(this))}onInput(e){this.cachedWidths=[];const r=[],t=[...e.items??[]];if((t||[]).length>4)for(let s=1;s<t.length-2;s++)r.push(s);this.state.hiddenIndex=r,this.newInput=!0}onUpdate(){this.newInput&&(this.newInput=!1,this._calculateMaxItems())}_getItemWidths(e){let r=this.cachedWidths;if(r.length!==e.children.length){r=[];for(let t=0;t<e.children.length;t++){const s=e.children[t];s.hasAttribute("hidden")?(s.removeAttribute("hidden"),r[t]=s.offsetWidth,s.setAttribute("hidden","")):r[t]=s.offsetWidth}this.cachedWidths=r}return r}_calculateMaxItems(){const{input:e,state:r}=this;if(![...e.items??[]].some(o=>!o.type))return;const s=this.getEl("items"),p=Be(s),a=s.children.length-1,b=this._getItemWidths(s),$=r.hiddenIndex.length>0;let u=1;const P=a-1,M=P-2;let c=b[0]+b[a];$&&(c+=b[u],u++);const y=[];for(let o=P;o>=u;o--)c+=b[o],(c>p||M>=o)&&y.unshift($?o-1:o);r.hiddenIndex=y}}const j="$$yltIvm",i=A(j);C.r(j,()=>i);const le=ke;i._=T(function(m,e,r,t,s,p){const{a11yHeadingText:a,a11yHeadingTag:b,a11yMenuButtonText:$,class:u,items:P,...M}=m,c=[...P||[]];var y=(c||[]).some(g=>g.href!=null);e.be("nav",F(z(M),{"aria-labelledby":r.elId("breadcrumbs-heading"),class:_e(["breadcrumbs","breadcrumb--overflow",u]),role:"navigation"}),"@root",t,null,4),V(e,b||"h2",()=>({id:r.elId("breadcrumbs-heading"),class:"clipped"}),g=>{g.t(a,t)},null,null,r,"0"),e.be("ul",null,"@items",t,null,0);{let g=0;for(const R of Q(c)){let H=g++;const d=`[${H}]`;var o=s.hiddenIndex.indexOf(H)>-1;s.hiddenIndex.length>0&&H===1&&(e.be("li",null,"1"+d,t,null,0),h(We,I(()=>{let O=0;for(const q of Q(s.hiddenIndex)){const ye=`[${O+++d}]`;n("items",{type:y?"a":"button",...z(c[q]),renderBody:ge=>{V(ge,c[q].renderBody,null,null,null,null,r,"3"+ye)}})}},{variant:"icon",transparent:!0,icon:Se,collapseOnSelect:!0,a11yText:$}),e,r,"2"+d,[["select","handleMenuBreadcrumb",!1]]),h(G,{},e,r,"4"+d),e.ee()),e.be("li",{hidden:o},"5"+d,t,null,0);{var J=H===c.length-1,Z=!R.href&&J;const O=y?"a":"button";e.be(O,F(z(R),{"aria-current":Z&&"location"}),"6"+d,t,null,4,{onclick:r.d("click",!Z&&"handleClick",!1)}),V(e,R.renderBody,null,null,null,null,r,"7"+d),e.ee(),J||h(G,{},e,r,"8"+d)}e.ee()}}e.ee(),e.ee()},{t:j},le);i.Component=v(le,i._);const K="uHtlikpm",S=A(K);C.r(K,()=>S);const he={};S._=T(function(m,e,r,t,s,p){h(i,I(()=>{n("items",{href:"http://www.ebay.com/",renderBody:a=>{a.t("eBay",t)}}),n("items",{href:"https://www.ebay.com/rpp/cell-phone-pda",renderBody:a=>{a.t("Cell Phones, Smart Watches & Accessories",t)}}),n("items",{href:"https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905",renderBody:a=>{a.t("Smart Watch Accessories",t)}}),n("items",{renderBody:a=>{a.t("Smart Watch Bands",t)}})},{a11yHeadingText:"Page navigation"}),e,r,"0")},{t:K,i:!0},he);S.Component=v(he,S._);const N="KmtnZmYk",W=A(N);C.r(N,()=>W);const pe={};W._=T(function(m,e,r,t,s,p){h(i,I(()=>{n("items",{href:"http://www.ebay.com/",renderBody:a=>{a.t("eBay",t)}}),n("items",{href:"https://www.ebay.com/rpp/cell-phone-pda",renderBody:a=>{a.t("Cell Phones, Smart Watches & Accessories",t)}}),n("items",{href:"https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905",renderBody:a=>{a.t("Smart Watch Accessories",t)}}),n("items",{href:"https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906",renderBody:a=>{a.t("Smart Watch Bands",t)}})},{a11yHeadingText:"Page navigation"}),e,r,"0")},{t:N,i:!0},pe);W.Component=v(pe,W._);const U="zuWYRwOd",x=A(U);C.r(U,()=>x);const be={};x._=T(function(m,e,r,t,s,p){h(i,I(()=>{n("items",{href:"http://www.ebay.com/",navsrc:"{}",_sp:"p2345.m909.l34",renderBody:a=>{a.t("eBay",t)}}),n("items",{href:"https://www.ebay.com/rpp/cell-phone-pda",navsrc:"{}",_sp:"p2345.m909.l34",renderBody:a=>{a.t("Cell Phones, Smart Watches & Accessories",t)}}),n("items",{href:"https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905",navsrc:"{}",_sp:"p2345.m909.l34",renderBody:a=>{a.t("Smart Watch Accessories",t)}}),n("items",{renderBody:a=>{a.t("Smart Watch Bands",t)}})},{a11yHeadingText:"Page navigation"}),e,r,"0")},{t:U,i:!0},be);x.Component=v(be,x._);const Y="AJRRKpbk",k=A(Y);C.r(Y,()=>k);const ue={};k._=T(function(m,e,r,t,s,p){h(i,I(()=>{n("items",{renderBody:a=>{a.t("eBay",t)}}),n("items",{renderBody:a=>{a.t("Cell Phones, Smart Watches & Accessories",t)}}),n("items",{renderBody:a=>{a.t("Smart Watch Accessories",t)}}),n("items",{renderBody:a=>{a.t("Smart Watch Bands",t)}})},{a11yHeadingText:"Page navigation"}),e,r,"0",[["select","emit",!1,["select"]]])},{t:Y},ue);k.Component=v(ue,k._);const Ae=`<ebay-breadcrumbs a11yHeadingText="Page navigation" >
    <@item href="http://www.ebay.com/">eBay</@item>
    <@item href="https://www.ebay.com/rpp/cell-phone-pda">Cell Phones, Smart Watches & Accessories</@item>
    <@item href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905">Smart Watch Accessories</@item>
    <@item>Smart Watch Bands</@item>
</ebay-breadcrumbs>
`,Ce=`<ebay-breadcrumbs a11yHeadingText="Page navigation">
    <@item href="http://www.ebay.com/">eBay</@item>
    <@item href="https://www.ebay.com/rpp/cell-phone-pda">Cell Phones, Smart Watches & Accessories</@item>
    <@item href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905">Smart Watch Accessories</@item>
    <@item href="https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906">Smart Watch Bands</@item>
</ebay-breadcrumbs>
`,Te=`<ebay-breadcrumbs a11yHeadingText="Page navigation">
    <@item href="http://www.ebay.com/" navsrc="{}" _sp="p2345.m909.l34">eBay</@item>
    <@item href="https://www.ebay.com/rpp/cell-phone-pda" navsrc="{}" _sp="p2345.m909.l34">Cell Phones, Smart Watches & Accessories</@item>
    <@item href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905" navsrc="{}" _sp="p2345.m909.l34">Smart Watch Accessories</@item>
    <@item>Smart Watch Bands</@item>
</ebay-breadcrumbs>
`,ve=`class {}
<ebay-breadcrumbs a11yHeadingText="Page navigation" on-select('emit', 'select')>
    <@item>eBay</@item>
    <@item>Cell Phones, Smart Watches & Accessories</@item>
    <@item>Smart Watch Accessories</@item>
    <@item>Smart Watch Bands</@item>
</ebay-breadcrumbs>
`,Ie=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-breadcrumbs
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.2.0
    </span>
</h1>

**Note**: If you want to have client side or ajax based navigation then you should omit the href attribute on each item. This will cause each item to be <button> instead of an <a>. Alternatively you can manually preventDefault the provided originalEvent on the select event.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/navigation-disclosure-ebay-breadcrumbs)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/navigation-disclosure-ebay-breadcrumbs)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-breadcrumbs/examples)
`,$e=m=>({input:we(m)}),ht={title:"navigation & disclosure/ebay-breadcrumbs",component:i,parameters:{docs:{description:{component:Ie}}},argTypes:{a11yHeadingText:{control:{type:"text"},description:"heading for breadcrumb which will be clipped"},a11yHeadingTag:{control:{type:"text"},table:{defaultValue:{summary:"h2"}},description:"heading tag for breadcrumb "},a11yMenuButtonText:{control:{type:"text"},description:"a11y text for the collapsed menu button"},href:{name:"href",table:{category:"@item attribute tags"},description:"anchor href; omitting the href will switch to a button"},item:{name:"@item",table:{category:"@attribute tags"}},onSelect:{action:"on-select",description:"Triggered on breadcrumb selected clicked",table:{category:"Events",defaultValue:{summary:"{ originalEvent, el }"}}}}},l=$e.bind({});l.args={a11yHeadingText:"Current pages",a11yMenuButtonText:"menu",items:[{href:"http://www.ebay.com/",renderBody:"eBay"},{href:"https://www.ebay.com/rpp/cell-phone-pda",renderBody:"Cell Phones, Smart Watches & Accessories"},{href:"https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905",renderBody:"Smart Watch Accessories"},{href:"https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906",renderBody:"Smart Watch Bands"}]};l.parameters={docs:{source:{code:fe("ebay-breadcrumbs",l.args)}}};const f=()=>({component:S});f.parameters={docs:{source:{code:Ae}}};const w=()=>({component:W});w.parameters={docs:{source:{code:Ce}}};const _=()=>({component:x});_.parameters={docs:{source:{code:Te}}};const B=()=>({component:k});B.parameters={docs:{source:{code:ve}}};var X,L,E;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(E=(L=l.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var D,ee,te;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`() => ({
  component: breadcrumb2
})`,...(te=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,re,se;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`() => ({
  component: breadcrumb3
})`,...(se=(re=w.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ne,oe,ce;_.parameters={..._.parameters,docs:{...(ne=_.parameters)==null?void 0:ne.docs,source:{originalSource:`() => ({
  component: breadcrumb4
})`,...(ce=(oe=_.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var ie,me,de;B.parameters={...B.parameters,docs:{...(ie=B.parameters)==null?void 0:ie.docs,source:{originalSource:`() => ({
  component: breadcrumb5
})`,...(de=(me=B.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};const pt=["heading","lastPageCurrent","lastPageParent","pageCustomAttribute","buttons"];export{pt as __namedExportsOrder,B as buttons,ht as default,l as heading,f as lastPageCurrent,w as lastPageParent,_ as pageCustomAttribute};