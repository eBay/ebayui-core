import{a as E}from"./utils-44f5c40b.js";import{r as _,_ as w,a as x,t as v}from"./merge-attrs-f99eec0a.js";import{_ as u}from"./dynamic-tag-c0238d78.js";import{_ as k}from"./self-iterator-81a0b488.js";import{_ as S}from"./v-element-6541da74.js";import{_ as O}from"./index-a26296bc.js";import{_ as d}from"./render-tag-73fdbff3.js";import{_ as C}from"./index-ae1b5739.js";import"./_commonjsHelpers-725317a4.js";import"./_commonjs-dynamic-modules-302442b1.js";/* empty css               */import"./index-61af72bd.js";import"./index-12c3b6d7.js";import"./index-1aa10c61.js";/* empty css             */import"./index-e7bc7cbd.js";import"./index-ad737ebd.js";/* empty css                    */import"./index-89a12dc2.js";import"./index-5edf0e05.js";import"./preserve-attrs-ebf43362.js";import"./index-6cab0bb0.js";const q=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-alert-dialog
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS vBETA
    </span>
</h1>

Used to force the user to read an import message. The dialog will only be dismissed when the user presses the confirm button. This is the only way to close the dialog.

\`\`\`marko
<ebay-alert-dialog open alert-text="Confirm">
    <@header>Title</@header>
    <p>Hello some important info</p>
</ebay-alert-dialog>
\`\`\`

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/dialogs-ebay-alert-dialog)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/dialogs-ebay-alert-dialog)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-alert-dialog/examples)
`;function f(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),o.push.apply(o,r)}return o}function g(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?f(Object(o),!0).forEach(function(r){$(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):f(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function $(e,t,o){return t=I(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function I(e){var t=Q(e,"string");return typeof t=="symbol"?t:String(t)}function Q(e,t){if(typeof e!="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var r=o.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const m="6eDQvQ0j",i=v(m);_.r(m,()=>i);const D={};i._=w(function(e,t,o,r,s,P){var a=r.getElId("alert-dialog-confirm"),p=r.getElId("alert-dialog-main");d(C,g(g({},e),{},{role:"alertdialog",open:e.open,classPrefix:"alert-dialog",ignoreEscape:!0,mainId:p,buttonPosition:"hidden",focus:a,class:[e.class,"alert-dialog--mask-fade"],windowClass:["alert-dialog__window alert-dialog__window--fade"],footer:{renderBody:T=>{d(O,{priority:"primary",ariaDescribedby:p,id:a,class:"alert-dialog__acknowledge",renderBody:j=>{j.t(e.confirmText,r)}},T,o,"@confirm",[["click","emit",!1,["confirm"]]])},[Symbol.iterator]:k}}),t,o,"0",[["open","emit",!1,["open"]],["close","emit",!1,["close"]]])},{t:m,i:!0},D);i.Component=x(D,i._);const c="3f5QmEug",l=v(c),R=l,U=S("p",null,"3",null,1,0).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");_.r(c,()=>l);const B={onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(){this.state.open=!1}};l._=w(function(e,t,o,r,s,P){d(i,{confirmText:e.confirmText||"Confirm",open:s.open,header:{renderBody:a=>{u(a,e.header.renderBody,null,null,null,null,o,"1")},[Symbol.iterator]:k},renderBody:a=>{u(a,e.renderBody,null,null,null,null,o,"2"),a.n(U,r)}},t,o,"0",[["confirm","closeDialog",!1]]),d(O,{renderBody:a=>{a.t("Open Dialog",r)}},t,o,"4",[["click","openDialog",!1]])},{t:c},B);l.Component=x(B,l._);const A=`<ebay-alert-dialog
    confirm-text=input.confirmText || 'Confirm'
    open=state.open
    on-confirm('closeDialog')
>
    <@header><\${input.header.renderBody}/></@header>
    <\${input.renderBody}/>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</ebay-alert-dialog>

<ebay-button on-click('openDialog')>Open Dialog</ebay-button>
class {
    onCreate() {
        this.state = { open: false };
    }
    openDialog() {
        this.state.open = true;
    }
    closeDialog() {
        this.state.open = false;
    }
}
`,H=e=>({input:E(e)}),de={title:"dialogs/ebay-alert-dialog",component:R,parameters:{docs:{description:{component:q}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is open.",table:{disable:!0}},closeFocus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened"},"confirm-text":{control:{type:"text"},description:"Text for confirm button"},header:{name:"@header",table:{category:"@attribute tags"}}}},n=H.bind({});n.args={header:{renderBody:"Heading Text"},renderBody:"Body Content"};n.parameters={docs:{source:{code:A}}};var y,b,h;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const me=["Standard"];export{n as Standard,me as __namedExportsOrder,de as default};
//# sourceMappingURL=alertDialog.stories-f2610fb1.js.map
