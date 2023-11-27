import{t as O}from"./index-a17a703b.js";import{b as R,a as V}from"./utils-44f5c40b.js";import{t as E,r as z,_ as $,g as f,h as k,p as v,a as A}from"./registry-08dff688.js";import{_ as p}from"./dynamic-tag-bb62150b.js";import{_ as j,a as D}from"./index-1148f6ff.js";import{_ as g}from"./render-tag-73fdbff3.js";import{_ as d}from"./self-iterator-81a0b488.js";import"./_commonjsHelpers-725317a4.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-3f14fa50.js";/* empty css             */const M={onCreate(){this.state={selectedIndex:0}},onInput(t){let e=(t.buttons||[]).findIndex(n=>n.selected);e===-1&&(e=0),this.state.selectedIndex=e},onButtonClick(t,e){t!==this.state.selectedIndex&&(this.state.selectedIndex=t,this.emit("change",{index:t,value:(this.input.buttons[t]||{}).value,originalEvent:e}))}},y="LNSA3gQY",c=E(y),Q=c;var N=["class","buttons","size"],H=["class","icon"],L=["large"];z.r(y,()=>c);const W=M;c._=$(function(t,e,n,o,h,q){var l=L.includes(t.size)?t.size:null;e.be("div",f({class:k(["segmented-buttons",l&&"segmented-buttons--".concat(l),t.class])},v(t,N)),"0",o,null,4),e.be("ul",null,"1",o,null,0);{let s=0;for(const i of t.buttons||[]){let b=s++;const a="[".concat(b,"]");e.be("li",null,"2"+a,o,null,0),e.be("button",f({class:k(["segmented-buttons__button",i.class]),"aria-current":h.selectedIndex===b&&"true"},v(i,H)),"3"+a,o,null,4,{onclick:n.d("click","onButtonClick",!1,[b])}),i.icon?(e.be("span",{class:"segmented-buttons__button-cell"},"4"+a,o,null,1),p(e,i.icon,null,null,null,null,n,"5"+a),e.be("span",null,"6"+a,o,null,0),p(e,i,null,null,null,null,n,"7"+a),e.ee(),e.ee()):p(e,i.renderBody,null,null,null,null,n,"8"+a),e.ee(),e.ee()}}e.ee(),e.ee()},{t:y},W);c.Component=A(W,c._);const X=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`,_="NQWoVXOi",u=E(_);z.r(_,()=>u);const w={};u._=$(function(t,e,n,o,h,q){const l=[];l.push({icon:{renderBody:s=>{g(j,{},s,n,"1")},[Symbol.iterator]:d},renderBody:s=>{s.t("Desktop",o)},[Symbol.iterator]:d}),l.push({icon:{renderBody:s=>{g(D,{},s,n,"2")},[Symbol.iterator]:d},renderBody:s=>{s.t("Mobile",o)},[Symbol.iterator]:d}),g(Q,{buttons:l},e,n,"0",[["change","emit",!1,["change"]]])},{t:_,i:!0},w);u.Component=A(w,u._);const Y=`<ebay-segmented-buttons on-change("emit", "change")>
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
`,F=t=>({input:V(t)}),ae={title:"buttons/ebay-segmented-buttons",component:Q,parameters:{docs:{description:{component:X}}},argTypes:{buttons:{description:"Each button in the segmented button",name:"@buttons",table:{category:"@Attribute Tags"}},selected:{description:"If true, this will be the selected button",table:{category:"@button attribute"}},size:{options:["large","regular"],description:"",table:{defaultValue:{summary:"none"}},type:{category:"Options"}},icon:{description:"The icon to show before the text",name:"@icon",table:{category:"@button attribute"}},onChange:{action:"on-change",description:"Triggered on change",table:{category:"Events",defaultValue:{summary:"{ originalEvent, index, value }"}}},spread:{control:{type:"object"},description:"Additional attributes being passed to component",table:{category:"Other"}}}},r=F.bind({});r.args={buttons:[{renderBody:"Q1",value:"quarter1"},{renderBody:"Q2",value:"quarter2"},{renderBody:"Q3",value:"quarter3"},{renderBody:"Q4",value:"quarter4"}]};r.parameters={docs:{source:{code:O("ebay-segmented-buttons",r.args,{buttons:"button"})}}};const m=R(u,Y);var x,B,I;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(I=(B=r.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var S,T,C;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:"buildExtensionTemplate(WithIconsTemplate, WithIconsTemplateCode)",...(C=(T=m.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const re=["Default","WithIcons"];export{r as Default,m as WithIcons,re as __namedExportsOrder,ae as default};
//# sourceMappingURL=segmented-buttons.stories-91ee35d5.js.map
