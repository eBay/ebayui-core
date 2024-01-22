import{t as Q}from"./index-iqhZMf16.js";import{a as U}from"./utils-NX-dnf4r.js";import{t as S,r as B,b as f,f as Z,g as tt,p as et,d as _}from"./registry-EgEQwbXk.js";import{c as ot}from"./index-fVK3ApgG.js";import{_ as i}from"./render-tag-_0PNNh6Y.js";import{_ as o}from"./self-iterator-6yU_KG2T.js";import{_ as nt,a as rt,b as st,c as at,d as it}from"./index-KSc1DF3K.js";import{_ as lt}from"./index-gGdRqIIa.js";import{_ as ut}from"./index-O9ypE3B3.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";import"./dynamic-tag-7vXwaVzE.js";import"./index-eucXA0ea.js";/* empty css             *//* empty css               */import"./index-Xvf_JYRr.js";import"./index-yF1zloRw.js";import"./index-oRGh3q8t.js";import"./index--8xUDD5P.js";const dt=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`;class bt extends Marko.Component{onCreate(){this.state={pressed:{}}}onInput(n){this.state.pressed=Object.fromEntries(n.buttons.map(({pressed:a},e)=>[e,!!a]))}handleToggle(n,{originalEvent:a,pressed:e}){this.input.variant==="radio"?this.state.pressed={[n]:!0}:this.input.variant==="radio-toggle"?this.state.pressed={[n]:e}:this.state.pressed={...this.state.pressed,[n]:e},this.emit("change",{originalEvent:a,pressed:Object.keys(this.state.pressed).filter(l=>this.state.pressed[+l]).map(l=>+l)})}}const E="bRHiNrfo",c=S(E),k=c;B.r(E,()=>c);const z=bt;c._=f(function(s,n,a,e,l,I){const{class:r,columns:t,layoutType:C,buttons:m,...T}=s;n.be("ul",Z({class:tt(["toggle-button-group",r]),"data-columns":t},et(T)),"0",e,null,4);{let $=0;for(const{layoutType:q=C,pressed:gt,...K}of m||[]){let w=$++;const F=`[${w}]`;n.be("li",null,"1"+F,e,null,0),i(ot,{layoutType:q,pressed:l.pressed[w],...K},n,a,"2"+F,[["toggle","handleToggle",!1,[w]]]),n.ee()}}n.ee()},{t:E},z);c.Component=_(z,c._);const v="H/sBeNXm",y=S(v);B.r(v,()=>y);const L={};y._=f(function(s,n,a,e,l,I){const r=[];r.push({subtitle:{renderBody:t=>{t.t("Car",e)},[Symbol.iterator]:o},icon:{renderBody:t=>{i(nt,{},t,a,"1")},[Symbol.iterator]:o},renderBody:t=>{t.t("Icon 1",e)},[Symbol.iterator]:o}),r.push({subtitle:{renderBody:t=>{t.t("ATV",e)},[Symbol.iterator]:o},icon:{renderBody:t=>{i(rt,{},t,a,"2")},[Symbol.iterator]:o},renderBody:t=>{t.t("Icon 2",e)},[Symbol.iterator]:o}),r.push({subtitle:{renderBody:t=>{t.t("Cart",e)},[Symbol.iterator]:o},icon:{renderBody:t=>{i(lt,{},t,a,"3")},[Symbol.iterator]:o},renderBody:t=>{t.t("Icon 3",e)},[Symbol.iterator]:o}),r.push({subtitle:{renderBody:t=>{t.t("Jet Ski",e)},[Symbol.iterator]:o},icon:{renderBody:t=>{i(st,{},t,a,"4")},[Symbol.iterator]:o},renderBody:t=>{t.t("Icon 4",e)},[Symbol.iterator]:o}),r.push({subtitle:{renderBody:t=>{t.t("Motorcycle",e)},[Symbol.iterator]:o},icon:{renderBody:t=>{i(at,{},t,a,"5")},[Symbol.iterator]:o},renderBody:t=>{t.t("Icon 5",e)},[Symbol.iterator]:o}),r.push({subtitle:{renderBody:t=>{t.t("Snowmobile",e)},[Symbol.iterator]:o},icon:{renderBody:t=>{i(it,{},t,a,"6")},[Symbol.iterator]:o},renderBody:t=>{t.t("Icon 6",e)},[Symbol.iterator]:o}),i(k,{columns:3,layoutType:"list",...s,buttons:r},n,a,"0")},{t:v,i:!0},L);y.Component=_(L,y._);const pt=`<ebay-toggle-button-group columns=3 layoutType="list" ...input>
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
`,x="On5ygSeW",g=S(x);B.r(x,()=>g);const X={};g._=f(function(s,n,a,e,l,I){const r=[];r.push({subtitle:{renderBody:t=>{t.t("Empty on load",e)},[Symbol.iterator]:o},renderBody:t=>{t.t("First Item",e)},[Symbol.iterator]:o}),r.push({subtitle:{renderBody:t=>{t.t("Empty on load",e)},[Symbol.iterator]:o},renderBody:t=>{t.t("Second Item",e)},[Symbol.iterator]:o}),r.push({pressed:!0,subtitle:{renderBody:t=>{t.t("Pressed on load",e)},[Symbol.iterator]:o},renderBody:t=>{t.t("Third Item",e)},[Symbol.iterator]:o}),r.push({subtitle:{renderBody:t=>{t.t("Empty on load",e)},[Symbol.iterator]:o},renderBody:t=>{t.t("Fourth Item",e)},[Symbol.iterator]:o}),r.push({pressed:!0,subtitle:{renderBody:t=>{t.t("Pressed on load",e)},[Symbol.iterator]:o},renderBody:t=>{t.t("Fifth Item",e)},[Symbol.iterator]:o}),r.push({subtitle:{renderBody:t=>{t.t("Empty on load",e)},[Symbol.iterator]:o},renderBody:t=>{t.t("Sixth Item",e)},[Symbol.iterator]:o}),i(k,{columns:3,...s,buttons:r},n,a,"0")},{t:x,i:!0},X);g.Component=_(X,g._);const mt=`<ebay-toggle-button-group columns=3 ...input>
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
`,O="FlnH4CYa",h=S(O);B.r(O,()=>h);const Y={onCreate(){this.state={pressed:[]}},handleChange({pressed:s}){this.state.pressed=s},clearSelection(){this.state.pressed=[]}};h._=f(function(s,n,a,e,l,I){const r=["Option 1","Option 2","Option 3"];n.be("div",{style:"width:100%"},"0",e,null,1);{i(ut,{renderBody:m=>{m.t("Clear Selection",e)}},n,a,"1",[["click","clearSelection",!1]]);const t=[];let C=0;for(const m of r||[]){let T=C++;t.push({pressed:l.pressed.includes(T),renderBody:$=>{$.t(m,e)},[Symbol.iterator]:o})}i(k,{columns:3,...s,buttons:t},n,a,"2",[["change","handleChange",!1]])}n.ee()},{t:O},Y);h.Component=_(Y,h._);const ct=`$ const titles = ["Option 1", "Option 2", "Option 3"];

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
`,yt=s=>({input:U(s)}),Wt={title:"buttons/ebay-toggle-button-group",component:k,parameters:{docs:{description:{component:dt}}},argTypes:{variant:{type:"string",control:{type:"select"},options:["checkbox","radio","radio-toggle"],description:'Selection type for the buttons in the group. May be `"checkbox"` (default), `"radio"`, or `"radio-toggle"` (same as radio but with the option to deselect)'},columns:{type:"number",control:{type:"number"},description:"Preferred minimum number of columns"},layoutType:{type:"string",control:{type:"select"},options:["minimal","list","gallery"],description:'Enforced layout type of all buttons. May be `"minimal"` (default), `"list"`, or `"gallery"`. Gallery layout may only be used when there is also an icon or an image, and minimal layout may **not** be used when there is an icon or an image'},buttons:{name:"@button",description:"Represents an `<ebay-toggle-button/>` to be used as part of the group",table:{category:"@attribute tags"}},onChange:{action:"on-change",description:"Triggered when the pressed state changes",table:{category:"Events",defaultValue:{summary:"{ originalEvent, pressed }"}}}}},u=yt.bind({});u.args={columns:3,buttons:[{renderBody:"Button 1"},{renderBody:"Button 2"},{renderBody:"Button 3"},{renderBody:"Button 4"},{renderBody:"Button 5"},{renderBody:"Button 6"}]};u.parameters={docs:{source:{code:Q("ebay-toggle-button",u.args)}}};const d=s=>({input:s,component:y});d.args={};d.parameters={docs:{source:{code:pt}}};const b=s=>({input:s,component:g});b.args={};b.parameters={docs:{source:{code:mt}}};const p=s=>({input:s,component:h});p.args={};p.parameters={docs:{source:{code:ct}}};var M,P,R;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(R=(P=u.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var W,j,G;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
  input: args,
  component: withIconsTemplate
})`,...(G=(j=d.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var H,A,V;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
  input: args,
  component: withDefaultTemplate
})`,...(V=(A=b.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var D,J,N;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
  input: args,
  component: controlledTemplate
})`,...(N=(J=p.parameters)==null?void 0:J.docs)==null?void 0:N.source}}};const jt=["Default","WithIcons","WithDefaultSelected","Controlled"];export{p as Controlled,u as Default,b as WithDefaultSelected,d as WithIcons,jt as __namedExportsOrder,Wt as default};
