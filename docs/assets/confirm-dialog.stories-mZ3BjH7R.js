import{a as V}from"./utils-NX-dnf4r.js";import{r as k,b as v,d as T,t as j}from"./registry-EgEQwbXk.js";import{_ as C}from"./self-iterator-6yU_KG2T.js";import{_ as $}from"./v-element-wxdcHeY-.js";import{_ as d}from"./index-IxOvub0x.js";import{_ as a}from"./render-tag-_0PNNh6Y.js";import{_ as S}from"./index-6Ovri2v7.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";/* empty css               */import"./index-zvV8HPzg.js";import"./index-eX8aiyBr.js";import"./index-rIGlTtcv.js";/* empty css             */import"./dynamic-tag-7vXwaVzE.js";import"./index-XA7SOYvr.js";import"./index-XjwwBzg5.js";/* empty css                    */import"./index-MJalx9GY.js";import"./index-VGoHc-V3.js";import"./preserve-attrs-lolIpBRv.js";import"./index-ERL0bCNR.js";const P=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,p="1PzPJOXE",r=j(p);var R=["destructive"];k.r(p,()=>r);const D={};r._=v(function(e,c,i,o,f,w){var t=o.getElId("confirm-dialog-cancel"),g=o.getElId("confirm-dialog-confirm"),y=o.getElId("confirm-dialog-main");const{confirmCtaVariant:l,rejectText:B,confirmText:q,class:I,...O}=e;a(S,{...O,mainId:y,focus:g,classPrefix:"confirm-dialog",class:[I,"confirm-dialog--mask-fade"],windowClass:["confirm-dialog__window--fade"],buttonPosition:"hidden",footer:{renderBody:b=>{a(d,{id:t,class:"confirm-dialog__reject",renderBody:m=>{m.t(B,o)}},b,i,"1",[["click","emit",!1,["reject"]]]),a(d,{priority:"primary",id:g,ariaDescribedby:y,class:["confirm-dialog__confirm",l&&R.includes(l)&&`btn--${l}`],renderBody:m=>{m.t(q,o)}},b,i,"2",[["click","emit",!1,["confirm"]]])},[Symbol.iterator]:C}},c,i,"0",[["open","emit",!1,["open"]],["close","emit",!1,["reject"]]])},{t:p,i:!0},D);r.Component=T(D,r._);const u="fsHecxRu",s=j(u),A=s,H=$("p",null,"1",null,1,0).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");k.r(u,()=>s);const E={onInput(e){this.state={open:e.open}},openDialog(){this.state.open=!0,this.emit("open")},closeDialog(e){this.state.open=!1,this.emit("reject",e)},success(e){this.state.open=!1,this.emit("confirm",e)}};s._=v(function(e,c,i,o,f,w){a(r,{rejectText:"Cancel",confirmText:"Okay",open:f.open,...e,header:{renderBody:t=>{t.t("Heading",o)},[Symbol.iterator]:C},renderBody:t=>{t.n(H,o)}},c,i,"0",[["open","emit",!1,["open"]],["reject","closeDialog",!1],["confirm","success",!1]]),a(d,{renderBody:t=>{t.t("Open Dialog",o)}},c,i,"2",[["click","openDialog",!1]])},{t:u},E);s.Component=T(E,s._);const U=`<ebay-confirm-dialog
    reject-text='Cancel'
    confirm-text='Okay'
    open=state.open
    on-open("emit", "open")
    on-reject('closeDialog')
    on-confirm('success')
    ...input
>
    <@header>Heading</@header>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</ebay-confirm-dialog>

<ebay-button on-click('openDialog')>Open Dialog</ebay-button>
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
`,z=e=>({input:V(e)}),me={title:"dialogs/ebay-confirm-dialog",component:A,parameters:{docs:{description:{component:P}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is open.",table:{disable:!0}},closeFocus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened"},confirmText:{control:{type:"text"},description:"Text for confirm button"},rejectText:{control:{type:"text"},description:"Text for reject button"},confirmCtaVariant:{options:["none","destructive"],description:"The alternative main CTA button variant to use.",table:{defaultValue:{summary:"none"}},type:{category:"Options"}},onOpen:{action:"on-open",description:"Triggered on dialog open",table:{category:"Events",defaultValue:{summary:""}}},onConfirm:{action:"on-confirm",description:"Triggered on dialog confirm button click",table:{category:"Events",defaultValue:{summary:""}}},onReject:{action:"on-reject",description:"Triggered when dialog is closed",table:{category:"Events",defaultValue:{summary:""}}}}},n=z.bind({});n.args={confirmText:"Okay",rejectText:"Cancel"};n.parameters={docs:{source:{code:U}}};var h,_,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(x=(_=n.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,me as default};
