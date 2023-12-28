import{t as me}from"./index-iqhZMf16.js";import{t as y,r as x,b as v,g as T,h as be,f as w,p as B,d as k}from"./registry-BhN9Jjhp.js";/* empty css             */import{_ as ue}from"./index-oGO7Hbb2.js";import{_ as c}from"./render-tag-_0PNNh6Y.js";import{s as ge}from"./index-4ijq5S5t.js";import{_ as te}from"./v-element-Oz1uh6KN.js";import{_ as n}from"./self-iterator-6yU_KG2T.js";import{_ as G}from"./index-xPkSph_B.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";import"./index-gdhiSckb.js";/* empty css               */import"./index-_setUQZU.js";import"./index-GNsmVmbS.js";import"./dynamic-tag-hjM4Clfs.js";import"./index-egrddw8m.js";import"./index-whtpiCcX.js";const he=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-select
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

The \`<ebay-select>\` is used to create a native \`<select>\` form element with default browser styling.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/form-input-ebay-select)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/form-input-ebay-select)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-select/examples)
`;class fe extends Marko.Component{get selectId(){return this.input.id||this.getElId("select")}handleChange(e){const{selectedIndex:a}=e.target,t=this.getEls("option")[a],r=[...this.input.options][a];this.state.selectedIndex=a,this.emit("change",{index:a,selected:[String(r.value)],el:t})}handleFloatingLabelInit(){this.emit("floating-label-init")}onCreate(){this.state={selectedIndex:0}}onInput(e){const{state:a}=this;e.options=e.options||[],a.selectedIndex=Math.max(0,e.options.findIndex(t=>t.selected))}onMount(){this._setupMakeup();const e=this.el.closest("form");if(e){const{selectedIndex:a}=document.getElementById(this.selectId);this.subscribeTo(e).on("reset",()=>{this.handleChange({target:{selectedIndex:a}})})}}onUpdate(){this._setupMakeup()}_setupMakeup(){this.input.floatingLabel&&(this._floatingLabel?(this._floatingLabel.refresh(),this.handleFloatingLabelInit()):document.readyState==="complete"?this.el&&(this._floatingLabel=new ge(this.el),this.handleFloatingLabelInit()):this.subscribeTo(window).once("load",this._setupMakeup.bind(this)))}}const E="+Fi0YXtD",f=y(E),I=f;var J=["selected","optgroup"];function _e(o){return!!o.optgroup}x.r(E,()=>f);const oe=fe;f._=v(function(o,e,a,t,r,S){const{class:s,style:le,disabled:re,borderless:ie,options:D,floatingLabel:O,isLarge:W,...pe}=o;var z=[...D][r.selectedIndex],L=[],C={},A=t.selectId;for(const i of D){var b=i.optgroup;b?C[b]?C[b].options.push(i):L.push(C[b]={optgroup:b,options:[i]}):L.push(i)}const $=O&&"span";$?e.be($,{class:T(["floating-label",W&&"floating-label--large"])},"0",t,null,1):e.bf("f_0",t),O&&(e.be("label",{for:A,class:T(["floating-label__label",re&&"floating-label__label--disabled"])},"1",t,null,0),e.t(O,t),e.ee()),e.be("span",{class:T(["select",W&&"select--large",ie&&"select--borderless",s]),style:be(le)},"2",t,null,1),e.be("select",w(B(pe),{id:A}),"3",t,null,4,{onchange:a.d("change","handleChange",!1)});{let i=0;for(const p of L||[]){const ce=`[${i++}]`;if(_e(p)){e.be("optgroup",{label:p.optgroup},"4"+ce,t,null,0);for(const F of p.options||[]){const de="@option[]";e.be("option",w(B(F,J),{selected:F===z}),de,t,null,4),e.t(F.text,t),e.ee()}e.ee()}else e.be("option",w(B(p,J),{selected:p===z}),"@option[]",t,null,4),e.t(p.text,t),e.ee()}}e.ee(),c(ue,{},e,a,"5"),e.ee(),$?e.ee():e.ef()},{t:E},oe);f.Component=k(oe,f._);const M="t2cqJLhX",_=y(M),ye=te("label",{class:"field__label field__label--start",for:"select"},"1",null,1,0).t("Option");x.r(M,()=>_);const se={};_._=v(function(o,e,a,t,r,S){e.be("span",{class:"field"},"0",t,null,1);{e.n(ye,t);const s=[];s.push({value:"1",text:"Option 1",[Symbol.iterator]:n}),s.push({value:"2",text:"Option 2",[Symbol.iterator]:n}),s.push({value:"3",text:"Option 3",[Symbol.iterator]:n}),c(I,{...o,name:"formFieldName",id:"select",options:s},e,a,"2")}e.ee()},{t:M},se);_.Component=k(se,_._);const N="OhaVbIz9",d=y(N);x.r(N,()=>d);const ae={};d._=v(function(o,e,a,t,r,S){e.be("form",{style:"text-align: center"},"0",t,null,1),e.be("div",null,"1",t,null,0);{const s=[];s.push({value:"1",text:"Option 1",[Symbol.iterator]:n}),s.push({value:"2",text:"Option 2",[Symbol.iterator]:n}),s.push({value:"3",text:"Option 3",[Symbol.iterator]:n}),c(I,{...o,name:"formFieldName",options:s},e,a,"2")}e.ee(),e.be("div",{style:"padding: 1em"},"3",t,null,1),c(G,{type:"reset",renderBody:s=>{s.t("Reset",t)}},e,a,"4"),c(G,{type:"submit",renderBody:s=>{s.t("Submit",t)}},e,a,"5"),e.ee(),e.ee()},{t:N,i:!0},ae);d.Component=k(ae,d._);const V="PgmJY5WV",m=y(V),xe=te("label",{class:"field__label field__label--start field__label--disabled",for:"select"},"1",null,1,0).t("Option");x.r(V,()=>m);const ne={};m._=v(function(o,e,a,t,r,S){e.be("span",{class:"field"},"0",t,null,1);{e.n(xe,t);const s=[];s.push({value:"1",text:"Option 1",[Symbol.iterator]:n}),s.push({value:"2",text:"Option 2",[Symbol.iterator]:n}),s.push({value:"3",text:"Option 3",[Symbol.iterator]:n}),c(I,{...o,name:"formFieldName",id:"select",disabled:!0,options:s},e,a,"2")}e.ee()},{t:V},ne);m.Component=k(ne,m._);const ve=`import type { Input as SelectInput } from "<ebay-select>"
export type Input = SelectInput;

class {}

<span class="field">
    <label class="field__label field__label--start" for="select">
        Option
    </label>
    <ebay-select ...input name="formFieldName" id="select">
        <@option value="1" text="Option 1"/>
        <@option value="2" text="Option 2"/>
        <@option value="3" text="Option 3"/>
    </ebay-select>
</span>
`,ke=o=>({input:{...o,renderBody:o.renderBody?e=>{e.html(o.renderBody)}:null}}),Ge={title:"form input/ebay-select",component:I,parameters:{docs:{description:{component:he}}},argTypes:{selected:{control:{type:"number"},description:"allows you to set the selected index option to `selected`"},floatingLabel:{type:"string",control:{type:"string"},description:"if set, then label will move up and down. Need to have first option to have a nullable value."},borderless:{type:"boolean",control:{type:"boolean"},description:"whether button has borders"},isLarge:{type:"boolean",control:{type:"boolean"},description:"to show large version"},text:{control:{type:"text"},description:"text to use in the option",table:{category:"@option attributes"}},value:{control:{type:"text"},description:"used for the `value` attribute of the native `<option>`",table:{category:"@option attributes"}},option:{name:"@option",table:{category:"@attribute tags"}},onChange:{action:"on-change",description:"Triggered on option selected",table:{category:"Events",defaultValue:{summary:"{ el, index, selected }"}}}}},l=ke.bind({});l.args={floatingLabel:"Option",options:[{text:"Select an option",value:""},{text:"option 1",value:"option 1"},{text:"option 2",value:"option 2"},{text:"option 3",value:"option 3"}]};l.parameters={docs:{source:{code:me("ebay-select",l.args,{options:"option"})}}};const u=o=>({input:o,component:_});u.parameters={docs:{source:{code:ve}}};const g=o=>({input:o,component:m});g.parameters={docs:{source:{code:m}}};const h=o=>({input:o,component:d});h.parameters={docs:{source:{code:d}}};var R,X,Y;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(Y=(X=l.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var j,q,H;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
  input: args,
  component: WithLabelTemplate
})`,...(H=(q=u.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var P,U,K;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
  input: args,
  component: DisabledTemplate
})`,...(K=(U=g.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var Q,Z,ee;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`args => ({
  input: args,
  component: InFormTemplate
})`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Je=["Floating","ExternalLabel","Disabled","InForm"];export{g as Disabled,u as ExternalLabel,l as Floating,h as InForm,Je as __namedExportsOrder,Ge as default};
