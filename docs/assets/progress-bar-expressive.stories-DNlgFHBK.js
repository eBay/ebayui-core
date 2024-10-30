import{b as $,a as Ce}from"./utils-DWCsNc5l.js";import{t as le}from"./index-CCz6reEH.js";import{t as l,r as u,b as c,d as $e,p as Se,e as S,c as y}from"./registry-CyswyZw5.js";import{_ as K}from"./dynamic-tag-CXXozR29.js";import{_ as De}from"./preserve-tag-s8hZOZFS.js";import{_ as b}from"./render-tag-CLyPs9qZ.js";import{i as z,r as n}from"./attr-tag-DphMQldM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const ze=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,W=typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,_=1500,ue=1.5,A=833;class Ee extends Marko.Component{onCreate(e){this.fadeInFirstMessage=e.size!=="medium",this.state={isInitialMessage:!0,messageIsFadingIn:!1,currentMessageIndex:-1,nextMessageIndex:0},this.timeouts={fadeIn:void 0,showMessage:void 0}}onInput(e){this.initializeMessageRotation(e.messages)}onDestroy(){this.clearTimeouts()}clearTimeouts(){clearTimeout(this.timeouts.fadeIn),clearTimeout(this.timeouts.showMessage)}initializeMessageRotation(e){const a=[...e||[]].length;a>0&&(this.state.nextMessageIndex>=a&&(this.state.nextMessageIndex=0),this.clearTimeouts(),setTimeout(()=>{this.state.isInitialMessage=!1},_),this.fadeInFirstMessage?W?this.showMessage(e,A):setTimeout(this.fadeInMessage.bind(this),a===1?_/2:_):this.showMessage(e))}getMessageDuration(e){return((e==null?void 0:e.duration)||_)*(W?ue:1)}fadeInMessage(){this.state.messageIsFadingIn=!0,this.timeouts.showMessage=setTimeout(this.showMessage.bind(this),A)}showMessage(e=this.input.messages,a=0){const s=[...e||[]];if(e){const o=s.length;if(o>1){const i=this.state.nextMessageIndex,r=i===o-1?0:i+1;this.state.currentMessageIndex=i,this.state.messageIsFadingIn=!1,this.state.nextMessageIndex=r,this.timeouts.fadeIn=setTimeout(this.fadeInMessage.bind(this),a+this.getMessageDuration(s[i]))}else this.state.currentMessageIndex=0,this.state.messageIsFadingIn=!1}}}const F="KJkoLnCh",m=l(F);u.r(F,()=>m);const ce=Ee;m._=c(function(t,e,a,s,o,i){var j,q;const{a11yText:r="Loading...",class:Te,messages:ve=[],size:Ie,...Be}=t,p=[...ve];if(e.be("div",$e(Se(Be),{class:S(["progress-bar-expressive",Te])}),"0",s,null,4),p&&p.length>0){const h=(j=p[o.currentMessageIndex])==null?void 0:j.renderBody,E=(q=p[o.nextMessageIndex])==null?void 0:q.renderBody;e.be("div",{class:S(["progress-bar-expressive__messages",Ie==="medium"&&"progress-bar-expressive__messages--medium"])},"1",s,null,1),!W&&p.length>1&&(e.be("div",{"aria-hidden":"true",class:S(["progress-bar-expressive__message",o.messageIsFadingIn&&"progress-bar-expressive__message--in"])},"2",s,null,0),K(e,E,null,null,null,null,a,"3"),e.ee()),e.be("div",{role:"status",id:a.elId("message"),class:S(["progress-bar-expressive__message",o.messageIsFadingIn&&"progress-bar-expressive__message--out",p.length===1&&"progress-bar-expressive__message--in",o.isInitialMessage&&"progress-bar-expressive__message--initial"])},"4",s,null,0),K(e,h,null,null,null,null,a,"5"),e.ee(),e.ee()}e.be("div",{role:"progressbar","aria-label":r,"aria-describedby":a.elId("message"),class:"progress-bar-expressive__progress"},"6",s,null,0),b(De,{n:!0,b:!0,renderBody:h=>{h.be("div",{class:"progress-bar-expressive__lines"},"7",s,null,1);for(let E=11/1,w=0;w<=E;w++){const ke=`[${1+w*1}]`;h.e("div",{class:"progress-bar-expressive__line"},"8"+ke,s,0,1)}h.ee()}},e,a,"6"),e.ee(),e.ee()},{t:F},ce);m.Component=y(ce,m._);const L="gFVqNIji",v=l(L);u.r(L,()=>v);const ye={};v._=c(function(t,e,a,s,o,i){b(m,z(()=>{n("messages",{duration:2e3,renderBody:r=>{r.t("Display for 2 seconds",s)}}),n("messages",{duration:3e3,renderBody:r=>{r.t("Display for 3 seconds",s)}}),n("messages",{duration:4e3,renderBody:r=>{r.t("Display for 4 seconds",s)}})},{...t,messages:void 0}),e,a,"0")},{t:L,i:!0},ye);v.Component=y(ye,v._);const we=`<ebay-progress-bar-expressive ...input>
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
`,J="$jdhijic",I=l(J);u.r(J,()=>I);const be={};I._=c(function(t,e,a,s,o,i){b(m,t,e,a,"0")},{t:J,i:!0},be);I.Component=y(be,I._);const We=`<ebay-progress-bar-expressive ...input/>
`,R="blFVJ_Jm",B=l(R);u.r(R,()=>B);const he={};B._=c(function(t,e,a,s,o,i){b(m,z(()=>{n("messages",{renderBody:r=>{r.t("Espera...",s)}}),n("messages",{duration:2e3,renderBody:r=>{r.t("Estamos procesando tu pedido",s)}}),n("messages",{renderBody:r=>{r.t("Sólo un momento más",s)}})},{a11yText:"Cargando...",...t,messages:void 0}),e,a,"0")},{t:R,i:!0},he);B.Component=y(he,B._);const Fe=`<ebay-progress-bar-expressive a11yText="Cargando..." ...input>
    <@message>Espera...</@message>
    <@message duration=2000>
        Estamos procesando tu pedido
    </@message>
    <@message>Sólo un momento más</@message>
</ebay-progress-bar-expressive>
`,H="RpBdqmeg",k=l(H);u.r(H,()=>k);const _e={};k._=c(function(t,e,a,s,o,i){b(m,z(()=>{n("messages",{renderBody:r=>{r.t("Hang tight",s)}}),n("messages",{renderBody:r=>{r.t("We're processing your order",s)}}),n("messages",{renderBody:r=>{r.t("Just a moment longer",s)}})},{size:"medium",...t,messages:void 0}),e,a,"0")},{t:H,i:!0},_e);k.Component=y(_e,k._);const Le=`<ebay-progress-bar-expressive size="medium" ...input>
    <@message>Hang tight</@message>
    <@message>We're processing your order</@message>
    <@message>Just a moment longer</@message>
</ebay-progress-bar-expressive>
`,V="JdmwqKGk",C=l(V);u.r(V,()=>C);const xe={};C._=c(function(t,e,a,s,o,i){b(m,z(()=>{n("messages",{renderBody:r=>{r.t("Hang tight",s)}}),n("messages",{renderBody:r=>{r.t("We're processing your order",s)}}),n("messages",{renderBody:r=>{r.t("Just a moment longer",s)}})},{...t,messages:void 0}),e,a,"0")},{t:V,i:!0},xe);C.Component=y(xe,C._);const Je=`<ebay-progress-bar-expressive ...input>
    <@message>Hang tight</@message>
    <@message>We're processing your order</@message>
    <@message>Just a moment longer</@message>
</ebay-progress-bar-expressive>
`,fe=t=>({input:Ce(t)}),Me=[{renderBody:"Hang tight"},{renderBody:"We're processing your order"},{renderBody:"Just a moment longer"}],Pe={title:"progress/ebay-progress-bar-expressive",component:m,parameters:{docs:{description:{component:ze}},layout:"fullscreen"},argTypes:{a11yText:{control:{type:"text"},description:"Localized, accessible label for the progress bar",table:{defaultValue:{summary:"Loading..."}}},messages:{control:{type:"array"},description:`Short messages to display above the progress bar. Specify the renderBody and, optionally, a custom duration. By default, messages display for ${_}ms. When the user prefers reduced motion, each message will display for ${ue} times its duration.`,table:{defaultValue:{summary:"[]"}}},size:{type:"enum",control:{type:"select"},options:["large","medium"],description:"Message text size",table:{defaultValue:{summary:"large"}}}}},D=$(I,We),d=fe.bind({});d.args={messages:[{renderBody:"We're processing your order"}]};d.parameters={docs:{source:{code:le("ebay-progress-bar-expressive",d.args)}}};const x=$(C,Je);x.args={messages:Me};const g=fe.bind({});g.args={messages:[{renderBody:"Messages should be one line..."},{renderBody:"Sometimes that's hard to guarantee, though.",duration:2500},{renderBody:"That's okay!"}]};g.parameters={docs:{source:{code:le("ebay-progress-bar-expressive",g.args)}}};const f=$(v,we);f.args={messages:[{renderBody:"Display for 2 seconds",duration:2e3},{renderBody:"Display for 3 seconds",duration:3e3},{renderBody:"Display for 4 seconds",duration:4e3}]};const M=$(B,Fe);M.args={a11yText:"Cargando...",messages:[{renderBody:"Espera..."},{renderBody:"Estamos procesando tu pedido",duration:2e3},{renderBody:"Sólo un momento más"}]};const T=$(k,Le);T.args={size:"medium",messages:Me};var G,N,O;D.parameters={...D.parameters,docs:{...(G=D.parameters)==null?void 0:G.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...(O=(N=D.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var P,Q,U;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(U=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:"buildExtensionTemplate(MessagesTemplate, MessagesTemplateCode)",...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,se,re;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(re=(se=g.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ae,te,oe;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:"buildExtensionTemplate(CustomTimingTemplate, CustomTimingTemplateCode)",...(oe=(te=f.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ne,ie,me;M.parameters={...M.parameters,docs:{...(ne=M.parameters)==null?void 0:ne.docs,source:{originalSource:"buildExtensionTemplate(LocalizedTemplate, LocalizedTemplateCode)",...(me=(ie=M.parameters)==null?void 0:ie.docs)==null?void 0:me.source}}};var de,ge,pe;T.parameters={...T.parameters,docs:{...(de=T.parameters)==null?void 0:de.docs,source:{originalSource:"buildExtensionTemplate(MediumTextTemplate, MediumTextTemplateCode)",...(pe=(ge=T.parameters)==null?void 0:ge.docs)==null?void 0:pe.source}}};const Qe=["Default","WithSingleMessage","WithMessages","WithLongMessage","WithCustomTiming","Localized","MediumSize"];export{D as Default,M as Localized,T as MediumSize,f as WithCustomTiming,g as WithLongMessage,x as WithMessages,d as WithSingleMessage,Qe as __namedExportsOrder,Pe as default};
