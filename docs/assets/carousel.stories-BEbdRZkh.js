import{b as S}from"./utils-DWCsNc5l.js";import{p as se,t as w,r as C,b as T,d as ie,e as B,f as U,c as k}from"./registry-CyswyZw5.js";/* empty css             */import{_ as Oe}from"./index-CplOt9yK.js";import{_ as g}from"./render-tag-CLyPs9qZ.js";import{_ as ze}from"./dynamic-tag-CXXozR29.js";import{_ as Fe}from"./preserve-tag-s8hZOZFS.js";import{_ as Ne}from"./of-fallback-C2gEBeKK.js";import{_ as je}from"./index-E3zKQBpO.js";import{_ as Le,a as Ve}from"./index-AQSnjl-0.js";import{s as Re}from"./index-CZ_CdPGB.js";import{r as We}from"./index-CbT4wDAv.js";import{_ as h}from"./const-element-B9h58Dwq.js";import{i as _,r as n}from"./attr-tag-DphMQldM.js";import{_ as I}from"./empty-component-BCB5DEsP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-Bq4u441m.js";const ne={passive:!0};function De(r,a){let s;return t(),o;function t(){r.addEventListener("scroll",i,ne)}function i(){e(),s=setTimeout(l,640)}function l(){a(),t()}function e(){r.removeEventListener("scroll",i,ne)}function o(){e(),clearTimeout(s)}}function qe(r,a){let s,t,i;return function l(){const{scrollLeft:e}=r;if(i!==e){i=e,s=setTimeout(()=>{t=requestAnimationFrame(l)},90);return}a(i)}(),()=>{clearTimeout(s),cancelAnimationFrame(t)}}const Ue=typeof window<"u"&&"scrollBehavior"in document.documentElement.style;function X(r,a,s){if(Ue)return r.scrollTo({left:a}),qe(r,s);let t,i,l=requestAnimationFrame(p=>{const{scrollLeft:y}=r,u=a-y,b=450;(function v(E){const W=E-p;if(W>b)return r.scrollLeft=a,e(),s();r.scrollLeft=Ze(W/b)*u+y,l=requestAnimationFrame(v)})(p)});return r.addEventListener("touchstart",o),e;function e(){cancelAnimationFrame(l),t===void 0?c():(i&&i(),m())}function o(){e(),t=r.scrollLeft,r.addEventListener("touchend",d)}function d(){m(),t===r.scrollLeft&&(i=X(r,a,s))}function c(){r.removeEventListener("touchstart",o)}function m(){r.removeEventListener("touchend",d)}}function Ze(r){return r<.5?2*r*r:-1+(4-2*r)*r}const Z=-1,G=1;class Ge extends Marko.Component{cleanupAsync(){clearTimeout(this.autoplayTimeout),cancelAnimationFrame(this.renderFrame),cancelAnimationFrame(this.focusFrame),this.cancelScrollTransition&&(this.cancelScrollTransition(),this.cancelScrollTransition=void 0)}emitUpdate(){const{config:a,items:s}=this.state;a.scrollTransitioning=!1,this.emit("move",{visibleIndexes:s.filter(({fullyVisible:t})=>t).map(t=>s.indexOf(t))})}handleScroll(a){const{state:s}=this,{config:t,items:i,gap:l}=s;let e;if(a>=this.getMaxOffset(s)-l)e=i.length-1;else{const o=s.itemsPerSlide||1,d=i.length;let c=0,m=Math.ceil(d/o)-1;for(;m-c>1;){const u=Math.floor((c+m)/2);a>i[u*o].left?c=u:m=u}const p=Math.abs(a-i[c*o].left),y=Math.abs(a-i[m*o].left);e=this.normalizeIndex(s,(p>y?m:c)*o)}s.index!==e&&(this.skipScrolling=!0,t.preserveItems=!0,this.setState("index",e),this.emit("scroll",{index:e}))}getOffset(a){const{items:s,index:t}=a;return s.length&&Math.min(s[t].left,this.getMaxOffset(a))||0}getMaxOffset({items:a,slideWidth:s}){return a.length&&Math.max(a[a.length-1].right-s,0)||0}getSlide({index:a,itemsPerSlide:s},t=a){if(s)return Math.ceil(t/s)}normalizeIndex({items:a,itemsPerSlide:s},t){if(t>0){let i=t;return i%=a.length||1,i-=i%(s||1),i=Math.abs(i),i}return 0}isAnimating(a){const{items:s,index:t}=a;if(!s.length)return!1;const i=s[t];return i.left===void 0||i.right===void 0}getNextIndex(a,s){const{index:t,items:i,slideWidth:l,itemsPerSlide:e}=a;let o=t,d;if(s===Z&&o===0)o=i.length-1;else{do d=i[o+=s];while(d&&d.fullyVisible);if(s===Z&&!e){const c=d.right-l;do d=i[--o];while(d&&d.left>=c);o+=1}}return this.normalizeIndex(a,o)}getTemplateData(a){const{config:s,autoplayInterval:t,items:i,itemsPerSlide:l,slideWidth:e,gap:o}=a,d=s.offsetOverride!==void 0,c=i.length<=l;a.index=this.normalizeIndex(a,a.index);const m=this.getOffset(a),p=c||!t&&m===0,y=c||!t&&m===this.getMaxOffset(a),u=this.isAnimating(a)?a.bothControlsDisabled:p&&y;let b,v,E;if(l){const f=l+a.peek;b=this.getSlide(a),v=`calc(${100/f}% - ${(f-1)*o/f}px)`,E=this.getSlide(a,i.length)}return i.forEach((f,Me)=>{const{style:D,transform:q}=f,ae=Me!==i.length-1&&`${o}px`;typeof D=="string"?(f.style=`${D};flex-basis:${v};margin-right:${ae};`,q&&(f.style+=`transform:${q}`)):f.style=Object.assign({},D,{width:v,"margin-right":ae,transform:q}),f.fullyVisible=f.left===void 0||f.left-m>=-.01&&f.right-m<=e+.01}),Object.assign({},a,{items:i,slide:b,offset:d?s.offsetOverride:m,disableTransition:d,totalSlides:E,prevControlDisabled:p,nextControlDisabled:y,bothControlsDisabled:u})}move(a){const{state:s}=this,{index:t,items:i,itemsPerSlide:l,autoplayInterval:e,slideWidth:o,gap:d,peek:c,config:m}=s,p=this.getNextIndex(s,a);let y;if(m.preserveItems=!0,this.isMoving=!0,this.skipScrolling=!1,e){if(a===G&&p<t){y=-o-d;for(let u=Math.ceil(l+c);u--;){const b=i[i.length-u-1];b.transform=`translateX(${(this.getMaxOffset(s)+o+d)*-1}px)`}}else if(a===Z&&p>t){y=this.getMaxOffset(s)+o+d;for(let u=Math.ceil(l+c);u--;){const b=i[u];b.transform=`translateX(${this.getMaxOffset(s)+o+d}px)`}}m.offsetOverride=y}return this.setState("index",p),this.once("move",()=>{this.isMoving=!1,y!==void 0&&i.forEach(u=>{u.transform=void 0})}),p}handleMove(a,s){if(this.isMoving)return;const{state:t}=this,i=this.move(a),l=this.getSlide(t,i);this.emit("slide",{slide:l+1,originalEvent:s}),this.emit(`${a===1?"next":"previous"}`,{originalEvent:s})}handleStartInteraction(){this.setState("interacting",!0)}handleEndInteraction(){clearTimeout(this.interactionEndTimeout),this.isMoving?this.state.interacting&&(this.interactionEndTimeout=setTimeout(()=>{this.handleEndInteraction()},100)):this.setState("interacting",!1)}togglePlay(a){const{state:{config:s,paused:t}}=this;s.preserveItems=!0,this.setState("paused",!t),t&&!this.isMoving&&this.move(G),this.emit(`${t?"play":"pause"}`,{originalEvent:a})}onInput(a){var e;const s=parseInt(a.gap,10),t={htmlAttributes:se(a,["class","style","index","type","slide","gap","autoplay","paused","itemsPerSlide","a11yPreviousText","a11yNextText","a11yPlayText","a11yPauseText","items","hiddenScrollbar"]),classes:["carousel",a.hiddenScrollbar&&"carousel--hidden-scrollbar",a.class],style:a.style,config:{},gap:isNaN(s)?16:s,index:parseInt(a.index,10)||0,itemsPerSlide:parseFloat(a.itemsPerSlide)||0,a11yPreviousText:a.a11yPreviousText||"Previous Slide",a11yNextText:a.a11yNextText||"Next Slide",a11yPauseText:a.a11yPauseText||"Pause",a11yPlayText:a.a11yPlayText||"Play",ariaRoleDescription:a["aria-roledescription"]||"Carousel",items:[],slideWidth:0,autoplayInterval:0,paused:!1,peek:0,interacting:!1,bothControlsDisabled:!1},i=["class","style","key"],{itemsPerSlide:l}=t;if(l&&(t.peek=l%1,t.itemsPerSlide=l-t.peek,t.classes.push("carousel--slides"),!t.peek&&!a.autoplay&&!a.noPeek&&(t.peek=.1),t.peek&&t.classes.push("carousel--peek"),a.autoplay)){const o=((e=a.items)==null?void 0:e.length)<=l;t.autoplayInterval=parseInt(a.autoplay,10)||4e3,t.classes.push("carousel__autoplay"),t.paused=!!(o||a.paused),t.interacting=!1}t.items=(a.items||[]).map((o,d)=>{const c=t.itemsPerSlide?d%t.itemsPerSlide===0:!0;return{htmlAttributes:se(o,i),class:c?["carousel__snap-point",o.class]:o.class,key:o.key||d.toString(),style:o.style,renderBody:o.renderBody}}),this.state=t}onRender(){typeof window<"u"&&this.cleanupAsync()}onMount(){const{config:a}=this.state;this.listEl=this.getEl("list"),this.nextEl=this.getEl("next"),this.containerEl=this.getEl("container"),this.subscribeTo(We).on("resize",()=>{this.cleanupAsync(),this.onRenderLegacy()}),this.skipScrolling=!1,re(this.listEl)?(a.nativeScrolling=!0,this.once("destroy",De(this.listEl,()=>{a.scrollTransitioning||this.handleScroll(this.listEl.scrollLeft)}))):this.subscribeTo(this.listEl).on("transitionend",({target:s})=>{s===this.listEl&&this.emitUpdate()}),this.onRenderLegacy()}onUpdate(){this.onRenderLegacy()}onDestroy(){this.cleanupAsync()}onRenderLegacy(){const{containerEl:a,listEl:s,state:t}=this,{config:i,items:l,autoplayInterval:e,paused:o,interacting:d}=t;if(l.length){if(i.offsetOverride){i.offsetOverride=void 0,this.renderFrame=requestAnimationFrame(()=>this.setStateDirty(void 0));return}if(i.preserveItems){if(i.preserveItems=!1,this.focusFrame=requestAnimationFrame(()=>{oe(s,c=>{Re(c).forEach(c.getAttribute("aria-hidden")!=="true"?m=>m.hasAttribute("data-carousel-tabindex")?m.setAttribute("tabindex",m.getAttribute("data-carousel-tabindex")??"-1"):m.removeAttribute("tabindex"):m=>m.setAttribute("tabindex","-1"))})}),i.nativeScrolling)if(this.skipScrolling)this.emitUpdate();else{const c=this.getOffset(t);c!==s.scrollLeft?(i.scrollTransitioning=!0,this.cancelScrollTransition=X(s,c,this.emitUpdate.bind(this))):this.isMoving&&(i.scrollTransitioning=!0,this.cancelScrollTransition=X(s,this.getOffset(t),this.emitUpdate.bind(this)))}if(e&&!o&&!d){const c=this.move.bind(this,G);this.autoplayTimeout=setTimeout(()=>{if(this.isMoving)return this.once("move",c);c()},e)}return}this.renderFrame=requestAnimationFrame(()=>{const{width:c}=a.getBoundingClientRect(),{left:m}=s.firstElementChild.getBoundingClientRect();this.setStateDirty("slideWidth",c),i.preserveItems=!0,i.nativeScrolling=re(s),oe(s,(p,y)=>{const u=l[y],{left:b,right:v}=p.getBoundingClientRect();u.left=b-m,u.right=v-m})})}}}function re(r){return getComputedStyle(r).overflowX!=="visible"}function oe(r,a){let s=0,t=r.firstElementChild;for(;t;)a(t,s++),t=t.nextElementSibling}const H="UwAhZWoh",x=w(H);C.r(H,()=>x);const _e=Ge;x._=T(function(r,a,s,t,i,l){var e=t.getTemplateData(i),o=e.config;a.be("div",ie(e.htmlAttributes,{class:B(e.classes),style:U(e.style),"aria-roledescription":e.ariaRoleDescription,role:"group"}),"0",t,null,4),a.be("div",{class:B(["carousel__container",e.bothControlsDisabled&&"carousel__container--controls-disabled"]),id:s.elId("container")},"@container",t,null,1,{onfocusin:s.d("focusin",!!e.autoplayInterval&&"handleStartInteraction",!1),ontouchstart:s.d("touchstart",!!e.autoplayInterval&&"handleStartInteraction",!1),onmouseover:s.d("mouseover",!!e.autoplayInterval&&"handleStartInteraction",!1),onfocusout:s.d("focusout",!!e.autoplayInterval&&"handleEndInteraction",!1),onmouseout:s.d("mouseout",!!e.autoplayInterval&&"handleEndInteraction",!1),ontouchend:s.d("touchend",!!e.autoplayInterval&&"handleEndInteraction",!1)}),a.be("button",{class:"carousel__control carousel__control--prev",type:"button","aria-label":e.a11yPreviousText,"aria-disabled":e.prevControlDisabled&&"true"},"1",t,null,0,{onclick:s.d("click",!e.prevControlDisabled&&"handleMove",!1,[-1])}),g(Oe,{},a,s,"2"),a.ee(),a.be("div",{class:B(["carousel__viewport",!e.itemsPerSlide&&!e.nextControlDisabled&&!e.autoplayInterval&&"carousel__viewport--mask"])},"3",t,null,1),a.be("ul",{class:B(["carousel__list",r.imageTreatment==="matte"&&"carousel__list--image-treatment"]),style:U(!o.nativeScrolling&&!!e.offset&&{transform:"translate3d("+e.offset*-1+"px,0,0)",transition:e.disableTransition?"none":void 0}),id:s.elId("list")},"@list",t,null,1);for(const d of Ne(e.items)){const c=`@${d.key}`,m=`[${c}]`;a.be("li",ie(d.htmlAttributes,{class:B(d.class),style:U(d.style),"aria-hidden":!d.fullyVisible&&"true"}),c,t,null,4),g(Fe,{n:!0,b:!0,i:!!o.preserveItems,renderBody:p=>{ze(p,d.renderBody,null,null,null,null,s,"4"+m)}},a,s,c),a.ee()}a.ee(),a.ee(),a.be("button",{class:"carousel__control carousel__control--next",type:"button","aria-label":e.a11yNextText,"aria-disabled":e.nextControlDisabled&&"true",id:s.elId("next")},"@next",t,null,0,{onclick:s.d("click",!e.nextControlDisabled&&"handleMove",!1,[1])}),g(je,{},a,s,"5"),a.ee(),e.autoplayInterval&&!e.bothControlsDisabled&&(a.be("button",{type:"button","aria-label":e.paused?e.a11yPlayText:e.a11yPauseText,class:"carousel__playback"},"6",t,null,0,{onclick:s.d("click","togglePlay",!1)}),e.paused?g(Le,{},a,s,"7"):g(Ve,{},a,s,"8"),a.ee()),a.ee(),a.ee()},{t:H},_e);x.Component=k(_e,x._);const Xe=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`,J="qCGPawMg",F=w(J),He=h("style",null,1).t(`
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
`);C.r(J,()=>I);const Ie={};F._=T(function(r,a,s,t,i,l){a.n(He,t),g(x,_(()=>{n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Card 1",t)}}),n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Card 2",t)}}),n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Card 3",t)}}),n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Card 4",t)}}),n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Card 5",t)}}),n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Card 6",t)}}),n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Card 7",t)}}),n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Card 8",t)}}),n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Card 9",t)}}),n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Card 10",t)}})},{...r,items:void 0}),a,s,"1",[["move","emit",!1,["move"]],["next","emit",!1,["next"]],["previous","emit",!1,["previous"]],["scroll","emit",!1,["scroll"]],["slide","emit",!1,["slide"]]])},{t:J,s:!0},Ie);F.Component=k(Ie,F._);const Je=`export interface Input {
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
`,K="rigEAZpd",N=w(K),Ke=h("style",null,1).t(`
    .demo2-card {
        color: #cdf4fd;
        background: #a1208b;
        font-size: 36px;
        font-weight: bold;
        height: 330px;
        line-height: 330px;
        text-align: center;
    }
`);C.r(K,()=>I);const Be={};N._=T(function(r,a,s,t,i,l){a.n(Ke,t),g(x,_(()=>{n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 1",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 2",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 3",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 4",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 5",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 6",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 7",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 8",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 9",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 10",t)}})},{...r,itemsPerSlide:r.itemsPerSlide||2,items:void 0}),a,s,"1",[["move","emit",!1,["move"]],["next","emit",!1,["next"]],["previous","emit",!1,["previous"]],["scroll","emit",!1,["scroll"]],["slide","emit",!1,["slide"]]])},{t:K,s:!0},Be);N.Component=k(Be,N._);const Qe=`export interface Input {
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
`,Q="clqZZbFk",j=w(Q),Ye=h("style",null,1).t(`
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
`),et=h("img",{"aria-label":"photo 1",src:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/aztec-pyramid.jpeg"},0),tt=h("img",{"aria-label":"photo 2",src:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/falls.jpeg"},0),at=h("img",{"aria-label":"photo 3",src:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/mountain.jpeg"},0),st=h("img",{"aria-label":"photo 4",src:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg"},0),it=h("img",{"aria-label":"photo 5",src:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/tall-cat.jpeg"},0),nt=h("img",{"aria-label":"photo 6",src:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/wide-cat.jpeg"},0);C.r(Q,()=>I);const Ee={};j._=T(function(r,a,s,t,i,l){a.n(Ye,t),g(x,_(()=>{n("items",{renderBody:e=>{e.n(et,t)}}),n("items",{renderBody:e=>{e.n(tt,t)}}),n("items",{renderBody:e=>{e.n(at,t)}}),n("items",{renderBody:e=>{e.n(st,t)}}),n("items",{renderBody:e=>{e.n(it,t)}}),n("items",{renderBody:e=>{e.n(nt,t)}}),n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Additional Item",t)}}),n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Additional Item 2",t)}})},{imageTreatment:"matte",...r,items:void 0}),a,s,"1",[["carousel-update","emit",!1,["carousel-update"]],["move","emit",!1,["move"]],["next","emit",!1,["next"]],["previous","emit",!1,["previous"]],["scroll","emit",!1,["scroll"]],["slide","emit",!1,["slide"]]])},{t:Q,s:!0},Ee);j.Component=k(Ee,j._);const rt=`export interface Input {
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
`,Y="EmUmwvjg",L=w(Y),ot=h("style",null,1).t(`
    .demo2-card {
        color: #cdf4fd;
        background: #a1208b;
        font-size: 36px;
        font-weight: bold;
        height: 330px;
        line-height: 330px;
        text-align: center;
    }
`);C.r(Y,()=>I);const Pe={};L._=T(function(r,a,s,t,i,l){a.n(ot,t),g(x,_(()=>{n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 1",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 2",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 3",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 4",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 5",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 6",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 7",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 8",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 9",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 10",t)}})},{...r,itemsPerSlide:r.itemsPerSlide||1,autoplay:r.autoplay||!0,items:void 0}),a,s,"1",[["move","emit",!1,["move"]],["next","emit",!1,["next"]],["previous","emit",!1,["previous"]],["scroll","emit",!1,["scroll"]],["slide","emit",!1,["slide"]],["play","emit",!1,["play"]],["pause","emit",!1,["pause"]]])},{t:Y,s:!0},Pe);L.Component=k(Pe,L._);const lt=`export interface Input {
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
`,ee="qBJFZOsk",V=w(ee),dt=h("style",null,1).t(`
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
`),ct=h("div",{class:"preserve-tabindex-card"},2).e("a",{href:"https://www.ebay.com","data-carousel-tabindex":"-1"},1).t("Image here").e("a",{href:"https://www.ebay.com"},1).t("Card 1"),mt=h("div",{class:"preserve-tabindex-card"},2).e("a",{href:"https://www.ebay.com","data-carousel-tabindex":"-1"},1).t("Image here").e("a",{href:"https://www.ebay.com"},1).t("Card 2"),ht=h("div",{class:"preserve-tabindex-card"},2).e("a",{href:"https://www.ebay.com","data-carousel-tabindex":"-1"},1).t("Image here").e("a",{href:"https://www.ebay.com"},1).t("Card 3"),ut=h("div",{class:"preserve-tabindex-card"},2).e("a",{href:"https://www.ebay.com","data-carousel-tabindex":"-1"},1).t("Image here").e("a",{href:"https://www.ebay.com"},1).t("Card 4"),pt=h("div",{class:"preserve-tabindex-card"},2).e("a",{href:"https://www.ebay.com","data-carousel-tabindex":"-1"},1).t("Image here").e("a",{href:"https://www.ebay.com"},1).t("Card 5"),yt=h("div",{class:"preserve-tabindex-card"},2).e("a",{href:"https://www.ebay.com","data-carousel-tabindex":"-1"},1).t("Image here").e("a",{href:"https://www.ebay.com"},1).t("Card 6"),ft=h("div",{class:"preserve-tabindex-card"},2).e("a",{href:"https://www.ebay.com","data-carousel-tabindex":"-1"},1).t("Image here").e("a",{href:"https://www.ebay.com"},1).t("Card 7"),bt=h("div",{class:"preserve-tabindex-card"},2).e("a",{href:"https://www.ebay.com","data-carousel-tabindex":"-1"},1).t("Image here").e("a",{href:"https://www.ebay.com"},1).t("Card 8");C.r(ee,()=>I);const $e={};V._=T(function(r,a,s,t,i,l){a.n(dt,t),g(x,_(()=>{n("items",{renderBody:e=>{e.n(ct,t)}}),n("items",{renderBody:e=>{e.n(mt,t)}}),n("items",{renderBody:e=>{e.n(ht,t)}}),n("items",{renderBody:e=>{e.n(ut,t)}}),n("items",{renderBody:e=>{e.n(pt,t)}}),n("items",{renderBody:e=>{e.n(yt,t)}}),n("items",{renderBody:e=>{e.n(ft,t)}}),n("items",{renderBody:e=>{e.n(bt,t)}})},{...r,items:void 0}),a,s,"1",[["move","emit",!1,["move"]],["next","emit",!1,["next"]],["previous","emit",!1,["previous"]],["scroll","emit",!1,["scroll"]],["slide","emit",!1,["slide"]]])},{t:ee,s:!0},$e);V.Component=k($e,V._);const gt=`export interface Input {
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
`,te="oGGhXxNf",R=w(te),xt=h("style",null,1).t(`
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
`);C.r(te,()=>I);const Ae={};R._=T(function(r,a,s,t,i,l){a.n(xt,t),g(x,_(()=>{n("items",{style:"width:100px",class:"demo-card3",renderBody:e=>{e.t("Card 1",t)}}),n("items",{style:"width:57px",class:"demo-card3",renderBody:e=>{e.t("C2",t)}}),n("items",{style:"width:120px",class:"demo-card3",renderBody:e=>{e.t("Card 3",t)}}),n("items",{style:"width:200px",class:"demo-card3",renderBody:e=>{e.t("Card 4",t)}}),n("items",{style:"width:130px",class:"demo-card3",renderBody:e=>{e.t("Card 5",t)}}),n("items",{style:"width:150px",class:"demo-card3",renderBody:e=>{e.t("Card 6",t)}}),n("items",{style:"width:100px",class:"demo-card3",renderBody:e=>{e.t("Card 7",t)}}),n("items",{style:"width:200px",class:"demo-card3",renderBody:e=>{e.t("Card 8",t)}}),n("items",{style:"width:60px",class:"demo-card3",renderBody:e=>{e.t("C9",t)}}),n("items",{style:"width:140px",class:"demo-card3",renderBody:e=>{e.t("Card 10",t)}})},{...r,items:void 0}),a,s,"1",[["move","emit",!1,["move"]],["next","emit",!1,["next"]],["previous","emit",!1,["previous"]],["scroll","emit",!1,["scroll"]],["slide","emit",!1,["slide"]]])},{t:te,s:!0},Ae);R.Component=k(Ae,R._);const vt=`export interface Input {
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
`,Lt={title:"navigation & disclosure/ebay-carousel",component:x,parameters:{docs:{description:{component:Xe}}},argTypes:{numberOfItems:{description:"The amount of items",table:{category:"Demo configuration"}},item:{name:"@item",description:"The contents for each item",table:{category:"@attribute tags"}},imageTreatment:{options:["none","matte"],description:'If "matte", image treatment styles are applied.',table:{defaultValue:{summary:"none"}},type:"select"},index:{type:"number",description:"0-based index position"},itemsPerSlide:{description:"automatically fit a number of items for each carousel slide and enable slide controls. If set to a whole number, will default to x.1 where x is the whole number set."},gap:{type:"number",description:"override the margin between carousel items in pixels",table:{defaultValue:{summary:"16"}}},"aria-label":{description:"a11y label text for component",table:{category:"accessibility attributes"},control:{type:"text"}},"aria-labelledby":{description:"id of element containing a11y label text for component",table:{category:"accessibility attributes"},control:{type:"text"}},"aria-roledescription":{description:"a11y role description for component",table:{defaultValue:{summary:"Carousel"},category:"accessibility attributes"},control:{type:"text"}},"a11y-next-text":{description:"a11y text for next control",table:{defaultValue:{summary:"Next Slide"},category:"accessibility attributes"}},"a11y-previous-text":{description:"a11y text for previous control",table:{defaultValue:{summary:"Previous Slide"},category:"accessibility attributes"}},onMove:{action:"on-move",description:"called whenever item visibility changes, including initialization",table:{category:"Events",defaultValue:{detail:"{ [visibleIndexes] }"}}},onNext:{action:"on-next",description:"click next",table:{category:"Events",defaultValue:{detail:"{ originalEvent }"}}},onPrevious:{action:"on-previous",description:"click previous",table:{category:"Events",defaultValue:{detail:"{ originalEvent }"}}},onScroll:{action:"on-scroll",description:"new index is navigated to by native scrollin",table:{category:"Events",defaultValue:{detail:"{ index }"}}},onSlide:{action:"on-slide",description:"new slide is navigated to (by controls or API)",table:{category:"Events (items-per-slide)",defaultValue:{summary:"{ slide }"}}},onPlay:{action:"on-play",description:"called when the autoplay play button is pressed",table:{category:"Events (autoplay)",defaultValue:{summary:"{ originalEvent }"}}},onPause:{action:"on-pause",description:"called when the autoplay pause button is pressed",table:{category:"Events (autoplay)",defaultValue:{summary:"{ originalEvent }"}}}}},P=S(F,Je),$=S(j,rt),A=S(N,Qe),M=S(L,lt),O=S(V,gt),z=S(R,vt);var le,de,ce;P.parameters={...P.parameters,docs:{...(le=P.parameters)==null?void 0:le.docs,source:{originalSource:"buildExtensionTemplate(continiousTemplate, continiousTemplateCode)",...(ce=(de=P.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var me,he,ue;$.parameters={...$.parameters,docs:{...(me=$.parameters)==null?void 0:me.docs,source:{originalSource:"buildExtensionTemplate(continiousImageTreatmentTemplate, continiousImageTreatmentTemplateCode)",...(ue=(he=$.parameters)==null?void 0:he.docs)==null?void 0:ue.source}}};var pe,ye,fe;A.parameters={...A.parameters,docs:{...(pe=A.parameters)==null?void 0:pe.docs,source:{originalSource:"buildExtensionTemplate(discreteTemplate, discreteTemplateCode)",...(fe=(ye=A.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var be,ge,xe;M.parameters={...M.parameters,docs:{...(be=M.parameters)==null?void 0:be.docs,source:{originalSource:"buildExtensionTemplate(autoplayTemplate, autoplayTemplateCode)",...(xe=(ge=M.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var ve,we,Ce;O.parameters={...O.parameters,docs:{...(ve=O.parameters)==null?void 0:ve.docs,source:{originalSource:"buildExtensionTemplate(preserveTabindexTemplate, preserveTabindexTemplateCode)",...(Ce=(we=O.parameters)==null?void 0:we.docs)==null?void 0:Ce.source}}};var Te,ke,Se;z.parameters={...z.parameters,docs:{...(Te=z.parameters)==null?void 0:Te.docs,source:{originalSource:"buildExtensionTemplate(variableSizesTemplate, variableSizesTemplateCode)",...(Se=(ke=z.parameters)==null?void 0:ke.docs)==null?void 0:Se.source}}};const Vt=["Continuous","ContinuousImageTreatment","Discrete","Autoplay","preserveTabindex","variableSizes"];export{M as Autoplay,P as Continuous,$ as ContinuousImageTreatment,A as Discrete,Vt as __namedExportsOrder,Lt as default,O as preserveTabindex,z as variableSizes};
