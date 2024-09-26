import{t as y}from"./index-CCz6reEH.js";import{t as _,r as g,b as f,d as h,p as k,e as B,c as x}from"./registry-CtNeIPU8.js";import{_ as S}from"./dynamic-tag-HMZVE1pc.js";import{_ as C}from"./index-CuJWBWTY.js";import{_ as w}from"./render-tag-mtfFSHEK.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-B6qYX52F.js";/* empty css             */const T=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-cta-button
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/buttons-ebay-cta-button)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/buttons-ebay-cta-button)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-cta-button/examples)
`,o="$IoRPYei",a=_(o);g.r(o,()=>a);const c={};a._=f(function(n,t,s,r,$,E){const{size:i,class:d,renderBody:u,...b}=n;t.be("a",h(k(b),{class:B(["cta-btn",`cta-btn--${i||"default"}`,d])}),"0",r,null,4),t.be("span",{class:"cta-btn__cell"},"1",r,null,1),t.be("span",null,"2",r,null,0),S(t,u,null,null,null,null,s,"3"),t.ee(),w(C,{},t,s,"4"),t.ee(),t.ee()},{t:o,i:!0},c);a.Component=x(c,a._);const z=n=>({input:{...n,renderBody(t){t.html(n.renderBody)}}}),P={title:"buttons/ebay-cta-button",component:a,parameters:{docs:{description:{component:T}}},argTypes:{renderBody:{},size:{type:"options",description:'Can be "large"',table:{defaultValue:{summary:"default"}},options:["default","large"]},href:{description:"link target",table:{defaultValue:{summary:""}}}}},e=z.bind({});e.args={renderBody:"CTA button",href:"http://www.ebay.com",size:"regular"};e.parameters={docs:{source:{code:y("ebay-cta-button",e.args)}}};var m,l,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody(out) {
      out.html(args.renderBody);
    }
  }
})`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const Y=["Standard"];export{e as Standard,Y as __namedExportsOrder,P as default};
