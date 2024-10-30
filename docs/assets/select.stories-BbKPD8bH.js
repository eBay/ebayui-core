import{t as M}from"./index-CCz6reEH.js";import{_ as b}from"./index-BV-wPGJu.js";import{r as g,b as y,c as f,t as h}from"./registry-CyswyZw5.js";import{_ as R}from"./const-element-B9h58Dwq.js";import{i as x,r as s}from"./attr-tag-DphMQldM.js";import{_ as Q}from"./of-fallback-C2gEBeKK.js";import{_ as d}from"./render-tag-CLyPs9qZ.js";import{_ as O}from"./index-CUxP3sFe.js";/* empty css             */import"./index-htxwKVWG.js";import"./index-DcOOfxWY.js";import"./index-Bq4u441m.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";/* empty css               */import"./index-DILp6LbA.js";import"./index-D0VNda02.js";import"./dynamic-tag-CXXozR29.js";import"./index-Dvv9KJ1o.js";import"./index-CbT4wDAv.js";const V=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,v="zMUaxqwj",u=h(v),Y=R("label",{class:"field__label field__label--start",for:"select"},1).t("Option");g.r(v,()=>u);const U={onCreate(){this.state={selected:null}},handleChange({index:t}){this.state.selected=t}};u._=y(function(t,e,n,o,_,$){e.be("span",{class:"field"},"0",o,null,1),e.n(Y,o),d(b,x(()=>{let p=0;for(const T of Q(t.options)){let H=p++;s("options",{value:T.value,text:T.text,selected:H===_.selected})}},{...t,name:"formFieldName",id:"select",options:void 0}),e,n,"2",[["change","handleChange",!1]]),e.ee()},{t:v},U);u.Component=f(U,u._);const k="dWZQF_$c",i=h(k);g.r(k,()=>i);const q={};i._=y(function(t,e,n,o,_,$){e.be("form",{style:"text-align: center"},"0",o,null,1),e.be("div",null,"1",o,null,0),d(b,x(()=>{s("options",{value:"1",text:"Option 1"}),s("options",{value:"2",text:"Option 2"}),s("options",{value:"3",text:"Option 3"})},{...t,name:"formFieldName",options:void 0}),e,n,"2"),e.ee(),e.be("div",{style:"padding: 1em"},"3",o,null,1),d(O,{type:"reset",renderBody:p=>{p.t("Reset",o)}},e,n,"4"),d(O,{type:"submit",renderBody:p=>{p.t("Submit",o)}},e,n,"5"),e.ee(),e.ee()},{t:k,i:!0},q);i.Component=f(q,i._);const C="HINUGYjd",l=h(C),Z=R("label",{class:"field__label field__label--start field__label--disabled",for:"select"},1).t("Option");g.r(C,()=>l);const G={};l._=y(function(t,e,n,o,_,$){e.be("span",{class:"field"},"0",o,null,1),e.n(Z,o),d(b,x(()=>{s("options",{value:"1",text:"Option 1"}),s("options",{value:"2",text:"Option 2"}),s("options",{value:"3",text:"Option 3"})},{...t,name:"formFieldName",id:"select",disabled:!0,options:void 0}),e,n,"2"),e.ee()},{t:C},G);l.Component=f(G,l._);const A=`class {
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
`,J=t=>({input:{...t,renderBody:t.renderBody?e=>{e.html(t.renderBody)}:null}}),ye={title:"form input/ebay-select",component:b,parameters:{docs:{description:{component:V}}},argTypes:{floatingLabel:{type:"string",control:{type:"string"},description:"if set, then label will move up and down. Need to have first option to have a nullable value."},borderless:{type:"boolean",control:{type:"boolean"},description:"whether button has borders"},isLarge:{type:"boolean",control:{type:"boolean"},description:"to show large version"},text:{control:{type:"text"},description:"text to use in the option",table:{category:"@option attributes"}},value:{control:{type:"text"},description:"used for the `value` attribute of the native `<option>`",table:{category:"@option attributes"}},selected:{control:{type:"text"},description:"used to determine which option is selected. This should be included in one and only one option.",table:{category:"@option attributes"}},option:{name:"@option",table:{category:"@attribute tags"}},onChange:{action:"on-change",description:"Triggered on option selected",table:{category:"Events",defaultValue:{summary:"{ el, index, selected }"}}}}},a=J.bind({});a.args={floatingLabel:"Option",options:[{text:"Select an option",value:""},{text:"option 1",value:"option 1"},{text:"option 2",value:"option 2"},{text:"option 3",value:"option 3"}]};a.parameters={docs:{source:{code:M("ebay-select",a.args,{options:"option"})}}};const r=t=>({input:t,component:u});r.parameters={docs:{source:{code:A}}};r.args={options:[{text:"Select an option",value:""},{text:"option 1",value:"option 1"},{text:"option 2",value:"option 2"},{text:"option 3",value:"option 3"}]};const c=t=>({input:t,component:l});c.parameters={docs:{source:{code:l}}};const m=t=>({input:t,component:i});m.parameters={docs:{source:{code:i}}};var S,w,F;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(F=(w=a.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var B,E,L;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  input: args,
  component: WithLabelTemplate
})`,...(L=(E=r.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var N,D,I;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
  input: args,
  component: DisabledTemplate
})`,...(I=(D=c.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var j,W,z;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
  input: args,
  component: InFormTemplate
})`,...(z=(W=m.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};const fe=["Floating","ExternalLabel","Disabled","InForm"];export{c as Disabled,r as ExternalLabel,a as Floating,m as InForm,fe as __namedExportsOrder,ye as default};
