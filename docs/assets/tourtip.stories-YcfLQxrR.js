import{a as E}from"./utils-DWCsNc5l.js";import{t as F,r as N,b as V,f as c,p as m,e as b,d as A}from"./registry-Cc025Aii.js";/* empty css                    */import{_ as f}from"./dynamic-tag-BtS2B08A.js";import{i as P,a as $}from"./attr-tag-DphMQldM.js";import{_ as j,a as z}from"./index-BTPo3BFM.js";import{_ as h}from"./render-tag-BBOJ9dEX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-DS5aCnNB.js";import"./index-BH_jsMDn.js";/* empty css             */import"./index-D7B88Psz.js";import"./index-D7GlLQHj.js";import"./index--35j0Bzx.js";const H=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;class J extends Marko.Component{handleCollapse({originalEvent:e}){this.state.expanded&&(this.state.expanded=!1,this.emit("collapse",{originalEvent:e}))}handleExpand({originalEvent:e}){this.state.expanded||(this.state.expanded=!0,this.emit("expand",{originalEvent:e}))}onInput(e){(e.open===!1||e.open===!0)&&(this.state.expanded=e.open)}onCreate(){this.state={expanded:!0}}}const u="dcAAZVgJ",l=F(u),M=l;N.r(u,()=>l);const w=J;l._=V(function(t,e,i,r,v,G){const{a11yCloseText:B,content:C,footer:s,heading:I,host:d,open:K,noFlip:S,notInline:L,noShift:R=!0,pointer:Q="bottom",...D}=t;e.be("span",null,"0",r,null,0),h(j,{type:"tourtip",noFlip:S,notInline:L,noShift:R,pointer:t.pointer,placement:t.placement,offset:t.offset,overlayId:i.elId("overlay"),renderBody:o=>{o.be("span",c(m(D),{class:b(["tourtip",v.expanded&&"tourtip--expanded"])}),"1",r,null,4),d&&(o.be("span",c({class:b([d.class,"tourtip__host"])},m(d)),"2",r,null,4),f(o,d.renderBody,null,null,null,null,i,"3"),o.ee()),h(z,P(()=>{s&&$("footer",{class:[s.class],renderBody:p=>{s.index&&(p.be("span",{class:"tourtip__index"},"5",r,null,1),p.t(s.index,r),p.ee()),f(p,s,null,null,null,null,i,"6")}})},{type:"tourtip",id:i.elId("overlay"),heading:I,content:C,a11yCloseText:B}),o,i,"4",[["overlay-close","handleCollapse",!1]]),o.ee()}},e,i,"@base"),e.ee()},{t:u},w);l.Component=A(w,l._);const O=`<ebay-tourtip a11yCloseText="Dismiss tourtip">
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
`,Z=`import type { Input as TourtipInput } from "<ebay-tourtip>"

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
`,T=t=>({input:E(t)}),ue={title:"notices & tips/ebay-tourtip",component:M,parameters:{docs:{description:{component:H}}},argTypes:{placement:{options:["top","right","bottom","left","top-start","right-start","bottom-start","left-start","top-end","right-end","bottom-end","left-end"],control:{type:"select"},description:"places tourtip position"},offset:{control:{type:"number"},description:"offsets tourtip position"},a11yCloseText:{control:{type:"text"},description:"A11y text for close button"},host:{name:"@host",description:"The body which will be wrapped as the tourtip's host",table:{category:"@attribute tags"}},heading:{name:"@heading",description:"The heading to be displayed in the tourtip",table:{category:"@attribute tags"}},content:{name:"@content",description:"The content to be displayed in the tourtip",table:{category:"@attribute tags"}},footer:{name:"@footer",description:"The footer to be displayed under the tourtip. Takes an index value which can display the left portion of the footer.",table:{category:"@attribute tags"}},noFlip:{control:{type:"boolean"},description:"disables flipping tourtip when its offscreen",table:{defaultValue:{summary:"false"}}},noShift:{control:{type:"boolean"},description:"disables shifting tourtip when its offscreen",table:{defaultValue:{summary:"true"}}},notInline:{control:{type:"boolean"},description:"disables moving tourtip to be inline with content when it is rendered",table:{defaultValue:{summary:"false"}}},open:{control:{type:"boolean"},description:"allows dev to specify whether tourtip is open or closed"},onCollapse:{action:"on-collapse",description:"Triggered on menu collapse",table:{category:"Events",defaultValue:{summary:""}}},onExpand:{action:"on-expand",description:"Triggered on menu expand",table:{category:"Events",defaultValue:{summary:""}}}}},n=T.bind({});n.args={host:{renderBody:`<p>Nisi quis officia cupidatat irure qui aliquip mollit aliqua dolore. Sint ut anim adipisicing
            eiusmod. Dolor irure adipisicing dolor ullamco elit irure laboris consectetur eiusmod et officia
            mollit irure. Reprehenderit nostrud proident anim deserunt aliqua proident dolore reprehenderit.
            Proident fugiat sit nostrud Lorem aliquip enim est sint. Labore esse quis nulla in Lorem aute
            duis exercitation sit in laborum cillum qui. Dolore voluptate commodo adipisicing anim id
            voluptate dolore quis aliquip duis duis.</p>`},heading:{renderBody:"Important",as:"h2"},content:{renderBody:"<p>This new feature was added.</p>"},a11yCloseText:"close"};n.parameters={docs:{source:{code:O}}};const a=T.bind({});a.args={host:{renderBody:`<p>Nisi quis officia cupidatat irure qui aliquip mollit aliqua dolore. Sint ut anim adipisicing
            eiusmod. Dolor irure adipisicing dolor ullamco elit irure laboris consectetur eiusmod et officia
            mollit irure. Reprehenderit nostrud proident anim deserunt aliqua proident dolore reprehenderit.
            Proident fugiat sit nostrud Lorem aliquip enim est sint. Labore esse quis nulla in Lorem aute
            duis exercitation sit in laborum cillum qui. Dolore voluptate commodo adipisicing anim id
            voluptate dolore quis aliquip duis duis.</p>`},heading:{renderBody:"Important"},content:{renderBody:"<p>This new feature was added.</p>"},a11yCloseText:"close",footer:{index:"1 of 3",renderBody:'<button class="fake-link">Back</button><button class="btn btn--primary">Next</button>'}};a.parameters={docs:{source:{code:Z}}};var y,g,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var q,_,k;a.parameters={...a.parameters,docs:{...(q=a.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(k=(_=a.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const ce=["Standard","withFooter"];export{n as Standard,ce as __namedExportsOrder,ue as default,a as withFooter};
