import{b as S}from"./utils-DWCsNc5l.js";import{p as ie,t as v,r as w,b as C,e as ne,f as B,g as H,d as T}from"./registry-DcejNBCz.js";/* empty css             */import{_ as Oe}from"./index-C9bKFTPS.js";import{_ as g}from"./render-tag-BBOJ9dEX.js";import{_ as Fe}from"./dynamic-tag-CH7Ufq3Q.js";import{_ as Le}from"./preserve-tag-DbR6FWcg.js";import{_ as je,a as Ne,b as Ve}from"./index-Bz12QNLZ.js";import{s as Re}from"./index--35j0Bzx.js";import{r as De}from"./index-blmbJU0z.js";import{_ as h}from"./const-element-Bq6J7aqh.js";import{i as I,r as n}from"./attr-tag-DphMQldM.js";import{_}from"./empty-component-BCB5DEsP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-CenZB3al.js";const re={passive:!0};function We(r,a){let s;return t(),o;function t(){r.addEventListener("scroll",i,re)}function i(){e(),s=setTimeout(l,640)}function l(){a(),t()}function e(){r.removeEventListener("scroll",i,re)}function o(){e(),clearTimeout(s)}}function qe(r,a){let s,t,i;return function l(){const{scrollLeft:e}=r;if(i!==e){i=e,s=setTimeout(()=>{t=requestAnimationFrame(l)},90);return}a(i)}(),()=>{clearTimeout(s),cancelAnimationFrame(t)}}const Ue=typeof window<"u"&&"scrollBehavior"in document.documentElement.style;function G(r,a,s){if(Ue)return r.scrollTo({left:a}),qe(r,s);let t,i,l=requestAnimationFrame(y=>{const{scrollLeft:p}=r,u=a-p,b=450;(function x(P){const W=P-y;if(W>b)return r.scrollLeft=a,e(),s();r.scrollLeft=He(W/b)*u+p,l=requestAnimationFrame(x)})(y)});return r.addEventListener("touchstart",o),e;function e(){cancelAnimationFrame(l),t===void 0?c():(i&&i(),m())}function o(){e(),t=r.scrollLeft,r.addEventListener("touchend",d)}function d(){m(),t===r.scrollLeft&&(i=G(r,a,s))}function c(){r.removeEventListener("touchstart",o)}function m(){r.removeEventListener("touchend",d)}}function He(r){return r<.5?2*r*r:-1+(4-2*r)*r}const X=-1,Q=1;class Xe extends Marko.Component{cleanupAsync(){clearTimeout(this.autoplayTimeout),cancelAnimationFrame(this.renderFrame),cancelAnimationFrame(this.focusFrame),this.cancelScrollTransition&&(this.cancelScrollTransition(),this.cancelScrollTransition=void 0)}emitUpdate(){const{config:a,items:s}=this.state;a.scrollTransitioning=!1,this.emit("move",{visibleIndexes:s.filter(({fullyVisible:t})=>t).map(t=>s.indexOf(t))})}handleScroll(a){const{state:s}=this,{config:t,items:i,gap:l}=s;let e;if(a>=this.getMaxOffset(s)-l)e=i.length-1;else{const o=s.itemsPerSlide||1,d=i.length;let c=0,m=Math.ceil(d/o)-1;for(;m-c>1;){const u=Math.floor((c+m)/2);a>i[u*o].left?c=u:m=u}const y=Math.abs(a-i[c*o].left),p=Math.abs(a-i[m*o].left);e=this.normalizeIndex(s,(y>p?m:c)*o)}s.index!==e&&(this.skipScrolling=!0,t.preserveItems=!0,this.setState("index",e),this.emit("scroll",{index:e}))}getOffset(a){const{items:s,index:t}=a;return s.length&&Math.min(s[t].left,this.getMaxOffset(a))||0}getMaxOffset({items:a,slideWidth:s}){return a.length&&Math.max(a[a.length-1].right-s,0)||0}getSlide({index:a,itemsPerSlide:s},t=a){if(s)return Math.ceil(t/s)}normalizeIndex({items:a,itemsPerSlide:s},t){if(t>0){let i=t;return i%=a.length||1,i-=i%(s||1),i=Math.abs(i),i}return 0}isAnimating(a){const{items:s,index:t}=a;if(!s.length)return!1;const i=s[t];return i.left===void 0||i.right===void 0}getNextIndex(a,s){const{index:t,items:i,slideWidth:l,itemsPerSlide:e}=a;let o=t,d;if(s===X&&o===0)o=i.length-1;else{do d=i[o+=s];while(d&&d.fullyVisible);if(s===X&&!e){const c=d.right-l;do d=i[--o];while(d&&d.left>=c);o+=1}}return this.normalizeIndex(a,o)}getTemplateData(a){const{config:s,autoplayInterval:t,items:i,itemsPerSlide:l,slideWidth:e,gap:o}=a,d=s.offsetOverride!==void 0,c=i.length<=l;a.index=this.normalizeIndex(a,a.index);const m=this.getOffset(a),y=c||!t&&m===0,p=c||!t&&m===this.getMaxOffset(a),u=this.isAnimating(a)?a.bothControlsDisabled:y&&p;let b,x,P;if(l){const f=l+a.peek;b=this.getSlide(a),x=`calc(${100/f}% - ${(f-1)*o/f}px)`,P=this.getSlide(a,i.length)}return i.forEach((f,ze)=>{const{style:q,transform:U}=f,se=ze!==i.length-1&&`${o}px`;typeof q=="string"?(f.style=`${q};flex-basis:${x};margin-right:${se};`,U&&(f.style+=`transform:${U}`)):f.style=Object.assign({},q,{width:x,"margin-right":se,transform:U}),f.fullyVisible=f.left===void 0||f.left-m>=-.01&&f.right-m<=e+.01}),Object.assign({},a,{items:i,slide:b,offset:d?s.offsetOverride:m,disableTransition:d,totalSlides:P,prevControlDisabled:y,nextControlDisabled:p,bothControlsDisabled:u})}move(a){const{state:s}=this,{index:t,items:i,itemsPerSlide:l,autoplayInterval:e,slideWidth:o,gap:d,peek:c,config:m}=s,y=this.getNextIndex(s,a);let p;if(m.preserveItems=!0,this.isMoving=!0,this.skipScrolling=!1,e){if(a===Q&&y<t){p=-o-d;for(let u=Math.ceil(l+c);u--;){const b=i[i.length-u-1];b.transform=`translateX(${(this.getMaxOffset(s)+o+d)*-1}px)`}}else if(a===X&&y>t){p=this.getMaxOffset(s)+o+d;for(let u=Math.ceil(l+c);u--;){const b=i[u];b.transform=`translateX(${this.getMaxOffset(s)+o+d}px)`}}m.offsetOverride=p}return this.setState("index",y),this.once("move",()=>{this.isMoving=!1,p!==void 0&&i.forEach(u=>{u.transform=void 0})}),y}handleMove(a,s){if(this.isMoving)return;const{state:t}=this,i=this.move(a),l=this.getSlide(t,i);this.emit("slide",{slide:l+1,originalEvent:s}),this.emit(`${a===1?"next":"previous"}`,{originalEvent:s})}handleStartInteraction(){this.setState("interacting",!0)}handleEndInteraction(){clearTimeout(this.interactionEndTimeout),this.isMoving?this.state.interacting&&(this.interactionEndTimeout=setTimeout(()=>{this.handleEndInteraction()},100)):this.setState("interacting",!1)}togglePlay(a){const{state:{config:s,paused:t}}=this;s.preserveItems=!0,this.setState("paused",!t),t&&!this.isMoving&&this.move(Q),this.emit(`${t?"play":"pause"}`,{originalEvent:a})}onInput(a){var e;const s=parseInt(a.gap,10),t={htmlAttributes:ie(a,["class","style","index","type","slide","gap","autoplay","paused","itemsPerSlide","a11yPreviousText","a11yNextText","a11yPlayText","a11yPauseText","items","hiddenScrollbar"]),classes:["carousel",a.hiddenScrollbar&&"carousel--hidden-scrollbar",a.class],style:a.style,config:{},gap:isNaN(s)?16:s,index:parseInt(a.index,10)||0,itemsPerSlide:parseFloat(a.itemsPerSlide)||0,a11yPreviousText:a.a11yPreviousText||"Previous Slide",a11yNextText:a.a11yNextText||"Next Slide",a11yPauseText:a.a11yPauseText||"Pause",a11yPlayText:a.a11yPlayText||"Play",ariaRoleDescription:a["aria-roledescription"]||"Carousel",items:[],slideWidth:0,autoplayInterval:0,paused:!1,peek:0,interacting:!1,bothControlsDisabled:!1},i=["class","style","key"],{itemsPerSlide:l}=t;if(l&&(t.peek=l%1,t.itemsPerSlide=l-t.peek,t.classes.push("carousel--slides"),!t.peek&&!a.autoplay&&!a.noPeek&&(t.peek=.1),t.peek&&t.classes.push("carousel--peek"),a.autoplay)){const o=((e=a.items)==null?void 0:e.length)<=l;t.autoplayInterval=parseInt(a.autoplay,10)||4e3,t.classes.push("carousel__autoplay"),t.paused=!!(o||a.paused),t.interacting=!1}t.items=(a.items||[]).map((o,d)=>{const c=t.itemsPerSlide?d%t.itemsPerSlide===0:!0;return{htmlAttributes:ie(o,i),class:c?["carousel__snap-point",o.class]:o.class,key:o.key||d.toString(),style:o.style,renderBody:o.renderBody,left:0,right:0}}),this.state=t}onRender(){typeof window<"u"&&this.cleanupAsync()}onMount(){const{config:a}=this.state;this.listEl=this.getEl("list"),this.nextEl=this.getEl("next"),this.containerEl=this.getEl("container"),this.subscribeTo(De).on("resize",()=>{this.cleanupAsync(),this.onRenderLegacy()}),this.skipScrolling=!1,oe(this.listEl)?(a.nativeScrolling=!0,this.once("destroy",We(this.listEl,()=>{a.scrollTransitioning||this.handleScroll(this.listEl.scrollLeft)}))):this.subscribeTo(this.listEl).on("transitionend",({target:s})=>{s===this.listEl&&this.emitUpdate()}),this.onRenderLegacy()}onUpdate(){this.onRenderLegacy()}onDestroy(){this.cleanupAsync()}onRenderLegacy(){const{containerEl:a,listEl:s,state:t}=this,{config:i,items:l,autoplayInterval:e,paused:o,interacting:d}=t;if(l.length){if(i.offsetOverride){i.offsetOverride=void 0,this.renderFrame=requestAnimationFrame(()=>this.setStateDirty(void 0));return}if(i.preserveItems){if(i.preserveItems=!1,this.focusFrame=requestAnimationFrame(()=>{le(s,c=>{Re(c).forEach(c.getAttribute("aria-hidden")!=="true"?m=>m.hasAttribute("data-carousel-tabindex")?m.setAttribute("tabindex",m.getAttribute("data-carousel-tabindex")??"-1"):m.removeAttribute("tabindex"):m=>m.setAttribute("tabindex","-1"))})}),i.nativeScrolling)if(this.skipScrolling)this.emitUpdate();else{const c=this.getOffset(t);c!==s.scrollLeft?(i.scrollTransitioning=!0,this.cancelScrollTransition=G(s,c,this.emitUpdate.bind(this))):this.isMoving&&(i.scrollTransitioning=!0,this.cancelScrollTransition=G(s,this.getOffset(t),this.emitUpdate.bind(this)))}if(e&&!o&&!d){const c=this.move.bind(this,Q);this.autoplayTimeout=setTimeout(()=>{if(this.isMoving)return this.once("move",c);c()},e)}return}this.renderFrame=requestAnimationFrame(()=>{const{width:c}=a.getBoundingClientRect(),{left:m}=s.firstElementChild.getBoundingClientRect();this.setStateDirty("slideWidth",c),i.preserveItems=!0,i.nativeScrolling=oe(s),le(s,(y,p)=>{const u=l[p],{left:b,right:x}=y.getBoundingClientRect();u.left=b-m,u.right=x-m})})}}}function oe(r){return getComputedStyle(r).overflowX!=="visible"}function le(r,a){let s=0,t=r.firstElementChild;for(;t;)a(t,s++),t=t.nextElementSibling}const K="jcQTeC0v",E=v(K),k=E;w.r(K,()=>E);const _e=Xe;E._=C(function(r,a,s,t,i,l){var e=t.getTemplateData(i),o=e.config;a.be("div",ne(e.htmlAttributes,{class:B(e.classes),style:H(e.style),"aria-roledescription":e.ariaRoleDescription,role:"group"}),"0",t,null,4),a.be("div",{class:B(["carousel__container",e.bothControlsDisabled&&"carousel__container--controls-disabled"]),id:s.elId("container")},"@container",t,null,1,{onfocusin:s.d("focusin",!!e.autoplayInterval&&"handleStartInteraction",!1),ontouchstart:s.d("touchstart",!!e.autoplayInterval&&"handleStartInteraction",!1),onmouseover:s.d("mouseover",!!e.autoplayInterval&&"handleStartInteraction",!1),onfocusout:s.d("focusout",!!e.autoplayInterval&&"handleEndInteraction",!1),onmouseout:s.d("mouseout",!!e.autoplayInterval&&"handleEndInteraction",!1),ontouchend:s.d("touchend",!!e.autoplayInterval&&"handleEndInteraction",!1)}),a.be("button",{class:"carousel__control carousel__control--prev",type:"button","aria-label":e.a11yPreviousText,"aria-disabled":e.prevControlDisabled&&"true"},"1",t,null,0,{onclick:s.d("click",!e.prevControlDisabled&&"handleMove",!1,[-1])}),g(Oe,{},a,s,"2"),a.ee(),a.be("div",{class:B(["carousel__viewport",!e.itemsPerSlide&&!e.nextControlDisabled&&!e.autoplayInterval&&"carousel__viewport--mask"])},"3",t,null,1),a.be("ul",{class:B(["carousel__list",r.imageTreatment==="matte"&&"carousel__list--image-treatment"]),style:H(!o.nativeScrolling&&!!e.offset&&{transform:"translate3d("+e.offset*-1+"px,0,0)",transition:e.disableTransition?"none":void 0}),id:s.elId("list")},"@list",t,null,1);for(const d of e.items||[]){const c=`@${d.key}`,m=`[${c}]`;a.be("li",ne(d.htmlAttributes,{class:B(d.class),style:H(d.style),"aria-hidden":!d.fullyVisible&&"true"}),c,t,null,4),g(Le,{n:!0,b:!0,i:!!o.preserveItems,renderBody:y=>{Fe(y,d.renderBody,null,null,null,null,s,"4"+m)}},a,s,c),a.ee()}a.ee(),a.ee(),a.be("button",{class:"carousel__control carousel__control--next",type:"button","aria-label":e.a11yNextText,"aria-disabled":e.nextControlDisabled&&"true",id:s.elId("next")},"@next",t,null,0,{onclick:s.d("click",!e.nextControlDisabled&&"handleMove",!1,[1])}),g(je,{},a,s,"5"),a.ee(),e.autoplayInterval&&!e.bothControlsDisabled&&(a.be("button",{type:"button","aria-label":e.paused?e.a11yPlayText:e.a11yPauseText,class:"carousel__playback"},"6",t,null,0,{onclick:s.d("click","togglePlay",!1)}),e.paused?g(Ne,{},a,s,"7"):g(Ve,{},a,s,"8"),a.ee()),a.ee(),a.ee()},{t:K},_e);E.Component=T(_e,E._);const Qe=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-carousel
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.1.0
    </span>
</h1>

Descrete or Continuious carousel component. Can show items as a slide or various widths.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/navigation-disclosure-ebay-carousel)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/navigation-disclosure-ebay-carousel)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-carousel/examples)

## Preserving tabindex for focusable elements

When scrolling items, focusable elements that are not visible in the carousel should not be tabbable by default. When the carousel scrolls, it then removes the tabindex to allow the item to be focusable.
In order to preserve the tabindex on an item, pass \`data-carousel-tabindex="-1"\` attribute to a given focusable element in order to default to that tabindex instead of removing the tabindex when the item is visible.
`,Y="gsL1rqEL",L=v(Y),Ge=h("style",null,1).t(`
    .demo-card {
        color: #0a1c6b;
        background: #c2f5ff;
        font-size: 24px;
        font-weight: bold;
        width: 200px;
        height: 120px;
        line-height: 120px;
        text-align: center;
    }
`);w.r(Y,()=>_);const Be={};L._=C(function(r,a,s,t,i,l){a.n(Ge,t),g(k,I(()=>{n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Card 1",t)}}),n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Card 2",t)}}),n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Card 3",t)}}),n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Card 4",t)}}),n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Card 5",t)}}),n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Card 6",t)}}),n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Card 7",t)}}),n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Card 8",t)}}),n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Card 9",t)}}),n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Card 10",t)}})},{...r,items:void 0}),a,s,"1",[["move","emit",!1,["move"]],["next","emit",!1,["next"]],["previous","emit",!1,["previous"]],["scroll","emit",!1,["scroll"]],["slide","emit",!1,["slide"]]])},{t:Y,s:!0},Be);L.Component=T(Be,L._);const Ke=`export interface Input {
    index?: number;
    gap?: number | string;
    imageTreatment?: "none" | "matte";
    a11yPreviousText?: string;
    a11yNextText?: string;
    items: any[];
    images: string[];
}

<style>
    .demo-card {
        color: #0a1c6b;
        background: #c2f5ff;
        font-size: 24px;
        font-weight: bold;
        width: 200px;
        height: 120px;
        line-height: 120px;
        text-align: center;
    }
</style>

<ebay-carousel
    ...input
    on-move("emit", "move")
    on-next("emit", "next")
    on-previous("emit", "previous")
    on-scroll("emit", "scroll")
    on-slide("emit", "slide")>
    <@item style={ width: 400 } class="demo-card">Card 1</@item>
    <@item style={ width: 400 } class="demo-card">Card 2</@item>
    <@item style={ width: 400 } class="demo-card">Card 3</@item>
    <@item style={ width: 400 } class="demo-card">Card 4</@item>
    <@item style={ width: 400 } class="demo-card">Card 5</@item>
    <@item style={ width: 400 } class="demo-card">Card 6</@item>
    <@item style={ width: 400 } class="demo-card">Card 7</@item>
    <@item style={ width: 400 } class="demo-card">Card 8</@item>
    <@item style={ width: 400 } class="demo-card">Card 9</@item>
    <@item style={ width: 400 } class="demo-card">Card 10</@item>
</ebay-carousel>
`,Z="QDVBwK6a",j=v(Z),Ye=h("style",null,1).t(`
    .demo2-card {
        color: #cdf4fd;
        background: #a1208b;
        font-size: 36px;
        font-weight: bold;
        height: 330px;
        line-height: 330px;
        text-align: center;
    }
`);w.r(Z,()=>_);const Ee={};j._=C(function(r,a,s,t,i,l){a.n(Ye,t),g(k,I(()=>{n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 1",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 2",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 3",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 4",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 5",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 6",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 7",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 8",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 9",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 10",t)}})},{...r,itemsPerSlide:r.itemsPerSlide||2,items:void 0}),a,s,"1",[["move","emit",!1,["move"]],["next","emit",!1,["next"]],["previous","emit",!1,["previous"]],["scroll","emit",!1,["scroll"]],["slide","emit",!1,["slide"]]])},{t:Z,s:!0},Ee);j.Component=T(Ee,j._);const Ze=`export interface Input {
    items: number;
    index: number;
    itemsPerSlide: number;
    gap: number;
    a11yPreviousText: string;
    a11yNextText: string;
}

<style>
    .demo2-card {
        color: #cdf4fd;
        background: #a1208b;
        font-size: 36px;
        font-weight: bold;
        height: 330px;
        line-height: 330px;
        text-align: center;
    }
</style>

<ebay-carousel
    ...input
    itemsPerSlide=(input.itemsPerSlide || 2)
    on-move("emit", "move")
    on-next("emit", "next")
    on-previous("emit", "previous")
    on-scroll("emit", "scroll")
    on-slide("emit", "slide")>
    <@item style={ width: 400 } class="demo2-card">Card 1</@item>
    <@item style={ width: 400 } class="demo2-card">Card 2</@item>
    <@item style={ width: 400 } class="demo2-card">Card 3</@item>
    <@item style={ width: 400 } class="demo2-card">Card 4</@item>
    <@item style={ width: 400 } class="demo2-card">Card 5</@item>
    <@item style={ width: 400 } class="demo2-card">Card 6</@item>
    <@item style={ width: 400 } class="demo2-card">Card 7</@item>
    <@item style={ width: 400 } class="demo2-card">Card 8</@item>
    <@item style={ width: 400 } class="demo2-card">Card 9</@item>
    <@item style={ width: 400 } class="demo2-card">Card 10</@item>
</ebay-carousel>
`,J="zgmfYUrF",N=v(J),Je=h("style",null,1).t(`
    .demo-card {
        color: #0a1c6b;
        background: #c2f5ff;
        font-size: 24px;
        font-weight: bold;
        width: 200px;
        height: 120px;
        line-height: 120px;
        text-align: center;
    }
`),et=h("img",{"aria-label":"photo 1",src:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/aztec-pyramid.jpeg"},0),tt=h("img",{"aria-label":"photo 2",src:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/falls.jpeg"},0),at=h("img",{"aria-label":"photo 3",src:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/mountain.jpeg"},0),st=h("img",{"aria-label":"photo 4",src:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg"},0),it=h("img",{"aria-label":"photo 5",src:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/tall-cat.jpeg"},0),nt=h("img",{"aria-label":"photo 6",src:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/wide-cat.jpeg"},0);w.r(J,()=>_);const Pe={};N._=C(function(r,a,s,t,i,l){a.n(Je,t),g(k,I(()=>{n("items",{renderBody:e=>{e.n(et,t)}}),n("items",{renderBody:e=>{e.n(tt,t)}}),n("items",{renderBody:e=>{e.n(at,t)}}),n("items",{renderBody:e=>{e.n(st,t)}}),n("items",{renderBody:e=>{e.n(it,t)}}),n("items",{renderBody:e=>{e.n(nt,t)}}),n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Additional Item",t)}}),n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Additional Item 2",t)}})},{imageTreatment:"matte",...r,items:void 0}),a,s,"1",[["carousel-update","emit",!1,["carousel-update"]],["move","emit",!1,["move"]],["next","emit",!1,["next"]],["previous","emit",!1,["previous"]],["scroll","emit",!1,["scroll"]],["slide","emit",!1,["slide"]]])},{t:J,s:!0},Pe);N.Component=T(Pe,N._);const rt=`export interface Input {
    index?: number;
    gap?: number | string;
    imageTreatment?: "none" | "matte";
    a11yPreviousText?: string;
    a11yNextText?: string;
    items: any[];
    images: string[];
}

<style>
    .demo-card {
        color: #0a1c6b;
        background: #c2f5ff;
        font-size: 24px;
        font-weight: bold;
        width: 200px;
        height: 120px;
        line-height: 120px;
        text-align: center;
    }
</style>

<ebay-carousel
    imageTreatment="matte"
    ...input
    on-carousel-update("emit", "carousel-update")
    on-move("emit", "move")
    on-next("emit", "next")
    on-previous("emit", "previous")
    on-scroll("emit", "scroll")
    on-slide("emit", "slide")>
    <@item>
        <img aria-label="photo 1" src="http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/aztec-pyramid.jpeg">
    </@item>
    <@item>
        <img aria-label="photo 2" src="http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/falls.jpeg">
    </@item>
    <@item>
        <img aria-label="photo 3" src="http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/mountain.jpeg">
    </@item>
    <@item>
        <img aria-label="photo 4" src="http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg">
    </@item>
    <@item>
        <img aria-label="photo 5" src="http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/tall-cat.jpeg">
    </@item>
    <@item>
        <img aria-label="photo 6" src="http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/wide-cat.jpeg">
    </@item>
    <@item style={ width: 400 } class="demo-card">
        Additional Item
    </@item>
    <@item style={ width: 400 } class="demo-card">
        Additional Item 2
    </@item>
</ebay-carousel>
`,ee="eEtAClPq",V=v(ee),ot=h("style",null,1).t(`
    .demo2-card {
        color: #cdf4fd;
        background: #a1208b;
        font-size: 36px;
        font-weight: bold;
        height: 330px;
        line-height: 330px;
        text-align: center;
    }
`);w.r(ee,()=>_);const $e={};V._=C(function(r,a,s,t,i,l){a.n(ot,t),g(k,I(()=>{n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 1",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 2",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 3",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 4",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 5",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 6",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 7",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 8",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 9",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 10",t)}})},{...r,itemsPerSlide:r.itemsPerSlide||1,autoplay:r.autoplay||!0,items:void 0}),a,s,"1",[["move","emit",!1,["move"]],["next","emit",!1,["next"]],["previous","emit",!1,["previous"]],["scroll","emit",!1,["scroll"]],["slide","emit",!1,["slide"]],["play","emit",!1,["play"]],["pause","emit",!1,["pause"]]])},{t:ee,s:!0},$e);V.Component=T($e,V._);const lt=`export interface Input {
    items: number;
    index?: number;
    itemsPerSlide?: number;
    gap?: number;
    a11yPreviousText?: string;
    a11yNextText?: string;
    autoplay?: boolean;
    paused?: boolean;
    a11yPauseText?: string;
    a11yPlayText?: string;
}

<style>
    .demo2-card {
        color: #cdf4fd;
        background: #a1208b;
        font-size: 36px;
        font-weight: bold;
        height: 330px;
        line-height: 330px;
        text-align: center;
    }
</style>
<ebay-carousel
    ...input
    itemsPerSlide=(input.itemsPerSlide || 1)
    autoplay=(input.autoplay || true)
    on-move("emit", "move")
    on-next("emit", "next")
    on-previous("emit", "previous")
    on-scroll("emit", "scroll")
    on-slide("emit", "slide")
    on-play("emit", "play")
    on-pause("emit", "pause")>
    <@item style={ width: 400 } class="demo2-card">Card 1</@item>
    <@item style={ width: 400 } class="demo2-card">Card 2</@item>
    <@item style={ width: 400 } class="demo2-card">Card 3</@item>
    <@item style={ width: 400 } class="demo2-card">Card 4</@item>
    <@item style={ width: 400 } class="demo2-card">Card 5</@item>
    <@item style={ width: 400 } class="demo2-card">Card 6</@item>
    <@item style={ width: 400 } class="demo2-card">Card 7</@item>
    <@item style={ width: 400 } class="demo2-card">Card 8</@item>
    <@item style={ width: 400 } class="demo2-card">Card 9</@item>
    <@item style={ width: 400 } class="demo2-card">Card 10</@item>
</ebay-carousel>
`,te="yZuIx/Br",R=v(te),dt=h("style",null,1).t(`
    .preserve-tabindex-card {
        color: #cdf4fd;
        background: #eee;
        font-size: 36px;
        font-weight: bold;
        height: 330px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`),ct=h("div",{class:"preserve-tabindex-card"},2).e("a",{href:"https://www.ebay.com","data-carousel-tabindex":"-1"},1).t("Image here").e("a",{href:"https://www.ebay.com"},1).t("Card 1"),mt=h("div",{class:"preserve-tabindex-card"},2).e("a",{href:"https://www.ebay.com","data-carousel-tabindex":"-1"},1).t("Image here").e("a",{href:"https://www.ebay.com"},1).t("Card 2"),ht=h("div",{class:"preserve-tabindex-card"},2).e("a",{href:"https://www.ebay.com","data-carousel-tabindex":"-1"},1).t("Image here").e("a",{href:"https://www.ebay.com"},1).t("Card 3"),ut=h("div",{class:"preserve-tabindex-card"},2).e("a",{href:"https://www.ebay.com","data-carousel-tabindex":"-1"},1).t("Image here").e("a",{href:"https://www.ebay.com"},1).t("Card 4"),yt=h("div",{class:"preserve-tabindex-card"},2).e("a",{href:"https://www.ebay.com","data-carousel-tabindex":"-1"},1).t("Image here").e("a",{href:"https://www.ebay.com"},1).t("Card 5"),pt=h("div",{class:"preserve-tabindex-card"},2).e("a",{href:"https://www.ebay.com","data-carousel-tabindex":"-1"},1).t("Image here").e("a",{href:"https://www.ebay.com"},1).t("Card 6"),ft=h("div",{class:"preserve-tabindex-card"},2).e("a",{href:"https://www.ebay.com","data-carousel-tabindex":"-1"},1).t("Image here").e("a",{href:"https://www.ebay.com"},1).t("Card 7"),bt=h("div",{class:"preserve-tabindex-card"},2).e("a",{href:"https://www.ebay.com","data-carousel-tabindex":"-1"},1).t("Image here").e("a",{href:"https://www.ebay.com"},1).t("Card 8");w.r(te,()=>_);const Ae={};R._=C(function(r,a,s,t,i,l){a.n(dt,t),g(k,I(()=>{n("items",{renderBody:e=>{e.n(ct,t)}}),n("items",{renderBody:e=>{e.n(mt,t)}}),n("items",{renderBody:e=>{e.n(ht,t)}}),n("items",{renderBody:e=>{e.n(ut,t)}}),n("items",{renderBody:e=>{e.n(yt,t)}}),n("items",{renderBody:e=>{e.n(pt,t)}}),n("items",{renderBody:e=>{e.n(ft,t)}}),n("items",{renderBody:e=>{e.n(bt,t)}})},{...r,items:void 0}),a,s,"1",[["move","emit",!1,["move"]],["next","emit",!1,["next"]],["previous","emit",!1,["previous"]],["scroll","emit",!1,["scroll"]],["slide","emit",!1,["slide"]]])},{t:te,s:!0},Ae);R.Component=T(Ae,R._);const gt=`export interface Input {
    gap: string;
    itemsPerSlide: string;
    index: string;
    a11yPreviousText: string;
    a11yNextText: string;
    items: any[];
}

<style>
    .preserve-tabindex-card {
        color: #cdf4fd;
        background: #eee;
        font-size: 36px;
        font-weight: bold;
        height: 330px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>

<ebay-carousel
    ...input
    on-move("emit", "move")
    on-next("emit", "next")
    on-previous("emit", "previous")
    on-scroll("emit", "scroll")
    on-slide("emit", "slide")>
    <@item>
        <div class="preserve-tabindex-card">
            <a href="https://www.ebay.com" data-carousel-tabindex="-1">
                Image here
            </a>
            <a href="https://www.ebay.com">
                Card 1
            </a>
        </div>
    </@item>
    <@item>
        <div class="preserve-tabindex-card">
            <a href="https://www.ebay.com" data-carousel-tabindex="-1">
                Image here
            </a>
            <a href="https://www.ebay.com">
                Card 2
            </a>
        </div>
    </@item>

    <@item>
        <div class="preserve-tabindex-card">
            <a href="https://www.ebay.com" data-carousel-tabindex="-1">
                Image here
            </a>
            <a href="https://www.ebay.com">
                Card 3
            </a>
        </div>
    </@item>

    <@item>
        <div class="preserve-tabindex-card">
            <a href="https://www.ebay.com" data-carousel-tabindex="-1">
                Image here
            </a>
            <a href="https://www.ebay.com">
                Card 4
            </a>
        </div>
    </@item>

    <@item>
        <div class="preserve-tabindex-card">
            <a href="https://www.ebay.com" data-carousel-tabindex="-1">
                Image here
            </a>
            <a href="https://www.ebay.com">
                Card 5
            </a>
        </div>
    </@item>

    <@item>
        <div class="preserve-tabindex-card">
            <a href="https://www.ebay.com" data-carousel-tabindex="-1">
                Image here
            </a>
            <a href="https://www.ebay.com">
                Card 6
            </a>
        </div>
    </@item>

    <@item>
        <div class="preserve-tabindex-card">
            <a href="https://www.ebay.com" data-carousel-tabindex="-1">
                Image here
            </a>
            <a href="https://www.ebay.com">
                Card 7
            </a>
        </div>
    </@item>
    <@item>
        <div class="preserve-tabindex-card">
            <a href="https://www.ebay.com" data-carousel-tabindex="-1">
                Image here
            </a>
            <a href="https://www.ebay.com">
                Card 8
            </a>
        </div>
    </@item>
</ebay-carousel>
`,ae="b6avgR5q",D=v(ae),xt=h("style",null,1).t(`
    .demo-card3 {
        color: #0a1c6b;
        background: #c2f5ff;
        font-size: 24px;
        font-weight: bold;
        height: 120px;
        line-height: 120px;
        text-align: center;
        overflow: hidden;
    }
`);w.r(ae,()=>_);const Me={};D._=C(function(r,a,s,t,i,l){a.n(xt,t),g(k,I(()=>{n("items",{style:"width:100px",class:"demo-card3",renderBody:e=>{e.t("Card 1",t)}}),n("items",{style:"width:57px",class:"demo-card3",renderBody:e=>{e.t("C2",t)}}),n("items",{style:"width:120px",class:"demo-card3",renderBody:e=>{e.t("Card 3",t)}}),n("items",{style:"width:200px",class:"demo-card3",renderBody:e=>{e.t("Card 4",t)}}),n("items",{style:"width:130px",class:"demo-card3",renderBody:e=>{e.t("Card 5",t)}}),n("items",{style:"width:150px",class:"demo-card3",renderBody:e=>{e.t("Card 6",t)}}),n("items",{style:"width:100px",class:"demo-card3",renderBody:e=>{e.t("Card 7",t)}}),n("items",{style:"width:200px",class:"demo-card3",renderBody:e=>{e.t("Card 8",t)}}),n("items",{style:"width:60px",class:"demo-card3",renderBody:e=>{e.t("C9",t)}}),n("items",{style:"width:140px",class:"demo-card3",renderBody:e=>{e.t("Card 10",t)}})},{...r,items:void 0}),a,s,"1",[["move","emit",!1,["move"]],["next","emit",!1,["next"]],["previous","emit",!1,["previous"]],["scroll","emit",!1,["scroll"]],["slide","emit",!1,["slide"]]])},{t:ae,s:!0},Me);D.Component=T(Me,D._);const vt=`export interface Input {
    index?: number;
    gap?: number | string;
    imageTreatment?: "none" | "matte";
    a11yPreviousText?: string;
    a11yNextText?: string;
    items: any[];
    images: string[];
}

<style>
    .demo-card3 {
        color: #0a1c6b;
        background: #c2f5ff;
        font-size: 24px;
        font-weight: bold;
        height: 120px;
        line-height: 120px;
        text-align: center;
        overflow: hidden;
    }
</style>

<ebay-carousel
    ...input
    on-move("emit", "move")
    on-next("emit", "next")
    on-previous("emit", "previous")
    on-scroll("emit", "scroll")
    on-slide("emit", "slide")>
    <@item style="width:100px" class="demo-card3">Card 1</@item>
    <@item style="width:57px" class="demo-card3">C2</@item>
    <@item style="width:120px" class="demo-card3">Card 3</@item>
    <@item style="width:200px" class="demo-card3">Card 4</@item>
    <@item style="width:130px" class="demo-card3">Card 5</@item>
    <@item style="width:150px" class="demo-card3">Card 6</@item>
    <@item style="width:100px" class="demo-card3">Card 7</@item>
    <@item style="width:200px" class="demo-card3">Card 8</@item>
    <@item style="width:60px" class="demo-card3">C9</@item>
    <@item style="width:140px" class="demo-card3">Card 10</@item>
</ebay-carousel>
`,Lt={title:"navigation & disclosure/ebay-carousel",component:k,parameters:{docs:{description:{component:Qe}}},argTypes:{numberOfItems:{description:"The amount of items",table:{category:"Demo configuration"}},item:{name:"@item",description:"The contents for each item",table:{category:"@attribute tags"}},imageTreatment:{options:["none","matte"],description:'If "matte", image treatment styles are applied.',table:{defaultValue:{summary:"none"}},type:"select"},index:{type:"number",description:"0-based index position"},itemsPerSlide:{description:"automatically fit a number of items for each carousel slide and enable slide controls. If set to a whole number, will default to x.1 where x is the whole number set."},gap:{type:"number",description:"override the margin between carousel items in pixels",table:{defaultValue:{summary:"16"}}},"aria-label":{description:"a11y label text for component",table:{category:"accessibility attributes"},control:{type:"text"}},"aria-labelledby":{description:"id of element containing a11y label text for component",table:{category:"accessibility attributes"},control:{type:"text"}},"aria-roledescription":{description:"a11y role description for component",table:{defaultValue:{summary:"Carousel"},category:"accessibility attributes"},control:{type:"text"}},"a11y-next-text":{description:"a11y text for next control",table:{defaultValue:{summary:"Next Slide"},category:"accessibility attributes"}},"a11y-previous-text":{description:"a11y text for previous control",table:{defaultValue:{summary:"Previous Slide"},category:"accessibility attributes"}},onMove:{action:"on-move",description:"called whenever item visibility changes, including initialization",table:{category:"Events",defaultValue:{detail:"{ [visibleIndexes] }"}}},onNext:{action:"on-next",description:"click next",table:{category:"Events",defaultValue:{detail:"{ originalEvent }"}}},onPrevious:{action:"on-previous",description:"click previous",table:{category:"Events",defaultValue:{detail:"{ originalEvent }"}}},onScroll:{action:"on-scroll",description:"new index is navigated to by native scrollin",table:{category:"Events",defaultValue:{detail:"{ index }"}}},onSlide:{action:"on-slide",description:"new slide is navigated to (by controls or API)",table:{category:"Events (items-per-slide)",defaultValue:{summary:"{ slide }"}}},onPlay:{action:"on-play",description:"called when the autoplay play button is pressed",table:{category:"Events (autoplay)",defaultValue:{summary:"{ originalEvent }"}}},onPause:{action:"on-pause",description:"called when the autoplay pause button is pressed",table:{category:"Events (autoplay)",defaultValue:{summary:"{ originalEvent }"}}}}},$=S(L,Ke),A=S(N,rt),M=S(j,Ze),z=S(V,lt),O=S(R,gt),F=S(D,vt);var de,ce,me;$.parameters={...$.parameters,docs:{...(de=$.parameters)==null?void 0:de.docs,source:{originalSource:"buildExtensionTemplate(continiousTemplate, continiousTemplateCode)",...(me=(ce=$.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var he,ue,ye;A.parameters={...A.parameters,docs:{...(he=A.parameters)==null?void 0:he.docs,source:{originalSource:"buildExtensionTemplate(continiousImageTreatmentTemplate, continiousImageTreatmentTemplateCode)",...(ye=(ue=A.parameters)==null?void 0:ue.docs)==null?void 0:ye.source}}};var pe,fe,be;M.parameters={...M.parameters,docs:{...(pe=M.parameters)==null?void 0:pe.docs,source:{originalSource:"buildExtensionTemplate(discreteTemplate, discreteTemplateCode)",...(be=(fe=M.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var ge,xe,ve;z.parameters={...z.parameters,docs:{...(ge=z.parameters)==null?void 0:ge.docs,source:{originalSource:"buildExtensionTemplate(autoplayTemplate, autoplayTemplateCode)",...(ve=(xe=z.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var we,Ce,Te;O.parameters={...O.parameters,docs:{...(we=O.parameters)==null?void 0:we.docs,source:{originalSource:"buildExtensionTemplate(preserveTabindexTemplate, preserveTabindexTemplateCode)",...(Te=(Ce=O.parameters)==null?void 0:Ce.docs)==null?void 0:Te.source}}};var ke,Se,Ie;F.parameters={...F.parameters,docs:{...(ke=F.parameters)==null?void 0:ke.docs,source:{originalSource:"buildExtensionTemplate(variableSizesTemplate, variableSizesTemplateCode)",...(Ie=(Se=F.parameters)==null?void 0:Se.docs)==null?void 0:Ie.source}}};const jt=["Continuous","ContinuousImageTreatment","Discrete","Autoplay","preserveTabindex","variableSizes"];export{z as Autoplay,$ as Continuous,A as ContinuousImageTreatment,M as Discrete,jt as __namedExportsOrder,Lt as default,O as preserveTabindex,F as variableSizes};
