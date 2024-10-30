import{r as _,b as f,c as k,t as T}from"./registry-CyswyZw5.js";import{i as w,a as d}from"./attr-tag-DphMQldM.js";import{_ as u}from"./index-CUxP3sFe.js";import{_ as i}from"./render-tag-CLyPs9qZ.js";import{_ as C}from"./const-element-B9h58Dwq.js";import{_ as S}from"./dynamic-tag-CXXozR29.js";import{_ as D}from"./index-B0y7gXr0.js";import{_ as L}from"./empty-component-BCB5DEsP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";/* empty css               */import"./index-DILp6LbA.js";import"./index-D0VNda02.js";import"./index-Bq4u441m.js";/* empty css             */import"./index-Dvv9KJ1o.js";import"./index-CbT4wDAv.js";/* empty css                    */import"./index-Dv-vWuE6.js";import"./index-DWCO0K8G.js";import"./index-CZ_CdPGB.js";const z=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,c="NIxkkfL",l=T(c);_.r(c,()=>L);const x={};l._=f(function(o,t,a,n,y,E){const{header:e={},class:p,renderBody:$,...v}=o;i(D,w(()=>(d("header",{...e,class:[e.class,"toast-dialog__title"]}),O=>{S(O,$,null,null,null,null,a,"1")}),{...v,baseEl:"aside",transitionEl:"root",isModal:!1,classPrefix:"toast-dialog",closeButtonClass:["icon-btn--transparent"],class:[p,"toast-dialog--transition"],header:void 0}),t,a,"0",[["open","emit",!1,["open"]],["close","emit",!1,["close"]]])},{t:c,s:!0},x);l.Component=k(x,l._);const m="ehXzskpl",r=T(m),A=C("p",null,1).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit"),H=C("p",null,1).e("a",{href:"http://www.ebay.com"},1).t("www.ebay.com");_.r(m,()=>r);const B={onCreate(){this.state={open:!1}},openToast(){this.state.open=!0},closeToast(){this.state.open=!1,this.emit("close")}};r._=f(function(o,t,a,n,y,E){i(l,w(()=>(d("header",{renderBody:e=>{e.t("Heading",n)}}),d("footer",{renderBody:e=>{i(u,{accesskey:"i",renderBody:p=>{p.t("Close",n)}},e,a,"1",[["click","closeToast",!1]])}}),e=>{e.n(A,n),e.n(H,n)}),{a11yCloseText:"Close Toast",open:y.open,...o,header:void 0,footer:void 0}),t,a,"0",[["open","emit",!1,["open"]],["close","closeToast",!1]]),i(u,{renderBody:e=>{e.t("Open Toast",n)}},t,a,"5",[["click","openToast",!1]])},{t:m},B);r.Component=k(B,r._);const I=`<ebay-toast-dialog a11yCloseText="Close Toast" open=state.open on-open('emit', 'open') on-close("closeToast") ...input>
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
`,V=o=>({input:{...o,spread:null,...o.spread,renderBody:o.renderBody?t=>{t.html(o.renderBody)}:null}}),se={title:"dialogs/ebay-toast-dialog",component:r,parameters:{docs:{description:{component:z}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether toast is open.",table:{disable:!0}},a11yCloseText:{control:{type:"text"},description:" A11y text for close button."},header:{name:"@header",description:"The header to be displayed in the toast dialog",table:{category:"@attribute tags"}},onOpen:{action:"on-open",description:"Triggered on dialog opened",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered on dialog closed.",table:{category:"Events",defaultValue:{summary:""}}}}},s=V.bind({});s.args={};s.parameters={docs:{source:{code:I}}};var b,g,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    spread: null,
    ...args.spread,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const re=["Default"];export{s as Default,re as __namedExportsOrder,se as default};
