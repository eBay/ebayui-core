import{r as w,_ as T,p as C,a as P,t as S}from"./merge-attrs-51a02d23.js";import{_ as x}from"./index-1bda937f.js";import{_ as p}from"./render-tag-73fdbff3.js";import{_ as h}from"./dynamic-tag-ee96640a.js";import{c as D}from"./index-92d34436.js";import{_ as $}from"./repeatable-4c76745e.js";import{_ as A}from"./self-iterator-81a0b488.js";import{_ as M}from"./index-a6334daa.js";import"./_commonjsHelpers-725317a4.js";import"./_commonjs-dynamic-modules-302442b1.js";/* empty css               */import"./index-89dcddcc.js";import"./index-9c6c531d.js";import"./index-42c7fb72.js";/* empty css             */import"./index-968667d0.js";import"./index-ad737ebd.js";/* empty css             *//* empty css                    */import"./index-896cf11b.js";import"./index-088a4ddf.js";import"./preserve-attrs-75da853e.js";import"./index-6cab0bb0.js";const K=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-snackbar-dialog
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

\`\`\`marko
<ebay-snackbar-dialog>
    Basic Snackbar
</ebay-snackbar-dialog>
\`\`\`

A snackbar is a non-modal dialog that appears in response to a lightweight user action. It disappears automatically after a minimum of 6 seconds.

The user usually will want to manage the state of the snackbar, and so should provide the open state as a boolean as well as a function to synchronize the app state with the snackbar state when the on-close event occurs.

In the case where the application developer only wants to manage the initial state of the snackbar, the dev can choose to provide only the open state as a boolean. This is useful when a dev wants the snackbar to appear only once on initial render and then disappear.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/dialogs-ebay-snackbar-dialog)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/dialogs-ebay-snackbar-dialog)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-snackbar-dialog/examples)
`;const u=6e3;class L{_clearTimeout(){clearTimeout(this.timeout)}_setupTimeout(){this.state.open!==!1&&(this.timeout=setTimeout(()=>{this.state.open=!1},u))}onInput(t){this.state={open:t.open||this.state.open||!1}}onMount(){this._setupTimeout()}onUpdate(){this._setupTimeout()}onRender(){typeof window<"u"&&this._clearTimeout()}onDestroy(){this._clearTimeout()}onCreate(){this.eventSet=new Set,this.state={open:!1}}handleAction(){this._clearTimeout(),this.emit("action"),this.state.open=!1}handleFocus(){this._clearTimeout(),this.eventSet.add("focus")}handleBlur(){this.eventSet.delete("focus"),this.eventSet.size===0&&(this._clearTimeout(),this.timeout=setTimeout(()=>{this.state.open=!1},u))}handleMouseEnter(){this._clearTimeout(),this.eventSet.add("mouseOver")}handleMouseLeave(){this.eventSet.delete("mouseOver"),this.eventSet.size===0&&this.state.open===!0&&(this._clearTimeout(),this.timeout=setTimeout(()=>{this.state.open=!1},u))}handleClose(){this._clearTimeout(),this.state.open=!1,this.emit("close")}}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?b(Object(n),!0).forEach(function(o){z(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function z(e,t,n){return t=F(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F(e){var t=H(e,"string");return typeof t=="symbol"?t:String(t)}function H(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const d="HPFvHriS",l=S(d);var I=["open","layout","action"];w.r(d,()=>l);const j=L;l._=T(function(e,t,n,o,a,B){let r=null;e.action&&(r=$(r,{renderBody:m=>{p(D,{renderBody:i=>{h(i,e.action.renderBody,null,null,null,null,n,"2"),i.be("span",{class:"clipped"},"3",o,null,1),i.t("- Access Key: ",o),i.t(e.action.accessKey,o),i.ee()}},m,n,"1",[["click","handleAction",!1],["focus","handleFocus",!1],["blur","handleBlur",!1]])},[Symbol.iterator]:A})),p(M,y(y({},C(e,I)),{},{open:a.open,isModal:!1,classPrefix:"snackbar-dialog",class:[e.class,"snackbar-dialog--transition"],windowClass:[e.layout==="column"&&"snackbar-dialog__window--column"],buttonPosition:"hidden",transitionEl:"root",action:r,renderBody:m=>{h(m,e.renderBody,null,null,null,null,n,"4")}}),t,n,"0",[["close","handleClose",!1],["open","emit",!1,["open"]],["mouseEnter","handleMouseEnter",!1],["mouseLeave","handleMouseLeave",!1]])},{t:d},j);l.Component=P(j,l._);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?g(Object(n),!0).forEach(function(o){U(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function U(e,t,n){return t=N(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e){var t=V(e,"string");return typeof t=="symbol"?t:String(t)}function V(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const f="6TYUqMgh",c=S(f),R=c;w.r(f,()=>c);const E={onCreate(){this.state={open:!1}},handleOpen(){this.state.open=!0},handleClose(){this.state.open=!1,this.emit("close")}};c._=T(function(e,t,n,o,a,B){p(x,{renderBody:r=>{r.t("Open Default Snackbar",o)}},t,n,"0",[["click","handleOpen",!1]]),p(l,_(_({open:a.open},e),{},{renderBody:r=>{r.t(e.snacktext,o)}}),t,n,"1",[["close","handleClose",!1],["open","emit",!1,["open"]]])},{t:f},E);c.Component=P(E,c._);const q=`class {
    onCreate() {
        this.state = {open: false};
    }

    handleOpen() {
        this.state.open = true;
    }

    handleClose() {
        this.state.open = false;
        this.emit('close');
    }
}
<ebay-button on-click('handleOpen')>
    Open Default Snackbar
</ebay-button>
<ebay-snackbar-dialog  open=state.open on-close('handleClose') on-open('emit', 'open') ...input >
    \${input.snacktext}
</ebay-snackbar-dialog>
`,G=e=>({input:{...e,renderBody:e.renderBody?t=>{t.html(e.renderBody)}:null}}),ye={title:"dialogs/ebay-snackbar-dialog",component:R,parameters:{docs:{description:{component:K}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},table:{disable:!0}},layout:{type:"enum",control:{type:"radio"},options:["row","column"]},snacktext:{control:{type:"text"},description:"for demo only"},onOpen:{action:"on-open",description:"Triggered on dialog opened",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered on dialog closed.",table:{category:"Events",defaultValue:{summary:""}}},onAction:{action:"on-action",description:"Triggered on action pressed",table:{category:"Events",defaultValue:{summary:""}}}}},s=G.bind({});s.args={snacktext:"This is the snackbar"};s.parameters={docs:{source:{code:q}}};var v,O,k;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(k=(O=s.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};const ge=["Standard"];export{s as Standard,ge as __namedExportsOrder,ye as default};
//# sourceMappingURL=snackbar-dialog.stories-8df00080.js.map
