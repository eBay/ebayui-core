import{a as C}from"./utils.f000f876.js";import{t as _,r as j,a as k,d as B}from"./merge-attrs.9e0d7be9.js";import{d as T}from"./dynamic-tag.70156c9d.js";import{_ as S}from"./index.a32fb9ca.js";import{r as i}from"./render-tag.1a0b986f.js";import{_ as p}from"./index.8ef6a7cb.js";import{s as M}from"./self-iterator.45abe0c9.js";import{v as E}from"./v-element.18e65e73.js";import"./_commonjsHelpers.b8add541.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./repeatable.91a3253d.js";import"./index.1bc8b97e.js";/* empty css                    */import"./index.a5276c99.js";import"./index.aa2d3137.js";/* empty css             */import"./index.f495492d.js";import"./preserve-attrs.c8bb8439.js";import"./index.8e5d5614.js";import"./index.cfa4da37.js";/* empty css               */import"./index.0ffc8829.js";import"./index.e64e9ede.js";import"./index.7b11c326.js";const A=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-drawer-dialog
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.2.0
    </span>
</h1>

** Deprecated ** (Use lightbox-dialog instead)
Dialog which slides in from the bottom of the screen. Used mainly on moble.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/dialogs-ebay-drawer-dialog)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/dialogs-ebay-drawer-dialog)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-drawer-dialog/examples)
`;function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,o)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?f(Object(r),!0).forEach(function(o){F(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function F(e,t,r){return t=W(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function W(e){var t=H(e,"string");return typeof t=="symbol"?t:String(t)}function H(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const u="3nyDoHkx",d=_(u),K=d;j.exports.r(u,()=>d);const z={onCreate(){this.state={open:!1}},openDrawer(){this.state.open=!0},closeDrawer(){this.state.open=!1,this.emit("close",arguments)}};d._=k(function(e,t,r,o,a,q){i(S,b(b({a11yCloseText:"Close drawer",open:a.open},e),{},{renderBody:n=>{T(n,e.renderBody,null,null,null,null,r,"1")}}),t,r,"0",[["close","closeDrawer",!1],["expanded","emit",!1,["expanded"]],["collapsed","emit",!1,["collapsed"]],["open","emit",!1,["open"]]]),i(p,{renderBody:n=>{n.t("Open drawer",o)}},t,r,"2",[["click","openDrawer",!1]])},{t:u},z);d.Component=B(z,d._);const R=`<ebay-drawer-dialog
    a11y-close-text="Close drawer"
    open=state.open
    on-close("closeDrawer")
    on-expanded("emit", "expanded")
    on-collapsed("emit", "collapsed")
    on-open("emit", "open")
    ...input>
    <\${input.renderBody}/>
</ebay-drawer-dialog>
<ebay-button on-click("openDrawer")>Open drawer</ebay-button>
class {
    onCreate() {
        this.state = { open: false };
    }
    openDrawer() {
        this.state.open = true;
    }
    closeDrawer() {
        this.state.open = false;
        this.emit('close', arguments);
    }
}
`;function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,o)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?g(Object(r),!0).forEach(function(o){U(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function U(e,t,r){return t=V(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function V(e){var t=I(e,"string");return typeof t=="symbol"?t:String(t)}function I(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const y="XCcCGavh",c=_(y),L=E("p",null,"4",null,1,0).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),N=E("p",null,"5",null,1,0).e("a",{href:"http://www.ebay.com"},"6",null,1,0).t("www.ebay.com");j.exports.r(y,()=>c);const $={onCreate(){this.state={open:!1}},openDrawer(){this.state.open=!0},closeDrawer(){this.state.open=!1,this.emit("close",arguments)}};c._=k(function(e,t,r,o,a,q){i(S,w(w({a11yCloseText:"Close drawer",open:a.open},e),{},{footer:{renderBody:n=>{i(p,{renderBody:m=>{m.t("Cancel",o)}},n,r,"1",[["click","closeDrawer",!1]]),i(p,{priority:"primary",renderBody:m=>{m.t("Confirm",o)}},n,r,"2",[["click","closeDrawer",!1]])},[Symbol.iterator]:M},renderBody:n=>{T(n,e.renderBody,null,null,null,null,r,"3"),n.n(L,o),n.n(N,o)}}),t,r,"0",[["close","closeDrawer",!1],["expanded","emit",!1,["expanded"]],["collapsed","emit",!1,["collapsed"]],["open","emit",!1,["open"]]]),i(p,{renderBody:n=>{n.t("Open drawer",o)}},t,r,"7",[["click","openDrawer",!1]])},{t:y},$);c.Component=B($,c._);const G=`<ebay-drawer-dialog
    a11y-close-text="Close drawer"
    open=state.open
    on-close("closeDrawer")
    on-expanded("emit", "expanded")
    on-collapsed("emit", "collapsed")
    on-open("emit", "open")
    ...input>
    <@footer>
        <ebay-button on-click('closeDrawer')>Cancel</ebay-button>
        <ebay-button priority="primary" on-click('closeDrawer')>Confirm</ebay-button>
    </@footer>
    <\${input.renderBody}/>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
        <a href="http://www.ebay.com">www.ebay.com</a>
    </p>
</ebay-drawer-dialog>
<ebay-button on-click("openDrawer")>Open drawer</ebay-button>
class {
    onCreate() {
        this.state = { open: false };
    }
    openDrawer() {
        this.state.open = true;
    }
    closeDrawer() {
        this.state.open = false;
        this.emit('close', arguments);
    }
}
`,he={title:"dialogs/ebay-drawer-dialog",component:K,parameters:{docs:{description:{component:A}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is open.",table:{disable:!0}},noHandle:{type:"boolean",control:{type:"boolean"},description:"Whether handle will be shown or not."},expanded:{type:"boolean",control:{type:"boolean"},description:"Whether the drawer is expanded to full height or max 50%"},closeButtonText:{control:{type:"text"},description:"If set, then will show this text instead of a close button"},focus:{control:{type:"text"},description:"An id for an element which will receive focus when the drawer opens (defaults to close button)."},closeFocus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened"},a11yCloseText:{control:{type:"text"},description:"A11y text for close button and mask."},a11yMinimizeText:{control:{type:"text"},description:"A11y text for draggable handle when drawer is maximized and clicking handle will minimize the drawer."},a11yMaximizeText:{control:{type:"text"},description:"A11y text for draggable handle when drawer is minimized and clicking handle will maximize the drawer."},header:{name:"@header",table:{category:"@attribute tags"}},footer:{name:"@footer",table:{category:"@attribute tags"}},onOpen:{action:"on-open",description:"Triggered on drawer opened",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered on drawer closed. Triggered also when user drags down on handle (touch only) when drawer is not expanded",table:{category:"Events",defaultValue:{summary:""}}},onExpanded:{action:"on-expanded",description:"drawer expanded to full page height. Event is triggerd on drag up of handle (touch only), clicks, or when user scrolls in content when dialog is not expanded",table:{category:"Events",defaultValue:{summary:""}}},onCollapsed:{action:"on-collapsed",description:"drawer collapsed back to max 50%. Event is triggerd on drags down of handle (touch only) or clicks when dialog is expanded",table:{category:"Events",defaultValue:{summary:""}}}}},s=e=>({input:C(e)});s.args={header:{renderBody:"Heading Text"},renderBody:"Body Content",a11yMinimizeText:"Minimize Drawer",a11yMaximizeText:"Maximize Drawer"};s.parameters={docs:{source:{code:R}}};const l=e=>({component:c,input:C(e)});l.args={header:{renderBody:"Heading Text"},renderBody:"Body Content",a11yMinimizeText:"Minimize Drawer",a11yMaximizeText:"Maximize Drawer"};l.parameters={docs:{source:{code:G}}};var h,x,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var O,D,P;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  component: withFooter,
  input: addRenderBodies(args)
})`,...(P=(D=l.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};const xe=["Standard","WithFooter"];export{s as Standard,l as WithFooter,xe as __namedExportsOrder,he as default};
//# sourceMappingURL=drawer-dialog.stories.865d0edc.js.map
