import{a as $}from"./utils-NX-dnf4r.js";import{r as b,b as h,d as _,t as x}from"./registry-EgEQwbXk.js";import{_ as u}from"./dynamic-tag-7vXwaVzE.js";import{_ as k}from"./self-iterator-6yU_KG2T.js";import{_ as I}from"./v-element-wxdcHeY-.js";import{_ as B}from"./index-IxOvub0x.js";import{_ as s}from"./render-tag-_0PNNh6Y.js";import{_ as O}from"./index-6Ovri2v7.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";/* empty css               */import"./index-zvV8HPzg.js";import"./index-eX8aiyBr.js";import"./index-rIGlTtcv.js";/* empty css             */import"./index-XA7SOYvr.js";import"./index-XjwwBzg5.js";/* empty css                    */import"./index-MJalx9GY.js";import"./index-VGoHc-V3.js";import"./preserve-attrs-lolIpBRv.js";import"./index-ERL0bCNR.js";const Q=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,d="6eDQvQ0j",r=x(d);b.r(d,()=>r);const T={};r._=h(function(o,l,t,a,p,D){var e=a.getElId("alert-dialog-confirm"),c=a.getElId("alert-dialog-main");const{class:C,confirmText:v,...E}=o;s(O,{...E,role:"alertdialog",classPrefix:"alert-dialog",ignoreEscape:!0,mainId:c,buttonPosition:"hidden",focus:e,class:[C,"alert-dialog--mask-fade"],windowClass:["alert-dialog__window alert-dialog__window--fade"],footer:{renderBody:q=>{s(B,{priority:"primary",ariaDescribedby:c,id:e,class:"alert-dialog__acknowledge",renderBody:S=>{S.t(v,a)}},q,t,"@confirm",[["click","emit",!1,["confirm"]]])},[Symbol.iterator]:k}},l,t,"0",[["open","emit",!1,["open"]],["close","emit",!1,["close"]]])},{t:d,i:!0},T);r.Component=_(T,r._);const m="3f5QmEug",i=x(m),R=i,U=I("p",null,"3",null,1,0).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");b.r(m,()=>i);const w={onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(){this.state.open=!1}};i._=h(function(o,l,t,a,p,D){s(r,{confirmText:o.confirmText||"Confirm",open:p.open,header:{renderBody:e=>{u(e,o.header.renderBody,null,null,null,null,t,"1")},[Symbol.iterator]:k},renderBody:e=>{u(e,o.renderBody,null,null,null,null,t,"2"),e.n(U,a)}},l,t,"0",[["confirm","closeDialog",!1]]),s(B,{renderBody:e=>{e.t("Open Dialog",a)}},l,t,"4",[["click","openDialog",!1]])},{t:m},w);i.Component=_(w,i._);const j=`export interface Input {
    confirmText?: string;
    renderBody?: Marko.Body;
    header: {
        renderBody?: Marko.Body;
    }
}

<ebay-alert-dialog
    confirmText=input.confirmText || 'Confirm'
    open=state.open
    on-confirm('closeDialog')
>
    <@header><\${input.header.renderBody}/></@header>
    <\${input.renderBody}/>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</ebay-alert-dialog>

<ebay-button on-click('openDialog')>Open Dialog</ebay-button>
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
`,A=o=>({input:$(o)}),le={title:"dialogs/ebay-alert-dialog",component:R,parameters:{docs:{description:{component:Q}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is open.",table:{disable:!0}},closeFocus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened"},"confirm-text":{control:{type:"text"},description:"Text for confirm button"},header:{name:"@header",table:{category:"@attribute tags"}}}},n=A.bind({});n.args={header:{renderBody:"Heading Text"},renderBody:"Body Content"};n.parameters={docs:{source:{code:j}}};var g,f,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const se=["Standard"];export{n as Standard,se as __namedExportsOrder,le as default};
