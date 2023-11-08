import{d as h}from"./index.67736049.js";const{global:B}=__STORYBOOK_MODULE_GLOBAL__,{logger:S}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var p="backgrounds",{document:s,window:x}=B,O=()=>x.matchMedia("(prefers-reduced-motion: reduce)").matches,w=(r,e=[],a)=>{if(r==="transparent")return"transparent";if(e.find(t=>t.value===r))return r;let n=e.find(t=>t.name===a);if(n)return n.value;if(a){let t=e.map(o=>o.name).join(", ");S.warn(h`
        Backgrounds Addon: could not find the default color "${a}".
        These are the available colors for your story based on your configuration:
        ${t}.
      `)}return"transparent"},_=r=>{(Array.isArray(r)?r:[r]).forEach(A)},A=r=>{var a;let e=s.getElementById(r);e&&((a=e.parentElement)==null||a.removeChild(e))},L=(r,e)=>{let a=s.getElementById(r);if(a)a.innerHTML!==e&&(a.innerHTML=e);else{let n=s.createElement("style");n.setAttribute("id",r),n.innerHTML=e,s.head.appendChild(n)}},T=(r,e,a)=>{var t;let n=s.getElementById(r);if(n)n.innerHTML!==e&&(n.innerHTML=e);else{let o=s.createElement("style");o.setAttribute("id",r),o.innerHTML=e;let i=`addon-backgrounds-grid${a?`-docs-${a}`:""}`,d=s.getElementById(i);d?(t=d.parentElement)==null||t.insertBefore(o,d):s.head.appendChild(o)}};const{useMemo:f,useEffect:E}=__STORYBOOK_MODULE_PREVIEW_API__;var C=(r,e)=>{var c;let{globals:a,parameters:n}=e,t=(c=a[p])==null?void 0:c.value,o=n[p],i=f(()=>o.disable?"transparent":w(t,o.values,o.default),[o,t]),d=f(()=>i&&i!=="transparent",[i]),g=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",u=f(()=>{let l="transition: background-color 0.3s;";return`
      ${g} {
        background: ${i} !important;
        ${O()?"":l}
      }
    `},[i,g]);return E(()=>{let l=e.viewMode==="docs"?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";if(!d){_(l);return}T(l,u,e.viewMode==="docs"?e.id:null)},[d,u,e]),r()},I=(r,e)=>{var y,v,k;let{globals:a,parameters:n}=e,t=n[p].grid,o=((y=a[p])==null?void 0:y.grid)===!0&&t.disable!==!0,{cellAmount:i,cellSize:d,opacity:g}=t,u=e.viewMode==="docs",c=n.layout===void 0||n.layout==="padded"?16:0,l=(v=t.offsetX)!=null?v:u?20:c,m=(k=t.offsetY)!=null?k:u?20:c,$=f(()=>{let b=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",M=[`${d*i}px ${d*i}px`,`${d*i}px ${d*i}px`,`${d}px ${d}px`,`${d}px ${d}px`].join(", ");return`
      ${b} {
        background-size: ${M} !important;
        background-position: ${l}px ${m}px, ${l}px ${m}px, ${l}px ${m}px, ${l}px ${m}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${g}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${g}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${g/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${g/2}) 1px, transparent 1px) !important;
      }
    `},[d]);return E(()=>{let b=e.viewMode==="docs"?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";if(!o){_(b);return}L(b,$)},[o,$,e]),r()},G=[I,C],H={[p]:{grid:{cellSize:20,opacity:.5,cellAmount:5},values:[{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},Y={[p]:null};export{G as decorators,Y as globals,H as parameters};
//# sourceMappingURL=preview.901b05d2.js.map
