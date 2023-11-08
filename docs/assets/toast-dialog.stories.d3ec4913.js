import{r as w,a as T,d as O,t as v}from"./merge-attrs.9e0d7be9.js";import{s as m}from"./self-iterator.45abe0c9.js";import{v as k}from"./v-element.18e65e73.js";import{_ as b}from"./index.8ef6a7cb.js";import{r as c}from"./render-tag.1a0b986f.js";import{d as P}from"./dynamic-tag.70156c9d.js";import{_ as S}from"./index.1bc8b97e.js";import"./_commonjsHelpers.b8add541.js";import"./_commonjs-dynamic-modules.30ae7933.js";/* empty css               */import"./index.0ffc8829.js";import"./index.e64e9ede.js";import"./index.aa2d3137.js";/* empty css             */import"./index.7b11c326.js";import"./index.cfa4da37.js";/* empty css                    */import"./index.a5276c99.js";import"./index.f495492d.js";import"./preserve-attrs.c8bb8439.js";import"./index.8e5d5614.js";const j=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-toast-dialog
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

A dialog which shows up information on the side of the page. This is for non-blocking info that the user needs to see.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/dialogs-ebay-toast-dialog)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/dialogs-ebay-toast-dialog)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-toast-dialog/examples)
`;function g(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),o.push.apply(o,n)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?g(Object(o),!0).forEach(function(n){E(e,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):g(Object(o)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))})}return e}function E(e,t,o){return t=D(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function D(e){var t=$(e,"string");return typeof t=="symbol"?t:String(t)}function $(e,t){if(typeof e!="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var n=o.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const y="DWKAHw/y",s=v(y);w.exports.r(y,()=>s);const B={};s._=T(function(e,t,o,n,l,C){var r=e.header||{};c(S,p(p({},e),{},{open:e.open,baseEl:"aside",transitionEl:"root",isModal:!1,classPrefix:"toast-dialog",closeButtonClass:["icon-btn--transparent"],class:[e.class,"toast-dialog--transition"],header:p(p({},r),{},{class:[r.class,"toast-dialog__title"],[Symbol.iterator]:m}),renderBody:d=>{P(d,e.renderBody,null,null,null,null,o,"1")}}),t,o,"0",[["open","emit",!1,["open"]],["close","emit",!1,["close"]]])},{t:y,i:!0},B);s.Component=O(B,s._);const u="283zRgGr",i=v(u),A=i,H=k("p",null,"1",null,1,0).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit"),K=k("p",null,"2",null,1,0).e("a",{href:"http://www.ebay.com"},"3",null,1,0).t("www.ebay.com");w.exports.r(u,()=>i);const x={onCreate(){this.state={open:!1}},openToast(){this.state.open=!0},closeToast(){this.state.open=!1,this.emit("close")}};i._=T(function(e,t,o,n,l,C){c(s,{a11yCloseText:"Close Toast",open:l.open,header:{renderBody:r=>{r.t("Heading",n)},[Symbol.iterator]:m},footer:{renderBody:r=>{c(b,{accesskey:"i",renderBody:d=>{d.t("Close",n)}},r,o,"4",[["click","closeToast",!1]])},[Symbol.iterator]:m},renderBody:r=>{r.n(H,n),r.n(K,n)}},t,o,"0",[["open","emit",!1,["open"]],["close","closeToast",!1]]),c(b,{renderBody:r=>{r.t("Open Toast",n)}},t,o,"5",[["click","openToast",!1]])},{t:u},x);i.Component=O(x,i._);const z=`<ebay-toast-dialog a11y-close-text="Close Toast" open=state.open on-open('emit', 'open') on-close("closeToast")>
    <@header>Heading</@header>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    <p>
        <a href="http://www.ebay.com">www.ebay.com</a>
    </p>
    <@footer>
        <ebay-button accesskey="i" on-click("closeToast")>Close</ebay-button>
    </@footer>
</ebay-toast-dialog>
<ebay-button on-click("openToast")>Open Toast</ebay-button>
class {
    onCreate() {
        this.state = { open: false };
    }
    openToast() {
        this.state.open = true;
    }
    closeToast() {
        this.state.open = false;
        this.emit('close');
    }
}
`,L=e=>({input:{...e,spread:null,...e.spread,renderBody:e.renderBody?t=>{t.html(e.renderBody)}:null}}),se={title:"dialogs/ebay-toast-dialog",component:A,parameters:{docs:{description:{component:j}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether toast is open.",table:{disable:!0}},a11yCloseText:{control:{type:"text"},description:" A11y text for close button."},header:{name:"@header",description:"The header to be displayed in the toast dialog",table:{category:"@attribute tags"}},onOpen:{action:"on-open",description:"Triggered on dialog opened",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered on dialog closed.",table:{category:"Events",defaultValue:{summary:""}}}}},a=L.bind({});a.args={};a.parameters={docs:{source:{code:z}}};var f,h,_;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    spread: null,
    ...args.spread,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(_=(h=a.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};const ie=["Standard"];export{a as Standard,ie as __namedExportsOrder,se as default};
//# sourceMappingURL=toast-dialog.stories.d3ec4913.js.map
