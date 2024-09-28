import{t as Bt}from"./index-CCz6reEH.js";import{b as k,a as St}from"./utils-DWCsNc5l.js";import{t as m,r as c,b as p,d as Tt,e as kt,p as Ct,c as y}from"./registry-CtNeIPU8.js";import{_ as Et}from"./index-B-JzFWhN.js";import{_ as i}from"./render-tag-mtfFSHEK.js";import{_ as st}from"./of-fallback-C2gEBeKK.js";import{i as s,r,a as n}from"./attr-tag-DphMQldM.js";import{_ as xt,a as $t,b as _t,c as wt,d as Mt}from"./index-SMSVO3lk.js";import{_ as Ft}from"./index-gpFdnwMS.js";import{_ as Pt}from"./index-C241jnEo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./dynamic-tag-HMZVE1pc.js";import"./index-B6qYX52F.js";/* empty css             *//* empty css               */import"./index-BL5tj0GS.js";import"./index-DW9U_Ppe.js";import"./index-DN2d98YU.js";import"./index-CbT4wDAv.js";const Lt=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`;class vt extends Marko.Component{onCreate(){this.state={pressed:{}}}onInput(o){this.state.pressed=Object.fromEntries([...o.buttons||[]].map(({pressed:a},e)=>[e,!!a]))}handleToggle(o,{originalEvent:a,pressed:e}){this.input.variant==="radio"?this.state.pressed={[o]:!0}:this.input.variant==="radio-toggle"?this.state.pressed={[o]:e}:this.state.pressed={...this.state.pressed,[o]:e},this.emit("change",{originalEvent:a,pressed:Object.keys(this.state.pressed).filter(u=>this.state.pressed[+u]).map(u=>+u)})}}const L="gg_eGpGf",d=m(L);c.r(L,()=>d);const rt=vt;d._=p(function(l,o,a,e,u,g){const{class:t,layoutType:h,columnsMin:w,columnsXS:M,columnsSM:F,columnsMD:bt,columnsXL:mt,a11yText:ct,a11yLabelId:pt,buttons:yt=[],...gt}=l;o.be("div",Tt({class:kt(["toggle-button-group",t]),"data-columns-min":w,"data-columns-xs":M,"data-columns-sm":F,"data-columns-md":bt,"data-columns-xl":mt},Ct(gt)),"0",e,null,4),o.be("ul",{"aria-label":ct,"aria-labelledby":pt},"1",e,null,0);{let ht=0;for(const{layoutType:It=h,pressed:jt,...ft}of st(yt)){let P=ht++;const R=`[${P}]`;o.be("li",null,"2"+R,e,null,0),i(Et,{layoutType:It,pressed:u.pressed[P],...ft},o,a,"3"+R,[["toggle","handleToggle",!1,[P]]]),o.ee()}}o.ee(),o.ee()},{t:L},rt);d.Component=y(rt,d._);const v="yDE$nIIb",I=m(v);c.r(v,()=>I);const at={};I._=p(function(l,o,a,e,u,g){i(d,s(()=>{r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Car",e)}}),n("icon",{renderBody:t=>{i(xt,{},t,a,"1")}}),t=>{t.t("Icon 1",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("ATV",e)}}),n("icon",{renderBody:t=>{i($t,{},t,a,"2")}}),t=>{t.t("Icon 2",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Cart",e)}}),n("icon",{renderBody:t=>{i(Ft,{},t,a,"3")}}),t=>{t.t("Icon 3",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Jet Ski",e)}}),n("icon",{renderBody:t=>{i(_t,{},t,a,"4")}}),t=>{t.t("Icon 4",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Motorcycle",e)}}),n("icon",{renderBody:t=>{i(wt,{},t,a,"5")}}),t=>{t.t("Icon 5",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Snowmobile",e)}}),n("icon",{renderBody:t=>{i(Mt,{},t,a,"6")}}),t=>{t.t("Icon 6",e)})))},{layoutType:"list",...l,buttons:void 0}),o,a,"0")},{t:v,i:!0},at);I.Component=y(at,I._);const Xt=`<ebay-toggle-button-group layoutType="list" ...input>
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
`,X="zOELqgad",f=m(X);c.r(X,()=>f);const lt={};f._=p(function(l,o,a,e,u,g){i(d,s(()=>{r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("First Item",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("Second Item",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Pressed on load",e)}}),t=>{t.t("Third Item",e)}),{pressed:!0})),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("Fourth Item",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Pressed on load",e)}}),t=>{t.t("Fifth Item",e)}),{pressed:!0})),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("Sixth Item",e)})))},{...l,buttons:void 0}),o,a,"0")},{t:X,i:!0},lt);f.Component=y(lt,f._);const Ot=`<ebay-toggle-button-group ...input>
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
`,O="ZZFEcZhb",B=m(O);c.r(O,()=>B);const it={onCreate(){this.state={pressed:[]}},handleChange({pressed:l}){this.state.pressed=l},clearSelection(){this.state.pressed=[]}};B._=p(function(l,o,a,e,u,g){const t=["Option 1","Option 2","Option 3"];o.be("div",{style:"width:100%"},"0",e,null,1),i(Pt,{renderBody:h=>{h.t("Clear Selection",e)}},o,a,"1",[["click","clearSelection",!1]]),i(d,s(()=>{let h=0;for(const w of st(t)){let M=h++;r("buttons",{pressed:u.pressed.includes(M),renderBody:F=>{F.t(w,e)}})}},{a11yText:"Toggle Button Group",...l,buttons:void 0}),o,a,"2",[["change","handleChange",!1]]),o.ee()},{t:O},it);B.Component=y(it,B._);const Dt=`$ const titles = ["Option 1", "Option 2", "Option 3"];

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
`,D="wDzlRFfh",S=m(D);c.r(D,()=>S);const ut={};S._=p(function(l,o,a,e,u,g){o.be("h5",{id:a.elId("label")},"0",e,null,1),o.t("Select Items",e),o.ee(),i(d,s(()=>{r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("First Item",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("Second Item",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Pressed on load",e)}}),t=>{t.t("Third Item",e)}),{pressed:!0})),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("Fourth Item",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Pressed on load",e)}}),t=>{t.t("Fifth Item",e)}),{pressed:!0})),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("Sixth Item",e)})))},{a11yLabelId:a.elId("label"),...l,buttons:void 0}),o,a,"1")},{t:D,i:!0},ut);S.Component=y(ut,S._);const Gt=`<h5 id:scoped="label">Select Items</h5>
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
`,G="BWksE$zf",T=m(G);c.r(G,()=>T);const dt={};T._=p(function(l,o,a,e,u,g){i(d,s(()=>{r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("First Item",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("Second Item",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Pressed on load",e)}}),t=>{t.t("Third Item",e)}),{pressed:!0})),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("Fourth Item",e)}))),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Pressed on load",e)}}),t=>{t.t("Fifth Item",e)}),{pressed:!0})),r("buttons",s(()=>(n("subtitle",{renderBody:t=>{t.t("Empty on load",e)}}),t=>{t.t("Sixth Item",e)})))},{columnsMin:1,columnsSM:3,columnsXS:2,columnsMD:6,columnsXL:8,...l,buttons:void 0}),o,a,"0")},{t:G,i:!0},dt);T.Component=y(dt,T._);const Rt=`<ebay-toggle-button-group columnsMin=1 columnsSM=3 columnsXS=2 columnsMD=6 columnsXL=8 ...input>
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
`,Wt=l=>({input:St(l)}),ie={title:"buttons/ebay-toggle-button-group",component:d,parameters:{docs:{description:{component:Lt}}},argTypes:{variant:{type:"string",control:{type:"select"},options:["checkbox","radio","radio-toggle"],description:'Selection type for the buttons in the group. May be `"checkbox"` (default), `"radio"`, or `"radio-toggle"` (same as radio but with the option to deselect)'},columnsMin:{type:"number",control:{type:"number"},description:"Preferred minimum number of columns for smallest container/screen (1-3). If this is not set will do an automatic layout. It is recommended to not set this unless needed."},columnsXS:{type:"number",control:{type:"number"},description:"Preferred minimum number of columns within extra small containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed."},columnsSM:{type:"number",control:{type:"number"},description:"Preferred minimum number of columns within small containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed."},columnsMD:{type:"number",control:{type:"number"},description:"Preferred minimum number of columns within medium containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed."},columnsXL:{type:"number",control:{type:"number"},description:"Preferred minimum number of columns within extra large containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed."},a11yText:{type:"string",description:"Accessibility text for the group. Cannot be used together with `a11yLabelId`"},a11yLabelId:{type:"string",description:"Id of the element that labels the group. Required for a11y compliance. Cannot be used together with `a11yText`"},layoutType:{type:"string",control:{type:"select"},options:["minimal","list","gallery"],description:'Enforced layout type of all buttons. May be `"minimal"` (default), `"list"`, or `"gallery"`. Gallery layout may only be used when there is also an icon or an image, and minimal layout may **not** be used when there is an icon or an image'},buttons:{name:"@button",description:"Represents an `<ebay-toggle-button/>` to be used as part of the group",table:{category:"@attribute tags"}},onChange:{action:"on-change",description:"Triggered when the pressed state changes",table:{category:"Events",defaultValue:{summary:"{ originalEvent, pressed }"}}}}},b=Wt.bind({});b.args={a11yText:"Toggle Button Group",buttons:[{renderBody:"Button 1"},{renderBody:"Button 2"},{renderBody:"Button 3"},{renderBody:"Button 4"},{renderBody:"Button 5"},{renderBody:"Button 6"}]};b.parameters={docs:{source:{code:Bt("ebay-toggle-button",b.args)}}};const C=k(I,Xt),E=k(f,Ot),x=k(S,Gt),$=k(B,Dt),_=k(T,Rt,{columnsMin:1,columnsSM:3,columnsXS:2,columnsMD:6,columnsXL:8});var W,j,z;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(z=(j=b.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var A,V,Z;C.parameters={...C.parameters,docs:{...(A=C.parameters)==null?void 0:A.docs,source:{originalSource:"buildExtensionTemplate(withIconsTemplate, withIconsCode)",...(Z=(V=C.parameters)==null?void 0:V.docs)==null?void 0:Z.source}}};var q,J,H;E.parameters={...E.parameters,docs:{...(q=E.parameters)==null?void 0:q.docs,source:{originalSource:"buildExtensionTemplate(withDefaultTemplate, withDefaultCode)",...(H=(J=E.parameters)==null?void 0:J.docs)==null?void 0:H.source}}};var K,N,Q;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:"buildExtensionTemplate(externalLabelTemplate, externalLabelCode)",...(Q=(N=x.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var U,Y,tt;$.parameters={...$.parameters,docs:{...(U=$.parameters)==null?void 0:U.docs,source:{originalSource:"buildExtensionTemplate(controlledTemplate, controlledCode)",...(tt=(Y=$.parameters)==null?void 0:Y.docs)==null?void 0:tt.source}}};var et,nt,ot;_.parameters={..._.parameters,docs:{...(et=_.parameters)==null?void 0:et.docs,source:{originalSource:`buildExtensionTemplate(columnsTemplate, columnsCode, {
  columnsMin: 1,
  columnsSM: 3,
  columnsXS: 2,
  columnsMD: 6,
  columnsXL: 8
})`,...(ot=(nt=_.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};const ue=["Default","WithIcons","WithDefaultSelected","externalLabel","Controlled","PerferedColumns"];export{$ as Controlled,b as Default,_ as PerferedColumns,E as WithDefaultSelected,C as WithIcons,ue as __namedExportsOrder,ie as default,x as externalLabel};
