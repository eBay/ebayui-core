import{t as k}from"./index-a17a703b.js";import{b as I,a as R}from"./utils-44f5c40b.js";import{t as D,r as P,_ as j,g as V,p as F,h as H,i as K,a as C}from"./merge-attrs-f99eec0a.js";import{_ as U}from"./dynamic-tag-c0238d78.js";import{_ as W}from"./index-df7904f9.js";import{_ as E}from"./render-tag-73fdbff3.js";import{_ as G}from"./self-iterator-81a0b488.js";import"./_commonjsHelpers-725317a4.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-1aa10c61.js";/* empty css             */const u=["teal","light-teal","green","lime","yellow","orange","magenta"];function M(e,t){if(t)return t;let a=0,r,o;if(e&&e.length>0)for(o=0;o<e.length;o++)r=e.charCodeAt(o),a=(a<<5)-a+r,a|=0;const l=u.length,p=Math.abs(a)%l;return u[p]}const g="hwbmouFG",i=D(g),z=i;var N=["a11yText","class","size","color","img","username"];P.r(g,()=>i);const B={};i._=j(function(e,t,a,r,o,l){var p=M(e.username,e.color);t.be("div",V(F(e,N),{role:"img","aria-label":e.a11yText,class:H(["avatar",e.class,e.size&&"avatar--".concat(e.size),"avatar--".concat(p)])}),"0",r,null,4),e.img?t.e("img",K(e.img),"1",r,0,4):e.renderBody?U(t,e,null,null,null,null,a,"2"):e.username?t.t(e.username.charAt(0).toUpperCase(),r):E(W,{},t,a,"3"),t.ee()},{t:g,i:!0},B);i.Component=C(B,i._);const Z=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`;function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),a.push.apply(a,r)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?y(Object(a),!0).forEach(function(r){q(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function q(e,t,a){return t=J(t),t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function J(e){var t=L(e,"string");return typeof t=="symbol"?t:String(t)}function L(e,t){if(typeof e!="object"||e===null)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const d="7H2d/ZVi",c=D(d);P.r(d,()=>c);const $={};c._=j(function(e,t,a,r,o,l){E(z,h(h({a11yText:"Signed in as Doggy"},e),{},{img:{src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png",alt:"my photo",[Symbol.iterator]:G}}),t,a,"0")},{t:d,i:!0},$);c.Component=C($,c._);const Q=`<ebay-avatar a11y-text="Signed in as Doggy" ...input>
    <@img
        src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png"
        alt="my photo"
    />
</ebay-avatar>
`,A=e=>({input:R(e)}),me={title:"graphics & icons/ebay-avatar",component:z,parameters:{docs:{description:{component:Z}}},argTypes:{color:{options:["teal","light-teal","green","lime","yellow","orange","magenta"],table:{defaultValue:{summary:"teal"}},type:{category:"Options"},description:"The color to color the background. This can be only used in the non icon/image case. This is used simply as an override to the username hash"},size:{options:["32","40","48","56","64","96","128"],table:{defaultValue:{summary:"48"}},type:{category:"Options"},description:"The pixel size of the avatar. Can only be specific sizes"},username:{description:"The username to display. If there is no body, then this will deternmine what the content is. If there is no username passed, then user is signed out. Based on the username, the icon will change colors and show the first letter if there is no user profile pic."},a11yText:{control:{type:"text"},description:'The label to describe the users state as well as their user name. Usually in the format of "Signed in as Bob" or "Signed out"'}}},s=A.bind({});s.args={a11yText:"Signed in - as Elizabeth",username:"Elizabeth"};s.parameters={docs:{source:{code:k("ebay-avatar",s.args)}}};const m=I(c,Q,{a11yText:"Signed in - as Doggy",username:"Doggy"}),n=A.bind({});n.args={a11yText:"Signed out"};n.parameters={docs:{source:{code:k("ebay-avatar",n.args)}}};var b,f,_;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(_=(f=s.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var v,T,S;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`buildExtensionTemplate(imageTemplate, imageTemplateCode, {
  a11yText: "Signed in - as Doggy",
  username: "Doggy"
})`,...(S=(T=m.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var O,w,x;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(x=(w=n.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const le=["Default","WithImage","SignedOut"];export{s as Default,n as SignedOut,m as WithImage,le as __namedExportsOrder,me as default};
//# sourceMappingURL=avatar.stories-e4064abd.js.map
