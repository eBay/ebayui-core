import{b as B}from"./utils-DWCsNc5l.js";import{t as u,r as x,b as f,f as Y,d as y}from"./registry-ZV7By7ZP.js";import{_ as q}from"./index-BsF3ZHHx.js";import{_ as b}from"./render-tag-Buaq4gMc.js";import{i as _,r as n}from"./attr-tag-DphMQldM.js";import{C as G}from"./index-Bp9OPuSs.js";import{c as L}from"./index-blmbJU0z.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./dynamic-tag-Dub0dLVC.js";import"./index-BxXB-KO7.js";import"./index-Z5IdgrQn.js";/* empty css             *//* empty css                    *//* empty css                       */import"./index-Bp_jZoBr.js";import"./index-Bk4Rdzof.js";import"./index-BUA-308i.js";import"./index-Ku187Omj.js";import"./index-D7GlLQHj.js";import"./index-DvIcBlTc.js";import"./index-D7B88Psz.js";import"./index--35j0Bzx.js";const N=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-combobox
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v2.0.0
    </span>
</h1>

The \`<ebay-combobox>\` is a combination of a text \`<input>\`, and a listbox (\`aria-role="listbox"\`). It supports both written text by the user, as well as text selected from the listbox options.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/form-input-ebay-combobox)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/form-input-ebay-combobox)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-combobox/examples)
`;let Q=class extends Marko.Component{onCreate(e){this.state={selected:e.selected??[]}}onInput(e){e.selected===null?this.state.selected=[]:e.selected&&(this.state.selected=e.selected)}handleKeydown(e){L(e,()=>{const t=e.target.value;e.preventDefault(),t&&this.selectChip(t)})}selectChip(e){this.state.selected.includes(e)||(this.state.selected=[...this.state.selected,e],this.emit("change",{selected:this.state.selected}))}handleDelete(e){this.state.selected=[...this.state.selected.slice(0,e),...this.state.selected.slice(e+1)],this.emit("change",{selected:this.state.selected})}};const g="vi9tlnTe",l=u(g),C=l;x.r(g,()=>l);const K=Q;l._=f(function(i,e,t,a,o,k){const{option:j,selected:Z,class:z,fluid:H,error:P,value:ee,disabled:h,a11yDeleteButton:F="Remove",...J}=i,M=[...j||[]].map(s=>s.text);if(e.be("span",{class:Y(["chips-combobox",H&&"chips-combobox--fluid",P&&"chips-combobox--error",z]),"aria-disabled":h&&"true"},"0",a,null,0),o.selected&&o.selected.length){e.be("ul",{class:"chips-combobox__items"},"1",a,null,1);{let s=0;for(const r of o.selected||[]){let v=s++;const T=`[${v}]`;e.be("li",null,"2"+T,a,null,0),b(q,{a11yDeleteButton:`${F} ${r}`,disabled:h,renderBody:U=>{U.t(r,a)}},e,t,"3"+T,[["delete","handleDelete",!1,[v]]]),e.ee()}}e.ee()}b(G,_(()=>{for(const s of M||[])(!o.selected||!o.selected.some(r=>r===s))&&n("options",{text:s})},{class:"chips-combobox__combobox",disabled:h,chevronSize:"large",...J,autocomplete:"list",options:void 0}),e,t,"4",[["keydown","handleKeydown",!1],["option-click","selectChip",!1],["expand","emit",!1,["expand"]],["collapse","emit",!1,["collapse"]]]),e.ee()},{t:g},K);l.Component=y(K,l._);const O="YAHa6PVF",p=u(O);x.r(O,()=>p);const R={};p._=f(function(i,e,t,a,o,k){b(C,_(()=>{n("option",{text:"Option 1"}),n("option",{text:"Option 2"}),n("option",{text:"Option 3"})},{placeholder:"Add item",...i,option:void 0}),e,t,"0",[["change","emit",!1,["change"]],["collapse","emit",!1,["collapse"]],["expand","emit",!1,["expand"]]])},{t:O,i:!0},R);p.Component=y(R,p._);const W=`<ebay-chips-combobox
    placeholder="Add item"
    ...input
    onChange("emit", "change")
    onCollapse("emit", "collapse")
    onExpand("emit", "expand")
>
    <@option text="Option 1"/>
    <@option text="Option 2"/>
    <@option text="Option 3"/>
</ebay-chips-combobox>
`,w="JbbUbjyH",c=u(w);x.r(w,()=>c);const V={};c._=f(function(i,e,t,a,o,k){b(C,_(()=>{n("option",{text:"Option 1"}),n("option",{text:"Option 2"}),n("option",{text:"Option 3"})},{placeholder:"Add item",selected:["Option 1","Option 3","Custom Option"],...i,option:void 0}),e,t,"0",[["change","emit",!1,["change"]],["collapse","emit",!1,["collapse"]],["expand","emit",!1,["expand"]]])},{t:w,i:!0},V);c.Component=y(V,c._);const X=`<ebay-chips-combobox
    placeholder="Add item"
    selected=["Option 1", "Option 3", "Custom Option"]
    ...input
    onChange("emit", "change")
    onCollapse("emit", "collapse")
    onExpand("emit", "expand")
>
    <@option text="Option 1"/>
    <@option text="Option 2"/>
    <@option text="Option 3"/>
</ebay-chips-combobox>
`,ve={title:"form input/ebay-chips-combobox",component:C,parameters:{docs:{description:{component:N}}},argTypes:{disabled:{type:"boolean",control:{type:"boolean"},description:"sets the disabled attribute of the input"},expanded:{control:{type:"boolean"},description:"sets whether the listbox is expanded"},fluid:{control:{type:"boolean"},type:"boolean",description:"If true, combobox will span the entire width of it's container"},error:{control:{type:"boolean"},type:"boolean",description:"sets the error state of the input"},listSelection:{control:{type:"text"},description:"default is `automatic`; available values are `automatic`, `manual`. If set to automatic will automatically fill in the input with the currently highlighted item when using the up/down keys."},a11yDeleteButton:{control:{type:"text"},description:"The aria-label for the delete button on each chip."},roledescription:{control:{type:"text"},description:"The role description for accessibility. Default text is set and will be in english. Pass this to override for different locales"},placeholder:{control:{type:"text"},description:"The input placeholder text. This will be the label for the input when no text is entered."},selected:{control:{type:"array"},table:{defaultValue:{summary:"[]"}},description:"A list of selected options. Each item is the string that will be displayed in the selected list of chips. If it matches an item in the dropdown, it won't be shown in dropdown"},options:{name:"@option",description:"Repeatable attribute tag containing the autofill options"},text:{table:{category:"@option attributes"},description:"The text contained in the autofill option"},onChange:{action:"on-change",table:{category:"Events",defaultValue:{summary:"{ selected }"}},description:"fires when the selected chips change"},onCollapse:{action:"on-collapse",table:{category:"Events"},description:" collapsed content"},onExpand:{action:"on-expand",table:{category:"Events"},description:" expanded content"}}},d=B(p,W,{placeholder:"Add item"}),m=B(c,X,{placeholder:"Add item",selected:["Option 1","Option 3","Custom Option"]});var D,E,S;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultCode, {
  placeholder: "Add item"
})`,...(S=(E=d.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var $,A,I;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`buildExtensionTemplate(SelectedTemplate, SelectedCode, {
  placeholder: "Add item",
  selected: ["Option 1", "Option 3", "Custom Option"]
})`,...(I=(A=m.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};const Te=["Default","Selected"];export{d as Default,m as Selected,Te as __namedExportsOrder,ve as default};
