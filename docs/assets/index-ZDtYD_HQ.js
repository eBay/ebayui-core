import{r as Ct,b as Et,g as j,p as wt,i as It,d as Ot,t as At}from"./registry-zqrnEiYK.js";import{_ as K}from"./dynamic-tag-4Gch17f1.js";import{_ as zt}from"./index-0sOjhOVp.js";import{_ as jt}from"./render-tag-_0PNNh6Y.js";import{s as Xt}from"./index-l3FQEXUN.js";import{s as Yt}from"./index-ERL0bCNR.js";const qt={tourtip:"region",tooltip:"tooltip",infotip:"tooltip"};class Jt extends Marko.Component{handleCloseButton(e){this.emit("overlay-close",{originalEvent:e})}}const ut="lqFcW5yW",lt=At(ut);function Ut(){}Ct.r(ut,()=>Jt);const Tt={};lt._=Et(function(t,e,o,n,i,s){t.toJSON=Ut;const{id:r,type:l,heading:c,content:a,footer:d,a11yCloseText:f}=t;if(e.be("span",{id:r,class:j(`${l}__overlay`),role:qt[l],"aria-labelledby":l==="tourtip"&&c&&n.elId("tourtip-label")},"0",n,null,0),e.e("span",{class:j(`${l}__pointer`)},"1",n,0,1),e.be("span",{class:j(`${l}__mask`)},"2",n,null,1),e.be("span",{class:j(`${l}__cell`)},"3",n,null,1),e.be("span",{class:j(`${l}__content`)},"4",n,null,1),c){const{as:h,class:u,renderBody:p,id:m,...y}=c;K(e,h||"span",()=>({...wt(y),class:[`${l}__heading`,u],id:o.elId("tourtip-label")}),g=>{K(g,p,null,null,null,null,o,"6")},null,null,o,"5")}if(a){const h=Object.keys(a).length>1&&"span";h?e.be(h,It(wt(a)),"7",n,null,4):e.bf("f_7",n),K(e,a.renderBody,null,null,null,null,o,"8"),h?e.ee():e.ef()}e.ee(),l!=="tooltip"&&(e.be("button",{"aria-label":f,class:j(["icon-btn","icon-btn--transparent",`${l}__close`]),type:"button"},"9",n,null,0,{onclick:o.d("click","handleCloseButton",!1)}),jt(zt,{},e,o,"10"),e.ee()),d&&(e.be("span",{class:j([`${l}__footer`,d.class])},"11",n,null,1),K(e,d,null,null,null,null,o,"12"),e.ee()),e.ee(),e.ee(),e.ee()},{t:ut,s:!0},Tt);lt.Component=Ot(Tt,lt._);const N=Math.min,$=Math.max,nt=Math.round,et=Math.floor,V=t=>({x:t,y:t}),Kt={left:"right",right:"left",bottom:"top",top:"bottom"},Gt={start:"end",end:"start"};function ct(t,e,o){return $(t,N(e,o))}function U(t,e){return typeof t=="function"?t(e):t}function D(t){return t.split("-")[0]}function Q(t){return t.split("-")[1]}function kt(t){return t==="x"?"y":"x"}function dt(t){return t==="y"?"height":"width"}function Z(t){return["top","bottom"].includes(D(t))?"y":"x"}function pt(t){return kt(Z(t))}function Qt(t,e,o){o===void 0&&(o=!1);const n=Q(t),i=pt(t),s=dt(i);let r=i==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=ot(r)),[r,ot(r)]}function Zt(t){const e=ot(t);return[at(t),e,at(e)]}function at(t){return t.replace(/start|end/g,e=>Gt[e])}function te(t,e,o){const n=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return o?e?i:n:e?n:i;case"left":case"right":return e?s:r;default:return[]}}function ee(t,e,o,n){const i=Q(t);let s=te(D(t),o==="start",n);return i&&(s=s.map(r=>r+"-"+i),e&&(s=s.concat(s.map(at)))),s}function ot(t){return t.replace(/left|right|bottom|top/g,e=>Kt[e])}function ne(t){return{top:0,right:0,bottom:0,left:0,...t}}function ht(t){return typeof t!="number"?ne(t):{top:t,right:t,bottom:t,left:t}}function q(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function bt(t,e,o){let{reference:n,floating:i}=t;const s=Z(e),r=pt(e),l=dt(r),c=D(e),a=s==="y",d=n.x+n.width/2-i.width/2,f=n.y+n.height/2-i.height/2,h=n[l]/2-i[l]/2;let u;switch(c){case"top":u={x:d,y:n.y-i.height};break;case"bottom":u={x:d,y:n.y+n.height};break;case"right":u={x:n.x+n.width,y:f};break;case"left":u={x:n.x-i.width,y:f};break;default:u={x:n.x,y:n.y}}switch(Q(e)){case"start":u[r]-=h*(o&&a?-1:1);break;case"end":u[r]+=h*(o&&a?-1:1);break}return u}const oe=async(t,e,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:s=[],platform:r}=o,l=s.filter(Boolean),c=await(r.isRTL==null?void 0:r.isRTL(e));let a=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:f}=bt(a,n,c),h=n,u={},p=0;for(let m=0;m<l.length;m++){const{name:y,fn:g}=l[m],{x,y:w,data:v,reset:b}=await g({x:d,y:f,initialPlacement:n,placement:h,strategy:i,middlewareData:u,rects:a,platform:r,elements:{reference:t,floating:e}});d=x??d,f=w??f,u={...u,[y]:{...u[y],...v}},b&&p<=50&&(p++,typeof b=="object"&&(b.placement&&(h=b.placement),b.rects&&(a=b.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):b.rects),{x:d,y:f}=bt(a,h,c)),m=-1)}return{x:d,y:f,placement:h,strategy:i,middlewareData:u}};async function Lt(t,e){var o;e===void 0&&(e={});const{x:n,y:i,platform:s,rects:r,elements:l,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:d="viewport",elementContext:f="floating",altBoundary:h=!1,padding:u=0}=U(e,t),p=ht(u),y=l[h?f==="floating"?"reference":"floating":f],g=q(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(y)))==null||o?y:y.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:a,rootBoundary:d,strategy:c})),x=f==="floating"?{...r.floating,x:n,y:i}:r.reference,w=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),v=await(s.isElement==null?void 0:s.isElement(w))?await(s.getScale==null?void 0:s.getScale(w))||{x:1,y:1}:{x:1,y:1},b=q(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:x,offsetParent:w,strategy:c}):x);return{top:(g.top-b.top+p.top)/v.y,bottom:(b.bottom-g.bottom+p.bottom)/v.y,left:(g.left-b.left+p.left)/v.x,right:(b.right-g.right+p.right)/v.x}}const ie=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:n,placement:i,rects:s,platform:r,elements:l,middlewareData:c}=e,{element:a,padding:d=0}=U(t,e)||{};if(a==null)return{};const f=ht(d),h={x:o,y:n},u=pt(i),p=dt(u),m=await r.getDimensions(a),y=u==="y",g=y?"top":"left",x=y?"bottom":"right",w=y?"clientHeight":"clientWidth",v=s.reference[p]+s.reference[u]-h[u]-s.floating[p],b=h[u]-s.reference[u],C=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a));let A=C?C[w]:0;(!A||!await(r.isElement==null?void 0:r.isElement(C)))&&(A=l.floating[w]||s.floating[p]);const F=v/2-b/2,z=A/2-m[p]/2-1,_=N(f[g],z),P=N(f[x],z),E=_,M=A-m[p]-P,R=A/2-m[p]/2+F,O=ct(E,R,M),T=!c.arrow&&Q(i)!=null&&R!==O&&s.reference[p]/2-(R<E?_:P)-m[p]/2<0,S=T?R<E?R-E:R-M:0;return{[u]:h[u]+S,data:{[u]:O,centerOffset:R-O-S,...T&&{alignmentOffset:S}},reset:T}}}),se=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:i,middlewareData:s,rects:r,initialPlacement:l,platform:c,elements:a}=e,{mainAxis:d=!0,crossAxis:f=!0,fallbackPlacements:h,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:m=!0,...y}=U(t,e);if((o=s.arrow)!=null&&o.alignmentOffset)return{};const g=D(i),x=D(l)===l,w=await(c.isRTL==null?void 0:c.isRTL(a.floating)),v=h||(x||!m?[ot(l)]:Zt(l));!h&&p!=="none"&&v.push(...ee(l,m,p,w));const b=[l,...v],C=await Lt(e,y),A=[];let F=((n=s.flip)==null?void 0:n.overflows)||[];if(d&&A.push(C[g]),f){const E=Qt(i,r,w);A.push(C[E[0]],C[E[1]])}if(F=[...F,{placement:i,overflows:A}],!A.every(E=>E<=0)){var z,_;const E=(((z=s.flip)==null?void 0:z.index)||0)+1,M=b[E];if(M)return{data:{index:E,overflows:F},reset:{placement:M}};let R=(_=F.filter(O=>O.overflows[0]<=0).sort((O,T)=>O.overflows[1]-T.overflows[1])[0])==null?void 0:_.placement;if(!R)switch(u){case"bestFit":{var P;const O=(P=F.map(T=>[T.placement,T.overflows.filter(S=>S>0).reduce((S,rt)=>S+rt,0)]).sort((T,S)=>T[1]-S[1])[0])==null?void 0:P[0];O&&(R=O);break}case"initialPlacement":R=l;break}if(i!==R)return{reset:{placement:R}}}return{}}}};function St(t){const e=N(...t.map(s=>s.left)),o=N(...t.map(s=>s.top)),n=$(...t.map(s=>s.right)),i=$(...t.map(s=>s.bottom));return{x:e,y:o,width:n-e,height:i-o}}function re(t){const e=t.slice().sort((i,s)=>i.y-s.y),o=[];let n=null;for(let i=0;i<e.length;i++){const s=e[i];!n||s.y-n.y>n.height/2?o.push([s]):o[o.length-1].push(s),n=s}return o.map(i=>q(St(i)))}const le=function(t){return t===void 0&&(t={}),{name:"inline",options:t,async fn(e){const{placement:o,elements:n,rects:i,platform:s,strategy:r}=e,{padding:l=2,x:c,y:a}=U(t,e),d=Array.from(await(s.getClientRects==null?void 0:s.getClientRects(n.reference))||[]),f=re(d),h=q(St(d)),u=ht(l);function p(){if(f.length===2&&f[0].left>f[1].right&&c!=null&&a!=null)return f.find(y=>c>y.left-u.left&&c<y.right+u.right&&a>y.top-u.top&&a<y.bottom+u.bottom)||h;if(f.length>=2){if(Z(o)==="y"){const _=f[0],P=f[f.length-1],E=D(o)==="top",M=_.top,R=P.bottom,O=E?_.left:P.left,T=E?_.right:P.right,S=T-O,rt=R-M;return{top:M,bottom:R,left:O,right:T,width:S,height:rt,x:O,y:M}}const y=D(o)==="left",g=$(...f.map(_=>_.right)),x=N(...f.map(_=>_.left)),w=f.filter(_=>y?_.left===x:_.right===g),v=w[0].top,b=w[w.length-1].bottom,C=x,A=g,F=A-C,z=b-v;return{top:v,bottom:b,left:C,right:A,width:F,height:z,x:C,y:v}}return h}const m=await s.getElementRects({reference:{getBoundingClientRect:p},floating:n.floating,strategy:r});return i.reference.x!==m.reference.x||i.reference.y!==m.reference.y||i.reference.width!==m.reference.width||i.reference.height!==m.reference.height?{reset:{rects:m}}:{}}}};async function ce(t,e){const{placement:o,platform:n,elements:i}=t,s=await(n.isRTL==null?void 0:n.isRTL(i.floating)),r=D(o),l=Q(o),c=Z(o)==="y",a=["left","top"].includes(r)?-1:1,d=s&&c?-1:1,f=U(e,t);let{mainAxis:h,crossAxis:u,alignmentAxis:p}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return l&&typeof p=="number"&&(u=l==="end"?p*-1:p),c?{x:u*d,y:h*a}:{x:h*a,y:u*d}}const ae=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,n;const{x:i,y:s,placement:r,middlewareData:l}=e,c=await ce(e,t);return r===((o=l.offset)==null?void 0:o.placement)&&(n=l.arrow)!=null&&n.alignmentOffset?{}:{x:i+c.x,y:s+c.y,data:{...c,placement:r}}}}},fe=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:l={fn:y=>{let{x:g,y:x}=y;return{x:g,y:x}}},...c}=U(t,e),a={x:o,y:n},d=await Lt(e,c),f=Z(D(i)),h=kt(f);let u=a[h],p=a[f];if(s){const y=h==="y"?"top":"left",g=h==="y"?"bottom":"right",x=u+d[y],w=u-d[g];u=ct(x,u,w)}if(r){const y=f==="y"?"top":"left",g=f==="y"?"bottom":"right",x=p+d[y],w=p-d[g];p=ct(x,p,w)}const m=l.fn({...e,[h]:u,[f]:p});return{...m,data:{x:m.x-o,y:m.y-n}}}}};function I(t){return $t(t)?(t.nodeName||"").toLowerCase():"#document"}function k(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function H(t){var e;return(e=($t(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function $t(t){return t instanceof Node||t instanceof k(t).Node}function W(t){return t instanceof Element||t instanceof k(t).Element}function B(t){return t instanceof HTMLElement||t instanceof k(t).HTMLElement}function vt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof k(t).ShadowRoot}function tt(t){const{overflow:e,overflowX:o,overflowY:n,display:i}=L(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(i)}function ue(t){return["table","td","th"].includes(I(t))}function mt(t){const e=gt(),o=L(t);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function Bt(t){let e=J(t);for(;B(e)&&!it(e);){if(mt(e))return e;e=J(e)}return null}function gt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function it(t){return["html","body","#document"].includes(I(t))}function L(t){return k(t).getComputedStyle(t)}function st(t){return W(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function J(t){if(I(t)==="html")return t;const e=t.assignedSlot||t.parentNode||vt(t)&&t.host||H(t);return vt(e)?e.host:e}function Ft(t){const e=J(t);return it(e)?t.ownerDocument?t.ownerDocument.body:t.body:B(e)&&tt(e)?e:Ft(e)}function G(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const i=Ft(t),s=i===((n=t.ownerDocument)==null?void 0:n.body),r=k(i);return s?e.concat(r,r.visualViewport||[],tt(i)?i:[],r.frameElement&&o?G(r.frameElement):[]):e.concat(i,G(i,[],o))}function Pt(t){const e=L(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const i=B(t),s=i?t.offsetWidth:o,r=i?t.offsetHeight:n,l=nt(o)!==s||nt(n)!==r;return l&&(o=s,n=r),{width:o,height:n,$:l}}function yt(t){return W(t)?t:t.contextElement}function Y(t){const e=yt(t);if(!B(e))return V(1);const o=e.getBoundingClientRect(),{width:n,height:i,$:s}=Pt(e);let r=(s?nt(o.width):o.width)/n,l=(s?nt(o.height):o.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const de=V(0);function Mt(t){const e=k(t);return!gt()||!e.visualViewport?de:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function pe(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==k(t)?!1:e}function X(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const i=t.getBoundingClientRect(),s=yt(t);let r=V(1);e&&(n?W(n)&&(r=Y(n)):r=Y(t));const l=pe(s,o,n)?Mt(s):V(0);let c=(i.left+l.x)/r.x,a=(i.top+l.y)/r.y,d=i.width/r.x,f=i.height/r.y;if(s){const h=k(s),u=n&&W(n)?k(n):n;let p=h.frameElement;for(;p&&n&&u!==h;){const m=Y(p),y=p.getBoundingClientRect(),g=L(p),x=y.left+(p.clientLeft+parseFloat(g.paddingLeft))*m.x,w=y.top+(p.clientTop+parseFloat(g.paddingTop))*m.y;c*=m.x,a*=m.y,d*=m.x,f*=m.y,c+=x,a+=w,p=k(p).frameElement}}return q({width:d,height:f,x:c,y:a})}const he=[":popover-open",":modal"];function Nt(t){let e=!1,o=0,n=0;function i(r){try{e=e||t.matches(r)}catch{}}he.forEach(r=>{i(r)});const s=Bt(t);if(e&&s){const r=s.getBoundingClientRect();o=r.x,n=r.y}return[e,o,n]}function me(t){let{elements:e,rect:o,offsetParent:n,strategy:i}=t;const s=H(n),[r]=e?Nt(e.floating):[!1];if(n===s||r)return o;let l={scrollLeft:0,scrollTop:0},c=V(1);const a=V(0),d=B(n);if((d||!d&&i!=="fixed")&&((I(n)!=="body"||tt(s))&&(l=st(n)),B(n))){const f=X(n);c=Y(n),a.x=f.x+n.clientLeft,a.y=f.y+n.clientTop}return{width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-l.scrollLeft*c.x+a.x,y:o.y*c.y-l.scrollTop*c.y+a.y}}function ge(t){return Array.from(t.getClientRects())}function Dt(t){return X(H(t)).left+st(t).scrollLeft}function ye(t){const e=H(t),o=st(t),n=t.ownerDocument.body,i=$(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),s=$(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let r=-o.scrollLeft+Dt(t);const l=-o.scrollTop;return L(n).direction==="rtl"&&(r+=$(e.clientWidth,n.clientWidth)-i),{width:i,height:s,x:r,y:l}}function xe(t,e){const o=k(t),n=H(t),i=o.visualViewport;let s=n.clientWidth,r=n.clientHeight,l=0,c=0;if(i){s=i.width,r=i.height;const a=gt();(!a||a&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:s,height:r,x:l,y:c}}function we(t,e){const o=X(t,!0,e==="fixed"),n=o.top+t.clientTop,i=o.left+t.clientLeft,s=B(t)?Y(t):V(1),r=t.clientWidth*s.x,l=t.clientHeight*s.y,c=i*s.x,a=n*s.y;return{width:r,height:l,x:c,y:a}}function _t(t,e,o){let n;if(e==="viewport")n=xe(t,o);else if(e==="document")n=ye(H(t));else if(W(e))n=we(e,o);else{const i=Mt(t);n={...e,x:e.x-i.x,y:e.y-i.y}}return q(n)}function Wt(t,e){const o=J(t);return o===e||!W(o)||it(o)?!1:L(o).position==="fixed"||Wt(o,e)}function be(t,e){const o=e.get(t);if(o)return o;let n=G(t,[],!1).filter(l=>W(l)&&I(l)!=="body"),i=null;const s=L(t).position==="fixed";let r=s?J(t):t;for(;W(r)&&!it(r);){const l=L(r),c=mt(r);!c&&l.position==="fixed"&&(i=null),(s?!c&&!i:!c&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||tt(r)&&!c&&Wt(t,r))?n=n.filter(d=>d!==r):i=l,r=J(r)}return e.set(t,n),n}function ve(t){let{element:e,boundary:o,rootBoundary:n,strategy:i}=t;const r=[...o==="clippingAncestors"?be(e,this._c):[].concat(o),n],l=r[0],c=r.reduce((a,d)=>{const f=_t(e,d,i);return a.top=$(f.top,a.top),a.right=N(f.right,a.right),a.bottom=N(f.bottom,a.bottom),a.left=$(f.left,a.left),a},_t(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function _e(t){const{width:e,height:o}=Pt(t);return{width:e,height:o}}function Re(t,e,o,n){const i=B(e),s=H(e),r=o==="fixed",l=X(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const a=V(0);if(i||!i&&!r)if((I(e)!=="body"||tt(s))&&(c=st(e)),i){const m=X(e,!0,r,e);a.x=m.x+e.clientLeft,a.y=m.y+e.clientTop}else s&&(a.x=Dt(s));let d=l.left+c.scrollLeft-a.x,f=l.top+c.scrollTop-a.y;const[h,u,p]=Nt(n);return h&&(d+=u,f+=p,i&&(d+=e.clientLeft,f+=e.clientTop)),{x:d,y:f,width:l.width,height:l.height}}function Rt(t,e){return!B(t)||L(t).position==="fixed"?null:e?e(t):t.offsetParent}function Ht(t,e){const o=k(t);if(!B(t))return o;let n=Rt(t,e);for(;n&&ue(n)&&L(n).position==="static";)n=Rt(n,e);return n&&(I(n)==="html"||I(n)==="body"&&L(n).position==="static"&&!mt(n))?o:n||Bt(t)||o}const Ce=async function(t){const e=this.getOffsetParent||Ht,o=this.getDimensions;return{reference:Re(t.reference,await e(t.floating),t.strategy,t.floating),floating:{x:0,y:0,...await o(t.floating)}}};function Ee(t){return L(t).direction==="rtl"}const Oe={convertOffsetParentRelativeRectToViewportRelativeRect:me,getDocumentElement:H,getClippingRect:ve,getOffsetParent:Ht,getElementRects:Ce,getClientRects:ge,getDimensions:_e,getScale:Y,isElement:W,isRTL:Ee};function Ae(t,e){let o=null,n;const i=H(t);function s(){var l;clearTimeout(n),(l=o)==null||l.disconnect(),o=null}function r(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),s();const{left:a,top:d,width:f,height:h}=t.getBoundingClientRect();if(l||e(),!f||!h)return;const u=et(d),p=et(i.clientWidth-(a+f)),m=et(i.clientHeight-(d+h)),y=et(a),x={rootMargin:-u+"px "+-p+"px "+-m+"px "+-y+"px",threshold:$(0,N(1,c))||1};let w=!0;function v(b){const C=b[0].intersectionRatio;if(C!==c){if(!w)return r();C?r(!1,C):n=setTimeout(()=>{r(!1,1e-7)},100)}w=!1}try{o=new IntersectionObserver(v,{...x,root:i.ownerDocument})}catch{o=new IntersectionObserver(v,x)}o.observe(t)}return r(!0),s}function Te(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=n,a=yt(t),d=i||s?[...a?G(a):[],...G(e)]:[];d.forEach(g=>{i&&g.addEventListener("scroll",o,{passive:!0}),s&&g.addEventListener("resize",o)});const f=a&&l?Ae(a,o):null;let h=-1,u=null;r&&(u=new ResizeObserver(g=>{let[x]=g;x&&x.target===a&&u&&(u.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var w;(w=u)==null||w.observe(e)})),o()}),a&&!c&&u.observe(a),u.observe(e));let p,m=c?X(t):null;c&&y();function y(){const g=X(t);m&&(g.x!==m.x||g.y!==m.y||g.width!==m.width||g.height!==m.height)&&o(),m=g,p=requestAnimationFrame(y)}return o(),()=>{var g;d.forEach(x=>{i&&x.removeEventListener("scroll",o),s&&x.removeEventListener("resize",o)}),f==null||f(),(g=u)==null||g.disconnect(),u=null,c&&cancelAnimationFrame(p)}}const ke=fe,Le=se,Se=ie,$e=le,Be=(t,e,o)=>{const n=new Map,i={platform:Oe,...o},s={...i.platform,_c:n};return oe(t,e,{...i,platform:s})},Fe={left:"right","left-top":"right-start","left-bottom":"right-end",right:"left","right-top":"left-start","right-bottom":"left-end",top:"bottom","top-left":"bottom-start","top-right":"bottom-end","bottom-right":"top-end","bottom-left":"top-start",bottom:"top"};class Pe extends Marko.Component{handleExpand(){this.emit("base-expand"),this.hostEl&&this.overlayEl&&this.updateTip()}handleCollapse(){this.emit("base-collapse")}onMount(){this._setupBaseTooltip()}onUpdate(){this._setupBaseTooltip()}onInput(e){e.open===!0?this.action="expand":e.open===!1&&(this.action="collapse")}onRender(){typeof window<"u"&&this._cleanupMakeup()}collapse(){this._expander.expanded=!1}expand(){this._expander.expanded=!0}isExpanded(){return this._expander.expanded}onDestroy(){this._cleanupMakeup()}_setupExpander(e,o){const{input:n}=this,{type:i}=n,s=this.getEl("container"),r=i==="tooltip",l=i==="infotip",c=i==="tourtip",a=s==null?void 0:s.getElementsByClassName(i)[0];e&&!c&&(this._expander=new Xt(a,{hostSelector:o,contentSelector:`.${i}__overlay`,expandedClass:`${i}--expanded`,focusManagement:null,expandOnFocus:r,expandOnHover:r&&!n.noHover,expandOnClick:l,autoCollapse:r}),r&&!e.hasAttribute("aria-describedby")&&e.setAttribute("aria-describedby",n.overlayId)),this.hostEl&&this.overlayEl&&(this.updateTip(),this.cleanup=Te(this.hostEl,this.overlayEl,this.update.bind(this)))}updateTip(){Be(this.hostEl,this.overlayEl,{placement:this.input.placement||Fe[this.input.pointer??"bottom"],middleware:[ae(this.input.offset||6),$e(),Le(),ke(),Se({element:this.arrowEl,padding:20})]}).then(({x:e,y:o,placement:n,middlewareData:i})=>{var c,a,d,f;Object.assign(((c=this.overlayEl)==null?void 0:c.style)||{},{left:`${e}px`,top:`${o}px`});const s=(a=i.arrow)==null?void 0:a.x,r=(d=i.arrow)==null?void 0:d.y,l={top:"bottom",strategy:"fixed",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];Object.assign(((f=this.arrowEl)==null?void 0:f.style)||{},{left:s!=null?`${s}px`:"",top:r!=null?`${r}px`:"",right:"",bottom:"",[l||""]:"-4px"})})}_setupBaseTooltip(){var i,s,r;const{type:e}=this.input,n=`.${`${e}__host`}`;this.hostEl=((i=this.el)==null?void 0:i.querySelector(n))||null,this.overlayEl=((s=this.el)==null?void 0:s.querySelector(`.${e}__overlay`))||null,this.arrowEl=((r=this.el)==null?void 0:r.querySelector(`.${e}__pointer`))||null,this.input.type!=="dialog--mini"&&this._setupMakeup(),this.action&&this._expander&&(this.action==="expand"?this.expand():this.action==="collapse"&&this.collapse(),this.action=null)}_setupMakeup(){const{input:e}=this,{type:o}=e,n=this.getEl("container"),i=`${o}__host`,s=`.${i}`;let r=n==null?void 0:n.querySelector(s);r?this._setupExpander(r,s):(this.cancelFocus&&this.cancelFocus(),this.cancelFocus=Yt(n,!1,l=>{const c=l[0];c&&(r=c,c.classList.contains(i)||c.classList.add(i)),this._setupExpander(r,s)}))}_cleanupMakeup(){this.cancelFocus&&this.cancelFocus(),this._expander&&(this._expander.destroy(),this._expander=void 0),this.cleanup&&(this.cleanup(),this.cleanup=void 0)}}const xt="r0ag73au",ft=At(xt);function Me(){return{type:this.type,noHover:this.noHover,overlayId:this.overlayId}}Ct.r(xt,()=>Pe);const Vt={};ft._=Et(function(t,e,o,n,i,s){t.toJSON=Me;const{overlayStyle:r,renderBody:l}=t;e.be("span",{"overlay-style":r},"@container",n,null,0,{"onexpander-expand":o.d("expander-expand","handleExpand",!1),"onexpander-collapse":o.d("expander-collapse","handleCollapse",!1)}),K(e,l,null,null,null,null,o,"0"),e.ee()},{t:xt,s:!0},Vt);ft.Component=Ot(Vt,ft._);export{ft as _,lt as a};