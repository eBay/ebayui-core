import{t as be}from"./index-CCz6reEH.js";import{t as v,r as k,b as I,f as B,g as ue,e as E,p as M,d as C}from"./registry-B-klnak9.js";/* empty css             */import{s as ge}from"./index-htxwKVWG.js";import{_ as he}from"./index-BrKjH8jr.js";import{_ as d}from"./render-tag-BBOJ9dEX.js";import{_ as se}from"./const-element-Usj7mXQw.js";import{i as N,r as i}from"./attr-tag-DphMQldM.js";import{_ as H}from"./index-BXYtdDDf.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-Bd083XES.js";/* empty css               */import"./index-5NFv2JwF.js";import"./index-DYoePqPO.js";import"./dynamic-tag-DQCvkDdb.js";import"./index-CL0domC_.js";import"./index-blmbJU0z.js";const fe=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;class _e extends Marko.Component{get selectId(){return this.input.id||this.getElId("select")}handleChange(e){const{selectedIndex:n}=e.target,t=this.getEls("option")[n],s=[...this.input.options||[]][n];this.state.selectedIndex=n,this.emit("change",{index:n,selected:[String(s.value)],el:t})}handleFloatingLabelInit(){this.emit("floating-label-init")}onCreate(){this.state={selectedIndex:0}}onInput(e){const{state:n}=this;e.options=e.options||[],n.selectedIndex=Math.max(0,e.options.findIndex(t=>t.selected))}onMount(){this._setupMakeup();const e=this.el.closest("form");if(e){const{selectedIndex:n}=document.getElementById(this.selectId);this.subscribeTo(e).on("reset",()=>{this.handleChange({target:{selectedIndex:n}})})}}onUpdate(){this._setupMakeup()}_setupMakeup(){this.input.floatingLabel&&(this._floatingLabel?(this._floatingLabel.refresh(),this.handleFloatingLabelInit()):document.readyState==="complete"?this.el&&(this._floatingLabel=new ge(this.el),this.handleFloatingLabelInit()):this.subscribeTo(window).once("load",this._setupMakeup.bind(this)))}}const D="SmgD_pOm",f=v(D),L=f;var R=["selected","optgroup"];function ye(o){return!!o.optgroup}k.r(D,()=>f);const ae=_e;f._=I(function(o,e,n,t,s,S){const{class:a,style:y,disabled:x,borderless:pe,options:ce,floatingLabel:$,isLarge:U,...de}=o,W=[...ce||[]];var z=W[s.selectedIndex],O=[],T={},A=t.selectId;for(const r of W){var u=r.optgroup;u?T[u]?T[u].options.push(r):O.push(T[u]={optgroup:u,options:[r]}):O.push(r)}const F=$&&"span";F?e.be(F,{class:B(["floating-label",U&&"floating-label--large"])},"0",t,null,1):e.bf("f_0",t),$&&(e.be("label",{for:A,class:B(["floating-label__label",x&&"floating-label__label--disabled"])},"1",t,null,0),e.t($,t),e.ee()),e.be("span",{class:B(["select",U&&"select--large",pe&&"select--borderless",a]),style:ue(y)},"2",t,null,1),e.be("select",E(M(de),{disabled:x,id:A}),"3",t,null,4,{onchange:n.d("change","handleChange",!1)});{let r=0;for(const p of O||[]){const me=`[${r++}]`;if(ye(p)){e.be("optgroup",{label:p.optgroup},"4"+me,t,null,0);for(const w of p.options||[])e.be("option",E(M(w,R),{selected:w===z}),"@option[]",t,null,4),e.t(w.text,t),e.ee();e.ee()}else e.be("option",E(M(p,R),{selected:p===z}),"@option[]",t,null,4),e.t(p.text,t),e.ee()}}e.ee(),d(he,{},e,n,"5"),e.ee(),F?e.ee():e.ef()},{t:D},ae);f.Component=C(ae,f._);const V="zMUaxqwj",_=v(V),xe=se("label",{class:"field__label field__label--start",for:"select"},1).t("Option");k.r(V,()=>_);const le={onCreate(){this.state={selected:null}},handleChange({index:o}){this.state.selected=o}};_._=I(function(o,e,n,t,s,S){e.be("span",{class:"field"},"0",t,null,1),e.n(xe,t),d(L,N(()=>{let a=0;for(const y of o.options||[]){let x=a++;i("options",{value:y.value,text:y.text,selected:x===s.selected})}},{...o,name:"formFieldName",id:"select",options:void 0}),e,n,"2",[["change","handleChange",!1]]),e.ee()},{t:V},le);_.Component=C(le,_._);const j="dWZQF_$c",m=v(j);k.r(j,()=>m);const ie={};m._=I(function(o,e,n,t,s,S){e.be("form",{style:"text-align: center"},"0",t,null,1),e.be("div",null,"1",t,null,0),d(L,N(()=>{i("options",{value:"1",text:"Option 1"}),i("options",{value:"2",text:"Option 2"}),i("options",{value:"3",text:"Option 3"})},{...o,name:"formFieldName",options:void 0}),e,n,"2"),e.ee(),e.be("div",{style:"padding: 1em"},"3",t,null,1),d(H,{type:"reset",renderBody:a=>{a.t("Reset",t)}},e,n,"4"),d(H,{type:"submit",renderBody:a=>{a.t("Submit",t)}},e,n,"5"),e.ee(),e.ee()},{t:j,i:!0},ie);m.Component=C(ie,m._);const G="HINUGYjd",b=v(G),ve=se("label",{class:"field__label field__label--start field__label--disabled",for:"select"},1).t("Option");k.r(G,()=>b);const re={};b._=I(function(o,e,n,t,s,S){e.be("span",{class:"field"},"0",t,null,1),e.n(ve,t),d(L,N(()=>{i("options",{value:"1",text:"Option 1"}),i("options",{value:"2",text:"Option 2"}),i("options",{value:"3",text:"Option 3"})},{...o,name:"formFieldName",id:"select",disabled:!0,options:void 0}),e,n,"2"),e.ee()},{t:G},re);b.Component=C(re,b._);const ke=`class {
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
`,Ie=o=>({input:{...o,renderBody:o.renderBody?e=>{e.html(o.renderBody)}:null}}),Ae={title:"form input/ebay-select",component:L,parameters:{docs:{description:{component:fe}}},argTypes:{floatingLabel:{type:"string",control:{type:"string"},description:"if set, then label will move up and down. Need to have first option to have a nullable value."},borderless:{type:"boolean",control:{type:"boolean"},description:"whether button has borders"},isLarge:{type:"boolean",control:{type:"boolean"},description:"to show large version"},text:{control:{type:"text"},description:"text to use in the option",table:{category:"@option attributes"}},value:{control:{type:"text"},description:"used for the `value` attribute of the native `<option>`",table:{category:"@option attributes"}},selected:{control:{type:"text"},description:"used to determine which option is selected. This should be included in one and only one option.",table:{category:"@option attributes"}},option:{name:"@option",table:{category:"@attribute tags"}},onChange:{action:"on-change",description:"Triggered on option selected",table:{category:"Events",defaultValue:{summary:"{ el, index, selected }"}}}}},l=Ie.bind({});l.args={floatingLabel:"Option",options:[{text:"Select an option",value:""},{text:"option 1",value:"option 1"},{text:"option 2",value:"option 2"},{text:"option 3",value:"option 3"}]};l.parameters={docs:{source:{code:be("ebay-select",l.args,{options:"option"})}}};const c=o=>({input:o,component:_});c.parameters={docs:{source:{code:ke}}};c.args={options:[{text:"Select an option",value:""},{text:"option 1",value:"option 1"},{text:"option 2",value:"option 2"},{text:"option 3",value:"option 3"}]};const g=o=>({input:o,component:b});g.parameters={docs:{source:{code:b}}};const h=o=>({input:o,component:m});h.parameters={docs:{source:{code:m}}};var q,Q,Y;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(Y=(Q=l.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,J,K;c.parameters={...c.parameters,docs:{...(Z=c.parameters)==null?void 0:Z.docs,source:{originalSource:`args => ({
  input: args,
  component: WithLabelTemplate
})`,...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var P,X,ee;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
  input: args,
  component: DisabledTemplate
})`,...(ee=(X=g.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var te,oe,ne;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`args => ({
  input: args,
  component: InFormTemplate
})`,...(ne=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};const He=["Floating","ExternalLabel","Disabled","InForm"];export{g as Disabled,c as ExternalLabel,l as Floating,h as InForm,He as __namedExportsOrder,Ae as default};
