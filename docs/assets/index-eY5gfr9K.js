var Vt=Object.defineProperty;var It=(t,e,n)=>e in t?Vt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var wt=(t,e,n)=>(It(t,typeof e!="symbol"?e+"":e,n),n);import{r as Et,b as Ot,g as z,p as bt,i as jt,d as At,t as Tt}from"./registry-EgEQwbXk.js";import{_ as K}from"./dynamic-tag-7vXwaVzE.js";import{_ as zt}from"./index-MJalx9GY.js";import{_ as Xt}from"./render-tag-_0PNNh6Y.js";import{s as Yt}from"./index-l3FQEXUN.js";import{s as qt}from"./index-ERL0bCNR.js";const Jt={tourtip:"region",tooltip:"tooltip",infotip:"tooltip"};class Ut extends Marko.Component{handleCloseButton(e){this.emit("overlay-close",{originalEvent:e})}}const ut="lqFcW5yW",lt=Tt(ut);function Kt(){}Et.r(ut,()=>Ut);const kt={};lt._=Ot(function(t,e,n,o,s,i){t.toJSON=Kt;const{id:r,type:l,heading:c,content:a,footer:d,a11yCloseText:u}=t;if(e.be("span",{id:r,class:z(`${l}__overlay`),role:Jt[l],"aria-labelledby":l==="tourtip"&&c&&o.elId("tourtip-label")},"0",o,null,0),e.e("span",{class:z(`${l}__pointer`)},"1",o,0,1),e.be("span",{class:z(`${l}__mask`)},"2",o,null,1),e.be("span",{class:z(`${l}__cell`)},"3",o,null,1),e.be("span",{class:z(`${l}__content`)},"4",o,null,1),c){const{as:h,class:f,renderBody:p,id:m,...x}=c;K(e,h||"span",()=>({...bt(x),class:[`${l}__heading`,f],id:n.elId("tourtip-label")}),g=>{K(g,p,null,null,null,null,n,"6")},null,null,n,"5")}if(a){const h=Object.keys(a).length>1&&"span";h?e.be(h,jt(bt(a)),"7",o,null,4):e.bf("f_7",o),K(e,a.renderBody,null,null,null,null,n,"8"),h?e.ee():e.ef()}e.ee(),l!=="tooltip"&&(e.be("button",{"aria-label":u,class:z(["icon-btn","icon-btn--transparent",`${l}__close`]),type:"button"},"9",o,null,0,{onclick:n.d("click","handleCloseButton",!1)}),Xt(zt,{},e,n,"10"),e.ee()),d&&(e.be("span",{class:z([`${l}__footer`,d.class])},"11",o,null,1),K(e,d,null,null,null,null,n,"12"),e.ee()),e.ee(),e.ee(),e.ee()},{t:ut,s:!0},kt);lt.Component=At(kt,lt._);const N=Math.min,$=Math.max,nt=Math.round,et=Math.floor,V=t=>({x:t,y:t}),Gt={left:"right",right:"left",bottom:"top",top:"bottom"},Qt={start:"end",end:"start"};function ct(t,e,n){return $(t,N(e,n))}function U(t,e){return typeof t=="function"?t(e):t}function D(t){return t.split("-")[0]}function Q(t){return t.split("-")[1]}function St(t){return t==="x"?"y":"x"}function dt(t){return t==="y"?"height":"width"}function Z(t){return["top","bottom"].includes(D(t))?"y":"x"}function pt(t){return St(Z(t))}function Zt(t,e,n){n===void 0&&(n=!1);const o=Q(t),s=pt(t),i=dt(s);let r=s==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(r=ot(r)),[r,ot(r)]}function te(t){const e=ot(t);return[at(t),e,at(e)]}function at(t){return t.replace(/start|end/g,e=>Qt[e])}function ee(t,e,n){const o=["left","right"],s=["right","left"],i=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return n?e?s:o:e?o:s;case"left":case"right":return e?i:r;default:return[]}}function ne(t,e,n,o){const s=Q(t);let i=ee(D(t),n==="start",o);return s&&(i=i.map(r=>r+"-"+s),e&&(i=i.concat(i.map(at)))),i}function ot(t){return t.replace(/left|right|bottom|top/g,e=>Gt[e])}function oe(t){return{top:0,right:0,bottom:0,left:0,...t}}function ht(t){return typeof t!="number"?oe(t):{top:t,right:t,bottom:t,left:t}}function q(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function vt(t,e,n){let{reference:o,floating:s}=t;const i=Z(e),r=pt(e),l=dt(r),c=D(e),a=i==="y",d=o.x+o.width/2-s.width/2,u=o.y+o.height/2-s.height/2,h=o[l]/2-s[l]/2;let f;switch(c){case"top":f={x:d,y:o.y-s.height};break;case"bottom":f={x:d,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:u};break;case"left":f={x:o.x-s.width,y:u};break;default:f={x:o.x,y:o.y}}switch(Q(e)){case"start":f[r]-=h*(n&&a?-1:1);break;case"end":f[r]+=h*(n&&a?-1:1);break}return f}const ie=async(t,e,n)=>{const{placement:o="bottom",strategy:s="absolute",middleware:i=[],platform:r}=n,l=i.filter(Boolean),c=await(r.isRTL==null?void 0:r.isRTL(e));let a=await r.getElementRects({reference:t,floating:e,strategy:s}),{x:d,y:u}=vt(a,o,c),h=o,f={},p=0;for(let m=0;m<l.length;m++){const{name:x,fn:g}=l[m],{x:y,y:w,data:v,reset:b}=await g({x:d,y:u,initialPlacement:o,placement:h,strategy:s,middlewareData:f,rects:a,platform:r,elements:{reference:t,floating:e}});if(d=y??d,u=w??u,f={...f,[x]:{...f[x],...v}},b&&p<=50){p++,typeof b=="object"&&(b.placement&&(h=b.placement),b.rects&&(a=b.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:s}):b.rects),{x:d,y:u}=vt(a,h,c)),m=-1;continue}}return{x:d,y:u,placement:h,strategy:s,middlewareData:f}};async function Lt(t,e){var n;e===void 0&&(e={});const{x:o,y:s,platform:i,rects:r,elements:l,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:h=!1,padding:f=0}=U(e,t),p=ht(f),x=l[h?u==="floating"?"reference":"floating":u],g=q(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(x)))==null||n?x:x.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(l.floating)),boundary:a,rootBoundary:d,strategy:c})),y=u==="floating"?{...r.floating,x:o,y:s}:r.reference,w=await(i.getOffsetParent==null?void 0:i.getOffsetParent(l.floating)),v=await(i.isElement==null?void 0:i.isElement(w))?await(i.getScale==null?void 0:i.getScale(w))||{x:1,y:1}:{x:1,y:1},b=q(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:w,strategy:c}):y);return{top:(g.top-b.top+p.top)/v.y,bottom:(b.bottom-g.bottom+p.bottom)/v.y,left:(g.left-b.left+p.left)/v.x,right:(b.right-g.right+p.right)/v.x}}const se=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:s,rects:i,platform:r,elements:l,middlewareData:c}=e,{element:a,padding:d=0}=U(t,e)||{};if(a==null)return{};const u=ht(d),h={x:n,y:o},f=pt(s),p=dt(f),m=await r.getDimensions(a),x=f==="y",g=x?"top":"left",y=x?"bottom":"right",w=x?"clientHeight":"clientWidth",v=i.reference[p]+i.reference[f]-h[f]-i.floating[p],b=h[f]-i.reference[f],C=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a));let A=C?C[w]:0;(!A||!await(r.isElement==null?void 0:r.isElement(C)))&&(A=l.floating[w]||i.floating[p]);const P=v/2-b/2,j=A/2-m[p]/2-1,_=N(u[g],j),F=N(u[y],j),E=_,M=A-m[p]-F,R=A/2-m[p]/2+P,O=ct(E,R,M),T=!c.arrow&&Q(s)!=null&&R!=O&&i.reference[p]/2-(R<E?_:F)-m[p]/2<0,L=T?R<E?R-E:R-M:0;return{[f]:h[f]+L,data:{[f]:O,centerOffset:R-O-L,...T&&{alignmentOffset:L}},reset:T}}}),re=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:s,middlewareData:i,rects:r,initialPlacement:l,platform:c,elements:a}=e,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:h,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:m=!0,...x}=U(t,e);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const g=D(s),y=D(l)===l,w=await(c.isRTL==null?void 0:c.isRTL(a.floating)),v=h||(y||!m?[ot(l)]:te(l));!h&&p!=="none"&&v.push(...ne(l,m,p,w));const b=[l,...v],C=await Lt(e,x),A=[];let P=((o=i.flip)==null?void 0:o.overflows)||[];if(d&&A.push(C[g]),u){const E=Zt(s,r,w);A.push(C[E[0]],C[E[1]])}if(P=[...P,{placement:s,overflows:A}],!A.every(E=>E<=0)){var j,_;const E=(((j=i.flip)==null?void 0:j.index)||0)+1,M=b[E];if(M)return{data:{index:E,overflows:P},reset:{placement:M}};let R=(_=P.filter(O=>O.overflows[0]<=0).sort((O,T)=>O.overflows[1]-T.overflows[1])[0])==null?void 0:_.placement;if(!R)switch(f){case"bestFit":{var F;const O=(F=P.map(T=>[T.placement,T.overflows.filter(L=>L>0).reduce((L,rt)=>L+rt,0)]).sort((T,L)=>T[1]-L[1])[0])==null?void 0:F[0];O&&(R=O);break}case"initialPlacement":R=l;break}if(s!==R)return{reset:{placement:R}}}return{}}}};function $t(t){const e=N(...t.map(i=>i.left)),n=N(...t.map(i=>i.top)),o=$(...t.map(i=>i.right)),s=$(...t.map(i=>i.bottom));return{x:e,y:n,width:o-e,height:s-n}}function le(t){const e=t.slice().sort((s,i)=>s.y-i.y),n=[];let o=null;for(let s=0;s<e.length;s++){const i=e[s];!o||i.y-o.y>o.height/2?n.push([i]):n[n.length-1].push(i),o=i}return n.map(s=>q($t(s)))}const ce=function(t){return t===void 0&&(t={}),{name:"inline",options:t,async fn(e){const{placement:n,elements:o,rects:s,platform:i,strategy:r}=e,{padding:l=2,x:c,y:a}=U(t,e),d=Array.from(await(i.getClientRects==null?void 0:i.getClientRects(o.reference))||[]),u=le(d),h=q($t(d)),f=ht(l);function p(){if(u.length===2&&u[0].left>u[1].right&&c!=null&&a!=null)return u.find(x=>c>x.left-f.left&&c<x.right+f.right&&a>x.top-f.top&&a<x.bottom+f.bottom)||h;if(u.length>=2){if(Z(n)==="y"){const _=u[0],F=u[u.length-1],E=D(n)==="top",M=_.top,R=F.bottom,O=E?_.left:F.left,T=E?_.right:F.right,L=T-O,rt=R-M;return{top:M,bottom:R,left:O,right:T,width:L,height:rt,x:O,y:M}}const x=D(n)==="left",g=$(...u.map(_=>_.right)),y=N(...u.map(_=>_.left)),w=u.filter(_=>x?_.left===y:_.right===g),v=w[0].top,b=w[w.length-1].bottom,C=y,A=g,P=A-C,j=b-v;return{top:v,bottom:b,left:C,right:A,width:P,height:j,x:C,y:v}}return h}const m=await i.getElementRects({reference:{getBoundingClientRect:p},floating:o.floating,strategy:r});return s.reference.x!==m.reference.x||s.reference.y!==m.reference.y||s.reference.width!==m.reference.width||s.reference.height!==m.reference.height?{reset:{rects:m}}:{}}}};async function ae(t,e){const{placement:n,platform:o,elements:s}=t,i=await(o.isRTL==null?void 0:o.isRTL(s.floating)),r=D(n),l=Q(n),c=Z(n)==="y",a=["left","top"].includes(r)?-1:1,d=i&&c?-1:1,u=U(e,t);let{mainAxis:h,crossAxis:f,alignmentAxis:p}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return l&&typeof p=="number"&&(f=l==="end"?p*-1:p),c?{x:f*d,y:h*a}:{x:h*a,y:f*d}}const fe=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:s,y:i,placement:r,middlewareData:l}=e,c=await ae(e,t);return r===((n=l.offset)==null?void 0:n.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:s+c.x,y:i+c.y,data:{...c,placement:r}}}}},ue=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:s}=e,{mainAxis:i=!0,crossAxis:r=!1,limiter:l={fn:x=>{let{x:g,y}=x;return{x:g,y}}},...c}=U(t,e),a={x:n,y:o},d=await Lt(e,c),u=Z(D(s)),h=St(u);let f=a[h],p=a[u];if(i){const x=h==="y"?"top":"left",g=h==="y"?"bottom":"right",y=f+d[x],w=f-d[g];f=ct(y,f,w)}if(r){const x=u==="y"?"top":"left",g=u==="y"?"bottom":"right",y=p+d[x],w=p-d[g];p=ct(y,p,w)}const m=l.fn({...e,[h]:f,[u]:p});return{...m,data:{x:m.x-n,y:m.y-o}}}}};function I(t){return Bt(t)?(t.nodeName||"").toLowerCase():"#document"}function k(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function H(t){var e;return(e=(Bt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Bt(t){return t instanceof Node||t instanceof k(t).Node}function W(t){return t instanceof Element||t instanceof k(t).Element}function B(t){return t instanceof HTMLElement||t instanceof k(t).HTMLElement}function _t(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof k(t).ShadowRoot}function tt(t){const{overflow:e,overflowX:n,overflowY:o,display:s}=S(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(s)}function de(t){return["table","td","th"].includes(I(t))}function mt(t){const e=gt(),n=S(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function pe(t){let e=J(t);for(;B(e)&&!it(e);){if(mt(e))return e;e=J(e)}return null}function gt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function it(t){return["html","body","#document"].includes(I(t))}function S(t){return k(t).getComputedStyle(t)}function st(t){return W(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function J(t){if(I(t)==="html")return t;const e=t.assignedSlot||t.parentNode||_t(t)&&t.host||H(t);return _t(e)?e.host:e}function Pt(t){const e=J(t);return it(e)?t.ownerDocument?t.ownerDocument.body:t.body:B(e)&&tt(e)?e:Pt(e)}function G(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const s=Pt(t),i=s===((o=t.ownerDocument)==null?void 0:o.body),r=k(s);return i?e.concat(r,r.visualViewport||[],tt(s)?s:[],r.frameElement&&n?G(r.frameElement):[]):e.concat(s,G(s,[],n))}function Ft(t){const e=S(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const s=B(t),i=s?t.offsetWidth:n,r=s?t.offsetHeight:o,l=nt(n)!==i||nt(o)!==r;return l&&(n=i,o=r),{width:n,height:o,$:l}}function xt(t){return W(t)?t:t.contextElement}function Y(t){const e=xt(t);if(!B(e))return V(1);const n=e.getBoundingClientRect(),{width:o,height:s,$:i}=Ft(e);let r=(i?nt(n.width):n.width)/o,l=(i?nt(n.height):n.height)/s;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const he=V(0);function Mt(t){const e=k(t);return!gt()||!e.visualViewport?he:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function me(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==k(t)?!1:e}function X(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const s=t.getBoundingClientRect(),i=xt(t);let r=V(1);e&&(o?W(o)&&(r=Y(o)):r=Y(t));const l=me(i,n,o)?Mt(i):V(0);let c=(s.left+l.x)/r.x,a=(s.top+l.y)/r.y,d=s.width/r.x,u=s.height/r.y;if(i){const h=k(i),f=o&&W(o)?k(o):o;let p=h.frameElement;for(;p&&o&&f!==h;){const m=Y(p),x=p.getBoundingClientRect(),g=S(p),y=x.left+(p.clientLeft+parseFloat(g.paddingLeft))*m.x,w=x.top+(p.clientTop+parseFloat(g.paddingTop))*m.y;c*=m.x,a*=m.y,d*=m.x,u*=m.y,c+=y,a+=w,p=k(p).frameElement}}return q({width:d,height:u,x:c,y:a})}function ge(t){let{rect:e,offsetParent:n,strategy:o}=t;const s=B(n),i=H(n);if(n===i)return e;let r={scrollLeft:0,scrollTop:0},l=V(1);const c=V(0);if((s||!s&&o!=="fixed")&&((I(n)!=="body"||tt(i))&&(r=st(n)),B(n))){const a=X(n);l=Y(n),c.x=a.x+n.clientLeft,c.y=a.y+n.clientTop}return{width:e.width*l.x,height:e.height*l.y,x:e.x*l.x-r.scrollLeft*l.x+c.x,y:e.y*l.y-r.scrollTop*l.y+c.y}}function xe(t){return Array.from(t.getClientRects())}function Nt(t){return X(H(t)).left+st(t).scrollLeft}function ye(t){const e=H(t),n=st(t),o=t.ownerDocument.body,s=$(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),i=$(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+Nt(t);const l=-n.scrollTop;return S(o).direction==="rtl"&&(r+=$(e.clientWidth,o.clientWidth)-s),{width:s,height:i,x:r,y:l}}function we(t,e){const n=k(t),o=H(t),s=n.visualViewport;let i=o.clientWidth,r=o.clientHeight,l=0,c=0;if(s){i=s.width,r=s.height;const a=gt();(!a||a&&e==="fixed")&&(l=s.offsetLeft,c=s.offsetTop)}return{width:i,height:r,x:l,y:c}}function be(t,e){const n=X(t,!0,e==="fixed"),o=n.top+t.clientTop,s=n.left+t.clientLeft,i=B(t)?Y(t):V(1),r=t.clientWidth*i.x,l=t.clientHeight*i.y,c=s*i.x,a=o*i.y;return{width:r,height:l,x:c,y:a}}function Rt(t,e,n){let o;if(e==="viewport")o=we(t,n);else if(e==="document")o=ye(H(t));else if(W(e))o=be(e,n);else{const s=Mt(t);o={...e,x:e.x-s.x,y:e.y-s.y}}return q(o)}function Dt(t,e){const n=J(t);return n===e||!W(n)||it(n)?!1:S(n).position==="fixed"||Dt(n,e)}function ve(t,e){const n=e.get(t);if(n)return n;let o=G(t,[],!1).filter(l=>W(l)&&I(l)!=="body"),s=null;const i=S(t).position==="fixed";let r=i?J(t):t;for(;W(r)&&!it(r);){const l=S(r),c=mt(r);!c&&l.position==="fixed"&&(s=null),(i?!c&&!s:!c&&l.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||tt(r)&&!c&&Dt(t,r))?o=o.filter(d=>d!==r):s=l,r=J(r)}return e.set(t,o),o}function _e(t){let{element:e,boundary:n,rootBoundary:o,strategy:s}=t;const r=[...n==="clippingAncestors"?ve(e,this._c):[].concat(n),o],l=r[0],c=r.reduce((a,d)=>{const u=Rt(e,d,s);return a.top=$(u.top,a.top),a.right=N(u.right,a.right),a.bottom=N(u.bottom,a.bottom),a.left=$(u.left,a.left),a},Rt(e,l,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Re(t){return Ft(t)}function Ce(t,e,n){const o=B(e),s=H(e),i=n==="fixed",r=X(t,!0,i,e);let l={scrollLeft:0,scrollTop:0};const c=V(0);if(o||!o&&!i)if((I(e)!=="body"||tt(s))&&(l=st(e)),o){const a=X(e,!0,i,e);c.x=a.x+e.clientLeft,c.y=a.y+e.clientTop}else s&&(c.x=Nt(s));return{x:r.left+l.scrollLeft-c.x,y:r.top+l.scrollTop-c.y,width:r.width,height:r.height}}function Ct(t,e){return!B(t)||S(t).position==="fixed"?null:e?e(t):t.offsetParent}function Wt(t,e){const n=k(t);if(!B(t))return n;let o=Ct(t,e);for(;o&&de(o)&&S(o).position==="static";)o=Ct(o,e);return o&&(I(o)==="html"||I(o)==="body"&&S(o).position==="static"&&!mt(o))?n:o||pe(t)||n}const Ee=async function(t){let{reference:e,floating:n,strategy:o}=t;const s=this.getOffsetParent||Wt,i=this.getDimensions;return{reference:Ce(e,await s(n),o),floating:{x:0,y:0,...await i(n)}}};function Oe(t){return S(t).direction==="rtl"}const Ae={convertOffsetParentRelativeRectToViewportRelativeRect:ge,getDocumentElement:H,getClippingRect:_e,getOffsetParent:Wt,getElementRects:Ee,getClientRects:xe,getDimensions:Re,getScale:Y,isElement:W,isRTL:Oe};function Te(t,e){let n=null,o;const s=H(t);function i(){clearTimeout(o),n&&n.disconnect(),n=null}function r(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),i();const{left:a,top:d,width:u,height:h}=t.getBoundingClientRect();if(l||e(),!u||!h)return;const f=et(d),p=et(s.clientWidth-(a+u)),m=et(s.clientHeight-(d+h)),x=et(a),y={rootMargin:-f+"px "+-p+"px "+-m+"px "+-x+"px",threshold:$(0,N(1,c))||1};let w=!0;function v(b){const C=b[0].intersectionRatio;if(C!==c){if(!w)return r();C?r(!1,C):o=setTimeout(()=>{r(!1,1e-7)},100)}w=!1}try{n=new IntersectionObserver(v,{...y,root:s.ownerDocument})}catch{n=new IntersectionObserver(v,y)}n.observe(t)}return r(!0),i}function ke(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:s=!0,ancestorResize:i=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,a=xt(t),d=s||i?[...a?G(a):[],...G(e)]:[];d.forEach(g=>{s&&g.addEventListener("scroll",n,{passive:!0}),i&&g.addEventListener("resize",n)});const u=a&&l?Te(a,n):null;let h=-1,f=null;r&&(f=new ResizeObserver(g=>{let[y]=g;y&&y.target===a&&f&&(f.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{f&&f.observe(e)})),n()}),a&&!c&&f.observe(a),f.observe(e));let p,m=c?X(t):null;c&&x();function x(){const g=X(t);m&&(g.x!==m.x||g.y!==m.y||g.width!==m.width||g.height!==m.height)&&n(),m=g,p=requestAnimationFrame(x)}return n(),()=>{d.forEach(g=>{s&&g.removeEventListener("scroll",n),i&&g.removeEventListener("resize",n)}),u&&u(),f&&f.disconnect(),f=null,c&&cancelAnimationFrame(p)}}const Se=(t,e,n)=>{const o=new Map,s={platform:Ae,...n},i={...s.platform,_c:o};return ie(t,e,{...s,platform:i})},Le={left:"right","left-top":"right-start","left-bottom":"right-end",right:"left","right-top":"left-start","right-bottom":"left-end",top:"bottom","top-left":"bottom-start","top-right":"bottom-end","bottom-right":"top-end","bottom-left":"top-start",bottom:"top"};class $e extends Marko.Component{constructor(){super(...arguments);wt(this,"cleanup")}handleExpand(){this.emit("base-expand"),this.hostEl&&this.overlayEl&&this.updateTip()}handleCollapse(){this.emit("base-collapse")}onMount(){this._setupBaseTooltip()}onUpdate(){this._setupBaseTooltip()}onInput(n){n.open===!0?this.action="expand":n.open===!1&&(this.action="collapse")}onRender(){typeof window<"u"&&this._cleanupMakeup()}collapse(){this._expander.expanded=!1}expand(){this._expander.expanded=!0}isExpanded(){return this._expander.expanded}onDestroy(){this._cleanupMakeup()}_setupExpander(n,o){const{input:s}=this,{type:i}=s,r=this.getEl("container"),l=i==="tooltip",c=i==="infotip",a=i==="tourtip",d=r==null?void 0:r.getElementsByClassName(i)[0];n&&!a&&(this._expander=new Yt(d,{hostSelector:o,contentSelector:`.${i}__overlay`,expandedClass:`${i}--expanded`,focusManagement:null,expandOnFocus:l,expandOnHover:l&&!s.noHover,expandOnClick:c,autoCollapse:l}),l&&!n.hasAttribute("aria-describedby")&&n.setAttribute("aria-describedby",s.overlayId)),this.hostEl&&this.overlayEl&&(this.updateTip(),this.cleanup=ke(this.hostEl,this.overlayEl,this.update.bind(this)))}updateTip(){Se(this.hostEl,this.overlayEl,{placement:this.input.placement||Le[this.input.pointer??"bottom"],middleware:[fe(this.input.offset||6),ce(),re(),ue(),se({element:this.arrowEl,padding:20})]}).then(({x:n,y:o,placement:s,middlewareData:i})=>{var a,d,u,h;Object.assign(((a=this.overlayEl)==null?void 0:a.style)||{},{left:`${n}px`,top:`${o}px`});const r=(d=i.arrow)==null?void 0:d.x,l=(u=i.arrow)==null?void 0:u.y,c={top:"bottom",strategy:"fixed",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];Object.assign(((h=this.arrowEl)==null?void 0:h.style)||{},{left:r!=null?`${r}px`:"",top:l!=null?`${l}px`:"",right:"",bottom:"",[c||""]:"-4px"})})}_setupBaseTooltip(){var i,r,l;const{type:n}=this.input,s=`.${`${n}__host`}`;this.hostEl=((i=this.el)==null?void 0:i.querySelector(s))||null,this.overlayEl=((r=this.el)==null?void 0:r.querySelector(`.${n}__overlay`))||null,this.arrowEl=((l=this.el)==null?void 0:l.querySelector(`.${n}__pointer`))||null,this.input.type!=="dialog--mini"&&this._setupMakeup(),this.action&&this._expander&&(this.action==="expand"?this.expand():this.action==="collapse"&&this.collapse(),this.action=null)}_setupMakeup(){const{input:n}=this,{type:o}=n,s=this.getEl("container"),i=`${o}__host`,r=`.${i}`;let l=s==null?void 0:s.querySelector(r);l?this._setupExpander(l,r):(this.cancelFocus&&this.cancelFocus(),this.cancelFocus=qt(s,!1,c=>{const a=c[0];a&&(l=a,a.classList.contains(i)||a.classList.add(i)),this._setupExpander(l,r)}))}_cleanupMakeup(){this.cancelFocus&&this.cancelFocus(),this._expander&&(this._expander.destroy(),this._expander=void 0),this.cleanup&&(this.cleanup(),this.cleanup=void 0)}}const yt="r0ag73au",ft=Tt(yt);function Be(){return{type:this.type,noHover:this.noHover,overlayId:this.overlayId}}Et.r(yt,()=>$e);const Ht={};ft._=Ot(function(t,e,n,o,s,i){t.toJSON=Be;const{overlayStyle:r,renderBody:l}=t;e.be("span",{"overlay-style":r},"@container",o,null,0,{"onexpander-expand":n.d("expander-expand","handleExpand",!1),"onexpander-collapse":n.d("expander-collapse","handleCollapse",!1)}),K(e,l,null,null,null,null,n,"0"),e.ee()},{t:yt,s:!0},Ht);ft.Component=At(Ht,ft._);export{ft as _,lt as a};