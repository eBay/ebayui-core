import{t as s}from"./index-CCz6reEH.js";import{_ as i}from"./index-qNYgSJLs.js";import"./registry-CtNeIPU8.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";/* empty css             */import"./dynamic-tag-HMZVE1pc.js";import"./index-CbT4wDAv.js";const l=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-fake-link
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.1.0
    </span>
</h1>

Looks like a link, but under the hood is a button.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/buttons-ebay-fake-link)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/buttons-ebay-fake-link)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-fake-link/examples)
`,c=t=>({input:{...t,renderBody(r){r.html(t.renderBody)}}}),f={title:"buttons/ebay-fake-link",component:i,parameters:{docs:{description:{component:l}}},argTypes:{renderBody:{},disabled:{description:"",table:{category:"Toggles",defaultValue:{summary:"false"}}},variant:{description:"Should only be standalone when it is clear contextually that this is a link, regardless of styles",options:["inline","standalone"],control:{type:"select"},table:{defaultValue:{summary:"inline"}}},onClick:{action:"on-click",description:"Triggered on click",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onEscape:{action:"on-escape",description:"Triggered on escape key",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onFocus:{action:"on-focus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onBlur:{action:"on-blur",description:"Triggered on blur",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}}}},e=c.bind({});e.args={renderBody:"Fake-Link",disabled:!1};e.parameters={docs:{source:{code:s("ebay-fake-link",e.args)}}};var n,a,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody(out) {
      out.html(args.renderBody);
    }
  }
})`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const h=["Standard"];export{e as Standard,h as __namedExportsOrder,f as default};
