import{t as D}from"./index-CCz6reEH.js";import{b as j,a as M}from"./utils-DWCsNc5l.js";import{t as $,r as E,b as z,e as Q,p as Y,f as q,h as G,d as B}from"./registry-B-klnak9.js";import{_ as J}from"./dynamic-tag-DQCvkDdb.js";import{_ as K}from"./index-BQTIZIsK.js";import{_ as I}from"./render-tag-BBOJ9dEX.js";import{i as L,a as N}from"./attr-tag-DphMQldM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-C98gAawF.js";/* empty css             */const b=["teal","light-teal","green","lime","yellow","orange","magenta","pink"];function P(e,a){if(a)return a;let t=0,o,n;if(e&&e.length>0)for(n=0;n<e.length;n++)o=e.charCodeAt(n),t=(t<<5)-t+o,t|=0;const l=b.length,p=Math.abs(t)%l;return b[p]}const d="EbwFumYg",i=$(d),O=i;E.r(d,()=>i);const A={};i._=z(function(e,a,t,o,n,l){const{a11yText:p,class:H,size:u,color:U,img:y,username:g,renderBody:V,...W}=e;a.be("div",Q(Y(W),{role:"img","aria-label":p,class:q(["avatar",H,u&&`avatar--${u}`,`avatar--${P(g,U)}`])}),"0",o,null,4),y?a.e("img",G(y),"1",o,0,4):V?J(a,e,null,null,null,null,t,"2"):g?a.t(g.charAt(0).toUpperCase(),o):I(K,{},a,t,"3"),a.ee()},{t:d,i:!0},A);i.Component=B(A,i._);const X=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`,h="irQ$Hxhm",m=$(h);E.r(h,()=>m);const R={};m._=z(function(e,a,t,o,n,l){I(O,L(()=>{N("img",{src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png",alt:"my photo"})},{a11yText:"Signed in as Doggy",...e,img:void 0}),a,t,"0")},{t:h,i:!0},R);m.Component=B(R,m._);const Z=`<ebay-avatar a11yText="Signed in as Doggy" ...input>
    <@img
        src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png"
        alt="my photo"
    />
</ebay-avatar>
`,F=e=>({input:M(e)}),pe={title:"graphics & icons/ebay-avatar",component:O,parameters:{docs:{description:{component:X}}},argTypes:{color:{options:["teal","light-teal","green","lime","yellow","orange","magenta","pink"],table:{defaultValue:{summary:"teal"}},type:{category:"Options"},description:"The color to color the background. This can be only used in the non icon/image case. This is used simply as an override to the username hash"},size:{options:["32","40","48","56","64","96","128"],table:{defaultValue:{summary:"48"}},type:{category:"Options"},description:"The pixel size of the avatar. Can only be specific sizes"},username:{description:"The username to display. If there is no body, then this will deternmine what the content is. If there is no username passed, then user is signed out. Based on the username, the icon will change colors and show the first letter if there is no user profile pic."},a11yText:{control:{type:"text"},description:'The label to describe the users state as well as their user name. Usually in the format of "Signed in as Bob" or "Signed out"'}}},r=F.bind({});r.args={a11yText:"Signed in - as Elizabeth",username:"Elizabeth"};r.parameters={docs:{source:{code:D("ebay-avatar",r.args)}}};const c=j(m,Z,{a11yText:"Signed in - as Doggy",username:"Doggy"}),s=F.bind({});s.args={a11yText:"Signed out"};s.parameters={docs:{source:{code:D("ebay-avatar",s.args)}}};var _,f,T;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(T=(f=r.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var k,v,x;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`buildExtensionTemplate(imageTemplate, imageTemplateCode, {
  a11yText: "Signed in - as Doggy",
  username: "Doggy"
})`,...(x=(v=c.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var S,C,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(w=(C=s.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};const ge=["Default","WithImage","SignedOut"];export{r as Default,s as SignedOut,c as WithImage,ge as __namedExportsOrder,pe as default};
