import{t as ft}from"./index-CCz6reEH.js";import{b as C,a as Bt}from"./utils-DWCsNc5l.js";import{t as b,r as m,b as p,e as Tt,f as St,p as kt,d as c}from"./registry-B-klnak9.js";import{c as Ct}from"./index-BZUg6Zq0.js";import{_ as u}from"./render-tag-BBOJ9dEX.js";import{i as s,r,a as n}from"./attr-tag-DphMQldM.js";import{_ as Et,a as xt,b as $t,c as _t,d as wt}from"./index-KP6N4H10.js";import{_ as Ft}from"./index-CEIx_xnL.js";import{_ as vt}from"./index-BVSy80fu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./dynamic-tag-DQCvkDdb.js";import"./index-C98gAawF.js";/* empty css             *//* empty css               */import"./index-CAVmWk6z.js";import"./index-CIM_zO8g.js";import"./index-ClSYtjPE.js";import"./index-blmbJU0z.js";const Pt=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`;class Lt extends Marko.Component{onCreate(){this.state={pressed:{}}}onInput(o){this.state.pressed=Object.fromEntries([...o.buttons||[]].map(({pressed:a},e)=>[e,!!a]))}handleToggle(o,{originalEvent:a,pressed:e}){this.input.variant==="radio"?this.state.pressed={[o]:!0}:this.input.variant==="radio-toggle"?this.state.pressed={[o]:e}:this.state.pressed={...this.state.pressed,[o]:e},this.emit("change",{originalEvent:a,pressed:Object.keys(this.state.pressed).filter(i=>this.state.pressed[+i]).map(i=>+i)})}}const M="gg_eGpGf",I=b(M),y=I;m.r(M,()=>I);const rt=Lt;I._=p(function(l,o,a,e,i,g){const{class:t,layoutType:h,columnsXS:F,columnsSM:v,columnsMD:P,columnsXL:bt,a11yText:mt,a11yLabelId:pt,buttons:ct=[],...yt}=l;o.be("div",Tt({class:St(["toggle-button-group",t]),"data-columns-xs":F,"data-columns-sm":v,"data-columns-md":P,"data-columns-xl":bt},kt(yt)),"0",e,null,4),o.be("ul",{"aria-label":mt,"aria-labelledby":pt},"1",e,null,0);{let gt=0;for(const{layoutType:ht=h,pressed:Wt,...It}of ct||[]){let L=gt++;const W=`[${L}]`;o.be("li",null,"2"+W,e,null,0),u(Ct,{layoutType:ht,pressed:i.pressed[L],...It},o,a,"3"+W,[["toggle","handleToggle",!1,[L]]]),o.ee()}}o.ee(),o.ee()},{t:M},rt);I.Component=c(rt,I._);const O="yDE$nIIb",f=b(O);m.r(O,()=>f);const at={};f._=p(function(l,o,a,e,i,g){u(y,s(()=>{r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Car",e)}}),n("icon",{renderBody:t=>{u(Et,{},t,a,"1")}}),t=>{t.t("Icon 1",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("ATV",e)}}),n("icon",{renderBody:t=>{u(xt,{},t,a,"2")}}),t=>{t.t("Icon 2",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Cart",e)}}),n("icon",{renderBody:t=>{u(Ft,{},t,a,"3")}}),t=>{t.t("Icon 3",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Jet Ski",e)}}),n("icon",{renderBody:t=>{u($t,{},t,a,"4")}}),t=>{t.t("Icon 4",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Motorcycle",e)}}),n("icon",{renderBody:t=>{u(_t,{},t,a,"5")}}),t=>{t.t("Icon 5",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Snowmobile",e)}}),n("icon",{renderBody:t=>{u(wt,{},t,a,"6")}}),t=>{t.t("Icon 6",e)})))},{layoutType:"list",...l,buttons:void 0}),o,a,"0")},{t:O,i:!0},at);f.Component=c(at,f._);const Mt=`<ebay-toggle-button-group layoutType="list" ...input>
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
`,G="zOELqgad",B=b(G);m.r(G,()=>B);const lt={};B._=p(function(l,o,a,e,i,g){u(y,s(()=>{r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("First Item",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("Second Item",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Pressed on load",e)}}),t=>{t.t("Third Item",e)}),{pressed:!0})),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("Fourth Item",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Pressed on load",e)}}),t=>{t.t("Fifth Item",e)}),{pressed:!0})),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("Sixth Item",e)})))},{...l,buttons:void 0}),o,a,"0")},{t:G,i:!0},lt);B.Component=c(lt,B._);const Ot=`<ebay-toggle-button-group ...input>
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
`,X="ZZFEcZhb",T=b(X);m.r(X,()=>T);const ut={onCreate(){this.state={pressed:[]}},handleChange({pressed:l}){this.state.pressed=l},clearSelection(){this.state.pressed=[]}};T._=p(function(l,o,a,e,i,g){const t=["Option 1","Option 2","Option 3"];o.be("div",{style:"width:100%"},"0",e,null,1),u(vt,{renderBody:h=>{h.t("Clear Selection",e)}},o,a,"1",[["click","clearSelection",!1]]),u(y,s(()=>{let h=0;for(const F of t||[]){let v=h++;r("buttons",{pressed:i.pressed.includes(v),renderBody:P=>{P.t(F,e)}})}},{a11yText:"Toggle Button Group",...l,buttons:void 0}),o,a,"2",[["change","handleChange",!1]]),o.ee()},{t:X},ut);T.Component=c(ut,T._);const Gt=`$ const titles = ["Option 1", "Option 2", "Option 3"];

<div style={ width: "100%" }>
    <ebay-button onClick("clearSelection")>
        Clear Selection
    </ebay-button>
    <ebay-toggle-button-group on-change("handleChange") a11yText="Toggle Button Group" ...input>
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
`,D="wDzlRFfh",S=b(D);m.r(D,()=>S);const it={};S._=p(function(l,o,a,e,i,g){o.be("h5",{id:a.elId("label")},"0",e,null,1),o.t("Select Items",e),o.ee(),u(y,s(()=>{r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("First Item",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("Second Item",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Pressed on load",e)}}),t=>{t.t("Third Item",e)}),{pressed:!0})),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("Fourth Item",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Pressed on load",e)}}),t=>{t.t("Fifth Item",e)}),{pressed:!0})),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("Sixth Item",e)})))},{a11yLabelId:a.elId("label"),...l,buttons:void 0}),o,a,"1")},{t:D,i:!0},it);S.Component=c(it,S._);const Xt=`<h5 id:scoped="label">Select Items</h5>
<ebay-toggle-button-group a11y-label-id:scoped="label" ...input>
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
`,R="BWksE$zf",k=b(R);m.r(R,()=>k);const dt={};k._=p(function(l,o,a,e,i,g){u(y,s(()=>{r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("First Item",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("Second Item",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Pressed on load",e)}}),t=>{t.t("Third Item",e)}),{pressed:!0})),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("Fourth Item",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Pressed on load",e)}}),t=>{t.t("Fifth Item",e)}),{pressed:!0})),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("Sixth Item",e)})))},{columnsSM:3,columnsXS:2,columnsMD:6,columnsXL:8,...l,buttons:void 0}),o,a,"0")},{t:R,i:!0},dt);k.Component=c(dt,k._);const Dt=`<ebay-toggle-button-group columnsSM=3 columnsXS=2 columnsMD=6 columnsXL=8 ...input>
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
`,Rt=l=>({input:Bt(l)}),ae={title:"buttons/ebay-toggle-button-group",component:y,parameters:{docs:{description:{component:Pt}}},argTypes:{variant:{type:"string",control:{type:"select"},options:["checkbox","radio","radio-toggle"],description:'Selection type for the buttons in the group. May be `"checkbox"` (default), `"radio"`, or `"radio-toggle"` (same as radio but with the option to deselect)'},columnsXS:{type:"number",control:{type:"number"},description:"Preferred minimum number of columns on extra small screens"},columnsSM:{type:"number",control:{type:"number"},description:"Preferred minimum number of columns on small screens"},columnsMD:{type:"number",control:{type:"number"},description:"Preferred minimum number of columns on medium screens"},columnsXL:{type:"number",control:{type:"number"},description:"Preferred minimum number of columns on extra large screens"},a11yText:{type:"string",description:"Accessibility text for the group. Cannot be used together with `a11yLabelId`"},a11yLabelId:{type:"string",description:"Id of the element that labels the group. Required for a11y compliance. Cannot be used together with `a11yText`"},layoutType:{type:"string",control:{type:"select"},options:["minimal","list","gallery"],description:'Enforced layout type of all buttons. May be `"minimal"` (default), `"list"`, or `"gallery"`. Gallery layout may only be used when there is also an icon or an image, and minimal layout may **not** be used when there is an icon or an image'},buttons:{name:"@button",description:"Represents an `<ebay-toggle-button/>` to be used as part of the group",table:{category:"@attribute tags"}},onChange:{action:"on-change",description:"Triggered when the pressed state changes",table:{category:"Events",defaultValue:{summary:"{ originalEvent, pressed }"}}}}},d=Rt.bind({});d.args={a11yText:"Toggle Button Group",buttons:[{renderBody:"Button 1"},{renderBody:"Button 2"},{renderBody:"Button 3"},{renderBody:"Button 4"},{renderBody:"Button 5"},{renderBody:"Button 6"}]};d.parameters={docs:{source:{code:ft("ebay-toggle-button",d.args)}}};const E=C(f,Mt),x=C(B,Ot),$=C(S,Xt),_=C(T,Gt),w=C(k,Dt);var j,z,A;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(A=(z=d.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var V,Z,q;E.parameters={...E.parameters,docs:{...(V=E.parameters)==null?void 0:V.docs,source:{originalSource:"buildExtensionTemplate(withIconsTemplate, withIconsCode)",...(q=(Z=E.parameters)==null?void 0:Z.docs)==null?void 0:q.source}}};var J,H,K;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:"buildExtensionTemplate(withDefaultTemplate, withDefaultCode)",...(K=(H=x.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var N,Q,U;$.parameters={...$.parameters,docs:{...(N=$.parameters)==null?void 0:N.docs,source:{originalSource:"buildExtensionTemplate(externalLabelTemplate, externalLabelCode)",...(U=(Q=$.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,tt,et;_.parameters={..._.parameters,docs:{...(Y=_.parameters)==null?void 0:Y.docs,source:{originalSource:"buildExtensionTemplate(controlledTemplate, controlledCode)",...(et=(tt=_.parameters)==null?void 0:tt.docs)==null?void 0:et.source}}};var nt,ot,st;w.parameters={...w.parameters,docs:{...(nt=w.parameters)==null?void 0:nt.docs,source:{originalSource:"buildExtensionTemplate(columnsTemplate, columnsCode)",...(st=(ot=w.parameters)==null?void 0:ot.docs)==null?void 0:st.source}}};const le=["Default","WithIcons","WithDefaultSelected","externalLabel","Controlled","Columns"];export{w as Columns,_ as Controlled,d as Default,x as WithDefaultSelected,E as WithIcons,le as __namedExportsOrder,ae as default,$ as externalLabel};
