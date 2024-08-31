import{t as ue}from"./index-CCz6reEH.js";import{t as v,r as k,b as I,e as B,f as ge,d as E,p as M,c as C}from"./registry-BVpmXZbM.js";/* empty css             */import{s as fe}from"./index-htxwKVWG.js";import{_ as N}from"./of-fallback-C2gEBeKK.js";import{_ as he}from"./index-Chastsgy.js";import{_ as d}from"./render-tag-mtfFSHEK.js";import{_ as ae}from"./const-element-St90kC48.js";import{i as D,r as i}from"./attr-tag-DphMQldM.js";import{_ as R}from"./index-CfzQm45V.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-DNKYtym0.js";/* empty css               */import"./index-BfXlFMQ9.js";import"./index-DZcm_RuM.js";import"./dynamic-tag-CptWGHl0.js";import"./index-vn0Os0el.js";import"./index-blmbJU0z.js";const _e=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;class ye extends Marko.Component{get selectId(){return this.input.id||this.getElId("select")}handleChange(e){const{selectedIndex:n}=e.target,t=this.getEls("option")[n],s=[...this.input.options||[]][n];this.state.selectedIndex=n,this.emit("change",{index:n,selected:[String(s.value)],el:t})}handleFloatingLabelInit(){this.emit("floating-label-init")}onCreate(){this.state={selectedIndex:0}}onInput(e){const{state:n}=this;e.options=e.options||[],n.selectedIndex=Math.max(0,e.options.findIndex(t=>t.selected))}onMount(){this._setupMakeup();const e=this.el.closest("form");if(e){const{selectedIndex:n}=document.getElementById(this.selectId);this.subscribeTo(e).on("reset",()=>{this.handleChange({target:{selectedIndex:n}})})}}onUpdate(){this._setupMakeup()}_setupMakeup(){this.input.floatingLabel&&(this._floatingLabel?(this._floatingLabel.refresh(),this.handleFloatingLabelInit()):document.readyState==="complete"?this.el&&(this._floatingLabel=new fe(this.el),this.handleFloatingLabelInit()):this.subscribeTo(window).once("load",this._setupMakeup.bind(this)))}}const V="SmgD_pOm",h=v(V),L=h;var q=["selected","optgroup"];function xe(o){return!!o.optgroup}k.r(V,()=>h);const le=ye;h._=I(function(o,e,n,t,s,S){const{class:a,style:y,disabled:x,borderless:ce,options:de,floatingLabel:$,isLarge:W,...me}=o,z=[...de||[]];var A=z[s.selectedIndex],O=[],T={},H=t.selectId;for(const r of z){var u=r.optgroup;u?T[u]?T[u].options.push(r):O.push(T[u]={optgroup:u,options:[r]}):O.push(r)}const F=$&&"span";F?e.be(F,{class:B(["floating-label",W&&"floating-label--large"])},"0",t,null,1):e.bf("f_0",t),$&&(e.be("label",{for:H,class:B(["floating-label__label",x&&"floating-label__label--disabled"])},"1",t,null,0),e.t($,t),e.ee()),e.be("span",{class:B(["select",W&&"select--large",ce&&"select--borderless",a]),style:ge(y)},"2",t,null,1),e.be("select",E(M(me),{disabled:x,id:H}),"3",t,null,4,{onchange:n.d("change","handleChange",!1)});{let r=0;for(const p of N(O)){const be=`[${r++}]`;if(xe(p)){e.be("optgroup",{label:p.optgroup},"4"+be,t,null,0);for(const w of N(p.options))e.be("option",E(M(w,q),{selected:w===A}),"@option[]",t,null,4),e.t(w.text,t),e.ee();e.ee()}else e.be("option",E(M(p,q),{selected:p===A}),"@option[]",t,null,4),e.t(p.text,t),e.ee()}}e.ee(),d(he,{},e,n,"5"),e.ee(),F?e.ee():e.ef()},{t:V},le);h.Component=C(le,h._);const j="zMUaxqwj",_=v(j),ve=ae("label",{class:"field__label field__label--start",for:"select"},1).t("Option");k.r(j,()=>_);const ie={onCreate(){this.state={selected:null}},handleChange({index:o}){this.state.selected=o}};_._=I(function(o,e,n,t,s,S){e.be("span",{class:"field"},"0",t,null,1),e.n(ve,t),d(L,D(()=>{let a=0;for(const y of N(o.options)){let x=a++;i("options",{value:y.value,text:y.text,selected:x===s.selected})}},{...o,name:"formFieldName",id:"select",options:void 0}),e,n,"2",[["change","handleChange",!1]]),e.ee()},{t:j},ie);_.Component=C(ie,_._);const G="dWZQF_$c",m=v(G);k.r(G,()=>m);const re={};m._=I(function(o,e,n,t,s,S){e.be("form",{style:"text-align: center"},"0",t,null,1),e.be("div",null,"1",t,null,0),d(L,D(()=>{i("options",{value:"1",text:"Option 1"}),i("options",{value:"2",text:"Option 2"}),i("options",{value:"3",text:"Option 3"})},{...o,name:"formFieldName",options:void 0}),e,n,"2"),e.ee(),e.be("div",{style:"padding: 1em"},"3",t,null,1),d(R,{type:"reset",renderBody:a=>{a.t("Reset",t)}},e,n,"4"),d(R,{type:"submit",renderBody:a=>{a.t("Submit",t)}},e,n,"5"),e.ee(),e.ee()},{t:G,i:!0},re);m.Component=C(re,m._);const U="HINUGYjd",b=v(U),ke=ae("label",{class:"field__label field__label--start field__label--disabled",for:"select"},1).t("Option");k.r(U,()=>b);const pe={};b._=I(function(o,e,n,t,s,S){e.be("span",{class:"field"},"0",t,null,1),e.n(ke,t),d(L,D(()=>{i("options",{value:"1",text:"Option 1"}),i("options",{value:"2",text:"Option 2"}),i("options",{value:"3",text:"Option 3"})},{...o,name:"formFieldName",id:"select",disabled:!0,options:void 0}),e,n,"2"),e.ee()},{t:U},pe);b.Component=C(pe,b._);const Ie=`class {
    onCreate() {
        this.state = {
            selected: null
        }
    }

    handleChange({ index }) {
        this.state.selected = index;
    }
}

<span class="field">
    <label class="field__label field__label--start" for="select">
        Option
    </label>
    <ebay-select ...input name="formFieldName" id="select" on-change("handleChange")>
        <for|option, i| of=input.options>
            <@option value=option.value text=option.text selected=i === state.selected/>
        </for>
    </ebay-select>
</span>
`,Ce=o=>({input:{...o,renderBody:o.renderBody?e=>{e.html(o.renderBody)}:null}}),Re={title:"form input/ebay-select",component:L,parameters:{docs:{description:{component:_e}}},argTypes:{floatingLabel:{type:"string",control:{type:"string"},description:"if set, then label will move up and down. Need to have first option to have a nullable value."},borderless:{type:"boolean",control:{type:"boolean"},description:"whether button has borders"},isLarge:{type:"boolean",control:{type:"boolean"},description:"to show large version"},text:{control:{type:"text"},description:"text to use in the option",table:{category:"@option attributes"}},value:{control:{type:"text"},description:"used for the `value` attribute of the native `<option>`",table:{category:"@option attributes"}},selected:{control:{type:"text"},description:"used to determine which option is selected. This should be included in one and only one option.",table:{category:"@option attributes"}},option:{name:"@option",table:{category:"@attribute tags"}},onChange:{action:"on-change",description:"Triggered on option selected",table:{category:"Events",defaultValue:{summary:"{ el, index, selected }"}}}}},l=Ce.bind({});l.args={floatingLabel:"Option",options:[{text:"Select an option",value:""},{text:"option 1",value:"option 1"},{text:"option 2",value:"option 2"},{text:"option 3",value:"option 3"}]};l.parameters={docs:{source:{code:ue("ebay-select",l.args,{options:"option"})}}};const c=o=>({input:o,component:_});c.parameters={docs:{source:{code:Ie}}};c.args={options:[{text:"Select an option",value:""},{text:"option 1",value:"option 1"},{text:"option 2",value:"option 2"},{text:"option 3",value:"option 3"}]};const g=o=>({input:o,component:b});g.parameters={docs:{source:{code:b}}};const f=o=>({input:o,component:m});f.parameters={docs:{source:{code:m}}};var Q,Y,Z;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(Z=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var J,K,P;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
  input: args,
  component: WithLabelTemplate
})`,...(P=(K=c.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var X,ee,te;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`args => ({
  input: args,
  component: DisabledTemplate
})`,...(te=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,ne,se;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`args => ({
  input: args,
  component: InFormTemplate
})`,...(se=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};const qe=["Floating","ExternalLabel","Disabled","InForm"];export{g as Disabled,c as ExternalLabel,l as Floating,f as InForm,qe as __namedExportsOrder,Re as default};
