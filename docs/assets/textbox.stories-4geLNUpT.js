import{t as ge}from"./index-CCz6reEH.js";import{C as i}from"./index-BAtsBC5A.js";import{r as c,b as m,d as p,t as u}from"./registry-DoALHDDx.js";import{_ as se}from"./const-element-_KqHYBBN.js";import{_ as a}from"./render-tag-BBOJ9dEX.js";import{_ as ye,a as re,b as ke}from"./index-7PRWZSTl.js";import{i as L,a as $}from"./attr-tag-DphMQldM.js";/* empty css             *//* empty css                       *//* empty css                    */import"./dynamic-tag-B1GLaPEW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DvIcBlTc.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-mP6JM4Am.js";const he=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,B="yAx9Uo7Y",v=u(B),xe=se("label",{class:"field__label field__label--start",for:"textbox"},1).t("Email address");c.r(B,()=>v);const ce={};v._=m(function(e,n,t,o,l,b){n.be("span",{class:"field"},"0",o,null,1),n.n(xe,o),a(i,{...e,id:"textbox",value:"test"},n,t,"2",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]]),n.ee()},{t:B},ce);v.Component=p(ce,v._);const A="qd9h3EQc",_=u(A),ve=se("label",{class:"field__label field__label--start field__label--disabled",for:"textbox"},1).t("Email address");c.r(A,()=>_);const me={};_._=m(function(e,n,t,o,l,b){n.be("span",{class:"field"},"0",o,null,1),n.n(ve,o),a(i,{...e,disabled:!0,id:"textbox",value:"test"},n,t,"2",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]]),n.ee()},{t:A},me);_.Component=p(me,_._);const S="SEQfXG0r",w=u(S);c.r(S,()=>w);const pe={};w._=m(function(e,n,t,o,l,b){a(i,{floatingLabel:"Email address",value:"test",...e},n,t,"0",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]])},{t:S},pe);w.Component=p(pe,w._);const V="AppGZ1ez",C=u(V);c.r(V,()=>C);const ue={};C._=m(function(e,n,t,o,l,b){a(i,{floatingLabel:"First Name",autocomplete:"given-name"},n,t,"0",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]]),a(i,{floatingLabel:"Last Name",autocomplete:"family-name"},n,t,"1",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]]),a(i,{floatingLabel:"Email address",autocomplete:"email",placeholder:"valid email address"},n,t,"2",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]])},{t:V,i:!0},ue);C.Component=p(ue,C._);const F="yYV47hMc",E=u(F);c.r(F,()=>E);const be={onCreate(){this.state={value:""}},change({value:e,originalEvent:n}){this.state.value=e,this.emit("change",n)},clear(e){this.state.value="",this.emit("button-click",e)}};E._=m(function(e,n,t,o,l,b){a(i,L(()=>{$("postfixIcon",{renderBody:s=>{a(ye,{},s,t,"0")}}),$("prefixIcon",{renderBody:s=>{a(re,{},s,t,"1")}})},{value:l.value,buttonAriaLabel:"Clear",placeholder:"name",...e,postfixIcon:void 0,prefixIcon:void 0}),n,t,"@textbox",[["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["change","change",!1],["button-click","clear",!1]])},{t:F},be);E.Component=p(be,E._);const W="nAlOW3qc",I=u(W);c.r(W,()=>I);const de={};I._=m(function(e,n,t,o,l,b){a(i,L(()=>{$("postfixIcon",{renderBody:s=>{a(re,{},s,t,"1")}})},{placeholder:"name"}),n,t,"0",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]])},{t:W,i:!0},de);I.Component=p(de,I._);const P="9UA4Dty/",T=u(P);c.r(P,()=>T);const fe={};T._=m(function(e,n,t,o,l,b){a(i,L(()=>{$("prefixIcon",{renderBody:s=>{a(ke,{},s,t,"1")}})},{placeholder:"email"}),n,t,"0",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]])},{t:P,i:!0},fe);T.Component=p(fe,T._);const _e=`import type { Input as TextboxInput } from "<ebay-textbox>";
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
`,we=`import type { Input as TextboxInput } from "<ebay-textbox>";
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
`,Ce=`class {}

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
`,Ee=`<ebay-textbox
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
`,Ie=`import type { TextboxEvent } from "../component-browser";

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
`,Te=`<ebay-textbox
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
>
    <@postfix-icon>
        <ebay-profile-24-icon/>
    </@postfix-icon>
</ebay-textbox>
`,$e=`<ebay-textbox
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
>
    <@prefix-icon>
        <ebay-mail-24-icon/>
    </@prefix-icon>
</ebay-textbox>
`,Le=e=>({input:{...e,renderBody:e.renderBody?n=>{n.html(e.renderBody)}:null}}),Ge={title:"form input/ebay-textbox",component:i,parameters:{docs:{description:{component:he}}},argTypes:{fluid:{type:"boolean",control:{type:"boolean"}},inputSize:{options:["regular","large"],type:{category:"Options"},description:'either "regular" or "large". If large, then renders larger sized textbox',table:{defaultValue:{summary:"regular"}}},multiline:{type:"boolean",control:{type:"boolean"},description:"renders a multi-line texbox if true"},invalid:{type:"boolean",control:{type:"boolean"},description:"indicates a field-level error with red border if true"},floatingLabel:{description:"If set then shows this text as the floating label.",control:{type:"text"},table:{category:"floating-label",defaultValue:{summary:""}}},opaqueLabel:{description:"Only works with floating label. If set, then background is obscured of the floating label. Used with textarea to prevent label overlap",control:{type:"boolean"},table:{category:"floating-label",defaultValue:{summary:"false"}}},buttonAriaLabel:{control:{type:"text"},description:"aria-label for postfix. Required to be set in order to render postfix button and attach a `textbox-button-click event`"},prefixIcon:{name:"@prefix-icon",description:"An `<ebay-{name}-icon>` to show as the prefix icon.",table:{category:"@attribute tags"}},postfixIcon:{name:"@postfix-icon",description:"An `<ebay-{name}-icon>` to show as the postfix icon.",table:{category:"@attribute tags"}},onChange:{action:"on-change",description:"Triggered when focus leaves and value is changedf",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},"onInput-change":{action:"on-input-change",description:"Triggered when the value of the input is changed",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onFocus:{action:"on-focus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onBlur:{action:"on-blur",description:"Triggered on blur",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onKeypress:{action:"on-keypress",description:"Triggered on keypress",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onKeyup:{action:"on-keyup",description:"Triggered on keup",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onKeydown:{action:"on-keydown",description:"Triggered on keydown",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onInvalid:{action:"on-invalid",description:"Triggered when value is invalid",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},"onFloating-label-init":{action:"on-floating-label-init",description:"Triggered when floating label is initialized",table:{category:"Events",defaultValue:{summary:""}}},"onButton-click":{action:"on-button-click",description:"Triggers when clicking on postfix-icon-button. Requires button-aria-label to be present in order to attach correctly",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}}}},d=e=>({input:e,component:v});d.args={};d.parameters={docs:{source:{code:_e}}};const f=e=>({input:e,component:_});f.args={};f.parameters={docs:{source:{code:we}}};const g=e=>({input:e,component:w});g.args={};g.parameters={docs:{source:{code:Ce}}};const y=e=>({input:e,component:C});y.args={};y.parameters={docs:{source:{code:Ee}}};const r=Le.bind({});r.args={};r.parameters={docs:{source:{code:ge("ebay-textbox",r.args)}}};const k=e=>({input:e,component:T});k.args={};k.parameters={docs:{source:{code:$e}}};const h=e=>({input:e,component:I});h.args={};h.parameters={docs:{source:{code:Te}}};const x=e=>({input:e,component:E});x.args={};x.parameters={docs:{source:{code:Ie}}};var q,z,N;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
  input: args,
  component: WithLabelTemplate
})`,...(N=(z=d.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var O,K,R;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  input: args,
  component: DisabledTemplate
})`,...(R=(K=f.parameters)==null?void 0:K.docs)==null?void 0:R.source}}};var U,D,G;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
  input: args,
  component: FloatingLabelTemplate
})`,...(G=(D=g.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var Q,Y,j;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`args => ({
  input: args,
  component: FloatingLabelAutocompleteTemplate
})`,...(j=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:j.source}}};var M,X,Z;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(Z=(X=r.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var H,J,ee;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
  input: args,
  component: WithPrefixIcon
})`,...(ee=(J=k.parameters)==null?void 0:J.docs)==null?void 0:ee.source}}};var ne,te,ae;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`args => ({
  input: args,
  component: WithPostfixIcon
})`,...(ae=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var oe,ie,le;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`args => ({
  input: args,
  component: WithBothIcons
})`,...(le=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};const Qe=["WithLabel","Disabled","FloatingLabel","FloatingLabelAutocomplete","Isolated","PrefixIcon","PostfixIcon","BothIcons"];export{x as BothIcons,f as Disabled,g as FloatingLabel,y as FloatingLabelAutocomplete,r as Isolated,h as PostfixIcon,k as PrefixIcon,d as WithLabel,Qe as __namedExportsOrder,Ge as default};
