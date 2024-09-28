import{t as b,r as f,b as y,c as k}from"./registry-CtNeIPU8.js";import{_ as v}from"./dynamic-tag-HMZVE1pc.js";import{_ as H}from"./index-qNYgSJLs.js";import{_ as i}from"./render-tag-mtfFSHEK.js";import{i as B,a as $}from"./attr-tag-DphMQldM.js";import{_ as P}from"./index-C2tRDPlM.js";import{b as I}from"./utils-DWCsNc5l.js";import{_ as M}from"./index-C241jnEo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";/* empty css             */import"./index-CbT4wDAv.js";/* empty css                    */import"./index-Ca3E2DLc.js";import"./index-B6qYX52F.js";/* empty css             */import"./index-BCNhIFfA.js";import"./index-CxthRfyu.js";/* empty css               */import"./index-BL5tj0GS.js";import"./index-DW9U_Ppe.js";import"./index-DN2d98YU.js";const R=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-snackbar-dialog
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.0.0
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
`,u=6e3;class W extends Marko.Component{_clearTimeout(){clearTimeout(this.timeout)}_setupTimeout(){this.state.open!==!1&&(this.timeout=setTimeout(()=>{this.state.open=!1},u))}onInput(a){this.state={open:a.open||this.state.open||!1}}onMount(){this._setupTimeout()}onUpdate(){this._setupTimeout()}onRender(){typeof window<"u"&&this._clearTimeout()}onDestroy(){this._clearTimeout()}onCreate(){this.eventSet=new Set,this.state={open:!1}}handleAction(){this._clearTimeout(),this.emit("action"),this.state.open=!1}handleFocus(){this._clearTimeout(),this.eventSet.add("focus")}handleBlur(){this.eventSet.delete("focus"),this.eventSet.size===0&&(this._clearTimeout(),this.timeout=setTimeout(()=>{this.state.open=!1},u))}handleMouseEnter(){this._clearTimeout(),this.eventSet.add("mouseOver")}handleMouseLeave(){this.eventSet.delete("mouseOver"),this.eventSet.size===0&&this.state.open===!0&&(this._clearTimeout(),this.timeout=setTimeout(()=>{this.state.open=!1},u))}handleClose(){this._clearTimeout(),this.state.open=!1,this.emit("close")}}const g="dHIFKlAb",o=b(g);f.r(g,()=>o);const U=W;o._=y(function(s,a,t,n,l,C){const{action:e,class:L,layout:z,open:G,renderBody:F,...V}=s;i(P,B(()=>(e&&$("action",{renderBody:h=>{i(H,{renderBody:r=>{v(r,e.renderBody,null,null,null,null,t,"2"),r.be("span",{class:"clipped"},"3",n,null,1),r.t("- Access Key: ",n),r.t(e.accessKey,n),r.ee()}},h,t,"1",[["click","handleAction",!1],["focus","handleFocus",!1],["blur","handleBlur",!1]])}}),h=>{v(h,F,null,null,null,null,t,"4")}),{...V,open:l.open,isModal:!1,classPrefix:"snackbar-dialog",class:[L,"snackbar-dialog--transition"],windowClass:[z==="column"&&"snackbar-dialog__window--column"],buttonPosition:"hidden",transitionEl:"root",action:void 0}),a,t,"0",[["close","handleClose",!1],["open","emit",!1,["open"]],["mouseEnter","handleMouseEnter",!1],["mouseLeave","handleMouseLeave",!1]])},{t:g},U);o.Component=k(U,o._);const _="MQYvSs$l",c=b(_);f.r(_,()=>c);const D={onCreate(){this.state={open:!1}},handleOpen(){this.state.open=!0},handleClose(){this.state.open=!1,this.emit("close")}};c._=y(function(s,a,t,n,l,C){i(M,{renderBody:e=>{e.t("Open Default Snackbar",n)}},a,t,"0",[["click","handleOpen",!1]]),i(o,{open:l.open,...s,renderBody:e=>{e.t("This 'snackbar' text should be 1-2 lines.",n)}},a,t,"1",[["close","handleClose",!1],["open","emit",!1,["open"]]])},{t:_},D);c.Component=k(D,c._);const Y=`export interface Input {
    snacktext: string
}

class {
    declare state: {
        open: boolean
    };

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
    This 'snackbar' text should be 1-2 lines.
</ebay-snackbar-dialog>
`,T="IYsXJgfe",p=b(T);f.r(T,()=>p);const K={onCreate(){this.state={open:!1}},handleOpen(){this.state.open=!0},handleClose(){this.state.open=!1,this.emit("close")}};p._=y(function(s,a,t,n,l,C){i(M,{renderBody:e=>{e.t("Open Action Snackbar",n)}},a,t,"0",[["click","handleOpen",!1]]),i(o,B(()=>($("action",{accessKey:"U",renderBody:e=>{e.t("Undo",n)}}),e=>{e.t("This 'snackbar' text should be 1-2 lines.",n)}),{open:l.open,...s,action:void 0}),a,t,"1",[["close","handleClose",!1],["open","emit",!1,["open"]],["action","emit",!1,["action"]]])},{t:T},K);p.Component=k(K,p._);const j=`class {
    declare state: {
        open: boolean;
    };

    onCreate() {
        this.state = { open: false };
    }

    handleOpen() {
        this.state.open = true;
    }

    handleClose() {
        this.state.open = false;
        this.emit("close");
    }
}
<ebay-button on-click("handleOpen")>
    Open Action Snackbar
</ebay-button>
<ebay-snackbar-dialog
    open=state.open
    on-close("handleClose")
    on-open("emit", "open")
    on-action("emit", "action")
    ...input
>
    <@action accessKey="U">
        Undo
    </@action>
    This 'snackbar' text should be 1-2 lines.
</ebay-snackbar-dialog>
`,fe={title:"dialogs/ebay-snackbar-dialog",component:o,parameters:{docs:{description:{component:R}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},table:{disable:!0}},layout:{type:"enum",control:{type:"radio"},options:["row","column"]},action:{name:"@action",description:"If present, shows an action button on snackbar",table:{category:"@attribute tags"}},onOpen:{action:"on-open",description:"Triggered on dialog opened",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered on dialog closed.",table:{category:"Events",defaultValue:{summary:""}}},onAction:{action:"on-action",description:"Triggered on action pressed",table:{category:"Events",defaultValue:{summary:""}}}}},d=I(c,Y),m=I(p,j);var w,S,x;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:"buildExtensionTemplate(defaultTemplate, defaultTemplateCode)",...(x=(S=d.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var O,E,A;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:"buildExtensionTemplate(withActionTemplate, withActionTemplateCode)",...(A=(E=m.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};const ye=["Default","WithAction"];export{d as Default,m as WithAction,ye as __namedExportsOrder,fe as default};
