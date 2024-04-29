import{b as $,a as ke}from"./utils-DWCsNc5l.js";import{t as ue}from"./index-CCz6reEH.js";import{t as p,r as l,b as u,e as Se,p as $e,f as z,d as c}from"./registry-DcejNBCz.js";import{_ as G}from"./dynamic-tag-CH7Ufq3Q.js";import{_ as ze}from"./preserve-tag-DbR6FWcg.js";import{_ as y}from"./render-tag-BBOJ9dEX.js";import{i as E,r as n}from"./attr-tag-DphMQldM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const De=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-progress-bar-expressive
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v3.1.1
    </span>
</h1>

\`\`\`marko
<ebay-progress-bar-expressive ...input>
    <@message>Hang tight</@message>
    <@message duration=2000>We're processing your order</@message>
    <@message>Just a moment longer</@message>
</ebay-progress-bar-expressive>

\`\`\`

The expressive progress bar can replace our traditional spinner to feel faster during periods of longer loading.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/progress-ebay-progress-bar-expressive)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/progress-ebay-progress-bar-expressive)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-progress-bar-expressive/examples)
`,F=typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,x=1500,ce=1.5,K=833;class Ee extends Marko.Component{onCreate(e){this.fadeInFirstMessage=e.size!=="medium",this.state={isInitialMessage:!0,messageIsFadingIn:!1,currentMessageIndex:-1,nextMessageIndex:0},this.timeouts={fadeIn:void 0,showMessage:void 0}}onInput(e){this.initializeMessageRotation(e.messages)}onDestroy(){this.clearTimeouts()}clearTimeouts(){clearTimeout(this.timeouts.fadeIn),clearTimeout(this.timeouts.showMessage)}initializeMessageRotation(e){const a=(e==null?void 0:e.length)||0;a>0&&(this.state.nextMessageIndex>=a&&(this.state.nextMessageIndex=0),this.clearTimeouts(),setTimeout(()=>{this.state.isInitialMessage=!1},x),this.fadeInFirstMessage?F?this.showMessage(e,K):setTimeout(this.fadeInMessage.bind(this),a===1?x/2:x):this.showMessage(e))}getMessageDuration(e){return((e==null?void 0:e.duration)||x)*(F?ce:1)}fadeInMessage(){this.state.messageIsFadingIn=!0,this.timeouts.showMessage=setTimeout(this.showMessage.bind(this),K)}showMessage(e=this.input.messages,a=0){if(e){const s=e.length;if(s>1){const t=this.state.nextMessageIndex,i=t===s-1?0:t+1;this.state.currentMessageIndex=t,this.state.messageIsFadingIn=!1,this.state.nextMessageIndex=i,this.timeouts.fadeIn=setTimeout(this.fadeInMessage.bind(this),a+this.getMessageDuration(e[t]))}else this.state.currentMessageIndex=0,this.state.messageIsFadingIn=!1}}}const L="kpTscZbg",v=p(L),b=v;l.r(L,()=>v);const ye=Ee;v._=u(function(o,e,a,s,t,i){var j,A;const{a11yText:r="Loading...",class:ve,messages:g,size:Ie,...Be}=o;if(e.be("div",Se($e(Be),{class:z(["progress-bar-expressive",ve])}),"0",s,null,4),g&&g.length>0){const h=(j=g[t.currentMessageIndex])==null?void 0:j.renderBody,W=(A=g[t.nextMessageIndex])==null?void 0:A.renderBody;e.be("div",{class:z(["progress-bar-expressive__messages",Ie==="medium"&&"progress-bar-expressive__messages--medium"])},"1",s,null,1),!F&&g.length>1&&(e.be("div",{"aria-hidden":"true",class:z(["progress-bar-expressive__message",t.messageIsFadingIn&&"progress-bar-expressive__message--in"])},"2",s,null,0),G(e,W,null,null,null,null,a,"3"),e.ee()),e.be("div",{role:"status",id:a.elId("message"),class:z(["progress-bar-expressive__message",t.messageIsFadingIn&&"progress-bar-expressive__message--out",g.length===1&&"progress-bar-expressive__message--in",t.isInitialMessage&&"progress-bar-expressive__message--initial"])},"4",s,null,0),G(e,h,null,null,null,null,a,"5"),e.ee(),e.ee()}e.be("div",{role:"progressbar","aria-label":r,"aria-describedby":a.elId("message"),class:"progress-bar-expressive__progress"},"6",s,null,0),y(ze,{n:!0,b:!0,renderBody:h=>{h.be("div",{class:"progress-bar-expressive__lines"},"7",s,null,1);for(let W=11/1,w=0;w<=W;w++){const Ce=`[${1+w*1}]`;h.e("div",{class:"progress-bar-expressive__line"},"8"+Ce,s,0,1)}h.ee()}},e,a,"6"),e.ee(),e.ee()},{t:L},ye);v.Component=c(ye,v._);const R="n1nMSh3G",I=p(R);l.r(R,()=>I);const be={};I._=u(function(o,e,a,s,t,i){y(b,E(()=>{n("messages",{duration:2e3,renderBody:r=>{r.t("Display for 2 seconds",s)}}),n("messages",{duration:3e3,renderBody:r=>{r.t("Display for 3 seconds",s)}}),n("messages",{duration:4e3,renderBody:r=>{r.t("Display for 4 seconds",s)}})},{...o,messages:void 0}),e,a,"0")},{t:R,i:!0},be);I.Component=c(be,I._);const We=`<ebay-progress-bar-expressive ...input>
    <@message duration=2000>
        Display for 2 seconds
    </@message>
    <@message duration=3000>
        Display for 3 seconds
    </@message>
    <@message duration=4000>
        Display for 4 seconds
    </@message>
</ebay-progress-bar-expressive>
`,H="KepeTrzp",B=p(H);l.r(H,()=>B);const he={};B._=u(function(o,e,a,s,t,i){y(b,o,e,a,"0")},{t:H,i:!0},he);B.Component=c(he,B._);const we=`<ebay-progress-bar-expressive ...input/>
`,J="9stNzlp5",C=p(J);l.r(J,()=>C);const xe={};C._=u(function(o,e,a,s,t,i){y(b,E(()=>{n("messages",{renderBody:r=>{r.t("Espera...",s)}}),n("messages",{duration:2e3,renderBody:r=>{r.t("Estamos procesando tu pedido",s)}}),n("messages",{renderBody:r=>{r.t("Sólo un momento más",s)}})},{a11yText:"Cargando...",...o,messages:void 0}),e,a,"0")},{t:J,i:!0},xe);C.Component=c(xe,C._);const Fe=`<ebay-progress-bar-expressive a11yText="Cargando..." ...input>
    <@message>Espera...</@message>
    <@message duration=2000>
        Estamos procesando tu pedido
    </@message>
    <@message>Sólo un momento más</@message>
</ebay-progress-bar-expressive>
`,V="dm3Rlfqd",k=p(V);l.r(V,()=>k);const _e={};k._=u(function(o,e,a,s,t,i){y(b,E(()=>{n("messages",{renderBody:r=>{r.t("Hang tight",s)}}),n("messages",{renderBody:r=>{r.t("We're processing your order",s)}}),n("messages",{renderBody:r=>{r.t("Just a moment longer",s)}})},{size:"medium",...o,messages:void 0}),e,a,"0")},{t:V,i:!0},_e);k.Component=c(_e,k._);const Le=`<ebay-progress-bar-expressive size="medium" ...input>
    <@message>Hang tight</@message>
    <@message>We're processing your order</@message>
    <@message>Just a moment longer</@message>
</ebay-progress-bar-expressive>
`,q="zqC7v/BY",S=p(q);l.r(q,()=>S);const fe={};S._=u(function(o,e,a,s,t,i){y(b,E(()=>{n("messages",{renderBody:r=>{r.t("Hang tight",s)}}),n("messages",{renderBody:r=>{r.t("We're processing your order",s)}}),n("messages",{renderBody:r=>{r.t("Just a moment longer",s)}})},{...o,messages:void 0}),e,a,"0")},{t:q,i:!0},fe);S.Component=c(fe,S._);const Re=`<ebay-progress-bar-expressive ...input>
    <@message>Hang tight</@message>
    <@message>We're processing your order</@message>
    <@message>Just a moment longer</@message>
</ebay-progress-bar-expressive>
`,Te=o=>({input:ke(o)}),Me=[{renderBody:"Hang tight"},{renderBody:"We're processing your order"},{renderBody:"Just a moment longer"}],Pe={title:"progress/ebay-progress-bar-expressive",component:b,parameters:{docs:{description:{component:De}},layout:"fullscreen"},argTypes:{a11yText:{control:{type:"text"},description:"Localized, accessible label for the progress bar",table:{defaultValue:{summary:"Loading..."}}},messages:{control:{type:"array"},description:`Short messages to display above the progress bar. Specify the renderBody and, optionally, a custom duration. By default, messages display for ${x}ms. When the user prefers reduced motion, each message will display for ${ce} times its duration.`,table:{defaultValue:{summary:"[]"}}},size:{type:"enum",control:{type:"select"},options:["large","medium"],description:"Message text size",table:{defaultValue:{summary:"large"}}}}},D=$(B,we),d=Te.bind({});d.args={messages:[{renderBody:"We're processing your order"}]};d.parameters={docs:{source:{code:ue("ebay-progress-bar-expressive",d.args)}}};const _=$(S,Re);_.args={messages:Me};const m=Te.bind({});m.args={messages:[{renderBody:"Messages should be one line..."},{renderBody:"Sometimes that's hard to guarantee, though.",duration:2500},{renderBody:"That's okay!"}]};m.parameters={docs:{source:{code:ue("ebay-progress-bar-expressive",m.args)}}};const f=$(I,We);f.args={messages:[{renderBody:"Display for 2 seconds",duration:2e3},{renderBody:"Display for 3 seconds",duration:3e3},{renderBody:"Display for 4 seconds",duration:4e3}]};const T=$(C,Fe);T.args={a11yText:"Cargando...",messages:[{renderBody:"Espera..."},{renderBody:"Estamos procesando tu pedido",duration:2e3},{renderBody:"Sólo un momento más"}]};const M=$(k,Le);M.args={size:"medium",messages:Me};var N,O,P;D.parameters={...D.parameters,docs:{...(N=D.parameters)==null?void 0:N.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...(P=(O=D.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var Y,Z,Q;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(Q=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:Q.source}}};var U,X,ee;_.parameters={..._.parameters,docs:{...(U=_.parameters)==null?void 0:U.docs,source:{originalSource:"buildExtensionTemplate(MessagesTemplate, MessagesTemplateCode)",...(ee=(X=_.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var se,re,ae;m.parameters={...m.parameters,docs:{...(se=m.parameters)==null?void 0:se.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(ae=(re=m.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,oe,ne;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:"buildExtensionTemplate(CustomTimingTemplate, CustomTimingTemplateCode)",...(ne=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ie,de,me;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:"buildExtensionTemplate(LocalizedTemplate, LocalizedTemplateCode)",...(me=(de=T.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ge,pe,le;M.parameters={...M.parameters,docs:{...(ge=M.parameters)==null?void 0:ge.docs,source:{originalSource:"buildExtensionTemplate(MediumTextTemplate, MediumTextTemplateCode)",...(le=(pe=M.parameters)==null?void 0:pe.docs)==null?void 0:le.source}}};const Ye=["Default","WithSingleMessage","WithMessages","WithLongMessage","WithCustomTiming","Localized","MediumSize"];export{D as Default,T as Localized,M as MediumSize,f as WithCustomTiming,m as WithLongMessage,_ as WithMessages,d as WithSingleMessage,Ye as __namedExportsOrder,Pe as default};
