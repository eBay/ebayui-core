import{t as N}from"./index-CCz6reEH.js";import{b as k,a as F}from"./utils-DWCsNc5l.js";import{_ as u}from"./index-CIkSQ6Pn.js";import{r as C,b as S,d as D,t as B}from"./registry-B-klnak9.js";import{i as r,r as i,a as m}from"./attr-tag-DphMQldM.js";import{_ as b}from"./render-tag-BBOJ9dEX.js";import{_ as V}from"./empty-component-BCB5DEsP.js";import{_ as R}from"./index-DeGNfXVI.js";import{_ as z}from"./const-element-Usj7mXQw.js";/* empty css               */import"./dynamic-tag-DQCvkDdb.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CyYHw8Hd.js";import"./index-dBnCH2W1.js";/* empty css             */import"./index-A6Qp_veO.js";import"./index-D8MXdl3d.js";import"./index-0_D4u4b1.js";import"./index-DoeQzs2M.js";import"./index-D7GlLQHj.js";import"./index-D52eSIAE.js";import"./index-blmbJU0z.js";import"./index-D7B88Psz.js";import"./index--35j0Bzx.js";import"./index-eGtaP7gF.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const M=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-listbox-button
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/buttons-ebay-listbox-button)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/buttons-ebay-listbox-button)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-listbox-button/examples)
`,x="HMhUMbuf",d=B(x);C.r(x,()=>V);const W={};d._=S(function(p,e,n,t,I,L){b(u,r(()=>{i("options",r(()=>{m("description",{renderBody:a=>{a.t("Option 1 info",t)}})},{selected:!0,value:"1",text:"Option 1"})),i("options",r(()=>{m("description",{renderBody:a=>{a.t("Option 2 info",t)}})},{value:"2",text:"Option 2"})),i("options",r(()=>{m("description",{renderBody:a=>{a.t("Option 3 info",t)}})},{value:"3",text:"Option 3"}))},{prefixLabel:"Select",name:"formFieldName",...p,options:void 0}),e,n,"0",[["change","emit",!1,["change"]],["collapse","emit",!1,["collapse"]],["expand","emit",!1,["expand"]]])},{t:x,s:!0},W);d.Component=D(W,d._);const j=`<ebay-listbox-button
    prefix-label="Select"
    name="formFieldName"
    onChange("emit", "change")
    onCollapse("emit", "collapse")
    onExpand("emit", "expand")
    ...input
>
    <@option selected value="1" text="Option 1">
        <@description>Option 1 info</@description>
    </@option>
    <@option value="2" text="Option 2">
        <@description>Option 2 info</@description>
    </@option>
    <@option value="3" text="Option 3">
        <@description>Option 3 info</@description>
    </@option>
</ebay-listbox-button>
`,h="LI$bzoJl",s=B(h),q=z("span",null,1).t("There was an error");C.r(h,()=>s);const $={};s._=S(function(p,e,n,t,I,L){e.be("span",{class:"field"},"0",t,null,1),b(u,r(()=>{i("options",{value:"1",text:"Option 1",selected:!0}),i("options",{value:"2",text:"Option 2"}),i("options",{value:"3",text:"Option 3"})},{name:"formFieldName",hasError:!0,ariaDescribedby:n.elId("listbox-description")}),e,n,"1"),e.be("div",{class:"field__description field__description--attention",id:n.elId("listbox-description")},"2",t,null,1),b(R,{},e,n,"3"),e.n(q,t),e.ee(),e.ee()},{t:h,i:!0},$);s.Component=D($,s._);const H=`<span class="field">
    <ebay-listbox-button name="formFieldName" hasError aria-describedby:scoped="listbox-description">
        <@option value="1" text="Option 1" selected/>
        <@option value="2" text="Option 2"/>
        <@option value="3" text="Option 3"/>
    </ebay-listbox-button>

    <div class="field__description field__description--attention" id:scoped="listbox-description">
        <ebay-attention-filled-16-icon/>
        <span>There was an error</span>
    </div>
</span>
`,J=p=>({input:F(p)}),fe={title:"buttons/ebay-listbox-button",component:u,parameters:{docs:{description:{component:M}}},argTypes:{selected:{description:"allows you to set the selected index option to `selected`"},borderless:{type:"boolean",control:{type:"boolean"},description:"whether button has borders "},fluid:{type:"boolean",control:{type:"boolean"},description:"whether listbox width is 100% "},buttonName:{control:{type:"text"},description:"used for the `name` attribute of the native `<button>` "},truncate:{type:"boolean",control:{type:"boolean"},description:"will truncate the text of the button onto a single line, and adds an ellipsis, when the buttons text overflows"},hasError:{type:"boolean",control:{type:"boolean"},description:"whether listbox is in an error state or not"},collapseOnSelect:{type:"boolean",control:{type:"boolean"},description:"When an option is selected, the dropdown menu collapses into the button"},listSelection:{table:{defaultValue:{summary:"manual"}},description:"If manual then user will need to press enter to select an item using keyboard. Otherwise auto will automatically select as the user presses up/down",options:["manual","auto"],type:"select"},prefixId:{control:{type:"text"},description:"id of an external element to use as the prefix label for the listbox button. Cannot be used with `prefix-label`"},floatingLabel:{control:{type:"text"},description:"The label to add that floats to the top when item is selected. Cannot be used with `prefix-label`"},unselectedText:{control:{type:"text"},description:'The text to be shown when no options are selected. Default is "-". Cannot be used with `floating-label`'},prefixLabel:{control:{type:"text"},description:"The label to add before each selected item on the button. Cannot be used with `prefix-id`"},option:{name:"@option",table:{category:"@attribute tags"}},text:{table:{control:{type:"text"},category:"@option attributes"}},value:{table:{control:{type:"value"},category:"@option attributes"}},variant:{description:"If `form`, changes appearance to match other form-specific dropdown-esque components for visual consistency.",options:["standard","form"],type:"select"},onChange:{action:"on-change",description:"Triggered on item clicked",table:{category:"Events",defaultValue:{summary:"{ el, index, selected, wasClicked }"}}},onCollapse:{action:"on-collapse",description:"Triggered on menu collapse",table:{category:"Events",defaultValue:{summary:""}}},onExpand:{action:"on-expand",description:"Triggered on menu expand",table:{category:"Events",defaultValue:{summary:""}}}}},o=J.bind({});o.args={prefixLabel:"Selected:",options:[{value:"1",text:"Option 1"},{value:"2",text:"Option 2"},{value:"3",text:"Option 3"}]};o.parameters={docs:{source:{code:N("ebay-listbox-button",o.args,{items:"item"})}}};const l=k(d,j),c=k(s,H);var f,y,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var _,w,v;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:"buildExtensionTemplate(WithDescriptionTemplate, WithDescriptionTemplateCode)",...(v=(w=l.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var O,T,E;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:"buildExtensionTemplate(WithErrorTemplate, WithErrorTemplateCode)",...(E=(T=c.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};const ye=["Default","withDescription","withError"];export{o as Default,ye as __namedExportsOrder,fe as default,l as withDescription,c as withError};
