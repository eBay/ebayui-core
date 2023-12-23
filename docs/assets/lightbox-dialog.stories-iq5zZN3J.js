import{b as q,a as ee}from"./utils-NX-dnf4r.js";import{t as x,r as w,b as _,d as k}from"./registry-EgEQwbXk.js";import{_ as oe}from"./dynamic-tag-7vXwaVzE.js";import{_ as te}from"./repeatable-jmdwKenu.js";import{_ as c}from"./self-iterator-6yU_KG2T.js";import{_ as l}from"./v-element-wxdcHeY-.js";import{_ as v}from"./index-dah-yxIQ.js";import{_ as i}from"./render-tag-_0PNNh6Y.js";import{_ as D}from"./index-pxHqJ2TM.js";import{_ as ne}from"./index-hCq3-YCB.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";import"./index-_H3P31N9.js";/* empty css                    */import"./index-YaSSGaP-.js";import"./index-eucXA0ea.js";/* empty css             */import"./index-VGoHc-V3.js";import"./preserve-attrs-lolIpBRv.js";import"./index-ERL0bCNR.js";import"./index--8xUDD5P.js";/* empty css               */import"./index-Xvf_JYRr.js";import"./index-yF1zloRw.js";import"./index-oRGh3q8t.js";const ae=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,T="irfzUYXY",u=x(T),ie=u,le=l("p",null,"2",null,1,0).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),re=l("p",null,"3",null,1,0).e("a",{href:"http://www.ebay.com"},"4",null,1,0).t("www.ebay.com");w.r(T,()=>u);const G={onInput(e){this.state={open:e.open}},onCreate(e){this.state={open:e.open||!1}},openDialog(){this.state.open=!0},closeDialog(e){this.state.open=!1,this.emit("close",e)}};u._=_(function(e,a,n,t,s,C){let o=null;e.header&&e.header.renderBody&&(o=te(o,{...e.header,renderBody:r=>{oe(r,e.header.renderBody,null,null,null,null,n,"1")},[Symbol.iterator]:c})),i(v,{a11yCloseText:"Close Dialog",open:s.open,...e,header:o,renderBody:r=>{r.n(le,t),r.n(re,t)}},a,n,"0",[["close","closeDialog",!1],["open","emit",!1,["open"]],["expanded","emit",!1,["expanded"]],["collapsed","emit",!1,["collapsed"]]]),i(D,{renderBody:r=>{r.t("Open Dialog",t)}},a,n,"5",[["click","openDialog",!1]])},{t:T},G);u.Component=k(G,u._);const N=`export interface Input {
    header: {
        renderBody: Marko.Body;
    }
}

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
    ...input
>
    <if(input.header && input.header.renderBody)>
        <@header ...input.header>
            <\${input.header.renderBody}/>
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
`,E="O4P+3SFt",m=x(E),se=l("p",null,"2",null,1,0).e("a",{href:"http://www.ebay.com"},"3",null,1,0).t("www.ebay.com");w.r(E,()=>m);const Q={onInput(e){this.state={open:e.open}},onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(e){this.state.open=!1,this.emit("close",e)}};m._=_(function(e,a,n,t,s,C){i(v,{a11yCloseText:"Close Dialog",open:s.open,...e,header:{renderBody:o=>{o.t("Heading",t)},[Symbol.iterator]:c},renderBody:o=>{for(let r=100/1,B=0;B<=r;B++){const Z=`[${0+B*1}]`;o.be("p",null,"1"+Z,t,null,0),o.t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",t),o.ee()}o.n(se,t)}},a,n,"0",[["close","closeDialog",!1],["open","emit",!1,["open"]],["expanded","emit",!1,["expanded"]],["collapsed","emit",!1,["collapsed"]]]),i(D,{renderBody:o=>{o.t("Open Dialog",t)}},a,n,"4",[["click","openDialog",!1]])},{t:E},Q);m.Component=k(Q,m._);const de=`class {
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
`,S="nbWpTY5/",g=x(S),pe=l("p",null,"2",null,1,0).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),ce=l("p",null,"3",null,1,0).e("a",{href:"http://www.ebay.com"},"4",null,1,0).t("www.ebay.com");w.r(S,()=>g);const X={onInput(e){this.state={open:e.open}},onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(e){this.state.open=!1,this.emit("close",e)}};g._=_(function(e,a,n,t,s,C){i(v,{a11yCloseText:"Close Dialog",open:s.open,...e,header:{renderBody:o=>{o.t("Heading",t)},[Symbol.iterator]:c},prevButton:{a11yText:"Go back",renderBody:o=>{i(ne,{},o,n,"1")},[Symbol.iterator]:c},renderBody:o=>{o.n(pe,t),o.n(ce,t)}},a,n,"0",[["close","closeDialog",!1],["open","emit",!1,["open"]],["prevButtonClick","emit",!1,["prev-button-click"]],["expanded","emit",!1,["expanded"]],["collapsed","emit",!1,["collapsed"]]]),i(D,{renderBody:o=>{o.t("Open Dialog",t)}},a,n,"5",[["click","openDialog",!1]])},{t:S},X);g.Component=k(X,g._);const ue=`<ebay-lightbox-dialog
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
`,$="41uCHkNw",h=x($),me=l("p",null,"1",null,1,0).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),ge=l("p",null,"2",null,1,0).e("a",{href:"http://www.ebay.com"},"3",null,1,0).t("www.ebay.com"),he=l("button",{class:"btn"},"4",null,1,1).t("Button 1"),be=l("button",{class:"btn"},"5",null,1,1).t("Button 2");w.r($,()=>h);const J={onInput(e){this.state={open:e.open}},onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(e){this.state.open=!1,this.emit("close",e)}};h._=_(function(e,a,n,t,s,C){i(v,{a11yCloseText:"Close Dialog",open:s.open,...e,header:{renderBody:o=>{o.t("Heading",t)},[Symbol.iterator]:c},footer:{renderBody:o=>{o.n(he,t),o.n(be,t)},[Symbol.iterator]:c},renderBody:o=>{o.n(me,t),o.n(ge,t)}},a,n,"0",[["close","closeDialog",!1],["open","emit",!1,["open"]],["expanded","emit",!1,["expanded"]],["collapsed","emit",!1,["collapsed"]]]),i(D,{renderBody:o=>{o.t("Open Dialog",t)}},a,n,"6",[["click","openDialog",!1]])},{t:$},J);h.Component=k(J,h._);const ye=`<ebay-lightbox-dialog
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
`,K=e=>({input:ee(e)}),je={title:"dialogs/ebay-lightbox-dialog",component:ie,parameters:{docs:{description:{component:ae}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is open."},focus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog opens (defaults to close button)."},closeFocus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened"},a11yCloseText:{control:{type:"text"},description:"A11y text for close button and mask."},header:{name:"@header",type:{required:!0},control:{type:"object"},table:{category:"@attribute tags"},description:"The header text for the content of the dialog. This is a required attribute."},footer:{name:"@footer",control:{type:"object"},table:{category:"@attribute tags"}},prevButton:{name:"@prevButton",control:{type:"object"},table:{category:"@attribute tags"},description:"Previous button, shows up before header. Usually a chevron-left icon."},bannerImgSrc:{control:{type:"text"},description:"Image source for the expressive variant"},size:{options:["regular","wide","narrow"],description:"The size of the dialog",table:{defaultValue:{summary:"regular"}},type:{category:"Options"}},bannerImgPosition:{control:{type:"text"},description:"Position of the image within the given bounds using the CSS `background-position` property. Options include [keywords, lengths, and edge distances](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)"},a11yMinimizeText:{control:{type:"text"},description:"A11y text for draggable handle when dialog is maximized and clicking handle will minimize the dialog (small screen only)."},a11yMaximizeText:{control:{type:"text"},description:"A11y text for draggable handle when dialog is minimized and clicking handle will maximize the dialog (small screen only)."},onOpen:{action:"on-open",description:"Triggered on dialog opened",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered on dialog closed.",table:{category:"Events",defaultValue:{summary:""}}},onPrevButtonClick:{action:"on-prevButtonClick",description:"Triggered when previous button is clicked",table:{category:"Events",defaultValue:{summary:""}}},onExpanded:{action:"on-expanded",description:"dialog expanded to full page height. Event is triggerd on drag up of handle (touch only), clicks, or when user scrolls in content when dialog is not expanded (small screens)",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onCollapsed:{action:"on-collapsed",description:"dialog collapsed back to max 50%. Event is triggerd on drags down of handle (touch only) or clicks when dialog is expanded (small screens only)",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}}}},d=K.bind({});d.args={header:{renderBody:"Heading Text"},footer:{renderBody:""},a11yCloseText:"Close dialog",a11yMinimizeText:"Minimize Dialog",a11yMaximizeText:"Maximize Dialog"};d.parameters={docs:{source:{code:N}}};const b=q(m,de),p=K.bind({});p.args={header:{renderBody:"Heading Text"},footer:{renderBody:""},bannerImgSrc:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/mountain.jpeg",bannerImgPosition:"top",a11yMinimizeText:"Minimize Dialog",a11yMaximizeText:"Maximize Dialog"};p.parameters={docs:{source:{code:N}}};const y=q(g,ue),f=q(h,ye);var z,I,O;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(O=(I=d.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var W,M,P;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:"buildExtensionTemplate(ScrollingTemplate, ScrollingTemplateCode)",...(P=(M=b.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var U,H,F;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(F=(H=p.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var L,A,V;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:"buildExtensionTemplate(WithPrevButtonTemplate, WithPrevButtonCode)",...(V=(A=y.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var j,R,Y;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:"buildExtensionTemplate(WithFooterTemplate, WithFooterCode)",...(Y=(R=f.parameters)==null?void 0:R.docs)==null?void 0:Y.source}}};const Re=["Default","Scrolling","Expressive","WithPrevButton","WithFooter"];export{d as Default,p as Expressive,b as Scrolling,f as WithFooter,y as WithPrevButton,Re as __namedExportsOrder,je as default};
