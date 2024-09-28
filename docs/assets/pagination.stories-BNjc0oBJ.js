import{a as Y}from"./utils-DWCsNc5l.js";import{t as ee}from"./index-CCz6reEH.js";import{t as te,r as ae,b as re,d as ue,p as B,e as W,c as ne}from"./registry-CtNeIPU8.js";import{g as pe}from"./index-CBkhZx_4.js";/* empty css             *//* empty css                    */import{_ as he,a as Z,b as ge}from"./index-CmajDdKE.js";import{_ as C}from"./render-tag-mtfFSHEK.js";import{_ as P}from"./dynamic-tag-HMZVE1pc.js";import{i as ie,r as M}from"./attr-tag-DphMQldM.js";import{_ as j}from"./of-fallback-C2gEBeKK.js";import{_ as be}from"./index-BFgLCJ45.js";import{r as ye}from"./index-CbT4wDAv.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-B6qYX52F.js";/* empty css                    */import"./index-CX_T96nQ.js";/* empty css               *//* empty css             */import"./index-BwvkvsZu.js";import"./index-C241jnEo.js";import"./index-BL5tj0GS.js";import"./index-DW9U_Ppe.js";import"./index-DN2d98YU.js";import"./index-CGVSLK7z.js";import"./index-DfQ7uvCK.js";import"./index-BsOCplYC.js";/* empty css             */import"./index-B1-_MGqD.js";import"./index-DnXwn7Kz.js";import"./index-DXTRRJTV.js";import"./index-D7GlLQHj.js";import"./index-CxthRfyu.js";const fe=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,xe=9,z=5;class ve extends Marko.Component{handlePageNumberClick(e,t,a){this.emit("select",{el:a,originalEvent:t,value:a.innerText,index:e})}handleMenuPageNumber({originalEvent:e,el:t}){const a=parseInt(t==null?void 0:t.getAttribute("data-page-number"),10);this.emit("select",{el:t,originalEvent:e,value:(t==null?void 0:t.innerText)??"",index:a}),setTimeout(()=>this.getEl("pageItem[]",a).focus(),0)}handleNextPageClick(e,t){t.hasAttribute("aria-disabled")||this.emit("next",{el:t,originalEvent:e})}handlePreviousPageClick(e,t){t.hasAttribute("aria-disabled")||this.emit("previous",{el:t,originalEvent:e})}onCreate(){this.state={maxItems:z}}onMount(){this._calculateMaxItems(),this.subscribeTo(ye).on("resize",this._calculateMaxItems.bind(this))}getItemTag(e){return e.variant?e.variant==="link"?"a":"button":e.href?"a":"button"}_getVisibleRange(e){const{state:t,input:a}=this,{maxItems:s}=t,{variant:d}=a,c=d==="show-last"||d==="overflow",n=d==="overflow",v=d==="overflow",m=e.length-1,$=c?m:-1,_=n?1:-1;let u=!1,p=!1;const h=e.findIndex(b=>b.current),i=Math.floor(s/2);let o=h-i,l=h+i;return o<=0?(l=s-1,o=0):l>=m?(l=m,o=m-(s-1)):s%2===0&&o++,c&&(h+i>=m||l>=m?u=!0:h<=l-2?l-=2:(o+=1,l-=1)),n&&(h-i<=0?p=!0:h>=o-1?o+=2:(l-=1,o-=1)),{start:o,end:l,hideDots:u,dotsIndex:$,hasOverflow:v,leadingDotsIndex:_,hideLeadingDots:p}}_calculateMaxItems(){const{input:e,state:t}=this;if(!(e.items||[]).some(d=>!d.type))return;const s=this.getEl("root");if(!this._itemWidth){const{children:d}=this.getEl("items");for(let c=0;c<d.length;c++){const n=d[c];if(n.offsetWidth){this._itemWidth=n.offsetWidth;break}}}t.maxItems=Math.max(z,Math.min(xe,Math.floor(pe(s)/this._itemWidth)-2))}}const D="LSuSknxc",w=te(D);var E={disabled:!0},_e=["items"],N=["current","disabled"];function O(r,e){return(r<e.start||r>e.end)&&e.dotsIndex!==r&&e.leadingDotsIndex-1!==r}ae.r(D,()=>w);const se=ve;w._=re(function(r,e,t,a,s,d){const{class:c,items:n=[],a11yCurrentText:v="Results Pagination - Page 1",a11yPreviousText:m="Previous page",a11yNextText:$="Next page"}=r;var _=n.length-1,u=n[0]&&n[0].type==="previous"&&n[0]||E,p=n[_]&&n[_].type==="next"&&n[_]||E,h=n.slice(u===E?0:1,p===E?void 0:_),i=a._getVisibleRange(h);e.be("nav",ue(B(r,_e),{role:"navigation",class:W(["pagination",c]),"aria-labelledby":t.elId("heading")}),"@root",a,null,4),e.be("span",{"aria-live":"polite",role:"status"},"0",a,null,0),e.be("h2",{id:t.elId("heading"),class:"clipped"},"1",a,null,1),e.t(v,a),e.ee(),e.ee(),P(e,a.getItemTag(u),()=>({...B(u,N),class:["pagination__previous",u.href?"icon-link":"icon-btn",u.class],"aria-disabled":u.disabled&&"true","aria-label":m,style:[u.style,{minWidth:40}]}),b=>{C(he,{},b,t,"3")},null,null,t,"2",[["click","handlePreviousPageClick",!1]]),e.be("ol",{class:"pagination__items"},"@items",a,null,1);{let b=0;for(const y of j(h)){let k=b++;const g=`[${k}]`;if(i.dotsIndex===k||i.leadingDotsIndex===k){var o=i.hideDots,l=!1;i.leadingDotsIndex===k&&(l=!0,o=!!i.hideLeadingDots),e.be("li",{hidden:o},"4"+g,a,null,0),i.hasOverflow?(e.be("span",{class:W(["pagination__item",y.class]),role:"separator"},"5"+g,a,null,0),C(be,ie(()=>{let R=0;for(const A of j(h)){let T=R++;const ce=`[${T+g}]`;var de=l?T<i.start:T>i.end;O(T,i)&&de&&M("items",{...B(A,N),type:a.getItemTag(A),dataPageNumber:T,renderBody:me=>{P(me,A.renderBody,null,null,null,null,t,"7"+ce)}})}},{variant:"icon",transparent:!0,icon:Z,collapseOnSelect:!0}),e,t,"6"+g,[["select","handleMenuPageNumber",!1]]),e.ee()):(e.be("span",{class:W(["pagination__item",y.class]),role:"separator"},"8"+g,a,null,0),C(Z,{},e,t,"9"+g),e.ee()),e.ee()}e.be("li",{hidden:O(k,i)},"10"+g,a,null,0),P(e,a.getItemTag(y),()=>({...B(y,N),class:["pagination__item",y.class],"aria-current":y.current&&"page"}),R=>{P(R,y.renderBody,null,null,null,null,t,"11"+g)},null,null,t,"@pageItem[]",[["click","handlePageNumberClick",!1,[k]]]),e.ee()}}e.ee(),P(e,a.getItemTag(p),()=>({...B(p,N),class:["pagination__next",p.href?"icon-link":"icon-btn",p.class],"aria-disabled":p.disabled&&"true","aria-label":$,style:[p.style,{minWidth:40}]}),b=>{C(ge,{},b,t,"13")},null,null,t,"12",[["click","handleNextPageClick",!1]]),e.ee()},{t:D},se);w.Component=ne(se,w._);const L="zdb$DF_h",S=te(L),V=15;ae.r(L,()=>S);const oe={onCreate(){this.state={current:0}},handlePrev(r){this.state.current=Math.max(this.state.current-1,0),this.emit("previous",r)},handleNext(r){this.state.current=Math.min(this.state.current+1,V),this.emit("next",r)},handleSelect({index:r},e){this.state.current=r,this.emit("select",e)}};S._=re(function(r,e,t,a,s,d){C(w,ie(()=>{M("items",{type:"previous",disabled:s.current===0});for(let c=(V-0)/1,n=0;n<=c;n++){const v=0+n*1;M("items",{current:v===s.current,renderBody:m=>{m.t(v,a)}})}M("items",{type:"next",disabled:s.current===V})},{a11yCurrentText:`Results Pagination - Page ${s.current}`,...r,items:void 0}),e,t,"0",[["next","handleNext",!1],["previous","handlePrev",!1],["select","handleSelect",!1]])},{t:L},oe);S.Component=ne(oe,S._);const ke=`static const SIZE = 15;

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
`,le=r=>({input:Y(r)}),rt={title:"navigation & disclosure/ebay-pagination",component:w,parameters:{docs:{description:{component:fe}}},argTypes:{a11yPreviousText:{control:{type:"text"},description:"a11y text for previous arrow button"},a11yNextText:{control:{type:"text"},description:"a11y text for next arrow button"},a11yCurrentText:{control:{type:"text"},description:"Description for the current page (e.g. Results of Page 1)"},variant:{control:{type:"select"},table:{defaultValue:{summary:"show-range"}},options:["show-last","show-range","overflow"],description:"Either `show-last`, or `show-range`. If `show-last` then will show the last page always and will put `…` between the last visible range and the last page. `…` and the last page will take up two items in the range. `…` will be hidden when the range to the last item is fully visible."},disabled:{name:"disabled",table:{category:"@item attribute tags"},description:"Previous/next button is disabled or not"},href:{name:"href",table:{category:"@item attribute tags"},description:"for link that looks like a menu-item; omitting the href will switch to a button"},item:{name:"@item",table:{category:"@attribute tags"}},"@item variant":{name:"variant",table:{category:"@item attribute tags"},description:'"button" or "link". Will force an item to be a link if href is omitted. Defaults to button. If not specified, tag type will still be controlled by `href`'},current:{name:"current",table:{category:"@item attribute tags"},description:"the current page"},type:{name:"type",table:{category:"@item attribute tags"},description:`"previous", "next" or "page"(default). To specify if the information entered is for the previous or next arrrow button or a page. If the type='previous  | next' isn't provided the previous/next arrow buttons will be taken as'disabled'`},onPrevious:{action:"on-previous",description:"Triggered on previous arrow button",table:{category:"Events",defaultValue:{summary:"{ originalEvent, el }"}}},onNext:{action:"on-next",description:"Triggered on next arrow button",table:{category:"Events",defaultValue:{summary:"{ originalEvent, el }"}}},onSelect:{action:"on-select",description:"Triggered on page selected clicked",table:{category:"Events",defaultValue:{summary:"{ originalEvent, el, value, index }"}}}}},f=le.bind({});f.args={a11yPreviousText:"previous",a11yNextText:"next",a11yCurrentText:"Current page",items:[{renderBody:"",type:"previous",href:"#",disabled:!0},{renderBody:"1",href:"#",current:!0},{renderBody:"2",href:"#"},{renderBody:"3",href:"#"},{renderBody:"4",href:"#"},{renderBody:"5",href:"#"},{renderBody:"6",href:"#"},{renderBody:"7",href:"#"},{renderBody:"8",href:"#"},{renderBody:"9",href:"#"},{renderBody:"",type:"next",href:"#",disabled:!0}]};f.parameters={docs:{source:{code:ee("ebay-pagination",f.args)}}};const x=le.bind({});x.args={a11yPreviousText:"previous",a11yNextText:"next",a11yCurrentText:"Current page",items:[{renderBody:"",type:"previous",disabled:!0},{renderBody:"1",current:!0},{renderBody:"2"},{renderBody:"3"},{renderBody:"4"},{renderBody:"5"},{renderBody:"6"},{renderBody:"7"},{renderBody:"8"},{renderBody:"9"},{renderBody:"",type:"next",disabled:!0}]};x.parameters={docs:{source:{code:ee("ebay-pagination",x.args)}}};const I=r=>({component:S,input:Y(r)});I.args={};I.parameters={docs:{source:{code:ke}}};var G,H,F;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(F=(H=f.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var U,X,q;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(q=(X=x.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var J,K,Q;I.parameters={...I.parameters,docs:{...(J=I.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
  component: interactiveTemplate,
  input: addRenderBodies(args)
})`,...(Q=(K=I.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const nt=["Links","Buttons","Interactive"];export{x as Buttons,I as Interactive,f as Links,nt as __namedExportsOrder,rt as default};
