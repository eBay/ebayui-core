import{t as _,r as k,b as v,e as T,p as $,d as W,c as C}from"./registry-CyswyZw5.js";import{_ as ee}from"./index-Cikuxr21.js";import{_ as c}from"./render-tag-CLyPs9qZ.js";import{_ as y}from"./dynamic-tag-CXXozR29.js";import{i as m,a as u}from"./attr-tag-DphMQldM.js";import{_ as r}from"./const-element-B9h58Dwq.js";import{_ as G}from"./of-fallback-C2gEBeKK.js";import{_ as J}from"./index-C4lUG_Qt.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-Bq4u441m.js";/* empty css             */import"./index-EanwJwZf.js";import"./index-DILp6LbA.js";import"./index-D0VNda02.js";import"./index-B00VMyNr.js";import"./index-Dv-vWuE6.js";import"./index-D57sw9Ri.js";/* empty css                    *//* empty css               *//* empty css             */import"./index-s6KmHAjI.js";import"./index-CbT4wDAv.js";import"./index-PENkTIAU.js";/* empty css                    */import"./index-CUxP3sFe.js";import"./index-Dvv9KJ1o.js";import"./index-BEDTdAEW.js";import"./index-DcOOfxWY.js";import"./index-BLoPaYkF.js";/* empty css             */import"./index-CqxSgpEp.js";import"./index-eGtaP7gF.js";import"./index-DSBRYoSW.js";import"./index-DoeQzs2M.js";import"./index-D7GlLQHj.js";import"./index-D52eSIAE.js";import"./index-DnXwn7Kz.js";import"./index-DbKxOVwg.js";import"./index-CZ_CdPGB.js";const te=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-file-input
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

Wrapper for \`<input type="file">\` with additional styles applied.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/form-input-ebay-file-input)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/form-input-ebay-file-input)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-file-input/examples)
`;class ne extends Marko.Component{onCreate(){this.state={dragging:!1}}handleFileChange(e){const t=e.target;this.emit("input",{files:t.files,originalEvent:e})}handleDragOver(){this.state.dragging=!0}handleDragLeave(){this.state.dragging=!1}}const B="mnuwYcfb",l=_(B);k.r(B,()=>l);const Q=ne;l._=v(function(n,e,t,s,i,f){const{header:a,class:I,subheader:w,renderBody:S,...N}=n;if(e.be("div",{class:T(["file-input",I])},"0",s,null,1),e.be("div",{class:T(["file-input__container",i.dragging&&"file-input___container--dragged-over"])},"1",s,null,1),e.be("div",{class:"file-input__upload-icon"},"2",s,null,1),c(ee,{},e,t,"3"),e.ee(),e.be("div",{class:"file-input__content"},"4",s,null,1),a){const{as:x,class:U,renderBody:E,...X}=a;y(e,x||"span",()=>({class:["file-input__content-header",U],...$(X),id:a.id}),Z=>{y(Z,a.renderBody,null,null,null,null,t,"6")},null,null,t,"5")}if(w){const{class:x,renderBody:U,...E}=w;e.be("span",W({class:T(["file-input__content-subheader",x])},$(E)),"7",s,null,4),y(e,w.renderBody,null,null,null,null,t,"8"),e.ee()}S&&(e.be("label",{for:t.elId("input")},"9",s,null,0),e.be("span",{class:"file-input__content-cta"},"10",s,null,1),y(e,S,null,null,null,null,t,"11"),e.ee(),e.ee()),e.ee(),e.ee(),e.e("input",W({type:"file",class:"file-input__input",id:t.elId("input")},$(N)),"12",s,0,4,{onchange:t.d("change","handleFileChange",!1),ondragenter:t.d("dragenter","handleDragOver",!1),ondragover:t.d("dragover","handleDragOver",!1),ondragleave:t.d("dragleave","handleDragLeave",!1),ondrop:t.d("drop","handleDragLeave",!1)}),e.ee()},{t:B},Q);l.Component=C(Q,l._);const D="LbqGFJQk",h=_(D),ae=r("p",null,1).t("Subtitle 1"),se=r("p",null,1).t("Subtitle 2"),ie=r("span",null,1).t("Browse files");k.r(D,()=>h);const R={};h._=v(function(n,e,t,s,i,f){c(l,m(()=>(u("header",{class:"titleClass",id:"titleId",renderBody:a=>{a.t("Title",s)}}),u("subheader",{class:"subtitleClass",id:"subtitleId",renderBody:a=>{a.n(ae,s),a.n(se,s)}}),a=>{a.n(ie,s)}),{...n,header:void 0,subheader:void 0}),e,t,"0")},{t:D,i:!0},R);h.Component=C(R,h._);const le=`<ebay-file-input ...input>
    <@header class="titleClass" id="titleId">
        Title
    </@header>
    <@subheader class="subtitleClass" id="subtitleId">
        <p>Subtitle 1</p>
        <p>Subtitle 2</p>
    </@subheader>
    <span>Browse files</span>
</ebay-file-input>
`,F="kYvYnlFd",g=_(F),re=r("p",null,1).t("Multiple files"),oe=r("span",null,1).t("Browse files");k.r(F,()=>g);const V={onCreate(){this.state={files:[]}},handleInput({files:n}){this.state.files=this.state.files.concat(Array.from(n))},handleDelete(n){this.state.files=[...this.state.files.slice(0,n),...this.state.files.slice(n+1)]}};g._=v(function(n,e,t,s,i,f){c(l,m(()=>(u("header",{class:"subtitleClass",id:"subtitleId",renderBody:a=>{a.n(re,s)}}),a=>{a.n(oe,s)}),{multiple:!0,...n,header:void 0}),e,t,"0",[["input","handleInput",!1]]),c(J,m(()=>{for(const a of G(i.files))u("card",{a11yCancelUploadText:"Cancel upload",deleteText:"Delete",file:a})}),e,t,"3",[["delete","handleDelete",!1],["cancel","handleDelete",!1]])},{t:F},V);g.Component=C(V,g._);const de=`import type { FileInputEvent } from "../component-browser";
class {
    declare state: {
        files: File[];
    };

    onCreate() {
        this.state = {
            files: [],
        };
    }

    handleInput({ files }: FileInputEvent) {
        this.state.files = this.state.files.concat(Array.from(files));
    }

    handleDelete(index: number) {
        this.state.files = [
            ...this.state.files.slice(0, index),
            ...this.state.files.slice(index + 1),
        ];
    }
}
<ebay-file-input multiple on-input("handleInput") ...input>
    <@header class="subtitleClass" id="subtitleId">
        <p>Multiple files</p>
    </@header>
    <span>Browse files</span>
</ebay-file-input>

<ebay-file-preview-card-group
    on-delete("handleDelete")
    on-cancel("handleDelete")
>
    <for|file| of=state.files>
        <@card
            a11yCancelUploadText="Cancel upload"
            deleteText="Delete"
            file=file
        />
    </for>
</ebay-file-preview-card-group>
`,M="PTMhmrYl",b=_(M);async function pe(){return await new Promise(n=>setTimeout(n,Math.random()*5e3)),`https://fakeurl.com/${Math.random().toString(36).substring(7)}`}const ce=r("p",null,1).t("Multiple files"),ue=r("span",null,1).t("Browse files");k.r(M,()=>b);const K={onCreate(){this.state={files:[]}},handleInput({files:n}){const e=Array.from(n);this.state.files=this.state.files.concat(e.map(t=>[t,void 0]));for(const t of e)pe().then(s=>{const i=this.state.files.findIndex(([f])=>f===t);this.state.files=[...this.state.files.slice(0,i),[t,s],...this.state.files.slice(i+1)]})},handleDelete(n){this.state.files=[...this.state.files.slice(0,n),...this.state.files.slice(n+1)]}};b._=v(function(n,e,t,s,i,f){c(l,m(()=>(u("header",{class:"subtitleClass",id:"subtitleId",renderBody:a=>{a.n(ce,s)}}),a=>{a.n(ue,s)}),{multiple:!0,...n,header:void 0}),e,t,"0",[["input","handleInput",!1]]),c(J,m(()=>{for(const[a,I]of G(i.files))u("card",{a11yCancelUploadText:"Cancel upload",deleteText:"Delete",file:a,status:I?void 0:"uploading"})}),e,t,"3",[["delete","handleDelete",!1],["cancel","handleDelete",!1]])},{t:M},K);b.Component=C(K,b._);const fe=`import type { FileInputEvent } from "../component-browser";
static async function mockFetch() {
    await new Promise((resolve) => setTimeout(resolve, Math.random() * 5000));
    return \`https://fakeurl.com/\${Math.random().toString(36).substring(7)}\`;
}
class {
    declare state: {
        files: [File, string | undefined][];
    };

    onCreate() {
        this.state = {
            files: [],
        };
    }

    handleInput({ files }: FileInputEvent) {
        const fileList = Array.from(files);
        this.state.files = this.state.files.concat(
            fileList.map((file) => [file, undefined]),
        );
        for (const file of fileList) {
            mockFetch().then((url) => {
                const index = this.state.files.findIndex(([f]) => f === file);
                this.state.files = [
                    ...this.state.files.slice(0, index),
                    [file, url],
                    ...this.state.files.slice(index + 1),
                ];
            });
        }
    }

    handleDelete(index: number) {
        this.state.files = [
            ...this.state.files.slice(0, index),
            ...this.state.files.slice(index + 1),
        ];
    }
}
<ebay-file-input multiple on-input("handleInput") ...input>
    <@header class="subtitleClass" id="subtitleId">
        <p>Multiple files</p>
    </@header>
    <span>Browse files</span>
</ebay-file-input>

<ebay-file-preview-card-group
    on-delete("handleDelete")
    on-cancel("handleDelete")
>
    <for|[file, url]| of=state.files>
        <@card
            a11yCancelUploadText="Cancel upload"
            deleteText="Delete"
            file=file
            status=(url ? undefined : "uploading")
        />
    </for>
</ebay-file-preview-card-group>
`,et={title:"form input/ebay-file-input",component:l,parameters:{docs:{description:{component:te}}},argTypes:{multiple:{type:"boolean",control:{type:"boolean"},description:"Whether multiple files can be uploaded"},renderBody:{description:"CTA render body"},subheader:{name:"@subheader",table:{category:"@attribute tags"}},header:{name:"@header",table:{category:"@attribute tags"}},onInput:{action:"on-input",description:"Triggered when the file(s) are uploaded",table:{category:"Events",defaultValue:{summary:"{ originalEvent, files }"}}}}},o=n=>({input:n,component:h});o.args={};o.parameters={docs:{description:{story:"In this story you can trigger the native file input picker only. Uploading files will have no effect."},source:{code:le}}};const d=n=>({input:n,component:g});d.args={};d.parameters={docs:{description:{story:" In this story you can trigger the native file input picker. Uploading files will render each ebay-file-preview-card component in preview status."},source:{code:de}}};const p=n=>({input:n,component:b});p.args={};p.parameters={docs:{description:{story:"In this story you can trigger the native file input picker. Uploading files will render each ebay-file-preview-card component in uploading status."},source:{code:fe}}};var L,A,P;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
  input: args,
  component: DefaultTemplate
})`,...(P=(A=o.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var O,Y,H;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  input: args,
  component: WithPreviewCardsTemplate
})`,...(H=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:H.source}}};var j,q,z;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
  input: args,
  component: WithMockUploadsTemplate
})`,...(z=(q=p.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const tt=["Default","WithPreviewCards","WithMockUploads"];export{o as Default,p as WithMockUploads,d as WithPreviewCards,tt as __namedExportsOrder,et as default};
