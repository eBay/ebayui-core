import{t as b}from"./index-CCz6reEH.js";import{t as g,r as y,b as _,e as h,p as f,f as x,d as k}from"./registry-B-klnak9.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const v=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,a="FEQfwwob",o=g(a),B=o;y.r(a,()=>o);const m={};o._=_(function(r,s,T,i,C,D){const{class:c,max:l=100,value:d=0,...u}=r;s.e("progress",h(f(u),{class:x(["progress-bar",c]),max:l,value:d}),"0",i,0,4)},{t:a,i:!0},m);o.Component=k(m,o._);const S=r=>({input:{...r,renderBody:r.renderBody?s=>{s.html(r.renderBody)}:null}}),M={title:"progress/ebay-progress-bar",component:B,parameters:{docs:{description:{component:v}}},argTypes:{value:{control:{type:"number",min:1,max:100},description:"HTML value of progress bar"},max:{control:{type:"number",min:1,max:100},description:"HTML max. Defaults to 100"}}},e=S.bind({});e.args={value:50};e.parameters={docs:{source:{code:b("ebay-progress-bar",e.args)}}};var t,n,p;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const j=["Standard"];export{e as Standard,j as __namedExportsOrder,M as default};
