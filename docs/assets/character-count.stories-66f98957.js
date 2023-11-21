import{b as S,a as W}from"./utils-44f5c40b.js";import{t as H}from"./index-a17a703b.js";import{t as g,r as _,_ as y,h as M,p as z,a as f,g as Y}from"./merge-attrs-51a02d23.js";import{_ as Z}from"./dynamic-tag-ee96640a.js";import{_ as x}from"./v-element-66dc25dc.js";import{_ as I}from"./index-c63e2ff5.js";import{_ as b}from"./render-tag-73fdbff3.js";import"./_commonjsHelpers-725317a4.js";import"./_commonjs-dynamic-modules-302442b1.js";/* empty css             *//* empty css                       *//* empty css                    */import"./index-ecc6d169.js";const q=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`;class G extends Marko.Component{onCreate(e){this.state={count:this.countFromValue(e.value)}}onInput(e){typeof window>"u"||(this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.state.count=this.countFromValue(e.value),this.emit("change",{count:this.state.count,inputAriaLive:this.state.count>=e.max?"polite":"off"})},500))}countFromValue(e){return typeof e=="string"?[...e].length:typeof e=="number"?e:0}}const J=["renderBody","max","clippedText","value"];function K(n,e){if(n==null)return{};var i=N(n,e),t,a;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],!(e.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function N(n,e){if(n==null)return{};var i={},t=Object.keys(n),a,r;for(r=0;r<t.length;r++)a=t[r],!(e.indexOf(a)>=0)&&(i[a]=n[a]);return i}const C="ruL8kfFY",c=g(C),v=c;_.r(C,()=>c);const j=G;c._=y(function(n,e,i,t,a,r){const{renderBody:o,max:d,clippedText:s,value:ae}=n,R=K(n,J);e.be("span",M(z(R)),"0",t,null,4),o?Z(e,o,null,null,null,null,i,"1"):(e.t(a.count,t),e.t("/",t),e.t(d,t),s&&(e.be("span",{class:"clipped"},"2",t,null,1),e.t(s,t),e.ee())),e.ee()},{t:C},j);c.Component=f(j,c._);const T="1Od+T0TS",u=g(T),Q=x("label",{class:"field__label field__label--stacked",for:"my-input"},"1",null,1,0).t("Field Label"),U=x("span",{id:"my-input-description"},"5",null,1,1).t("Brief description");_.r(T,()=>u);const D={onCreate(){this.state={inputValue:"",inputAriaLive:null}},onTextChange(n){let{originalEvent:e}=n;this.state.inputValue=e.target.value},onCharCountChange(n){let{count:e,inputAriaLive:i}=n;this.state.inputAriaLive=i,this.emit("change",{count:e,inputAriaLive:i})}};u._=y(function(n,e,i,t,a,r){const{max:o=120,clippedText:d}=n;e.be("span",{class:"field"},"0",t,null,1),e.n(Q,t),e.be("span",{class:"field__control"},"2",t,null,1),b(I,{value:a.inputValue,type:"text",ariaDescribedby:"my-input-description my-input-charcount",class:"textbox__control",id:"my-input",ariaLive:a.inputAriaLive},e,i,"3",[["keyup","onTextChange",!1],["change","onTextChange",!1]]),e.ee(),e.be("div",{class:"field__description field__description--group"},"4",t,null,1),e.n(U,t),b(v,{id:"my-input-charcount",value:a.inputValue,max:o,clippedText:d},e,i,"6",[["change","onCharCountChange",!1]]),e.ee(),e.ee()},{t:T},D);u.Component=f(D,u._);const X=`$ const { max = 120, clippedText } = input;

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
`,k="isZEw38E",p=g(k),ee=x("label",{class:"field__label field__label--stacked",for:"my-input"},"1",null,1,0).t("Field Label");_.r(k,()=>p);const P={onCreate(){this.state={inputValue:"",inputAriaLive:null,charCount:0}},onTextChange(n){let{originalEvent:e}=n;this.state.inputValue=e.target.value},onCharCountChange(n){let{count:e,inputAriaLive:i}=n;this.state.inputAriaLive=i,this.state.charCount=e,this.emit("change",{count:e,inputAriaLive:i})}};p._=y(function(n,e,i,t,a,r){const{max:o=120,clippedText:d}=n;e.be("span",{class:"field"},"0",t,null,1),e.n(ee,t),e.be("span",{class:"field__control"},"2",t,null,1),b(I,{value:a.inputValue,type:"text",ariaDescribedby:"my-input-charcount",class:"textbox__control",id:"my-input",ariaLive:a.inputAriaLive},e,i,"3",[["keyup","onTextChange",!1],["change","onTextChange",!1]]),e.ee(),e.be("div",{class:Y(["field__description","field__description--group",a.charCount>o&&"field__description--attention"])},"4",t,null,1),b(v,{id:"my-input-charcount",value:a.inputValue,max:o,renderBody:s=>{s.t(a.charCount,t),s.t(" of ",t),s.t(o,t),s.t(" (",t),s.t(o-a.charCount,t),s.t(" remaining)",t)}},e,i,"5",[["change","onCharCountChange",!1]]),e.ee(),e.ee()},{t:k},P);p.Component=f(P,p._);const te=`$ const { max = 120, clippedText } = input;

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
`,ne=n=>({input:W(n)}),_e={title:"building blocks/ebay-character-count",component:v,parameters:{docs:{description:{component:q}}},argTypes:{renderBody:{description:"If set, will override the default body content"},value:{type:"string|number",control:{type:"text"},description:"String to count characters from, or a number representing the current character count"},max:{type:"number",control:{type:"number"},description:"Maximum number of characters allowed in the input, we allow users to go over this limit but `aria-live` should be set to `polite`."},clippedText:{type:"string",control:{type:"text"},description:"With default body content, clipped text should be provided after the character count for screen readers to announce."},onChange:{action:"on-change",description:"Triggered when the character count changes. Debounced by 500ms.",table:{category:"Events",defaultValue:{summary:"{ count, inputAriaLive }"}}}}},l=ne.bind({});l.args={value:"Hello world",clippedText:"characters remaining",max:120};l.parameters={docs:{source:{code:H("ebay-character-count",l.args)}}};const m=S(u,X),h=S(p,te);var L,A,V;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(V=(A=l.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var E,$,w;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:"buildExtensionTemplate(InFieldTemplate, InFieldCode)",...(w=($=m.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};var F,B,O;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:"buildExtensionTemplate(CustomTextTemplate, CustomTextCode)",...(O=(B=h.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};const ye=["Default","InField","CustomText"];export{h as CustomText,l as Default,m as InField,ye as __namedExportsOrder,_e as default};
//# sourceMappingURL=character-count.stories-66f98957.js.map
