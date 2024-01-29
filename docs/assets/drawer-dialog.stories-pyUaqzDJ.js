import{a as _}from"./utils-NX-dnf4r.js";import{t as k,r as D,b as B,d as C}from"./registry-EgEQwbXk.js";import{_ as T}from"./dynamic-tag-7vXwaVzE.js";import{_ as v}from"./index-3VXs1sz_.js";import{_ as a}from"./render-tag-_0PNNh6Y.js";import{_ as p}from"./index-IxOvub0x.js";import{_ as S}from"./self-iterator-6yU_KG2T.js";import{_ as z}from"./v-element-wxdcHeY-.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";import"./repeatable-jmdwKenu.js";import"./index-6Ovri2v7.js";/* empty css                    */import"./index-MJalx9GY.js";import"./index-rIGlTtcv.js";/* empty css             */import"./index-VGoHc-V3.js";import"./preserve-attrs-lolIpBRv.js";import"./index-ERL0bCNR.js";import"./index-XjwwBzg5.js";/* empty css               */import"./index-zvV8HPzg.js";import"./index-eX8aiyBr.js";import"./index-XA7SOYvr.js";const $=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,u="3nyDoHkx",l=k(u),O=l;D.r(u,()=>l);const E={onCreate(){this.state={open:!1}},openDrawer(){this.state.open=!0},closeDrawer(){this.state.open=!1,this.emit("close",arguments)}};l._=B(function(o,s,t,n,c,q){a(v,{a11yCloseText:"Close drawer",open:c.open,...o,renderBody:e=>{T(e,o.renderBody,null,null,null,null,t,"1")}},s,t,"0",[["close","closeDrawer",!1],["expanded","emit",!1,["expanded"]],["collapsed","emit",!1,["collapsed"]],["open","emit",!1,["open"]]]),a(p,{renderBody:e=>{e.t("Open drawer",n)}},s,t,"2",[["click","openDrawer",!1]])},{t:u},E);l.Component=C(E,l._);const A=`export interface Input {
    renderBody?: Marko.Body;
}

<ebay-drawer-dialog
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
`,y="XCcCGavh",d=k(y),F=z("p",null,"4",null,1,0).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),W=z("p",null,"5",null,1,0).e("a",{href:"http://www.ebay.com"},"6",null,1,0).t("www.ebay.com");D.r(y,()=>d);const M={onCreate(){this.state={open:!1}},openDrawer(){this.state.open=!0},closeDrawer(){this.state.open=!1,this.emit("close",arguments)}};d._=B(function(o,s,t,n,c,q){a(v,{a11yCloseText:"Close drawer",open:c.open,...o,footer:{renderBody:e=>{a(p,{renderBody:m=>{m.t("Cancel",n)}},e,t,"1",[["click","closeDrawer",!1]]),a(p,{priority:"primary",renderBody:m=>{m.t("Confirm",n)}},e,t,"2",[["click","closeDrawer",!1]])},[Symbol.iterator]:S},renderBody:e=>{T(e,o.renderBody,null,null,null,null,t,"3"),e.n(F,n),e.n(W,n)}},s,t,"0",[["close","closeDrawer",!1],["expanded","emit",!1,["expanded"]],["collapsed","emit",!1,["collapsed"]],["open","emit",!1,["open"]]]),a(p,{renderBody:e=>{e.t("Open drawer",n)}},s,t,"7",[["click","openDrawer",!1]])},{t:y},M);d.Component=C(M,d._);const H=`export interface Input {
    renderBody?: Marko.Body;
}

<ebay-drawer-dialog
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
    declare state: {
        open: boolean
    }

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
`,de={title:"dialogs/ebay-drawer-dialog",component:O,parameters:{docs:{description:{component:$}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is open.",table:{disable:!0}},noHandle:{type:"boolean",control:{type:"boolean"},description:"Whether handle will be shown or not."},expanded:{type:"boolean",control:{type:"boolean"},description:"Whether the drawer is expanded to full height or max 50%"},closeButtonText:{control:{type:"text"},description:"If set, then will show this text instead of a close button"},focus:{control:{type:"text"},description:"An id for an element which will receive focus when the drawer opens (defaults to close button)."},closeFocus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened"},a11yCloseText:{control:{type:"text"},description:"A11y text for close button and mask."},a11yMinimizeText:{control:{type:"text"},description:"A11y text for draggable handle when drawer is maximized and clicking handle will minimize the drawer."},a11yMaximizeText:{control:{type:"text"},description:"A11y text for draggable handle when drawer is minimized and clicking handle will maximize the drawer."},header:{name:"@header",table:{category:"@attribute tags"}},footer:{name:"@footer",table:{category:"@attribute tags"}},onOpen:{action:"on-open",description:"Triggered on drawer opened",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered on drawer closed. Triggered also when user drags down on handle (touch only) when drawer is not expanded",table:{category:"Events",defaultValue:{summary:""}}},onExpanded:{action:"on-expanded",description:"drawer expanded to full page height. Event is triggerd on drag up of handle (touch only), clicks, or when user scrolls in content when dialog is not expanded",table:{category:"Events",defaultValue:{summary:""}}},onCollapsed:{action:"on-collapsed",description:"drawer collapsed back to max 50%. Event is triggerd on drags down of handle (touch only) or clicks when dialog is expanded",table:{category:"Events",defaultValue:{summary:""}}}}},r=o=>({input:_(o)});r.args={header:{renderBody:"Heading Text"},renderBody:"Body Content",a11yMinimizeText:"Minimize Drawer",a11yMaximizeText:"Maximize Drawer"};r.parameters={docs:{source:{code:A}}};const i=o=>({component:d,input:_(o)});i.args={header:{renderBody:"Heading Text"},renderBody:"Body Content",a11yMinimizeText:"Minimize Drawer",a11yMaximizeText:"Maximize Drawer"};i.parameters={docs:{source:{code:H}}};var h,w,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(g=(w=r.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var b,f,x;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  component: withFooter,
  input: addRenderBodies(args)
})`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const pe=["Standard","WithFooter"];export{r as Standard,i as WithFooter,pe as __namedExportsOrder,de as default};
