import{a as V}from"./utils-DWCsNc5l.js";import{r as B,b as w,c as x,t as T}from"./registry-CtNeIPU8.js";import{_ as a}from"./dynamic-tag-HMZVE1pc.js";import{i as v,a as c}from"./attr-tag-DphMQldM.js";import{_ as K}from"./const-element-D4l_3TxL.js";import{_ as C}from"./index-C241jnEo.js";import{_ as s}from"./render-tag-mtfFSHEK.js";import{_ as P}from"./index-C2tRDPlM.js";import{_ as Y}from"./empty-component-BCB5DEsP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";/* empty css               */import"./index-BL5tj0GS.js";import"./index-DW9U_Ppe.js";import"./index-B6qYX52F.js";/* empty css             */import"./index-DN2d98YU.js";import"./index-CbT4wDAv.js";/* empty css                    */import"./index-Ca3E2DLc.js";import"./index-BCNhIFfA.js";import"./index-CxthRfyu.js";const j=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-alert-dialog
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS vBETA
    </span>
</h1>

Used to force the user to read an import message. The dialog will only be dismissed when the user presses the confirm button. This is the only way to close the dialog.

\`\`\`marko
<ebay-alert-dialog open alert-text="Confirm">
    <@header>Title</@header>
    <p>Hello some important info</p>
</ebay-alert-dialog>
\`\`\`

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/dialogs-ebay-alert-dialog)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/dialogs-ebay-alert-dialog)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-alert-dialog/examples)
`,p="SnAuIkam",d=T(p);B.r(p,()=>Y);const D={};d._=w(function(n,i,o,t,g,$){var e=t.getElId("alert-dialog-confirm"),y=t.getElId("alert-dialog-main");const{class:I,confirmText:f,confirm:O,renderBody:A,...R}=n,{renderBody:S,...M}=O||{};s(P,v(()=>(c("footer",{renderBody:m=>{s(C,{priority:"primary",ariaDescribedby:y,id:e,class:"alert-dialog__acknowledge",...M,renderBody:h=>{f?h.t(f,t):a(h,S,null,null,null,null,o,"1")}},m,o,"@confirm",[["click","emit",!1,["confirm"]]])}}),m=>{a(m,A,null,null,null,null,o,"2")}),{...R,role:"alertdialog",classPrefix:"alert-dialog",ignoreEscape:!0,mainId:y,buttonPosition:"hidden",focus:e,class:[I,"alert-dialog--mask-fade"],windowClass:["alert-dialog__window alert-dialog__window--fade"],footer:void 0}),i,o,"0",[["open","emit",!1,["open"]],["close","emit",!1,["close"]]])},{t:p,s:!0},D);d.Component=x(D,d._);const u="aLNQYnvl",l=T(u),z=K("p",null,1).t("This 'alert' text should be 1-2 lines.");B.r(u,()=>l);const E={onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(){this.state.open=!1,this.emit("confirm")}};l._=w(function(n,i,o,t,g,$){s(d,v(()=>(c("header",{renderBody:e=>{a(e,n.header.renderBody,null,null,null,null,o,"1")}}),c("confirm",{renderBody:e=>{a(e,n.confirm.renderBody,null,null,null,null,o,"2")}}),e=>{a(e,n.renderBody,null,null,null,null,o,"3"),e.n(z,t)}),{open:g.open,...n,header:void 0,confirm:void 0}),i,o,"0",[["open","emit",!1,["open"]],["close","emit",!1,["close"]],["confirm","closeDialog",!1]]),s(C,{renderBody:e=>{e.t("Open Alert Dialog",t)}},i,o,"5",[["click","openDialog",!1]])},{t:u},E);l.Component=x(E,l._);const F=`export interface Input {
    renderBody?: Marko.Body;
    header: {
        renderBody?: Marko.Body;
    }
    confirm: {
        renderBody?: Marko.Body;
    }
}

<ebay-alert-dialog
    open=state.open
    on-open('emit', 'open')
    on-close('emit', 'close')
    on-confirm('closeDialog')
    ...input
>
    <@header><\${input.header.renderBody}/></@header>
    <@confirm><\${input.confirm.renderBody}/></@confirm>
    <\${input.renderBody}/>
    <p>
        This 'alert' text should be 1-2 lines.
    </p>
</ebay-alert-dialog>

<ebay-button on-click('openDialog')>Open Alert Dialog</ebay-button>
class {
    declare state: {
        open: boolean;
    }

    onCreate() {
        this.state = { open: false };
    }
    openDialog() {
        this.state.open = true;
    }
    closeDialog() {
        this.state.open = false;
        this.emit('confirm')
    }
}
`,H=n=>({input:V(n)}),pe={title:"dialogs/ebay-alert-dialog",component:l,parameters:{docs:{description:{component:j}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is open.",table:{disable:!0}},closeFocus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened"},confirm:{name:"@confirm",table:{category:"@attribute tags"},description:"Render body will be text for OK button"},header:{name:"@header",table:{category:"@attribute tags"}},onOpen:{action:"on-open",description:"Triggered on dialog open",table:{category:"Events",defaultValue:{summary:""}}},onConfirm:{action:"on-confirm",description:"Triggered on dialog confirm button click",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered when dialog is closed",table:{category:"Events",defaultValue:{summary:""}}}}},r=H.bind({});r.args={header:{renderBody:"Alert!"},confirm:{renderBody:"OK"},renderBody:"You must acknowledge this alert to continue."};r.parameters={docs:{source:{code:F}}};var b,_,k;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(k=(_=r.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const ue=["Default"];export{r as Default,ue as __namedExportsOrder,pe as default};
