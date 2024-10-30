import{t as A}from"./index-CCz6reEH.js";import{b as Q,a as Y}from"./utils-DWCsNc5l.js";import{r as u,b as h,c as y,t as b,d as Z,p as q,e as G,g as J}from"./registry-CyswyZw5.js";import{_ as K}from"./dynamic-tag-CXXozR29.js";import{_ as L}from"./index-Bq4u441m.js";import{_}from"./render-tag-CLyPs9qZ.js";import{i as N,a as P}from"./attr-tag-DphMQldM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";/* empty css             */const S=["teal","light-teal","green","lime","yellow","orange","magenta","pink"];function X(e,a){if(a)return a;let t=0,o,r;if(e&&e.length>0)for(r=0;r<e.length;r++)o=e.charCodeAt(r),t=(t<<5)-t+o,t|=0;const l=S.length,d=Math.abs(t)%l;return S[d]}function ee(){return'<symbol viewbox="0 0 40 40" id=icon-avatar-signed-out><circle cx=20 cy=20 r=20 fill="var(--color-background-secondary, #F7F7F7)"></circle><circle cx=20 cy=17.5 r=8.333 fill="var(--color-foreground-secondary, #707070)"></circle><path d="M7.67 35.748c2-4.84 6.767-8.248 12.33-8.248s10.33 3.407 12.33 8.249A19.914 19.914 0 0 1 20 40a19.914 19.914 0 0 1-12.33-4.252Z" fill="var(--color-foreground-secondary, #707070)"></path></symbol>'}const f="_vtCzpFi",c=b(f);u.r(f,()=>c);const O={};c._=h(function(e,a,t,o,r,l){_(L,{...e,_name:"avatar-signed-out",_size:"",_type:"icon",_themes:ee},a,t,"0")},{t:f,i:!0},O);c.Component=y(O,c._);const v="EbwFumYg",i=b(v);u.r(v,()=>i);const R={};i._=h(function(e,a,t,o,r,l){const{a11yText:d,class:U,size:T,color:V,img:x,username:g,renderBody:W,...j}=e;a.be("div",Z(q(j),{role:"img","aria-label":d,class:G(["avatar",U,T&&`avatar--${T}`,`avatar--${X(g,V)}`])}),"0",o,null,4),x?a.e("img",J(x),"1",o,0,4):W?K(a,e,null,null,null,null,t,"2"):g?a.t(g.charAt(0).toUpperCase(),o):_(c,{},a,t,"3"),a.ee()},{t:v,i:!0},R);i.Component=y(R,i._);const ae=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`,k="irQ$Hxhm",m=b(k);u.r(k,()=>m);const H={};m._=h(function(e,a,t,o,r,l){_(i,N(()=>{P("img",{src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png",alt:"my photo"})},{a11yText:"Signed in as Doggy",...e,img:void 0}),a,t,"0")},{t:k,i:!0},H);m.Component=y(H,m._);const te=`<ebay-avatar a11yText="Signed in as Doggy" ...input>
    <@img
        src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png"
        alt="my photo"
    />
</ebay-avatar>
`,M=e=>({input:Y(e)}),ge={title:"graphics & icons/ebay-avatar",component:i,parameters:{docs:{description:{component:ae}}},argTypes:{color:{options:["teal","light-teal","green","lime","yellow","orange","magenta","pink"],table:{defaultValue:{summary:"teal"}},type:{category:"Options"},description:"The color to color the background. This can be only used in the non icon/image case. This is used simply as an override to the username hash"},size:{options:["32","40","48","56","64","96","128"],table:{defaultValue:{summary:"48"}},type:{category:"Options"},description:"The pixel size of the avatar. Can only be specific sizes"},username:{description:"The username to display. If there is no body, then this will deternmine what the content is. If there is no username passed, then user is signed out. Based on the username, the icon will change colors and show the first letter if there is no user profile pic."},a11yText:{control:{type:"text"},description:'The label to describe the users state as well as their user name. Usually in the format of "Signed in as Bob" or "Signed out"'}}},s=M.bind({});s.args={a11yText:"Signed in - as Elizabeth",username:"Elizabeth"};s.parameters={docs:{source:{code:A("ebay-avatar",s.args)}}};const p=Q(m,te,{a11yText:"Signed in - as Doggy",username:"Doggy"}),n=M.bind({});n.args={a11yText:"Signed out"};n.parameters={docs:{source:{code:A("ebay-avatar",n.args)}}};var C,w,$;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...($=(w=s.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var D,z,E;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`buildExtensionTemplate(imageTemplate, imageTemplateCode, {
  a11yText: "Signed in - as Doggy",
  username: "Doggy"
})`,...(E=(z=p.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var B,F,I;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(I=(F=n.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};const ue=["Default","WithImage","SignedOut"];export{s as Default,n as SignedOut,p as WithImage,ue as __namedExportsOrder,ge as default};
