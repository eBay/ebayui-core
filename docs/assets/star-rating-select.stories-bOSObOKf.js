import{t as V}from"./index-CCz6reEH.js";import{t as x,r as T,b as S,d as A,e as y,p as K,c as w}from"./registry-CyswyZw5.js";import{_ as O}from"./index-Lde-06If.js";import{_ as E}from"./render-tag-CLyPs9qZ.js";import{_ as P}from"./const-element-B9h58Dwq.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-Bq4u441m.js";/* empty css             */const U=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-star-rating-select
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.2.0
    </span>
</h1>

## ebay-star-rating-select Usage

\`\`\`marko
<ebay-star-rating-select/>
\`\`\`

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/form-input-ebay-star-rating-select)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/form-input-ebay-star-rating-select)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-star-rating-select/examples)
`;class q extends Marko.Component{onCreate(){this.state={value:0}}onInput(e){let t=parseInt(e.value)||0;t>5&&(t=0),this.state.value=t}emitEvent(e,t,n,i){i.disabled||(this.state.value=t,this.emit(e,{originalEvent:n,value:t}))}}const p="kazsz$wc",l=x(p);T.r(p,()=>l);const C=q;l._=S(function(a,e,t,n,i,I){const{class:$,value:G,a11yText:g,a11yStarText:F=[],disabled:R,...j}=a;e.be("div",A({role:!!g&&"radiogroup","aria-label":g,class:y(["star-rating-select",$])},K(j)),"0",n,null,4);for(let z=4/1,m=0;m<=z;m++){const s=1+m*1,d=`[${s}]`;e.be("span",{class:"star-rating-select__radio"},"1"+d,n,null,1),e.e("input",{"aria-label":F[s-1],class:y(["star-rating-select__control",s<=i.value&&"star-rating-select__control--filled"]),type:"radio",name:t.elId("star-rating"),value:s,disabled:R,checked:i.value===s},"2"+d,n,0,0,{onclick:t.d("click","emitEvent",!1,["change",s]),onfocus:t.d("focus","emitEvent",!1,["focus",s]),onkeydown:t.d("keydown","emitEvent",!1,["keydown",s])}),e.be("span",{class:"star-rating-select__radio-icon"},"3"+d,n,null,1),E(O,{},e,t,"4"+d),e.ee(),e.ee()}e.ee()},{t:p},C);l.Component=w(C,l._);const u="UQCiqcBi",c=x(u),H=P("legend",null,1).t("Rate Product");T.r(u,()=>c);const B={};c._=S(function(a,e,t,n,i,I){e.be("fieldset",null,"0",n,null,0),e.n(H,n),E(l,{value:a.value,a11yStarText:a.a11yStarText},e,t,"2",[["change","emit",!1,["change"]],["keydown","emit",!1,["keydown"]],["focus","emit",!1,["focus"]]]),e.ee()},{t:u},B);c.Component=w(B,c._);const M=`export interface Input {
    value: number;
    a11yStarText: string;
}

class {}

<fieldset>
    <legend>Rate Product</legend>
    <ebay-star-rating-select
        value=input.value
        a11yStarText=input.a11yStarText
        onChange("emit", 'change')
        onKeydown("emit", 'keydown')
        onFocus("emit", 'focus')
    />
</fieldset>
`,Q=a=>({input:{...a,renderBody:a.renderBody?e=>{e.html(a.renderBody)}:null}}),te={title:"form input/ebay-star-rating-select",component:l,parameters:{docs:{description:{component:U}}},argTypes:{disabled:{control:{type:"boolean"}},value:{control:{type:"number"},description:"1 - 5, depending on how many stars are selected. If 0 or null defaults to no stars selected"},a11yStarText:{control:"object",description:"Array object which sets the aria label for each star"},a11yText:{control:{type:"text"},description:"The aria label for the outer container. Only used on isolated case."},onChange:{action:"on-change",description:"Triggered on change",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onFocus:{action:"on-focus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onKeydown:{action:"on-keydown",description:"Triggered on keydown",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}}}},r=Q.bind({});r.args={disabled:!1,a11yStarText:["1 star","2 stars","3 stars","4 stars","5 stars"],a11yText:"Rate product",value:0};r.parameters={docs:{source:{code:V("ebay-star-rating-select",r.args)}}};const o=a=>({input:a,component:c});o.args={disabled:!1,a11yStarText:["1 star","2 stars","3 stars","4 stars","5 stars"],value:0};o.parameters={docs:{source:{code:M}}};var b,f,_;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(_=(f=r.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var h,k,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  input: args,
  component: FieldsetTemplate
})`,...(v=(k=o.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const ae=["Isolated","Fieldset"];export{o as Fieldset,r as Isolated,ae as __namedExportsOrder,te as default};
