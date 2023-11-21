import{t as et}from"./index-a17a703b.js";import{a as rt}from"./utils-44f5c40b.js";import{t as S,r as v,_ as P,f as ot,g as nt,p as st,a as _}from"./merge-attrs-51a02d23.js";import{c as it}from"./index-cf146af5.js";import{_ as u}from"./render-tag-73fdbff3.js";import{_ as s}from"./self-iterator-81a0b488.js";import{_ as at,a as lt,b as ut,c as ct,d as bt}from"./index-949f53a5.js";import{_ as pt}from"./index-353c4696.js";import{_ as mt}from"./index-1bda937f.js";import"./_commonjsHelpers-725317a4.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./dynamic-tag-ee96640a.js";import"./index-42c7fb72.js";/* empty css             *//* empty css               */import"./index-89dcddcc.js";import"./index-9c6c531d.js";import"./index-968667d0.js";import"./index-ad737ebd.js";const dt=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-toggle-button-group
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.0.0
    </span>
</h1>

Group of toggle buttons.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/buttons-ebay-toggle-button-group)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/buttons-ebay-toggle-button-group)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-toggle-button-group/examples)
`;class yt{onCreate(){this.state={pressed:{}}}onInput(e){this.state.pressed=Object.fromEntries(e.buttons.map(({pressed:o},r)=>[r,!!o]))}handleToggle(e,{originalEvent:o,pressed:r}){this.input.variant==="radio"?this.state.pressed={[e]:!0}:this.input.variant==="radio-toggle"?this.state.pressed={[e]:r}:this.state.pressed={...this.state.pressed,[e]:r},this.emit("change",{originalEvent:o,pressed:Object.keys(this.state.pressed).filter(i=>this.state.pressed[i]).map(i=>+i)})}}const gt=["layoutType","pressed"];function C(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),o.push.apply(o,r)}return o}function ft(t){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?C(Object(o),!0).forEach(function(r){ht(t,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):C(Object(o)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))})}return t}function ht(t,e,o){return e=Ot(e),e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function Ot(t){var e=St(t,"string");return typeof e=="symbol"?e:String(e)}function St(t,e){if(typeof t!="object"||t===null)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var r=o.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function vt(t,e){if(t==null)return{};var o=Pt(t,e),r,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(i=0;i<l.length;i++)r=l[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function Pt(t,e){if(t==null)return{};var o={},r=Object.keys(t),i,l;for(l=0;l<r.length;l++)i=r[l],!(e.indexOf(i)>=0)&&(o[i]=t[i]);return o}const $="bRHiNrfo",y=S($),j=y;var _t=["class","columns"];v.r($,()=>y);const Q=yt;y._=P(function(t,e,o,r,i,l){e.be("ul",ot({class:nt(["toggle-button-group",t.class]),"data-columns":t.columns},st(t,_t)),"0",r,null,4);{let a=0;for(const n of t.buttons||[]){const{layoutType:w=t.layoutType,pressed:O}=n,B=vt(n,gt);let d=a++;const T="[".concat(d,"]");e.be("li",null,"1"+T,r,null,0),u(it,ft({layoutType:w,pressed:i.pressed[d]},B),e,o,"2"+T,[["toggle","handleToggle",!1,[d]]]),e.ee()}}e.ee()},{t:$},Q);y.Component=_(Q,y._);function D(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),o.push.apply(o,r)}return o}function x(t){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?D(Object(o),!0).forEach(function(r){jt(t,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):D(Object(o)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))})}return t}function jt(t,e,o){return e=wt(e),e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function wt(t){var e=Bt(t,"string");return typeof e=="symbol"?e:String(e)}function Bt(t,e){if(typeof t!="object"||t===null)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var r=o.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}const k="H/sBeNXm",g=S(k);v.r(k,()=>g);const U={};g._=P(function(t,e,o,r,i,l){const a=[];a.push({subtitle:{renderBody:n=>{n.t("Car",r)},[Symbol.iterator]:s},icon:{renderBody:n=>{u(at,{},n,o,"1")},[Symbol.iterator]:s},renderBody:n=>{n.t("Icon 1",r)},[Symbol.iterator]:s}),a.push({subtitle:{renderBody:n=>{n.t("ATV",r)},[Symbol.iterator]:s},icon:{renderBody:n=>{u(lt,{},n,o,"2")},[Symbol.iterator]:s},renderBody:n=>{n.t("Icon 2",r)},[Symbol.iterator]:s}),a.push({subtitle:{renderBody:n=>{n.t("Cart",r)},[Symbol.iterator]:s},icon:{renderBody:n=>{u(pt,{},n,o,"3")},[Symbol.iterator]:s},renderBody:n=>{n.t("Icon 3",r)},[Symbol.iterator]:s}),a.push({subtitle:{renderBody:n=>{n.t("Jet Ski",r)},[Symbol.iterator]:s},icon:{renderBody:n=>{u(ut,{},n,o,"4")},[Symbol.iterator]:s},renderBody:n=>{n.t("Icon 4",r)},[Symbol.iterator]:s}),a.push({subtitle:{renderBody:n=>{n.t("Motorcycle",r)},[Symbol.iterator]:s},icon:{renderBody:n=>{u(ct,{},n,o,"5")},[Symbol.iterator]:s},renderBody:n=>{n.t("Icon 5",r)},[Symbol.iterator]:s}),a.push({subtitle:{renderBody:n=>{n.t("Snowmobile",r)},[Symbol.iterator]:s},icon:{renderBody:n=>{u(bt,{},n,o,"6")},[Symbol.iterator]:s},renderBody:n=>{n.t("Icon 6",r)},[Symbol.iterator]:s}),u(j,x(x({columns:3,layoutType:"list"},t),{},{buttons:a}),e,o,"0")},{t:k,i:!0},U);g.Component=_(U,g._);const $t=`<ebay-toggle-button-group columns=3 layoutType="list" ...input>
    <@button>
        Icon 1
        <@subtitle>Car</@subtitle>
        <@icon>
            <ebay-car-24-icon/>
        </@icon>
    </@button>
    <@button>
        Icon 2
        <@subtitle>ATV</@subtitle>
        <@icon>
            <ebay-atv-24-icon/>
        </@icon>
    </@button>
    <@button>
        Icon 3
        <@subtitle>Cart</@subtitle>
        <@icon>
            <ebay-cart-24-icon/>
        </@icon>
    </@button>
    <@button>
        Icon 4
        <@subtitle>Jet Ski</@subtitle>
        <@icon>
            <ebay-jet-ski-24-icon/>
        </@icon>
    </@button>
    <@button>
        Icon 5
        <@subtitle>Motorcycle</@subtitle>
        <@icon>
            <ebay-motorcycle-24-icon/>
        </@icon>
    </@button>
    <@button>
        Icon 6
        <@subtitle>Snowmobile</@subtitle>
        <@icon>
            <ebay-snowmobile-24-icon/>
        </@icon>
    </@button>
</ebay-toggle-button-group>
`;function K(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),o.push.apply(o,r)}return o}function F(t){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?K(Object(o),!0).forEach(function(r){kt(t,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):K(Object(o)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))})}return t}function kt(t,e,o){return e=It(e),e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function It(t){var e=Et(t,"string");return typeof e=="symbol"?e:String(e)}function Et(t,e){if(typeof t!="object"||t===null)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var r=o.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}const I="On5ygSeW",f=S(I);v.r(I,()=>f);const Z={};f._=P(function(t,e,o,r,i,l){const a=[];a.push({subtitle:{renderBody:n=>{n.t("Empty on load",r)},[Symbol.iterator]:s},renderBody:n=>{n.t("First Item",r)},[Symbol.iterator]:s}),a.push({subtitle:{renderBody:n=>{n.t("Empty on load",r)},[Symbol.iterator]:s},renderBody:n=>{n.t("Second Item",r)},[Symbol.iterator]:s}),a.push({pressed:!0,subtitle:{renderBody:n=>{n.t("Pressed on load",r)},[Symbol.iterator]:s},renderBody:n=>{n.t("Third Item",r)},[Symbol.iterator]:s}),a.push({subtitle:{renderBody:n=>{n.t("Empty on load",r)},[Symbol.iterator]:s},renderBody:n=>{n.t("Fourth Item",r)},[Symbol.iterator]:s}),a.push({pressed:!0,subtitle:{renderBody:n=>{n.t("Pressed on load",r)},[Symbol.iterator]:s},renderBody:n=>{n.t("Fifth Item",r)},[Symbol.iterator]:s}),a.push({subtitle:{renderBody:n=>{n.t("Empty on load",r)},[Symbol.iterator]:s},renderBody:n=>{n.t("Sixth Item",r)},[Symbol.iterator]:s}),u(j,F(F({columns:3},t),{},{buttons:a}),e,o,"0")},{t:I,i:!0},Z);f.Component=_(Z,f._);const Tt=`<ebay-toggle-button-group columns=3 ...input>
    <@button>
        First Item
        <@subtitle>Empty on load</@subtitle>
    </@button>
    <@button>
        Second Item
        <@subtitle>Empty on load</@subtitle>
    </@button>
    <@button pressed>
        Third Item
        <@subtitle>Pressed on load</@subtitle>
    </@button>
    <@button>
        Fourth Item
        <@subtitle>Empty on load</@subtitle>
    </@button>
    <@button pressed>
        Fifth Item
        <@subtitle>Pressed on load</@subtitle>
    </@button>
    <@button>
        Sixth Item
        <@subtitle>Empty on load</@subtitle>
    </@button>
</ebay-toggle-button-group>
`;function W(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),o.push.apply(o,r)}return o}function N(t){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?W(Object(o),!0).forEach(function(r){Ct(t,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):W(Object(o)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))})}return t}function Ct(t,e,o){return e=Dt(e),e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function Dt(t){var e=xt(t,"string");return typeof e=="symbol"?e:String(e)}function xt(t,e){if(typeof t!="object"||t===null)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var r=o.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}const E="FlnH4CYa",h=S(E);v.r(E,()=>h);const tt={onCreate(){this.state={pressed:[]}},handleChange(t){let{pressed:e}=t;this.state.pressed=e},clearSelection(){this.state.pressed=[]}};h._=P(function(t,e,o,r,i,l){const a=["Option 1","Option 2","Option 3"];e.be("div",{style:"width:100%"},"0",r,null,1);{u(mt,{renderBody:O=>{O.t("Clear Selection",r)}},e,o,"1",[["click","clearSelection",!1]]);const n=[];let w=0;for(const O of a||[]){let B=w++;n.push({pressed:i.pressed.includes(B),renderBody:d=>{d.t(O,r)},[Symbol.iterator]:s})}u(j,N(N({columns:3},t),{},{buttons:n}),e,o,"2",[["change","handleChange",!1]])}e.ee()},{t:E},tt);h.Component=_(tt,h._);const Kt=`$ const titles = ["Option 1", "Option 2", "Option 3"];

<div style={ width: "100%" }>
    <ebay-button onClick("clearSelection")>
        Clear Selection
    </ebay-button>
    <ebay-toggle-button-group columns=3 on-change("handleChange") ...input>
        <for|title, i| of=titles>
            <@button pressed=state.pressed.includes(i)>
                \${title}
            </@button>
        </for>
    </ebay-toggle-button-group>
</div>

class {
    onCreate() {
        this.state = {
            pressed: [],
        };
    }
    handleChange({ pressed }) {
        this.state.pressed = pressed;
    }
    clearSelection() {
        this.state.pressed = [];
    }
}
`,Ft=t=>({input:rt(t)}),re={title:"buttons/ebay-toggle-button-group",component:j,parameters:{docs:{description:{component:dt}}},argTypes:{variant:{type:"string",control:{type:"select"},options:["checkbox","radio","radio-toggle"],description:'Selection type for the buttons in the group. May be `"checkbox"` (default), `"radio"`, or `"radio-toggle"` (same as radio but with the option to deselect)'},columns:{type:"number",control:{type:"number"},description:"Preferred minimum number of columns"},layoutType:{type:"string",control:{type:"select"},options:["minimal","list","gallery"],description:'Enforced layout type of all buttons. May be `"minimal"` (default), `"list"`, or `"gallery"`. Gallery layout may only be used when there is also an icon or an image, and minimal layout may **not** be used when there is an icon or an image'},buttons:{name:"@button",description:"Represents an `<ebay-toggle-button/>` to be used as part of the group",table:{category:"@attribute tags"}},onChange:{action:"on-change",description:"Triggered when the pressed state changes",table:{category:"Events",defaultValue:{summary:"{ originalEvent, pressed }"}}}}},c=Ft.bind({});c.args={columns:3,buttons:[{renderBody:"Button 1"},{renderBody:"Button 2"},{renderBody:"Button 3"},{renderBody:"Button 4"},{renderBody:"Button 5"},{renderBody:"Button 6"}]};c.parameters={docs:{source:{code:et("ebay-toggle-button",c.args)}}};const b=t=>({input:t,component:g});b.args={};b.parameters={docs:{source:{code:$t}}};const p=t=>({input:t,component:f});p.args={};p.parameters={docs:{source:{code:Tt}}};const m=t=>({input:t,component:h});m.args={};m.parameters={docs:{source:{code:Kt}}};var R,A,G;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(G=(A=c.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var H,M,V;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
  input: args,
  component: withIconsTemplate
})`,...(V=(M=b.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var J,z,L;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
  input: args,
  component: withDefaultTemplate
})`,...(L=(z=p.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var X,Y,q;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`args => ({
  input: args,
  component: controlledTemplate
})`,...(q=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};const oe=["Default","WithIcons","WithDefaultSelected","Controlled"];export{m as Controlled,c as Default,p as WithDefaultSelected,b as WithIcons,oe as __namedExportsOrder,re as default};
//# sourceMappingURL=toggle-button-group.stories-51e3f11b.js.map
