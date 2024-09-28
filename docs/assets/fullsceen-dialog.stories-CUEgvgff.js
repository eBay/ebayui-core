import{a as B}from"./utils-DWCsNc5l.js";import{r as y,b as f,c as b,t as h}from"./registry-CtNeIPU8.js";import{_ as E}from"./dynamic-tag-HMZVE1pc.js";import{_ as F}from"./index-C2tRDPlM.js";import{_ as r}from"./render-tag-mtfFSHEK.js";import{_ as $}from"./empty-component-BCB5DEsP.js";import{_ as v}from"./index-C241jnEo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";/* empty css                    */import"./index-Ca3E2DLc.js";import"./index-B6qYX52F.js";/* empty css             */import"./index-BCNhIFfA.js";import"./index-CxthRfyu.js";import"./index-CbT4wDAv.js";/* empty css               */import"./index-BL5tj0GS.js";import"./index-DW9U_Ppe.js";import"./index-DN2d98YU.js";const O=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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

** Deprecated ** (Use lightbox-dialog instead)

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/dialogs-ebay-fullscreen-dialog)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/dialogs-ebay-fullscreen-dialog)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-fullscreen-dialog/examples)
`,i="koFqnapm",s=h(i);y.r(i,()=>$);const _={};s._=f(function(o,a,t,c,d,x){const{class:l,renderBody:D,slideFrom:C,...w}=o;r(F,{...w,classPrefix:"fullscreen-dialog",transitionEl:"window",class:l,useHiddenProperty:!0,windowClass:C==="end"?"fullscreen-dialog__window--slide-end":"fullscreen-dialog__window--slide",renderBody:T=>{E(T,D,null,null,null,null,t,"1")}},a,t,"0",[["open","emit",!1,["open"]],["close","emit",!1,["close"]]])},{t:i,s:!0},_);s.Component=b(_,s._);const p="zAJYFThc",n=h(p);y.r(p,()=>n);const k={onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(){this.state.open=!1,this.emit("close")}};n._=f(function(o,a,t,c,d,x){r(s,{a11yCloseText:"Close Dialog",open:d.open,...o},a,t,"0",[["close","closeDialog",!1],["open","emit",!1,["open"]]]),r(v,{renderBody:l=>{l.t("Open Dialog",c)}},a,t,"1",[["click","openDialog",!1]])},{t:p},k);n.Component=b(k,n._);const A=`<ebay-fullscreen-dialog
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
`,S=o=>({input:B(o)}),ee={title:"dialogs/ebay-fullscreen-dialog",component:n,parameters:{docs:{description:{component:O}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is open.",table:{disable:!0}},focus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog opens (defaults to close button)."},slideFrom:{options:["bottom","end"],description:"Either bottom or end. Where the panel slide begins from, either on the bottom or the end of the page.",table:{defaultValue:{summary:"bottom"}},type:{category:"Options"}},closeFocus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened"},a11yCloseText:{control:{type:"text"},description:"A11y text for close button and mask."},header:{name:"@header",table:{category:"@attribute tags"}},footer:{name:"@footer",table:{category:"@attribute tags"}},onOpen:{action:"on-open",description:"Triggered on dialog opened",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered on dialog closed.",table:{category:"Events",defaultValue:{summary:""}}}}},e=S.bind({});e.args={header:{renderBody:"Heading Text"},a11yCloseText:"Close Button",renderBody:"Body Content",footer:{renderBody:"Footer Text"},slideFrom:null};e.parameters={docs:{source:{code:A}}};var m,g,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(u=(g=e.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const oe=["Default"];export{e as Default,oe as __namedExportsOrder,ee as default};
