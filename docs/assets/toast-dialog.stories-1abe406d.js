import{r as w,_ as T,a as k,t as O}from"./registry-08dff688.js";import{_ as d}from"./self-iterator-81a0b488.js";import{_ as v}from"./v-element-062756a8.js";import{_ as b}from"./index-1f66c961.js";import{_ as c}from"./render-tag-73fdbff3.js";import{_ as S}from"./dynamic-tag-bb62150b.js";import{_ as j}from"./index-6c326235.js";import"./_commonjsHelpers-725317a4.js";import"./_commonjs-dynamic-modules-302442b1.js";/* empty css               */import"./index-9a052758.js";import"./index-e5d8eaff.js";import"./index-3f14fa50.js";/* empty css             */import"./index-7cd25606.js";import"./index-ad737ebd.js";/* empty css                    */import"./index-155d5ffa.js";import"./index-a879355c.js";import"./preserve-attrs-3aff3526.js";import"./index-6cab0bb0.js";const x=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;function g(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),o.push.apply(o,r)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?g(Object(o),!0).forEach(function(r){E(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):g(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function E(e,t,o){return t=D(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function D(e){var t=$(e,"string");return typeof t=="symbol"?t:String(t)}function $(e,t){if(typeof e!="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var r=o.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const y="DWKAHw/y",s=O(y);w.r(y,()=>s);const B={};s._=T(function(e,t,o,r,l,P){var n=e.header||{};c(j,p(p({},e),{},{open:e.open,baseEl:"aside",transitionEl:"root",isModal:!1,classPrefix:"toast-dialog",closeButtonClass:["icon-btn--transparent"],class:[e.class,"toast-dialog--transition"],header:p(p({},n),{},{class:[n.class,"toast-dialog__title"],[Symbol.iterator]:d}),renderBody:m=>{S(m,e.renderBody,null,null,null,null,o,"1")}}),t,o,"0",[["open","emit",!1,["open"]],["close","emit",!1,["close"]]])},{t:y,i:!0},B);s.Component=k(B,s._);const u="283zRgGr",i=O(u),A=i,H=v("p",null,"1",null,1,0).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit"),K=v("p",null,"2",null,1,0).e("a",{href:"http://www.ebay.com"},"3",null,1,0).t("www.ebay.com");w.r(u,()=>i);const C={onCreate(){this.state={open:!1}},openToast(){this.state.open=!0},closeToast(){this.state.open=!1,this.emit("close")}};i._=T(function(e,t,o,r,l,P){c(s,{a11yCloseText:"Close Toast",open:l.open,header:{renderBody:n=>{n.t("Heading",r)},[Symbol.iterator]:d},footer:{renderBody:n=>{c(b,{accesskey:"i",renderBody:m=>{m.t("Close",r)}},n,o,"4",[["click","closeToast",!1]])},[Symbol.iterator]:d},renderBody:n=>{n.n(H,r),n.n(K,r)}},t,o,"0",[["open","emit",!1,["open"]],["close","closeToast",!1]]),c(b,{renderBody:n=>{n.t("Open Toast",r)}},t,o,"5",[["click","openToast",!1]])},{t:u},C);i.Component=k(C,i._);const z=`<ebay-toast-dialog a11y-close-text="Close Toast" open=state.open on-open('emit', 'open') on-close("closeToast")>
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
`,L=e=>({input:{...e,spread:null,...e.spread,renderBody:e.renderBody?t=>{t.html(e.renderBody)}:null}}),se={title:"dialogs/ebay-toast-dialog",component:A,parameters:{docs:{description:{component:x}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether toast is open.",table:{disable:!0}},a11yCloseText:{control:{type:"text"},description:" A11y text for close button."},header:{name:"@header",description:"The header to be displayed in the toast dialog",table:{category:"@attribute tags"}},onOpen:{action:"on-open",description:"Triggered on dialog opened",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered on dialog closed.",table:{category:"Events",defaultValue:{summary:""}}}}},a=L.bind({});a.args={};a.parameters={docs:{source:{code:z}}};var f,h,_;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    spread: null,
    ...args.spread,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(_=(h=a.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};const ie=["Standard"];export{a as Standard,ie as __namedExportsOrder,se as default};
//# sourceMappingURL=toast-dialog.stories-1abe406d.js.map
