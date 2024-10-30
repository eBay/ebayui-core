import{a as d}from"./utils-DWCsNc5l.js";import{_ as l}from"./index-C4lUG_Qt.js";import"./registry-CyswyZw5.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-EanwJwZf.js";import"./index-DILp6LbA.js";import"./index-D0VNda02.js";import"./index-Bq4u441m.js";/* empty css             */import"./render-tag-CLyPs9qZ.js";import"./index-B00VMyNr.js";import"./index-Dv-vWuE6.js";import"./index-D57sw9Ri.js";/* empty css                    *//* empty css               *//* empty css             */import"./dynamic-tag-CXXozR29.js";import"./index-s6KmHAjI.js";import"./index-CbT4wDAv.js";import"./attr-tag-DphMQldM.js";import"./of-fallback-C2gEBeKK.js";import"./index-PENkTIAU.js";/* empty css                    */import"./index-CUxP3sFe.js";import"./index-Dvv9KJ1o.js";import"./index-BEDTdAEW.js";import"./index-DcOOfxWY.js";import"./index-BLoPaYkF.js";/* empty css             */import"./index-CqxSgpEp.js";import"./index-eGtaP7gF.js";import"./index-DSBRYoSW.js";import"./index-DoeQzs2M.js";import"./index-D7GlLQHj.js";import"./index-D52eSIAE.js";import"./index-DnXwn7Kz.js";import"./index-DbKxOVwg.js";import"./index-CZ_CdPGB.js";const u=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-file-preview-card
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

Group of file preview cards, primarily used alongside \`ebay-file-input\`.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/media-ebay-file-preview-card-group)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/media-ebay-file-preview-card-group)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-file-preview-card-group/examples)
`,c=m=>({input:d(m)}),$={title:"media/ebay-file-preview-card-group",component:l,parameters:{docs:{description:{component:u}}},argTypes:{card:{name:"@card",table:{category:"@attribute tags"},description:"A repeatable attribute tag for each file preview card"},a11yCancelUploadText:{type:"string",control:{type:"text"},description:"a11y text for cancel upload button, applied to all cards"},deleteText:{type:"string",control:{type:"text"},description:"Text for delete button, applied to all cards"},menuActions:{type:"array",description:"List of menu actions, applied to all cards",control:{type:"object"}},a11ySeeMoreText:{type:"string",control:{type:"text"},description:"a11y text for see more button, applied to all cards"},"onMenu-action":{action:"on-menu-action",description:"Triggered when an action is selected from the menu on a card",table:{category:"Events",defaultValue:{summary:"index, eventName, event /* from ebay-menu-button */"}}},onDelete:{action:"on-delete",description:"Triggered when the delete button is clicked on a card",table:{category:"Events",defaultValue:{summary:"index"}}},onCancel:{action:"on-cancel",description:"Triggered when the cancel button is clicked on a card",table:{category:"Events",defaultValue:{summary:"index"}}}}},r={name:"frog.jpg",type:"image/jpeg",src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"},e=c.bind({});e.args={a11yCancelUploadText:"Cancel upload",deleteText:"Delete",card:[{file:{...r}},{file:{...r}},{file:{...r}}]};const t=c.bind({});t.args={a11yCancelUploadText:"Cancel upload",deleteText:"Delete",card:[...Array(35)].map(()=>({file:{...r}}))};var a,o,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var n,p,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(s=(p=t.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const ee=["Default","ManyCards"];export{e as Default,t as ManyCards,ee as __namedExportsOrder,$ as default};
