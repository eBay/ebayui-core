import{t as d}from"./index.bcb3df20.js";import{t as u,r as y,a as g,d as b,m as h,c as f,p as _}from"./merge-attrs.9e0d7be9.js";import{d as x}from"./dynamic-tag.70156c9d.js";import"./_commonjsHelpers.b8add541.js";import"./_commonjs-dynamic-modules.30ae7933.js";const B=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-signal
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

\`\`\`marko
<ebay-signal status="trustworthy">
    Trustworthy
</ebay-signal>
\`\`\`

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/graphics-icons-ebay-signal)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/graphics-icons-ebay-signal)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-signal/examples)
`;const a="LjC4YAbz",s=u(a),S=s;var T=["status"];y.exports.r(a,()=>s);const l={};s._=g(function(e,n,c,p,w,C){var m="neutral";n.be("span",h(_(e,T),{class:f("signal signal--".concat(e.status||m))}),"0",p,null,4),x(n,e.renderBody,null,null,null,null,c,"1"),n.ee()},{t:a,i:!0},l);s.Component=b(l,s._);const k=e=>({input:{...e,renderBody:e.renderBody?n=>{n.html(e.renderBody)}:null}}),z={title:"graphics & icons/ebay-signal",component:S,parameters:{docs:{description:{component:B}}},argTypes:{status:{type:"enum",control:{type:"select"},options:["trustworthy","recent","time-sensitive","neutral"]}}},t=k.bind({});t.args={renderBody:"Signal Text"};t.parameters={docs:{source:{code:d("ebay-signal",t.args)}}};var o,r,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const H=["Standard"];export{t as Standard,H as __namedExportsOrder,z as default};
//# sourceMappingURL=signal.stories.6ea42d69.js.map
