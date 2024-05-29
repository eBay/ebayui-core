import{t as ye}from"./index-CCz6reEH.js";import{C as i}from"./index-BEe6r6nY.js";import{r as c,b as m,d as p,t as u}from"./registry-DcejNBCz.js";import{_ as re}from"./const-element-Bq6J7aqh.js";import{_ as a}from"./render-tag-BBOJ9dEX.js";import{_ as L}from"./empty-component-BCB5DEsP.js";import{_ as ke,a as ce,b as he}from"./index-CtCxolJP.js";import{i as B,a as E}from"./attr-tag-DphMQldM.js";/* empty css             */import"./index-DEnJBEnO.js";/* empty css                    */import"./dynamic-tag-CH7Ufq3Q.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-CMkz4cmR.js";const xe=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,A="yAx9Uo7Y",v=u(A),ve=re("label",{class:"field__label field__label--start",for:"textbox"},1).t("Email address");c.r(A,()=>v);const me={};v._=m(function(e,n,t,o,l,b){n.be("span",{class:"field"},"0",o,null,1),n.n(ve,o),a(i,{...e,id:"textbox",value:"test"},n,t,"2",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]]),n.ee()},{t:A},me);v.Component=p(me,v._);const S="qd9h3EQc",_=u(S),_e=re("label",{class:"field__label field__label--start field__label--disabled",for:"textbox"},1).t("Email address");c.r(S,()=>_);const pe={};_._=m(function(e,n,t,o,l,b){n.be("span",{class:"field"},"0",o,null,1),n.n(_e,o),a(i,{...e,disabled:!0,id:"textbox",value:"test"},n,t,"2",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]]),n.ee()},{t:S},pe);_.Component=p(pe,_._);const V="SEQfXG0r",w=u(V);c.r(V,()=>w);const ue={};w._=m(function(e,n,t,o,l,b){a(i,{floatingLabel:"Email address",value:"test",...e},n,t,"0",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]])},{t:V},ue);w.Component=p(ue,w._);const F="AppGZ1ez",I=u(F);c.r(F,()=>L);const be={};I._=m(function(e,n,t,o,l,b){a(i,{floatingLabel:"First Name",autocomplete:"given-name"},n,t,"0",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]]),a(i,{floatingLabel:"Last Name",autocomplete:"family-name"},n,t,"1",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]]),a(i,{floatingLabel:"Email address",autocomplete:"email",placeholder:"valid email address"},n,t,"2",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]])},{t:F,s:!0},be);I.Component=p(be,I._);const W="yYV47hMc",C=u(W);c.r(W,()=>C);const de={onCreate(){this.state={value:""}},change({value:e,originalEvent:n}){this.state.value=e,this.emit("change",n)},clear(e){this.state.value="",this.emit("button-click",e)}};C._=m(function(e,n,t,o,l,b){a(i,B(()=>{E("postfixIcon",{renderBody:s=>{a(ke,{},s,t,"0")}}),E("prefixIcon",{renderBody:s=>{a(ce,{},s,t,"1")}})},{value:l.value,buttonAriaLabel:"Clear",placeholder:"name",...e,postfixIcon:void 0,prefixIcon:void 0}),n,t,"@textbox",[["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["change","change",!1],["button-click","clear",!1]])},{t:W},de);C.Component=p(de,C._);const P="nAlOW3qc",T=u(P);c.r(P,()=>L);const fe={};T._=m(function(e,n,t,o,l,b){a(i,B(()=>{E("postfixIcon",{renderBody:s=>{a(ce,{},s,t,"1")}})},{placeholder:"name"}),n,t,"0",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]])},{t:P,s:!0},fe);T.Component=p(fe,T._);const q="9UA4Dty/",$=u(q);c.r(q,()=>L);const ge={};$._=m(function(e,n,t,o,l,b){a(i,B(()=>{E("prefixIcon",{renderBody:s=>{a(he,{},s,t,"1")}})},{placeholder:"email"}),n,t,"0",[["change","emit",!1,["change"]],["input-change","emit",!1,["inputChange"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["invalid","emit",!1,["invalid"]],["floating-label-init","emit",!1,["floating-label-init"]],["button-click","emit",!1,["button-click"]]])},{t:q,s:!0},ge);$.Component=p(ge,$._);const we=`import type { Input as TextboxInput } from "<ebay-textbox>";
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
`,Ce=`import type { Input as TextboxInput } from "<ebay-textbox>";
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
`,Ee=`class {}

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
`,Ie=`<ebay-textbox
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
`,Te=`import type { TextboxEvent } from "../component-browser";

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
`,$e=`<ebay-textbox
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
`,Le=`<ebay-textbox
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
`,Be=e=>({input:{...e,renderBody:e.renderBody?n=>{n.html(e.renderBody)}:null}}),Qe={title:"form input/ebay-textbox",component:i,parameters:{docs:{description:{component:xe}}},argTypes:{fluid:{type:"boolean",control:{type:"boolean"}},inputSize:{options:["regular","large"],type:{category:"Options"},description:'either "regular" or "large". If large, then renders larger sized textbox',table:{defaultValue:{summary:"regular"}}},multiline:{type:"boolean",control:{type:"boolean"},description:"renders a multi-line texbox if true"},invalid:{type:"boolean",control:{type:"boolean"},description:"indicates a field-level error with red border if true"},floatingLabel:{description:"If set then shows this text as the floating label.",control:{type:"text"},table:{category:"floating-label",defaultValue:{summary:""}}},opaqueLabel:{description:"Only works with floating label. If set, then background is obscured of the floating label. Used with textarea to prevent label overlap",control:{type:"boolean"},table:{category:"floating-label",defaultValue:{summary:"false"}}},buttonAriaLabel:{control:{type:"text"},description:"aria-label for postfix. Required to be set in order to render postfix button and attach a `textbox-button-click event`"},prefixIcon:{name:"@prefix-icon",description:"An `<ebay-{name}-icon>` to show as the prefix icon.",table:{category:"@attribute tags"}},postfixIcon:{name:"@postfix-icon",description:"An `<ebay-{name}-icon>` to show as the postfix icon.",table:{category:"@attribute tags"}},onChange:{action:"on-change",description:"Triggered when focus leaves and value is changedf",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},"onInput-change":{action:"on-input-change",description:"Triggered when the value of the input is changed",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onFocus:{action:"on-focus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onBlur:{action:"on-blur",description:"Triggered on blur",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onKeypress:{action:"on-keypress",description:"Triggered on keypress",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onKeyup:{action:"on-keyup",description:"Triggered on keup",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onKeydown:{action:"on-keydown",description:"Triggered on keydown",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onInvalid:{action:"on-invalid",description:"Triggered when value is invalid",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},"onFloating-label-init":{action:"on-floating-label-init",description:"Triggered when floating label is initialized",table:{category:"Events",defaultValue:{summary:""}}},"onButton-click":{action:"on-button-click",description:"Triggers when clicking on postfix-icon-button. Requires button-aria-label to be present in order to attach correctly",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}}}},d=e=>({input:e,component:v});d.args={};d.parameters={docs:{source:{code:we}}};const f=e=>({input:e,component:_});f.args={};f.parameters={docs:{source:{code:Ce}}};const g=e=>({input:e,component:w});g.args={};g.parameters={docs:{source:{code:Ee}}};const y=e=>({input:e,component:I});y.args={};y.parameters={docs:{source:{code:Ie}}};const r=Be.bind({});r.args={};r.parameters={docs:{source:{code:ye("ebay-textbox",r.args)}}};const k=e=>({input:e,component:$});k.args={};k.parameters={docs:{source:{code:Le}}};const h=e=>({input:e,component:T});h.args={};h.parameters={docs:{source:{code:$e}}};const x=e=>({input:e,component:C});x.args={};x.parameters={docs:{source:{code:Te}}};var z,N,O;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  input: args,
  component: WithLabelTemplate
})`,...(O=(N=d.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var K,R,U;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`args => ({
  input: args,
  component: DisabledTemplate
})`,...(U=(R=f.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var D,G,Q;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
  input: args,
  component: FloatingLabelTemplate
})`,...(Q=(G=g.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var Y,j,M;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`args => ({
  input: args,
  component: FloatingLabelAutocompleteTemplate
})`,...(M=(j=y.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var X,Z,H;r.parameters={...r.parameters,docs:{...(X=r.parameters)==null?void 0:X.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(H=(Z=r.parameters)==null?void 0:Z.docs)==null?void 0:H.source}}};var J,ee,ne;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
  input: args,
  component: WithPrefixIcon
})`,...(ne=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,ae,oe;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`args => ({
  input: args,
  component: WithPostfixIcon
})`,...(oe=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ie,le,se;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`args => ({
  input: args,
  component: WithBothIcons
})`,...(se=(le=x.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};const Ye=["WithLabel","Disabled","FloatingLabel","FloatingLabelAutocomplete","Isolated","PrefixIcon","PostfixIcon","BothIcons"];export{x as BothIcons,f as Disabled,g as FloatingLabel,y as FloatingLabelAutocomplete,r as Isolated,h as PostfixIcon,k as PrefixIcon,d as WithLabel,Ye as __namedExportsOrder,Qe as default};
