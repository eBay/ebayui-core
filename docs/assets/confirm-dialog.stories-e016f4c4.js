import{a as B}from"./utils-44f5c40b.js";import{r as w,_ as x,a as D,t as T}from"./registry-08dff688.js";import{_ as k}from"./self-iterator-81a0b488.js";import{_ as $}from"./v-element-062756a8.js";import{_ as p}from"./index-1f66c961.js";import{_ as s}from"./render-tag-73fdbff3.js";import{_ as q}from"./index-6c326235.js";import"./_commonjsHelpers-725317a4.js";import"./_commonjs-dynamic-modules-302442b1.js";/* empty css               */import"./index-9a052758.js";import"./index-e5d8eaff.js";import"./index-3f14fa50.js";/* empty css             */import"./dynamic-tag-bb62150b.js";import"./index-7cd25606.js";import"./index-ad737ebd.js";/* empty css                    */import"./index-155d5ffa.js";import"./index-a879355c.js";import"./preserve-attrs-3aff3526.js";import"./index-6cab0bb0.js";const I=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-confirm-dialog
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS vBETA
    </span>
</h1>

Used to force the user to make a choice to either confirm or reject. Cannot be closed unless one of the two options are pressed. Pressing escape will trigger reject.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/dialogs-ebay-confirm-dialog)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/dialogs-ebay-confirm-dialog)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-confirm-dialog/examples)
`;function y(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),o.push.apply(o,r)}return o}function h(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?y(Object(o),!0).forEach(function(r){V(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):y(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function V(e,t,o){return t=R(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function R(e){var t=A(e,"string");return typeof t=="symbol"?t:String(t)}function A(e,t){if(typeof e!="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var r=o.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const u="1PzPJOXE",c=T(u);var K=["destructive"];w.r(u,()=>c);const E={};c._=x(function(e,t,o,r,i,S){var n=r.getElId("confirm-dialog-cancel"),f=r.getElId("confirm-dialog-confirm"),g=r.getElId("confirm-dialog-main");s(q,h(h({},e),{},{open:e.open,confirmCtaVariant:e["confirm-cta-variant"],mainId:g,focus:f,classPrefix:"confirm-dialog",class:[e.class,"confirm-dialog--mask-fade"],windowClass:["confirm-dialog__window--fade"],buttonPosition:"hidden",footer:{renderBody:b=>{s(p,{id:n,class:"confirm-dialog__reject",renderBody:m=>{m.t(e.rejectText,r)}},b,o,"1",[["click","emit",!1,["reject"]]]),s(p,{priority:"primary",id:f,ariaDescribedby:g,class:["confirm-dialog__confirm",K.includes(e.confirmCtaVariant)&&"btn--".concat(e.confirmCtaVariant)],renderBody:m=>{m.t(e.confirmText,r)}},b,o,"2",[["click","emit",!1,["confirm"]]])},[Symbol.iterator]:k}}),t,o,"0",[["open","emit",!1,["open"]],["close","emit",!1,["reject"]]])},{t:u,i:!0},E);c.Component=D(E,c._);function v(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),o.push.apply(o,r)}return o}function _(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?v(Object(o),!0).forEach(function(r){H(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):v(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function H(e,t,o){return t=U(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function U(e){var t=z(e,"string");return typeof t=="symbol"?t:String(t)}function z(e,t){if(typeof e!="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var r=o.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const d="fsHecxRu",l=T(d),L=l,N=$("p",null,"1",null,1,0).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");w.r(d,()=>l);const C={onInput(e){this.state={open:e.open}},onCreate(e){this.state={open:e.open||!1}},openDialog(){this.state.open=!0,this.emit("open")},closeDialog(e){this.state.open=!1,this.emit("reject",e)},success(e){this.state.open=!1,this.emit("confirm",e)}};l._=x(function(e,t,o,r,i,S){s(c,_(_({open:i.open},e),{},{header:{renderBody:n=>{n.t("Heading",r)},[Symbol.iterator]:k},renderBody:n=>{n.n(N,r)}}),t,o,"0",[["open","emit",!1,["open"]],["reject","closeDialog",!1],["confirm","success",!1]]),s(p,{renderBody:n=>{n.t("Open Dialog",r)}},t,o,"2",[["click","openDialog",!1]])},{t:d},C);l.Component=D(C,l._);const F=`<ebay-confirm-dialog
    open=state.open
    on-open("emit", "open")
    on-reject('closeDialog')
    on-confirm('success')
    ...input
>
    <@header>Heading</@header>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</ebay-confirm-dialog>

<ebay-button on-click('openDialog')>Open Dialog</ebay-button>
class {
    onInput(input) {
        this.state = { open: input.open };
    }
    onCreate(input) {
        this.state = { open: input.open || false };
    }
    openDialog() {
        this.state.open = true;
        this.emit('open');
    }
    closeDialog(ev) {
        this.state.open = false;
        this.emit('reject', ev);
    }
    success(ev) {
        this.state.open = false;
        this.emit('confirm', ev);
    }
}
`,J=e=>({input:B(e)}),ge={title:"dialogs/ebay-confirm-dialog",component:L,parameters:{docs:{description:{component:I}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is open.",table:{disable:!0}},closeFocus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened"},confirmText:{control:{type:"text"},description:"Text for confirm button"},rejectText:{control:{type:"text"},description:"Text for reject button"},confirmCtaVariant:{options:["none","destructive"],description:"The alternative main CTA button variant to use.",table:{defaultValue:{summary:"none"}},type:{category:"Options"}},onOpen:{action:"on-open",description:"Triggered on dialog open",table:{category:"Events",defaultValue:{summary:""}}},onConfirm:{action:"on-confirm",description:"Triggered on dialog confirm button click",table:{category:"Events",defaultValue:{summary:""}}},onReject:{action:"on-reject",description:"Triggered when dialog is closed",table:{category:"Events",defaultValue:{summary:""}}}}},a=J.bind({});a.args={confirmText:"Okay",rejectText:"Cancel"};a.parameters={docs:{source:{code:F}}};var O,j,P;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(P=(j=a.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};const be=["Default"];export{a as Default,be as __namedExportsOrder,ge as default};
//# sourceMappingURL=confirm-dialog.stories-e016f4c4.js.map
