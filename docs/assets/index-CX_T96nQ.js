import{r as g,b as C,d as w,p as B,e as I,c as L,t as N}from"./registry-CtNeIPU8.js";/* empty css                    *//* empty css               *//* empty css             */import{_ as S}from"./dynamic-tag-HMZVE1pc.js";import{_ as $}from"./index-BwvkvsZu.js";import{_ as A}from"./render-tag-mtfFSHEK.js";import{h as K}from"./index-CbT4wDAv.js";class x extends Marko.Component{handleClick(a){this.input.disabled||this.emit("click",{originalEvent:a})}handleKeydown(a){K(a,()=>{this.input.disabled||this.emit("escape",{originalEvent:a})})}handleFocus(a){this.emit("focus",{originalEvent:a})}handleBlur(a){this.emit("blur",{originalEvent:a})}}const l="RlqZdfNj",i=N(l),F=["small","large"];var H=["primary","secondary","tertiary"];function J(){return{disabled:this.disabled}}g.r(l,()=>x);const c={};i._=C(function(t,a,e,b,O,T){const{ariaLabel:r,badgeAriaLabel:u,badgeNumber:n,href:o,priority:d="none",partiallyDisabled:p,renderBody:_,size:s,transparent:h,type:y,class:k,...f}=t;t.toJSON=J;const m=o?"a":"button";a.be(m,w(B(f),{"aria-label":r,href:o,class:I([k,"icon-btn",n&&"icon-btn--badged",h&&"icon-btn--transparent",H.includes(d)&&`icon-btn--${d}`,s&&F.includes(s)&&`icon-btn--${s}`]),"data-ebayui":"",type:m==="button"&&(y||"button"),"aria-disabled":p&&"true"}),"0",b,null,4,{onclick:e.d("click","handleClick",!1),onkeydown:e.d("keydown","handleKeydown",!1),onfocus:e.d("focus","handleFocus",!1),onblur:e.d("blur","handleBlur",!1)}),S(a,_,null,null,null,null,e,"1"),n&&A($,{number:n,type:"icon",ariaLabel:r&&u,ariaHidden:!!r&&"true"},a,e,"2"),a.ee()},{t:l,s:!0},c);i.Component=L(c,i._);export{i as _};