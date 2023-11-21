import{a as D}from"./utils-44f5c40b.js";import{r as h,_,a as O,t as w}from"./merge-attrs-f99eec0a.js";import{_ as x}from"./dynamic-tag-c0238d78.js";import{_ as S}from"./index-ae1b5739.js";import{_ as c}from"./render-tag-73fdbff3.js";import{_ as C}from"./index-a26296bc.js";import"./_commonjsHelpers-725317a4.js";import"./_commonjs-dynamic-modules-302442b1.js";/* empty css                    */import"./index-89a12dc2.js";import"./index-1aa10c61.js";/* empty css             */import"./index-5edf0e05.js";import"./preserve-attrs-ebf43362.js";import"./index-6cab0bb0.js";import"./index-ad737ebd.js";/* empty css               */import"./index-61af72bd.js";import"./index-12c3b6d7.js";import"./index-e7bc7cbd.js";const k=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-fullscreen-dialog
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.0.0
    </span>
</h1>

\`\`\`marko
<ebay-fullscreen-dialog open a11y-close-text="Close Dialog">
    <@header>Hello World</@header>
    Body content
</ebay-fullscreen-dialog>
\`\`\`

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/dialogs-ebay-fullscreen-dialog)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/dialogs-ebay-fullscreen-dialog)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-fullscreen-dialog/examples)
`;function d(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),o.push.apply(o,r)}return o}function u(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?d(Object(o),!0).forEach(function(r){E(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function E(e,t,o){return t=B(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function B(e){var t=T(e,"string");return typeof t=="symbol"?t:String(t)}function T(e,t){if(typeof e!="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var r=o.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const p="7ziQ+NKh",i=w(p);h.r(p,()=>i);const P={};i._=_(function(e,t,o,r,n,j){c(S,u(u({},e),{},{open:e.open,classPrefix:"fullscreen-dialog",transitionEl:"window",class:e.class,useHiddenProperty:!0,windowClass:e.slideFrom==="end"?"fullscreen-dialog__window--slide-end":"fullscreen-dialog__window--slide",renderBody:l=>{x(l,e.renderBody,null,null,null,null,o,"1")}}),t,o,"0",[["open","emit",!1,["open"]],["close","emit",!1,["close"]]])},{t:p,i:!0},P);i.Component=O(P,i._);function f(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),o.push.apply(o,r)}return o}function $(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?f(Object(o),!0).forEach(function(r){K(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):f(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function K(e,t,o){return t=F(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function F(e){var t=R(e,"string");return typeof t=="symbol"?t:String(t)}function R(e,t){if(typeof e!="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var r=o.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const m="KcxVRmgW",s=w(m),V=s;h.r(m,()=>s);const v={onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(){this.state.open=!1,this.emit("close")}};s._=_(function(e,t,o,r,n,j){c(i,$({a11yCloseText:"Close Dialog",open:n.open},e),t,o,"0",[["close","closeDialog",!1],["open","emit",!1,["open"]]]),c(C,{renderBody:l=>{l.t("Open Dialog",r)}},t,o,"1",[["click","openDialog",!1]])},{t:m},v);s.Component=O(v,s._);const W=`<ebay-fullscreen-dialog
    a11y-close-text='Close Dialog'
    open=state.open
    on-close('closeDialog')
    on-open('emit', 'open')
    ...input
/>

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
        this.emit('close');
    }
}
`,A=e=>({input:D(e)}),ie={title:"dialogs/ebay-fullscreen-dialog",component:V,parameters:{docs:{description:{component:k}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is open.",table:{disable:!0}},focus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog opens (defaults to close button)."},slideFrom:{options:["bottom","end"],description:"Either bottom or end. Where the panel slide begins from, either on the bottom or the end of the page.",table:{defaultValue:{summary:"bottom"}},type:{category:"Options"}},closeFocus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened"},a11yCloseText:{control:{type:"text"},description:"A11y text for close button and mask."},header:{name:"@header",table:{category:"@attribute tags"}},footer:{name:"@footer",table:{category:"@attribute tags"}},onOpen:{action:"on-open",description:"Triggered on dialog opened",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered on dialog closed.",table:{category:"Events",defaultValue:{summary:""}}}}},a=A.bind({});a.args={header:{renderBody:"Heading Text"},renderBody:"Body Content",footer:{renderBody:"Footer Text"},slideFrom:null};a.parameters={docs:{source:{code:W}}};var g,y,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const se=["Standard"];export{a as Standard,se as __namedExportsOrder,ie as default};
//# sourceMappingURL=fullsceen-dialog.stories-779acedf.js.map
