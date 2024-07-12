import{t as b,r as f,b as y,d as k}from"./registry-B-klnak9.js";import{_ as w}from"./dynamic-tag-DQCvkDdb.js";import{_ as P}from"./index-B3D3pI-7.js";import{_ as s}from"./render-tag-BBOJ9dEX.js";import{i as $,a as I}from"./attr-tag-DphMQldM.js";import{_ as R}from"./index-MryZN6oq.js";import{b as M}from"./utils-DWCsNc5l.js";import{_ as U}from"./index-D5HGQBmw.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";/* empty css             */import"./index-blmbJU0z.js";/* empty css                    */import"./index-B7rF6VLM.js";import"./index-dBnCH2W1.js";/* empty css             */import"./index-C_i8Cqa-.js";import"./index--35j0Bzx.js";/* empty css               */import"./index-C49JgxGh.js";import"./index-ToiJ_C-0.js";import"./index-CyYHw8Hd.js";const W=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,u=6e3;class Y extends Marko.Component{_clearTimeout(){clearTimeout(this.timeout)}_setupTimeout(){this.state.open!==!1&&(this.timeout=setTimeout(()=>{this.state.open=!1},u))}onInput(a){this.state={open:a.open||this.state.open||!1}}onMount(){this._setupTimeout()}onUpdate(){this._setupTimeout()}onRender(){typeof window<"u"&&this._clearTimeout()}onDestroy(){this._clearTimeout()}onCreate(){this.eventSet=new Set,this.state={open:!1}}handleAction(){this._clearTimeout(),this.emit("action"),this.state.open=!1}handleFocus(){this._clearTimeout(),this.eventSet.add("focus")}handleBlur(){this.eventSet.delete("focus"),this.eventSet.size===0&&(this._clearTimeout(),this.timeout=setTimeout(()=>{this.state.open=!1},u))}handleMouseEnter(){this._clearTimeout(),this.eventSet.add("mouseOver")}handleMouseLeave(){this.eventSet.delete("mouseOver"),this.eventSet.size===0&&this.state.open===!0&&(this._clearTimeout(),this.timeout=setTimeout(()=>{this.state.open=!1},u))}handleClose(){this._clearTimeout(),this.state.open=!1,this.emit("close")}}const g="dHIFKlAb",r=b(g),_=r;f.r(g,()=>r);const D=Y;r._=y(function(o,a,t,n,i,v){const{action:e,class:K,layout:z,open:J,renderBody:V,...H}=o;s(R,$(()=>(e&&I("action",{renderBody:h=>{s(P,{renderBody:l=>{w(l,e.renderBody,null,null,null,null,t,"2"),l.be("span",{class:"clipped"},"3",n,null,1),l.t("- Access Key: ",n),l.t(e.accessKey,n),l.ee()}},h,t,"1",[["click","handleAction",!1],["focus","handleFocus",!1],["blur","handleBlur",!1]])}}),h=>{w(h,V,null,null,null,null,t,"4")}),{...H,open:i.open,isModal:!1,classPrefix:"snackbar-dialog",class:[K,"snackbar-dialog--transition"],windowClass:[z==="column"&&"snackbar-dialog__window--column"],buttonPosition:"hidden",transitionEl:"root",action:void 0}),a,t,"0",[["close","handleClose",!1],["open","emit",!1,["open"]],["mouseEnter","handleMouseEnter",!1],["mouseLeave","handleMouseLeave",!1]])},{t:g},D);r.Component=k(D,r._);const T="MQYvSs$l",c=b(T);f.r(T,()=>c);const L={onCreate(){this.state={open:!1}},handleOpen(){this.state.open=!0},handleClose(){this.state.open=!1,this.emit("close")}};c._=y(function(o,a,t,n,i,v){s(U,{renderBody:e=>{e.t("Open Default Snackbar",n)}},a,t,"0",[["click","handleOpen",!1]]),s(_,{open:i.open,...o,renderBody:e=>{e.t("This 'snackbar' text should be 1-2 lines.",n)}},a,t,"1",[["close","handleClose",!1],["open","emit",!1,["open"]]])},{t:T},L);c.Component=k(L,c._);const j=`export interface Input {
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
`,C="IYsXJgfe",p=b(C);f.r(C,()=>p);const F={onCreate(){this.state={open:!1}},handleOpen(){this.state.open=!0},handleClose(){this.state.open=!1,this.emit("close")}};p._=y(function(o,a,t,n,i,v){s(U,{renderBody:e=>{e.t("Open Action Snackbar",n)}},a,t,"0",[["click","handleOpen",!1]]),s(_,$(()=>(I("action",{accessKey:"U",renderBody:e=>{e.t("Undo",n)}}),e=>{e.t("This 'snackbar' text should be 1-2 lines.",n)}),{open:i.open,...o,action:void 0}),a,t,"1",[["close","handleClose",!1],["open","emit",!1,["open"]],["action","emit",!1,["action"]]])},{t:C},F);p.Component=k(F,p._);const G=`class {
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
`,ye={title:"dialogs/ebay-snackbar-dialog",component:_,parameters:{docs:{description:{component:W}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},table:{disable:!0}},layout:{type:"enum",control:{type:"radio"},options:["row","column"]},action:{name:"@action",description:"If present, shows an action button on snackbar",table:{category:"@attribute tags"}},onOpen:{action:"on-open",description:"Triggered on dialog opened",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered on dialog closed.",table:{category:"Events",defaultValue:{summary:""}}},onAction:{action:"on-action",description:"Triggered on action pressed",table:{category:"Events",defaultValue:{summary:""}}}}},d=M(c,j),m=M(p,G);var S,x,O;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:"buildExtensionTemplate(defaultTemplate, defaultTemplateCode)",...(O=(x=d.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var E,A,B;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:"buildExtensionTemplate(withActionTemplate, withActionTemplateCode)",...(B=(A=m.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const ke=["Default","WithAction"];export{d as Default,m as WithAction,ke as __namedExportsOrder,ye as default};
