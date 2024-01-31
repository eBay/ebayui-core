import{a as O}from"./utils-NX-dnf4r.js";import{r as h,b,d as _,t as k}from"./registry-zqrnEiYK.js";import{_ as g}from"./dynamic-tag-4Gch17f1.js";import{_ as x}from"./self-iterator-6yU_KG2T.js";import{_ as v}from"./v-element-BABk39ab.js";import{_ as B}from"./index-tjucyUeZ.js";import{_ as s}from"./render-tag-_0PNNh6Y.js";import{_ as A}from"./index-CCP4HZWQ.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";/* empty css               */import"./index-XUhq6uHT.js";import"./index-q7KQv1ry.js";import"./index-dCAZr4YS.js";/* empty css             */import"./index-i1smj9EI.js";import"./index-XjwwBzg5.js";/* empty css                    */import"./index-0sOjhOVp.js";import"./index-DimFlsuh.js";import"./preserve-attrs-PKQRsRTw.js";import"./index-ERL0bCNR.js";const K=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,d="6eDQvQ0j",r=k(d);h.r(d,()=>r);const T={};r._=b(function(o,l,t,a,p,D){var e=a.getElId("alert-dialog-confirm"),c=a.getElId("alert-dialog-main");const{class:C,confirmText:E,...S}=o;s(A,{...S,role:"alertdialog",classPrefix:"alert-dialog",ignoreEscape:!0,mainId:c,buttonPosition:"hidden",focus:e,class:[C,"alert-dialog--mask-fade"],windowClass:["alert-dialog__window alert-dialog__window--fade"],footer:{renderBody:$=>{s(B,{priority:"primary",ariaDescribedby:c,id:e,class:"alert-dialog__acknowledge",renderBody:I=>{I.t(E,a)}},$,t,"@confirm",[["click","emit",!1,["confirm"]]])},[Symbol.iterator]:x}},l,t,"0",[["open","emit",!1,["open"]],["close","emit",!1,["close"]]])},{t:d,i:!0},T);r.Component=_(T,r._);const m="3f5QmEug",i=k(m),Q=i,R=v("p",null,"3",null,1,0).t("This 'alert' text should be 1-2 lines.");h.r(m,()=>i);const w={onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(){this.state.open=!1}};i._=b(function(o,l,t,a,p,D){s(r,{confirmText:o.confirmText||"OK",open:p.open,header:{renderBody:e=>{g(e,o.header.renderBody,null,null,null,null,t,"1")},[Symbol.iterator]:x},renderBody:e=>{g(e,o.renderBody,null,null,null,null,t,"2"),e.n(R,a)}},l,t,"0",[["confirm","closeDialog",!1]]),s(B,{renderBody:e=>{e.t("Open Alert Dialog",a)}},l,t,"4",[["click","openDialog",!1]])},{t:m},w);i.Component=_(w,i._);const j=`export interface Input {
    confirmText?: string;
    renderBody?: Marko.Body;
    header: {
        renderBody?: Marko.Body;
    }
}

<ebay-alert-dialog
    confirmText=input.confirmText || 'OK'
    open=state.open
    on-confirm('closeDialog')
>
    <@header><\${input.header.renderBody}/></@header>
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
    }
}
`,M=o=>({input:O(o)}),le={title:"dialogs/ebay-alert-dialog",component:Q,parameters:{docs:{description:{component:K}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is open.",table:{disable:!0}},closeFocus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened"},"confirm-text":{control:{type:"text"},description:"Text for OK button"},header:{name:"@header",table:{category:"@attribute tags"}}}},n=M.bind({});n.args={header:{renderBody:"Alert!"},renderBody:"You must acknowledge this alert to continue."};n.parameters={docs:{source:{code:j}}};var y,u,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const se=["Standard"];export{n as Standard,se as __namedExportsOrder,le as default};
