import{a as Q}from"./utils-DWCsNc5l.js";import{r as k,b as w,d as x,t as T}from"./registry-ZV7By7ZP.js";import{_ as a}from"./dynamic-tag-Dub0dLVC.js";import{i as C,a as c}from"./attr-tag-DphMQldM.js";import{_ as V}from"./const-element-BsegXDZ8.js";import{_ as E}from"./index-nOuvbWe2.js";import{_ as d}from"./render-tag-Buaq4gMc.js";import{_ as j}from"./index-C9lVL2zh.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";/* empty css               */import"./index-Z_0elAoW.js";import"./index-6wZqcE5l.js";import"./index-Z5IdgrQn.js";/* empty css             */import"./index-Bp_jZoBr.js";import"./index-blmbJU0z.js";/* empty css                    */import"./index-BazW8NNv.js";import"./index-B1rAQBUu.js";import"./index--35j0Bzx.js";const K=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,p="6eDQvQ0j",l=T(p);k.r(p,()=>l);const D={};l._=w(function(n,s,o,t,g,$){var e=t.getElId("alert-dialog-confirm"),y=t.getElId("alert-dialog-main");const{class:I,confirmText:f,confirm:O,renderBody:R,...S}=n,{renderBody:A,...M}=O||{};d(j,C(()=>(c("footer",{renderBody:m=>{d(E,{priority:"primary",ariaDescribedby:y,id:e,class:"alert-dialog__acknowledge",...M,renderBody:b=>{f?b.t(f,t):a(b,A,null,null,null,null,o,"1")}},m,o,"@confirm",[["click","emit",!1,["confirm"]]])}}),m=>{a(m,R,null,null,null,null,o,"2")}),{...S,role:"alertdialog",classPrefix:"alert-dialog",ignoreEscape:!0,mainId:y,buttonPosition:"hidden",focus:e,class:[I,"alert-dialog--mask-fade"],windowClass:["alert-dialog__window alert-dialog__window--fade"],footer:void 0}),s,o,"0",[["open","emit",!1,["open"]],["close","emit",!1,["close"]]])},{t:p,i:!0},D);l.Component=x(D,l._);const u="3f5QmEug",i=T(u),P=i,z=V("p",null,1).t("This 'alert' text should be 1-2 lines.");k.r(u,()=>i);const v={onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(){this.state.open=!1,this.emit("confirm")}};i._=w(function(n,s,o,t,g,$){d(l,C(()=>(c("header",{renderBody:e=>{a(e,n.header.renderBody,null,null,null,null,o,"1")}}),c("confirm",{renderBody:e=>{a(e,n.confirm.renderBody,null,null,null,null,o,"2")}}),e=>{a(e,n.renderBody,null,null,null,null,o,"3"),e.n(z,t)}),{open:g.open}),s,o,"0",[["open","emit",!1,["open"]],["close","emit",!1,["close"]],["confirm","closeDialog",!1]]),d(E,{renderBody:e=>{e.t("Open Alert Dialog",t)}},s,o,"5",[["click","openDialog",!1]])},{t:u},v);i.Component=x(v,i._);const F=`export interface Input {
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
`,H=n=>({input:Q(n)}),ce={title:"dialogs/ebay-alert-dialog",component:P,parameters:{docs:{description:{component:K}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is open.",table:{disable:!0}},closeFocus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened"},confirm:{name:"@confirm",table:{category:"@attribute tags"},description:"Render body will be text for OK button"},header:{name:"@header",table:{category:"@attribute tags"}},onOpen:{action:"on-open",description:"Triggered on dialog open",table:{category:"Events",defaultValue:{summary:""}}},onConfirm:{action:"on-confirm",description:"Triggered on dialog confirm button click",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered when dialog is closed",table:{category:"Events",defaultValue:{summary:""}}}}},r=H.bind({});r.args={header:{renderBody:"Alert!"},confirm:{renderBody:"OK"},renderBody:"You must acknowledge this alert to continue."};r.parameters={docs:{source:{code:F}}};var h,_,B;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(B=(_=r.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};const pe=["Standard"];export{r as Standard,pe as __namedExportsOrder,ce as default};
