import{a as K}from"./utils-DWCsNc5l.js";import{t as Q}from"./index-CCz6reEH.js";import{t as Y,r as ee,b as te,e as ue,p as T,f as W,d as ae}from"./registry-B-klnak9.js";import{g as me}from"./index-C0MCsjbD.js";/* empty css             *//* empty css                    */import{_ as pe,a as Z,b as he}from"./index-DytIHQhe.js";import{_ as P}from"./render-tag-BBOJ9dEX.js";import{_ as B}from"./dynamic-tag-DQCvkDdb.js";import{i as re,r as $}from"./attr-tag-DphMQldM.js";import{_ as ge}from"./index-Dk4iJuw6.js";import{r as be}from"./index-blmbJU0z.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-C98gAawF.js";/* empty css                    */import"./index-Bs-h47tU.js";/* empty css               *//* empty css             */import"./index-B6IacUrT.js";import"./index-BVSy80fu.js";import"./index-CAVmWk6z.js";import"./index-CIM_zO8g.js";import"./index-ClSYtjPE.js";import"./index-D9HHMyPY.js";import"./index-BJBnaEG2.js";import"./index-NxVnpuOT.js";/* empty css             */import"./index-BHuZwrkj.js";import"./index-DYoOQ_vw.js";import"./index-D7B88Psz.js";import"./index-D7GlLQHj.js";import"./index--35j0Bzx.js";const ye=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-pagination
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

The \`<ebay-pagination>\` is a tag used to create a pagination navigation. It will display up to 9 page links.

**Note:** If you want to have client side or ajax based navigation then you should omit the \`href\` attribute on each item. This will cause each item to be \`<button>\` instead of an \`<a>\`.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/navigation-disclosure-ebay-pagination)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/navigation-disclosure-ebay-pagination)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-pagination/examples)
`,fe=9,xe=5;class ve extends Marko.Component{handlePageNumberClick(e,t,a){this.emit("select",{el:a,originalEvent:t,value:a.innerText,index:e})}handleMenuPageNumber({originalEvent:e,el:t}){const a=parseInt(t==null?void 0:t.getAttribute("data-page-number"),10);this.emit("select",{el:t,originalEvent:e,value:(t==null?void 0:t.innerText)??"",index:a}),setTimeout(()=>this.getEl("pageItem[]",a).focus(),0)}handleNextPageClick(e,t){t.hasAttribute("aria-disabled")||this.emit("next",{el:t,originalEvent:e})}handlePreviousPageClick(e,t){t.hasAttribute("aria-disabled")||this.emit("previous",{el:t,originalEvent:e})}onCreate(){this.state={maxItems:0}}onMount(){this._calculateMaxItems(),this.subscribeTo(be).on("resize",this._calculateMaxItems.bind(this))}getItemTag(e){return e.variant?e.variant==="link"?"a":"button":e.href?"a":"button"}_getVisibleRange(e){const{state:t,input:a}=this,{maxItems:s}=t,{variant:p}=a,h=p==="show-last"||p==="overflow",n=p==="overflow",b=p==="overflow",d=e.length-1,E=h?d:-1,y=n?1:-1;let c=!1,u=!1;if(!s)return{start:0,end:d,hideDots:!0,dotsIndex:E,leadingDotsIndex:y,hasOverflow:b};const m=e.findIndex(f=>f.current),i=Math.floor(s/2);let o=m-i,l=m+i;return o<=0?(l=s-1,o=0):l>=d?(l=d,o=d-(s-1)):s%2===0&&o++,h&&(m+i>=d||l>=d?c=!0:m<=l-2?l-=2:(o+=1,l-=1)),n&&(m-i<=0?u=!0:m>=o-1?o+=2:(l-=1,o-=1)),{start:o,end:l,hideDots:c,dotsIndex:E,hasOverflow:b,leadingDotsIndex:y,hideLeadingDots:u}}_calculateMaxItems(){const{input:e,state:t}=this;if(!(e.items||[]).some(n=>!n.type))return;const s=this.getEl("items"),p=this.getEl("root"),h=this._itemWidth||(this._itemWidth=s.firstElementChild.offsetWidth);t.maxItems=Math.max(xe,Math.min(fe,Math.floor(me(p)/h)-2))}}const V="LSuSknxc",C=Y(V),ne=C;var M={disabled:!0},_e=["items"],N=["current","disabled"];function j(r,e){return(r<e.start||r>e.end)&&e.dotsIndex!==r&&e.leadingDotsIndex-1!==r}ee.r(V,()=>C);const ie=ve;C._=te(function(r,e,t,a,s,p){const{class:h,items:n=[],a11yCurrentText:b="Results Pagination - Page 1",a11yPreviousText:d="Previous page",a11yNextText:E="Next page"}=r;var y=n.length-1,c=n[0]&&n[0].type==="previous"&&n[0]||M,u=n[y]&&n[y].type==="next"&&n[y]||M,m=n.slice(c===M?0:1,u===M?void 0:y),i=a._getVisibleRange(m);e.be("nav",ue(T(r,_e),{role:"navigation",class:W(["pagination",h]),"aria-labelledby":t.elId("heading")}),"@root",a,null,4),e.be("span",{"aria-live":"polite",role:"status"},"0",a,null,0),e.be("h2",{id:t.elId("heading"),class:"clipped"},"1",a,null,1),e.t(b,a),e.ee(),e.ee(),B(e,a.getItemTag(c),()=>({...T(c,N),class:["pagination__previous",c.href?"icon-link":"icon-btn",c.class],"aria-disabled":c.disabled&&"true","aria-label":d,style:[c.style,{minWidth:40}]}),f=>{P(pe,{},f,t,"3")},null,null,t,"2",[["click","handlePreviousPageClick",!1]]),e.be("ol",{class:"pagination__items"},"@items",a,null,1);{let f=0;for(const x of m||[]){let I=f++;const g=`[${I}]`;if(i.dotsIndex===I||i.leadingDotsIndex===I){var o=i.hideDots,l=!1;i.leadingDotsIndex===I&&(l=!0,o=!!i.hideLeadingDots),e.be("li",{hidden:o},"4"+g,a,null,0),i.hasOverflow?(e.be("span",{class:W(["pagination__item",x.class]),role:"separator"},"5"+g,a,null,0),P(ge,re(()=>{let R=0;for(const A of m||[]){let w=R++;const de=`[${w+g}]`;var le=l?w<i.start:w>i.end;j(w,i)&&le&&$("items",{...T(A,N),type:a.getItemTag(A),dataPageNumber:w,renderBody:ce=>{B(ce,A.renderBody,null,null,null,null,t,"7"+de)}})}},{variant:"icon",transparent:!0,icon:Z,collapseOnSelect:!0}),e,t,"6"+g,[["select","handleMenuPageNumber",!1]]),e.ee()):(e.be("span",{class:W(["pagination__item",x.class]),role:"separator"},"8"+g,a,null,0),P(Z,{},e,t,"9"+g),e.ee()),e.ee()}e.be("li",{hidden:j(I,i)},"10"+g,a,null,0),B(e,a.getItemTag(x),()=>({...T(x,N),class:["pagination__item",x.class],"aria-current":x.current&&"page"}),R=>{B(R,x.renderBody,null,null,null,null,t,"11"+g)},null,null,t,"@pageItem[]",[["click","handlePageNumberClick",!1,[I]]]),e.ee()}}e.ee(),B(e,a.getItemTag(u),()=>({...T(u,N),class:["pagination__next",u.href?"icon-link":"icon-btn",u.class],"aria-disabled":u.disabled&&"true","aria-label":E,style:[u.style,{minWidth:40}]}),f=>{P(he,{},f,t,"13")},null,null,t,"12",[["click","handleNextPageClick",!1]]),e.ee()},{t:V},ie);C.Component=ae(ie,C._);const L="zdb$DF_h",S=Y(L),D=15;ee.r(L,()=>S);const se={onCreate(){this.state={current:0}},handlePrev(r){this.state.current=Math.max(this.state.current-1,0),this.emit("previous",r)},handleNext(r){this.state.current=Math.min(this.state.current+1,D),this.emit("next",r)},handleSelect({index:r},e){this.state.current=r,this.emit("select",e)}};S._=te(function(r,e,t,a,s,p){P(ne,re(()=>{$("items",{type:"previous",disabled:s.current===0});for(let h=(D-0)/1,n=0;n<=h;n++){const b=0+n*1;$("items",{current:b===s.current,renderBody:d=>{d.t(b,a)}})}$("items",{type:"next",disabled:s.current===D})},{a11yCurrentText:`Results Pagination - Page ${s.current}`,...r,items:void 0}),e,t,"0",[["next","handleNext",!1],["previous","handlePrev",!1],["select","handleSelect",!1]])},{t:L},se);S.Component=ae(se,S._);const Ie=`static const SIZE = 15;

class {
    declare state: {
        current: number;
    };

    onCreate() {
        this.state = { current: 0 };
    }
    handlePrev(e) {
        this.state.current = Math.max(this.state.current - 1, 0);
        this.emit("previous", e);
    }
    handleNext(e) {
        this.state.current = Math.min(this.state.current + 1, SIZE);
        this.emit("next", e);
    }
    handleSelect({ index }, e) {
        this.state.current = index;
        this.emit("select", e);
    }
}

<ebay-pagination
    on-next("handleNext")
    on-previous("handlePrev")
    on-select("handleSelect")
    a11yCurrentText=\`Results Pagination - Page \${state.current}\`
    ...input
    >
    <@item type="previous" as any disabled=(state.current === 0)/>
    <for|i| from=0 to=SIZE>
        <@item current=(i === state.current)>\${i}</@item>
    </for>
    <@item type="next" disabled=(state.current === SIZE)/>
</ebay-pagination>
`,oe=r=>({input:K(r)}),at={title:"navigation & disclosure/ebay-pagination",component:ne,parameters:{docs:{description:{component:ye}}},argTypes:{a11yPreviousText:{control:{type:"text"},description:"a11y text for previous arrow button"},a11yNextText:{control:{type:"text"},description:"a11y text for next arrow button"},a11yCurrentText:{control:{type:"text"},description:"Description for the current page (e.g. Results of Page 1)"},variant:{control:{type:"select"},table:{defaultValue:{summary:"show-range"}},options:["show-last","show-range","overflow"],description:"Either `show-last`, or `show-range`. If `show-last` then will show the last page always and will put `…` between the last visible range and the last page. `…` and the last page will take up two items in the range. `…` will be hidden when the range to the last item is fully visible."},disabled:{name:"disabled",table:{category:"@item attribute tags"},description:"Previous/next button is disabled or not"},href:{name:"href",table:{category:"@item attribute tags"},description:"for link that looks like a menu-item; omitting the href will switch to a button"},item:{name:"@item",table:{category:"@attribute tags"}},"@item variant":{name:"variant",table:{category:"@item attribute tags"},description:'"button" or "link". Will force an item to be a link if href is omitted. Defaults to button. If not specified, tag type will still be controlled by `href`'},current:{name:"current",table:{category:"@item attribute tags"},description:"the current page"},type:{name:"type",table:{category:"@item attribute tags"},description:`"previous", "next" or "page"(default). To specify if the information entered is for the previous or next arrrow button or a page. If the type='previous  | next' isn't provided the previous/next arrow buttons will be taken as'disabled'`},onPrevious:{action:"on-previous",description:"Triggered on previous arrow button",table:{category:"Events",defaultValue:{summary:"{ originalEvent, el }"}}},onNext:{action:"on-next",description:"Triggered on next arrow button",table:{category:"Events",defaultValue:{summary:"{ originalEvent, el }"}}},onSelect:{action:"on-select",description:"Triggered on page selected clicked",table:{category:"Events",defaultValue:{summary:"{ originalEvent, el, value, index }"}}}}},v=oe.bind({});v.args={a11yPreviousText:"previous",a11yNextText:"next",a11yCurrentText:"Current page",items:[{renderBody:"",type:"previous",href:"#",disabled:!0},{renderBody:"1",href:"#",current:!0},{renderBody:"2",href:"#"},{renderBody:"3",href:"#"},{renderBody:"4",href:"#"},{renderBody:"5",href:"#"},{renderBody:"6",href:"#"},{renderBody:"7",href:"#"},{renderBody:"8",href:"#"},{renderBody:"9",href:"#"},{renderBody:"",type:"next",href:"#",disabled:!0}]};v.parameters={docs:{source:{code:Q("ebay-pagination",v.args)}}};const _=oe.bind({});_.args={a11yPreviousText:"previous",a11yNextText:"next",a11yCurrentText:"Current page",items:[{renderBody:"",type:"previous",disabled:!0},{renderBody:"1",current:!0},{renderBody:"2"},{renderBody:"3"},{renderBody:"4"},{renderBody:"5"},{renderBody:"6"},{renderBody:"7"},{renderBody:"8"},{renderBody:"9"},{renderBody:"",type:"next",disabled:!0}]};_.parameters={docs:{source:{code:Q("ebay-pagination",_.args)}}};const k=r=>({component:S,input:K(r)});k.args={};k.parameters={docs:{source:{code:Ie}}};var z,O,F;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(F=(O=v.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var G,H,U;_.parameters={..._.parameters,docs:{...(G=_.parameters)==null?void 0:G.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(U=(H=_.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var X,q,J;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`args => ({
  component: interactiveTemplate,
  input: addRenderBodies(args)
})`,...(J=(q=k.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};const rt=["Links","Buttons","Interactive"];export{_ as Buttons,k as Interactive,v as Links,rt as __namedExportsOrder,at as default};
