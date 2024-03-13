import{b as S}from"./utils-DWCsNc5l.js";import{p as ie,t as v,r as w,b as C,e as se,f as _,g as U,d as T}from"./registry-ZV7By7ZP.js";/* empty css             */import{_ as ze,a as Oe,b as Fe}from"./index-BUz7DMv0.js";import{_ as g}from"./render-tag-Buaq4gMc.js";import{_ as Le}from"./dynamic-tag-Dub0dLVC.js";import{_ as je}from"./preserve-tag-BONaGDAG.js";import{_ as Ne}from"./index-COGebort.js";import{s as Ve}from"./index--35j0Bzx.js";import{r as Re}from"./index-blmbJU0z.js";import{_ as h}from"./const-element-BsegXDZ8.js";import{i as I,r as n}from"./attr-tag-DphMQldM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-Z5IdgrQn.js";const ne={passive:!0};function De(r,a){let i;return t(),o;function t(){r.addEventListener("scroll",s,ne)}function s(){e(),i=setTimeout(l,640)}function l(){a(),t()}function e(){r.removeEventListener("scroll",s,ne)}function o(){e(),clearTimeout(i)}}function We(r,a){let i,t,s;return function l(){const{scrollLeft:e}=r;if(s!==e){s=e,i=setTimeout(()=>{t=requestAnimationFrame(l)},90);return}a(s)}(),()=>{clearTimeout(i),cancelAnimationFrame(t)}}const qe=typeof window<"u"&&"scrollBehavior"in document.documentElement.style;function Q(r,a,i){if(qe)return r.scrollTo({left:a}),We(r,i);let t,s,l=requestAnimationFrame(y=>{const{scrollLeft:p}=r,u=a-p,b=450;(function x(O){const D=O-y;if(D>b)return r.scrollLeft=a,e(),i();r.scrollLeft=Ue(D/b)*u+p,l=requestAnimationFrame(x)})(y)});return r.addEventListener("touchstart",o),e;function e(){cancelAnimationFrame(l),t===void 0?c():(s&&s(),m())}function o(){e(),t=r.scrollLeft,r.addEventListener("touchend",d)}function d(){m(),t===r.scrollLeft&&(s=Q(r,a,i))}function c(){r.removeEventListener("touchstart",o)}function m(){r.removeEventListener("touchend",d)}}function Ue(r){return r<.5?2*r*r:-1+(4-2*r)*r}const H=-1,X=1;class He extends Marko.Component{cleanupAsync(){clearTimeout(this.autoplayTimeout),cancelAnimationFrame(this.renderFrame),cancelAnimationFrame(this.focusFrame),this.cancelScrollTransition&&(this.cancelScrollTransition(),this.cancelScrollTransition=void 0)}emitUpdate(){const{config:a,items:i}=this.state;a.scrollTransitioning=!1,this.emit("move",{visibleIndexes:i.filter(({fullyVisible:t})=>t).map(t=>i.indexOf(t))})}handleScroll(a){const{state:i}=this,{config:t,items:s,gap:l}=i;let e;if(a>=this.getMaxOffset(i)-l)e=s.length-1;else{const o=i.itemsPerSlide||1,d=s.length;let c=0,m=Math.ceil(d/o)-1;for(;m-c>1;){const u=Math.floor((c+m)/2);a>s[u*o].left?c=u:m=u}const y=Math.abs(a-s[c*o].left),p=Math.abs(a-s[m*o].left);e=this.normalizeIndex(i,(y>p?m:c)*o)}i.index!==e&&(this.skipScrolling=!0,t.preserveItems=!0,this.setState("index",e),this.emit("scroll",{index:e}))}getOffset(a){const{items:i,index:t}=a;return i.length&&Math.min(i[t].left,this.getMaxOffset(a))||0}getMaxOffset({items:a,slideWidth:i}){return a.length&&Math.max(a[a.length-1].right-i,0)||0}getSlide({index:a,itemsPerSlide:i},t=a){if(i)return Math.ceil(t/i)}normalizeIndex({items:a,itemsPerSlide:i},t){if(t>0){let s=t;return s%=a.length||1,s-=s%(i||1),s=Math.abs(s),s}return 0}isAnimating(a){const{items:i,index:t}=a;if(!i.length)return!1;const s=i[t];return s.left===void 0||s.right===void 0}getNextIndex(a,i){const{index:t,items:s,slideWidth:l,itemsPerSlide:e}=a;let o=t,d;if(i===H&&o===0)o=s.length-1;else{do d=s[o+=i];while(d&&d.fullyVisible);if(i===H&&!e){const c=d.right-l;do d=s[--o];while(d&&d.left>=c);o+=1}}return this.normalizeIndex(a,o)}getTemplateData(a){const{config:i,autoplayInterval:t,items:s,itemsPerSlide:l,slideWidth:e,gap:o}=a,d=i.offsetOverride!==void 0,c=s.length<=l;a.index=this.normalizeIndex(a,a.index);const m=this.getOffset(a),y=c||!t&&m===0,p=c||!t&&m===this.getMaxOffset(a),u=this.isAnimating(a)?a.bothControlsDisabled:y&&p;let b,x,O;if(l){const f=l+a.peek;b=this.getSlide(a),x=`calc(${100/f}% - ${(f-1)*o/f}px)`,O=this.getSlide(a,s.length)}return s.forEach((f,Me)=>{const{style:W,transform:q}=f,ae=Me!==s.length-1&&`${o}px`;typeof W=="string"?(f.style=`${W};flex-basis:${x};margin-right:${ae};`,q&&(f.style+=`transform:${q}`)):f.style=Object.assign({},W,{width:x,"margin-right":ae,transform:q}),f.fullyVisible=f.left===void 0||f.left-m>=-.01&&f.right-m<=e+.01}),Object.assign({},a,{items:s,slide:b,offset:d?i.offsetOverride:m,disableTransition:d,totalSlides:O,prevControlDisabled:y,nextControlDisabled:p,bothControlsDisabled:u})}move(a){const{state:i}=this,{index:t,items:s,itemsPerSlide:l,autoplayInterval:e,slideWidth:o,gap:d,peek:c,config:m}=i,y=this.getNextIndex(i,a);let p;if(m.preserveItems=!0,this.isMoving=!0,this.skipScrolling=!1,e){if(a===X&&y<t){p=-o-d;for(let u=Math.ceil(l+c);u--;){const b=s[s.length-u-1];b.transform=`translateX(${(this.getMaxOffset(i)+o+d)*-1}px)`}}else if(a===H&&y>t){p=this.getMaxOffset(i)+o+d;for(let u=Math.ceil(l+c);u--;){const b=s[u];b.transform=`translateX(${this.getMaxOffset(i)+o+d}px)`}}m.offsetOverride=p}return this.setState("index",y),this.once("move",()=>{this.isMoving=!1,p!==void 0&&s.forEach(u=>{u.transform=void 0})}),y}handleMove(a,i){if(this.isMoving)return;const{state:t}=this,s=this.move(a),l=this.getSlide(t,s);this.emit("slide",{slide:l+1,originalEvent:i}),this.emit(`${a===1?"next":"previous"}`,{originalEvent:i})}handleStartInteraction(){this.setState("interacting",!0)}handleEndInteraction(){clearTimeout(this.interactionEndTimeout),this.isMoving?this.state.interacting&&(this.interactionEndTimeout=setTimeout(()=>{this.handleEndInteraction()},100)):this.setState("interacting",!1)}togglePlay(a){const{state:{config:i,paused:t}}=this;i.preserveItems=!0,this.setState("paused",!t),t&&!this.isMoving&&this.move(X),this.emit(`${t?"play":"pause"}`,{originalEvent:a})}onInput(a){var e;const i=parseInt(a.gap,10),t={htmlAttributes:ie(a,["class","style","index","type","slide","gap","autoplay","paused","itemsPerSlide","a11yPreviousText","a11yNextText","a11yPlayText","a11yPauseText","items","hiddenScrollbar"]),classes:["carousel",a.hiddenScrollbar&&"carousel--hidden-scrollbar",a.class],style:a.style,config:{},gap:isNaN(i)?16:i,index:parseInt(a.index,10)||0,itemsPerSlide:parseFloat(a.itemsPerSlide)||0,a11yPreviousText:a.a11yPreviousText||"Previous Slide",a11yNextText:a.a11yNextText||"Next Slide",a11yPauseText:a.a11yPauseText||"Pause",a11yPlayText:a.a11yPlayText||"Play",ariaRoleDescription:a["aria-roledescription"]||"Carousel",items:[],slideWidth:0,autoplayInterval:0,paused:!1,peek:0,interacting:!1,bothControlsDisabled:!1},s=["class","style","key"],{itemsPerSlide:l}=t;if(l&&(t.peek=l%1,t.itemsPerSlide=l-t.peek,t.classes.push("carousel--slides"),!t.peek&&!a.autoplay&&!a.noPeek&&(t.peek=.1),t.peek&&t.classes.push("carousel--peek"),a.autoplay)){const o=((e=a.items)==null?void 0:e.length)<=l;t.autoplayInterval=parseInt(a.autoplay,10)||4e3,t.classes.push("carousel__autoplay"),t.paused=!!(o||a.paused),t.interacting=!1}t.items=(a.items||[]).map((o,d)=>{const c=t.itemsPerSlide?d%t.itemsPerSlide===0:!0;return{htmlAttributes:ie(o,s),class:c?["carousel__snap-point",o.class]:o.class,key:o.key||d.toString(),style:o.style,renderBody:o.renderBody,left:0,right:0}}),this.state=t}onRender(){typeof window<"u"&&this.cleanupAsync()}onMount(){const{config:a}=this.state;this.listEl=this.getEl("list"),this.nextEl=this.getEl("next"),this.containerEl=this.getEl("container"),this.subscribeTo(Re).on("resize",()=>{this.cleanupAsync(),this.onRenderLegacy()}),this.skipScrolling=!1,re(this.listEl)?(a.nativeScrolling=!0,this.once("destroy",De(this.listEl,()=>{a.scrollTransitioning||this.handleScroll(this.listEl.scrollLeft)}))):this.subscribeTo(this.listEl).on("transitionend",({target:i})=>{i===this.listEl&&this.emitUpdate()}),this.onRenderLegacy()}onUpdate(){this.onRenderLegacy()}onDestroy(){this.cleanupAsync()}onRenderLegacy(){const{containerEl:a,listEl:i,state:t}=this,{config:s,items:l,autoplayInterval:e,paused:o,interacting:d}=t;if(l.length){if(s.offsetOverride){s.offsetOverride=void 0,this.renderFrame=requestAnimationFrame(()=>this.setStateDirty(void 0));return}if(s.preserveItems){if(s.preserveItems=!1,this.focusFrame=requestAnimationFrame(()=>{oe(i,c=>{Ve(c).forEach(c.getAttribute("aria-hidden")!=="true"?m=>m.hasAttribute("data-carousel-tabindex")?m.setAttribute("tabindex",m.getAttribute("data-carousel-tabindex")??"-1"):m.removeAttribute("tabindex"):m=>m.setAttribute("tabindex","-1"))})}),s.nativeScrolling)if(this.skipScrolling)this.emitUpdate();else{const c=this.getOffset(t);c!==i.scrollLeft?(s.scrollTransitioning=!0,this.cancelScrollTransition=Q(i,c,this.emitUpdate.bind(this))):this.isMoving&&(s.scrollTransitioning=!0,this.cancelScrollTransition=Q(i,this.getOffset(t),this.emitUpdate.bind(this)))}if(e&&!o&&!d){const c=this.move.bind(this,X);this.autoplayTimeout=setTimeout(()=>{if(this.isMoving)return this.once("move",c);c()},e)}return}this.renderFrame=requestAnimationFrame(()=>{const{width:c}=a.getBoundingClientRect(),{left:m}=i.firstElementChild.getBoundingClientRect();this.setStateDirty("slideWidth",c),s.preserveItems=!0,s.nativeScrolling=re(i),oe(i,(y,p)=>{const u=l[p],{left:b,right:x}=y.getBoundingClientRect();u.left=b-m,u.right=x-m})})}}}function re(r){return getComputedStyle(r).overflowX!=="visible"}function oe(r,a){let i=0,t=r.firstElementChild;for(;t;)a(t,i++),t=t.nextElementSibling}const G="jcQTeC0v",B=v(G),k=B;w.r(G,()=>B);const Ie=He;B._=C(function(r,a,i,t,s,l){var e=t.getTemplateData(s),o=e.config;a.be("div",se(e.htmlAttributes,{class:_(e.classes),style:U(e.style),"aria-roledescription":e.ariaRoleDescription,role:"group"}),"0",t,null,4),a.be("div",{class:_(["carousel__container",e.bothControlsDisabled&&"carousel__container--controls-disabled"]),id:i.elId("container")},"@container",t,null,1,{onfocusin:i.d("focusin",!!e.autoplayInterval&&"handleStartInteraction",!1),ontouchstart:i.d("touchstart",!!e.autoplayInterval&&"handleStartInteraction",!1),onmouseover:i.d("mouseover",!!e.autoplayInterval&&"handleStartInteraction",!1),onfocusout:i.d("focusout",!!e.autoplayInterval&&"handleEndInteraction",!1),onmouseout:i.d("mouseout",!!e.autoplayInterval&&"handleEndInteraction",!1),ontouchend:i.d("touchend",!!e.autoplayInterval&&"handleEndInteraction",!1)}),a.be("button",{class:"carousel__control carousel__control--prev",type:"button","aria-label":e.a11yPreviousText,"aria-disabled":e.prevControlDisabled&&"true"},"1",t,null,0,{onclick:i.d("click",!e.prevControlDisabled&&"handleMove",!1,[-1])}),g(ze,{},a,i,"2"),a.ee(),a.be("div",{class:_(["carousel__viewport",!e.itemsPerSlide&&!e.nextControlDisabled&&!e.autoplayInterval&&"carousel__viewport--mask"])},"3",t,null,1),a.be("ul",{class:_(["carousel__list",r.imageTreatment==="matte"&&"carousel__list--image-treatment"]),style:U(!o.nativeScrolling&&!!e.offset&&{transform:"translate3d("+e.offset*-1+"px,0,0)",transition:e.disableTransition?"none":void 0}),id:i.elId("list")},"@list",t,null,1);for(const d of e.items||[]){const c=`@${d.key}`,m=`[${c}]`;a.be("li",se(d.htmlAttributes,{class:_(d.class),style:U(d.style),"aria-hidden":!d.fullyVisible&&"true"}),c,t,null,4),g(je,{n:!0,b:!0,i:!!o.preserveItems,renderBody:y=>{Le(y,d.renderBody,null,null,null,null,i,"4"+m)}},a,i,c),a.ee()}a.ee(),a.ee(),a.be("button",{class:"carousel__control carousel__control--next",type:"button","aria-label":e.a11yNextText,"aria-disabled":e.nextControlDisabled&&"true",id:i.elId("next")},"@next",t,null,0,{onclick:i.d("click",!e.nextControlDisabled&&"handleMove",!1,[1])}),g(Ne,{},a,i,"5"),a.ee(),e.autoplayInterval&&!e.bothControlsDisabled&&(a.be("button",{type:"button","aria-label":e.paused?e.a11yPlayText:e.a11yPauseText,class:"carousel__playback"},"6",t,null,0,{onclick:i.d("click","togglePlay",!1)}),e.paused?g(Oe,{},a,i,"7"):g(Fe,{},a,i,"8"),a.ee()),a.ee(),a.ee()},{t:G},Ie);B.Component=T(Ie,B._);const Xe=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`,K="gsL1rqEL",E=v(K),Qe=h("style",null,1).t(`
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
`);w.r(K,()=>E);const _e={};E._=C(function(r,a,i,t,s,l){a.n(Qe,t),g(k,I(()=>{n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Card 1",t)}}),n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Card 2",t)}}),n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Card 3",t)}}),n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Card 4",t)}}),n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Card 5",t)}}),n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Card 6",t)}}),n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Card 7",t)}}),n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Card 8",t)}}),n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Card 9",t)}}),n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Card 10",t)}})},{...r,items:void 0}),a,i,"1",[["move","emit",!1,["move"]],["next","emit",!1,["next"]],["previous","emit",!1,["previous"]],["scroll","emit",!1,["scroll"]],["slide","emit",!1,["slide"]]])},{t:K,i:!0},_e);E.Component=T(_e,E._);const Ge=`export interface Input {
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
`,Y="QDVBwK6a",P=v(Y),Ke=h("style",null,1).t(`
    .demo2-card {
        color: #cdf4fd;
        background: #a1208b;
        font-size: 36px;
        font-weight: bold;
        height: 330px;
        line-height: 330px;
        text-align: center;
    }
`);w.r(Y,()=>P);const Be={};P._=C(function(r,a,i,t,s,l){a.n(Ke,t),g(k,I(()=>{n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 1",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 2",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 3",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 4",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 5",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 6",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 7",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 8",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 9",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 10",t)}})},{...r,itemsPerSlide:r.itemsPerSlide||2,items:void 0}),a,i,"1",[["move","emit",!1,["move"]],["next","emit",!1,["next"]],["previous","emit",!1,["previous"]],["scroll","emit",!1,["scroll"]],["slide","emit",!1,["slide"]]])},{t:Y,i:!0},Be);P.Component=T(Be,P._);const Ye=`export interface Input {
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
`,Z="zgmfYUrF",$=v(Z),Ze=h("style",null,1).t(`
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
`),Je=h("img",{"aria-label":"photo 1",src:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/aztec-pyramid.jpeg"},0),et=h("img",{"aria-label":"photo 2",src:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/falls.jpeg"},0),tt=h("img",{"aria-label":"photo 3",src:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/mountain.jpeg"},0),at=h("img",{"aria-label":"photo 4",src:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg"},0),it=h("img",{"aria-label":"photo 5",src:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/tall-cat.jpeg"},0),st=h("img",{"aria-label":"photo 6",src:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/wide-cat.jpeg"},0);w.r(Z,()=>$);const Ee={};$._=C(function(r,a,i,t,s,l){a.n(Ze,t),g(k,I(()=>{n("items",{renderBody:e=>{e.n(Je,t)}}),n("items",{renderBody:e=>{e.n(et,t)}}),n("items",{renderBody:e=>{e.n(tt,t)}}),n("items",{renderBody:e=>{e.n(at,t)}}),n("items",{renderBody:e=>{e.n(it,t)}}),n("items",{renderBody:e=>{e.n(st,t)}}),n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Additional Item",t)}}),n("items",{style:{width:400},class:"demo-card",renderBody:e=>{e.t("Additional Item 2",t)}})},{imageTreatment:"matte",...r,items:void 0}),a,i,"1",[["carousel-update","emit",!1,["carousel-update"]],["move","emit",!1,["move"]],["next","emit",!1,["next"]],["previous","emit",!1,["previous"]],["scroll","emit",!1,["scroll"]],["slide","emit",!1,["slide"]]])},{t:Z,i:!0},Ee);$.Component=T(Ee,$._);const nt=`export interface Input {
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
`,J="eEtAClPq",A=v(J),rt=h("style",null,1).t(`
    .demo2-card {
        color: #cdf4fd;
        background: #a1208b;
        font-size: 36px;
        font-weight: bold;
        height: 330px;
        line-height: 330px;
        text-align: center;
    }
`);w.r(J,()=>A);const Pe={};A._=C(function(r,a,i,t,s,l){a.n(rt,t),g(k,I(()=>{n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 1",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 2",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 3",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 4",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 5",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 6",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 7",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 8",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 9",t)}}),n("items",{style:{width:400},class:"demo2-card",renderBody:e=>{e.t("Card 10",t)}})},{...r,itemsPerSlide:r.itemsPerSlide||1,autoplay:r.autoplay||!0,items:void 0}),a,i,"1",[["move","emit",!1,["move"]],["next","emit",!1,["next"]],["previous","emit",!1,["previous"]],["scroll","emit",!1,["scroll"]],["slide","emit",!1,["slide"]],["play","emit",!1,["play"]],["pause","emit",!1,["pause"]]])},{t:J,i:!0},Pe);A.Component=T(Pe,A._);const ot=`export interface Input {
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
`,ee="yZuIx/Br",M=v(ee),lt=h("style",null,1).t(`
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
`),dt=h("div",{class:"preserve-tabindex-card"},2).e("a",{href:"https://www.ebay.com","data-carousel-tabindex":"-1"},1).t("Image here").e("a",{href:"https://www.ebay.com"},1).t("Card 1"),ct=h("div",{class:"preserve-tabindex-card"},2).e("a",{href:"https://www.ebay.com","data-carousel-tabindex":"-1"},1).t("Image here").e("a",{href:"https://www.ebay.com"},1).t("Card 2"),mt=h("div",{class:"preserve-tabindex-card"},2).e("a",{href:"https://www.ebay.com","data-carousel-tabindex":"-1"},1).t("Image here").e("a",{href:"https://www.ebay.com"},1).t("Card 3"),ht=h("div",{class:"preserve-tabindex-card"},2).e("a",{href:"https://www.ebay.com","data-carousel-tabindex":"-1"},1).t("Image here").e("a",{href:"https://www.ebay.com"},1).t("Card 4"),ut=h("div",{class:"preserve-tabindex-card"},2).e("a",{href:"https://www.ebay.com","data-carousel-tabindex":"-1"},1).t("Image here").e("a",{href:"https://www.ebay.com"},1).t("Card 5"),yt=h("div",{class:"preserve-tabindex-card"},2).e("a",{href:"https://www.ebay.com","data-carousel-tabindex":"-1"},1).t("Image here").e("a",{href:"https://www.ebay.com"},1).t("Card 6"),pt=h("div",{class:"preserve-tabindex-card"},2).e("a",{href:"https://www.ebay.com","data-carousel-tabindex":"-1"},1).t("Image here").e("a",{href:"https://www.ebay.com"},1).t("Card 7"),ft=h("div",{class:"preserve-tabindex-card"},2).e("a",{href:"https://www.ebay.com","data-carousel-tabindex":"-1"},1).t("Image here").e("a",{href:"https://www.ebay.com"},1).t("Card 8");w.r(ee,()=>M);const $e={};M._=C(function(r,a,i,t,s,l){a.n(lt,t),g(k,I(()=>{n("items",{renderBody:e=>{e.n(dt,t)}}),n("items",{renderBody:e=>{e.n(ct,t)}}),n("items",{renderBody:e=>{e.n(mt,t)}}),n("items",{renderBody:e=>{e.n(ht,t)}}),n("items",{renderBody:e=>{e.n(ut,t)}}),n("items",{renderBody:e=>{e.n(yt,t)}}),n("items",{renderBody:e=>{e.n(pt,t)}}),n("items",{renderBody:e=>{e.n(ft,t)}})},{...r,items:void 0}),a,i,"1",[["move","emit",!1,["move"]],["next","emit",!1,["next"]],["previous","emit",!1,["previous"]],["scroll","emit",!1,["scroll"]],["slide","emit",!1,["slide"]]])},{t:ee,i:!0},$e);M.Component=T($e,M._);const bt=`export interface Input {
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
`,te="b6avgR5q",z=v(te),gt=h("style",null,1).t(`
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
`);w.r(te,()=>z);const Ae={};z._=C(function(r,a,i,t,s,l){a.n(gt,t),g(k,I(()=>{n("items",{style:"width:100px",class:"demo-card3",renderBody:e=>{e.t("Card 1",t)}}),n("items",{style:"width:57px",class:"demo-card3",renderBody:e=>{e.t("C2",t)}}),n("items",{style:"width:120px",class:"demo-card3",renderBody:e=>{e.t("Card 3",t)}}),n("items",{style:"width:200px",class:"demo-card3",renderBody:e=>{e.t("Card 4",t)}}),n("items",{style:"width:130px",class:"demo-card3",renderBody:e=>{e.t("Card 5",t)}}),n("items",{style:"width:150px",class:"demo-card3",renderBody:e=>{e.t("Card 6",t)}}),n("items",{style:"width:100px",class:"demo-card3",renderBody:e=>{e.t("Card 7",t)}}),n("items",{style:"width:200px",class:"demo-card3",renderBody:e=>{e.t("Card 8",t)}}),n("items",{style:"width:60px",class:"demo-card3",renderBody:e=>{e.t("C9",t)}}),n("items",{style:"width:140px",class:"demo-card3",renderBody:e=>{e.t("Card 10",t)}})},{...r,items:void 0}),a,i,"1",[["move","emit",!1,["move"]],["next","emit",!1,["next"]],["previous","emit",!1,["previous"]],["scroll","emit",!1,["scroll"]],["slide","emit",!1,["slide"]]])},{t:te,i:!0},Ae);z.Component=T(Ae,z._);const xt=`export interface Input {
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
`,Ot={title:"navigation & disclosure/ebay-carousel",component:k,parameters:{docs:{description:{component:Xe}}},argTypes:{numberOfItems:{description:"The amount of items",table:{category:"Demo configuration"}},item:{name:"@item",description:"The contents for each item",table:{category:"@attribute tags"}},imageTreatment:{options:["none","matte"],description:'If "matte", image treatment styles are applied.',table:{defaultValue:{summary:"none"}},type:"select"},index:{type:"number",description:"0-based index position"},itemsPerSlide:{description:"automatically fit a number of items for each carousel slide and enable slide controls. If set to a whole number, will default to x.1 where x is the whole number set."},gap:{type:"number",description:"override the margin between carousel items in pixels",table:{defaultValue:{summary:"16"}}},"aria-label":{description:"a11y label text for component",table:{category:"accessibility attributes"},control:{type:"text"}},"aria-labelledby":{description:"id of element containing a11y label text for component",table:{category:"accessibility attributes"},control:{type:"text"}},"aria-roledescription":{description:"a11y role description for component",table:{defaultValue:{summary:"Carousel"},category:"accessibility attributes"},control:{type:"text"}},"a11y-next-text":{description:"a11y text for next control",table:{defaultValue:{summary:"Next Slide"},category:"accessibility attributes"}},"a11y-previous-text":{description:"a11y text for previous control",table:{defaultValue:{summary:"Previous Slide"},category:"accessibility attributes"}},onMove:{action:"on-move",description:"called whenever item visibility changes, including initialization",table:{category:"Events",defaultValue:{detail:"{ [visibleIndexes] }"}}},onNext:{action:"on-next",description:"click next",table:{category:"Events",defaultValue:{detail:"{ originalEvent }"}}},onPrevious:{action:"on-previous",description:"click previous",table:{category:"Events",defaultValue:{detail:"{ originalEvent }"}}},onScroll:{action:"on-scroll",description:"new index is navigated to by native scrollin",table:{category:"Events",defaultValue:{detail:"{ index }"}}},onSlide:{action:"on-slide",description:"new slide is navigated to (by controls or API)",table:{category:"Events (items-per-slide)",defaultValue:{summary:"{ slide }"}}},onPlay:{action:"on-play",description:"called when the autoplay play button is pressed",table:{category:"Events (autoplay)",defaultValue:{summary:"{ originalEvent }"}}},onPause:{action:"on-pause",description:"called when the autoplay pause button is pressed",table:{category:"Events (autoplay)",defaultValue:{summary:"{ originalEvent }"}}}}},F=S(E,Ge),L=S($,nt),j=S(P,Ye),N=S(A,ot),V=S(M,bt),R=S(z,xt);var le,de,ce;F.parameters={...F.parameters,docs:{...(le=F.parameters)==null?void 0:le.docs,source:{originalSource:"buildExtensionTemplate(continiousTemplate, continiousTemplateCode)",...(ce=(de=F.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var me,he,ue;L.parameters={...L.parameters,docs:{...(me=L.parameters)==null?void 0:me.docs,source:{originalSource:"buildExtensionTemplate(continiousImageTreatmentTemplate, continiousImageTreatmentTemplateCode)",...(ue=(he=L.parameters)==null?void 0:he.docs)==null?void 0:ue.source}}};var ye,pe,fe;j.parameters={...j.parameters,docs:{...(ye=j.parameters)==null?void 0:ye.docs,source:{originalSource:"buildExtensionTemplate(discreteTemplate, discreteTemplateCode)",...(fe=(pe=j.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var be,ge,xe;N.parameters={...N.parameters,docs:{...(be=N.parameters)==null?void 0:be.docs,source:{originalSource:"buildExtensionTemplate(autoplayTemplate, autoplayTemplateCode)",...(xe=(ge=N.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var ve,we,Ce;V.parameters={...V.parameters,docs:{...(ve=V.parameters)==null?void 0:ve.docs,source:{originalSource:"buildExtensionTemplate(preserveTabindexTemplate, preserveTabindexTemplateCode)",...(Ce=(we=V.parameters)==null?void 0:we.docs)==null?void 0:Ce.source}}};var Te,ke,Se;R.parameters={...R.parameters,docs:{...(Te=R.parameters)==null?void 0:Te.docs,source:{originalSource:"buildExtensionTemplate(variableSizesTemplate, variableSizesTemplateCode)",...(Se=(ke=R.parameters)==null?void 0:ke.docs)==null?void 0:Se.source}}};const Ft=["Continuous","ContinuousImageTreatment","Discrete","Autoplay","preserveTabindex","variableSizes"];export{N as Autoplay,F as Continuous,L as ContinuousImageTreatment,j as Discrete,Ft as __namedExportsOrder,Ot as default,V as preserveTabindex,R as variableSizes};
