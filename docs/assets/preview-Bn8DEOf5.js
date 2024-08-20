import{a as g,x as s}from"./index-DigGj0TJ.js";const{global:H}=__STORYBOOK_MODULE_GLOBAL__;var r="storybook/highlight",a="storybookHighlight",m=`${r}/add`,_=`${r}/reset`,{document:h}=H,I=(e="#FF4785",t="dashed")=>`
  outline: 2px ${t} ${e};
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`,i=g.getChannel(),p=e=>{let t=a;n();let o=Array.from(new Set(e.elements)),l=h.createElement("style");l.setAttribute("id",t),l.innerHTML=o.map(d=>`${d}{
          ${I(e.color,e.style)}
         }`).join(" "),h.head.appendChild(l)},n=()=>{var o;let e=a,t=h.getElementById(e);t&&((o=t.parentNode)==null||o.removeChild(t))};i.on(s,n);i.on(_,n);i.on(m,p);
