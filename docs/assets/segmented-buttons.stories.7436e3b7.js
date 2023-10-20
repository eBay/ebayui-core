import{t as O}from"./index.bcb3df20.js";import{b as V,a as R}from"./utils.f000f876.js";import{t as E,r as z,a as A,d as $,m as _,p as x,c as k}from"./merge-attrs.9e0d7be9.js";import{d as p}from"./dynamic-tag.70156c9d.js";import{_ as j,a as D}from"./index.2d180ef7.js";import{r as g}from"./render-tag.1a0b986f.js";import{s as d}from"./self-iterator.45abe0c9.js";import"./_commonjsHelpers.b8add541.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./index.aa2d3137.js";/* empty css             */const M={onCreate(){this.state={selectedIndex:0}},onInput(t){let e=(t.buttons||[]).findIndex(n=>n.selected);e===-1&&(e=0),this.state.selectedIndex=e},onButtonClick(t,e){t!==this.state.selectedIndex&&(this.state.selectedIndex=t,this.emit("change",{index:t,value:(this.input.buttons[t]||{}).value,originalEvent:e}))}},y="LNSA3gQY",c=E(y),Q=c;var N=["class","buttons","size"],H=["class","icon"],L=["large"];z.exports.r(y,()=>c);const W=M;c._=A(function(t,e,n,o,f,q){var l=L.includes(t.size)?t.size:null;e.be("div",_({class:k(["segmented-buttons",l&&"segmented-buttons--".concat(l),t.class])},x(t,N)),"0",o,null,4),e.be("ul",null,"1",o,null,0);{let s=0;for(const i of t.buttons||[]){let m=s++;const a="[".concat(m,"]");e.be("li",null,"2"+a,o,null,0),e.be("button",_({class:k(["segmented-buttons__button",i.class]),"aria-current":f.selectedIndex===m&&"true"},x(i,H)),"3"+a,o,null,4,{onclick:n.d("click","onButtonClick",!1,[m])}),i.icon?(e.be("span",{class:"segmented-buttons__button-cell"},"4"+a,o,null,1),p(e,i.icon,null,null,null,null,n,"5"+a),e.be("span",null,"6"+a,o,null,0),p(e,i,null,null,null,null,n,"7"+a),e.ee(),e.ee()):p(e,i.renderBody,null,null,null,null,n,"8"+a),e.ee(),e.ee()}}e.ee(),e.ee()},{t:y},W);c.Component=$(W,c._);const X=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-segmented-buttons
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.1.0
    </span>
</h1>

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/buttons-ebay-segmented-buttons)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/buttons-ebay-segmented-buttons)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-segmented-buttons/examples)
`,h="NQWoVXOi",u=E(h);z.exports.r(h,()=>u);const w={};u._=A(function(t,e,n,o,f,q){const l=[];l.push({icon:{renderBody:s=>{g(j,{},s,n,"1")},[Symbol.iterator]:d},renderBody:s=>{s.t("Desktop",o)},[Symbol.iterator]:d}),l.push({icon:{renderBody:s=>{g(D,{},s,n,"2")},[Symbol.iterator]:d},renderBody:s=>{s.t("Mobile",o)},[Symbol.iterator]:d}),g(Q,{buttons:l},e,n,"0",[["change","emit",!1,["change"]]])},{t:h,i:!0},w);u.Component=$(w,u._);const Y=`<ebay-segmented-buttons on-change("emit", "change")>
    <@button>
        <@icon>
            <ebay-full-view-24-icon/>
        </@icon>
        Desktop
    </@button>
    <@button>
        <@icon>
            <ebay-mobile-24-icon/>
        </@icon>
        Mobile
    </@button>
</ebay-segmented-buttons>
`,F=t=>({input:R(t)}),ae={title:"buttons/ebay-segmented-buttons",component:Q,parameters:{docs:{description:{component:X}}},argTypes:{buttons:{description:"Each button in the segmented button",name:"@buttons",table:{category:"@Attribute Tags"}},selected:{description:"If true, this will be the selected button",table:{category:"@button attribute"}},size:{options:["large","regular"],description:"",table:{defaultValue:{summary:"none"}},type:{category:"Options"}},icon:{description:"The icon to show before the text",name:"@icon",table:{category:"@button attribute"}},onChange:{action:"on-change",description:"Triggered on change",table:{category:"Events",defaultValue:{summary:"{ originalEvent, index, value }"}}},spread:{control:{type:"object"},description:"Additional attributes being passed to component",table:{category:"Other"}}}},r=F.bind({});r.args={buttons:[{renderBody:"Q1",value:"quarter1"},{renderBody:"Q2",value:"quarter2"},{renderBody:"Q3",value:"quarter3"},{renderBody:"Q4",value:"quarter4"}]};r.parameters={docs:{source:{code:O("ebay-segmented-buttons",r.args,{buttons:"button"})}}};const b=V(u,Y);var v,B,I;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(I=(B=r.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var T,S,C;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:"buildExtensionTemplate(WithIconsTemplate, WithIconsTemplateCode)",...(C=(S=b.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const re=["Default","WithIcons"];export{r as Default,b as WithIcons,re as __namedExportsOrder,ae as default};
//# sourceMappingURL=segmented-buttons.stories.7436e3b7.js.map
