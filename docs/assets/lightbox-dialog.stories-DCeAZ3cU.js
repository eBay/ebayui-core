import{b as T,a as te}from"./utils-DWCsNc5l.js";import{t as w,r as v,b as k,d as D}from"./registry-DoALHDDx.js";import{_ as ne}from"./dynamic-tag-B1GLaPEW.js";import{i as _,a as c}from"./attr-tag-DphMQldM.js";import{_ as l}from"./const-element-_KqHYBBN.js";import{_ as C}from"./index-g_K2bcmL.js";import{_ as i}from"./render-tag-BBOJ9dEX.js";import{_ as B}from"./index-DwzlMs5I.js";import{_ as ae}from"./index-Dk-nZVya.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-C36gxz_G.js";/* empty css                    */import"./index-Cwd2w34Z.js";import"./index-mP6JM4Am.js";/* empty css             */import"./index-Dn2VikhO.js";import"./index--35j0Bzx.js";import"./index-blmbJU0z.js";/* empty css               */import"./index-C73Z_Vi_.js";import"./index-BpE_pQA_.js";import"./index-BgASIJEW.js";const ie=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-lightbox-dialog
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.0.0
    </span>
</h1>

## Notes / FAQ

-   \`@header\` is _required_, and styles will break if you do not include it

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/dialogs-ebay-lightbox-dialog)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/dialogs-ebay-lightbox-dialog)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-lightbox-dialog/examples)
`,E="irfzUYXY",m=w(E),le=m,re=l("p",null,1).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),se=l("p",null,1).e("a",{href:"http://www.ebay.com"},1).t("www.ebay.com");v.r(E,()=>m);const Q={onInput(o){this.state={open:o.open}},onCreate(o){this.state={open:o.open||!1}},openDialog(){this.state.open=!0},closeDialog(o){this.state.open=!1,this.emit("close",o)}};m._=k(function(o,a,n,t,r,q){const{header:e,open:I,...u}=o;i(C,_(()=>(e&&e.renderBody&&c("header",{...e,renderBody:s=>{ne(s,e.renderBody,null,null,null,null,n,"1")}}),s=>{s.n(re,t),s.n(se,t)}),{a11yCloseText:"Close Dialog",open:r.open,...u,header:void 0}),a,n,"0",[["close","closeDialog",!1],["open","emit",!1,["open"]],["expanded","emit",!1,["expanded"]],["collapsed","emit",!1,["collapsed"]]]),i(B,{renderBody:s=>{s.t("Open Dialog",t)}},a,n,"4",[["click","openDialog",!1]])},{t:E},Q);m.Component=D(Q,m._);const X=`export interface Input {
    header: {
        renderBody: Marko.Body;
    }
}

$ const {
    header,
    open,
    ...dialogBaseInput
} = input;

class {
    onInput(input: Input) {
        this.state = { open: input.open };
    }
    onCreate(input: Input) {
        this.state = { open: input.open || false };
    }
    openDialog() {
        this.state.open = true;
    }
    closeDialog(e) {
        this.state.open = false;
        this.emit("close", e);
    }
}

<ebay-lightbox-dialog
    a11yCloseText="Close Dialog"
    open=state.open
    on-close("closeDialog")
    on-open("emit", "open")
    on-expanded("emit", "expanded")
    on-collapsed("emit", "collapsed")
    ...dialogBaseInput
>
    <if(header && header.renderBody)>
        <@header ...header>
            <\${header.renderBody}/>
        </@header>
    </if>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
        <a href="http://www.ebay.com">
            www.ebay.com
        </a>
    </p>
</ebay-lightbox-dialog>

<ebay-button on-click("openDialog")>
    Open Dialog
</ebay-button>
`,$="O4P+3SFt",g=w($),de=l("p",null,1).e("a",{href:"http://www.ebay.com"},1).t("www.ebay.com");v.r($,()=>g);const J={onInput(o){this.state={open:o.open}},onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(o){this.state.open=!1,this.emit("close",o)}};g._=k(function(o,a,n,t,r,q){i(C,_(()=>(c("header",{renderBody:e=>{e.t("Heading",t)}}),e=>{for(let I=100/1,u=0;u<=I;u++){const oe=`[${0+u*1}]`;e.be("p",null,"1"+oe,t,null,0),e.t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",t),e.ee()}e.n(de,t)}),{a11yCloseText:"Close Dialog",open:r.open,...o,header:void 0}),a,n,"0",[["close","closeDialog",!1],["open","emit",!1,["open"]],["expanded","emit",!1,["expanded"]],["collapsed","emit",!1,["collapsed"]]]),i(B,{renderBody:e=>{e.t("Open Dialog",t)}},a,n,"3",[["click","openDialog",!1]])},{t:$},J);g.Component=D(J,g._);const pe=`class {
    onInput(input) {
        this.state = { open: input.open };
    }
    onCreate() {
        this.state = { open: false };
    }
    openDialog() {
        this.state.open = true;
    }
    closeDialog(e) {
        this.state.open = false;
        this.emit("close", e);
    }
}

<ebay-lightbox-dialog
    a11yCloseText="Close Dialog"
    open=state.open
    on-close("closeDialog")
    on-open("emit", "open")
    on-expanded("emit", "expanded")
    on-collapsed("emit", "collapsed")
    ...input
>
    <@header>Heading</@header>
    <for|i| from=0 to=100>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </for>
    <p>
        <a href="http://www.ebay.com">
            www.ebay.com
        </a>
    </p>
</ebay-lightbox-dialog>

<ebay-button on-click("openDialog")>
    Open Dialog
</ebay-button>
`,S="nbWpTY5/",h=w(S),ce=l("p",null,1).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),ue=l("p",null,1).e("a",{href:"http://www.ebay.com"},1).t("www.ebay.com");v.r(S,()=>h);const K={onInput(o){this.state={open:o.open}},onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(o){this.state.open=!1,this.emit("close",o)}};h._=k(function(o,a,n,t,r,q){i(C,_(()=>(c("header",{renderBody:e=>{e.t("Heading",t)}}),c("prevButton",{a11yText:"Go back",renderBody:e=>{i(ae,{},e,n,"1")}}),e=>{e.n(ce,t),e.n(ue,t)}),{a11yCloseText:"Close Dialog",open:r.open,...o,header:void 0,prevButton:void 0}),a,n,"0",[["close","closeDialog",!1],["open","emit",!1,["open"]],["prevButtonClick","emit",!1,["prev-button-click"]],["expanded","emit",!1,["expanded"]],["collapsed","emit",!1,["collapsed"]]]),i(B,{renderBody:e=>{e.t("Open Dialog",t)}},a,n,"4",[["click","openDialog",!1]])},{t:S},K);h.Component=D(K,h._);const me=`<ebay-lightbox-dialog
    a11y-close-text="Close Dialog"
    open=state.open
    on-close("closeDialog")
    on-open("emit", "open")
    on-prevButtonClick("emit", "prev-button-click")
    on-expanded("emit", "expanded")
    on-collapsed("emit", "collapsed")
    ...input
>
    <@header>Heading</@header>
    <@prev-button a11y-text="Go back">
        <ebay-chevron-left-16-icon/>
    </@prev-button>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
        <a href="http://www.ebay.com">
            www.ebay.com
        </a>
    </p>
</ebay-lightbox-dialog>
<ebay-button on-click("openDialog")>
    Open Dialog
</ebay-button>
class {
    onInput(input) {
        this.state = { open: input.open };
    }
    onCreate() {
        this.state = { open: false };
    }
    openDialog() {
        this.state.open = true;
    }
    closeDialog(e) {
        this.state.open = false;
        this.emit("close", e);
    }
}
`,z="41uCHkNw",b=w(z),ge=l("button",{class:"btn"},1).t("Button 1"),he=l("button",{class:"btn"},1).t("Button 2"),be=l("p",null,1).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),ye=l("p",null,1).e("a",{href:"http://www.ebay.com"},1).t("www.ebay.com");v.r(z,()=>b);const Z={onInput(o){this.state={open:o.open}},onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(o){this.state.open=!1,this.emit("close",o)}};b._=k(function(o,a,n,t,r,q){i(C,_(()=>(c("header",{renderBody:e=>{e.t("Heading",t)}}),c("footer",{renderBody:e=>{e.n(ge,t),e.n(he,t)}}),e=>{e.n(be,t),e.n(ye,t)}),{a11yCloseText:"Close Dialog",open:r.open,...o,header:void 0,footer:void 0}),a,n,"0",[["close","closeDialog",!1],["open","emit",!1,["open"]],["expanded","emit",!1,["expanded"]],["collapsed","emit",!1,["collapsed"]]]),i(B,{renderBody:e=>{e.t("Open Dialog",t)}},a,n,"5",[["click","openDialog",!1]])},{t:z},Z);b.Component=D(Z,b._);const fe=`<ebay-lightbox-dialog
    a11y-close-text="Close Dialog"
    open=state.open
    on-close("closeDialog")
    on-open("emit", "open")
    on-expanded("emit", "expanded")
    on-collapsed("emit", "collapsed")
    ...input
>
    <@header>Heading</@header>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
        <a href="http://www.ebay.com">
            www.ebay.com
        </a>
    </p>
    <@footer>
        <button class="btn">
            Button 1
        </button>
        <button class="btn">
            Button 2
        </button>
    </@footer>
</ebay-lightbox-dialog>
<ebay-button on-click("openDialog")>
    Open Dialog
</ebay-button>
class {
    onInput(input) {
        this.state = { open: input.open };
    }
    onCreate() {
        this.state = { open: false };
    }
    openDialog() {
        this.state.open = true;
    }
    closeDialog(e) {
        this.state.open = false;
        this.emit("close", e);
    }
}
`,ee=o=>({input:te(o)}),Ae={title:"dialogs/ebay-lightbox-dialog",component:le,parameters:{docs:{description:{component:ie}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is open."},focus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog opens (defaults to close button)."},closeFocus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened"},a11yCloseText:{control:{type:"text"},description:"A11y text for close button and mask."},header:{name:"@header",type:{required:!0},control:{type:"object"},table:{category:"@attribute tags"},description:"The header text for the content of the dialog. This is a required attribute."},footer:{name:"@footer",control:{type:"object"},table:{category:"@attribute tags"}},prevButton:{name:"@prevButton",control:{type:"object"},table:{category:"@attribute tags"},description:"Previous button, shows up before header. Usually a chevron-left icon."},bannerImgSrc:{control:{type:"text"},description:"Image source for the expressive variant"},size:{options:["regular","wide","narrow"],description:"The size of the dialog",table:{defaultValue:{summary:"regular"}},type:{category:"Options"}},bannerImgPosition:{control:{type:"text"},description:"Position of the image within the given bounds using the CSS `background-position` property. Options include [keywords, lengths, and edge distances](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)"},a11yMinimizeText:{control:{type:"text"},description:"A11y text for draggable handle when dialog is maximized and clicking handle will minimize the dialog (small screen only)."},a11yMaximizeText:{control:{type:"text"},description:"A11y text for draggable handle when dialog is minimized and clicking handle will maximize the dialog (small screen only)."},onOpen:{action:"on-open",description:"Triggered on dialog opened",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered on dialog closed.",table:{category:"Events",defaultValue:{summary:""}}},onPrevButtonClick:{action:"on-prevButtonClick",description:"Triggered when previous button is clicked",table:{category:"Events",defaultValue:{summary:""}}},onExpanded:{action:"on-expanded",description:"dialog expanded to full page height. Event is triggerd on drag up of handle (touch only), clicks, or when user scrolls in content when dialog is not expanded (small screens)",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onCollapsed:{action:"on-collapsed",description:"dialog collapsed back to max 50%. Event is triggerd on drags down of handle (touch only) or clicks when dialog is expanded (small screens only)",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}}}},d=ee.bind({});d.args={header:{renderBody:"Heading Text"},footer:{renderBody:""},a11yCloseText:"Close dialog",a11yMinimizeText:"Minimize Dialog",a11yMaximizeText:"Maximize Dialog"};d.parameters={docs:{source:{code:X}}};const y=T(g,pe),p=ee.bind({});p.args={header:{renderBody:"Heading Text"},footer:{renderBody:""},bannerImgSrc:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/mountain.jpeg",bannerImgPosition:"top",a11yMinimizeText:"Minimize Dialog",a11yMaximizeText:"Maximize Dialog"};p.parameters={docs:{source:{code:X}}};const f=T(h,me),x=T(b,fe);var O,W,M;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(M=(W=d.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var P,U,H;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:"buildExtensionTemplate(ScrollingTemplate, ScrollingTemplateCode)",...(H=(U=y.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var F,L,A;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(A=(L=p.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var V,j,R;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:"buildExtensionTemplate(WithPrevButtonTemplate, WithPrevButtonCode)",...(R=(j=f.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var Y,G,N;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:"buildExtensionTemplate(WithFooterTemplate, WithFooterCode)",...(N=(G=x.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};const Ve=["Default","Scrolling","Expressive","WithPrevButton","WithFooter"];export{d as Default,p as Expressive,y as Scrolling,x as WithFooter,f as WithPrevButton,Ve as __namedExportsOrder,Ae as default};
