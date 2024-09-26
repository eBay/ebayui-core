import{t as Te}from"./index-CCz6reEH.js";import{_ as l}from"./index-CIkqInSL.js";import{r as c,b as m,c as p,t as u}from"./registry-CtNeIPU8.js";import{_ as de}from"./const-element-D4l_3TxL.js";import{_ as o}from"./render-tag-mtfFSHEK.js";import{_ as F}from"./empty-component-BCB5DEsP.js";import{_ as fe,a as ge,b as ye}from"./index-C5kwssl2.js";import{i as S,a as r}from"./attr-tag-DphMQldM.js";/* empty css             */import"./index-htxwKVWG.js";/* empty css                    */import"./dynamic-tag-HMZVE1pc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-B6qYX52F.js";const Ee=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-textbox
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

A textbox which can be either a simple input or a multiline textarea.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/form-input-ebay-textbox)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/form-input-ebay-textbox)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-textbox/examples)
`,V="LkvbKxok",w=u(V),$e=de("label",{class:"field__label field__label--start",for:"textbox"},1).t("Email address");c.r(V,()=>w);const ke={};w._=m(function(e,n,t,i,s,b){n.be("span",{class:"field"},"0",i,null,1),n.n($e,i),o(l,{...e,id:"textbox",value:"test"},n,t,"2",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]]),n.ee()},{t:V},ke);w.Component=p(ke,w._);const A="hhyUxRMi",C=u(A),Le=de("label",{class:"field__label field__label--start field__label--disabled",for:"textbox"},1).t("Email address");c.r(A,()=>C);const he={};C._=m(function(e,n,t,i,s,b){n.be("span",{class:"field"},"0",i,null,1),n.n(Le,i),o(l,{...e,disabled:!0,id:"textbox",value:"test"},n,t,"2",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]]),n.ee()},{t:A},he);C.Component=p(he,C._);const P="SrsPzpMd",I=u(P);c.r(P,()=>I);const xe={};I._=m(function(e,n,t,i,s,b){o(l,{floatingLabel:"Email address",value:"test",...e},n,t,"0",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]])},{t:P},xe);I.Component=p(xe,I._);const W="npTSBlh",E=u(W);c.r(W,()=>F);const ve={};E._=m(function(e,n,t,i,s,b){o(l,{floatingLabel:"First Name",autocomplete:"given-name"},n,t,"0",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]]),o(l,{floatingLabel:"Last Name",autocomplete:"family-name"},n,t,"1",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]]),o(l,{floatingLabel:"Email address",autocomplete:"email",placeholder:"valid email address"},n,t,"2",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]])},{t:W,s:!0},ve);E.Component=p(ve,E._);const z="FtQfdCsk",T=u(z);c.r(z,()=>T);const _e={onCreate(){this.state={value:""}},change({value:e,originalEvent:n}){this.state.value=e,this.emit("change",n)},clear(e){this.state.value="",this.emit("button-click",e)}};T._=m(function(e,n,t,i,s,b){o(l,S(()=>{r("postfixIcon",{renderBody:a=>{o(fe,{},a,t,"0")}}),r("prefixIcon",{renderBody:a=>{o(ge,{},a,t,"1")}})},{value:s.value,buttonAriaLabel:"Clear",placeholder:"name",...e,postfixIcon:void 0,prefixIcon:void 0}),n,t,"@textbox",[["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["change","change",!1],["button-click","clear",!1]])},{t:z},_e);T.Component=p(_e,T._);const q="jGobLyai",$=u(q);c.r(q,()=>F);const we={};$._=m(function(e,n,t,i,s,b){o(l,S(()=>{r("postfixIcon",{renderBody:a=>{o(ge,{},a,t,"1")}})},{placeholder:"name",...e,postfixIcon:void 0}),n,t,"0",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]])},{t:q,s:!0},we);$.Component=p(we,$._);const K="hePrLMFm",L=u(K);c.r(K,()=>F);const Ce={};L._=m(function(e,n,t,i,s,b){o(l,S(()=>{r("prefixIcon",{renderBody:a=>{o(ye,{},a,t,"1")}})},{placeholder:"email",...e,prefixIcon:void 0}),n,t,"0",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]])},{t:K,s:!0},Ce);L.Component=p(Ce,L._);const N="EqaLgOdl",B=u(N);c.r(N,()=>F);const Ie={};B._=m(function(e,n,t,i,s,b){o(l,S(()=>{r("prefixIcon",{renderBody:a=>{o(ye,{},a,t,"1")}}),r("prefixText",{renderBody:a=>{a.t("$",i)}}),r("postfixText",{renderBody:a=>{a.t("/mo",i)}}),r("postfixIcon",{renderBody:a=>{o(fe,{},a,t,"2")}})},{placeholder:"0.00"}),n,t,"0",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]])},{t:N,s:!0},Ie);B.Component=p(Ie,B._);const Be=`import type { Input as TextboxInput } from "<ebay-textbox>";
export type Input = TextboxInput;

class {}

<span class="field">
    <label class="field__label field__label--start" for="textbox">
        Email address
    </label>
    <ebay-textbox
        ...input
        id="textbox"
        value="test"
        on-change("emit", "change")
        on-input-change("emit", "inputChange")
        on-focus("emit", "focus")
        on-blur("emit", "blur")
        on-keypress("emit", "keypress")
        on-keyup("emit", "keyup")
        on-keydown("emit", "keydown")
        on-invalid("emit", "invalid")
        on-floating-label-init("emit", "floating-label-init")
        on-button-click("emit", "button-click")
    />
</span>
`,Fe=`import type { Input as TextboxInput } from "<ebay-textbox>";
export type Input = TextboxInput;

class {}

<span class="field">
    <label
        class="field__label field__label--start field__label--disabled"
        for="textbox"
    >
        Email address
    </label>
    <ebay-textbox
        ...input
        disabled
        id="textbox"
        value="test"
        on-change("emit", "change")
        on-input-change("emit", "inputChange")
        on-focus("emit", "focus")
        on-blur("emit", "blur")
        on-keypress("emit", "keypress")
        on-keyup("emit", "keyup")
        on-keydown("emit", "keydown")
        on-invalid("emit", "invalid")
        on-floating-label-init("emit", "floating-label-init")
        on-button-click("emit", "button-click")
    />
</span>
`,Se=`class {}

<ebay-textbox
    floatingLabel='Email address'
    value='test'
    on-change("emit", "change")
    on-input-change("emit", "inputChange")
    on-focus("emit", "focus")
    on-blur("emit", "blur")
    on-keypress("emit", "keypress")
    on-keyup("emit", "keyup")
    on-keydown("emit", "keydown")
    on-invalid("emit", "invalid")
    on-floating-label-init("emit", "floating-label-init")
    on-button-click("emit", "button-click")
    ...input
/>
`,Ve=`<ebay-textbox
    floating-label="First Name"
    autocomplete="given-name"
    on-change("emit", "change")
    on-input-change("emit", "inputChange")
    on-focus("emit", "focus")
    on-blur("emit", "blur")
    on-keypress("emit", "keypress")
    on-keyup("emit", "keyup")
    on-keydown("emit", "keydown")
    on-invalid("emit", "invalid")
    on-floating-label-init("emit", "floating-label-init")
    on-button-click("emit", "button-click")
/>

<ebay-textbox
    floating-label="Last Name"
    autocomplete="family-name"
    on-change("emit", "change")
    on-input-change("emit", "inputChange")
    on-focus("emit", "focus")
    on-blur("emit", "blur")
    on-keypress("emit", "keypress")
    on-keyup("emit", "keyup")
    on-keydown("emit", "keydown")
    on-invalid("emit", "invalid")
    on-floating-label-init("emit", "floating-label-init")
    on-button-click("emit", "button-click")
/>

<ebay-textbox
    floating-label="Email address"
    autocomplete="email"
    placeholder="valid email address"
    on-change("emit", "change")
    on-input-change("emit", "inputChange")
    on-focus("emit", "focus")
    on-blur("emit", "blur")
    on-keypress("emit", "keypress")
    on-keyup("emit", "keyup")
    on-keydown("emit", "keydown")
    on-invalid("emit", "invalid")
    on-floating-label-init("emit", "floating-label-init")
    on-button-click("emit", "button-click")
/>
`,Ae=`import type { TextboxEvent } from "../component-browser";

class {
    onCreate() {
        this.state = {
            value: "",
        };
    }
    change({ value, originalEvent }) {
        this.state.value = value;
        this.emit('change', originalEvent);
    }
    clear(e: TextboxEvent) {
        this.state.value = "";
        this.emit("button-click", e);
    }
}

<ebay-textbox
    key="textbox"
    value=state.value
    buttonAriaLabel="Clear"
    placeholder="name"
    ...input
    on-input-change("emit", "inputChange")
    on-focus("emit", "focus")
    on-blur("emit", "blur")
    on-keypress("emit", "keypress")
    on-keyup("emit", "keyup")
    on-keydown("emit", "keydown")
    on-invalid("emit", "invalid")
    on-floating-label-init("emit", "floating-label-init")
    on-change("change")
    on-button-click("clear")
>
    <@postfix-icon>
        <ebay-close-24-icon/>
    </@postfix-icon>
    <@prefix-icon>
        <ebay-profile-24-icon/>
    </@prefix-icon>
</ebay-textbox>
`,Pe=`<ebay-textbox
    placeholder="name"
    on-change("emit", "change")
    on-input-change("emit", "inputChange")
    on-focus("emit", "focus")
    on-blur("emit", "blur")
    on-keypress("emit", "keypress")
    on-keyup("emit", "keyup")
    on-keydown("emit", "keydown")
    on-invalid("emit", "invalid")
    on-floating-label-init("emit", "floating-label-init")
    on-button-click("emit", "button-click")
    ...input
>
    <@postfix-icon>
        <ebay-profile-24-icon/>
    </@postfix-icon>
</ebay-textbox>
`,We=`<ebay-textbox
    placeholder="email"
    on-change("emit", "change")
    on-input-change("emit", "inputChange")
    on-focus("emit", "focus")
    on-blur("emit", "blur")
    on-keypress("emit", "keypress")
    on-keyup("emit", "keyup")
    on-keydown("emit", "keydown")
    on-invalid("emit", "invalid")
    on-floating-label-init("emit", "floating-label-init")
    on-button-click("emit", "button-click")
    ...input
>
    <@prefix-icon>
        <ebay-mail-24-icon/>
    </@prefix-icon>
</ebay-textbox>
`,ze=`<ebay-textbox
    placeholder="0.00"
    on-change("emit", "change")
    on-input-change("emit", "inputChange")
    on-focus("emit", "focus")
    on-blur("emit", "blur")
    on-keypress("emit", "keypress")
    on-keyup("emit", "keyup")
    on-keydown("emit", "keydown")
    on-invalid("emit", "invalid")
    on-floating-label-init("emit", "floating-label-init")
    on-button-click("emit", "button-click")
>
    <@prefix-icon>
        <ebay-mail-24-icon/>
    </@prefix-icon>
    <@prefix-text>$</@prefix-text>
    <@postfix-text>/mo</@postfix-text>
    <@postfix-icon>
        <ebay-close-24-icon/>
    </@postfix-icon>
</ebay-textbox>
`,qe=e=>({input:{...e,renderBody:e.renderBody?n=>{n.html(e.renderBody)}:null}}),en={title:"form input/ebay-textbox",component:l,parameters:{docs:{description:{component:Ee}}},argTypes:{fluid:{type:"boolean",control:{type:"boolean"}},inputSize:{options:["regular","large"],type:{category:"Options"},description:'either "regular" or "large". If large, then renders larger sized textbox',table:{defaultValue:{summary:"regular"}}},multiline:{type:"boolean",control:{type:"boolean"},description:"renders a multi-line texbox if true"},invalid:{type:"boolean",control:{type:"boolean"},description:"indicates a field-level error with red border if true"},floatingLabel:{description:"If set then shows this text as the floating label.",control:{type:"text"},table:{category:"floating-label",defaultValue:{summary:""}}},opaqueLabel:{description:"Only works with floating label. If set, then background is obscured of the floating label. Used with textarea to prevent label overlap",control:{type:"boolean"},table:{category:"floating-label",defaultValue:{summary:"false"}}},buttonAriaLabel:{control:{type:"text"},description:"aria-label for postfix. Required to be set in order to render postfix button and attach a `textbox-button-click event`"},prefixIcon:{name:"@prefix-icon",description:"An `<ebay-{name}-icon>` to show as the prefix icon.",table:{category:"@attribute tags"}},postfixIcon:{name:"@postfix-icon",description:"An `<ebay-{name}-icon>` to show as the postfix icon.",table:{category:"@attribute tags"}},prefixText:{name:"@prefix-text",description:"Text to show before the input. Can be used alongside prefix-icon.",table:{category:"@attribute tags"}},postfixText:{name:"@postfix-text",description:"Text to show after the input. Can be used alongside postfix-icon.",table:{category:"@attribute tags"}},onChange:{action:"on-change",description:"Triggered when focus leaves and value is changedf",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},"onInput-change":{action:"on-input-change",description:"Triggered when the value of the input is changed",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onFocus:{action:"on-focus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onBlur:{action:"on-blur",description:"Triggered on blur",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onKeypress:{action:"on-keypress",description:"Triggered on keypress",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onKeyup:{action:"on-keyup",description:"Triggered on keup",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onKeydown:{action:"on-keydown",description:"Triggered on keydown",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onInvalid:{action:"on-invalid",description:"Triggered when value is invalid",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},"onFloating-label-init":{action:"on-floating-label-init",description:"Triggered when floating label is initialized",table:{category:"Events",defaultValue:{summary:""}}},"onButton-click":{action:"on-button-click",description:"Triggers when clicking on postfix-icon-button. Requires button-aria-label to be present in order to attach correctly",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}}}},f=e=>({input:e,component:w});f.args={};f.parameters={docs:{source:{code:Be}}};const g=e=>({input:e,component:C});g.args={};g.parameters={docs:{source:{code:Fe}}};const y=e=>({input:e,component:I});y.args={};y.parameters={docs:{source:{code:Se}}};const k=e=>({input:e,component:E});k.args={};k.parameters={docs:{source:{code:Ve}}};const d=qe.bind({});d.args={};d.parameters={docs:{source:{code:Te("ebay-textbox",d.args)}}};const h=e=>({input:e,component:L});h.args={};h.parameters={docs:{source:{code:We}}};const x=e=>({input:e,component:$});x.args={};x.parameters={docs:{source:{code:Pe}}};const v=e=>({input:e,component:T});v.args={};v.parameters={docs:{source:{code:Ae}}};const _=e=>({input:e,component:B});_.args={};_.parameters={docs:{source:{code:ze}}};var O,R,D;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  input: args,
  component: WithLabelTemplate
})`,...(D=(R=f.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var M,j,U;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
  input: args,
  component: DisabledTemplate
})`,...(U=(j=g.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var G,Q,H;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`args => ({
  input: args,
  component: FloatingLabelTemplate
})`,...(H=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:H.source}}};var J,X,Y;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
  input: args,
  component: FloatingLabelAutocompleteTemplate
})`,...(Y=(X=k.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(ne=(ee=d.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,oe,ae;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`args => ({
  input: args,
  component: WithPrefixIcon
})`,...(ae=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var ie,le,se;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`args => ({
  input: args,
  component: WithPostfixIcon
})`,...(se=(le=x.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var re,ce,me;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`args => ({
  input: args,
  component: WithBothIcons
})`,...(me=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var pe,ue,be;_.parameters={..._.parameters,docs:{...(pe=_.parameters)==null?void 0:pe.docs,source:{originalSource:`args => ({
  input: args,
  component: FullyDecoratedTemplate
})`,...(be=(ue=_.parameters)==null?void 0:ue.docs)==null?void 0:be.source}}};const nn=["WithLabel","Disabled","FloatingLabel","FloatingLabelAutocomplete","Isolated","PrefixIcon","PostfixIcon","BothIcons","FullyDecorated"];export{v as BothIcons,g as Disabled,y as FloatingLabel,k as FloatingLabelAutocomplete,_ as FullyDecorated,d as Isolated,x as PostfixIcon,h as PrefixIcon,f as WithLabel,nn as __namedExportsOrder,en as default};
