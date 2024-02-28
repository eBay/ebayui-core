import{r as k,b as _,d as T,t as v}from"./registry-D0x2Lw0V.js";import{_ as M}from"./index-CrY4xSt-.js";import{_ as c}from"./render-tag-Buaq4gMc.js";import{_ as b}from"./dynamic-tag-BSuzyz1c.js";import{_ as A}from"./index-DfqKTg73.js";import{i as I,a as L}from"./attr-tag-W-ozfNNY.js";import{_ as $}from"./index-naZEvJVz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";/* empty css               */import"./index-BFNHZk0m.js";import"./index-DBdq2wPY.js";import"./index-BZpHAKBe.js";/* empty css             */import"./index-dZMhXc9l.js";import"./index-blmbJU0z.js";/* empty css             *//* empty css                    */import"./index-Cb2Litza.js";import"./index-BWLs-RUD.js";import"./index--35j0Bzx.js";const D=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,m=6e3;class F extends Marko.Component{_clearTimeout(){clearTimeout(this.timeout)}_setupTimeout(){this.state.open!==!1&&(this.timeout=setTimeout(()=>{this.state.open=!1},m))}onInput(t){this.state={open:t.open||this.state.open||!1}}onMount(){this._setupTimeout()}onUpdate(){this._setupTimeout()}onRender(){typeof window<"u"&&this._clearTimeout()}onDestroy(){this._clearTimeout()}onCreate(){this.eventSet=new Set,this.state={open:!1}}handleAction(){this._clearTimeout(),this.emit("action"),this.state.open=!1}handleFocus(){this._clearTimeout(),this.eventSet.add("focus")}handleBlur(){this.eventSet.delete("focus"),this.eventSet.size===0&&(this._clearTimeout(),this.timeout=setTimeout(()=>{this.state.open=!1},m))}handleMouseEnter(){this._clearTimeout(),this.eventSet.add("mouseOver")}handleMouseLeave(){this.eventSet.delete("mouseOver"),this.eventSet.size===0&&this.state.open===!0&&(this._clearTimeout(),this.timeout=setTimeout(()=>{this.state.open=!1},m))}handleClose(){this._clearTimeout(),this.state.open=!1,this.emit("close")}}const u="HPFvHriS",r=v(u);k.r(u,()=>r);const w=F;r._=_(function(e,t,n,o,p,B){const{action:a,class:C,layout:x,open:P,renderBody:E,...O}=e;c($,I(()=>(a&&L("action",{renderBody:d=>{c(A,{renderBody:i=>{b(i,a.renderBody,null,null,null,null,n,"2"),i.be("span",{class:"clipped"},"3",o,null,1),i.t("- Access Key: ",o),i.t(a.accessKey,o),i.ee()}},d,n,"1",[["click","handleAction",!1],["focus","handleFocus",!1],["blur","handleBlur",!1]])}}),d=>{b(d,E,null,null,null,null,n,"4")}),{...O,open:p.open,isModal:!1,classPrefix:"snackbar-dialog",class:[C,"snackbar-dialog--transition"],windowClass:[x==="column"&&"snackbar-dialog__window--column"],buttonPosition:"hidden",transitionEl:"root"}),t,n,"0",[["close","handleClose",!1],["open","emit",!1,["open"]],["mouseEnter","handleMouseEnter",!1],["mouseLeave","handleMouseLeave",!1]])},{t:u},w);r.Component=T(w,r._);const h="6TYUqMgh",l=v(h),z=l;k.r(h,()=>l);const S={onCreate(){this.state={open:!1}},handleOpen(){this.state.open=!0},handleClose(){this.state.open=!1,this.emit("close")}};l._=_(function(e,t,n,o,p,B){c(M,{renderBody:a=>{a.t("Open Default Snackbar",o)}},t,n,"0",[["click","handleOpen",!1]]),c(r,{open:p.open,...e,renderBody:a=>{a.t(e.snacktext,o)}},t,n,"1",[["close","handleClose",!1],["open","emit",!1,["open"]]])},{t:h},S);l.Component=T(S,l._);const U=`export interface Input {
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
`,H=e=>({input:{...e,renderBody:e.renderBody?t=>{t.html(e.renderBody)}:null}}),le={title:"dialogs/ebay-snackbar-dialog",component:z,parameters:{docs:{description:{component:D}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},table:{disable:!0}},layout:{type:"enum",control:{type:"radio"},options:["row","column"]},snacktext:{control:{type:"text"},description:"for demo only"},onOpen:{action:"on-open",description:"Triggered on dialog opened",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered on dialog closed.",table:{category:"Events",defaultValue:{summary:""}}},onAction:{action:"on-action",description:"Triggered on action pressed",table:{category:"Events",defaultValue:{summary:""}}}}},s=H.bind({});s.args={snacktext:"This is the snackbar"};s.parameters={docs:{source:{code:U}}};var y,f,g;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const ce=["Standard"];export{s as Standard,ce as __namedExportsOrder,le as default};
