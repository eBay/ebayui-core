import{a as Q}from"./utils-NX-dnf4r.js";import{t as Y}from"./index-iqhZMf16.js";import{t as ee,r as te,b as ae,f as ue,p as B,g as L,d as re}from"./registry-zqrnEiYK.js";import{_ as me,a as j,b as pe}from"./index-0REQdKOV.js";import{g as he}from"./index-ekEOByf5.js";/* empty css             *//* empty css                    */import{_ as C}from"./render-tag-_0PNNh6Y.js";import{_ as P}from"./dynamic-tag-4Gch17f1.js";import{_ as $}from"./self-iterator-6yU_KG2T.js";import{_ as ge}from"./index-WZOdYf_S.js";import{r as be}from"./index-XjwwBzg5.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";import"./index-dCAZr4YS.js";import"./index-7jFeXTCh.js";/* empty css               *//* empty css             */import"./index-4Ud0-PVY.js";import"./index-tjucyUeZ.js";import"./index-XUhq6uHT.js";import"./index-q7KQv1ry.js";import"./index-i1smj9EI.js";/* empty css                    */import"./index-WjSr7Aa1.js";import"./index--HiXohkr.js";import"./index-XBFm0t4a.js";/* empty css             */import"./index-Zo2k51hY.js";import"./index-j-rYSiF3.js";import"./index-l3FQEXUN.js";import"./index-QGVtTfuc.js";import"./index-ERL0bCNR.js";const ye=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,fe=9,xe=5;class ve extends Marko.Component{handlePageNumberClick(e,t,a){this.emit("select",{el:a,originalEvent:t,value:a.innerText,index:e})}handleMenuPageNumber({originalEvent:e,el:t}){const a=parseInt(t==null?void 0:t.getAttribute("data-page-number"),10);this.emit("select",{el:t,originalEvent:e,value:(t==null?void 0:t.innerText)??"",index:a}),setTimeout(()=>this.getEl("pageItem[]",a).focus(),0)}handleNextPageClick(e,t){t.hasAttribute("aria-disabled")||this.emit("next",{el:t,originalEvent:e})}handlePreviousPageClick(e,t){t.hasAttribute("aria-disabled")||this.emit("previous",{el:t,originalEvent:e})}onCreate(){this.state={maxItems:0}}onMount(){this._calculateMaxItems(),this.subscribeTo(be).on("resize",this._calculateMaxItems.bind(this))}getItemTag(e){return e.variant?e.variant==="link"?"a":"button":e.href?"a":"button"}_getVisibleRange(e){const{state:t,input:a}=this,{maxItems:s}=t,{variant:h}=a,c=h==="show-last"||h==="overflow",n=h==="overflow",g=h==="overflow",o=e.length-1,_=c?o:-1,y=n?1:-1;let u=!1,m=!1;if(!s)return{start:0,end:o,hideDots:!0,dotsIndex:_,leadingDotsIndex:y,hasOverflow:g};const p=e.findIndex(A=>A.current),i=Math.floor(s/2);let l=p-i,d=p+i;return l<=0?(d=s-1,l=0):d>=o?(d=o,l=o-(s-1)):s%2===0&&l++,c&&(p+i>=o||d>=o?u=!0:p<=d-2?d-=2:(l+=1,d-=1)),n&&(p-i<=0?m=!0:p>=l-1?l+=2:(d-=1,l-=1)),{start:l,end:d,hideDots:u,dotsIndex:_,hasOverflow:g,leadingDotsIndex:y,hideLeadingDots:m}}_calculateMaxItems(){const{input:e,state:t}=this;if(!(e.items||[]).some(n=>!n.type))return;const s=this.getEl("items"),h=this.getEl("root"),c=this._itemWidth||(this._itemWidth=s.firstElementChild.offsetWidth);t.maxItems=Math.max(xe,Math.min(fe,Math.floor(he(h)/c)-2))}}const D="L1rRwgnS",S=ee(D),ne=S;var N={disabled:!0},_e=["items"],R=["current","disabled"];function O(r,e){return(r<e.start||r>e.end)&&e.dotsIndex!==r&&e.leadingDotsIndex-1!==r}te.r(D,()=>S);const ie=ve;S._=ae(function(r,e,t,a,s,h){const{class:c,items:n=[],a11yCurrentText:g="Results Pagination - Page 1",a11yPreviousText:o="Previous page",a11yNextText:_="Next page"}=r;var y=n.length-1,u=n[0]&&n[0].type==="previous"&&n[0]||N,m=n[y]&&n[y].type==="next"&&n[y]||N,p=n.slice(u===N?0:1,m===N?void 0:y),i=a._getVisibleRange(p);e.be("nav",ue(B(r,_e),{role:"navigation",class:L(["pagination",c]),"aria-labelledby":t.elId("heading")}),"@root",a,null,4),e.be("span",{"aria-live":"polite",role:"status"},"0",a,null,0),e.be("h2",{id:t.elId("heading"),class:"clipped"},"1",a,null,1),e.t(g,a),e.ee(),e.ee(),P(e,a.getItemTag(u),()=>({...B(u,R),class:["pagination__previous",u.href?"icon-link":"icon-btn",u.class],"aria-disabled":u.disabled&&"true","aria-label":o,style:[u.style,{minWidth:40}]}),w=>{C(me,{},w,t,"3")},null,null,t,"2",[["click","handlePreviousPageClick",!1]]),e.be("ol",{class:"pagination__items"},"@items",a,null,1);{let w=0;for(const f of p||[]){let I=w++;const b=`[${I}]`;if(i.dotsIndex===I||i.leadingDotsIndex===I){var l=i.hideDots,d=!1;if(i.leadingDotsIndex===I&&(d=!0,l=!!i.hideLeadingDots),e.be("li",{hidden:l},"4"+b,a,null,0),i.hasOverflow){e.be("span",{class:L(["pagination__item",f.class]),role:"separator"},"5"+b,a,null,0);{const M=[];let le=0;for(const W of p||[]){let T=le++;const de=`[${T+b}]`;var A=d?T<i.start:T>i.end;O(T,i)&&A&&M.push({...B(W,R),type:a.getItemTag(W),dataPageNumber:T,renderBody:ce=>{P(ce,W.renderBody,null,null,null,null,t,"7"+de)},[Symbol.iterator]:$})}C(ge,{variant:"icon",transparent:!0,icon:j,collapseOnSelect:!0,items:M},e,t,"6"+b,[["select","handleMenuPageNumber",!1]])}e.ee()}else e.be("span",{class:L(["pagination__item",f.class]),role:"separator"},"8"+b,a,null,0),C(j,{},e,t,"9"+b),e.ee();e.ee()}e.be("li",{hidden:O(I,i)},"10"+b,a,null,0),P(e,a.getItemTag(f),()=>({...B(f,R),class:["pagination__item",f.class],"aria-current":f.current&&"page"}),M=>{P(M,f.renderBody,null,null,null,null,t,"11"+b)},null,null,t,"@pageItem[]",[["click","handlePageNumberClick",!1,[I]]]),e.ee()}}e.ee(),P(e,a.getItemTag(m),()=>({...B(m,R),class:["pagination__next",m.href?"icon-link":"icon-btn",m.class],"aria-disabled":m.disabled&&"true","aria-label":_,style:[m.style,{minWidth:40}]}),w=>{C(pe,{},w,t,"13")},null,null,t,"12",[["click","handleNextPageClick",!1]]),e.ee()},{t:D},ie);S.Component=re(ie,S._);const Z="m7iwF6L0",E=ee(Z),V=15;te.r(Z,()=>E);const se={onCreate(){this.state={current:0}},handlePrev(r){this.state.current=Math.max(this.state.current-1,0),this.emit("previous",r)},handleNext(r){this.state.current=Math.min(this.state.current+1,V),this.emit("next",r)},handleSelect({index:r},e){this.state.current=r,this.emit("select",e)}};E._=ae(function(r,e,t,a,s,h){const c=[];c.push({type:"previous",disabled:s.current===0,[Symbol.iterator]:$});for(let n=(V-0)/1,g=0;g<=n;g++){const o=0+g*1;c.push({current:o===s.current,renderBody:_=>{_.t(o,a)},[Symbol.iterator]:$})}c.push({type:"next",disabled:s.current===V,[Symbol.iterator]:$}),C(ne,{a11yCurrentText:`Results Pagination - Page ${s.current}`,...r,items:c},e,t,"0",[["next","handleNext",!1],["previous","handlePrev",!1],["select","handleSelect",!1]])},{t:Z},se);E.Component=re(se,E._);const Ie=`static const SIZE = 15;

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
`,oe=r=>({input:Q(r)}),at={title:"navigation & disclosure/ebay-pagination",component:ne,parameters:{docs:{description:{component:ye}}},argTypes:{a11yPreviousText:{control:{type:"text"},description:"a11y text for previous arrow button"},a11yNextText:{control:{type:"text"},description:"a11y text for next arrow button"},a11yCurrentText:{control:{type:"text"},description:"Description for the current page (e.g. Results of Page 1)"},variant:{control:{type:"select"},table:{defaultValue:{summary:"show-range"}},options:["show-last","show-range","overflow"],description:"Either `show-last`, or `show-range`. If `show-last` then will show the last page always and will put `…` between the last visible range and the last page. `…` and the last page will take up two items in the range. `…` will be hidden when the range to the last item is fully visible."},disabled:{name:"disabled",table:{category:"@item attribute tags"},description:"Previous/next button is disabled or not"},href:{name:"href",table:{category:"@item attribute tags"},description:"for link that looks like a menu-item; omitting the href will switch to a button"},item:{name:"@item",table:{category:"@attribute tags"}},"@item variant":{name:"variant",table:{category:"@item attribute tags"},description:'"button" or "link". Will force an item to be a link if href is omitted. Defaults to button. If not specified, tag type will still be controlled by `href`'},current:{name:"current",table:{category:"@item attribute tags"},description:"the current page"},type:{name:"type",table:{category:"@item attribute tags"},description:`"previous", "next" or "page"(default). To specify if the information entered is for the previous or next arrrow button or a page. If the type='previous  | next' isn't provided the previous/next arrow buttons will be taken as'disabled'`},onPrevious:{action:"on-previous",description:"Triggered on previous arrow button",table:{category:"Events",defaultValue:{summary:"{ originalEvent, el }"}}},onNext:{action:"on-next",description:"Triggered on next arrow button",table:{category:"Events",defaultValue:{summary:"{ originalEvent, el }"}}},onSelect:{action:"on-select",description:"Triggered on page selected clicked",table:{category:"Events",defaultValue:{summary:"{ originalEvent, el, value, index }"}}}}},x=oe.bind({});x.args={a11yPreviousText:"previous",a11yNextText:"next",a11yCurrentText:"Current page",items:[{renderBody:"",type:"previous",href:"#",disabled:!0},{renderBody:"1",href:"#",current:!0},{renderBody:"2",href:"#"},{renderBody:"3",href:"#"},{renderBody:"4",href:"#"},{renderBody:"5",href:"#"},{renderBody:"6",href:"#"},{renderBody:"7",href:"#"},{renderBody:"8",href:"#"},{renderBody:"9",href:"#"},{renderBody:"",type:"next",href:"#",disabled:!0}]};x.parameters={docs:{source:{code:Y("ebay-pagination",x.args)}}};const v=oe.bind({});v.args={a11yPreviousText:"previous",a11yNextText:"next",a11yCurrentText:"Current page",items:[{renderBody:"",type:"previous",disabled:!0},{renderBody:"1",current:!0},{renderBody:"2"},{renderBody:"3"},{renderBody:"4"},{renderBody:"5"},{renderBody:"6"},{renderBody:"7"},{renderBody:"8"},{renderBody:"9"},{renderBody:"",type:"next",disabled:!0}]};v.parameters={docs:{source:{code:Y("ebay-pagination",v.args)}}};const k=r=>({component:E,input:Q(r)});k.args={};k.parameters={docs:{source:{code:Ie}}};var z,F,G;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(G=(F=x.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,U,X;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(X=(U=v.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var q,J,K;k.parameters={...k.parameters,docs:{...(q=k.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
  component: interactiveTemplate,
  input: addRenderBodies(args)
})`,...(K=(J=k.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const rt=["Links","Buttons","Interactive"];export{v as Buttons,k as Interactive,x as Links,rt as __namedExportsOrder,at as default};
