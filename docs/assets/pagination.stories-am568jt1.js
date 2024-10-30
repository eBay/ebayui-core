import{a as ee}from"./utils-DWCsNc5l.js";import{t as te}from"./index-CCz6reEH.js";import{t as ae,r as re,b as ne,d as pe,p as B,e as V,c as ie}from"./registry-CyswyZw5.js";import{g as he}from"./index-D_ITmGQi.js";/* empty css             *//* empty css                    */import{_ as ge,a as j,b as be}from"./index-CMyqcF_H.js";import{_ as C}from"./render-tag-CLyPs9qZ.js";import{_ as P}from"./dynamic-tag-CXXozR29.js";import{i as se,r as $}from"./attr-tag-DphMQldM.js";import{_ as z}from"./of-fallback-C2gEBeKK.js";import{_ as ye}from"./index-B8uKe1l5.js";import{r as fe}from"./index-CbT4wDAv.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-Bq4u441m.js";/* empty css                    */import"./index-D57sw9Ri.js";/* empty css               *//* empty css             */import"./index-s6KmHAjI.js";import"./index-CUxP3sFe.js";import"./index-DILp6LbA.js";import"./index-D0VNda02.js";import"./index-Dvv9KJ1o.js";import"./index-BEDTdAEW.js";import"./index-DcOOfxWY.js";import"./index-DIPz__UB.js";/* empty css             */import"./index-CqxSgpEp.js";import"./index-DnXwn7Kz.js";import"./index-DbKxOVwg.js";import"./index-D7GlLQHj.js";import"./index-CZ_CdPGB.js";const xe=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,ve=9,O=5;class _e extends Marko.Component{handlePageNumberClick(e,t,a){this.emit("select",{el:a,originalEvent:t,value:a.innerText,index:e})}handleMenuPageNumber({originalEvent:e,el:t}){const a=parseInt(t==null?void 0:t.getAttribute("data-page-number"),10);this.emit("select",{el:t,originalEvent:e,value:(t==null?void 0:t.innerText)??"",index:a}),setTimeout(()=>this.getEl("pageItem[]",a).focus(),0)}handleNextPageClick(e,t){t.hasAttribute("aria-disabled")||this.emit("next",{el:t,originalEvent:e})}handlePreviousPageClick(e,t){t.hasAttribute("aria-disabled")||this.emit("previous",{el:t,originalEvent:e})}onCreate(){this.state={maxItems:O}}onMount(){this._calculateMaxItems(),this.subscribeTo(fe).on("resize",this._calculateMaxItems.bind(this))}getItemTag(e){return e.variant?e.variant==="link"?"a":"button":e.href?"a":"button"}_getVisibleRange(e){const{state:t,input:a}=this,{maxItems:s}=t,{variant:l}=a,c=l==="show-last"||l==="overflow",d=l==="overflow",v=l==="overflow",m=e.length-1,R=c?m:-1,u=d?1:-1;let b=!1,p=!1;const i=e.findIndex(E=>E.current),h=Math.floor(s/2);let n=i-h,o=i+h;return n<=0?(o=s-1,n=0):o>=m?(o=m,n=m-(s-1)):s%2===0&&n++,c&&(i+h>=m||o>=m?b=!0:i<=o-2?o-=2:(n+=1,o-=1)),d&&(i-h<=0?p=!0:i>=n-1?n+=2:(o-=1,n-=1)),{start:n,end:o,hideDots:b,dotsIndex:R,hasOverflow:v,leadingDotsIndex:u,hideLeadingDots:p}}_calculateMaxItems(){const{input:e,state:t}=this;if(!(e.items||[]).some(l=>!l.type))return;const s=this.getEl("root");if(!this._itemWidth){const{children:l}=this.getEl("items");for(let c=0;c<l.length;c++){const d=l[c];if(d.offsetWidth){this._itemWidth=d.offsetWidth;break}}}t.maxItems=Math.max(O,Math.min(ve,Math.floor(he(s)/this._itemWidth)-2))}}const L="LSuSknxc",I=ae(L);var N={disabled:!0},ke=["items"],M=["current","disabled"];function G(r,e){return(r<e.start||r>e.end)&&e.dotsIndex!==r&&e.leadingDotsIndex-1!==r}re.r(L,()=>I);const oe=_e;I._=ne(function(r,e,t,a,s,l){const{class:c,items:d=[],a11yCurrentText:v="Results Pagination - Page 1",a11yPreviousText:m="Previous page",a11yNextText:R="Next page"}=r,u=[...d];var b=u.length-1,p=u[0]&&u[0].type==="previous"&&u[0]||N,i=u[b]&&u[b].type==="next"&&u[b]||N,h=u.slice(p===N?0:1,i===N?void 0:b),n=a._getVisibleRange(h);e.be("nav",pe(B(r,ke),{role:"navigation",class:V(["pagination",c]),"aria-labelledby":t.elId("heading")}),"@root",a,null,4),e.be("span",{"aria-live":"polite",role:"status"},"0",a,null,0),e.be("h2",{id:t.elId("heading"),class:"clipped"},"1",a,null,1),e.t(v,a),e.ee(),e.ee(),P(e,a.getItemTag(p),()=>({...B(p,M),class:["pagination__previous",p.href?"icon-link":"icon-btn",p.class],"aria-disabled":p.disabled&&"true","aria-label":m,style:[p.style,{minWidth:40}]}),w=>{C(ge,{},w,t,"3")},null,null,t,"2",[["click","handlePreviousPageClick",!1]]),e.be("ol",{class:"pagination__items"},"@items",a,null,1);{let w=0;for(const y of z(h)){let _=w++;const g=`[${_}]`;if(n.dotsIndex===_||n.leadingDotsIndex===_){var o=n.hideDots,E=!1;n.leadingDotsIndex===_&&(E=!0,o=!!n.hideLeadingDots),e.be("li",{hidden:o},"4"+g,a,null,0),n.hasOverflow?(e.be("span",{class:V(["pagination__item",y.class]),role:"separator"},"5"+g,a,null,0),C(ye,se(()=>{let A=0;for(const W of z(h)){let T=A++;const me=`[${T+g}]`;var ce=E?T<n.start:T>n.end;G(T,n)&&ce&&$("items",{...B(W,M),type:a.getItemTag(W),dataPageNumber:T,renderBody:ue=>{P(ue,W.renderBody,null,null,null,null,t,"7"+me)}})}},{variant:"icon",transparent:!0,icon:j,collapseOnSelect:!0}),e,t,"6"+g,[["select","handleMenuPageNumber",!1]]),e.ee()):(e.be("span",{class:V(["pagination__item",y.class]),role:"separator"},"8"+g,a,null,0),C(j,{},e,t,"9"+g),e.ee()),e.ee()}e.be("li",{hidden:G(_,n)},"10"+g,a,null,0),P(e,a.getItemTag(y),()=>({...B(y,M),class:["pagination__item",y.class],"aria-current":y.current&&"page"}),A=>{P(A,y.renderBody,null,null,null,null,t,"11"+g)},null,null,t,"@pageItem[]",[["click","handlePageNumberClick",!1,[_]]]),e.ee()}}e.ee(),P(e,a.getItemTag(i),()=>({...B(i,M),class:["pagination__next",i.href?"icon-link":"icon-btn",i.class],"aria-disabled":i.disabled&&"true","aria-label":R,style:[i.style,{minWidth:40}]}),w=>{C(be,{},w,t,"13")},null,null,t,"12",[["click","handleNextPageClick",!1]]),e.ee()},{t:L},oe);I.Component=ie(oe,I._);const Z="zdb$DF_h",S=ae(Z),D=15;re.r(Z,()=>S);const le={onCreate(){this.state={current:0}},handlePrev(r){this.state.current=Math.max(this.state.current-1,0),this.emit("previous",r)},handleNext(r){this.state.current=Math.min(this.state.current+1,D),this.emit("next",r)},handleSelect({index:r},e){this.state.current=r,this.emit("select",e)}};S._=ne(function(r,e,t,a,s,l){C(I,se(()=>{$("items",{type:"previous",disabled:s.current===0});for(let c=(D-0)/1,d=0;d<=c;d++){const v=0+d*1;$("items",{current:v===s.current,renderBody:m=>{m.t(v,a)}})}$("items",{type:"next",disabled:s.current===D})},{a11yCurrentText:`Results Pagination - Page ${s.current}`,...r,items:void 0}),e,t,"0",[["next","handleNext",!1],["previous","handlePrev",!1],["select","handleSelect",!1]])},{t:Z},le);S.Component=ie(le,S._);const Ie=`static const SIZE = 15;

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
`,de=r=>({input:ee(r)}),nt={title:"navigation & disclosure/ebay-pagination",component:I,parameters:{docs:{description:{component:xe}}},argTypes:{a11yPreviousText:{control:{type:"text"},description:"a11y text for previous arrow button"},a11yNextText:{control:{type:"text"},description:"a11y text for next arrow button"},a11yCurrentText:{control:{type:"text"},description:"Description for the current page (e.g. Results of Page 1)"},variant:{control:{type:"select"},table:{defaultValue:{summary:"show-range"}},options:["show-last","show-range","overflow"],description:"Either `show-last`, or `show-range`. If `show-last` then will show the last page always and will put `…` between the last visible range and the last page. `…` and the last page will take up two items in the range. `…` will be hidden when the range to the last item is fully visible."},disabled:{name:"disabled",table:{category:"@item attribute tags"},description:"Previous/next button is disabled or not"},href:{name:"href",table:{category:"@item attribute tags"},description:"for link that looks like a menu-item; omitting the href will switch to a button"},item:{name:"@item",table:{category:"@attribute tags"}},"@item variant":{name:"variant",table:{category:"@item attribute tags"},description:'"button" or "link". Will force an item to be a link if href is omitted. Defaults to button. If not specified, tag type will still be controlled by `href`'},current:{name:"current",table:{category:"@item attribute tags"},description:"the current page"},type:{name:"type",table:{category:"@item attribute tags"},description:`"previous", "next" or "page"(default). To specify if the information entered is for the previous or next arrrow button or a page. If the type='previous  | next' isn't provided the previous/next arrow buttons will be taken as'disabled'`},onPrevious:{action:"on-previous",description:"Triggered on previous arrow button",table:{category:"Events",defaultValue:{summary:"{ originalEvent, el }"}}},onNext:{action:"on-next",description:"Triggered on next arrow button",table:{category:"Events",defaultValue:{summary:"{ originalEvent, el }"}}},onSelect:{action:"on-select",description:"Triggered on page selected clicked",table:{category:"Events",defaultValue:{summary:"{ originalEvent, el, value, index }"}}}}},f=de.bind({});f.args={a11yPreviousText:"previous",a11yNextText:"next",a11yCurrentText:"Current page",items:[{renderBody:"",type:"previous",href:"#",disabled:!0},{renderBody:"1",href:"#",current:!0},{renderBody:"2",href:"#"},{renderBody:"3",href:"#"},{renderBody:"4",href:"#"},{renderBody:"5",href:"#"},{renderBody:"6",href:"#"},{renderBody:"7",href:"#"},{renderBody:"8",href:"#"},{renderBody:"9",href:"#"},{renderBody:"",type:"next",href:"#",disabled:!0}]};f.parameters={docs:{source:{code:te("ebay-pagination",f.args)}}};const x=de.bind({});x.args={a11yPreviousText:"previous",a11yNextText:"next",a11yCurrentText:"Current page",items:[{renderBody:"",type:"previous",disabled:!0},{renderBody:"1",current:!0},{renderBody:"2"},{renderBody:"3"},{renderBody:"4"},{renderBody:"5"},{renderBody:"6"},{renderBody:"7"},{renderBody:"8"},{renderBody:"9"},{renderBody:"",type:"next",disabled:!0}]};x.parameters={docs:{source:{code:te("ebay-pagination",x.args)}}};const k=r=>({component:S,input:ee(r)});k.args={};k.parameters={docs:{source:{code:Ie}}};var H,F,U;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(U=(F=f.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var X,q,J;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(J=(q=x.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,Y;k.parameters={...k.parameters,docs:{...(K=k.parameters)==null?void 0:K.docs,source:{originalSource:`args => ({
  component: interactiveTemplate,
  input: addRenderBodies(args)
})`,...(Y=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};const it=["Links","Buttons","Interactive"];export{x as Buttons,k as Interactive,f as Links,it as __namedExportsOrder,nt as default};
