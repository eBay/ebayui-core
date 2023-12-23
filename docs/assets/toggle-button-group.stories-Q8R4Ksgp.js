var U=Object.defineProperty;var Z=(r,s,n)=>s in r?U(r,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[s]=n;var M=(r,s,n)=>(Z(r,typeof s!="symbol"?s+"":s,n),n);import{t as tt}from"./index-iqhZMf16.js";import{a as et}from"./utils-NX-dnf4r.js";import{t as B,r as f,b as _,f as ot,g as nt,p as rt,d as k}from"./registry-EgEQwbXk.js";import{c as st}from"./index-fVK3ApgG.js";import{_ as i}from"./render-tag-_0PNNh6Y.js";import{_ as o}from"./self-iterator-6yU_KG2T.js";import{_ as at,a as it,b as lt,c as ut,d as dt}from"./index-KSc1DF3K.js";import{_ as bt}from"./index-gGdRqIIa.js";import{_ as pt}from"./index-pxHqJ2TM.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";import"./dynamic-tag-7vXwaVzE.js";import"./index-eucXA0ea.js";/* empty css             */import"./index--8xUDD5P.js";/* empty css               */import"./index-Xvf_JYRr.js";import"./index-yF1zloRw.js";import"./index-oRGh3q8t.js";const mt=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`;class ct extends Marko.Component{constructor(){super(...arguments);M(this,"handleToggle",(n,{originalEvent:e,pressed:l})=>{this.input.variant==="radio"?this.state.pressed={[n]:!0}:this.input.variant==="radio-toggle"?this.state.pressed={[n]:l}:this.state.pressed={...this.state.pressed,[n]:l},this.emit("change",{originalEvent:e,pressed:Object.keys(this.state.pressed).filter(u=>this.state.pressed[+u]).map(u=>+u)})})}onCreate(){this.state={pressed:{}}}onInput(n){this.state.pressed=Object.fromEntries(n.buttons.map(({pressed:e},l)=>[l,!!e]))}}const E="bRHiNrfo",y=B(E),I=y;f.r(E,()=>y);const L=ct;y._=_(function(r,s,n,e,l,u){const{class:a,columns:t,layoutType:C,buttons:c,...T}=r;s.be("ul",ot({class:nt(["toggle-button-group",a]),"data-columns":t},rt(T)),"0",e,null,4);{let $=0;for(const{layoutType:K=C,pressed:Bt,...Q}of c||[]){let w=$++;const F=`[${w}]`;s.be("li",null,"1"+F,e,null,0),i(st,{layoutType:K,pressed:l.pressed[w],...Q},s,n,"2"+F,[["toggle","handleToggle",!1,[w]]]),s.ee()}}s.ee()},{t:E},L);y.Component=k(L,y._);const v="H/sBeNXm",g=B(v);f.r(v,()=>g);const X={};g._=_(function(r,s,n,e,l,u){const a=[];a.push({subtitle:{renderBody:t=>{t.t("Car",e)},[Symbol.iterator]:o},icon:{renderBody:t=>{i(at,{},t,n,"1")},[Symbol.iterator]:o},renderBody:t=>{t.t("Icon 1",e)},[Symbol.iterator]:o}),a.push({subtitle:{renderBody:t=>{t.t("ATV",e)},[Symbol.iterator]:o},icon:{renderBody:t=>{i(it,{},t,n,"2")},[Symbol.iterator]:o},renderBody:t=>{t.t("Icon 2",e)},[Symbol.iterator]:o}),a.push({subtitle:{renderBody:t=>{t.t("Cart",e)},[Symbol.iterator]:o},icon:{renderBody:t=>{i(bt,{},t,n,"3")},[Symbol.iterator]:o},renderBody:t=>{t.t("Icon 3",e)},[Symbol.iterator]:o}),a.push({subtitle:{renderBody:t=>{t.t("Jet Ski",e)},[Symbol.iterator]:o},icon:{renderBody:t=>{i(lt,{},t,n,"4")},[Symbol.iterator]:o},renderBody:t=>{t.t("Icon 4",e)},[Symbol.iterator]:o}),a.push({subtitle:{renderBody:t=>{t.t("Motorcycle",e)},[Symbol.iterator]:o},icon:{renderBody:t=>{i(ut,{},t,n,"5")},[Symbol.iterator]:o},renderBody:t=>{t.t("Icon 5",e)},[Symbol.iterator]:o}),a.push({subtitle:{renderBody:t=>{t.t("Snowmobile",e)},[Symbol.iterator]:o},icon:{renderBody:t=>{i(dt,{},t,n,"6")},[Symbol.iterator]:o},renderBody:t=>{t.t("Icon 6",e)},[Symbol.iterator]:o}),i(I,{columns:3,layoutType:"list",...r,buttons:a},s,n,"0")},{t:v,i:!0},X);g.Component=k(X,g._);const yt=`<ebay-toggle-button-group columns=3 layoutType="list" ...input>
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
`,x="On5ygSeW",h=B(x);f.r(x,()=>h);const Y={};h._=_(function(r,s,n,e,l,u){const a=[];a.push({subtitle:{renderBody:t=>{t.t("Empty on load",e)},[Symbol.iterator]:o},renderBody:t=>{t.t("First Item",e)},[Symbol.iterator]:o}),a.push({subtitle:{renderBody:t=>{t.t("Empty on load",e)},[Symbol.iterator]:o},renderBody:t=>{t.t("Second Item",e)},[Symbol.iterator]:o}),a.push({pressed:!0,subtitle:{renderBody:t=>{t.t("Pressed on load",e)},[Symbol.iterator]:o},renderBody:t=>{t.t("Third Item",e)},[Symbol.iterator]:o}),a.push({subtitle:{renderBody:t=>{t.t("Empty on load",e)},[Symbol.iterator]:o},renderBody:t=>{t.t("Fourth Item",e)},[Symbol.iterator]:o}),a.push({pressed:!0,subtitle:{renderBody:t=>{t.t("Pressed on load",e)},[Symbol.iterator]:o},renderBody:t=>{t.t("Fifth Item",e)},[Symbol.iterator]:o}),a.push({subtitle:{renderBody:t=>{t.t("Empty on load",e)},[Symbol.iterator]:o},renderBody:t=>{t.t("Sixth Item",e)},[Symbol.iterator]:o}),i(I,{columns:3,...r,buttons:a},s,n,"0")},{t:x,i:!0},Y);h.Component=k(Y,h._);const gt=`<ebay-toggle-button-group columns=3 ...input>
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
`,O="FlnH4CYa",S=B(O);f.r(O,()=>S);const q={onCreate(){this.state={pressed:[]}},handleChange({pressed:r}){this.state.pressed=r},clearSelection(){this.state.pressed=[]}};S._=_(function(r,s,n,e,l,u){const a=["Option 1","Option 2","Option 3"];s.be("div",{style:"width:100%"},"0",e,null,1);{i(pt,{renderBody:c=>{c.t("Clear Selection",e)}},s,n,"1",[["click","clearSelection",!1]]);const t=[];let C=0;for(const c of a||[]){let T=C++;t.push({pressed:l.pressed.includes(T),renderBody:$=>{$.t(c,e)},[Symbol.iterator]:o})}i(I,{columns:3,...r,buttons:t},s,n,"2",[["change","handleChange",!1]])}s.ee()},{t:O},q);S.Component=k(q,S._);const ht=`$ const titles = ["Option 1", "Option 2", "Option 3"];

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
`,St=r=>({input:et(r)}),At={title:"buttons/ebay-toggle-button-group",component:I,parameters:{docs:{description:{component:mt}}},argTypes:{variant:{type:"string",control:{type:"select"},options:["checkbox","radio","radio-toggle"],description:'Selection type for the buttons in the group. May be `"checkbox"` (default), `"radio"`, or `"radio-toggle"` (same as radio but with the option to deselect)'},columns:{type:"number",control:{type:"number"},description:"Preferred minimum number of columns"},layoutType:{type:"string",control:{type:"select"},options:["minimal","list","gallery"],description:'Enforced layout type of all buttons. May be `"minimal"` (default), `"list"`, or `"gallery"`. Gallery layout may only be used when there is also an icon or an image, and minimal layout may **not** be used when there is an icon or an image'},buttons:{name:"@button",description:"Represents an `<ebay-toggle-button/>` to be used as part of the group",table:{category:"@attribute tags"}},onChange:{action:"on-change",description:"Triggered when the pressed state changes",table:{category:"Events",defaultValue:{summary:"{ originalEvent, pressed }"}}}}},d=St.bind({});d.args={columns:3,buttons:[{renderBody:"Button 1"},{renderBody:"Button 2"},{renderBody:"Button 3"},{renderBody:"Button 4"},{renderBody:"Button 5"},{renderBody:"Button 6"}]};d.parameters={docs:{source:{code:tt("ebay-toggle-button",d.args)}}};const b=r=>({input:r,component:g});b.args={};b.parameters={docs:{source:{code:yt}}};const p=r=>({input:r,component:h});p.args={};p.parameters={docs:{source:{code:gt}}};const m=r=>({input:r,component:S});m.args={};m.parameters={docs:{source:{code:ht}}};var P,R,W;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(W=(R=d.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var j,G,H;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
  input: args,
  component: withIconsTemplate
})`,...(H=(G=b.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var A,V,D;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
  input: args,
  component: withDefaultTemplate
})`,...(D=(V=p.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var J,N,z;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
  input: args,
  component: controlledTemplate
})`,...(z=(N=m.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};const Vt=["Default","WithIcons","WithDefaultSelected","Controlled"];export{m as Controlled,d as Default,p as WithDefaultSelected,b as WithIcons,Vt as __namedExportsOrder,At as default};
