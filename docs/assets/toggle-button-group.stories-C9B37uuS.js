import{t as Bt}from"./index-CCz6reEH.js";import{b as C,a as St}from"./utils-DWCsNc5l.js";import{t as b,r as m,b as c,e as Tt,f as kt,p as Ct,d as p}from"./registry-B-klnak9.js";import{c as Et}from"./index-BfEgRTc6.js";import{_ as u}from"./render-tag-BBOJ9dEX.js";import{_ as rt}from"./of-fallback-C2gEBeKK.js";import{i as s,r,a as n}from"./attr-tag-DphMQldM.js";import{_ as xt,a as $t,b as wt,c as _t,d as Ft}from"./index-wzTciCkn.js";import{_ as Pt}from"./index-DYoUiDcI.js";import{_ as Lt}from"./index-Z345IjKG.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./dynamic-tag-DQCvkDdb.js";import"./index-BJEuXy1Q.js";/* empty css             *//* empty css               */import"./index-UKJ8Gf5v.js";import"./index-B4yY3Lf-.js";import"./index-1olqwswF.js";import"./index-blmbJU0z.js";const Mt=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`;class vt extends Marko.Component{onCreate(){this.state={pressed:{}}}onInput(o){this.state.pressed=Object.fromEntries([...o.buttons||[]].map(({pressed:a},e)=>[e,!!a]))}handleToggle(o,{originalEvent:a,pressed:e}){this.input.variant==="radio"?this.state.pressed={[o]:!0}:this.input.variant==="radio-toggle"?this.state.pressed={[o]:e}:this.state.pressed={...this.state.pressed,[o]:e},this.emit("change",{originalEvent:a,pressed:Object.keys(this.state.pressed).filter(i=>this.state.pressed[+i]).map(i=>+i)})}}const v="gg_eGpGf",I=b(v),y=I;m.r(v,()=>I);const at=vt;I._=c(function(l,o,a,e,i,g){const{class:t,layoutType:h,columnsXS:F,columnsSM:P,columnsMD:L,columnsXL:mt,a11yText:ct,a11yLabelId:pt,buttons:yt=[],...gt}=l;o.be("div",Tt({class:kt(["toggle-button-group",t]),"data-columns-xs":F,"data-columns-sm":P,"data-columns-md":L,"data-columns-xl":mt},Ct(gt)),"0",e,null,4),o.be("ul",{"aria-label":ct,"aria-labelledby":pt},"1",e,null,0);{let ht=0;for(const{layoutType:It=h,pressed:jt,...ft}of rt(yt)){let M=ht++;const W=`[${M}]`;o.be("li",null,"2"+W,e,null,0),u(Et,{layoutType:It,pressed:i.pressed[M],...ft},o,a,"3"+W,[["toggle","handleToggle",!1,[M]]]),o.ee()}}o.ee(),o.ee()},{t:v},at);I.Component=p(at,I._);const X="yDE$nIIb",f=b(X);m.r(X,()=>f);const lt={};f._=c(function(l,o,a,e,i,g){u(y,s(()=>{r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Car",e)}}),n("icon",{renderBody:t=>{u(xt,{},t,a,"1")}}),t=>{t.t("Icon 1",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("ATV",e)}}),n("icon",{renderBody:t=>{u($t,{},t,a,"2")}}),t=>{t.t("Icon 2",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Cart",e)}}),n("icon",{renderBody:t=>{u(Pt,{},t,a,"3")}}),t=>{t.t("Icon 3",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Jet Ski",e)}}),n("icon",{renderBody:t=>{u(wt,{},t,a,"4")}}),t=>{t.t("Icon 4",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Motorcycle",e)}}),n("icon",{renderBody:t=>{u(_t,{},t,a,"5")}}),t=>{t.t("Icon 5",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Snowmobile",e)}}),n("icon",{renderBody:t=>{u(Ft,{},t,a,"6")}}),t=>{t.t("Icon 6",e)})))},{layoutType:"list",...l,buttons:void 0}),o,a,"0")},{t:X,i:!0},lt);f.Component=p(lt,f._);const Xt=`<ebay-toggle-button-group layoutType="list" ...input>
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
`,O="zOELqgad",B=b(O);m.r(O,()=>B);const ut={};B._=c(function(l,o,a,e,i,g){u(y,s(()=>{r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("First Item",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("Second Item",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Pressed on load",e)}}),t=>{t.t("Third Item",e)}),{pressed:!0})),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("Fourth Item",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Pressed on load",e)}}),t=>{t.t("Fifth Item",e)}),{pressed:!0})),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("Sixth Item",e)})))},{...l,buttons:void 0}),o,a,"0")},{t:O,i:!0},ut);B.Component=p(ut,B._);const Ot=`<ebay-toggle-button-group ...input>
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
`,D="ZZFEcZhb",S=b(D);m.r(D,()=>S);const it={onCreate(){this.state={pressed:[]}},handleChange({pressed:l}){this.state.pressed=l},clearSelection(){this.state.pressed=[]}};S._=c(function(l,o,a,e,i,g){const t=["Option 1","Option 2","Option 3"];o.be("div",{style:"width:100%"},"0",e,null,1),u(Lt,{renderBody:h=>{h.t("Clear Selection",e)}},o,a,"1",[["click","clearSelection",!1]]),u(y,s(()=>{let h=0;for(const F of rt(t)){let P=h++;r("buttons",{pressed:i.pressed.includes(P),renderBody:L=>{L.t(F,e)}})}},{a11yText:"Toggle Button Group",...l,buttons:void 0}),o,a,"2",[["change","handleChange",!1]]),o.ee()},{t:D},it);S.Component=p(it,S._);const Dt=`$ const titles = ["Option 1", "Option 2", "Option 3"];

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
`,G="wDzlRFfh",T=b(G);m.r(G,()=>T);const dt={};T._=c(function(l,o,a,e,i,g){o.be("h5",{id:a.elId("label")},"0",e,null,1),o.t("Select Items",e),o.ee(),u(y,s(()=>{r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("First Item",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("Second Item",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Pressed on load",e)}}),t=>{t.t("Third Item",e)}),{pressed:!0})),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("Fourth Item",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Pressed on load",e)}}),t=>{t.t("Fifth Item",e)}),{pressed:!0})),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("Sixth Item",e)})))},{a11yLabelId:a.elId("label"),...l,buttons:void 0}),o,a,"1")},{t:G,i:!0},dt);T.Component=p(dt,T._);const Gt=`<h5 id:scoped="label">Select Items</h5>
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
`,R="BWksE$zf",k=b(R);m.r(R,()=>k);const bt={};k._=c(function(l,o,a,e,i,g){u(y,s(()=>{r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("First Item",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("Second Item",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Pressed on load",e)}}),t=>{t.t("Third Item",e)}),{pressed:!0})),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("Fourth Item",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Pressed on load",e)}}),t=>{t.t("Fifth Item",e)}),{pressed:!0})),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("Sixth Item",e)})))},{columnsSM:3,columnsXS:2,columnsMD:6,columnsXL:8,...l,buttons:void 0}),o,a,"0")},{t:R,i:!0},bt);k.Component=p(bt,k._);const Rt=`<ebay-toggle-button-group columnsSM=3 columnsXS=2 columnsMD=6 columnsXL=8 ...input>
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
`,Wt=l=>({input:St(l)}),ue={title:"buttons/ebay-toggle-button-group",component:y,parameters:{docs:{description:{component:Mt}}},argTypes:{variant:{type:"string",control:{type:"select"},options:["checkbox","radio","radio-toggle"],description:'Selection type for the buttons in the group. May be `"checkbox"` (default), `"radio"`, or `"radio-toggle"` (same as radio but with the option to deselect)'},columnsXS:{type:"number",control:{type:"number"},description:"Preferred minimum number of columns within extra small containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed."},columnsSM:{type:"number",control:{type:"number"},description:"Preferred minimum number of columns within small containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed."},columnsMD:{type:"number",control:{type:"number"},description:"Preferred minimum number of columns within medium containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed."},columnsXL:{type:"number",control:{type:"number"},description:"Preferred minimum number of columns within extra large containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed."},a11yText:{type:"string",description:"Accessibility text for the group. Cannot be used together with `a11yLabelId`"},a11yLabelId:{type:"string",description:"Id of the element that labels the group. Required for a11y compliance. Cannot be used together with `a11yText`"},layoutType:{type:"string",control:{type:"select"},options:["minimal","list","gallery"],description:'Enforced layout type of all buttons. May be `"minimal"` (default), `"list"`, or `"gallery"`. Gallery layout may only be used when there is also an icon or an image, and minimal layout may **not** be used when there is an icon or an image'},buttons:{name:"@button",description:"Represents an `<ebay-toggle-button/>` to be used as part of the group",table:{category:"@attribute tags"}},onChange:{action:"on-change",description:"Triggered when the pressed state changes",table:{category:"Events",defaultValue:{summary:"{ originalEvent, pressed }"}}}}},d=Wt.bind({});d.args={a11yText:"Toggle Button Group",buttons:[{renderBody:"Button 1"},{renderBody:"Button 2"},{renderBody:"Button 3"},{renderBody:"Button 4"},{renderBody:"Button 5"},{renderBody:"Button 6"}]};d.parameters={docs:{source:{code:Bt("ebay-toggle-button",d.args)}}};const E=C(f,Xt),x=C(B,Ot),$=C(T,Gt),w=C(S,Dt),_=C(k,Rt,{columnsSM:3,columnsXS:2,columnsMD:6,columnsXL:8});var j,z,A;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(A=(z=d.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var V,Z,q;E.parameters={...E.parameters,docs:{...(V=E.parameters)==null?void 0:V.docs,source:{originalSource:"buildExtensionTemplate(withIconsTemplate, withIconsCode)",...(q=(Z=E.parameters)==null?void 0:Z.docs)==null?void 0:q.source}}};var J,H,K;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:"buildExtensionTemplate(withDefaultTemplate, withDefaultCode)",...(K=(H=x.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var N,Q,U;$.parameters={...$.parameters,docs:{...(N=$.parameters)==null?void 0:N.docs,source:{originalSource:"buildExtensionTemplate(externalLabelTemplate, externalLabelCode)",...(U=(Q=$.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,tt,et;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:"buildExtensionTemplate(controlledTemplate, controlledCode)",...(et=(tt=w.parameters)==null?void 0:tt.docs)==null?void 0:et.source}}};var nt,ot,st;_.parameters={..._.parameters,docs:{...(nt=_.parameters)==null?void 0:nt.docs,source:{originalSource:`buildExtensionTemplate(columnsTemplate, columnsCode, {
  columnsSM: 3,
  columnsXS: 2,
  columnsMD: 6,
  columnsXL: 8
})`,...(st=(ot=_.parameters)==null?void 0:ot.docs)==null?void 0:st.source}}};const ie=["Default","WithIcons","WithDefaultSelected","externalLabel","Controlled","PerferedColumns"];export{w as Controlled,d as Default,_ as PerferedColumns,x as WithDefaultSelected,E as WithIcons,ie as __namedExportsOrder,ue as default,$ as externalLabel};
