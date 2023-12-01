import{a as v}from"./utils-44f5c40b.js";import{t as w,r as C,_ as L,g as m,p as c,h as y,a as R}from"./registry-08dff688.js";/* empty css                    */import{_ as h}from"./dynamic-tag-bb62150b.js";import{_ as I}from"./repeatable-4c76745e.js";import{_ as D}from"./self-iterator-81a0b488.js";import{_ as E,a as N}from"./index-5a4cbbcd.js";import{_ as f}from"./render-tag-73fdbff3.js";import"./_commonjsHelpers-725317a4.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-155d5ffa.js";import"./index-3f14fa50.js";/* empty css             */import"./index-002669f7.js";import"./index-5f81e013.js";import"./index-6cab0bb0.js";const A=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;const P={handleCollapse({originalEvent:e}){this.state.expanded&&(this.state.expanded=!1,this.emit("collapse",{originalEvent:e}))},handleExpand({originalEvent:e}){this.state.expanded||(this.state.expanded=!0,this.emit("expand",{originalEvent:e}))},onInput(e){(e.open===!1||e.open===!0)&&(this.state.expanded=e.open)},onCreate(){this.state={expanded:!0}}},p="dcAAZVgJ",n=w(p),F=n;var V=["pointer","styleTop","styleLeft","styleRight","styleBottom","a11yCloseText","host","toJSON","open","heading","content"];C.r(p,()=>n);const k=P;n._=L(function(e,l,t,a,S,O){var u=e.pointer||"bottom";l.be("span",null,"0",a,null,0),f(E,{type:"tourtip",pointer:u,overlayId:t.elId("overlay"),styleLeft:e.styleLeft,styleTop:e.styleTop,styleRight:e.styleRight,styleBottom:e.styleBottom,renderBody:o=>{o.be("span",m(c(e,V),{class:y(["tourtip",S.expanded&&"tourtip--expanded"])}),"1",a,null,4);{e.host&&(o.be("span",m({class:y([e.host.class,"tourtip__host"])},c(e.host)),"2",a,null,4),h(o,e.host.renderBody,null,null,null,null,t,"3"),o.ee());let d=null;e.footer&&(d=I(d,{class:[e.footer.class],renderBody:s=>{e.footer.index&&(s.be("span",{class:"tourtip__index"},"5",a,null,1),s.t(e.footer.index,a),s.ee()),h(s,e.footer,null,null,null,null,t,"6")},[Symbol.iterator]:D})),f(N,{type:"tourtip",id:t.elId("overlay"),pointer:u,styleLeft:e.styleLeft,styleTop:e.styleTop,styleRight:e.styleRight,styleBottom:e.styleBottom,heading:e.heading,content:e.content,a11yCloseText:e.a11yCloseText,footer:d},o,t,"4",[["overlay-close","handleCollapse",!1]])}o.ee()}},l,t,"@base"),l.ee()},{t:p},k);n.Component=R(k,n._);const $=`<ebay-tourtip a11y-close-text="Dismiss tourtip">
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
`,J=`<ebay-tourtip ...input>
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
`,B=e=>({input:v(e)}),re={title:"notices & tips/ebay-tourtip",component:F,parameters:{docs:{description:{component:A}}},argTypes:{pointer:{control:{type:"text"},description:"options are `top-left`, `top`, `top-right`, `right`, `right-bottom`, `right-top`, `bottom-left`, `bottom-right`, `bottom`, `left`, `left-bottom`, `left-top`"},styleTop:{control:{type:"text"},description:"a style property for the CSS `top` rule"},styleLeft:{control:{type:"text"},description:"a style property for the CSS `left` rule"},styleRight:{control:{type:"text"},description:"a style property for the CSS `right` rule"},styleBottom:{control:{type:"text"},description:"a style property for the CSS `bottom` rule"},a11yCloseText:{control:{type:"text"},description:"A11y text for close button"},host:{name:"@host",description:"The body which will be wrapped as the tourtip's host",table:{category:"@attribute tags"}},heading:{name:"@heading",description:"The heading to be displayed in the tourtip",table:{category:"@attribute tags"}},content:{name:"@content",description:"The content to be displayed in the tourtip",table:{category:"@attribute tags"}},footer:{name:"@footer",description:"The footer to be displayed under the tourtip. Takes an index value which can display the left portion of the footer.",table:{category:"@attribute tags"}},open:{control:{type:"boolean"},description:"allows dev to specify whether tourtip is open or closed"},onCollapse:{action:"on-collapse",description:"Triggered on menu collapse",table:{category:"Events",defaultValue:{summary:""}}},onExpand:{action:"on-expand",description:"Triggered on menu expand",table:{category:"Events",defaultValue:{summary:""}}}}},i=B.bind({});i.args={host:{renderBody:`<p>Nisi quis officia cupidatat irure qui aliquip mollit aliqua dolore. Sint ut anim adipisicing
            eiusmod. Dolor irure adipisicing dolor ullamco elit irure laboris consectetur eiusmod et officia
            mollit irure. Reprehenderit nostrud proident anim deserunt aliqua proident dolore reprehenderit.
            Proident fugiat sit nostrud Lorem aliquip enim est sint. Labore esse quis nulla in Lorem aute
            duis exercitation sit in laborum cillum qui. Dolore voluptate commodo adipisicing anim id
            voluptate dolore quis aliquip duis duis.</p>`},heading:{renderBody:"Important",as:"h2"},content:{renderBody:"<p>This new feature was added.</p>"},a11yCloseText:"close"};i.parameters={docs:{source:{code:$}}};const r=B.bind({});r.args={host:{renderBody:`<p>Nisi quis officia cupidatat irure qui aliquip mollit aliqua dolore. Sint ut anim adipisicing
            eiusmod. Dolor irure adipisicing dolor ullamco elit irure laboris consectetur eiusmod et officia
            mollit irure. Reprehenderit nostrud proident anim deserunt aliqua proident dolore reprehenderit.
            Proident fugiat sit nostrud Lorem aliquip enim est sint. Labore esse quis nulla in Lorem aute
            duis exercitation sit in laborum cillum qui. Dolore voluptate commodo adipisicing anim id
            voluptate dolore quis aliquip duis duis.</p>`},heading:{renderBody:"Important"},content:{renderBody:"<p>This new feature was added.</p>"},a11yCloseText:"close",footer:{index:"1 of 3",renderBody:'<button class="fake-link">Back</button><button class="btn btn--primary">Next</button>'}};r.parameters={docs:{source:{code:J}}};var b,g,x;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var q,_,T;r.parameters={...r.parameters,docs:{...(q=r.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(T=(_=r.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};const ae=["Standard","withFooter"];export{i as Standard,ae as __namedExportsOrder,re as default,r as withFooter};
//# sourceMappingURL=tourtip.stories-f1e62b46.js.map
