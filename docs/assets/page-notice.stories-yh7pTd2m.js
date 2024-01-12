import{t as L}from"./index-iqhZMf16.js";import{a as R}from"./utils-NX-dnf4r.js";import{t as g,r as f,b,d as _}from"./registry-EgEQwbXk.js";/* empty css             */import{_ as V}from"./index-p36K_MO-.js";import{_ as p}from"./render-tag-_0PNNh6Y.js";import{_ as c}from"./v-element-wxdcHeY-.js";import{_ as u}from"./self-iterator-6yU_KG2T.js";import{_ as U}from"./index-zHkBu-9r.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";import"./index-Y-vY-heD.js";import"./index-eucXA0ea.js";import"./dynamic-tag-7vXwaVzE.js";import"./index-YaSSGaP-.js";/* empty css             */import"./index--8xUDD5P.js";const j=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;class z extends Marko.Component{onCreate(){this.state={dismissed:!1}}onInput(n){this.state={dismissed:n.dismissed||!1}}onDismiss(){this.state.dismissed=!0,this.emit("dismiss")}}const k="pe4oXAuF",l=g(k),x=l;f.r(k,()=>l);const P=z;l._=b(function(t,n,s,o,h,C){const{status:e="attention",...y}=t;h.dismissed||p(V,{...y,class:[`page-notice--${e}`,t.class],status:e,role:"region",prefixClass:"page-notice"},n,s,"0",[["dismiss","onDismiss",!1]])},{t:k},P);l.Component=_(P,l._);const T="7E07Je/p",m=g(T),H=c("div",null,"1",null,1,0).t("Notice title"),J=c("p",null,"3",null,2,0).e("strong",null,"4",null,1,0).t("Error:").t(" Please take another look at the following:"),M=c("p",null,"5",null,5,0).e("a",{href:"#"},"6",null,1,0).t("Card number").t(", ").e("a",{href:"#"},"7",null,1,0).t("Expiration date").t(" & ").e("a",{href:"#"},"8",null,1,0).t("Security code");f.r(T,()=>m);const F={};m._=b(function(t,n,s,o,h,C){p(x,{...t,title:{renderBody:e=>{e.n(H,o)},[Symbol.iterator]:u},footer:{renderBody:e=>{p(U,{renderBody:y=>{y.t("Footer",o)}},e,s,"2")},[Symbol.iterator]:u},renderBody:e=>{e.n(J,o),e.n(M,o)}},n,s,"0")},{t:T,i:!0},F);m.Component=_(F,m._);const O=`<ebay-page-notice ...input>
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
`,w="2HoyE4gY",d=g(w),X=c("div",null,"1",null,1,0).t("Notice title"),Y=c("p",null,"2",null,2,0).e("strong",null,"3",null,1,0).t("Error:").t(" Please take another look at the following:"),q=c("p",null,"4",null,5,0).e("a",{href:"#"},"5",null,1,0).t("Card number").t(", ").e("a",{href:"#"},"6",null,1,0).t("Expiration date").t(" & ").e("a",{href:"#"},"7",null,1,0).t("Security code");f.r(w,()=>d);const W={};d._=b(function(t,n,s,o,h,C){p(x,{...t,title:{renderBody:e=>{e.n(X,o)},[Symbol.iterator]:u},cta:{href:"https://www.ebay.com",renderBody:e=>{e.t("Link here",o)},[Symbol.iterator]:u},renderBody:e=>{e.n(Y,o),e.n(q,o)}},n,s,"0",[["dismiss","emit",!1,["dismiss"]]])},{t:w},W);d.Component=_(W,d._);const G=`class {}
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
`,K=t=>({input:R(t)}),ye={title:"notices & tips/ebay-page-notice",component:x,parameters:{docs:{description:{component:j}}},argTypes:{status:{table:{defaultValue:{summary:"attention"}},description:"The icon used and status of the notice",options:["attention","confirmation","information","celebration"],type:"select"},icon:{table:{defaultValue:{summary:"default"}},options:["default","none"],type:"select",description:'matches whatever is specified by the "status", or if none hides icon'},a11yIconText:{description:"adding description for the icon in the notice for a11y users"},a11yDismissText:{description:"This adds a dismiss icon allowing the notice to be dismissed/hidden and sets the a11y text on the icon"},dismissed:{description:"whether or not the notice is dismissed",type:"boolean"},title:{name:"@title",description:"The title content to be displayed. Used mostly for celebration notice",table:{category:"@attribute tags"}},footer:{name:"@footer",description:"The footer content to be displayed. Used to show the dismiss button generally",table:{category:"@attribute tags"}},cta:{name:"@cta",description:"This allows the addition of a main CTA link",table:{category:"@attribute tags"}},onDismiss:{action:"on-dismiss",description:"Triggered on notice dismiss",table:{category:"Events",defaultValue:{summary:""}}}}},a=K.bind({});a.args={a11yText:"attention",a11yIconText:"",a11yDismissText:"",status:null,icon:null,cta:null,dismissed:!1,title:{renderBody:"An error has occurred"},renderBody:`<p><strong>Error:</strong> Please take another look at the following:</p>
    <p>
        <a href='#'>Card number</a>
        ,
        <a href='#'>Expiration date</a>
        &amp;
        <a href='#'>Security code</a>
    </p>`};a.parameters={docs:{source:{code:L("ebay-page-notice",a.args)}}};const i=t=>({input:t,component:m});i.args={a11yText:"attention",a11yIconText:"",a11yDismissText:"",status:null,icon:null};i.parameters={docs:{source:{code:O}}};const r=t=>({input:t,component:d});r.args={a11yText:"information",a11yIconText:"",a11yDismissText:"Dismiss Notice",status:"information",icon:null};r.parameters={docs:{source:{code:G}}};var E,S,B;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(B=(S=a.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var D,$,v;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
  input: args,
  component: withAction
})`,...(v=($=i.parameters)==null?void 0:$.docs)==null?void 0:v.source}}};var A,N,I;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
  input: args,
  component: withDismiss
})`,...(I=(N=r.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};const ge=["Basic","WithAction","WithDismiss"];export{a as Basic,i as WithAction,r as WithDismiss,ge as __namedExportsOrder,ye as default};
