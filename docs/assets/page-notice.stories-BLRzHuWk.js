import{t as V}from"./index-CCz6reEH.js";import{a as L}from"./utils-DWCsNc5l.js";import{t as g,r as f,b,c as _}from"./registry-CtNeIPU8.js";/* empty css             */import{_ as F}from"./index-BivOxxw5.js";import{_ as l}from"./render-tag-mtfFSHEK.js";import{_ as m}from"./const-element-D4l_3TxL.js";import{i as I,a as u}from"./attr-tag-DphMQldM.js";import{_ as U}from"./index-qNYgSJLs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-CVm234Yh.js";import"./index-B6qYX52F.js";import"./index-TT4a-3DX.js";import"./dynamic-tag-HMZVE1pc.js";import"./index-Ca3E2DLc.js";import"./index-CX_T96nQ.js";/* empty css                    *//* empty css               *//* empty css             */import"./index-BwvkvsZu.js";import"./index-CbT4wDAv.js";const j=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-page-notice
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

The \`<ebay-page-notice>\` is a tag used to create a custom-designed notice element. The notice can be single or multi-line but each line should be wrapped inside a \`<p>\` tag.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/notices-tips-ebay-page-notice)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/notices-tips-ebay-page-notice)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-page-notice/examples)
`;class z extends Marko.Component{onCreate(){this.state={dismissed:!1}}onInput(n){this.state={dismissed:n.dismissed||!1}}onDismiss(){this.state.dismissed=!0,this.emit("dismiss")}}const k="ARftxVBi",s=g(k);f.r(k,()=>s);const P=z;s._=b(function(t,n,i,o,h,w){const{status:e="attention",...y}=t;h.dismissed||l(F,{...y,class:[`page-notice--${e}`,t.class],status:e,role:"region",prefixClass:"page-notice"},n,i,"0",[["dismiss","onDismiss",!1]])},{t:k},P);s.Component=_(P,s._);const x="AE$ysXgm",d=g(x),M=m("div",null,1).t("Notice title"),O=m("p",null,2).e("strong",null,1).t("Error:").t(" Please take another look at the following:"),X=m("p",null,5).e("a",{href:"#"},1).t("Card number").t(", ").e("a",{href:"#"},1).t("Expiration date").t(" & ").e("a",{href:"#"},1).t("Security code");f.r(x,()=>d);const W={};d._=b(function(t,n,i,o,h,w){l(s,I(()=>(u("title",{renderBody:e=>{e.n(M,o)}}),u("footer",{renderBody:e=>{l(U,{renderBody:y=>{y.t("Footer",o)}},e,i,"2")}}),e=>{e.n(O,o),e.n(X,o)}),{...t,title:void 0,footer:void 0}),n,i,"0")},{t:x,i:!0},W);d.Component=_(W,d._);const q=`<ebay-page-notice ...input>
    <@title>
        <div>Notice title</div>
    </@title>
    <@footer>
        <ebay-fake-link>Footer</ebay-fake-link>
    </@footer>
    <p>
        <strong>Error:</strong> Please take another look at the following:
    </p>
    <p>
        <a href="#">Card number</a>,
        <a href="#">Expiration date</a>
        &amp;
        <a href="#">Security code</a>
    </p>
</ebay-page-notice>
`,T="LWhkv$fl",p=g(T),G=m("div",null,1).t("Notice title"),H=m("p",null,2).e("strong",null,1).t("Error:").t(" Please take another look at the following:"),J=m("p",null,5).e("a",{href:"#"},1).t("Card number").t(", ").e("a",{href:"#"},1).t("Expiration date").t(" & ").e("a",{href:"#"},1).t("Security code");f.r(T,()=>p);const R={};p._=b(function(t,n,i,o,h,w){l(s,I(()=>(u("title",{renderBody:e=>{e.n(G,o)}}),u("cta",{href:"https://www.ebay.com",renderBody:e=>{e.t("Link here",o)}}),e=>{e.n(H,o),e.n(J,o)}),{...t,title:void 0,cta:void 0}),n,i,"0",[["dismiss","emit",!1,["dismiss"]]])},{t:T},R);p.Component=_(R,p._);const K=`class {}
<ebay-page-notice ...input on-dismiss('emit', 'dismiss')>
    <@title>
        <div>Notice title</div>
    </@title>
    <@cta href="https://www.ebay.com">Link here</@cta>
    <p>
        <strong>Error:</strong> Please take another look at the following:
    </p>
    <p>
        <a href="#">Card number</a>,
        <a href="#">Expiration date</a>
        &amp;
        <a href="#">Security code</a>
    </p>
</ebay-page-notice>
`,Q=t=>({input:L(t)}),ke={title:"notices & tips/ebay-page-notice",component:s,parameters:{docs:{description:{component:j}}},argTypes:{status:{table:{defaultValue:{summary:"attention"}},description:"The icon used and status of the notice",options:["attention","confirmation","information","celebration"],type:"select"},icon:{table:{defaultValue:{summary:"default"}},options:["default","none"],type:"select",description:'matches whatever is specified by the "status", or if none hides icon'},a11yIconText:{description:"adding description for the icon in the notice for a11y users"},a11yDismissText:{description:"This adds a dismiss icon allowing the notice to be dismissed/hidden and sets the a11y text on the icon"},dismissed:{description:"whether or not the notice is dismissed",type:"boolean"},title:{name:"@title",description:"The title content to be displayed. Used mostly for celebration notice",table:{category:"@attribute tags"}},footer:{name:"@footer",description:"The footer content to be displayed. Used to show the dismiss button generally",table:{category:"@attribute tags"}},cta:{name:"@cta",description:"This allows the addition of a main CTA link",table:{category:"@attribute tags"}},onDismiss:{action:"on-dismiss",description:"Triggered on notice dismiss",table:{category:"Events",defaultValue:{summary:""}}}}},a=Q.bind({});a.args={a11yText:"attention",a11yIconText:"",a11yDismissText:"",status:null,icon:null,cta:null,dismissed:!1,title:{renderBody:"An error has occurred"},renderBody:`<p><strong>Error:</strong> Please take another look at the following:</p>
    <p>
        <a href='#'>Card number</a>
        ,
        <a href='#'>Expiration date</a>
        &amp;
        <a href='#'>Security code</a>
    </p>`};a.parameters={docs:{source:{code:V("ebay-page-notice",a.args)}}};const r=t=>({input:t,component:d});r.args={a11yText:"attention",a11yIconText:"",a11yDismissText:"",status:null,icon:null};r.parameters={docs:{source:{code:q}}};const c=t=>({input:t,component:p});c.args={a11yText:"information",a11yIconText:"",a11yDismissText:"Dismiss Notice",status:"information",icon:null};c.parameters={docs:{source:{code:K}}};var C,E,$;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...($=(E=a.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};var v,B,D;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  input: args,
  component: withAction
})`,...(D=(B=r.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var S,A,N;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  input: args,
  component: withDismiss
})`,...(N=(A=c.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};const xe=["Basic","WithAction","WithDismiss"];export{a as Basic,r as WithAction,c as WithDismiss,xe as __namedExportsOrder,ke as default};
