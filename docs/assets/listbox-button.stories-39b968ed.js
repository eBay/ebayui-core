import{t as R}from"./index-a17a703b.js";import{b as V,a as A}from"./utils-44f5c40b.js";import{t as k,r as D,_ as I,g as q,p as H,h as m,a as L}from"./registry-08dff688.js";import{_ as z}from"./index-7cd25606.js";import{_ as f}from"./render-tag-73fdbff3.js";import{_ as i}from"./self-iterator-81a0b488.js";import{C as U}from"./index-24d4d17d.js";import{s as G}from"./index-002669f7.js";import{a as J}from"./index-feffb5f2.js";import"./_commonjsHelpers-725317a4.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-3f14fa50.js";/* empty css             */import"./dynamic-tag-bb62150b.js";import"./index-b642b221.js";import"./preserve-attrs-3aff3526.js";import"./index-d7324991.js";import"./index-124ac9a6.js";import"./index-5f81e013.js";import"./index-ad737ebd.js";import"./index-6cab0bb0.js";const Q=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;const X={handleExpand(){this.getComponent("options").elementScroll(),this.emit("expand")},handleCollapse(){this.getEl("button").focus(),this.emit("collapse")},handleListboxChange(e){this.input.collapseOnSelect&&(this._expander.expanded=!1);const t=e.index;this.state.selectedIndex=t,this.emit("change",e)},handleListboxEscape(){this._expander.expanded=!1},onCreate(){this.state={selectedIndex:-1}},onInput(e){const{state:t}=this;e.options=e.options||[],t.selectedIndex=Math.max(-1,e.options.findIndex(n=>n.selected)),e.collapseOnSelect=e.collapseOnSelect!==!1},onMount(){this._setupMakeup()},onUpdate(){this._setupMakeup()},onRender(){typeof window<"u"&&this._cleanupMakeup()},onDestroy(){this._cleanupMakeup()},_setupMakeup(){const{input:e}=this;if(e.options.length&&!e.disabled){const t=this.getEl("container");this._expander=new G(t,{autoCollapse:!0,expandOnClick:!0,simulateSpacebarClick:!0,contentSelector:".listbox-button__listbox",hostSelector:".listbox-button__control",expandedClass:"listbox-button--expanded",focusManagement:"content"}),J(this.getEl("button"))}},_cleanupMakeup(){this._expander&&(this._expander.destroy(),this._expander=void 0)}};function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,o)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_(Object(n),!0).forEach(function(o){Y(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Y(e,t,n){return t=Z(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z(e){var t=ee(e,"string");return typeof t=="symbol"?t:String(t)}function ee(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const x="M/qwFgIl",p=k(x),$=p;var te=["name","grow","borderless","disabled","fluid","invalid","buttonName","options","truncate","prefixLabel","prefixId","unselectedText","floatingLabel","collapseOnSelect","variant"];const oe="-";D.r(x,()=>p);const M=X;p._=I(function(e,t,n,o,l,N){var r=e.options[l.selectedIndex],a=r&&r.text,b=e.prefixId&&o.getElId("label"),K=e.unselectedText||oe,u=a||K,W=e.variant==="form";const F=e.truncate&&!e.fluid?"div":"span";t.be(F,q(H(e,te),{class:m(["listbox-button",e.class,e.fluid&&"listbox-button--fluid",W&&"listbox-button--form"])}),"@container",o,null,4,{"onexpander-expand":n.d("expander-expand","handleExpand",!1),"onexpander-collapse":n.d("expander-collapse","handleCollapse",!1)});{t.be("button",{class:m(["listbox-button__control","btn","btn--form",e.borderless&&"btn--borderless",e.truncate&&"btn--truncated",e.floatingLabel&&"btn--floating-label"]),value:a,type:"button",disabled:e.disabled,name:e.buttonName,"aria-haspopup":"listbox","aria-labelledby":b&&"".concat(e.prefixId," ").concat(b),"aria-invalid":e.invalid&&"true"},"@button",o,null,0),t.be("span",{class:"btn__cell"},"0",o,null,1),e.floatingLabel?(t.be("span",{class:m(["btn__floating-label","btn__floating-label--animate",!a&&"btn__floating-label--inline"])},"1",o,null,1),t.t(e.floatingLabel,o),t.ee(),a&&(t.be("span",{class:"btn__text"},"2",o,null,1),t.t(u,o),t.ee())):e.prefixLabel?(t.be("span",{class:"btn__label"},"3",o,null,1),t.t(e.prefixLabel,o),t.t(" ",o),t.ee(),t.be("span",{class:"btn__text"},"4",o,null,1),t.t(u,o),t.ee()):(t.be("span",{id:b,class:"btn__text"},"5",o,null,1),t.t(u,o),t.ee()),f(z,{},t,n,"6"),t.ee(),t.ee();const y=[];for(const g of e.options||[])y.push(O(O({},g),{},{selected:r===g,[Symbol.iterator]:i}));f(U,{class:"listbox-button__listbox",name:e.name,tabindex:-1,listSelection:e.listSelection,options:y},t,n,"@options",[["change","handleListboxChange",!1],["escape","handleListboxEscape",!1]])}t.ee()},{t:x},M);p.Component=L(M,p._);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,o)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?v(Object(n),!0).forEach(function(o){ne(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function ne(e,t,n){return t=ae(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ae(e){var t=re(e,"string");return typeof t=="symbol"?t:String(t)}function re(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const h="aKW7S0cT",c=k(h);D.r(h,()=>c);const B={};c._=I(function(e,t,n,o,l,N){const r=[];r.push({selected:!0,value:"1",text:"Option 1",description:{renderBody:a=>{a.t("Option 1 info",o)},[Symbol.iterator]:i},[Symbol.iterator]:i}),r.push({value:"2",text:"Option 2",description:{renderBody:a=>{a.t("Option 2 info",o)},[Symbol.iterator]:i},[Symbol.iterator]:i}),r.push({value:"3",text:"Option 3",description:{renderBody:a=>{a.t("Option 3 info",o)},[Symbol.iterator]:i},[Symbol.iterator]:i}),f($,w(w({prefixLabel:"Select",name:"formFieldName"},e),{},{options:r}),t,n,"0",[["change","emit",!1,["change"]],["collapse","emit",!1,["collapse"]],["expand","emit",!1,["expand"]]])},{t:h,i:!0},B);c.Component=L(B,c._);const ie=`<ebay-listbox-button
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
`,se=e=>({input:A(e)}),Ee={title:"buttons/ebay-listbox-button",component:$,parameters:{docs:{description:{component:Q}}},argTypes:{selected:{description:"allows you to set the selected index option to `selected`"},borderless:{type:"boolean",control:{type:"boolean"},description:"whether button has borders "},fluid:{type:"boolean",control:{type:"boolean"},description:"whether listbox width is 100% "},buttonName:{control:{type:"text"},description:"used for the `name` attribute of the native `<button>` "},truncate:{type:"boolean",control:{type:"boolean"},description:"will truncate the text of the button onto a single line, and adds an ellipsis, when the buttons text overflows"},collapseOnSelect:{type:"boolean",control:{type:"boolean"},description:"When an option is selected, the dropdown menu collapses into the button"},listSelection:{table:{defaultValue:{summary:"manual"}},description:"If manual then user will need to press enter to select an item using keyboard. Otherwise auto will automatically select as the user presses up/down",options:["manual","auto"],type:"select"},prefixId:{control:{type:"text"},description:"id of an external element to use as the prefix label for the listbox button. Cannot be used with `prefix-label`"},floatingLabel:{control:{type:"text"},description:"The label to add that floats to the top when item is selected. Cannot be used with `prefix-label`"},unselectedText:{control:{type:"text"},description:"The text to be shown when no options are selected. Default is '-'. Cannot be used with `floating-label`"},prefixLabel:{control:{type:"text"},description:"The label to add before each selected item on the button. Cannot be used with `prefix-id`"},option:{name:"@option",table:{category:"@attribute tags"}},text:{table:{control:{type:"text"},category:"@option attributes"}},value:{table:{control:{type:"value"},category:"@option attributes"}},variant:{description:"If `form`, changes appearance to match other form-specific dropdown-esque components for visual consistency.",options:["standard","form"],type:"select"},onChange:{action:"on-change",description:"Triggered on item clicked",table:{category:"Events",defaultValue:{summary:"{ el, index, selected, wasClicked }"}}},onCollapse:{action:"on-collapse",description:"Triggered on menu collapse",table:{category:"Events",defaultValue:{summary:""}}},onExpand:{action:"on-expand",description:"Triggered on menu expand",table:{category:"Events",defaultValue:{summary:""}}}}},s=se.bind({});s.args={prefixLabel:"Selected:",options:[{value:"1",text:"Option 1"},{value:"2",text:"Option 2"},{value:"3",text:"Option 3"}]};s.parameters={docs:{source:{code:R("ebay-listbox-button",s.args,{items:"item"})}}};const d=V(c,ie);var S,C,P;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(P=(C=s.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var j,T,E;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:"buildExtensionTemplate(WithDescriptionTemplate, WithDescriptionTemplateCode)",...(E=(T=d.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};const ke=["Default","withDescription"];export{s as Default,ke as __namedExportsOrder,Ee as default,d as withDescription};
//# sourceMappingURL=listbox-button.stories-39b968ed.js.map