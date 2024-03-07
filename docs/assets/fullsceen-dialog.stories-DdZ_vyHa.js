import{a as T}from"./utils-DWCsNc5l.js";import{r as y,b as f,d as b,t as h}from"./registry-ZV7By7ZP.js";import{_ as E}from"./dynamic-tag-Dub0dLVC.js";import{_ as S}from"./index-C9lVL2zh.js";import{_ as l}from"./render-tag-Buaq4gMc.js";import{_ as $}from"./index-nOuvbWe2.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";/* empty css                    */import"./index-BazW8NNv.js";import"./index-Z5IdgrQn.js";/* empty css             */import"./index-B1rAQBUu.js";import"./index--35j0Bzx.js";import"./index-blmbJU0z.js";/* empty css               */import"./index-Z_0elAoW.js";import"./index-6wZqcE5l.js";import"./index-Bp_jZoBr.js";const v=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,i="7ziQ+NKh",n=h(i);y.r(i,()=>n);const _={};n._=f(function(o,s,t,p,c,k){const{class:r,renderBody:C,slideFrom:w,...D}=o;l(S,{...D,classPrefix:"fullscreen-dialog",transitionEl:"window",class:r,useHiddenProperty:!0,windowClass:w==="end"?"fullscreen-dialog__window--slide-end":"fullscreen-dialog__window--slide",renderBody:B=>{E(B,C,null,null,null,null,t,"1")}},s,t,"0",[["open","emit",!1,["open"]],["close","emit",!1,["close"]]])},{t:i,i:!0},_);n.Component=b(_,n._);const d="KcxVRmgW",a=h(d),F=a;y.r(d,()=>a);const x={onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(){this.state.open=!1,this.emit("close")}};a._=f(function(o,s,t,p,c,k){l(n,{a11yCloseText:"Close Dialog",open:c.open,...o},s,t,"0",[["close","closeDialog",!1],["open","emit",!1,["open"]]]),l($,{renderBody:r=>{r.t("Open Dialog",p)}},s,t,"1",[["click","openDialog",!1]])},{t:d},x);a.Component=b(x,a._);const O=`<ebay-fullscreen-dialog
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
`,R=o=>({input:T(o)}),Z={title:"dialogs/ebay-fullscreen-dialog",component:F,parameters:{docs:{description:{component:v}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is open.",table:{disable:!0}},focus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog opens (defaults to close button)."},slideFrom:{options:["bottom","end"],description:"Either bottom or end. Where the panel slide begins from, either on the bottom or the end of the page.",table:{defaultValue:{summary:"bottom"}},type:{category:"Options"}},closeFocus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened"},a11yCloseText:{control:{type:"text"},description:"A11y text for close button and mask."},header:{name:"@header",table:{category:"@attribute tags"}},footer:{name:"@footer",table:{category:"@attribute tags"}},onOpen:{action:"on-open",description:"Triggered on dialog opened",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered on dialog closed.",table:{category:"Events",defaultValue:{summary:""}}}}},e=R.bind({});e.args={header:{renderBody:"Heading Text"},renderBody:"Body Content",footer:{renderBody:"Footer Text"},slideFrom:null};e.parameters={docs:{source:{code:O}}};var m,g,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(u=(g=e.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const ee=["Standard"];export{e as Standard,ee as __namedExportsOrder,Z as default};
