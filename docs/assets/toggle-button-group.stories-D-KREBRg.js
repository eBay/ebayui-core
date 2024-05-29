import{t as Z}from"./index-CCz6reEH.js";import{a as tt}from"./utils-DWCsNc5l.js";import{t as B,r as k,b as _,e as et,f as ot,p as nt,d as I}from"./registry-DcejNBCz.js";import{c as st}from"./index-BQVWcQ87.js";import{_ as l}from"./render-tag-BBOJ9dEX.js";import{i as a,r as i,a as r}from"./attr-tag-DphMQldM.js";import{_ as rt,a as at,b as it,c as lt,d as ut}from"./index-DFR2NB1v.js";import{_ as dt}from"./index-DPXIC8yn.js";import{_ as ct}from"./index-Ds0knl6D.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./dynamic-tag-CH7Ufq3Q.js";import"./index-CMkz4cmR.js";/* empty css             *//* empty css               */import"./index-AW2S7xMy.js";import"./index-D4BJokV4.js";import"./index-BfyIUMHf.js";import"./index-blmbJU0z.js";const pt=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`;class bt extends Marko.Component{onCreate(){this.state={pressed:{}}}onInput(o){this.state.pressed=Object.fromEntries([...o.buttons||[]].map(({pressed:s},e)=>[e,!!s]))}handleToggle(o,{originalEvent:s,pressed:e}){this.input.variant==="radio"?this.state.pressed={[o]:!0}:this.input.variant==="radio-toggle"?this.state.pressed={[o]:e}:this.state.pressed={...this.state.pressed,[o]:e},this.emit("change",{originalEvent:s,pressed:Object.keys(this.state.pressed).filter(u=>this.state.pressed[+u]).map(u=>+u)})}}const v="bRHiNrfo",g=B(v),C=g;k.r(v,()=>g);const L=bt;g._=_(function(n,o,s,e,u,S){const{class:t,columns:m,layoutType:T,buttons:$=[],...w}=n;o.be("ul",et({class:ot(["toggle-button-group",t]),"data-columns":m},nt(w)),"0",e,null,4);{let K=0;for(const{layoutType:Q=T,pressed:ft,...U}of $||[]){let E=K++;const M=`[${E}]`;o.be("li",null,"1"+M,e,null,0),l(st,{layoutType:Q,pressed:u.pressed[E],...U},o,s,"2"+M,[["toggle","handleToggle",!1,[E]]]),o.ee()}}o.ee()},{t:v},L);g.Component=I(L,g._);const x="H/sBeNXm",y=B(x);k.r(x,()=>y);const X={};y._=_(function(n,o,s,e,u,S){l(C,a(()=>{i("buttons",a(()=>(r("subtitle",{renderBody:t=>{t.t("Car",e)}}),r("icon",{renderBody:t=>{l(rt,{},t,s,"1")}}),t=>{t.t("Icon 1",e)}))),i("buttons",a(()=>(r("subtitle",{renderBody:t=>{t.t("ATV",e)}}),r("icon",{renderBody:t=>{l(at,{},t,s,"2")}}),t=>{t.t("Icon 2",e)}))),i("buttons",a(()=>(r("subtitle",{renderBody:t=>{t.t("Cart",e)}}),r("icon",{renderBody:t=>{l(dt,{},t,s,"3")}}),t=>{t.t("Icon 3",e)}))),i("buttons",a(()=>(r("subtitle",{renderBody:t=>{t.t("Jet Ski",e)}}),r("icon",{renderBody:t=>{l(it,{},t,s,"4")}}),t=>{t.t("Icon 4",e)}))),i("buttons",a(()=>(r("subtitle",{renderBody:t=>{t.t("Motorcycle",e)}}),r("icon",{renderBody:t=>{l(lt,{},t,s,"5")}}),t=>{t.t("Icon 5",e)}))),i("buttons",a(()=>(r("subtitle",{renderBody:t=>{t.t("Snowmobile",e)}}),r("icon",{renderBody:t=>{l(ut,{},t,s,"6")}}),t=>{t.t("Icon 6",e)})))},{columns:3,layoutType:"list",...n,buttons:void 0}),o,s,"0")},{t:x,i:!0},X);y.Component=I(X,y._);const mt=`<ebay-toggle-button-group columns=3 layoutType="list" ...input>
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
`,O="On5ygSeW",h=B(O);k.r(O,()=>h);const Y={};h._=_(function(n,o,s,e,u,S){l(C,a(()=>{i("buttons",a(()=>(r("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("First Item",e)}))),i("buttons",a(()=>(r("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("Second Item",e)}))),i("buttons",a(()=>(r("subtitle",{renderBody:t=>{t.t("Pressed on load",e)}}),t=>{t.t("Third Item",e)}),{pressed:!0})),i("buttons",a(()=>(r("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("Fourth Item",e)}))),i("buttons",a(()=>(r("subtitle",{renderBody:t=>{t.t("Pressed on load",e)}}),t=>{t.t("Fifth Item",e)}),{pressed:!0})),i("buttons",a(()=>(r("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("Sixth Item",e)})))},{columns:3,...n,buttons:void 0}),o,s,"0")},{t:O,i:!0},Y);h.Component=I(Y,h._);const gt=`<ebay-toggle-button-group columns=3 ...input>
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
`,F="FlnH4CYa",f=B(F);k.r(F,()=>f);const q={onCreate(){this.state={pressed:[]}},handleChange({pressed:n}){this.state.pressed=n},clearSelection(){this.state.pressed=[]}};f._=_(function(n,o,s,e,u,S){const t=["Option 1","Option 2","Option 3"];o.be("div",{style:"width:100%"},"0",e,null,1),l(ct,{renderBody:m=>{m.t("Clear Selection",e)}},o,s,"1",[["click","clearSelection",!1]]),l(C,a(()=>{let m=0;for(const T of t||[]){let $=m++;i("buttons",{pressed:u.pressed.includes($),renderBody:w=>{w.t(T,e)}})}},{columns:3,...n,buttons:void 0}),o,s,"2",[["change","handleChange",!1]]),o.ee()},{t:F},q);f.Component=I(q,f._);const yt=`$ const titles = ["Option 1", "Option 2", "Option 3"];

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
`,ht=n=>({input:tt(n)}),Gt={title:"buttons/ebay-toggle-button-group",component:C,parameters:{docs:{description:{component:pt}}},argTypes:{variant:{type:"string",control:{type:"select"},options:["checkbox","radio","radio-toggle"],description:'Selection type for the buttons in the group. May be `"checkbox"` (default), `"radio"`, or `"radio-toggle"` (same as radio but with the option to deselect)'},columns:{type:"number",control:{type:"number"},description:"Preferred minimum number of columns"},layoutType:{type:"string",control:{type:"select"},options:["minimal","list","gallery"],description:'Enforced layout type of all buttons. May be `"minimal"` (default), `"list"`, or `"gallery"`. Gallery layout may only be used when there is also an icon or an image, and minimal layout may **not** be used when there is an icon or an image'},buttons:{name:"@button",description:"Represents an `<ebay-toggle-button/>` to be used as part of the group",table:{category:"@attribute tags"}},onChange:{action:"on-change",description:"Triggered when the pressed state changes",table:{category:"Events",defaultValue:{summary:"{ originalEvent, pressed }"}}}}},d=ht.bind({});d.args={columns:3,buttons:[{renderBody:"Button 1"},{renderBody:"Button 2"},{renderBody:"Button 3"},{renderBody:"Button 4"},{renderBody:"Button 5"},{renderBody:"Button 6"}]};d.parameters={docs:{source:{code:Z("ebay-toggle-button",d.args)}}};const c=n=>({input:n,component:y});c.args={};c.parameters={docs:{source:{code:mt}}};const p=n=>({input:n,component:h});p.args={};p.parameters={docs:{source:{code:gt}}};const b=n=>({input:n,component:f});b.args={};b.parameters={docs:{source:{code:yt}}};var P,R,W;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(W=(R=d.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var j,G,H;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
  input: args,
  component: withIconsTemplate
})`,...(H=(G=c.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var A,V,D;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
  input: args,
  component: withDefaultTemplate
})`,...(D=(V=p.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var J,N,z;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
  input: args,
  component: controlledTemplate
})`,...(z=(N=b.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};const Ht=["Default","WithIcons","WithDefaultSelected","Controlled"];export{b as Controlled,d as Default,p as WithDefaultSelected,c as WithIcons,Ht as __namedExportsOrder,Gt as default};
