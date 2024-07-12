import{a as v}from"./utils-DWCsNc5l.js";import{r as y,b as g,d as f,t as x}from"./registry-B-klnak9.js";import{_ as b}from"./dynamic-tag-DQCvkDdb.js";import{i as S,a as $}from"./attr-tag-DphMQldM.js";import{_ as R}from"./index-MryZN6oq.js";import{_ as s}from"./render-tag-BBOJ9dEX.js";import{_ as h}from"./index-D5HGQBmw.js";import{_ as q}from"./const-element-Usj7mXQw.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";/* empty css                    */import"./index-B7rF6VLM.js";import"./index-dBnCH2W1.js";/* empty css             */import"./index-C_i8Cqa-.js";import"./index--35j0Bzx.js";import"./index-blmbJU0z.js";/* empty css               */import"./index-C49JgxGh.js";import"./index-ToiJ_C-0.js";import"./index-CyYHw8Hd.js";const V=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;class Y extends Marko.Component{setExpandedState(o){o!==this.state.expanded&&(this.state.expanded=o,o?this.emit("expanded"):this.emit("collapsed"))}handleExpand(){this.setExpandedState(!this.state.expanded)}handleScroll(){this.setExpandedState(!0)}handleTouchStart(o){const e=o.changedTouches;this.touches=[];for(let t=0;t<e.length;t++){const{identifier:a,pageY:i}=e[t];this.touches.push({identifier:a,pageY:i})}}handleTouchMove(o){if(this.touches.length)for(let e=0;e<o.changedTouches.length;e++){const t=o.changedTouches[e],a=this.touches.findIndex(n=>n.identifier===t.identifier),i=t.pageY-this.touches[a].pageY;i>30?(this.state.expanded?this.setExpandedState(!1):this.getComponent("dialog").state.open=!1,this.handleTouchEnd(o)):i<-30&&(this.setExpandedState(!0),this.handleTouchEnd(o))}}handleTouchEnd(o){for(let e=0;e<o.changedTouches.length;e++){const t=o.changedTouches[e],a=this.touches.findIndex(i=>i.identifier===t.identifier);a>-1&&this.touches.splice(a,1)}}onMount(){this.touches=[]}onInput(o){this.state={expanded:o.expanded||!1}}}const _="CNUXYlhk",c=x(_);y.r(_,()=>c);const I=Y;c._=g(function(r,o,e,t,a,i){const{class:n,noHandle:p,renderBody:F,a11yMaximizeText:H="Maximize Drawer",a11yMinimizeText:U="Minimize Drawer",...W}=r,L=a.expanded?U:H;s(R,S(()=>(p||$("top",{renderBody:w=>{w.e("button",{"aria-label":L,type:"button",class:"drawer-dialog__handle"},"0",t,0,0,{onclick:e.d("click","handleExpand",!1),ontouchstart:e.d("touchstart","handleTouchStart",!1),ontouchmove:e.d("touchmove","handleTouchMove",!1),ontouchend:e.d("touchend","handleTouchEnd",!1),ontouchcancel:e.d("touchcancel","handleTouchEnd",!1)})}}),w=>{b(w,F,null,null,null,null,e,"1")}),{...W,classPrefix:"drawer-dialog",class:[n,"drawer-dialog--mask-fade-slow"],windowClass:["drawer-dialog__window","drawer-dialog__window--slide",a.expanded&&"drawer-dialog__window--expanded"],top:void 0}),o,e,"@dialog",[["scroll","handleScroll",!1],["open","emit",!1,["open"]],["close","emit",!1,["close"]]])},{t:_},I);c.Component=f(I,c._);const k="xubSMHwl",m=x(k),N=m;y.r(k,()=>m);const O={onCreate(){this.state={open:!1}},openDrawer(){this.state.open=!0},closeDrawer(){this.state.open=!1,this.emit("close",arguments)}};m._=g(function(r,o,e,t,a,i){s(c,{a11yCloseText:"Close drawer",open:a.open,...r,renderBody:n=>{b(n,r.renderBody,null,null,null,null,e,"1")}},o,e,"0",[["close","closeDrawer",!1],["expanded","emit",!1,["expanded"]],["collapsed","emit",!1,["collapsed"]],["open","emit",!1,["open"]]]),s(h,{renderBody:n=>{n.t("Open drawer",t)}},o,e,"2",[["click","openDrawer",!1]])},{t:k},O);m.Component=f(O,m._);const P=`export interface Input {
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
`,T="IKPwLvNe",u=x(T),j=q("p",null,1).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),K=q("p",null,1).e("a",{href:"http://www.ebay.com"},1).t("www.ebay.com");y.r(T,()=>u);const A={onCreate(){this.state={open:!1}},openDrawer(){this.state.open=!0},closeDrawer(){this.state.open=!1,this.emit("close",arguments)}};u._=g(function(r,o,e,t,a,i){s(c,S(()=>($("footer",{renderBody:n=>{s(h,{renderBody:p=>{p.t("Cancel",t)}},n,e,"1",[["click","closeDrawer",!1]]),s(h,{priority:"primary",renderBody:p=>{p.t("Confirm",t)}},n,e,"2",[["click","closeDrawer",!1]])}}),n=>{b(n,r.renderBody,null,null,null,null,e,"3"),n.n(j,t),n.n(K,t)}),{a11yCloseText:"Close drawer",open:a.open,...r,footer:void 0}),o,e,"0",[["close","closeDrawer",!1],["expanded","emit",!1,["expanded"]],["collapsed","emit",!1,["collapsed"]],["open","emit",!1,["open"]]]),s(h,{renderBody:n=>{n.t("Open drawer",t)}},o,e,"7",[["click","openDrawer",!1]])},{t:T},A);u.Component=f(A,u._);const X=`export interface Input {
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
`,ge={title:"dialogs/ebay-drawer-dialog",component:N,parameters:{docs:{description:{component:V}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is open.",table:{disable:!0}},noHandle:{type:"boolean",control:{type:"boolean"},description:"Whether handle will be shown or not."},expanded:{type:"boolean",control:{type:"boolean"},description:"Whether the drawer is expanded to full height or max 50%"},closeButtonText:{control:{type:"text"},description:"If set, then will show this text instead of a close button"},focus:{control:{type:"text"},description:"An id for an element which will receive focus when the drawer opens (defaults to close button)."},closeFocus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened"},a11yCloseText:{control:{type:"text"},description:"A11y text for close button and mask."},a11yMinimizeText:{control:{type:"text"},description:"A11y text for draggable handle when drawer is maximized and clicking handle will minimize the drawer."},a11yMaximizeText:{control:{type:"text"},description:"A11y text for draggable handle when drawer is minimized and clicking handle will maximize the drawer."},header:{name:"@header",table:{category:"@attribute tags"}},footer:{name:"@footer",table:{category:"@attribute tags"}},onOpen:{action:"on-open",description:"Triggered on drawer opened",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered on drawer closed. Triggered also when user drags down on handle (touch only) when drawer is not expanded",table:{category:"Events",defaultValue:{summary:""}}},onExpanded:{action:"on-expanded",description:"drawer expanded to full page height. Event is triggerd on drag up of handle (touch only), clicks, or when user scrolls in content when dialog is not expanded",table:{category:"Events",defaultValue:{summary:""}}},onCollapsed:{action:"on-collapsed",description:"drawer collapsed back to max 50%. Event is triggerd on drags down of handle (touch only) or clicks when dialog is expanded",table:{category:"Events",defaultValue:{summary:""}}}}},d=r=>({input:v(r)});d.args={header:{renderBody:"Heading Text"},renderBody:"Body Content",a11yMinimizeText:"Minimize Drawer",a11yMaximizeText:"Maximize Drawer"};d.parameters={docs:{source:{code:P}}};const l=r=>({component:u,input:v(r)});l.args={header:{renderBody:"Heading Text"},renderBody:"Body Content",a11yMinimizeText:"Minimize Drawer",a11yMaximizeText:"Maximize Drawer"};l.parameters={docs:{source:{code:X}}};var C,B,D;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(D=(B=d.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var E,M,z;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  component: withFooter,
  input: addRenderBodies(args)
})`,...(z=(M=l.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};const fe=["Standard","WithFooter"];export{d as Standard,l as WithFooter,fe as __namedExportsOrder,ge as default};
