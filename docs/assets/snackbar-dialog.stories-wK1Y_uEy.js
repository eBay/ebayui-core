import{r as k,b as T,d as v,t as w}from"./registry-zqrnEiYK.js";import{_ as A}from"./index-tjucyUeZ.js";import{_ as c}from"./render-tag-_0PNNh6Y.js";import{_ as y}from"./dynamic-tag-4Gch17f1.js";import{_ as I}from"./index-VMMXlPq4.js";import{_ as L}from"./repeatable-jmdwKenu.js";import{_ as $}from"./self-iterator-6yU_KG2T.js";import{_ as D}from"./index-peAB2o_3.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";/* empty css               */import"./index-XUhq6uHT.js";import"./index-q7KQv1ry.js";import"./index-dCAZr4YS.js";/* empty css             */import"./index-i1smj9EI.js";import"./index-XjwwBzg5.js";/* empty css             *//* empty css                    */import"./index-0sOjhOVp.js";import"./index-DimFlsuh.js";import"./preserve-attrs-PKQRsRTw.js";import"./index-ERL0bCNR.js";const F=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-snackbar-dialog
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

\`\`\`marko
<ebay-snackbar-dialog>
    Basic Snackbar
</ebay-snackbar-dialog>
\`\`\`

A snackbar is a non-modal dialog that appears in response to a lightweight user action. It disappears automatically after a minimum of 6 seconds.

The user usually will want to manage the state of the snackbar, and so should provide the open state as a boolean as well as a function to synchronize the app state with the snackbar state when the on-close event occurs.

In the case where the application developer only wants to manage the initial state of the snackbar, the dev can choose to provide only the open state as a boolean. This is useful when a dev wants the snackbar to appear only once on initial render and then disappear.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/dialogs-ebay-snackbar-dialog)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/dialogs-ebay-snackbar-dialog)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-snackbar-dialog/examples)
`,u=6e3;class z extends Marko.Component{_clearTimeout(){clearTimeout(this.timeout)}_setupTimeout(){this.state.open!==!1&&(this.timeout=setTimeout(()=>{this.state.open=!1},u))}onInput(t){this.state={open:t.open||this.state.open||!1}}onMount(){this._setupTimeout()}onUpdate(){this._setupTimeout()}onRender(){typeof window<"u"&&this._clearTimeout()}onDestroy(){this._clearTimeout()}onCreate(){this.eventSet=new Set,this.state={open:!1}}handleAction(){this._clearTimeout(),this.emit("action"),this.state.open=!1}handleFocus(){this._clearTimeout(),this.eventSet.add("focus")}handleBlur(){this.eventSet.delete("focus"),this.eventSet.size===0&&(this._clearTimeout(),this.timeout=setTimeout(()=>{this.state.open=!1},u))}handleMouseEnter(){this._clearTimeout(),this.eventSet.add("mouseOver")}handleMouseLeave(){this.eventSet.delete("mouseOver"),this.eventSet.size===0&&this.state.open===!0&&(this._clearTimeout(),this.timeout=setTimeout(()=>{this.state.open=!1},u))}handleClose(){this._clearTimeout(),this.state.open=!1,this.emit("close")}}const h="HPFvHriS",r=w(h);k.r(h,()=>r);const S=z;r._=T(function(e,t,n,o,p,C){const{action:a,class:x,layout:E,open:V,renderBody:O,...M}=e;let d=null;a&&(d=L(d,{renderBody:m=>{c(I,{renderBody:i=>{y(i,a.renderBody,null,null,null,null,n,"2"),i.be("span",{class:"clipped"},"3",o,null,1),i.t("- Access Key: ",o),i.t(a.accessKey,o),i.ee()}},m,n,"1",[["click","handleAction",!1],["focus","handleFocus",!1],["blur","handleBlur",!1]])},[Symbol.iterator]:$})),c(D,{...M,open:p.open,isModal:!1,classPrefix:"snackbar-dialog",class:[x,"snackbar-dialog--transition"],windowClass:[E==="column"&&"snackbar-dialog__window--column"],buttonPosition:"hidden",transitionEl:"root",action:d,renderBody:m=>{y(m,O,null,null,null,null,n,"4")}},t,n,"0",[["close","handleClose",!1],["open","emit",!1,["open"]],["mouseEnter","handleMouseEnter",!1],["mouseLeave","handleMouseLeave",!1]])},{t:h},S);r.Component=v(S,r._);const b="6TYUqMgh",l=w(b),U=l;k.r(b,()=>l);const B={onCreate(){this.state={open:!1}},handleOpen(){this.state.open=!0},handleClose(){this.state.open=!1,this.emit("close")}};l._=T(function(e,t,n,o,p,C){c(A,{renderBody:a=>{a.t("Open Default Snackbar",o)}},t,n,"0",[["click","handleOpen",!1]]),c(r,{open:p.open,...e,renderBody:a=>{a.t(e.snacktext,o)}},t,n,"1",[["close","handleClose",!1],["open","emit",!1,["open"]]])},{t:b},B);l.Component=v(B,l._);const H=`export interface Input {
    snacktext: string
}

class {
    declare state: {
        open: boolean
    };

    onCreate() {
        this.state = {open: false};
    }

    handleOpen() {
        this.state.open = true;
    }

    handleClose() {
        this.state.open = false;
        this.emit('close');
    }
}
<ebay-button on-click('handleOpen')>
    Open Default Snackbar
</ebay-button>
<ebay-snackbar-dialog  open=state.open on-close('handleClose') on-open('emit', 'open') ...input >
    \${input.snacktext}
</ebay-snackbar-dialog>
`,P=e=>({input:{...e,renderBody:e.renderBody?t=>{t.html(e.renderBody)}:null}}),de={title:"dialogs/ebay-snackbar-dialog",component:U,parameters:{docs:{description:{component:F}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},table:{disable:!0}},layout:{type:"enum",control:{type:"radio"},options:["row","column"]},snacktext:{control:{type:"text"},description:"for demo only"},onOpen:{action:"on-open",description:"Triggered on dialog opened",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered on dialog closed.",table:{category:"Events",defaultValue:{summary:""}}},onAction:{action:"on-action",description:"Triggered on action pressed",table:{category:"Events",defaultValue:{summary:""}}}}},s=P.bind({});s.args={snacktext:"This is the snackbar"};s.parameters={docs:{source:{code:H}}};var f,_,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(g=(_=s.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const me=["Standard"];export{s as Standard,me as __namedExportsOrder,de as default};
