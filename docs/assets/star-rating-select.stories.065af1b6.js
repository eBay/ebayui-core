import{t as A}from"./index.bcb3df20.js";import{t as x,r as T,a as S,d as w,m as K,p as V,c as g}from"./merge-attrs.9e0d7be9.js";import{_ as j}from"./index.814968f5.js";import{r as C}from"./render-tag.1a0b986f.js";import{v as O}from"./v-element.18e65e73.js";import"./_commonjsHelpers.b8add541.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./index.aa2d3137.js";/* empty css             */const G=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;const P={onCreate(){this.state={value:0}},onInput(e){parseInt(e.value,0),this.state.value=e.value},handleClick:p("change"),handleFocus:p("focus"),handleKeydown:p("keydown")};function p(e){return function(a,t,s){s.disabled||(this.state.value=a,this.emit(e,{originalEvent:t,value:a}))}}const u="L0GfGBDo",l=x(u),E=l;var z=["class","value","a11yText","a11yStarText","disbaled"];T.exports.r(u,()=>l);const F=P;l._=S(function(e,a,t,s,d,I){var R=e.a11yStarText||[];a.be("div",K({role:e.a11yText&&"radiogroup","aria-label":e.a11yText,class:g(["star-rating-select",e.class])},V(e,z)),"0",s,null,4);for(let $=(5-1)/1,m=0;m<=$;m++){const n=1+m*1,i="[".concat(n,"]");a.be("span",{class:"star-rating-select__radio"},"1"+i,s,null,1),a.e("input",{"aria-label":R[n-1],class:g(["star-rating-select__control",n<=d.value&&"star-rating-select__control--filled"]),type:"radio",name:t.elId("star-rating"),value:n,disabled:e.disabled,checked:d.value===n},"2"+i,s,0,0,{onclick:t.d("click","handleClick",!1,[n]),onfocus:t.d("focus","handleFocus",!1,[n]),onkeydown:t.d("keydown","handleKeydown",!1,[n])}),a.be("span",{class:"star-rating-select__radio-icon"},"3"+i,s,null,1),C(j,{},a,t,"4"+i),a.ee(),a.ee()}a.ee()},{t:u},F);l.Component=w(F,l._);const y="paD0yFOo",c=x(y),D=O("legend",null,"1",null,1,0).t("Rate Product");T.exports.r(y,()=>c);const B={};c._=S(function(e,a,t,s,d,I){a.be("fieldset",null,"0",s,null,0),a.n(D,s),C(E,{value:e.value,a11yStarText:e.a11yStarText},a,t,"2",[["change","emit",!1,["change"]],["keyup","emit",!1,["keyup"]],["focus","emit",!1,["focus"]]]),a.ee()},{t:y},B);c.Component=w(B,c._);const H=`class {}

<fieldset>
    <legend>Rate Product</legend>
    <ebay-star-rating-select
        value=input.value
        a11y-star-text=input.a11yStarText
        onChange("emit", 'change')
        onKeyup("emit", 'keyup')
        onFocus("emit", 'focus')
    />
</fieldset>
`,L=e=>({input:{...e,renderBody:e.renderBody?a=>{a.html(e.renderBody)}:null}}),Z={title:"form input/ebay-star-rating-select",component:E,parameters:{docs:{description:{component:G}}},argTypes:{disabled:{control:{type:"boolean"}},value:{control:{type:"number"},description:"1 - 5, depending on how many stars are selected. If 0 or null defaults to no stars selected"},a11yStarText:{control:"object",description:"Array object which sets the aria label for each star"},a11yText:{control:{type:"text"},description:"The aria label for the outer container. Only used on isolated case."},onChange:{action:"on-change",description:"Triggered on change",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onFocus:{action:"on-focus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onKeydown:{action:"on-keydown",description:"Triggered on keydown",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}}}},r=L.bind({});r.args={disabled:!1,a11yStarText:["1 star","2 stars","3 stars","4 stars","5 stars"],a11yText:"Rate product",value:0};r.parameters={docs:{source:{code:A("ebay-star-rating-select",r.args)}}};const o=e=>({input:e,component:c});o.args={disabled:!1,a11yStarText:["1 star","2 stars","3 stars","4 stars","5 stars"],value:0};o.parameters={docs:{source:{code:H}}};var b,f,h;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,_,k;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  input: args,
  component: FieldsetTemplate
})`,...(k=(_=o.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const ee=["Isolated","Fieldset"];export{o as Fieldset,r as Isolated,ee as __namedExportsOrder,Z as default};
//# sourceMappingURL=star-rating-select.stories.065af1b6.js.map
