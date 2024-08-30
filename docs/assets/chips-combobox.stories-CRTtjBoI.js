import{b as B}from"./utils-DWCsNc5l.js";import{t as u,r as x,b as f,e as G,c as y}from"./registry-BVpmXZbM.js";import{_ as J}from"./index-D-l_gSsJ.js";import{_ as d}from"./render-tag-mtfFSHEK.js";import{_ as D}from"./of-fallback-C2gEBeKK.js";import{i as _,r as n}from"./attr-tag-DphMQldM.js";import{C as L}from"./index-CnYxF5Gb.js";import{c as N}from"./index-blmbJU0z.js";import{_ as K}from"./empty-component-BCB5DEsP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./dynamic-tag-CptWGHl0.js";import"./index-BqG7rGCR.js";import"./index-DNKYtym0.js";/* empty css             *//* empty css                    */import"./index-htxwKVWG.js";import"./index-vn0Os0el.js";import"./index-Chastsgy.js";import"./index-BGXtVBud.js";import"./index-DoeQzs2M.js";import"./index-D7GlLQHj.js";import"./index-D7B88Psz.js";import"./index--35j0Bzx.js";const U=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`;let W=class extends Marko.Component{onCreate(e){this.state={selected:e.selected??[]}}onInput(e){e.selected===null?this.state.selected=[]:e.selected&&(this.state.selected=e.selected)}handleKeydown(e){N(e,()=>{const t=e.target.value;e.preventDefault(),t&&this.selectChip(t)})}selectChip(e){this.state.selected.includes(e)||(this.state.selected=[...this.state.selected,e],this.emit("change",{selected:this.state.selected}))}handleDelete(e){this.state.selected=[...this.state.selected.slice(0,e),...this.state.selected.slice(e+1)],this.emit("change",{selected:this.state.selected})}};const g="nCKHzfPj",l=u(g),C=l;x.r(g,()=>l);const R=W;l._=f(function(i,e,t,a,o,k){const{option:P,selected:te,class:V,fluid:Y,error:M,value:oe,disabled:h,a11yDeleteButtonText:Q="Remove",...X}=i,q=[...P||[]].map(s=>s.text);if(e.be("span",{class:G(["chips-combobox",Y&&"chips-combobox--fluid",M&&"chips-combobox--error",V]),"aria-disabled":h&&"true"},"0",a,null,0),o.selected&&o.selected.length){e.be("ul",{class:"chips-combobox__items"},"1",a,null,1);{let s=0;for(const p of D(o.selected)){let T=s++;const v=`[${T}]`;e.be("li",null,"2"+v,a,null,0),d(J,{a11yDeleteButtonText:`${Q} ${p}`,disabled:h,renderBody:F=>{F.t(p,a)}},e,t,"3"+v,[["delete","handleDelete",!1,[T]]]),e.ee()}}e.ee()}d(L,_(()=>{for(const s of D(q))(!o.selected||!o.selected.some(p=>p===s))&&n("options",{text:s})},{class:"chips-combobox__combobox",disabled:h,chevronSize:"large",...X,autocomplete:"list",options:void 0}),e,t,"4",[["keydown","handleKeydown",!1],["option-click","selectChip",!1],["expand","emit",!1,["expand"]],["collapse","emit",!1,["collapse"]]]),e.ee()},{t:g},R);l.Component=y(R,l._);const O="knXzHeYe",m=u(O);x.r(O,()=>K);const j={};m._=f(function(i,e,t,a,o,k){d(C,_(()=>{n("option",{text:"Option 1"}),n("option",{text:"Option 2"}),n("option",{text:"Option 3"})},{placeholder:"Add item",...i,option:void 0}),e,t,"0",[["change","emit",!1,["change"]],["collapse","emit",!1,["collapse"]],["expand","emit",!1,["expand"]]])},{t:O,s:!0},j);m.Component=y(j,m._);const Z=`<ebay-chips-combobox
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
`,w="QzChuCYb",b=u(w);x.r(w,()=>K);const H={};b._=f(function(i,e,t,a,o,k){d(C,_(()=>{n("option",{text:"Option 1"}),n("option",{text:"Option 2"}),n("option",{text:"Option 3"})},{placeholder:"Add item",selected:["Option 1","Option 3","Custom Option"],...i,option:void 0}),e,t,"0",[["change","emit",!1,["change"]],["collapse","emit",!1,["collapse"]],["expand","emit",!1,["expand"]]])},{t:w,s:!0},H);b.Component=y(H,b._);const ee=`<ebay-chips-combobox
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
`,Ee={title:"form input/ebay-chips-combobox",component:C,parameters:{docs:{description:{component:U}}},argTypes:{disabled:{type:"boolean",control:{type:"boolean"},description:"sets the disabled attribute of the input"},expanded:{control:{type:"boolean"},description:"sets whether the listbox is expanded"},fluid:{control:{type:"boolean"},type:"boolean",description:"If true, combobox will span the entire width of it's container"},error:{control:{type:"boolean"},type:"boolean",description:"sets the error state of the input"},listSelection:{control:{type:"text"},description:"default is `automatic`; available values are `automatic`, `manual`. If set to automatic will automatically fill in the input with the currently highlighted item when using the up/down keys."},a11yDeleteButtonText:{control:{type:"text"},description:"The aria-label for the delete button on each chip."},roledescription:{control:{type:"text"},description:"The role description for accessibility. Default text is set and will be in english. Pass this to override for different locales"},placeholder:{control:{type:"text"},description:"The input placeholder text. This will be the label for the input when no text is entered."},selected:{control:{type:"array"},table:{defaultValue:{summary:"[]"}},description:"A list of selected options. Each item is the string that will be displayed in the selected list of chips. If it matches an item in the dropdown, it won't be shown in dropdown"},options:{name:"@option",description:"Repeatable attribute tag containing the autofill options"},text:{table:{category:"@option attributes"},description:"The text contained in the autofill option"},onChange:{action:"on-change",table:{category:"Events",defaultValue:{summary:"{ selected }"}},description:"fires when the selected chips change"},onCollapse:{action:"on-collapse",table:{category:"Events"},description:" collapsed content"},onExpand:{action:"on-expand",table:{category:"Events"},description:" expanded content"}}},c=B(m,Z,{placeholder:"Add item"}),r=B(b,ee,{placeholder:"Add item",selected:["Option 1","Option 3","Custom Option"]});var E,S,$;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultCode, {
  placeholder: "Add item"
})`,...($=(S=c.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var A,I,z;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`buildExtensionTemplate(SelectedTemplate, SelectedCode, {
  placeholder: "Add item",
  selected: ["Option 1", "Option 3", "Custom Option"]
})`,...(z=(I=r.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};const Se=["Default","Selected"];export{c as Default,r as Selected,Se as __namedExportsOrder,Ee as default};
