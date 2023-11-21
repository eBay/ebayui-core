import{t as d}from"./index-a17a703b.js";import{t as g,r as b,_ as u,g as y,p as _,h,a as x}from"./merge-attrs-f99eec0a.js";import"./_commonjsHelpers-725317a4.js";import"./_commonjs-dynamic-modules-302442b1.js";const f=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-progress-bar
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

\`\`\`marko
<ebay-progress-bar value=50 max=100 />
\`\`\`

The progress bar gives an immediate, real-time visualisation of the current task completion status.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/progress-ebay-progress-bar)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/progress-ebay-progress-bar)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-progress-bar/examples)
`;const s="GK9fTS81",a=g(s),v=a;var k=["class","max","value"];b.r(s,()=>a);const p={};a._=u(function(e,o,S,c,T,D){var i=e.value||0,l=e.max||100;o.e("progress",y(_(e,k),{class:h(["progress-bar",e.class]),max:l,value:i}),"0",c,0,4)},{t:s,i:!0},p);a.Component=x(p,a._);const B=e=>({input:{...e,renderBody:e.renderBody?o=>{o.html(e.renderBody)}:null}}),A={title:"progress/ebay-progress-bar",component:v,parameters:{docs:{description:{component:f}}},argTypes:{value:{control:{type:"number",min:1,max:100},description:"HTML value of progress bar"},max:{control:{type:"number",min:1,max:100},description:"HTML max. Defaults to 100"}}},r=B.bind({});r.args={value:50};r.parameters={docs:{source:{code:d("ebay-progress-bar",r.args)}}};var t,n,m;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const L=["Standard"];export{r as Standard,L as __namedExportsOrder,A as default};
//# sourceMappingURL=progress-bar.stories-49eb8bad.js.map
