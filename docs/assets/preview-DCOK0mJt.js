import{P as b,z as v,s as M}from"./index-DigGj0TJ.js";import{d as x}from"./index-DrFu-skq.js";const{global:B}=__STORYBOOK_MODULE_GLOBAL__;var g="backgrounds",{document:l,window:w}=B,S=()=>w.matchMedia("(prefers-reduced-motion: reduce)").matches,A=(r,e=[],a)=>{if(r==="transparent")return"transparent";if(e.find(n=>n.value===r))return r;let d=e.find(n=>n.name===a);if(d)return d.value;if(a){let n=e.map(i=>i.name).join(", ");M.warn(x`
        Backgrounds Addon: could not find the default color "${a}".
        These are the available colors for your story based on your configuration:
        ${n}.
      `)}return"transparent"},k=r=>{(Array.isArray(r)?r:[r]).forEach(E)},E=r=>{var a;let e=l.getElementById(r);e&&((a=e.parentElement)==null||a.removeChild(e))},L=(r,e)=>{let a=l.getElementById(r);if(a)a.innerHTML!==e&&(a.innerHTML=e);else{let d=l.createElement("style");d.setAttribute("id",r),d.innerHTML=e,l.head.appendChild(d)}},C=(r,e,a)=>{var n;let d=l.getElementById(r);if(d)d.innerHTML!==e&&(d.innerHTML=e);else{let i=l.createElement("style");i.setAttribute("id",r),i.innerHTML=e;let o=`addon-backgrounds-grid${a?`-docs-${a}`:""}`,t=l.getElementById(o);t?(n=t.parentElement)==null||n.insertBefore(i,t):l.head.appendChild(i)}},T=(r,e)=>{var c;let{globals:a,parameters:d}=e,n=(c=a[g])==null?void 0:c.value,i=d[g],o=b(()=>i.disable?"transparent":A(n,i.values,i.default),[i,n]),t=b(()=>o&&o!=="transparent",[o]),s=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",u=b(()=>`
      ${s} {
        background: ${o} !important;
        ${S()?"":"transition: background-color 0.3s;"}
      }
    `,[o,s]);return v(()=>{let p=e.viewMode==="docs"?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";if(!t){k(p);return}C(p,u,e.viewMode==="docs"?e.id:null)},[t,u,e]),r()},_=(r,e)=>{var y;let{globals:a,parameters:d}=e,n=d[g].grid,i=((y=a[g])==null?void 0:y.grid)===!0&&n.disable!==!0,{cellAmount:o,cellSize:t,opacity:s}=n,u=e.viewMode==="docs",c=d.layout===void 0||d.layout==="padded"?16:0,p=n.offsetX??(u?20:c),m=n.offsetY??(u?20:c),$=b(()=>{let f=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",h=[`${t*o}px ${t*o}px`,`${t*o}px ${t*o}px`,`${t}px ${t}px`,`${t}px ${t}px`].join(", ");return`
      ${f} {
        background-size: ${h} !important;
        background-position: ${p}px ${m}px, ${p}px ${m}px, ${p}px ${m}px, ${p}px ${m}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${s}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${s}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${s/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${s/2}) 1px, transparent 1px) !important;
      }
    `},[t]);return v(()=>{let f=e.viewMode==="docs"?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";if(!i){k(f);return}L(f,$)},[i,$,e]),r()},I=[_,T],O={[g]:{grid:{cellSize:20,opacity:.5,cellAmount:5},values:[{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},G={[g]:null};export{I as decorators,G as initialGlobals,O as parameters};
