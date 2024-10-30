import{t as a}from"./index-CCz6reEH.js";import{_ as p}from"./index-DILp6LbA.js";import"./registry-CyswyZw5.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-D0VNda02.js";import"./index-Bq4u441m.js";/* empty css             */import"./render-tag-CLyPs9qZ.js";const i=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-progress-spinner
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

\`\`\`marko
<ebay-progress-spinner size="large" aria-label="busy" />
\`\`\`

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/progress-ebay-progress-spinner)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/progress-ebay-progress-spinner)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-progress-spinner/examples)
`,m=r=>({input:{...r,renderBody:r.renderBody?t=>{t.html(r.renderBody)}:null}}),x={title:"progress/ebay-progress-spinner",component:p,parameters:{docs:{description:{component:i}}},argTypes:{size:{options:["small","large"],control:{type:"select"},description:'size of spinner - can be "small", "large". default is small '},ariaLabel:{control:{type:"text"},description:"Description for accessibility"}}},e=m.bind({});e.args={ariaLabel:"loading"};e.parameters={docs:{source:{code:'<ebay-progress-spinner aria-label="Busy"/>'}}};e.parameters={docs:{source:{code:a("ebay-progress-spinner",e.args)}}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const B=["Loading"];export{e as Loading,B as __namedExportsOrder,x as default};
