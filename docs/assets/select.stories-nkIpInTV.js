import{t as me}from"./index-iqhZMf16.js";import{t as x,r as v,b as k,g as E,h as be,f as M,p as N,d as I}from"./registry-zqrnEiYK.js";/* empty css             */import{_ as ue}from"./index--HiXohkr.js";import{_ as d}from"./render-tag-_0PNNh6Y.js";import{s as he}from"./index-4ijq5S5t.js";import{_ as se}from"./v-element-BABk39ab.js";import{_ as i}from"./self-iterator-6yU_KG2T.js";import{_ as X}from"./index-tjucyUeZ.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";import"./index-dCAZr4YS.js";/* empty css               */import"./index-XUhq6uHT.js";import"./index-q7KQv1ry.js";import"./dynamic-tag-4Gch17f1.js";import"./index-i1smj9EI.js";import"./index-XjwwBzg5.js";const ge=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;class fe extends Marko.Component{get selectId(){return this.input.id||this.getElId("select")}handleChange(e){const{selectedIndex:n}=e.target,t=this.getEls("option")[n],a=[...this.input.options||[]][n];this.state.selectedIndex=n,this.emit("change",{index:n,selected:[String(a.value)],el:t})}handleFloatingLabelInit(){this.emit("floating-label-init")}onCreate(){this.state={selectedIndex:0}}onInput(e){const{state:n}=this;e.options=e.options||[],n.selectedIndex=Math.max(0,e.options.findIndex(t=>t.selected))}onMount(){this._setupMakeup();const e=this.el.closest("form");if(e){const{selectedIndex:n}=document.getElementById(this.selectId);this.subscribeTo(e).on("reset",()=>{this.handleChange({target:{selectedIndex:n}})})}}onUpdate(){this._setupMakeup()}_setupMakeup(){this.input.floatingLabel&&(this._floatingLabel?(this._floatingLabel.refresh(),this.handleFloatingLabelInit()):document.readyState==="complete"?this.el&&(this._floatingLabel=new he(this.el),this.handleFloatingLabelInit()):this.subscribeTo(window).once("load",this._setupMakeup.bind(this)))}}const V="+Fi0YXtD",_=x(V),S=_;var Y=["selected","optgroup"];function _e(o){return!!o.optgroup}v.r(V,()=>_);const ae=fe;_._=k(function(o,e,n,t,a,C){const{class:s,style:L,disabled:u,borderless:O,options:pe,floatingLabel:T,isLarge:A,...ce}=o,G=[...pe||[]];var J=G[a.selectedIndex],$=[],F={},R=t.selectId;for(const r of G){var h=r.optgroup;h?F[h]?F[h].options.push(r):$.push(F[h]={optgroup:h,options:[r]}):$.push(r)}const w=T&&"span";w?e.be(w,{class:E(["floating-label",A&&"floating-label--large"])},"0",t,null,1):e.bf("f_0",t),T&&(e.be("label",{for:R,class:E(["floating-label__label",u&&"floating-label__label--disabled"])},"1",t,null,0),e.t(T,t),e.ee()),e.be("span",{class:E(["select",A&&"select--large",O&&"select--borderless",s]),style:be(L)},"2",t,null,1),e.be("select",M(N(ce),{disabled:u,id:R}),"3",t,null,4,{onchange:n.d("change","handleChange",!1)});{let r=0;for(const p of $||[]){const de=`[${r++}]`;if(_e(p)){e.be("optgroup",{label:p.optgroup},"4"+de,t,null,0);for(const B of p.options||[])e.be("option",M(N(B,Y),{selected:B===J}),"@option[]",t,null,4),e.t(B.text,t),e.ee();e.ee()}else e.be("option",M(N(p,Y),{selected:p===J}),"@option[]",t,null,4),e.t(p.text,t),e.ee()}}e.ee(),d(ue,{},e,n,"5"),e.ee(),w?e.ee():e.ef()},{t:V},ae);_.Component=I(ae,_._);const D="t2cqJLhX",y=x(D),ye=se("label",{class:"field__label field__label--start",for:"select"},"1",null,1,0).t("Option");v.r(D,()=>y);const le={onCreate(){this.state={selected:null}},handleChange({index:o}){this.state.selected=o}};y._=k(function(o,e,n,t,a,C){e.be("span",{class:"field"},"0",t,null,1);{e.n(ye,t);const s=[];let L=0;for(const u of o.options||[]){let O=L++;s.push({value:u.value,text:u.text,selected:O===a.selected,[Symbol.iterator]:i})}d(S,{...o,name:"formFieldName",id:"select",options:s},e,n,"2",[["change","handleChange",!1]])}e.ee()},{t:D},le);y.Component=I(le,y._);const W="OhaVbIz9",m=x(W);v.r(W,()=>m);const ie={};m._=k(function(o,e,n,t,a,C){e.be("form",{style:"text-align: center"},"0",t,null,1),e.be("div",null,"1",t,null,0);{const s=[];s.push({value:"1",text:"Option 1",[Symbol.iterator]:i}),s.push({value:"2",text:"Option 2",[Symbol.iterator]:i}),s.push({value:"3",text:"Option 3",[Symbol.iterator]:i}),d(S,{...o,name:"formFieldName",options:s},e,n,"2")}e.ee(),e.be("div",{style:"padding: 1em"},"3",t,null,1),d(X,{type:"reset",renderBody:s=>{s.t("Reset",t)}},e,n,"4"),d(X,{type:"submit",renderBody:s=>{s.t("Submit",t)}},e,n,"5"),e.ee(),e.ee()},{t:W,i:!0},ie);m.Component=I(ie,m._);const z="PgmJY5WV",b=x(z),xe=se("label",{class:"field__label field__label--start field__label--disabled",for:"select"},"1",null,1,0).t("Option");v.r(z,()=>b);const re={};b._=k(function(o,e,n,t,a,C){e.be("span",{class:"field"},"0",t,null,1);{e.n(xe,t);const s=[];s.push({value:"1",text:"Option 1",[Symbol.iterator]:i}),s.push({value:"2",text:"Option 2",[Symbol.iterator]:i}),s.push({value:"3",text:"Option 3",[Symbol.iterator]:i}),d(S,{...o,name:"formFieldName",id:"select",disabled:!0,options:s},e,n,"2")}e.ee()},{t:z},re);b.Component=I(re,b._);const ve=`class {
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
`,ke=o=>({input:{...o,renderBody:o.renderBody?e=>{e.html(o.renderBody)}:null}}),Je={title:"form input/ebay-select",component:S,parameters:{docs:{description:{component:ge}}},argTypes:{floatingLabel:{type:"string",control:{type:"string"},description:"if set, then label will move up and down. Need to have first option to have a nullable value."},borderless:{type:"boolean",control:{type:"boolean"},description:"whether button has borders"},isLarge:{type:"boolean",control:{type:"boolean"},description:"to show large version"},text:{control:{type:"text"},description:"text to use in the option",table:{category:"@option attributes"}},value:{control:{type:"text"},description:"used for the `value` attribute of the native `<option>`",table:{category:"@option attributes"}},selected:{control:{type:"text"},description:"used to determine which option is selected. This should be included in one and only one option.",table:{category:"@option attributes"}},option:{name:"@option",table:{category:"@attribute tags"}},onChange:{action:"on-change",description:"Triggered on option selected",table:{category:"Events",defaultValue:{summary:"{ el, index, selected }"}}}}},l=ke.bind({});l.args={floatingLabel:"Option",options:[{text:"Select an option",value:""},{text:"option 1",value:"option 1"},{text:"option 2",value:"option 2"},{text:"option 3",value:"option 3"}]};l.parameters={docs:{source:{code:me("ebay-select",l.args,{options:"option"})}}};const c=o=>({input:o,component:y});c.parameters={docs:{source:{code:ve}}};c.args={options:[{text:"Select an option",value:""},{text:"option 1",value:"option 1"},{text:"option 2",value:"option 2"},{text:"option 3",value:"option 3"}]};const g=o=>({input:o,component:b});g.parameters={docs:{source:{code:b}}};const f=o=>({input:o,component:m});f.parameters={docs:{source:{code:m}}};var j,q,H;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
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
})`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,oe,ne;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`args => ({
  input: args,
  component: InFormTemplate
})`,...(ne=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};const Re=["Floating","ExternalLabel","Disabled","InForm"];export{g as Disabled,c as ExternalLabel,l as Floating,f as InForm,Re as __namedExportsOrder,Je as default};
