import{b as S,a as O}from"./utils-DWCsNc5l.js";import{t as j}from"./index-CCz6reEH.js";import{t as b,r as g,b as _,h as z,p as U,d as y,f as W}from"./registry-B-klnak9.js";import{_ as Y}from"./dynamic-tag-DQCvkDdb.js";import{_ as f}from"./const-element-Usj7mXQw.js";import{C as D}from"./index-Q81l85Tz.js";import{_ as h}from"./render-tag-BBOJ9dEX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";/* empty css             */import"./index-htxwKVWG.js";/* empty css                    */const G=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-character-count
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.0.0
    </span>
</h1>

Button styled with core classes.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/building-blocks-ebay-character-count)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/building-blocks-ebay-character-count)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-character-count/examples)
`;class J extends Marko.Component{onCreate(e){this.state={count:this.countFromValue(e.value)}}onInput(e){typeof window>"u"||(this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.state.count=this.countFromValue(e.value),this.emit("change",{count:this.state.count,inputAriaLive:this.state.count>=e.max?"polite":"off"})},500))}countFromValue(e){return typeof e=="string"?[...e].length:typeof e=="number"?e:0}}const x="DktsUL$i",l=b(x),C=l;g.r(x,()=>l);const H=J;l._=_(function(n,e,o,t,a,k){const{renderBody:i,max:p,clippedText:r,value:ee,...M}=n;e.be("span",z(U(M)),"0",t,null,4),i?Y(e,i,null,null,null,null,o,"1"):(e.t(a.count,t),e.t("/",t),e.t(p,t),r&&(e.be("span",{class:"clipped"},"2",t,null,1),e.t(r,t),e.ee())),e.ee()},{t:x},H);l.Component=y(H,l._);const v="vOeLIdYk",c=b(v),K=f("label",{class:"field__label field__label--stacked",for:"my-input"},1).t("Field Label"),N=f("span",{id:"my-input-description"},1).t("Brief description");g.r(v,()=>c);const R={onCreate(){this.state={inputValue:"",inputAriaLive:null}},onTextChange({originalEvent:n}){this.state.inputValue=n.target.value},onCharCountChange({count:n,inputAriaLive:e}){this.state.inputAriaLive=e,this.emit("change",{count:n,inputAriaLive:e})}};c._=_(function(n,e,o,t,a,k){const{max:i=120,clippedText:p}=n;e.be("span",{class:"field"},"0",t,null,1),e.n(K,t),e.be("span",{class:"field__control"},"2",t,null,1),h(D,{value:a.inputValue,type:"text",ariaDescribedby:"my-input-description my-input-charcount",class:"textbox__control",id:"my-input",ariaLive:a.inputAriaLive},e,o,"3",[["keyup","onTextChange",!1],["change","onTextChange",!1]]),e.ee(),e.be("div",{class:"field__description field__description--group"},"4",t,null,1),e.n(N,t),h(C,{id:"my-input-charcount",value:a.inputValue,max:i,clippedText:p},e,o,"6",[["change","onCharCountChange",!1]]),e.ee(),e.ee()},{t:v},R);c.Component=y(R,c._);const P=`$ const { max = 120, clippedText } = input;

<span class="field">
    <label class="field__label field__label--stacked" for="my-input">
        Field Label
    </label>
    <span class="field__control">
        <ebay-textbox
            value=state.inputValue
            type="text"
            aria-describedby="my-input-description my-input-charcount"
            class="textbox__control"
            id="my-input"
            aria-live=state.inputAriaLive
            on-keyup("onTextChange")
            on-change("onTextChange")
        />
    </span>
    <div class="field__description field__description--group">
        <span id="my-input-description">
            Brief description
        </span>
        <ebay-character-count
            id="my-input-charcount"
            value=state.inputValue
            max=max
            clipped-text=clippedText
            on-change("onCharCountChange")
        />
    </div>
</span>
class {
    onCreate() {
        this.state = {
            inputValue: "",
            inputAriaLive: null,
        };
    }
    onTextChange({ originalEvent: e }) {
        this.state.inputValue = e.target.value;
    }
    onCharCountChange({ count, inputAriaLive }) {
        this.state.inputAriaLive = inputAriaLive;
        this.emit('change', {count, inputAriaLive})
    }
}
`,T="aqEhnHgh",u=b(T),Q=f("label",{class:"field__label field__label--stacked",for:"my-input"},1).t("Field Label");g.r(T,()=>u);const q={onCreate(){this.state={inputValue:"",inputAriaLive:null,charCount:0}},onTextChange({originalEvent:n}){this.state.inputValue=n.target.value},onCharCountChange({count:n,inputAriaLive:e}){this.state.inputAriaLive=e,this.state.charCount=n,this.emit("change",{count:n,inputAriaLive:e})}};u._=_(function(n,e,o,t,a,k){const{max:i=120,clippedText:p}=n;e.be("span",{class:"field"},"0",t,null,1),e.n(Q,t),e.be("span",{class:"field__control"},"2",t,null,1),h(D,{value:a.inputValue,type:"text",ariaDescribedby:"my-input-charcount",class:"textbox__control",id:"my-input",ariaLive:a.inputAriaLive},e,o,"3",[["keyup","onTextChange",!1],["change","onTextChange",!1]]),e.ee(),e.be("div",{class:W(["field__description","field__description--group",a.charCount>i&&"field__description--attention"])},"4",t,null,1),h(C,{id:"my-input-charcount",value:a.inputValue,max:i,renderBody:r=>{r.t(a.charCount,t),r.t(" of ",t),r.t(i,t),r.t(" (",t),r.t(i-a.charCount,t),r.t(" remaining)",t)}},e,o,"5",[["change","onCharCountChange",!1]]),e.ee(),e.ee()},{t:T},q);u.Component=y(q,u._);const X=`$ const { max = 120, clippedText } = input;

<span class="field">
    <label class="field__label field__label--stacked" for="my-input">
        Field Label
    </label>
    <span class="field__control">
        <ebay-textbox
            value=state.inputValue
            type="text"
            aria-describedby="my-input-charcount"
            class="textbox__control"
            id="my-input"
            aria-live=state.inputAriaLive
            on-keyup("onTextChange")
            on-change("onTextChange")
        />
    </span>
    <div class=["field__description", "field__description--group", state.charCount > max && "field__description--attention"]>
        <ebay-character-count
            id="my-input-charcount"
            value=state.inputValue
            max=max
            on-change("onCharCountChange")
        >
            \${state.charCount} of \${max} (\${max - state.charCount} remaining)
        </ebay-character-count>
    </div>
</span>
class {
    onCreate() {
        this.state = {
            inputValue: "",
            inputAriaLive: null,
            charCount: 0
        };
    }
    onTextChange({ originalEvent: e }) {
        this.state.inputValue = e.target.value;
    }
    onCharCountChange({ count, inputAriaLive }) {
        this.state.inputAriaLive = inputAriaLive;
        this.state.charCount = count;
        this.emit('change', {count, inputAriaLive})
    }
}
`,Z=n=>({input:O(n)}),me={title:"building blocks/ebay-character-count",component:C,parameters:{docs:{description:{component:G}}},argTypes:{renderBody:{description:"If set, will override the default body content"},value:{type:"string|number",control:{type:"text"},description:"String to count characters from, or a number representing the current character count"},max:{type:{name:"number",required:!0},control:{type:"number"},description:"Maximum number of characters allowed in the input, we allow users to go over this limit but `aria-live` should be set to `polite`."},clippedText:{type:"string",control:{type:"text"},description:"With default body content, clipped text should be provided after the character count for screen readers to announce."},onChange:{action:"on-change",description:"Triggered when the character count changes. Debounced by 500ms.",table:{category:"Events",defaultValue:{summary:"{ count, inputAriaLive }"}}}}},s=Z.bind({});s.args={value:"Hello world",clippedText:"characters remaining",max:120};s.parameters={docs:{source:{code:j("ebay-character-count",s.args)}}};const d=S(c,P),m=S(u,X);var L,V,A;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(A=(V=s.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var $,E,F;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:"buildExtensionTemplate(InFieldTemplate, InFieldCode)",...(F=(E=d.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var w,B,I;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:"buildExtensionTemplate(CustomTextTemplate, CustomTextCode)",...(I=(B=m.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};const he=["Default","InField","CustomText"];export{m as CustomText,s as Default,d as InField,he as __namedExportsOrder,me as default};
