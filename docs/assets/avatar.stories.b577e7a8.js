import{t as D}from"./index.bcb3df20.js";import{b as I,a as R}from"./utils.f000f876.js";import{t as P,r as j,a as k,d as C,m as V,c as F,p as H,b as K}from"./merge-attrs.9e0d7be9.js";import{d as U}from"./dynamic-tag.70156c9d.js";import{_ as W}from"./index.7dccdb77.js";import{r as E}from"./render-tag.1a0b986f.js";import{s as G}from"./self-iterator.45abe0c9.js";import"./_commonjsHelpers.b8add541.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./index.aa2d3137.js";/* empty css             */const u=["teal","light-teal","green","lime","yellow","orange","magenta"];function M(e,t){if(t)return t;let r=0,a,o;if(e&&e.length>0)for(o=0;o<e.length;o++)a=e.charCodeAt(o),r=(r<<5)-r+a,r|=0;const m=u.length,p=Math.abs(r)%m;return u[p]}const g="hwbmouFG",i=P(g),z=i;var N=["a11yText","class","size","color","img","username"];j.exports.r(g,()=>i);const B={};i._=k(function(e,t,r,a,o,m){var p=M(e.username,e.color);t.be("div",V(H(e,N),{role:"img","aria-label":e.a11yText,class:F(["avatar",e.class,e.size&&"avatar--".concat(e.size),"avatar--".concat(p)])}),"0",a,null,4),e.img?t.e("img",K(e.img),"1",a,0,4):e.renderBody?U(t,e,null,null,null,null,r,"2"):e.username?t.t(e.username.charAt(0).toUpperCase(),a):E(W,{},t,r,"3"),t.ee()},{t:g,i:!0},B);i.Component=C(B,i._);const Z=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`;function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?y(Object(r),!0).forEach(function(a){q(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function q(e,t,r){return t=J(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function J(e){var t=L(e,"string");return typeof t=="symbol"?t:String(t)}function L(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const d="7H2d/ZVi",c=P(d);j.exports.r(d,()=>c);const $={};c._=k(function(e,t,r,a,o,m){E(z,b(b({a11yText:"Signed in as Doggy"},e),{},{img:{src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png",alt:"my photo",[Symbol.iterator]:G}}),t,r,"0")},{t:d,i:!0},$);c.Component=C($,c._);const Q=`<ebay-avatar a11y-text="Signed in as Doggy" ...input>
    <@img
        src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png"
        alt="my photo"
    />
</ebay-avatar>
`,A=e=>({input:R(e)}),le={title:"graphics & icons/ebay-avatar",component:z,parameters:{docs:{description:{component:Z}}},argTypes:{color:{options:["teal","light-teal","green","lime","yellow","orange","magenta"],table:{defaultValue:{summary:"teal"}},type:{category:"Options"},description:"The color to color the background. This can be only used in the non icon/image case. This is used simply as an override to the username hash"},size:{options:["32","40","48","56","64","96","128"],table:{defaultValue:{summary:"48"}},type:{category:"Options"},description:"The pixel size of the avatar. Can only be specific sizes"},username:{description:"The username to display. If there is no body, then this will deternmine what the content is. If there is no username passed, then user is signed out. Based on the username, the icon will change colors and show the first letter if there is no user profile pic."},a11yText:{control:{type:"text"},description:'The label to describe the users state as well as their user name. Usually in the format of "Signed in as Bob" or "Signed out"'}}},s=A.bind({});s.args={a11yText:"Signed in - as Elizabeth",username:"Elizabeth"};s.parameters={docs:{source:{code:D("ebay-avatar",s.args)}}};const l=I(c,Q,{a11yText:"Signed in - as Doggy",username:"Doggy"}),n=A.bind({});n.args={a11yText:"Signed out"};n.parameters={docs:{source:{code:D("ebay-avatar",n.args)}}};var h,f,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var T,_,x;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`buildExtensionTemplate(imageTemplate, imageTemplateCode, {
  a11yText: "Signed in - as Doggy",
  username: "Doggy"
})`,...(x=(_=l.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var S,O,w;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(w=(O=n.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};const me=["Default","WithImage","SignedOut"];export{s as Default,n as SignedOut,l as WithImage,me as __namedExportsOrder,le as default};
//# sourceMappingURL=avatar.stories.b577e7a8.js.map
