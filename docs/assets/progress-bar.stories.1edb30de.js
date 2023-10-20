import{t as d}from"./index.bcb3df20.js";import{t as u,r as b,a as g,d as y,m as x,c as h,p as f}from"./merge-attrs.9e0d7be9.js";import"./_commonjsHelpers.b8add541.js";import"./_commonjs-dynamic-modules.30ae7933.js";const v=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;const o="GK9fTS81",s=u(o),_=s;var B=["class","max","value"];b.exports.r(o,()=>s);const m={};s._=g(function(e,a,T,c,k,D){var i=e.value||0,l=e.max||100;a.e("progress",x(f(e,B),{class:h(["progress-bar",e.class]),max:l,value:i}),"0",c,0,4)},{t:o,i:!0},m);s.Component=y(m,s._);const S=e=>({input:{...e,renderBody:e.renderBody?a=>{a.html(e.renderBody)}:null}}),w={title:"progress/ebay-progress-bar",component:_,parameters:{docs:{description:{component:v}}},argTypes:{value:{control:{type:"number",min:1,max:100},description:"HTML value of progress bar"},max:{control:{type:"number",min:1,max:100},description:"HTML max. Defaults to 100"}}},r=S.bind({});r.args={value:50};r.parameters={docs:{source:{code:d("ebay-progress-bar",r.args)}}};var t,n,p;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const L=["Standard"];export{r as Standard,L as __namedExportsOrder,w as default};
//# sourceMappingURL=progress-bar.stories.1edb30de.js.map
