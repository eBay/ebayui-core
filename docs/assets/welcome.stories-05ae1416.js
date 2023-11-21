import{M as t}from"./chunk-HLWAVYOI-59a18cb3.js";import{j as e}from"./jsx-runtime-03e8c47b.js";import{u as i}from"./index-209dd1e0.js";import"./iframe-b3ef6fbe.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-b28ebb47.js";import"./index-356e4a49.js";function o(n){const r=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",h2:"h2",ul:"ul",li:"li",a:"a",em:"em",code:"code",h3:"h3"},i(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Welcome"}),`
`,e.jsx(r.h1,{id:"ebayui-core",children:"eBayUI Core"}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsx(r.p,{children:"Collection of Marko widgets; considered to be the core building blocks for all eBay components, pages & apps."}),`
`]}),`
`,e.jsx(r.h2,{id:"requirements",children:"Requirements"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://nodejs.org/en/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Node.js"})}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://markojs.com",target:"_blank",rel:"nofollow noopener noreferrer",children:"Marko"})," (v4+)"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://ebay.github.io/skin/",target:"_blank",rel:"nofollow noopener noreferrer",children:"eBay Skin"})," (v13+)"]}),`
`]}),`
`,e.jsx(r.p,{children:e.jsxs(r.em,{children:["Note: eBayUI Core components utilize Marko flags and, therefore, require ",e.jsx(r.code,{children:"<lasso-page/>"})," to be added to any page which will have core components."]})}),`
`,e.jsx(r.p,{children:e.jsxs(r.em,{children:["Note: ",e.jsx(r.code,{children:"@ebay/skin/global"})," and ",e.jsx(r.code,{children:"@ebay/skin/marketsans"})," are required to be loaded by your app for all modules to load correctly."]})}),`
`,e.jsx(r.p,{children:e.jsxs(r.em,{children:["Note: In order for spread attributes to work properly, ",e.jsx(r.code,{children:"marko@4.18.22"})," at least is required"]})}),`
`,e.jsx(r.h3,{id:"browser-policy",children:"Browser Policy"}),`
`,e.jsxs(r.p,{children:["All components are developed and tested cross-browser using ",e.jsx(r.a,{href:"https://www.browserstack.com/automate/public-build/M1FCV3RrZHhkTG9ZaXBwWmY0VDJvZUhPM1cwM1RCZTBMRUVrODJ0MVg5Yz0tLTMyY0tGZHNKSGpTbk5DeFVURTNGNFE9PQ==--dd4c576f4331f72c56cb7f9a9f4ac4f403d34b0f",target:"_blank",rel:"nofollow noopener noreferrer",children:"BrowserStack"}),", in accordance with our official ",e.jsx(r.a,{href:"https://github.com/eBay/browserslist-config",target:"_blank",rel:"nofollow noopener noreferrer",children:"eBay Browser Policy"}),"."]}),`
`,e.jsx(r.h3,{id:"accessibility-a11y",children:"Accessibility (A11Y)"}),`
`,e.jsxs(r.p,{children:["We take accessibility very seriously. Very seriously indeed. Therefore, all components are built in accordance to the ",e.jsx("a",{href:"https://ebay.gitbooks.io/mindpatterns/content/",children:"eBay MIND Patterns"}),". These patterns, in turn, build on from the specifications provided by the ",e.jsx("a",{href:"https://w3c.github.io/aria-practices/",children:"WAI-ARIA Authoring Practices"}),"."]}),`
`,e.jsx(r.p,{children:"Components are built in a layered, progressively enhanced fashion, utilizing the following resources:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://github.com/ianmcburnie/bones",children:"Bones (HTML)"}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://github.com/eBay/skin",children:"eBay Skin (CSS)"}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://github.com/makeup-js",children:"MakeupJS (JavaScript)"}),`
`]}),`
`]}),`
`,e.jsx(r.p,{children:"Each layer does its bit to enforce and enhance accessibility. We consider this level of support to be one of our chief selling points, and we hope you do too!"}),`
`,e.jsx(r.h2,{id:"releases--milestones",children:"Releases & Milestones"}),`
`,e.jsxs(r.p,{children:["For upcoming roadmap and release history, please refer to our ",e.jsx(r.a,{href:"https://github.com/eBay/ebayui-core/releases",target:"_blank",rel:"nofollow noopener noreferrer",children:"releases"})," and ",e.jsx(r.a,{href:"https://github.com/eBay/ebayui-core/milestones",target:"_blank",rel:"nofollow noopener noreferrer",children:"milestones"})," pages."]}),`
`,e.jsx(r.h3,{id:"versioning",children:"Versioning"}),`
`,e.jsxs(r.p,{children:["The ebayui-core package follows strict ",e.jsx(r.a,{href:"http://semver.org",target:"_blank",rel:"nofollow noopener noreferrer",children:"Semantic Versioning"}),"."]}),`
`,e.jsx(r.p,{children:"Given a version number MAJOR.MINOR.PATCH:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"MAJOR version is incremented when we make incompatible API changes"}),`
`,e.jsx(r.li,{children:"MINOR version is incremented when we add functionality in a backwards-compatible manner"}),`
`,e.jsx(r.li,{children:"PATCH version is incremented when we make backwards-compatible bug fixes."}),`
`]}),`
`,e.jsx(r.h3,{id:"deprecations",children:"Deprecations"}),`
`,e.jsxs(r.p,{children:["Deprecations will be communicated via ",e.jsx(r.a,{href:"https://github.com/eBay/ebayui-core/releases",target:"_blank",rel:"nofollow noopener noreferrer",children:"release notes"}),", so please ensure that you read those carefully. In general, expect any deprecated feature to be removed in the next major version. However, in some cases we may wait a while longer."]}),`
`,e.jsx(r.h3,{id:"issues",children:"Issues"}),`
`,e.jsxs(r.p,{children:["Please use our ",e.jsx(r.a,{href:"https://github.com/eBay/ebayui-core/issues",target:"_blank",rel:"nofollow noopener noreferrer",children:"issues page"})," to ask questions, report issues or submit feature requests."]}),`
`,e.jsx(r.p,{children:"To help track your issue, our admins will assign it with one or more coloured labels:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Black: Issue Type (e.g. bug, question, test case)"}),`
`,e.jsx(r.li,{children:"White: Resolution (e.g. wont fix, invalid, duplicate)"}),`
`,e.jsx(r.li,{children:"Gray: Status (e.g. backlog, in progress, help wanted)"}),`
`,e.jsx(r.li,{children:"Red: Blocker (e.g. dependency, discussion, design)"}),`
`,e.jsx(r.li,{children:"Green: Module (e.g. button, radio, dialog)"}),`
`,e.jsx(r.li,{children:"Blue: Aspect (e.g. build, documentation, website)"}),`
`,e.jsx(r.li,{children:"Yellow: Semver Guidance (e.g. breaking change, backwards compatible)"}),`
`,e.jsx(r.li,{children:"Purple: Sprint (e.g. sprint 1, sprint 2, etc)"}),`
`]}),`
`,e.jsx(r.h2,{id:"license",children:"License"}),`
`,e.jsx(r.p,{children:"Copyright (c) 2018 eBay Inc."}),`
`,e.jsxs(r.p,{children:["Use of this source code is governed by a MIT-style license that can be found in the LICENSE file or at ",e.jsx(r.a,{href:"https://opensource.org/licenses/MIT",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://opensource.org/licenses/MIT"}),"."]})]})}function l(n={}){const{wrapper:r}=Object.assign({},i(),n.components);return r?e.jsx(r,{...n,children:e.jsx(o,{...n})}):o(n)}const a=()=>{throw new Error("Docs-only story")};a.parameters={docsOnly:!0};const s={title:"Welcome",tags:["stories-mdx"],includeStories:["__page"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:l};const f=["__page"];export{f as __namedExportsOrder,a as __page,s as default};
//# sourceMappingURL=welcome.stories-05ae1416.js.map
