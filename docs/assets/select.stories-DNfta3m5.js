import{t as be}from"./index-CCz6reEH.js";import{t as v,r as k,b as I,f as B,g as ue,e as E,p as M,d as C}from"./registry-DcejNBCz.js";/* empty css             */import{s as ge}from"./index-DEnJBEnO.js";import{_ as he}from"./index--UCSL-gX.js";import{_ as d}from"./render-tag-BBOJ9dEX.js";import{_ as se}from"./const-element-Bq6J7aqh.js";import{i as N,r as i}from"./attr-tag-DphMQldM.js";import{_ as X}from"./index-Ds0knl6D.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-CMkz4cmR.js";/* empty css               */import"./index-AW2S7xMy.js";import"./index-D4BJokV4.js";import"./dynamic-tag-CH7Ufq3Q.js";import"./index-BfyIUMHf.js";import"./index-blmbJU0z.js";const fe=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;class _e extends Marko.Component{get selectId(){return this.input.id||this.getElId("select")}handleChange(e){const{selectedIndex:n}=e.target,t=this.getEls("option")[n],s=[...this.input.options||[]][n];this.state.selectedIndex=n,this.emit("change",{index:n,selected:[String(s.value)],el:t})}handleFloatingLabelInit(){this.emit("floating-label-init")}onCreate(){this.state={selectedIndex:0}}onInput(e){const{state:n}=this;e.options=e.options||[],n.selectedIndex=Math.max(0,e.options.findIndex(t=>t.selected))}onMount(){this._setupMakeup();const e=this.el.closest("form");if(e){const{selectedIndex:n}=document.getElementById(this.selectId);this.subscribeTo(e).on("reset",()=>{this.handleChange({target:{selectedIndex:n}})})}}onUpdate(){this._setupMakeup()}_setupMakeup(){this.input.floatingLabel&&(this._floatingLabel?(this._floatingLabel.refresh(),this.handleFloatingLabelInit()):document.readyState==="complete"?this.el&&(this._floatingLabel=new ge(this.el),this.handleFloatingLabelInit()):this.subscribeTo(window).once("load",this._setupMakeup.bind(this)))}}const V="+Fi0YXtD",f=v(V),L=f;var Y=["selected","optgroup"];function ye(o){return!!o.optgroup}k.r(V,()=>f);const ae=_e;f._=I(function(o,e,n,t,s,O){const{class:a,style:y,disabled:x,borderless:pe,options:ce,floatingLabel:S,isLarge:A,...de}=o,G=[...ce||[]];var J=G[s.selectedIndex],T=[],$={},R=t.selectId;for(const r of G){var u=r.optgroup;u?$[u]?$[u].options.push(r):T.push($[u]={optgroup:u,options:[r]}):T.push(r)}const F=S&&"span";F?e.be(F,{class:B(["floating-label",A&&"floating-label--large"])},"0",t,null,1):e.bf("f_0",t),S&&(e.be("label",{for:R,class:B(["floating-label__label",x&&"floating-label__label--disabled"])},"1",t,null,0),e.t(S,t),e.ee()),e.be("span",{class:B(["select",A&&"select--large",pe&&"select--borderless",a]),style:ue(y)},"2",t,null,1),e.be("select",E(M(de),{disabled:x,id:R}),"3",t,null,4,{onchange:n.d("change","handleChange",!1)});{let r=0;for(const p of T||[]){const me=`[${r++}]`;if(ye(p)){e.be("optgroup",{label:p.optgroup},"4"+me,t,null,0);for(const w of p.options||[])e.be("option",E(M(w,Y),{selected:w===J}),"@option[]",t,null,4),e.t(w.text,t),e.ee();e.ee()}else e.be("option",E(M(p,Y),{selected:p===J}),"@option[]",t,null,4),e.t(p.text,t),e.ee()}}e.ee(),d(he,{},e,n,"5"),e.ee(),F?e.ee():e.ef()},{t:V},ae);f.Component=C(ae,f._);const D="t2cqJLhX",_=v(D),xe=se("label",{class:"field__label field__label--start",for:"select"},1).t("Option");k.r(D,()=>_);const le={onCreate(){this.state={selected:null}},handleChange({index:o}){this.state.selected=o}};_._=I(function(o,e,n,t,s,O){e.be("span",{class:"field"},"0",t,null,1),e.n(xe,t),d(L,N(()=>{let a=0;for(const y of o.options||[]){let x=a++;i("options",{value:y.value,text:y.text,selected:x===s.selected})}},{...o,name:"formFieldName",id:"select",options:void 0}),e,n,"2",[["change","handleChange",!1]]),e.ee()},{t:D},le);_.Component=C(le,_._);const W="OhaVbIz9",m=v(W);k.r(W,()=>m);const ie={};m._=I(function(o,e,n,t,s,O){e.be("form",{style:"text-align: center"},"0",t,null,1),e.be("div",null,"1",t,null,0),d(L,N(()=>{i("options",{value:"1",text:"Option 1"}),i("options",{value:"2",text:"Option 2"}),i("options",{value:"3",text:"Option 3"})},{...o,name:"formFieldName",options:void 0}),e,n,"2"),e.ee(),e.be("div",{style:"padding: 1em"},"3",t,null,1),d(X,{type:"reset",renderBody:a=>{a.t("Reset",t)}},e,n,"4"),d(X,{type:"submit",renderBody:a=>{a.t("Submit",t)}},e,n,"5"),e.ee(),e.ee()},{t:W,i:!0},ie);m.Component=C(ie,m._);const z="PgmJY5WV",b=v(z),ve=se("label",{class:"field__label field__label--start field__label--disabled",for:"select"},1).t("Option");k.r(z,()=>b);const re={};b._=I(function(o,e,n,t,s,O){e.be("span",{class:"field"},"0",t,null,1),e.n(ve,t),d(L,N(()=>{i("options",{value:"1",text:"Option 1"}),i("options",{value:"2",text:"Option 2"}),i("options",{value:"3",text:"Option 3"})},{...o,name:"formFieldName",id:"select",disabled:!0,options:void 0}),e,n,"2"),e.ee()},{t:z},re);b.Component=C(re,b._);const ke=`class {
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
`,Ie=o=>({input:{...o,renderBody:o.renderBody?e=>{e.html(o.renderBody)}:null}}),Re={title:"form input/ebay-select",component:L,parameters:{docs:{description:{component:fe}}},argTypes:{floatingLabel:{type:"string",control:{type:"string"},description:"if set, then label will move up and down. Need to have first option to have a nullable value."},borderless:{type:"boolean",control:{type:"boolean"},description:"whether button has borders"},isLarge:{type:"boolean",control:{type:"boolean"},description:"to show large version"},text:{control:{type:"text"},description:"text to use in the option",table:{category:"@option attributes"}},value:{control:{type:"text"},description:"used for the `value` attribute of the native `<option>`",table:{category:"@option attributes"}},selected:{control:{type:"text"},description:"used to determine which option is selected. This should be included in one and only one option.",table:{category:"@option attributes"}},option:{name:"@option",table:{category:"@attribute tags"}},onChange:{action:"on-change",description:"Triggered on option selected",table:{category:"Events",defaultValue:{summary:"{ el, index, selected }"}}}}},l=Ie.bind({});l.args={floatingLabel:"Option",options:[{text:"Select an option",value:""},{text:"option 1",value:"option 1"},{text:"option 2",value:"option 2"},{text:"option 3",value:"option 3"}]};l.parameters={docs:{source:{code:be("ebay-select",l.args,{options:"option"})}}};const c=o=>({input:o,component:_});c.parameters={docs:{source:{code:ke}}};c.args={options:[{text:"Select an option",value:""},{text:"option 1",value:"option 1"},{text:"option 2",value:"option 2"},{text:"option 3",value:"option 3"}]};const g=o=>({input:o,component:b});g.parameters={docs:{source:{code:b}}};const h=o=>({input:o,component:m});h.parameters={docs:{source:{code:m}}};var j,q,H;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(H=(q=l.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var P,U,K;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
  input: args,
  component: WithLabelTemplate
})`,...(K=(U=c.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var Q,Z,ee;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`args => ({
  input: args,
  component: DisabledTemplate
})`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,oe,ne;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`args => ({
  input: args,
  component: InFormTemplate
})`,...(ne=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};const Xe=["Floating","ExternalLabel","Disabled","InForm"];export{g as Disabled,c as ExternalLabel,l as Floating,h as InForm,Xe as __namedExportsOrder,Re as default};
