import{b as z}from"./utils-DWCsNc5l.js";import{t as u,r as f,b as x,e as F,c as y}from"./registry-CyswyZw5.js";import{_ as G}from"./index-C5sGSG7S.js";import{_ as d}from"./render-tag-CLyPs9qZ.js";import{_ as v}from"./of-fallback-C2gEBeKK.js";import{i as _,r as n}from"./attr-tag-DphMQldM.js";import{_ as J}from"./index-B54--0fd.js";import{d as L}from"./index-CbT4wDAv.js";import{_ as B}from"./empty-component-BCB5DEsP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./dynamic-tag-CXXozR29.js";import"./index-Bm8U5LEh.js";import"./index-Bq4u441m.js";/* empty css             *//* empty css                    */import"./index-htxwKVWG.js";import"./index-Dvv9KJ1o.js";import"./index-DcOOfxWY.js";import"./index-BGXtVBud.js";import"./index-DoeQzs2M.js";import"./index-D7GlLQHj.js";import"./index-DbKxOVwg.js";import"./index-CZ_CdPGB.js";const N=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`;class U extends Marko.Component{onCreate(e){this.state={selected:e.selected??[]}}onInput(e){e.selected===null?this.state.selected=[]:e.selected&&(this.state.selected=e.selected)}handleKeydown(e){L(e,()=>{const t=e.target.value;e.preventDefault(),t&&this.selectChip(t)})}selectChip(e){this.state.selected.includes(e)||(this.state.selected=[...this.state.selected,e],this.emit("change",{selected:this.state.selected}))}handleDelete(e){this.state.selected=[...this.state.selected.slice(0,e),...this.state.selected.slice(e+1)],this.emit("change",{selected:this.state.selected})}}const g="nCKHzfPj",i=u(g);f.r(g,()=>i);const K=U;i._=x(function(a,e,t,s,o,O){const{option:H,selected:ee,class:P,fluid:V,error:Y,value:te,disabled:b,a11yDeleteButtonText:M="Remove",...Q}=a,X=[...H||[]].map(l=>l.text);if(e.be("span",{class:F(["chips-combobox",V&&"chips-combobox--fluid",Y&&"chips-combobox--error",P]),"aria-disabled":b&&"true"},"0",s,null,0),o.selected&&o.selected.length){e.be("ul",{class:"chips-combobox__items"},"1",s,null,1);{let l=0;for(const p of v(o.selected)){let w=l++;const T=`[${w}]`;e.be("li",null,"2"+T,s,null,0),d(G,{a11yDeleteButtonText:`${M} ${p}`,disabled:b,renderBody:q=>{q.t(p,s)}},e,t,"3"+T,[["delete","handleDelete",!1,[w]]]),e.ee()}}e.ee()}d(J,_(()=>{for(const l of v(X))(!o.selected||!o.selected.some(p=>p===l))&&n("options",{text:l})},{class:"chips-combobox__combobox",disabled:b,chevronSize:"large",...Q,autocomplete:"list",options:void 0}),e,t,"4",[["keydown","handleKeydown",!1],["option-click","selectChip",!1],["expand","emit",!1,["expand"]],["collapse","emit",!1,["collapse"]]]),e.ee()},{t:g},K);i.Component=y(K,i._);const C="knXzHeYe",m=u(C);f.r(C,()=>B);const R={};m._=x(function(a,e,t,s,o,O){d(i,_(()=>{n("option",{text:"Option 1"}),n("option",{text:"Option 2"}),n("option",{text:"Option 3"})},{placeholder:"Add item",...a,option:void 0}),e,t,"0",[["change","emit",!1,["change"]],["collapse","emit",!1,["collapse"]],["expand","emit",!1,["expand"]]])},{t:C,s:!0},R);m.Component=y(R,m._);const W=`<ebay-chips-combobox
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
`,k="QzChuCYb",h=u(k);f.r(k,()=>B);const j={};h._=x(function(a,e,t,s,o,O){d(i,_(()=>{n("option",{text:"Option 1"}),n("option",{text:"Option 2"}),n("option",{text:"Option 3"})},{placeholder:"Add item",selected:["Option 1","Option 3","Custom Option"],...a,option:void 0}),e,t,"0",[["change","emit",!1,["change"]],["collapse","emit",!1,["collapse"]],["expand","emit",!1,["expand"]]])},{t:k,s:!0},j);h.Component=y(j,h._);const Z=`<ebay-chips-combobox
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
`,ve={title:"form input/ebay-chips-combobox",component:i,parameters:{docs:{description:{component:N}}},argTypes:{disabled:{type:"boolean",control:{type:"boolean"},description:"sets the disabled attribute of the input"},expanded:{control:{type:"boolean"},description:"sets whether the listbox is expanded"},fluid:{control:{type:"boolean"},type:"boolean",description:"If true, combobox will span the entire width of it's container"},error:{control:{type:"boolean"},type:"boolean",description:"sets the error state of the input"},listSelection:{control:{type:"text"},description:"default is `automatic`; available values are `automatic`, `manual`. If set to automatic will automatically fill in the input with the currently highlighted item when using the up/down keys."},a11yDeleteButtonText:{control:{type:"text"},description:"The aria-label for the delete button on each chip."},roledescription:{control:{type:"text"},description:"The role description for accessibility. Default text is set and will be in english. Pass this to override for different locales"},placeholder:{control:{type:"text"},description:"The input placeholder text. This will be the label for the input when no text is entered."},selected:{control:{type:"array"},table:{defaultValue:{summary:"[]"}},description:"A list of selected options. Each item is the string that will be displayed in the selected list of chips. If it matches an item in the dropdown, it won't be shown in dropdown"},options:{name:"@option",description:"Repeatable attribute tag containing the autofill options"},text:{table:{category:"@option attributes"},description:"The text contained in the autofill option"},onChange:{action:"on-change",table:{category:"Events",defaultValue:{summary:"{ selected }"}},description:"fires when the selected chips change"},onCollapse:{action:"on-collapse",table:{category:"Events"},description:" collapsed content"},onExpand:{action:"on-expand",table:{category:"Events"},description:" expanded content"}}},c=z(m,W,{placeholder:"Add item"}),r=z(h,Z,{placeholder:"Add item",selected:["Option 1","Option 3","Custom Option"]});var D,E,S;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultCode, {
  placeholder: "Add item"
})`,...(S=(E=c.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var $,A,I;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`buildExtensionTemplate(SelectedTemplate, SelectedCode, {
  placeholder: "Add item",
  selected: ["Option 1", "Option 3", "Custom Option"]
})`,...(I=(A=r.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};const De=["Default","Selected"];export{c as Default,r as Selected,De as __namedExportsOrder,ve as default};
