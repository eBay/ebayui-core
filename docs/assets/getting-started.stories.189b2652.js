import{M as a}from"./chunk-HLWAVYOI.648ad8a9.js";import{j as e}from"./jsx-runtime.d0fc9b61.js";import{u as o}from"./index.e87f8f4b.js";import"./iframe.6d99a6cb.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers.b8add541.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./index.ea475861.js";import"./index.67736049.js";function r(n){const t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",pre:"pre",h2:"h2",h3:"h3",h4:"h4",em:"em"},o(),n.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(a,{title:"Getting Started"}),`
`,e.exports.jsx(t.h1,{id:"getting-started",children:"Getting Started"}),`
`,e.exports.jsxs(t.p,{children:["The eBayUI core components are available as the ",e.exports.jsx(t.code,{children:"@ebay/ebayui-core"})," package on ",e.exports.jsx(t.a,{href:"https://www.npmjs.com/package/@ebay/ebayui-core",target:"_blank",rel:"nofollow noopener noreferrer",children:"NPM"}),"."]}),`
`,e.exports.jsx(t.p,{children:"Use npm or yarn to add the package dependency to your project:"}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-sh",children:`npm add @ebay/ebayui-core
`})}),`
`,e.exports.jsx(t.h2,{id:"upgrading-to-the-latest-versions",children:"Upgrading to the latest versions"}),`
`,e.exports.jsxs(t.p,{children:["See the ",e.exports.jsx(t.a,{href:"https://github.com/eBay/ebayui-core/tree/master/UPGRADE.md",target:"_blank",rel:"nofollow noopener noreferrer",children:"upgrade guide"})," for more information"]}),`
`,e.exports.jsx(t.h3,{id:"custom-tags",children:"Custom Tags"}),`
`,e.exports.jsxs(t.p,{children:["Once the package dependency is added, the eBay ",e.exports.jsx(t.a,{href:"https://markojs.com/docs/custom-tags/",target:"_blank",rel:"nofollow noopener noreferrer",children:"customs tags"})," are now available for use in your Marko templates. For example, to use an ",e.exports.jsx(t.code,{children:"ebay-menu"})," component:"]}),`
`,e.exports.jsx(t.h4,{id:"templatemarko",children:e.exports.jsx(t.em,{children:"template.marko"})}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-marko",children:`<ebay-menu text="Sort" type="radio">
    <@item>Price</@item>
    <@item>Time</@item>
    <@item>Distance</@item>
</ebay-menu>
`})}),`
`,e.exports.jsx(t.h3,{id:"attributes",children:"Attributes"}),`
`,e.exports.jsxs(t.p,{children:["Attributes provide initial state for a component. We can see that the menu has ",e.exports.jsx(t.code,{children:"text"})," and ",e.exports.jsx(t.code,{children:"type"})," attributes:"]}),`
`,e.exports.jsx(t.h4,{id:"templatemarko-1",children:e.exports.jsx(t.em,{children:"template.marko"})}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-marko",children:`<ebay-menu text="Sort" type="radio">
    <@item>Price</@item>
    <@item>Time</@item>
    <@item>Distance</@item>
</ebay-menu>
`})}),`
`,e.exports.jsx(t.p,{children:"Passing new attributes to an ebayui component will always reset it's internal state. If you want to persist this state yourself, events are exposed which allow you to synchronize the state into your own components, for example:"}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-marko",children:`class {
    onCreate() {
        this.state = {
            dialogIsOpen: false
        }
    }

    handleDialogClose() {
        this.state.dialogIsOpen = false;
    }

    handleDialogOpen() {
        this.state.dialogIsOpen = true;
    }
}

<ebay-lightbox-dialog
    open=state.dialogIsOpen
    on-open('handleDialogOpen')
    on-close('handleDialogClose')>
    ...
</ebay-lightbox-dialog>
`})}),`
`,e.exports.jsx(t.h4,{id:"pass-through-attributes",children:"Pass-Through Attributes"}),`
`,e.exports.jsx(t.p,{children:"HTML attributes can be used on any component, and they will be passed through to the most prominent tag of the component. The most prominent tag is usually the root or form control, but individual components will note if it varies for specific cases."}),`
`,e.exports.jsx(t.p,{children:"Example of static usage:"}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-marko",children:`<ebay-button id="my-button"/>
`})}),`
`,e.exports.jsxs(t.p,{children:["For using pass-through attributes dynamically, they should be sent through the ",e.exports.jsx(t.code,{children:"html-attributes"})," attribute:"]}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-marko",children:`$ const myAttributes = { id: 'my-button' };
<ebay-button html-attributes=myAttributes/>
`})}),`
`,e.exports.jsx(t.p,{children:"Static and dynamic pass-through attributes can be used simultaneously (html-attributes takes precedence in conflicts):"}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-marko",children:`$ const myAttributes = { id: 'my-button' };
<ebay-button html-attributes=myAttributes type="submit"/>
`})}),`
`,e.exports.jsx(t.h3,{id:"events",children:"Events"}),`
`,e.exports.jsxs(t.p,{children:["Events can also be handled using ",e.exports.jsx(t.a,{href:"https://markojs.com/docs/events/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Marko syntax"}),":"]}),`
`,e.exports.jsx(t.h4,{id:"templatemarko-2",children:e.exports.jsx(t.em,{children:"template.marko"})}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-marko",children:`<ebay-menu text="Sort" type="radio" on-change("onMenuChange")>
    <@item>Price</@item>
    <@item>Time</@item>
    <@item>Distance</@item>
</ebay-menu>
`})})]})}function i(n={}){const{wrapper:t}=Object.assign({},o(),n.components);return t?e.exports.jsx(t,{...n,children:e.exports.jsx(r,{...n})}):r(n)}const p=()=>{throw new Error("Docs-only story")};p.parameters={docsOnly:!0};const s={title:"Getting Started",tags:["stories-mdx"],includeStories:["__page"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:i};const j=["__page"];export{j as __namedExportsOrder,p as __page,s as default};
//# sourceMappingURL=getting-started.stories.189b2652.js.map
