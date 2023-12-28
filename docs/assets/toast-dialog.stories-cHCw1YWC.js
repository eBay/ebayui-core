import{r as _,b as f,d as T,t as k}from"./registry-EgEQwbXk.js";import{_ as d}from"./self-iterator-6yU_KG2T.js";import{_ as w}from"./v-element-wxdcHeY-.js";import{_ as u}from"./index-RIk6OB-A.js";import{_ as l}from"./render-tag-_0PNNh6Y.js";import{_ as O}from"./dynamic-tag-7vXwaVzE.js";import{_ as v}from"./index-YuT6C2fe.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";/* empty css               */import"./index-Xvf_JYRr.js";import"./index-yF1zloRw.js";import"./index-eucXA0ea.js";/* empty css             */import"./index-oRGh3q8t.js";import"./index-whtpiCcX.js";/* empty css                    */import"./index-YaSSGaP-.js";import"./index-VGoHc-V3.js";import"./preserve-attrs-lolIpBRv.js";import"./index-ERL0bCNR.js";const A=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-toast-dialog
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

A dialog which shows up information on the side of the page. This is for non-blocking info that the user needs to see.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/dialogs-ebay-toast-dialog)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/dialogs-ebay-toast-dialog)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-toast-dialog/examples)
`,c="DWKAHw/y",r=k(c);_.r(c,()=>r);const B={};r._=f(function(o,t,a,n,y,x){const{header:e={},class:p,renderBody:S,...E}=o;l(v,{...E,baseEl:"aside",transitionEl:"root",isModal:!1,classPrefix:"toast-dialog",closeButtonClass:["icon-btn--transparent"],class:[p,"toast-dialog--transition"],header:{...e,class:[e.class,"toast-dialog__title"],[Symbol.iterator]:d},renderBody:$=>{O($,S,null,null,null,null,a,"1")}},t,a,"0",[["open","emit",!1,["open"]],["close","emit",!1,["close"]]])},{t:c,i:!0},B);r.Component=T(B,r._);const m="283zRgGr",i=k(m),H=i,z=w("p",null,"1",null,1,0).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit"),D=w("p",null,"2",null,1,0).e("a",{href:"http://www.ebay.com"},"3",null,1,0).t("www.ebay.com");_.r(m,()=>i);const C={onCreate(){this.state={open:!1}},openToast(){this.state.open=!0},closeToast(){this.state.open=!1,this.emit("close")}};i._=f(function(o,t,a,n,y,x){l(r,{a11yCloseText:"Close Toast",open:y.open,header:{renderBody:e=>{e.t("Heading",n)},[Symbol.iterator]:d},footer:{renderBody:e=>{l(u,{accesskey:"i",renderBody:p=>{p.t("Close",n)}},e,a,"4",[["click","closeToast",!1]])},[Symbol.iterator]:d},renderBody:e=>{e.n(z,n),e.n(D,n)}},t,a,"0",[["open","emit",!1,["open"]],["close","closeToast",!1]]),l(u,{renderBody:e=>{e.t("Open Toast",n)}},t,a,"5",[["click","openToast",!1]])},{t:m},C);i.Component=T(C,i._);const L=`<ebay-toast-dialog a11yCloseText="Close Toast" open=state.open on-open('emit', 'open') on-close("closeToast")>
    <@header>Heading</@header>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    <p>
        <a href="http://www.ebay.com">www.ebay.com</a>
    </p>
    <@footer>
        <ebay-button accesskey="i" on-click("closeToast")>Close</ebay-button>
    </@footer>
</ebay-toast-dialog>
<ebay-button on-click("openToast")>Open Toast</ebay-button>
class {
    declare state: {
        open: boolean;
    }

    onCreate() {
        this.state = { open: false };
    }
    openToast() {
        this.state.open = true;
    }
    closeToast() {
        this.state.open = false;
        this.emit('close');
    }
}
`,R=o=>({input:{...o,spread:null,...o.spread,renderBody:o.renderBody?t=>{t.html(o.renderBody)}:null}}),ne={title:"dialogs/ebay-toast-dialog",component:H,parameters:{docs:{description:{component:A}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether toast is open.",table:{disable:!0}},a11yCloseText:{control:{type:"text"},description:" A11y text for close button."},header:{name:"@header",description:"The header to be displayed in the toast dialog",table:{category:"@attribute tags"}},onOpen:{action:"on-open",description:"Triggered on dialog opened",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered on dialog closed.",table:{category:"Events",defaultValue:{summary:""}}}}},s=R.bind({});s.args={};s.parameters={docs:{source:{code:L}}};var b,g,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    spread: null,
    ...args.spread,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const se=["Standard"];export{s as Standard,se as __namedExportsOrder,ne as default};
