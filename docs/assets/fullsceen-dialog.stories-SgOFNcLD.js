import{a as T}from"./utils-NX-dnf4r.js";import{r as y,b as f,d as b,t as h}from"./registry-EgEQwbXk.js";import{_ as E}from"./dynamic-tag-7vXwaVzE.js";import{_ as S}from"./index-YuT6C2fe.js";import{_ as l}from"./render-tag-_0PNNh6Y.js";import{_ as $}from"./index-RIk6OB-A.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";/* empty css                    */import"./index-YaSSGaP-.js";import"./index-eucXA0ea.js";/* empty css             */import"./index-VGoHc-V3.js";import"./preserve-attrs-lolIpBRv.js";import"./index-ERL0bCNR.js";import"./index-whtpiCcX.js";/* empty css               */import"./index-Xvf_JYRr.js";import"./index-yF1zloRw.js";import"./index-oRGh3q8t.js";const v=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-fullscreen-dialog
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.0.0
    </span>
</h1>

\`\`\`marko
<ebay-fullscreen-dialog open a11y-close-text="Close Dialog">
    <@header>Hello World</@header>
    Body content
</ebay-fullscreen-dialog>
\`\`\`

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/dialogs-ebay-fullscreen-dialog)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/dialogs-ebay-fullscreen-dialog)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-fullscreen-dialog/examples)
`,i="7ziQ+NKh",n=h(i);y.r(i,()=>n);const _={};n._=f(function(o,s,t,d,c,k){const{class:r,renderBody:C,slideFrom:w,...D}=o;l(S,{...D,classPrefix:"fullscreen-dialog",transitionEl:"window",class:r,useHiddenProperty:!0,windowClass:w==="end"?"fullscreen-dialog__window--slide-end":"fullscreen-dialog__window--slide",renderBody:B=>{E(B,C,null,null,null,null,t,"1")}},s,t,"0",[["open","emit",!1,["open"]],["close","emit",!1,["close"]]])},{t:i,i:!0},_);n.Component=b(_,n._);const p="KcxVRmgW",a=h(p),F=a;y.r(p,()=>a);const x={onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(){this.state.open=!1,this.emit("close")}};a._=f(function(o,s,t,d,c,k){l(n,{a11yCloseText:"Close Dialog",open:c.open,...o},s,t,"0",[["close","closeDialog",!1],["open","emit",!1,["open"]]]),l($,{renderBody:r=>{r.t("Open Dialog",d)}},s,t,"1",[["click","openDialog",!1]])},{t:p},x);a.Component=b(x,a._);const O=`<ebay-fullscreen-dialog
    a11yCloseText='Close Dialog'
    open=state.open
    on-close('closeDialog')
    on-open('emit', 'open')
    ...input
/>

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
        this.emit('close');
    }
}
`,R=o=>({input:T(o)}),ee={title:"dialogs/ebay-fullscreen-dialog",component:F,parameters:{docs:{description:{component:v}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is open.",table:{disable:!0}},focus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog opens (defaults to close button)."},slideFrom:{options:["bottom","end"],description:"Either bottom or end. Where the panel slide begins from, either on the bottom or the end of the page.",table:{defaultValue:{summary:"bottom"}},type:{category:"Options"}},closeFocus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened"},a11yCloseText:{control:{type:"text"},description:"A11y text for close button and mask."},header:{name:"@header",table:{category:"@attribute tags"}},footer:{name:"@footer",table:{category:"@attribute tags"}},onOpen:{action:"on-open",description:"Triggered on dialog opened",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered on dialog closed.",table:{category:"Events",defaultValue:{summary:""}}}}},e=R.bind({});e.args={header:{renderBody:"Heading Text"},renderBody:"Body Content",footer:{renderBody:"Footer Text"},slideFrom:null};e.parameters={docs:{source:{code:O}}};var m,g,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(u=(g=e.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const oe=["Standard"];export{e as Standard,oe as __namedExportsOrder,ee as default};
