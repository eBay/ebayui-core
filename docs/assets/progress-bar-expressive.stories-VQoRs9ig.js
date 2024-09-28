import{b as $,a as ke}from"./utils-DWCsNc5l.js";import{t as le}from"./index-CCz6reEH.js";import{t as l,r as u,b as c,d as Ce,p as $e,e as S,c as y}from"./registry-CtNeIPU8.js";import{_ as K}from"./dynamic-tag-HMZVE1pc.js";import{_ as Se}from"./preserve-tag-BhjIElGR.js";import{_ as b}from"./render-tag-mtfFSHEK.js";import{i as z,r as n}from"./attr-tag-DphMQldM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const De=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,w=typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,_=1500,ue=1.5,A=833;class ze extends Marko.Component{onCreate(e){this.fadeInFirstMessage=e.size!=="medium",this.state={isInitialMessage:!0,messageIsFadingIn:!1,currentMessageIndex:-1,nextMessageIndex:0},this.timeouts={fadeIn:void 0,showMessage:void 0}}onInput(e){this.initializeMessageRotation(e.messages)}onDestroy(){this.clearTimeouts()}clearTimeouts(){clearTimeout(this.timeouts.fadeIn),clearTimeout(this.timeouts.showMessage)}initializeMessageRotation(e){const a=(e==null?void 0:e.length)||0;a>0&&(this.state.nextMessageIndex>=a&&(this.state.nextMessageIndex=0),this.clearTimeouts(),setTimeout(()=>{this.state.isInitialMessage=!1},_),this.fadeInFirstMessage?w?this.showMessage(e,A):setTimeout(this.fadeInMessage.bind(this),a===1?_/2:_):this.showMessage(e))}getMessageDuration(e){return((e==null?void 0:e.duration)||_)*(w?ue:1)}fadeInMessage(){this.state.messageIsFadingIn=!0,this.timeouts.showMessage=setTimeout(this.showMessage.bind(this),A)}showMessage(e=this.input.messages,a=0){if(e){const s=e.length;if(s>1){const t=this.state.nextMessageIndex,d=t===s-1?0:t+1;this.state.currentMessageIndex=t,this.state.messageIsFadingIn=!1,this.state.nextMessageIndex=d,this.timeouts.fadeIn=setTimeout(this.fadeInMessage.bind(this),a+this.getMessageDuration(e[t]))}else this.state.currentMessageIndex=0,this.state.messageIsFadingIn=!1}}}const F="KJkoLnCh",i=l(F);u.r(F,()=>i);const ce=ze;i._=c(function(o,e,a,s,t,d){var j,q;const{a11yText:r="Loading...",class:Me,messages:p,size:ve,...Ie}=o;if(e.be("div",Ce($e(Ie),{class:S(["progress-bar-expressive",Me])}),"0",s,null,4),p&&p.length>0){const h=(j=p[t.currentMessageIndex])==null?void 0:j.renderBody,E=(q=p[t.nextMessageIndex])==null?void 0:q.renderBody;e.be("div",{class:S(["progress-bar-expressive__messages",ve==="medium"&&"progress-bar-expressive__messages--medium"])},"1",s,null,1),!w&&p.length>1&&(e.be("div",{"aria-hidden":"true",class:S(["progress-bar-expressive__message",t.messageIsFadingIn&&"progress-bar-expressive__message--in"])},"2",s,null,0),K(e,E,null,null,null,null,a,"3"),e.ee()),e.be("div",{role:"status",id:a.elId("message"),class:S(["progress-bar-expressive__message",t.messageIsFadingIn&&"progress-bar-expressive__message--out",p.length===1&&"progress-bar-expressive__message--in",t.isInitialMessage&&"progress-bar-expressive__message--initial"])},"4",s,null,0),K(e,h,null,null,null,null,a,"5"),e.ee(),e.ee()}e.be("div",{role:"progressbar","aria-label":r,"aria-describedby":a.elId("message"),class:"progress-bar-expressive__progress"},"6",s,null,0),b(Se,{n:!0,b:!0,renderBody:h=>{h.be("div",{class:"progress-bar-expressive__lines"},"7",s,null,1);for(let E=11/1,W=0;W<=E;W++){const Be=`[${1+W*1}]`;h.e("div",{class:"progress-bar-expressive__line"},"8"+Be,s,0,1)}h.ee()}},e,a,"6"),e.ee(),e.ee()},{t:F},ce);i.Component=y(ce,i._);const L="gFVqNIji",v=l(L);u.r(L,()=>v);const ye={};v._=c(function(o,e,a,s,t,d){b(i,z(()=>{n("messages",{duration:2e3,renderBody:r=>{r.t("Display for 2 seconds",s)}}),n("messages",{duration:3e3,renderBody:r=>{r.t("Display for 3 seconds",s)}}),n("messages",{duration:4e3,renderBody:r=>{r.t("Display for 4 seconds",s)}})},{...o,messages:void 0}),e,a,"0")},{t:L,i:!0},ye);v.Component=y(ye,v._);const Ee=`<ebay-progress-bar-expressive ...input>
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
`,J="$jdhijic",I=l(J);u.r(J,()=>I);const be={};I._=c(function(o,e,a,s,t,d){b(i,o,e,a,"0")},{t:J,i:!0},be);I.Component=y(be,I._);const We=`<ebay-progress-bar-expressive ...input/>
`,R="blFVJ_Jm",B=l(R);u.r(R,()=>B);const he={};B._=c(function(o,e,a,s,t,d){b(i,z(()=>{n("messages",{renderBody:r=>{r.t("Espera...",s)}}),n("messages",{duration:2e3,renderBody:r=>{r.t("Estamos procesando tu pedido",s)}}),n("messages",{renderBody:r=>{r.t("Sólo un momento más",s)}})},{a11yText:"Cargando...",...o,messages:void 0}),e,a,"0")},{t:R,i:!0},he);B.Component=y(he,B._);const we=`<ebay-progress-bar-expressive a11yText="Cargando..." ...input>
    <@message>Espera...</@message>
    <@message duration=2000>
        Estamos procesando tu pedido
    </@message>
    <@message>Sólo un momento más</@message>
</ebay-progress-bar-expressive>
`,H="RpBdqmeg",k=l(H);u.r(H,()=>k);const _e={};k._=c(function(o,e,a,s,t,d){b(i,z(()=>{n("messages",{renderBody:r=>{r.t("Hang tight",s)}}),n("messages",{renderBody:r=>{r.t("We're processing your order",s)}}),n("messages",{renderBody:r=>{r.t("Just a moment longer",s)}})},{size:"medium",...o,messages:void 0}),e,a,"0")},{t:H,i:!0},_e);k.Component=y(_e,k._);const Fe=`<ebay-progress-bar-expressive size="medium" ...input>
    <@message>Hang tight</@message>
    <@message>We're processing your order</@message>
    <@message>Just a moment longer</@message>
</ebay-progress-bar-expressive>
`,V="JdmwqKGk",C=l(V);u.r(V,()=>C);const xe={};C._=c(function(o,e,a,s,t,d){b(i,z(()=>{n("messages",{renderBody:r=>{r.t("Hang tight",s)}}),n("messages",{renderBody:r=>{r.t("We're processing your order",s)}}),n("messages",{renderBody:r=>{r.t("Just a moment longer",s)}})},{...o,messages:void 0}),e,a,"0")},{t:V,i:!0},xe);C.Component=y(xe,C._);const Le=`<ebay-progress-bar-expressive ...input>
    <@message>Hang tight</@message>
    <@message>We're processing your order</@message>
    <@message>Just a moment longer</@message>
</ebay-progress-bar-expressive>
`,fe=o=>({input:ke(o)}),Te=[{renderBody:"Hang tight"},{renderBody:"We're processing your order"},{renderBody:"Just a moment longer"}],Oe={title:"progress/ebay-progress-bar-expressive",component:i,parameters:{docs:{description:{component:De}},layout:"fullscreen"},argTypes:{a11yText:{control:{type:"text"},description:"Localized, accessible label for the progress bar",table:{defaultValue:{summary:"Loading..."}}},messages:{control:{type:"array"},description:`Short messages to display above the progress bar. Specify the renderBody and, optionally, a custom duration. By default, messages display for ${_}ms. When the user prefers reduced motion, each message will display for ${ue} times its duration.`,table:{defaultValue:{summary:"[]"}}},size:{type:"enum",control:{type:"select"},options:["large","medium"],description:"Message text size",table:{defaultValue:{summary:"large"}}}}},D=$(I,We),m=fe.bind({});m.args={messages:[{renderBody:"We're processing your order"}]};m.parameters={docs:{source:{code:le("ebay-progress-bar-expressive",m.args)}}};const x=$(C,Le);x.args={messages:Te};const g=fe.bind({});g.args={messages:[{renderBody:"Messages should be one line..."},{renderBody:"Sometimes that's hard to guarantee, though.",duration:2500},{renderBody:"That's okay!"}]};g.parameters={docs:{source:{code:le("ebay-progress-bar-expressive",g.args)}}};const f=$(v,Ee);f.args={messages:[{renderBody:"Display for 2 seconds",duration:2e3},{renderBody:"Display for 3 seconds",duration:3e3},{renderBody:"Display for 4 seconds",duration:4e3}]};const T=$(B,we);T.args={a11yText:"Cargando...",messages:[{renderBody:"Espera..."},{renderBody:"Estamos procesando tu pedido",duration:2e3},{renderBody:"Sólo un momento más"}]};const M=$(k,Fe);M.args={size:"medium",messages:Te};var G,N,O;D.parameters={...D.parameters,docs:{...(G=D.parameters)==null?void 0:G.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...(O=(N=D.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var P,Q,U;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(U=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:"buildExtensionTemplate(MessagesTemplate, MessagesTemplateCode)",...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,se,re;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(re=(se=g.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ae,te,oe;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:"buildExtensionTemplate(CustomTimingTemplate, CustomTimingTemplateCode)",...(oe=(te=f.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ne,ie,de;T.parameters={...T.parameters,docs:{...(ne=T.parameters)==null?void 0:ne.docs,source:{originalSource:"buildExtensionTemplate(LocalizedTemplate, LocalizedTemplateCode)",...(de=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var me,ge,pe;M.parameters={...M.parameters,docs:{...(me=M.parameters)==null?void 0:me.docs,source:{originalSource:"buildExtensionTemplate(MediumTextTemplate, MediumTextTemplateCode)",...(pe=(ge=M.parameters)==null?void 0:ge.docs)==null?void 0:pe.source}}};const Pe=["Default","WithSingleMessage","WithMessages","WithLongMessage","WithCustomTiming","Localized","MediumSize"];export{D as Default,T as Localized,M as MediumSize,f as WithCustomTiming,g as WithLongMessage,x as WithMessages,m as WithSingleMessage,Pe as __namedExportsOrder,Oe as default};
