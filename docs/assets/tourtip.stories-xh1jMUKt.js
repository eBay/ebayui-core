import{a as R}from"./utils-NX-dnf4r.js";import{t as D,r as E,b as N,f as c,p as b,g as h,d as A}from"./registry-EgEQwbXk.js";/* empty css                    */import{_ as f}from"./dynamic-tag-7vXwaVzE.js";import{_ as P}from"./repeatable-jmdwKenu.js";import{_ as F}from"./self-iterator-6yU_KG2T.js";import{_ as V,a as $}from"./index-HfLWcMEu.js";import{_ as y}from"./render-tag-_0PNNh6Y.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";import"./index-YaSSGaP-.js";import"./index-eucXA0ea.js";/* empty css             */import"./index-l3FQEXUN.js";import"./index-QGVtTfuc.js";import"./index-ERL0bCNR.js";const j=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-tourtip
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/notices-tips-ebay-tourtip)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/notices-tips-ebay-tourtip)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-tourtip/examples)
`;class z extends Marko.Component{handleCollapse({originalEvent:e}){this.state.expanded&&(this.state.expanded=!1,this.emit("collapse",{originalEvent:e}))}handleExpand({originalEvent:e}){this.state.expanded||(this.state.expanded=!0,this.emit("expand",{originalEvent:e}))}onInput(e){(e.open===!1||e.open===!0)&&(this.state.expanded=e.open)}onCreate(){this.state={expanded:!0}}}const m="dcAAZVgJ",d=D(m),H=d;E.r(m,()=>d);const w=z;d._=N(function(t,e,i,n,B,O){const{a11yCloseText:C,content:L,footer:s,heading:S,host:l,open:Z,pointer:G="bottom",...I}=t;e.be("span",null,"0",n,null,0),y(V,{type:"tourtip",pointer:t.pointer,placement:t.placement,offset:t.offset,overlayId:i.elId("overlay"),renderBody:o=>{o.be("span",c(b(I),{class:h(["tourtip",B.expanded&&"tourtip--expanded"])}),"1",n,null,4);{l&&(o.be("span",c({class:h([l.class,"tourtip__host"])},b(l)),"2",n,null,4),f(o,l.renderBody,null,null,null,null,i,"3"),o.ee());let u=null;s&&(u=P(u,{class:[s.class],renderBody:p=>{s.index&&(p.be("span",{class:"tourtip__index"},"5",n,null,1),p.t(s.index,n),p.ee()),f(p,s,null,null,null,null,i,"6")},[Symbol.iterator]:F})),y($,{type:"tourtip",id:i.elId("overlay"),heading:S,content:L,a11yCloseText:C,footer:u},o,i,"4",[["overlay-close","handleCollapse",!1]])}o.ee()}},e,i,"@base"),e.ee()},{t:m},w);d.Component=A(w,d._);const J=`<ebay-tourtip a11yCloseText="Dismiss tourtip">
    <@host>
        <p>
            Nisi quis officia cupidatat irure qui aliquip mollit aliqua dolore. Sint ut anim adipisicing
            eiusmod. Dolor irure adipisicing dolor ullamco elit irure laboris consectetur eiusmod et officia
            mollit irure. Reprehenderit nostrud proident anim deserunt aliqua proident dolore reprehenderit.
            Proident fugiat sit nostrud Lorem aliquip enim est sint. Labore esse quis nulla in Lorem aute
            duis exercitation sit in laborum cillum qui. Dolore voluptate commodo adipisicing anim id
            voluptate dolore quis aliquip duis duis.
        </p>
    </@host>
    <@heading>Important</@heading>
    <@content>
        <p>This new feature was added.</p>
    </@content>
</ebay-tourtip>
`,M=`import type { Input as TourtipInput } from "<ebay-tourtip>"

<ebay-tourtip ...input>
    <@host>
        <p>
            Nisi quis officia cupidatat irure qui aliquip mollit aliqua dolore. Sint ut anim adipisicing
            eiusmod. Dolor irure adipisicing dolor ullamco elit irure laboris consectetur eiusmod et officia
            mollit irure. Reprehenderit nostrud proident anim deserunt aliqua proident dolore reprehenderit.
            Proident fugiat sit nostrud Lorem aliquip enim est sint. Labore esse quis nulla in Lorem aute
            duis exercitation sit in laborum cillum qui. Dolore voluptate commodo adipisicing anim id
            voluptate dolore quis aliquip duis duis.
        </p>
    </@host>
    <@heading>Important</@heading>
    <@content>
        <p>This new feature was added.</p>
    </@content>
    <@footer index="1 of 3">
        <ebay-fake-link>
            Back
        </ebay-fake-link>
        <ebay-button priority="primary">
            Next
        </ebay-button>
    </@footer>
</ebay-tourtip>
`,v=t=>({input:R(t)}),pe={title:"notices & tips/ebay-tourtip",component:H,parameters:{docs:{description:{component:j}}},argTypes:{placement:{options:["top","right","bottom","left","top-start","right-start","bottom-start","left-start","top-end","right-end","bottom-end","left-end"],control:{type:"select"},description:"places tourtip position"},offset:{control:{type:"number"},description:"offsets tourtip position"},a11yCloseText:{control:{type:"text"},description:"A11y text for close button"},host:{name:"@host",description:"The body which will be wrapped as the tourtip's host",table:{category:"@attribute tags"}},heading:{name:"@heading",description:"The heading to be displayed in the tourtip",table:{category:"@attribute tags"}},content:{name:"@content",description:"The content to be displayed in the tourtip",table:{category:"@attribute tags"}},footer:{name:"@footer",description:"The footer to be displayed under the tourtip. Takes an index value which can display the left portion of the footer.",table:{category:"@attribute tags"}},open:{control:{type:"boolean"},description:"allows dev to specify whether tourtip is open or closed"},onCollapse:{action:"on-collapse",description:"Triggered on menu collapse",table:{category:"Events",defaultValue:{summary:""}}},onExpand:{action:"on-expand",description:"Triggered on menu expand",table:{category:"Events",defaultValue:{summary:""}}}}},a=v.bind({});a.args={host:{renderBody:`<p>Nisi quis officia cupidatat irure qui aliquip mollit aliqua dolore. Sint ut anim adipisicing
            eiusmod. Dolor irure adipisicing dolor ullamco elit irure laboris consectetur eiusmod et officia
            mollit irure. Reprehenderit nostrud proident anim deserunt aliqua proident dolore reprehenderit.
            Proident fugiat sit nostrud Lorem aliquip enim est sint. Labore esse quis nulla in Lorem aute
            duis exercitation sit in laborum cillum qui. Dolore voluptate commodo adipisicing anim id
            voluptate dolore quis aliquip duis duis.</p>`},heading:{renderBody:"Important",as:"h2"},content:{renderBody:"<p>This new feature was added.</p>"},a11yCloseText:"close"};a.parameters={docs:{source:{code:J}}};const r=v.bind({});r.args={host:{renderBody:`<p>Nisi quis officia cupidatat irure qui aliquip mollit aliqua dolore. Sint ut anim adipisicing
            eiusmod. Dolor irure adipisicing dolor ullamco elit irure laboris consectetur eiusmod et officia
            mollit irure. Reprehenderit nostrud proident anim deserunt aliqua proident dolore reprehenderit.
            Proident fugiat sit nostrud Lorem aliquip enim est sint. Labore esse quis nulla in Lorem aute
            duis exercitation sit in laborum cillum qui. Dolore voluptate commodo adipisicing anim id
            voluptate dolore quis aliquip duis duis.</p>`},heading:{renderBody:"Important"},content:{renderBody:"<p>This new feature was added.</p>"},a11yCloseText:"close",footer:{index:"1 of 3",renderBody:'<button class="fake-link">Back</button><button class="btn btn--primary">Next</button>'}};r.parameters={docs:{source:{code:M}}};var g,x,q;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(q=(x=a.parameters)==null?void 0:x.docs)==null?void 0:q.source}}};var _,k,T;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(T=(k=r.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const ue=["Standard","withFooter"];export{a as Standard,ue as __namedExportsOrder,pe as default,r as withFooter};
