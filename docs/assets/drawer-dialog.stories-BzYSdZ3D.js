<<<<<<< HEAD:docs/assets/drawer-dialog.stories-BGB2AyrC.js
import{a as v}from"./utils-DWCsNc5l.js";import{r as g,b as w,d as f,t as x}from"./registry-Cc025Aii.js";import{_ as b}from"./dynamic-tag-BtS2B08A.js";import{i as S,a as $}from"./attr-tag-DphMQldM.js";import{_ as V}from"./index-GnsTVIQr.js";import{_ as s}from"./render-tag-BBOJ9dEX.js";import{_ as h}from"./index-CkDMY5Dc.js";import{_ as q}from"./const-element-VPRvcpko.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";/* empty css                    */import"./index-kmWx9eiN.js";import"./index-oHjhF9YT.js";/* empty css             */import"./index-COp_WJMj.js";import"./index--35j0Bzx.js";import"./index-blmbJU0z.js";/* empty css               */import"./index-Bd7GGWEs.js";import"./index-B4q2fu9y.js";import"./index-BFxtK-LZ.js";const L=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
=======
import{a as v}from"./utils-DWCsNc5l.js";import{r as g,b as w,d as f,t as x}from"./registry-DcejNBCz.js";import{_ as b}from"./dynamic-tag-CH7Ufq3Q.js";import{i as S,a as $}from"./attr-tag-DphMQldM.js";import{_ as V}from"./index-nf6m5bqI.js";import{_ as s}from"./render-tag-BBOJ9dEX.js";import{_ as h}from"./index-DYoWXX1P.js";import{_ as q}from"./const-element-Bq6J7aqh.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";/* empty css                    */import"./index-CkvNWpCJ.js";import"./index-CenZB3al.js";/* empty css             */import"./index-B0OhA0dc.js";import"./index--35j0Bzx.js";import"./index-blmbJU0z.js";/* empty css               */import"./index-BTDstafN.js";import"./index-BD23cSOe.js";import"./index-DJ8iNkD3.js";const L=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
>>>>>>> 0dd633d3f26a93f2dac2c5dddbe8a62ca57c0af5:docs/assets/drawer-dialog.stories-BzYSdZ3D.js
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
`;class Y extends Marko.Component{setExpandedState(o){o!==this.state.expanded&&(this.state.expanded=o,o?this.emit("expanded"):this.emit("collapsed"))}handleExpand(){this.setExpandedState(!this.state.expanded)}handleScroll(){this.setExpandedState(!0)}handleTouchStart(o){const e=o.changedTouches;this.touches=[];for(let t=0;t<e.length;t++){const{identifier:a,pageY:i}=e[t];this.touches.push({identifier:a,pageY:i})}}handleTouchMove(o){if(this.touches.length)for(let e=0;e<o.changedTouches.length;e++){const t=o.changedTouches[e],a=this.touches.findIndex(n=>n.identifier===t.identifier),i=t.pageY-this.touches[a].pageY;i>30?(this.state.expanded?this.setExpandedState(!1):this.getComponent("dialog").state.open=!1,this.handleTouchEnd(o)):i<-30&&(this.setExpandedState(!0),this.handleTouchEnd(o))}}handleTouchEnd(o){for(let e=0;e<o.changedTouches.length;e++){const t=o.changedTouches[e],a=this.touches.findIndex(i=>i.identifier===t.identifier);a>-1&&this.touches.splice(a,1)}}onMount(){this.touches=[]}onInput(o){this.state={expanded:o.expanded||!1}}}const _="xXHbgy5g",c=x(_);g.r(_,()=>c);const I=Y;c._=w(function(r,o,e,t,a,i){const{class:n,noHandle:p,renderBody:A,a11yMaximizeText:F="Maximize Drawer",a11yMinimizeText:W="Minimize Drawer",...R}=r,U=a.expanded?W:F;s(V,S(()=>(p||$("top",{renderBody:y=>{y.e("button",{"aria-label":U,type:"button",class:"drawer-dialog__handle"},"0",t,0,0,{onclick:e.d("click","handleExpand",!1),ontouchstart:e.d("touchstart","handleTouchStart",!1),ontouchmove:e.d("touchmove","handleTouchMove",!1),ontouchend:e.d("touchend","handleTouchEnd",!1),ontouchcancel:e.d("touchcancel","handleTouchEnd",!1)})}}),y=>{b(y,A,null,null,null,null,e,"1")}),{...R,classPrefix:"drawer-dialog",class:[n,"drawer-dialog--mask-fade-slow"],windowClass:["drawer-dialog__window","drawer-dialog__window--slide",a.expanded&&"drawer-dialog__window--expanded"],top:void 0}),o,e,"@dialog",[["scroll","handleScroll",!1],["open","emit",!1,["open"]],["close","emit",!1,["close"]]])},{t:_},I);c.Component=f(I,c._);const k="3nyDoHkx",m=x(k),X=m;g.r(k,()=>m);const H={onCreate(){this.state={open:!1}},openDrawer(){this.state.open=!0},closeDrawer(){this.state.open=!1,this.emit("close",arguments)}};m._=w(function(r,o,e,t,a,i){s(c,{a11yCloseText:"Close drawer",open:a.open,...r,renderBody:n=>{b(n,r.renderBody,null,null,null,null,e,"1")}},o,e,"0",[["close","closeDrawer",!1],["expanded","emit",!1,["expanded"]],["collapsed","emit",!1,["collapsed"]],["open","emit",!1,["open"]]]),s(h,{renderBody:n=>{n.t("Open drawer",t)}},o,e,"2",[["click","openDrawer",!1]])},{t:k},H);m.Component=f(H,m._);const j=`export interface Input {
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
`,T="XCcCGavh",u=x(T),G=q("p",null,1).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),P=q("p",null,1).e("a",{href:"http://www.ebay.com"},1).t("www.ebay.com");g.r(T,()=>u);const O={onCreate(){this.state={open:!1}},openDrawer(){this.state.open=!0},closeDrawer(){this.state.open=!1,this.emit("close",arguments)}};u._=w(function(r,o,e,t,a,i){s(c,S(()=>($("footer",{renderBody:n=>{s(h,{renderBody:p=>{p.t("Cancel",t)}},n,e,"1",[["click","closeDrawer",!1]]),s(h,{priority:"primary",renderBody:p=>{p.t("Confirm",t)}},n,e,"2",[["click","closeDrawer",!1]])}}),n=>{b(n,r.renderBody,null,null,null,null,e,"3"),n.n(G,t),n.n(P,t)}),{a11yCloseText:"Close drawer",open:a.open,...r,footer:void 0}),o,e,"0",[["close","closeDrawer",!1],["expanded","emit",!1,["expanded"]],["collapsed","emit",!1,["collapsed"]],["open","emit",!1,["open"]]]),s(h,{renderBody:n=>{n.t("Open drawer",t)}},o,e,"7",[["click","openDrawer",!1]])},{t:T},O);u.Component=f(O,u._);const J=`export interface Input {
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
`,we={title:"dialogs/ebay-drawer-dialog",component:X,parameters:{docs:{description:{component:L}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is open.",table:{disable:!0}},noHandle:{type:"boolean",control:{type:"boolean"},description:"Whether handle will be shown or not."},expanded:{type:"boolean",control:{type:"boolean"},description:"Whether the drawer is expanded to full height or max 50%"},closeButtonText:{control:{type:"text"},description:"If set, then will show this text instead of a close button"},focus:{control:{type:"text"},description:"An id for an element which will receive focus when the drawer opens (defaults to close button)."},closeFocus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened"},a11yCloseText:{control:{type:"text"},description:"A11y text for close button and mask."},a11yMinimizeText:{control:{type:"text"},description:"A11y text for draggable handle when drawer is maximized and clicking handle will minimize the drawer."},a11yMaximizeText:{control:{type:"text"},description:"A11y text for draggable handle when drawer is minimized and clicking handle will maximize the drawer."},header:{name:"@header",table:{category:"@attribute tags"}},footer:{name:"@footer",table:{category:"@attribute tags"}},onOpen:{action:"on-open",description:"Triggered on drawer opened",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered on drawer closed. Triggered also when user drags down on handle (touch only) when drawer is not expanded",table:{category:"Events",defaultValue:{summary:""}}},onExpanded:{action:"on-expanded",description:"drawer expanded to full page height. Event is triggerd on drag up of handle (touch only), clicks, or when user scrolls in content when dialog is not expanded",table:{category:"Events",defaultValue:{summary:""}}},onCollapsed:{action:"on-collapsed",description:"drawer collapsed back to max 50%. Event is triggerd on drags down of handle (touch only) or clicks when dialog is expanded",table:{category:"Events",defaultValue:{summary:""}}}}},d=r=>({input:v(r)});d.args={header:{renderBody:"Heading Text"},renderBody:"Body Content",a11yMinimizeText:"Minimize Drawer",a11yMaximizeText:"Maximize Drawer"};d.parameters={docs:{source:{code:j}}};const l=r=>({component:u,input:v(r)});l.args={header:{renderBody:"Heading Text"},renderBody:"Body Content",a11yMinimizeText:"Minimize Drawer",a11yMaximizeText:"Maximize Drawer"};l.parameters={docs:{source:{code:J}}};var C,B,D;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(D=(B=d.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var E,M,z;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  component: withFooter,
  input: addRenderBodies(args)
})`,...(z=(M=l.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};const fe=["Standard","WithFooter"];export{d as Standard,l as WithFooter,fe as __namedExportsOrder,we as default};
