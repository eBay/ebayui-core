import{a as J}from"./utils-DWCsNc5l.js";import{r as x,b as w,d as I,t as T}from"./registry-D0x2Lw0V.js";import{_ as r}from"./dynamic-tag-BSuzyz1c.js";import{i as E,a as g}from"./attr-tag-W-ozfNNY.js";import{_ as U}from"./const-element-DTwCHAHi.js";import{_ as b}from"./index-CrY4xSt-.js";import{_ as d}from"./render-tag-Buaq4gMc.js";import{_ as W}from"./index-naZEvJVz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";/* empty css               */import"./index-BFNHZk0m.js";import"./index-DBdq2wPY.js";import"./index-BZpHAKBe.js";/* empty css             */import"./index-dZMhXc9l.js";import"./index-blmbJU0z.js";/* empty css                    */import"./index-Cb2Litza.js";import"./index-BWLs-RUD.js";import"./index--35j0Bzx.js";const X=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,h="1PzPJOXE",m=T(h);var Y=["destructive"];x.r(h,()=>m);const $={};m._=w(function(o,u,e,t,_,D){var f=t.getElId("confirm-dialog-cancel"),i=t.getElId("confirm-dialog-confirm"),s=t.getElId("confirm-dialog-main");const{confirmCtaVariant:l,rejectText:n,confirmText:j,class:O,reject:V,confirm:A,renderBody:P,...M}=o,{renderBody:S,...z}=A||{},{renderBody:F,...H}=V||{};d(W,E(()=>(g("footer",{renderBody:y=>{d(b,{id:f,class:"confirm-dialog__reject",...H,renderBody:c=>{n?c.t(n,t):r(c,F,null,null,null,null,e,"2")}},y,e,"1",[["click","emit",!1,["reject"]]]),d(b,{priority:"primary",id:i,ariaDescribedby:s,class:["confirm-dialog__confirm",l&&Y.includes(l)&&`btn--${l}`],...z,renderBody:c=>{j?c.t(j,t):r(c,S,null,null,null,null,e,"4")}},y,e,"3",[["click","emit",!1,["confirm"]]])}}),y=>{r(y,P,null,null,null,null,e,"5")}),{...M,mainId:s,focus:i,classPrefix:"confirm-dialog",class:[O,"confirm-dialog--mask-fade"],windowClass:["confirm-dialog__window--fade"],buttonPosition:"hidden"}),u,e,"0",[["open","emit",!1,["open"]],["close","emit",!1,["close"]]])},{t:h,i:!0},$);m.Component=I($,m._);const B="fsHecxRu",p=T(B),q=p,G=U("p",null,1).t("This 'confirm' text should be 1-2 lines.");x.r(B,()=>p);const R={onInput(o){this.state={open:o.open}},openDialog(){this.state.open=!0},closeDialog(o){this.state.open=!1,this.emit("reject",o)},success(o){this.state.open=!1,this.emit("confirm",o)}};p._=w(function(o,u,e,t,_,D){const{header:f,confirm:i,reject:s,...l}=o;d(m,E(()=>(g("header",{...f,renderBody:n=>{r(n,f.renderBody,null,null,null,null,e,"1")}}),g("confirm",{...i,renderBody:n=>{r(n,i.renderBody,null,null,null,null,e,"2")}}),g("reject",{...s,renderBody:n=>{r(n,s.renderBody,null,null,null,null,e,"3")}}),n=>{r(n,o.renderBody,null,null,null,null,e,"4"),n.n(G,t)}),{open:_.open,...l}),u,e,"0",[["open","emit",!1,["open"]],["close","emit",!1,["close"]],["reject","closeDialog",!1],["confirm","success",!1]]),d(b,{renderBody:n=>{n.t("Open Confirm Dialog",t)}},u,e,"6",[["click","openDialog",!1]])},{t:B},R);p.Component=I(R,p._);const K=`export interface Input {
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
`,L=o=>({input:J(o)}),he={title:"dialogs/ebay-confirm-dialog",component:q,parameters:{docs:{description:{component:X}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is open.",table:{disable:!0}},closeFocus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened"},confirm:{name:"@confirm",table:{category:"@attribute tags"},description:"Render body will be text for confirm button"},reject:{name:"@reject",table:{category:"@attribute tags"},description:"Render body will be text for reject button"},header:{name:"@header",table:{category:"@attribute tags"}},confirmCtaVariant:{options:["none","destructive"],description:"The alternative main CTA button variant to use.",table:{defaultValue:{summary:"none"}},type:{category:"Options"}},onOpen:{action:"on-open",description:"Triggered on dialog open",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered when dialog is closed",table:{category:"Events",defaultValue:{summary:""}}},onConfirm:{action:"on-confirm",description:"Triggered on dialog confirm button click",table:{category:"Events",defaultValue:{summary:""}}},onReject:{action:"on-reject",description:"Triggered when reject button is clicked",table:{category:"Events",defaultValue:{summary:""}}}}},a=L.bind({});a.args={header:{renderBody:"Delete Address?"},confirm:{renderBody:"Delete"},reject:{renderBody:"Cancel"},renderBody:"You will permanently lose this address."};a.parameters={docs:{source:{code:K}}};var k,v,C;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(C=(v=a.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};const Be=["Default"];export{a as Default,Be as __namedExportsOrder,he as default};
