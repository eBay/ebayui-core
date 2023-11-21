import{t as K}from"./index-a17a703b.js";import{t as T,r as x,_ as S,f as j,g,p as A,a as w}from"./merge-attrs-51a02d23.js";import{_ as O}from"./index-0bbb096e.js";import{_ as C}from"./render-tag-73fdbff3.js";import{_ as V}from"./v-element-66dc25dc.js";import"./_commonjsHelpers-725317a4.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-42c7fb72.js";/* empty css             */const G=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;const P={onCreate(){this.state={value:0}},onInput(e){parseInt(e.value,0),this.state.value=e.value},handleClick:u("change"),handleFocus:u("focus"),handleKeydown:u("keydown")};function u(e){return function(a,t,s){s.disabled||(this.state.value=a,this.emit(e,{originalEvent:t,value:a}))}}const p="L0GfGBDo",l=T(p),E=l;var z=["class","value","a11yText","a11yStarText","disbaled"];x.r(p,()=>l);const F=P;l._=S(function(e,a,t,s,d,I){var R=e.a11yStarText||[];a.be("div",j({role:e.a11yText&&"radiogroup","aria-label":e.a11yText,class:g(["star-rating-select",e.class])},A(e,z)),"0",s,null,4);for(let $=(5-1)/1,m=0;m<=$;m++){const r=1+m*1,i="[".concat(r,"]");a.be("span",{class:"star-rating-select__radio"},"1"+i,s,null,1),a.e("input",{"aria-label":R[r-1],class:g(["star-rating-select__control",r<=d.value&&"star-rating-select__control--filled"]),type:"radio",name:t.elId("star-rating"),value:r,disabled:e.disabled,checked:d.value===r},"2"+i,s,0,0,{onclick:t.d("click","handleClick",!1,[r]),onfocus:t.d("focus","handleFocus",!1,[r]),onkeydown:t.d("keydown","handleKeydown",!1,[r])}),a.be("span",{class:"star-rating-select__radio-icon"},"3"+i,s,null,1),C(O,{},a,t,"4"+i),a.ee(),a.ee()}a.ee()},{t:p},F);l.Component=w(F,l._);const y="paD0yFOo",c=T(y),D=V("legend",null,"1",null,1,0).t("Rate Product");x.r(y,()=>c);const B={};c._=S(function(e,a,t,s,d,I){a.be("fieldset",null,"0",s,null,0),a.n(D,s),C(E,{value:e.value,a11yStarText:e.a11yStarText},a,t,"2",[["change","emit",!1,["change"]],["keyup","emit",!1,["keyup"]],["focus","emit",!1,["focus"]]]),a.ee()},{t:y},B);c.Component=w(B,c._);const H=`class {}

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
`,L=e=>({input:{...e,renderBody:e.renderBody?a=>{a.html(e.renderBody)}:null}}),Z={title:"form input/ebay-star-rating-select",component:E,parameters:{docs:{description:{component:G}}},argTypes:{disabled:{control:{type:"boolean"}},value:{control:{type:"number"},description:"1 - 5, depending on how many stars are selected. If 0 or null defaults to no stars selected"},a11yStarText:{control:"object",description:"Array object which sets the aria label for each star"},a11yText:{control:{type:"text"},description:"The aria label for the outer container. Only used on isolated case."},onChange:{action:"on-change",description:"Triggered on change",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onFocus:{action:"on-focus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onKeydown:{action:"on-keydown",description:"Triggered on keydown",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}}}},n=L.bind({});n.args={disabled:!1,a11yStarText:["1 star","2 stars","3 stars","4 stars","5 stars"],a11yText:"Rate product",value:0};n.parameters={docs:{source:{code:K("ebay-star-rating-select",n.args)}}};const o=e=>({input:e,component:c});o.args={disabled:!1,a11yStarText:["1 star","2 stars","3 stars","4 stars","5 stars"],value:0};o.parameters={docs:{source:{code:H}}};var b,f,_;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(_=(f=n.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var h,k,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  input: args,
  component: FieldsetTemplate
})`,...(v=(k=o.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const ee=["Isolated","Fieldset"];export{o as Fieldset,n as Isolated,ee as __namedExportsOrder,Z as default};
//# sourceMappingURL=star-rating-select.stories-8a4d5506.js.map
