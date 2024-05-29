import{a as T}from"./utils-DWCsNc5l.js";import{r as y,b as f,d as b,t as h}from"./registry-DcejNBCz.js";import{_ as E}from"./dynamic-tag-CH7Ufq3Q.js";import{_ as $}from"./index-Dmk2W4le.js";import{_ as r}from"./render-tag-BBOJ9dEX.js";import{_ as v}from"./empty-component-BCB5DEsP.js";import{_ as F}from"./index-Ds0knl6D.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";/* empty css                    */import"./index-DRqbb5JY.js";import"./index-CMkz4cmR.js";/* empty css             */import"./index-B0OhA0dc.js";import"./index--35j0Bzx.js";import"./index-blmbJU0z.js";/* empty css               */import"./index-AW2S7xMy.js";import"./index-D4BJokV4.js";import"./index-BfyIUMHf.js";const O=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,i="7ziQ+NKh",s=h(i);y.r(i,()=>v);const _={};s._=f(function(o,a,t,c,d,k){const{class:l,renderBody:C,slideFrom:D,...w}=o;r($,{...w,classPrefix:"fullscreen-dialog",transitionEl:"window",class:l,useHiddenProperty:!0,windowClass:D==="end"?"fullscreen-dialog__window--slide-end":"fullscreen-dialog__window--slide",renderBody:B=>{E(B,C,null,null,null,null,t,"1")}},a,t,"0",[["open","emit",!1,["open"]],["close","emit",!1,["close"]]])},{t:i,s:!0},_);s.Component=b(_,s._);const p="KcxVRmgW",n=h(p),R=n;y.r(p,()=>n);const x={onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(){this.state.open=!1,this.emit("close")}};n._=f(function(o,a,t,c,d,k){r(s,{a11yCloseText:"Close Dialog",open:d.open,...o},a,t,"0",[["close","closeDialog",!1],["open","emit",!1,["open"]]]),r(F,{renderBody:l=>{l.t("Open Dialog",c)}},a,t,"1",[["click","openDialog",!1]])},{t:p},x);n.Component=b(x,n._);const S=`<ebay-fullscreen-dialog
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
`,V=o=>({input:T(o)}),oe={title:"dialogs/ebay-fullscreen-dialog",component:R,parameters:{docs:{description:{component:O}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is open.",table:{disable:!0}},focus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog opens (defaults to close button)."},slideFrom:{options:["bottom","end"],description:"Either bottom or end. Where the panel slide begins from, either on the bottom or the end of the page.",table:{defaultValue:{summary:"bottom"}},type:{category:"Options"}},closeFocus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened"},a11yCloseText:{control:{type:"text"},description:"A11y text for close button and mask."},header:{name:"@header",table:{category:"@attribute tags"}},footer:{name:"@footer",table:{category:"@attribute tags"}},onOpen:{action:"on-open",description:"Triggered on dialog opened",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered on dialog closed.",table:{category:"Events",defaultValue:{summary:""}}}}},e=V.bind({});e.args={header:{renderBody:"Heading Text"},a11yCloseText:"Close Button",renderBody:"Body Content",footer:{renderBody:"Footer Text"},slideFrom:null};e.parameters={docs:{source:{code:S}}};var m,u,g;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(g=(u=e.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const te=["Default"];export{e as Default,te as __namedExportsOrder,oe as default};
