<<<<<<< HEAD:docs/assets/avatar.stories-BGUpWAAi.js
import{t as D}from"./index-CCz6reEH.js";import{b as j,a as G}from"./utils-DWCsNc5l.js";import{t as $,r as z,b as B,f as M,p as Z,e as q,h as J,d as E}from"./registry-Cc025Aii.js";import{_ as K}from"./dynamic-tag-BtS2B08A.js";import{_ as L}from"./index-CG9wTkxQ.js";import{_ as I}from"./render-tag-BBOJ9dEX.js";import{i as N,a as P}from"./attr-tag-DphMQldM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-oHjhF9YT.js";/* empty css             */const b=["teal","light-teal","green","lime","yellow","orange","magenta","pink"];function Q(e,a){if(a)return a;let t=0,o,n;if(e&&e.length>0)for(n=0;n<e.length;n++)o=e.charCodeAt(n),t=(t<<5)-t+o,t|=0;const l=b.length,p=Math.abs(t)%l;return b[p]}const g="hwbmouFG",i=$(g),O=i;z.r(g,()=>i);const A={};i._=B(function(e,a,t,o,n,l){const{a11yText:p,class:F,size:u,color:H,img:y,username:d,renderBody:U,...W}=e;a.be("div",M(Z(W),{role:"img","aria-label":p,class:q(["avatar",F,u&&`avatar--${u}`,`avatar--${Q(d,H)}`])}),"0",o,null,4),y?a.e("img",J(y),"1",o,0,4):U?K(a,e,null,null,null,null,t,"2"):d?a.t(d.charAt(0).toUpperCase(),o):I(L,{},a,t,"3"),a.ee()},{t:g,i:!0},A);i.Component=E(A,i._);const X=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
=======
import{t as D}from"./index-CCz6reEH.js";import{b as j,a as G}from"./utils-DWCsNc5l.js";import{t as $,r as z,b as B,e as M,p as Z,f as q,h as J,d as E}from"./registry-DcejNBCz.js";import{_ as K}from"./dynamic-tag-CH7Ufq3Q.js";import{_ as L}from"./index-D0xLBcZy.js";import{_ as I}from"./render-tag-BBOJ9dEX.js";import{i as N,a as P}from"./attr-tag-DphMQldM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-CenZB3al.js";/* empty css             */const b=["teal","light-teal","green","lime","yellow","orange","magenta","pink"];function Q(e,a){if(a)return a;let t=0,o,n;if(e&&e.length>0)for(n=0;n<e.length;n++)o=e.charCodeAt(n),t=(t<<5)-t+o,t|=0;const l=b.length,p=Math.abs(t)%l;return b[p]}const g="hwbmouFG",i=$(g),O=i;z.r(g,()=>i);const A={};i._=B(function(e,a,t,o,n,l){const{a11yText:p,class:F,size:u,color:H,img:y,username:d,renderBody:U,...W}=e;a.be("div",M(Z(W),{role:"img","aria-label":p,class:q(["avatar",F,u&&`avatar--${u}`,`avatar--${Q(d,H)}`])}),"0",o,null,4),y?a.e("img",J(y),"1",o,0,4):U?K(a,e,null,null,null,null,t,"2"):d?a.t(d.charAt(0).toUpperCase(),o):I(L,{},a,t,"3"),a.ee()},{t:g,i:!0},A);i.Component=E(A,i._);const X=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
>>>>>>> 0dd633d3f26a93f2dac2c5dddbe8a62ca57c0af5:docs/assets/avatar.stories-D9V0_Ukm.js
    <span>
        ebay-avatar
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.2.0
    </span>
</h1>

Avatar is a users badge which shows their current state, either signed out or signed in. It can take different colors or a profile pic.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/graphics-icons-ebay-avatar)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/graphics-icons-ebay-avatar)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-avatar/examples)
`,h="7H2d/ZVi",m=$(h);z.r(h,()=>m);const R={};m._=B(function(e,a,t,o,n,l){I(O,N(()=>{P("img",{src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png",alt:"my photo"})},{a11yText:"Signed in as Doggy",...e,img:void 0}),a,t,"0")},{t:h,i:!0},R);m.Component=E(R,m._);const Y=`<ebay-avatar a11yText="Signed in as Doggy" ...input>
    <@img
        src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png"
        alt="my photo"
    />
</ebay-avatar>
`,V=e=>({input:G(e)}),pe={title:"graphics & icons/ebay-avatar",component:O,parameters:{docs:{description:{component:X}}},argTypes:{color:{options:["teal","light-teal","green","lime","yellow","orange","magenta","pink"],table:{defaultValue:{summary:"teal"}},type:{category:"Options"},description:"The color to color the background. This can be only used in the non icon/image case. This is used simply as an override to the username hash"},size:{options:["32","40","48","56","64","96","128"],table:{defaultValue:{summary:"48"}},type:{category:"Options"},description:"The pixel size of the avatar. Can only be specific sizes"},username:{description:"The username to display. If there is no body, then this will deternmine what the content is. If there is no username passed, then user is signed out. Based on the username, the icon will change colors and show the first letter if there is no user profile pic."},a11yText:{control:{type:"text"},description:'The label to describe the users state as well as their user name. Usually in the format of "Signed in as Bob" or "Signed out"'}}},r=V.bind({});r.args={a11yText:"Signed in - as Elizabeth",username:"Elizabeth"};r.parameters={docs:{source:{code:D("ebay-avatar",r.args)}}};const c=j(m,Y,{a11yText:"Signed in - as Doggy",username:"Doggy"}),s=V.bind({});s.args={a11yText:"Signed out"};s.parameters={docs:{source:{code:D("ebay-avatar",s.args)}}};var _,f,T;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(T=(f=r.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var k,v,x;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`buildExtensionTemplate(imageTemplate, imageTemplateCode, {
  a11yText: "Signed in - as Doggy",
  username: "Doggy"
})`,...(x=(v=c.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var S,C,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(w=(C=s.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};const de=["Default","WithImage","SignedOut"];export{r as Default,s as SignedOut,c as WithImage,de as __namedExportsOrder,pe as default};
