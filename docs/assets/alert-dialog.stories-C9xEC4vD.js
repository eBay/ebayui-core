<<<<<<< HEAD:docs/assets/alert-dialog.stories-N-1mtTiV.js
import{a as Q}from"./utils-DWCsNc5l.js";import{r as B,b as w,d as x,t as T}from"./registry-Cc025Aii.js";import{_ as a}from"./dynamic-tag-BtS2B08A.js";import{i as C,a as c}from"./attr-tag-DphMQldM.js";import{_ as V}from"./const-element-VPRvcpko.js";import{_ as D}from"./index-CkDMY5Dc.js";import{_ as s}from"./render-tag-BBOJ9dEX.js";import{_ as j}from"./index-GnsTVIQr.js";import{_ as K}from"./empty-component-BCB5DEsP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";/* empty css               */import"./index-Bd7GGWEs.js";import"./index-B4q2fu9y.js";import"./index-oHjhF9YT.js";/* empty css             */import"./index-BFxtK-LZ.js";import"./index-blmbJU0z.js";/* empty css                    */import"./index-kmWx9eiN.js";import"./index-COp_WJMj.js";import"./index--35j0Bzx.js";const P=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
=======
import{a as Q}from"./utils-DWCsNc5l.js";import{r as B,b as w,d as x,t as T}from"./registry-DcejNBCz.js";import{_ as a}from"./dynamic-tag-CH7Ufq3Q.js";import{i as C,a as c}from"./attr-tag-DphMQldM.js";import{_ as V}from"./const-element-Bq6J7aqh.js";import{_ as D}from"./index-DYoWXX1P.js";import{_ as s}from"./render-tag-BBOJ9dEX.js";import{_ as j}from"./index-nf6m5bqI.js";import{_ as K}from"./empty-component-BCB5DEsP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";/* empty css               */import"./index-BTDstafN.js";import"./index-BD23cSOe.js";import"./index-CenZB3al.js";/* empty css             */import"./index-DJ8iNkD3.js";import"./index-blmbJU0z.js";/* empty css                    */import"./index-CkvNWpCJ.js";import"./index-B0OhA0dc.js";import"./index--35j0Bzx.js";const P=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
>>>>>>> 0dd633d3f26a93f2dac2c5dddbe8a62ca57c0af5:docs/assets/alert-dialog.stories-C9xEC4vD.js
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
`,p="6eDQvQ0j",d=T(p);B.r(p,()=>K);const E={};d._=w(function(n,l,o,t,g,$){var e=t.getElId("alert-dialog-confirm"),y=t.getElId("alert-dialog-main");const{class:I,confirmText:f,confirm:O,renderBody:R,...A}=n,{renderBody:S,...M}=O||{};s(j,C(()=>(c("footer",{renderBody:m=>{s(D,{priority:"primary",ariaDescribedby:y,id:e,class:"alert-dialog__acknowledge",...M,renderBody:b=>{f?b.t(f,t):a(b,S,null,null,null,null,o,"1")}},m,o,"@confirm",[["click","emit",!1,["confirm"]]])}}),m=>{a(m,R,null,null,null,null,o,"2")}),{...A,role:"alertdialog",classPrefix:"alert-dialog",ignoreEscape:!0,mainId:y,buttonPosition:"hidden",focus:e,class:[I,"alert-dialog--mask-fade"],windowClass:["alert-dialog__window alert-dialog__window--fade"],footer:void 0}),l,o,"0",[["open","emit",!1,["open"]],["close","emit",!1,["close"]]])},{t:p,s:!0},E);d.Component=x(E,d._);const u="3f5QmEug",i=T(u),z=i,F=V("p",null,1).t("This 'alert' text should be 1-2 lines.");B.r(u,()=>i);const v={onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(){this.state.open=!1,this.emit("confirm")}};i._=w(function(n,l,o,t,g,$){s(d,C(()=>(c("header",{renderBody:e=>{a(e,n.header.renderBody,null,null,null,null,o,"1")}}),c("confirm",{renderBody:e=>{a(e,n.confirm.renderBody,null,null,null,null,o,"2")}}),e=>{a(e,n.renderBody,null,null,null,null,o,"3"),e.n(F,t)}),{open:g.open,...n,header:void 0,confirm:void 0}),l,o,"0",[["open","emit",!1,["open"]],["close","emit",!1,["close"]],["confirm","closeDialog",!1]]),s(D,{renderBody:e=>{e.t("Open Alert Dialog",t)}},l,o,"5",[["click","openDialog",!1]])},{t:u},v);i.Component=x(v,i._);const H=`export interface Input {
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
`,U=n=>({input:Q(n)}),ue={title:"dialogs/ebay-alert-dialog",component:z,parameters:{docs:{description:{component:P}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is open.",table:{disable:!0}},closeFocus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened"},confirm:{name:"@confirm",table:{category:"@attribute tags"},description:"Render body will be text for OK button"},header:{name:"@header",table:{category:"@attribute tags"}},onOpen:{action:"on-open",description:"Triggered on dialog open",table:{category:"Events",defaultValue:{summary:""}}},onConfirm:{action:"on-confirm",description:"Triggered on dialog confirm button click",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered when dialog is closed",table:{category:"Events",defaultValue:{summary:""}}}}},r=U.bind({});r.args={header:{renderBody:"Alert!"},confirm:{renderBody:"OK"},renderBody:"You must acknowledge this alert to continue."};r.parameters={docs:{source:{code:H}}};var h,_,k;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(k=(_=r.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const ge=["Default"];export{r as Default,ge as __namedExportsOrder,ue as default};
