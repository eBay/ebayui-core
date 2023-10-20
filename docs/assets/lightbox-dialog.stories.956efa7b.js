import{b as k,a as ce}from"./utils.f000f876.js";import{t as v,r as w,a as O,d as D}from"./merge-attrs.9e0d7be9.js";import{d as pe}from"./dynamic-tag.70156c9d.js";import{r as ue}from"./repeatable.91a3253d.js";import{s as u}from"./self-iterator.45abe0c9.js";import{v as l}from"./v-element.18e65e73.js";import{_ as P}from"./index.ff1c99f8.js";import{r as a}from"./render-tag.1a0b986f.js";import{_}from"./index.8ef6a7cb.js";import{_ as de}from"./index.5b3ab583.js";import"./_commonjsHelpers.b8add541.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./index.1bc8b97e.js";/* empty css                    */import"./index.a5276c99.js";import"./index.aa2d3137.js";/* empty css             */import"./index.f495492d.js";import"./preserve-attrs.c8bb8439.js";import"./index.8e5d5614.js";import"./index.cfa4da37.js";/* empty css               */import"./index.0ffc8829.js";import"./index.e64e9ede.js";import"./index.7b11c326.js";const me=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-lightbox-dialog
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.0.0
    </span>
</h1>

## Notes / FAQ

-   \`@header\` is _required_, and styles will break if you do not include it

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/dialogs-ebay-lightbox-dialog)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/dialogs-ebay-lightbox-dialog)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-lightbox-dialog/examples)
`;function E(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),o.push.apply(o,n)}return o}function f(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?E(Object(o),!0).forEach(function(n){ge(e,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):E(Object(o)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))})}return e}function ge(e,t,o){return t=be(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function be(e){var t=fe(e,"string");return typeof t=="symbol"?t:String(t)}function fe(e,t){if(typeof e!="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var n=o.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const q="irfzUYXY",d=v(q),ye=d,he=l("p",null,"2",null,1,0).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),xe=l("p",null,"3",null,1,0).e("a",{href:"http://www.ebay.com"},"4",null,1,0).t("www.ebay.com");w.exports.r(q,()=>d);const te={onInput(e){this.state={open:e.open}},onCreate(e){this.state={open:e.open||!1}},openDialog(){this.state.open=!0},closeDialog(e){this.state.open=!1,this.emit("close",e)}};d._=O(function(e,t,o,n,r,j){let i=null;e.header&&e.header.renderBody&&(i=ue(i,f(f({},e.header),{},{renderBody:s=>{pe(s,e.header.renderBody,null,null,null,null,o,"1")},[Symbol.iterator]:u}))),a(P,f(f({a11yCloseText:"Close Dialog",open:r.open},e),{},{header:i,renderBody:s=>{s.n(he,n),s.n(xe,n)}}),t,o,"0",[["close","closeDialog",!1],["open","emit",!1,["open"]],["expanded","emit",!1,["expanded"]],["collapsed","emit",!1,["collapsed"]]]),a(_,{renderBody:s=>{s.t("Open Dialog",n)}},t,o,"5",[["click","openDialog",!1]])},{t:q},te);d.Component=D(te,d._);const oe=`class {
    onInput(input) {
        this.state = { open: input.open };
    }
    onCreate(input) {
        this.state = { open: input.open || false };
    }
    openDialog() {
        this.state.open = true;
    }
    closeDialog(e) {
        this.state.open = false;
        this.emit("close", e);
    }
}

<ebay-lightbox-dialog
    a11y-close-text="Close Dialog"
    open=state.open
    on-close("closeDialog")
    on-open("emit", "open")
    on-expanded("emit", "expanded")
    on-collapsed("emit", "collapsed")
    ...input
>
    <if(input.header && input.header.renderBody)>
        <@header ...input.header>
            <\${input.header.renderBody}/>
        </@header>
    </if>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
        <a href="http://www.ebay.com">
            www.ebay.com
        </a>
    </p>
</ebay-lightbox-dialog>

<ebay-button on-click("openDialog")>
    Open Dialog
</ebay-button>
`;function $(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),o.push.apply(o,n)}return o}function z(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?$(Object(o),!0).forEach(function(n){ve(e,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):$(Object(o)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))})}return e}function ve(e,t,o){return t=we(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function we(e){var t=Oe(e,"string");return typeof t=="symbol"?t:String(t)}function Oe(e,t){if(typeof e!="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var n=o.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const T="O4P+3SFt",m=v(T),De=l("p",null,"2",null,1,0).e("a",{href:"http://www.ebay.com"},"3",null,1,0).t("www.ebay.com");w.exports.r(T,()=>m);const ne={onInput(e){this.state={open:e.open}},onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(e){this.state.open=!1,this.emit("close",e)}};m._=O(function(e,t,o,n,r,j){a(P,z(z({a11yCloseText:"Close Dialog",open:r.open},e),{},{header:{renderBody:i=>{i.t("Heading",n)},[Symbol.iterator]:u},renderBody:i=>{for(let s=(100-0)/1,S=0;S<=s;S++){const le=0+S*1,se="[".concat(le,"]");i.be("p",null,"1"+se,n,null,0),i.t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",n),i.ee()}i.n(De,n)}}),t,o,"0",[["close","closeDialog",!1],["open","emit",!1,["open"]],["expanded","emit",!1,["expanded"]],["collapsed","emit",!1,["collapsed"]]]),a(_,{renderBody:i=>{i.t("Open Dialog",n)}},t,o,"4",[["click","openDialog",!1]])},{t:T},ne);m.Component=D(ne,m._);const Pe=`class {
    onInput(input) {
        this.state = { open: input.open };
    }
    onCreate() {
        this.state = { open: false };
    }
    openDialog() {
        this.state.open = true;
    }
    closeDialog(e) {
        this.state.open = false;
        this.emit("close", e);
    }
}

<ebay-lightbox-dialog
    a11y-close-text="Close Dialog"
    open=state.open
    on-close("closeDialog")
    on-open("emit", "open")
    on-expanded("emit", "expanded")
    on-collapsed("emit", "collapsed")
    ...input
>
    <@header>Heading</@header>
    <for|i| from=0 to=100>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </for>
    <p>
        <a href="http://www.ebay.com">
            www.ebay.com
        </a>
    </p>
</ebay-lightbox-dialog>

<ebay-button on-click("openDialog")>
    Open Dialog
</ebay-button>
`;function I(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),o.push.apply(o,n)}return o}function W(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?I(Object(o),!0).forEach(function(n){_e(e,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):I(Object(o)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))})}return e}function _e(e,t,o){return t=je(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function je(e){var t=Se(e,"string");return typeof t=="symbol"?t:String(t)}function Se(e,t){if(typeof e!="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var n=o.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const C="nbWpTY5/",g=v(C),ke=l("p",null,"2",null,1,0).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),qe=l("p",null,"3",null,1,0).e("a",{href:"http://www.ebay.com"},"4",null,1,0).t("www.ebay.com");w.exports.r(C,()=>g);const ie={onInput(e){this.state={open:e.open}},onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(e){this.state.open=!1,this.emit("close",e)}};g._=O(function(e,t,o,n,r,j){a(P,W(W({a11yCloseText:"Close Dialog",open:r.open},e),{},{header:{renderBody:i=>{i.t("Heading",n)},[Symbol.iterator]:u},prevButton:{a11yText:"Go back",renderBody:i=>{a(de,{},i,o,"1")},[Symbol.iterator]:u},renderBody:i=>{i.n(ke,n),i.n(qe,n)}}),t,o,"0",[["close","closeDialog",!1],["open","emit",!1,["open"]],["prevButtonClick","emit",!1,["prev-button-click"]],["expanded","emit",!1,["expanded"]],["collapsed","emit",!1,["collapsed"]]]),a(_,{renderBody:i=>{i.t("Open Dialog",n)}},t,o,"5",[["click","openDialog",!1]])},{t:C},ie);g.Component=D(ie,g._);const Te=`<ebay-lightbox-dialog
    a11y-close-text="Close Dialog"
    open=state.open
    on-close("closeDialog")
    on-open("emit", "open")
    on-prevButtonClick("emit", "prev-button-click")
    on-expanded("emit", "expanded")
    on-collapsed("emit", "collapsed")
    ...input
>
    <@header>Heading</@header>
    <@prev-button a11y-text="Go back">
        <ebay-chevron-left-16-icon/>
    </@prev-button>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
        <a href="http://www.ebay.com">
            www.ebay.com
        </a>
    </p>
</ebay-lightbox-dialog>
<ebay-button on-click("openDialog")>
    Open Dialog
</ebay-button>
class {
    onInput(input) {
        this.state = { open: input.open };
    }
    onCreate() {
        this.state = { open: false };
    }
    openDialog() {
        this.state.open = true;
    }
    closeDialog(e) {
        this.state.open = false;
        this.emit("close", e);
    }
}
`;function U(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),o.push.apply(o,n)}return o}function M(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?U(Object(o),!0).forEach(function(n){Ce(e,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):U(Object(o)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))})}return e}function Ce(e,t,o){return t=Be(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function Be(e){var t=Ee(e,"string");return typeof t=="symbol"?t:String(t)}function Ee(e,t){if(typeof e!="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var n=o.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const B="41uCHkNw",b=v(B),$e=l("p",null,"1",null,1,0).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),ze=l("p",null,"2",null,1,0).e("a",{href:"http://www.ebay.com"},"3",null,1,0).t("www.ebay.com"),Ie=l("button",{class:"btn"},"4",null,1,1).t("Button 1"),We=l("button",{class:"btn"},"5",null,1,1).t("Button 2");w.exports.r(B,()=>b);const re={onInput(e){this.state={open:e.open}},onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(e){this.state.open=!1,this.emit("close",e)}};b._=O(function(e,t,o,n,r,j){a(P,M(M({a11yCloseText:"Close Dialog",open:r.open},e),{},{header:{renderBody:i=>{i.t("Heading",n)},[Symbol.iterator]:u},footer:{renderBody:i=>{i.n(Ie,n),i.n(We,n)},[Symbol.iterator]:u},renderBody:i=>{i.n($e,n),i.n(ze,n)}}),t,o,"0",[["close","closeDialog",!1],["open","emit",!1,["open"]],["expanded","emit",!1,["expanded"]],["collapsed","emit",!1,["collapsed"]]]),a(_,{renderBody:i=>{i.t("Open Dialog",n)}},t,o,"6",[["click","openDialog",!1]])},{t:B},re);b.Component=D(re,b._);const Ue=`<ebay-lightbox-dialog
    a11y-close-text="Close Dialog"
    open=state.open
    on-close("closeDialog")
    on-open("emit", "open")
    on-expanded("emit", "expanded")
    on-collapsed("emit", "collapsed")
    ...input
>
    <@header>Heading</@header>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
        <a href="http://www.ebay.com">
            www.ebay.com
        </a>
    </p>
    <@footer>
        <button class="btn">
            Button 1
        </button>
        <button class="btn">
            Button 2
        </button>
    </@footer>
</ebay-lightbox-dialog>
<ebay-button on-click("openDialog")>
    Open Dialog
</ebay-button>
class {
    onInput(input) {
        this.state = { open: input.open };
    }
    onCreate() {
        this.state = { open: false };
    }
    openDialog() {
        this.state.open = true;
    }
    closeDialog(e) {
        this.state.open = false;
        this.emit("close", e);
    }
}
`,ae=e=>({input:ce(e)}),pt={title:"dialogs/ebay-lightbox-dialog",component:ye,parameters:{docs:{description:{component:me}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is open."},focus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog opens (defaults to close button)."},closeFocus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened"},a11yCloseText:{control:{type:"text"},description:"A11y text for close button and mask."},header:{name:"@header",type:{required:!0},control:{type:"object"},table:{category:"@attribute tags"},description:"The header text for the content of the dialog. This is a required attribute."},footer:{name:"@footer",control:{type:"object"},table:{category:"@attribute tags"}},prevButton:{name:"@prevButton",control:{type:"object"},table:{category:"@attribute tags"},description:"Previous button, shows up before header. Usually a chevron-left icon."},bannerImgSrc:{control:{type:"text"},description:"Image source for the expressive variant"},size:{options:["regular","wide","narrow"],description:"The size of the dialog",table:{defaultValue:{summary:"regular"}},type:{category:"Options"}},bannerImgPosition:{control:{type:"text"},description:"Position of the image within the given bounds using the CSS `background-position` property. Options include [keywords, lengths, and edge distances](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)"},a11yMinimizeText:{control:{type:"text"},description:"A11y text for draggable handle when dialog is maximized and clicking handle will minimize the dialog (small screen only)."},a11yMaximizeText:{control:{type:"text"},description:"A11y text for draggable handle when dialog is minimized and clicking handle will maximize the dialog (small screen only)."},"on-open":{action:"on-open",description:"Triggered on dialog opened",table:{category:"Events",defaultValue:{summary:""}}},"on-close":{action:"on-close",description:"Triggered on dialog closed.",table:{category:"Events",defaultValue:{summary:""}}},"on-prev-button-click":{action:"on-prev-button-click",description:"Triggered when previous button is clicked",table:{category:"Events",defaultValue:{summary:""}}},onExpanded:{action:"on-expanded",description:"dialog expanded to full page height. Event is triggerd on drag up of handle (touch only), clicks, or when user scrolls in content when dialog is not expanded (small screens)",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onCollapsed:{action:"on-collapsed",description:"dialog collapsed back to max 50%. Event is triggerd on drags down of handle (touch only) or clicks when dialog is expanded (small screens only)",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}}}},c=ae.bind({});c.args={header:{renderBody:"Heading Text"},footer:{renderBody:""},a11yCloseText:"Close dialog",a11yMinimizeText:"Minimize Dialog",a11yMaximizeText:"Maximize Dialog"};c.parameters={docs:{source:{code:oe}}};const y=k(m,Pe),p=ae.bind({});p.args={header:{renderBody:"Heading Text"},footer:{renderBody:""},bannerImgSrc:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/mountain.jpeg",bannerImgPosition:"top",a11yMinimizeText:"Minimize Dialog",a11yMaximizeText:"Maximize Dialog"};p.parameters={docs:{source:{code:oe}}};const h=k(g,Te),x=k(b,Ue);var H,F,K;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(K=(F=c.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var L,A,N;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:"buildExtensionTemplate(ScrollingTemplate, ScrollingTemplateCode)",...(N=(A=y.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var V,R,Y;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(Y=(R=p.parameters)==null?void 0:R.docs)==null?void 0:Y.source}}};var G,Q,X;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:"buildExtensionTemplate(WithPrevButtonTemplate, WithPrevButtonCode)",...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var J,Z,ee;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:"buildExtensionTemplate(WithFooterTemplate, WithFooterCode)",...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const ut=["Default","Scrolling","Expressive","WithPrevButton","WithFooter"];export{c as Default,p as Expressive,y as Scrolling,x as WithFooter,h as WithPrevButton,ut as __namedExportsOrder,pt as default};
//# sourceMappingURL=lightbox-dialog.stories.956efa7b.js.map
