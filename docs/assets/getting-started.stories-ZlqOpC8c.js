import{M as o}from"./chunk-HLWAVYOI-CrIFzHE4.js";import{j as e}from"./jsx-runtime--PYeNBHd.js";import{u as r}from"./index-afjEbwFG.js";import"./iframe-VgUVZRsZ.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";import"./index-xLzVGzoy.js";import"./index-PPLHz8o0.js";function s(n){const t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",pre:"pre",h2:"h2",h3:"h3",h4:"h4",em:"em"},r(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Getting Started"}),`
`,e.jsx(t.h1,{id:"getting-started",children:"Getting Started"}),`
`,e.jsxs(t.p,{children:["The eBayUI core components are available as the ",e.jsx(t.code,{children:"@ebay/ebayui-core"})," package on ",e.jsx(t.a,{href:"https://www.npmjs.com/package/@ebay/ebayui-core",target:"_blank",rel:"nofollow noopener noreferrer",children:"NPM"}),"."]}),`
`,e.jsx(t.p,{children:"Use npm or yarn to add the package dependency to your project:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-sh",children:`npm add @ebay/ebayui-core
`})}),`
`,e.jsx(t.h2,{id:"upgrading-to-the-latest-versions",children:"Upgrading to the latest versions"}),`
`,e.jsxs(t.p,{children:["See the ",e.jsx(t.a,{href:"https://github.com/eBay/ebayui-core/tree/master/UPGRADE.md",target:"_blank",rel:"nofollow noopener noreferrer",children:"upgrade guide"})," for more information"]}),`
`,e.jsx(t.h3,{id:"custom-tags",children:"Custom Tags"}),`
`,e.jsxs(t.p,{children:["Once the package dependency is added, the eBay ",e.jsx(t.a,{href:"https://markojs.com/docs/custom-tags/",target:"_blank",rel:"nofollow noopener noreferrer",children:"customs tags"})," are now available for use in your Marko templates. For example, to use an ",e.jsx(t.code,{children:"ebay-menu"})," component:"]}),`
`,e.jsx(t.h4,{id:"templatemarko",children:e.jsx(t.em,{children:"template.marko"})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-marko",children:`<ebay-menu text="Sort" type="radio">
    <@item>Price</@item>
    <@item>Time</@item>
    <@item>Distance</@item>
</ebay-menu>
`})}),`
`,e.jsx(t.h3,{id:"attributes",children:"Attributes"}),`
`,e.jsxs(t.p,{children:["Attributes provide initial state for a component. We can see that the menu has ",e.jsx(t.code,{children:"text"})," and ",e.jsx(t.code,{children:"type"})," attributes:"]}),`
`,e.jsx(t.h4,{id:"templatemarko-1",children:e.jsx(t.em,{children:"template.marko"})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-marko",children:`<ebay-menu text="Sort" type="radio">
    <@item>Price</@item>
    <@item>Time</@item>
    <@item>Distance</@item>
</ebay-menu>
`})}),`
`,e.jsx(t.p,{children:"Passing new attributes to an ebayui component will always reset it's internal state. If you want to persist this state yourself, events are exposed which allow you to synchronize the state into your own components, for example:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-marko",children:`class {
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
`,e.jsx(t.h4,{id:"pass-through-attributes",children:"Pass-Through Attributes"}),`
`,e.jsx(t.p,{children:"HTML attributes can be used on any component, and they will be passed through to the most prominent tag of the component. The most prominent tag is usually the root or form control, but individual components will note if it varies for specific cases."}),`
`,e.jsx(t.p,{children:"Example of static usage:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-marko",children:`<ebay-button id="my-button"/>
`})}),`
`,e.jsxs(t.p,{children:["For using pass-through attributes dynamically, they should be sent through the ",e.jsx(t.code,{children:"html-attributes"})," attribute:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-marko",children:`$ const myAttributes = { id: 'my-button' };
<ebay-button html-attributes=myAttributes/>
`})}),`
`,e.jsx(t.p,{children:"Static and dynamic pass-through attributes can be used simultaneously (html-attributes takes precedence in conflicts):"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-marko",children:`$ const myAttributes = { id: 'my-button' };
<ebay-button html-attributes=myAttributes type="submit"/>
`})}),`
`,e.jsx(t.h3,{id:"events",children:"Events"}),`
`,e.jsxs(t.p,{children:["Events can also be handled using ",e.jsx(t.a,{href:"https://markojs.com/docs/events/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Marko syntax"}),":"]}),`
`,e.jsx(t.h4,{id:"templatemarko-2",children:e.jsx(t.em,{children:"template.marko"})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-marko",children:`<ebay-menu text="Sort" type="radio" on-change("onMenuChange")>
    <@item>Price</@item>
    <@item>Time</@item>
    <@item>Distance</@item>
</ebay-menu>
`})})]})}function i(n={}){const{wrapper:t}=Object.assign({},r(),n.components);return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}const l=()=>{throw new Error("Docs-only story")};l.parameters={docsOnly:!0};const a={title:"Getting Started",tags:["stories-mdx"],includeStories:["__page"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:i};const j=["__page"];export{j as __namedExportsOrder,l as __page,a as default};
