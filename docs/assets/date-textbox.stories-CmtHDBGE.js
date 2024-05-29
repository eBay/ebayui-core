import{b as E,a as se}from"./utils-DWCsNc5l.js";import{t as ie}from"./index-CCz6reEH.js";import{t as v,r as _,b as T,d as C}from"./registry-DcejNBCz.js";import{d as M,p as de,_ as ce,f as pe}from"./index-ryoJC2Gf.js";import{C as F}from"./index-BEe6r6nY.js";import{_ as r}from"./render-tag-BBOJ9dEX.js";import{_ as me}from"./index-DH1gldWf.js";import{i as w,a as g}from"./attr-tag-DphMQldM.js";import{_ as ue}from"./index-B0OhA0dc.js";import{s as be}from"./index-D7B88Psz.js";import{_ as he}from"./empty-component-BCB5DEsP.js";import{_ as fe}from"./index-Ds0knl6D.js";import{_ as ye}from"./const-element-Bq6J7aqh.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-C19Q3kub.js";import"./index-CMkz4cmR.js";/* empty css             */import"./index-Bm7UghsY.js";/* empty css                    *//* empty css               *//* empty css             */import"./dynamic-tag-CH7Ufq3Q.js";import"./index-BIEPBgsb.js";import"./index-blmbJU0z.js";import"./index-DEnJBEnO.js";import"./index-D7GlLQHj.js";import"./index--35j0Bzx.js";import"./index-AW2S7xMy.js";import"./index-D4BJokV4.js";import"./index-BfyIUMHf.js";const xe=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-date-textbox
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.2.0
    </span>
</h1>

Date textbox component, used as an alternative method for entering dates instead of \`<input type="date">\`.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/dialogs-ebay-date-textbox)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/dialogs-ebay-date-textbox)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-date-textbox/examples)
`,ge=600;class Se extends Marko.Component{onCreate(){this.state={numMonths:1,firstSelected:null,secondSelected:null,popover:!1},typeof document<"u"&&this.calculateNumMonths()}onMount(){this.expander=new be(this.el,{hostSelector:".ebay-date-textbox--main > .icon-btn",contentSelector:".date-textbox__popover",expandOnClick:!0,autoCollapse:!0})}onDestroy(){var e;(e=this.expander)==null||e.destroy()}onInput(e){e.value!==void 0&&(this.state.firstSelected=M(e.value)),e.rangeEnd&&(this.state.secondSelected=M(e.rangeEnd)),e.range||(this.state.secondSelected=null)}calculateNumMonths(){this.state.numMonths=document.documentElement.clientWidth<ge?1:2}handleInputChange(e,{value:a}){let n;if(this.input.localizeFormat)n=de(a,this.input.locale);else{const t=new Date(a);n=isNaN(t.getTime())?null:M(t)}if(n===null){this.emit("invalid-date");return}e===0?this.state.firstSelected=n:this.state.secondSelected=n,this.emitSelectedChange()}openPopover(){this.state.popover=!0}closePopover(){this.state.popover=!1}onPopoverSelect({iso:e}){const{firstSelected:a,secondSelected:n}=this.state;if(this.state.firstSelected=e,this.input.range){const t=a||n;a&&n?this.state.secondSelected=null:t&&(t<e?(this.state.firstSelected=t,this.state.secondSelected=e):this.state.secondSelected=t,this.input.collapseOnSelect&&(this.expander.expanded=!1))}else this.input.collapseOnSelect&&(this.expander.expanded=!1);this.emitSelectedChange()}emitSelectedChange(){this.emit("change",this.input.range?{rangeStart:this.state.firstSelected,rangeEnd:this.state.secondSelected}:{selected:this.state.firstSelected})}}const D="mSPRAI2e",d=v(D),k=d;_.r(D,()=>d);const H=Se;d._=T(function(o,e,a,n,t,I){const{a11yOpenPopoverText:l="open calendar",range:m,inputPlaceholderText:u="YYYY-MM-DD",floatingLabel:b,disabled:R,textbox:h,localizeFormat:Z,...ee}=o,[te,ae]=Array.isArray(u)?u:[u,u],[ne,oe]=Array.isArray(h)?h:[h,h],[re,le]=Array.isArray(b)?b:[b,b],$=s=>Z?s?pe(s,o.locale):"":s||"";e.be("span",{class:"date-textbox"},"0",n,null,1,{"onexpander-expand":a.d("expander-expand","openPopover",!1),"onexpander-collapse":a.d("expander-collapse","closePopover",!1)}),m&&r(F,{placeholder:te,floatingLabel:re,disabled:R,value:$(t.firstSelected),...ne},e,a,"1",[["blur","handleInputChange",!1,[0]]]),r(F,w(()=>{g("postfixIcon",{renderBody:s=>{r(me,{},s,a,"3")}})},{class:"ebay-date-textbox--main",floatingLabel:le,placeholder:ae,buttonAriaLabel:l,value:$(m?t.secondSelected:t.firstSelected),disabled:R,...oe,postfixIcon:void 0}),e,a,"2",[["blur","handleInputChange",!1,[m?1:0]]]),e.be("div",{hidden:!t.popover,class:"date-textbox__popover"},"@popover",n,null,0),t.popover&&r(ue,{to:typeof window=="object"&&window,__events:["on","resize"]},e,a,"4",[["resize","calculateNumMonths",!1]]),r(ce,{...ee,range:m,interactive:!0,navigable:!0,numMonths:t.numMonths,selected:t.firstSelected&&t.secondSelected?[t.firstSelected,t.secondSelected]:t.firstSelected||t.secondSelected||void 0},e,a,"5",[["select","onPopoverSelect",!1]]),e.ee(),e.ee()},{t:D},H);d.Component=C(H,d._);const Y="l2ccq64P",S=v(Y);_.r(Y,()=>he);const Q={};S._=T(function(o,e,a,n,t,I){r(k,w(()=>{g("textbox",{placeholder:"JJJJ/MM/DD",floatingLabel:"Begin"}),g("textbox",{placeholder:"JJJJ/MM/DD",floatingLabel:"Einde"})},{disableBefore:new Date,range:!0,locale:"af",getA11yShowMonthText:l=>`Gaan na ${l}`,a11ySelectedText:"Geselekteerde",a11yRangeStartText:"Reeks begin",a11yInRangeText:"Binne bereik",a11yRangeEndText:"Reeks einde",localizeFormat:!0,...o,textbox:void 0}),e,a,"0",[["change","emit",!1,["change"]]])},{t:Y,s:!0},Q);S.Component=C(Q,S._);const ve=`<ebay-date-textbox
    disableBefore=new Date()
    range
    locale="af"
    getA11yShowMonthText=((monthName) => \`Gaan na \${monthName}\`)
    a11ySelectedText="Geselekteerde"
    a11yRangeStartText="Reeks begin"
    a11yInRangeText="Binne bereik"
    a11yRangeEndText="Reeks einde"
    localizeFormat
    on-change("emit", "change")
    ...input
>
    <@textbox placeholder="JJJJ/MM/DD" floating-label="Begin" />
    <@textbox placeholder="JJJJ/MM/DD" floating-label="Einde" />
</ebay-date-textbox>
`,V="w1FRpQRA",c=v(V);_.r(V,()=>c);const K={onCreate(){this.state={value:null}},handleChange({selected:o}){this.state.value=o},clear(){this.state.value=null}};c._=T(function(o,e,a,n,t,I){r(k,{value:t.value,...o},e,a,"0",[["change","handleChange",!1]]),r(fe,{renderBody:l=>{l.t("Clear",n)}},e,a,"1",[["click","clear",!1]])},{t:V},K);c.Component=C(K,c._);const _e=`class {
    onCreate() {
        this.state = {
            value: null,
        };
    }

    handleChange({ selected }) {
        this.state.value = selected;
    }

    clear() {
        this.state.value = null;
    }
}

<ebay-date-textbox value=state.value onChange("handleChange") ...input/>

<ebay-button onClick("clear")>
    Clear
</ebay-button>
`,L="la6MFVpi",p=v(L),Te=ye("strong",null,1).t("YYYY-MM-DD");_.r(L,()=>p);const X={onCreate(){this.state={invalid:!1}},onError(){this.state.invalid=!0},onChange(){this.state.invalid=!1}};p._=T(function(o,e,a,n,t,I){e.be("div",{class:"field"},"0",n,null,1),e.be("label",{for:a.elId("textbox")},"1",n,null,0),e.t("Enter Date",n),e.ee(),e.be("div",null,"2",n,null,0),r(k,w(()=>{g("textbox",{id:a.elId("textbox"),invalid:t.invalid,ariaLabelledby:a.elId("error-label")})}),e,a,"3",[["invalid-date","onError",!1],["change","onChange",!1]]),e.ee(),t.invalid&&(e.be("div",{class:"field__description field__description--attention",id:a.elId("error-label")},"4",n,null,1),e.t("Use ",n),e.n(Te,n),e.t(" format",n),e.ee()),e.ee()},{t:L},X);p.Component=C(X,p._);const Ce=`class {
    onCreate() {
        this.state = {
            invalid: false,
        };
    }

    onError() {
        this.state.invalid = true;
    }

    onChange() {
        this.state.invalid = false;
    }
}

<div class="field">
    <label for:scoped="textbox">
        Enter Date
    </label>
    <div>
        <ebay-date-textbox onInvalid-date("onError") on-change("onChange")>
            <@textbox
                id:scoped="textbox"
                invalid=state.invalid
                aria-labelledby:scoped="error-label"
            />
        </ebay-date-textbox>
    </div>
    <if(state.invalid)>
        <div
            class="field__description field__description--attention"
            id:scoped="error-label"
        >
            Use <strong>YYYY-MM-DD</strong> format
        </div>
    </if>
</div>
`,ke=o=>({input:se(o)}),nt={title:"form input/ebay-date-textbox",component:k,parameters:{docs:{description:{component:xe}}},argTypes:{value:{type:"date",control:{type:"date"},description:"Selected date",table:{defaultValue:{summary:"undefined"}}},range:{type:"boolean",control:{type:"boolean"},description:"True if selecting a range, false if a single value",table:{defaultValue:{summary:"false"}}},todayISO:{type:"date",control:{type:"date"},description:"The current date in ISO format",table:{defaultValue:{summary:"Today's date"}}},floatingLabel:{type:"text|array",control:{type:"object"},description:'If set then shows this text as the floating label. If separate floating labels are required for a range display, use an array of two strings (i. e. `["Start", "End"]`)..'},rangeEnd:{type:"date",control:{type:"date"},description:"If range is true, the end of the selected range",table:{defaultValue:{summary:"undefined"}}},locale:{type:"text",control:{type:"text"},description:"Locale of the date picker",table:{defaultValue:{summary:"navigator.language || 'en-US'"}}},disabled:{type:"boolean",control:{type:"boolean"},description:"If true, the textbox is disabled and popover cannot be opened.",table:{defaultValue:{summary:"false"}}},disableBefore:{type:"date",control:{type:"date"},description:"First date that may be selected. Should be an ISO string, but also accepts a timestamp or `Date` object",table:{defaultValue:{summary:"undefined"}}},disableAfter:{type:"date",control:{type:"date"},description:"Last date that may be selected. Should be an ISO string, but also accepts a timestamp or `Date` object",table:{defaultValue:{summary:"undefined"}}},disableWeekdays:{type:"array",control:{type:"array"},description:"List of weekdays that are disabled. Must be an array of numbers, where Sunday is `0` and Saturday is `6`",table:{defaultValue:{summary:"undefined"}}},disableList:{type:"array",control:{type:"array"},description:"List of specific days that are disabled. Should be a list of ISO strings, but also accepts timestamps or `Date` objects",table:{defaultValue:{summary:"undefined"}}},collapseOnSelect:{type:"boolean",control:{type:"boolean"},description:"Whether the calendar should collapse after a date is selected",table:{defaultValue:{summary:"false"}}},getA11yShowMonthText:{type:"callback",control:{type:"callback"},description:"Function used to get the text for showing previous and next months",table:{defaultValue:{summary:"(monthName) => `Show ${monthName}`"}}},a11ySelectedText:{type:"text",control:{type:"text"},description:"Text to be read by screen readers when a date is selected",table:{defaultValue:{summary:"selected"}}},a11yRangeStartText:{type:"text",control:{type:"text"},description:"Text to be read by screen readers when a date is the start of a range",table:{defaultValue:{summary:"start of range"}}},a11yInRangeText:{type:"text",control:{type:"text"},description:"Text to be read by screen readers when a date is in a range",table:{defaultValue:{summary:"in range"}}},a11yRangeEndText:{type:"text",control:{type:"text"},description:"Text to be read by screen readers when a date is the end of a range",table:{defaultValue:{summary:"end of range"}}},a11ySeparator:{type:"text",control:{type:"text"},description:"Text to be read by screen readers to separate properties",table:{defaultValue:{summary:" - "}}},a11yOpenPopoverText:{type:"text",control:{type:"text"},description:"A11y label for the button that opens the calendar popover",table:{defaultValue:{summary:"open calendar"}}},inputPlaceholderText:{type:"text|array",control:{type:"object"},description:'Text for the input placeholder. Should indicate that users need to enter dates in ISO format. If separate placeholders are required for a range display, use an array of two strings (i. e. `["Start (MM/DD/YYYY)", "End (MM/DD/YYYY)"]`).',table:{defaultValue:{summary:'"MM/DD/YYYY"'}}},localizeFormat:{type:"boolean",control:{type:"boolean"},description:"_**Deprecated— will be default after next major release**_ Localize the date format",table:{defaultValue:{summary:"false"}}},textbox:{name:"@textbox",description:"Proxy for textbox attributes— includes all attributes for `<ebay-textbox>`",table:{category:"@attribute tags"}},onChange:{action:"on-change",description:"Triggered when the selection changes",table:{category:"Events",defaultValue:{summary:"{ selected } | { rangeStart, rangeEnd }"}}},"onInvalid-date":{action:"on-invalid-date",description:"Triggered when the user manually types an invalid date",table:{category:"Events"}}}},i=ke.bind({});i.parameters={docs:{source:{code:ie("ebay-date-textbox",{})}}};const f=E(S,ve),y=E(c,_e),x=E(p,Ce);var A,J,O;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(O=(J=i.parameters)==null?void 0:J.docs)==null?void 0:O.source}}};var P,z,B;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:"buildExtensionTemplate(LocalizedTemplate, LocalizedTemplateCode)",...(B=(z=f.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var N,W,j;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:"buildExtensionTemplate(WithClearTemplate, WithClearTemplateCode)",...(j=(W=y.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var G,U,q;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:"buildExtensionTemplate(InField, InFieldCode)",...(q=(U=x.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};const ot=["Default","Localized","WithClear","InFieldExample"];export{i as Default,x as InFieldExample,f as Localized,y as WithClear,ot as __namedExportsOrder,nt as default};
