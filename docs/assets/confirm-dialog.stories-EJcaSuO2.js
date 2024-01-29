import{a as S}from"./utils-NX-dnf4r.js";import{r as T,b as B,d as C,t as j}from"./registry-zqrnEiYK.js";import{_ as b}from"./dynamic-tag-4Gch17f1.js";import{_ as v}from"./self-iterator-6yU_KG2T.js";import{_ as A}from"./v-element-BABk39ab.js";import{_ as d}from"./index-tjucyUeZ.js";import{_ as a}from"./render-tag-_0PNNh6Y.js";import{_ as P}from"./index-peAB2o_3.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";/* empty css               */import"./index-XUhq6uHT.js";import"./index-q7KQv1ry.js";import"./index-dCAZr4YS.js";/* empty css             */import"./index-i1smj9EI.js";import"./index-XjwwBzg5.js";/* empty css                    */import"./index-0sOjhOVp.js";import"./index-DimFlsuh.js";import"./preserve-attrs-PKQRsRTw.js";import"./index-ERL0bCNR.js";const R=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,p="1PzPJOXE",i=j(p);var z=["destructive"];T.r(p,()=>i);const D={};i._=B(function(e,l,o,t,u,E){var n=t.getElId("confirm-dialog-cancel"),g=t.getElId("confirm-dialog-confirm"),y=t.getElId("confirm-dialog-main");const{confirmCtaVariant:c,rejectText:I,confirmText:$,class:V,...O}=e;a(P,{...O,mainId:y,focus:g,classPrefix:"confirm-dialog",class:[V,"confirm-dialog--mask-fade"],windowClass:["confirm-dialog__window--fade"],buttonPosition:"hidden",footer:{renderBody:h=>{a(d,{id:n,class:"confirm-dialog__reject",renderBody:m=>{m.t(I,t)}},h,o,"1",[["click","emit",!1,["reject"]]]),a(d,{priority:"primary",id:g,ariaDescribedby:y,class:["confirm-dialog__confirm",c&&z.includes(c)&&`btn--${c}`],renderBody:m=>{m.t($,t)}},h,o,"2",[["click","emit",!1,["confirm"]]])},[Symbol.iterator]:v}},l,o,"0",[["open","emit",!1,["open"]],["close","emit",!1,["reject"]]])},{t:p,i:!0},D);i.Component=C(D,i._);const f="fsHecxRu",s=j(f),M=s,F=A("p",null,"3",null,1,0).t("This 'confirm' text should be 1-2 lines.");T.r(f,()=>s);const w={onInput(e){this.state={open:e.open}},openDialog(){this.state.open=!0,this.emit("open")},closeDialog(e){this.state.open=!1,this.emit("reject",e)},success(e){this.state.open=!1,this.emit("confirm",e)}};s._=B(function(e,l,o,t,u,E){a(i,{rejectText:"Cancel",confirmText:"Delete",open:u.open,...e,header:{renderBody:n=>{b(n,e.header.renderBody,null,null,null,null,o,"1")},[Symbol.iterator]:v},renderBody:n=>{b(n,e.renderBody,null,null,null,null,o,"2"),n.n(F,t)}},l,o,"0",[["open","emit",!1,["open"]],["reject","closeDialog",!1],["confirm","success",!1]]),a(d,{renderBody:n=>{n.t("Open Confirm Dialog",t)}},l,o,"4",[["click","openDialog",!1]])},{t:f},w);s.Component=C(w,s._);const H=`export interface Input {
    confirmText?: string;
    renderBody?: Marko.Body;
    header: {
        renderBody?: Marko.Body;
    }
}

<ebay-confirm-dialog
    reject-text='Cancel'
    confirm-text='Delete'
    open=state.open
    on-open("emit", "open")
    on-reject('closeDialog')
    on-confirm('success')
    ...input
>
    <@header><\${input.header.renderBody}/></@header>
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
        this.emit('open');
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
`,J=e=>({input:S(e)}),de={title:"dialogs/ebay-confirm-dialog",component:M,parameters:{docs:{description:{component:R}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is open.",table:{disable:!0}},closeFocus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened"},confirmText:{control:{type:"text"},description:"Text for confirm button"},rejectText:{control:{type:"text"},description:"Text for reject button"},header:{name:"@header",table:{category:"@attribute tags"}},confirmCtaVariant:{options:["none","destructive"],description:"The alternative main CTA button variant to use.",table:{defaultValue:{summary:"none"}},type:{category:"Options"}},onOpen:{action:"on-open",description:"Triggered on dialog open",table:{category:"Events",defaultValue:{summary:""}}},onConfirm:{action:"on-confirm",description:"Triggered on dialog confirm button click",table:{category:"Events",defaultValue:{summary:""}}},onReject:{action:"on-reject",description:"Triggered when dialog is closed",table:{category:"Events",defaultValue:{summary:""}}}}},r=J.bind({});r.args={confirmText:"Delete",rejectText:"Cancel",header:{renderBody:"Delete Address?"},renderBody:"You will permanently lose this address."};r.parameters={docs:{source:{code:H}}};var _,x,k;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(k=(x=r.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const pe=["Default"];export{r as Default,pe as __namedExportsOrder,de as default};
