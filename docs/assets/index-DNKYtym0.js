import{r as A,b as G,d as M,p as T,e as q,c as H,t as O}from"./registry-BVpmXZbM.js";/* empty css             */const v="linearGradient, clipPath, radialGradient";let o,f;function j(r){if(!r.name)return;const e=document.createElementNS("http://www.w3.org/2000/svg",r.name);for(const i of Object.keys(r.attr))e.setAttribute(i,r.attr[i]);return r.children.forEach(i=>{const t=document.createElementNS("http://www.w3.org/2000/svg",i.name);for(const n of Object.keys(i.attr))t.setAttribute(n,i.attr[n]);e.appendChild(t)}),e}class B extends Marko.Component{onMount(){var i;o||(o=document.createElementNS("http://www.w3.org/2000/svg","svg"),o.style.position="absolute",o.style.width="0",o.style.height="0",document.body.insertBefore(o,document.body.firstChild),f=document.createElementNS("http://www.w3.org/2000/svg","defs"),o.appendChild(f));const e=this.getEl("defs");if(e){let t;this.input&&this.input._themes&&(e.innerHTML=this.input._themes()),this.input&&this.input._def&&(t=j(this.input._def().browser));const n=e.querySelector("symbol");!t&&e.querySelector(v)&&(t=e.querySelector(v)),(i=e.parentNode)==null||i.removeChild(e),n&&(o.appendChild(n),t&&f.appendChild(t))}}}const c="HPFWARZl",d=O(c);var _=typeof window<"u",D={};function F(){}function L(r,e,i){var t={"confirmation-filled-16":"confirmation-filled","confirmation-filled-24":"confirmation-filled","information-filled-16":"information-filled","information-filled-24":"information-filled","attention-filled-16":"attention-filled","attention-filled-24":"attention-filled"},n=t[e]?` icon--${t[e]}`:"";if(i)return`icon icon--${i}${n}`;if(r==="icon")return`icon icon--${e}${n}`;var m=e.replace(r,`${r}-`);return`${r} ${m}${n}`}A.r(c,()=>B);const w={};d._=G(function(r,e,i,t,n,m){const{_name:a,_size:y,_type:u,_themes:k,_def:h,a11yText:l,a11yVariant:S,class:C,noSkinClasses:$,...N}=r;r.toJSON=F;var s=S==="label",p=_?D:e.global,x=l?{role:"img"}:{"aria-hidden":"true"},E=u==="icon"?"icon-":"";e.be("svg",M(x,T(N),{class:q([C,!$&&L(u,a,y)]),focusable:"false","aria-labelledby":l&&!s&&t.elId("text"),"aria-label":s&&l}),"@svg",t,null,4);var b=k,g="rendered_ebay_icon_"+a,I=!p[g];p[g]=!0,I&&b&&(e.be("defs",null,"@defs",t,null,0),_||(e.h(b(),t),h&&e.h(h().server,t)),e.ee()),l&&!s&&(e.be("title",{id:i.elId("text")},"0",t,null,1),e.t(l,t),e.ee()),e.e("use",{href:`#${E}${a}`},"1",t,0,0),e.ee()},{t:c,s:!0},w);d.Component=H(w,d._);export{d as _};