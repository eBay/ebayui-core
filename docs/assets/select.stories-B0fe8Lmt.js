import{t as be}from"./index-CCz6reEH.js";import{t as v,r as k,b as I,e as w,f as ue,d as B,p as E,c as C}from"./registry-CtNeIPU8.js";/* empty css             */import{s as ge}from"./index-htxwKVWG.js";import{_ as M}from"./of-fallback-C2gEBeKK.js";import{_ as fe}from"./index-DfQ7uvCK.js";import{_ as m}from"./render-tag-mtfFSHEK.js";import{_ as se}from"./const-element-D4l_3TxL.js";import{i as N,r}from"./attr-tag-DphMQldM.js";import{_ as H}from"./index-C241jnEo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-B6qYX52F.js";/* empty css               */import"./index-BL5tj0GS.js";import"./index-DW9U_Ppe.js";import"./dynamic-tag-HMZVE1pc.js";import"./index-DN2d98YU.js";import"./index-CbT4wDAv.js";const he=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;class _e extends Marko.Component{get selectId(){return this.input.id||this.getElId("select")}handleChange(e){const{selectedIndex:n}=e.target,t=this.getEls("option")[n],a=[...this.input.options||[]][n];this.state.selectedIndex=n,this.emit("change",{index:n,selected:[String(a.value)],el:t})}handleFloatingLabelInit(){this.emit("floating-label-init")}onCreate(){this.state={selectedIndex:0}}onInput(e){const{state:n}=this;e.options=e.options||[],n.selectedIndex=Math.max(0,e.options.findIndex(t=>t.selected))}onMount(){this._setupMakeup();const e=this.el.closest("form");if(e){const{selectedIndex:n}=document.getElementById(this.selectId);this.subscribeTo(e).on("reset",()=>{this.handleChange({target:{selectedIndex:n}})})}}onUpdate(){this._setupMakeup()}_setupMakeup(){this.input.floatingLabel&&(this._floatingLabel?(this._floatingLabel.refresh(),this.handleFloatingLabelInit()):document.readyState==="complete"?this.el&&(this._floatingLabel=new ge(this.el),this.handleFloatingLabelInit()):this.subscribeTo(window).once("load",this._setupMakeup.bind(this)))}}const D="SmgD_pOm",s=v(D);var R=["selected","optgroup"];function ye(o){return!!o.optgroup}k.r(D,()=>s);const ae=_e;s._=I(function(o,e,n,t,a,$){const{class:l,style:y,disabled:x,borderless:pe,options:ce,floatingLabel:L,isLarge:U,...de}=o,W=[...ce||[]];var z=W[a.selectedIndex],S=[],O={},A=t.selectId;for(const p of W){var g=p.optgroup;g?O[g]?O[g].options.push(p):S.push(O[g]={optgroup:g,options:[p]}):S.push(p)}const T=L&&"span";T?e.be(T,{class:w(["floating-label",U&&"floating-label--large"])},"0",t,null,1):e.bf("f_0",t),L&&(e.be("label",{for:A,class:w(["floating-label__label",x&&"floating-label__label--disabled"])},"1",t,null,0),e.t(L,t),e.ee()),e.be("span",{class:w(["select",U&&"select--large",pe&&"select--borderless",l]),style:ue(y)},"2",t,null,1),e.be("select",B(E(de),{disabled:x,id:A}),"3",t,null,4,{onchange:n.d("change","handleChange",!1)});{let p=0;for(const c of M(S)){const me=`[${p++}]`;if(ye(c)){e.be("optgroup",{label:c.optgroup},"4"+me,t,null,0);for(const F of M(c.options))e.be("option",B(E(F,R),{selected:F===z}),"@option[]",t,null,4),e.t(F.text,t),e.ee();e.ee()}else e.be("option",B(E(c,R),{selected:c===z}),"@option[]",t,null,4),e.t(c.text,t),e.ee()}}e.ee(),m(fe,{},e,n,"5"),e.ee(),T?e.ee():e.ef()},{t:D},ae);s.Component=C(ae,s._);const V="zMUaxqwj",_=v(V),xe=se("label",{class:"field__label field__label--start",for:"select"},1).t("Option");k.r(V,()=>_);const le={onCreate(){this.state={selected:null}},handleChange({index:o}){this.state.selected=o}};_._=I(function(o,e,n,t,a,$){e.be("span",{class:"field"},"0",t,null,1),e.n(xe,t),m(s,N(()=>{let l=0;for(const y of M(o.options)){let x=l++;r("options",{value:y.value,text:y.text,selected:x===a.selected})}},{...o,name:"formFieldName",id:"select",options:void 0}),e,n,"2",[["change","handleChange",!1]]),e.ee()},{t:V},le);_.Component=C(le,_._);const j="dWZQF_$c",b=v(j);k.r(j,()=>b);const ie={};b._=I(function(o,e,n,t,a,$){e.be("form",{style:"text-align: center"},"0",t,null,1),e.be("div",null,"1",t,null,0),m(s,N(()=>{r("options",{value:"1",text:"Option 1"}),r("options",{value:"2",text:"Option 2"}),r("options",{value:"3",text:"Option 3"})},{...o,name:"formFieldName",options:void 0}),e,n,"2"),e.ee(),e.be("div",{style:"padding: 1em"},"3",t,null,1),m(H,{type:"reset",renderBody:l=>{l.t("Reset",t)}},e,n,"4"),m(H,{type:"submit",renderBody:l=>{l.t("Submit",t)}},e,n,"5"),e.ee(),e.ee()},{t:j,i:!0},ie);b.Component=C(ie,b._);const G="HINUGYjd",u=v(G),ve=se("label",{class:"field__label field__label--start field__label--disabled",for:"select"},1).t("Option");k.r(G,()=>u);const re={};u._=I(function(o,e,n,t,a,$){e.be("span",{class:"field"},"0",t,null,1),e.n(ve,t),m(s,N(()=>{r("options",{value:"1",text:"Option 1"}),r("options",{value:"2",text:"Option 2"}),r("options",{value:"3",text:"Option 3"})},{...o,name:"formFieldName",id:"select",disabled:!0,options:void 0}),e,n,"2"),e.ee()},{t:G},re);u.Component=C(re,u._);const ke=`class {
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
`,Ie=o=>({input:{...o,renderBody:o.renderBody?e=>{e.html(o.renderBody)}:null}}),He={title:"form input/ebay-select",component:s,parameters:{docs:{description:{component:he}}},argTypes:{floatingLabel:{type:"string",control:{type:"string"},description:"if set, then label will move up and down. Need to have first option to have a nullable value."},borderless:{type:"boolean",control:{type:"boolean"},description:"whether button has borders"},isLarge:{type:"boolean",control:{type:"boolean"},description:"to show large version"},text:{control:{type:"text"},description:"text to use in the option",table:{category:"@option attributes"}},value:{control:{type:"text"},description:"used for the `value` attribute of the native `<option>`",table:{category:"@option attributes"}},selected:{control:{type:"text"},description:"used to determine which option is selected. This should be included in one and only one option.",table:{category:"@option attributes"}},option:{name:"@option",table:{category:"@attribute tags"}},onChange:{action:"on-change",description:"Triggered on option selected",table:{category:"Events",defaultValue:{summary:"{ el, index, selected }"}}}}},i=Ie.bind({});i.args={floatingLabel:"Option",options:[{text:"Select an option",value:""},{text:"option 1",value:"option 1"},{text:"option 2",value:"option 2"},{text:"option 3",value:"option 3"}]};i.parameters={docs:{source:{code:be("ebay-select",i.args,{options:"option"})}}};const d=o=>({input:o,component:_});d.parameters={docs:{source:{code:ke}}};d.args={options:[{text:"Select an option",value:""},{text:"option 1",value:"option 1"},{text:"option 2",value:"option 2"},{text:"option 3",value:"option 3"}]};const f=o=>({input:o,component:u});f.parameters={docs:{source:{code:u}}};const h=o=>({input:o,component:b});h.parameters={docs:{source:{code:b}}};var q,Q,Y;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(Y=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,J,K;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`args => ({
  input: args,
  component: WithLabelTemplate
})`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var P,X,ee;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
  input: args,
  component: DisabledTemplate
})`,...(ee=(X=f.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var te,oe,ne;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`args => ({
  input: args,
  component: InFormTemplate
})`,...(ne=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};const Re=["Floating","ExternalLabel","Disabled","InForm"];export{f as Disabled,d as ExternalLabel,i as Floating,h as InForm,Re as __namedExportsOrder,He as default};
