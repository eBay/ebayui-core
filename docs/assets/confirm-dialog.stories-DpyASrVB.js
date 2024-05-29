import{a as J}from"./utils-DWCsNc5l.js";import{r as x,b as w,d as I,t as T}from"./registry-DcejNBCz.js";import{_ as t}from"./dynamic-tag-CH7Ufq3Q.js";import{i as E,a as y}from"./attr-tag-DphMQldM.js";import{_ as U}from"./const-element-Bq6J7aqh.js";import{_ as b}from"./index-Ds0knl6D.js";import{_ as d}from"./render-tag-BBOJ9dEX.js";import{_ as W}from"./index-Dmk2W4le.js";import{_ as X}from"./empty-component-BCB5DEsP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";/* empty css               */import"./index-AW2S7xMy.js";import"./index-D4BJokV4.js";import"./index-CMkz4cmR.js";/* empty css             */import"./index-BfyIUMHf.js";import"./index-blmbJU0z.js";/* empty css                    */import"./index-DRqbb5JY.js";import"./index-B0OhA0dc.js";import"./index--35j0Bzx.js";const Y=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-confirm-dialog
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS vBETA
    </span>
</h1>

Used to force the user to make a choice to either confirm or reject. Cannot be closed unless one of the two options are pressed. Pressing escape will trigger reject.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/dialogs-ebay-confirm-dialog)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/dialogs-ebay-confirm-dialog)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-confirm-dialog/examples)
`,h="1PzPJOXE",g=T(h);var q=["destructive"];x.r(h,()=>X);const $={};g._=w(function(n,p,e,r,_,D){var u=r.getElId("confirm-dialog-cancel"),i=r.getElId("confirm-dialog-confirm"),s=r.getElId("confirm-dialog-main");const{confirmCtaVariant:l,rejectText:o,confirmText:j,class:O,reject:V,confirm:A,renderBody:P,...M}=n,{renderBody:S,...z}=A||{},{renderBody:F,...H}=V||{};d(W,E(()=>(y("footer",{renderBody:f=>{d(b,{id:u,class:"confirm-dialog__reject",...H,renderBody:c=>{o?c.t(o,r):t(c,F,null,null,null,null,e,"2")}},f,e,"1",[["click","emit",!1,["reject"]]]),d(b,{priority:"primary",id:i,ariaDescribedby:s,class:["confirm-dialog__confirm",l&&q.includes(l)&&`btn--${l}`],...z,renderBody:c=>{j?c.t(j,r):t(c,S,null,null,null,null,e,"4")}},f,e,"3",[["click","emit",!1,["confirm"]]])}}),f=>{t(f,P,null,null,null,null,e,"5")}),{...M,mainId:s,focus:i,classPrefix:"confirm-dialog",class:[O,"confirm-dialog--mask-fade"],windowClass:["confirm-dialog__window--fade"],buttonPosition:"hidden",footer:void 0}),p,e,"0",[["open","emit",!1,["open"]],["close","emit",!1,["close"]],["escape","emit",!1,["reject"]]])},{t:h,s:!0},$);g.Component=I($,g._);const B="fsHecxRu",m=T(B),G=m,K=U("p",null,1).t("This 'confirm' text should be 1-2 lines.");x.r(B,()=>m);const R={onInput(n){this.state={open:n.open}},openDialog(){this.state.open=!0},closeDialog(n){this.state.open=!1,this.emit("reject",n)},success(n){this.state.open=!1,this.emit("confirm",n)}};m._=w(function(n,p,e,r,_,D){const{header:u,confirm:i,reject:s,...l}=n;d(g,E(()=>(y("header",{...u,renderBody:o=>{t(o,u.renderBody,null,null,null,null,e,"1")}}),y("confirm",{...i,renderBody:o=>{t(o,i.renderBody,null,null,null,null,e,"2")}}),y("reject",{...s,renderBody:o=>{t(o,s.renderBody,null,null,null,null,e,"3")}}),o=>{t(o,n.renderBody,null,null,null,null,e,"4"),o.n(K,r)}),{open:_.open,...l,header:void 0,confirm:void 0,reject:void 0}),p,e,"0",[["open","emit",!1,["open"]],["close","emit",!1,["close"]],["reject","closeDialog",!1],["confirm","success",!1]]),d(b,{renderBody:o=>{o.t("Open Confirm Dialog",r)}},p,e,"6",[["click","openDialog",!1]])},{t:B},R);m.Component=I(R,m._);const L=`export interface Input {
    renderBody?: Marko.Body;
    header: {
        renderBody?: Marko.Body;
    }
    reject: {
        renderBody?: Marko.Body;
    }
    confirm: {
        renderBody?: Marko.Body;
    }

}

$ const {
    header,
    confirm,
    reject,
    ...dialogBaseInput
} = input;

<ebay-confirm-dialog
    open=state.open
    on-open("emit", "open")
    on-close("emit", "close")
    on-reject('closeDialog')
    on-confirm('success')
    ...dialogBaseInput
>
    <@header ...header><\${header.renderBody}/></@header>
    <@confirm ...confirm><\${confirm.renderBody}/></@confirm>
    <@reject ...reject><\${reject.renderBody}/></@reject>
    <\${input.renderBody}/>
    <p>
        This 'confirm' text should be 1-2 lines.
    </p>
</ebay-confirm-dialog>

<ebay-button on-click('openDialog')>Open Confirm Dialog</ebay-button>
class {
    onInput(input) {
        this.state = { open: input.open };
    }
    openDialog() {
        this.state.open = true;
    }
    closeDialog(ev) {
        this.state.open = false;
        this.emit('reject', ev);
    }
    success(ev) {
        this.state.open = false;
        this.emit('confirm', ev);
    }
}
`,N=n=>({input:J(n)}),_e={title:"dialogs/ebay-confirm-dialog",component:G,parameters:{docs:{description:{component:Y}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is open.",table:{disable:!0}},closeFocus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened"},confirm:{name:"@confirm",table:{category:"@attribute tags"},description:"Render body will be text for confirm button"},reject:{name:"@reject",table:{category:"@attribute tags"},description:"Render body will be text for reject button"},header:{name:"@header",table:{category:"@attribute tags"}},confirmCtaVariant:{options:["none","destructive"],description:"The alternative main CTA button variant to use.",table:{defaultValue:{summary:"none"}},type:{category:"Options"}},onOpen:{action:"on-open",description:"Triggered on dialog open",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered when dialog is closed",table:{category:"Events",defaultValue:{summary:""}}},onConfirm:{action:"on-confirm",description:"Triggered on dialog confirm button click",table:{category:"Events",defaultValue:{summary:""}}},onReject:{action:"on-reject",description:"Triggered when reject button is clicked",table:{category:"Events",defaultValue:{summary:""}}}}},a=N.bind({});a.args={header:{renderBody:"Delete Address?"},confirm:{renderBody:"Delete"},reject:{renderBody:"Cancel"},renderBody:"You will permanently lose this address."};a.parameters={docs:{source:{code:L}}};var k,v,C;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(C=(v=a.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};const je=["Default"];export{a as Default,je as __namedExportsOrder,_e as default};
