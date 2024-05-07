import{t as R}from"./index-CCz6reEH.js";import{a as V}from"./utils-DWCsNc5l.js";import{t as g,r as f,b,d as _}from"./registry-DcejNBCz.js";/* empty css             */import{_ as U}from"./index-DvtCZkQs.js";import{_ as l}from"./render-tag-BBOJ9dEX.js";import{_ as c}from"./const-element-Bq6J7aqh.js";import{i as P,a as u}from"./attr-tag-DphMQldM.js";import{_ as j}from"./index-C8RfWRsO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-ycIKh44U.js";import"./index-CenZB3al.js";import"./index-Bhlq2imz.js";import"./dynamic-tag-CH7Ufq3Q.js";import"./index-CkvNWpCJ.js";import"./index-GwxNDCaO.js";/* empty css                    *//* empty css               *//* empty css             */import"./index-BIEPBgsb.js";import"./index-blmbJU0z.js";const z=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;class H extends Marko.Component{onCreate(){this.state={dismissed:!1}}onInput(n){this.state={dismissed:n.dismissed||!1}}onDismiss(){this.state.dismissed=!0,this.emit("dismiss")}}const k="pe4oXAuF",m=g(k),x=m;f.r(k,()=>m);const F=H;m._=b(function(t,n,s,o,h,C){const{status:e="attention",...y}=t;h.dismissed||l(U,{...y,class:[`page-notice--${e}`,t.class],status:e,role:"region",prefixClass:"page-notice"},n,s,"0",[["dismiss","onDismiss",!1]])},{t:k},F);m.Component=_(F,m._);const T="7E07Je/p",d=g(T),J=c("div",null,1).t("Notice title"),M=c("p",null,2).e("strong",null,1).t("Error:").t(" Please take another look at the following:"),O=c("p",null,5).e("a",{href:"#"},1).t("Card number").t(", ").e("a",{href:"#"},1).t("Expiration date").t(" & ").e("a",{href:"#"},1).t("Security code");f.r(T,()=>d);const W={};d._=b(function(t,n,s,o,h,C){l(x,P(()=>(u("title",{renderBody:e=>{e.n(J,o)}}),u("footer",{renderBody:e=>{l(j,{renderBody:y=>{y.t("Footer",o)}},e,s,"2")}}),e=>{e.n(M,o),e.n(O,o)}),{...t,title:void 0,footer:void 0}),n,s,"0")},{t:T,i:!0},W);d.Component=_(W,d._);const X=`<ebay-page-notice ...input>
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
`,w="2HoyE4gY",p=g(w),Y=c("div",null,1).t("Notice title"),q=c("p",null,2).e("strong",null,1).t("Error:").t(" Please take another look at the following:"),G=c("p",null,5).e("a",{href:"#"},1).t("Card number").t(", ").e("a",{href:"#"},1).t("Expiration date").t(" & ").e("a",{href:"#"},1).t("Security code");f.r(w,()=>p);const L={};p._=b(function(t,n,s,o,h,C){l(x,P(()=>(u("title",{renderBody:e=>{e.n(Y,o)}}),u("cta",{href:"https://www.ebay.com",renderBody:e=>{e.t("Link here",o)}}),e=>{e.n(q,o),e.n(G,o)}),{...t,title:void 0,cta:void 0}),n,s,"0",[["dismiss","emit",!1,["dismiss"]]])},{t:w},L);p.Component=_(L,p._);const K=`class {}
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
`,Q=t=>({input:V(t)}),xe={title:"notices & tips/ebay-page-notice",component:x,parameters:{docs:{description:{component:z}}},argTypes:{status:{table:{defaultValue:{summary:"attention"}},description:"The icon used and status of the notice",options:["attention","confirmation","information","celebration"],type:"select"},icon:{table:{defaultValue:{summary:"default"}},options:["default","none"],type:"select",description:'matches whatever is specified by the "status", or if none hides icon'},a11yIconText:{description:"adding description for the icon in the notice for a11y users"},a11yDismissText:{description:"This adds a dismiss icon allowing the notice to be dismissed/hidden and sets the a11y text on the icon"},dismissed:{description:"whether or not the notice is dismissed",type:"boolean"},title:{name:"@title",description:"The title content to be displayed. Used mostly for celebration notice",table:{category:"@attribute tags"}},footer:{name:"@footer",description:"The footer content to be displayed. Used to show the dismiss button generally",table:{category:"@attribute tags"}},cta:{name:"@cta",description:"This allows the addition of a main CTA link",table:{category:"@attribute tags"}},onDismiss:{action:"on-dismiss",description:"Triggered on notice dismiss",table:{category:"Events",defaultValue:{summary:""}}}}},a=Q.bind({});a.args={a11yText:"attention",a11yIconText:"",a11yDismissText:"",status:null,icon:null,cta:null,dismissed:!1,title:{renderBody:"An error has occurred"},renderBody:`<p><strong>Error:</strong> Please take another look at the following:</p>
    <p>
        <a href='#'>Card number</a>
        ,
        <a href='#'>Expiration date</a>
        &amp;
        <a href='#'>Security code</a>
    </p>`};a.parameters={docs:{source:{code:R("ebay-page-notice",a.args)}}};const i=t=>({input:t,component:d});i.args={a11yText:"attention",a11yIconText:"",a11yDismissText:"",status:null,icon:null};i.parameters={docs:{source:{code:X}}};const r=t=>({input:t,component:p});r.args={a11yText:"information",a11yIconText:"",a11yDismissText:"Dismiss Notice",status:"information",icon:null};r.parameters={docs:{source:{code:K}}};var E,D,v;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(v=(D=a.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var B,$,S;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  input: args,
  component: withAction
})`,...(S=($=i.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};var A,N,I;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
  input: args,
  component: withDismiss
})`,...(I=(N=r.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};const Te=["Basic","WithAction","WithDismiss"];export{a as Basic,i as WithAction,r as WithDismiss,Te as __namedExportsOrder,xe as default};
