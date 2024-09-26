import{b as C,a as ae}from"./utils-DWCsNc5l.js";import{t as ne}from"./index-CCz6reEH.js";import{t as v,r as _,b as T,c as k}from"./registry-CtNeIPU8.js";import{p as oe,g as re,a as le,f as se}from"./index-CD9SHNZJ.js";import{_ as Y}from"./index-CIkqInSL.js";import{_ as l}from"./render-tag-mtfFSHEK.js";import{_ as ie}from"./index-BpCcCPmX.js";import{i as I,a as g}from"./attr-tag-DphMQldM.js";import{_ as de}from"./index-BCNhIFfA.js";import{d as L,_ as ce}from"./index-PrczUELm.js";import{s as pe}from"./index-DXTRRJTV.js";import{_ as me}from"./empty-component-BCB5DEsP.js";import{_ as ue}from"./index-C4tnstVV.js";import{_ as be}from"./const-element-D4l_3TxL.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";/* empty css             */import"./index-htxwKVWG.js";/* empty css                    */import"./dynamic-tag-HMZVE1pc.js";import"./index-B6qYX52F.js";import"./index-DfnG13Oo.js";import"./index-CHlJc7fe.js";/* empty css               *//* empty css             */import"./index-BwvkvsZu.js";import"./index-CbT4wDAv.js";import"./of-fallback-C2gEBeKK.js";import"./index-D7GlLQHj.js";import"./index-CxthRfyu.js";import"./index-BL5tj0GS.js";import"./index-DW9U_Ppe.js";import"./index-DN2d98YU.js";const he=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,fe=600;class ye extends Marko.Component{onCreate(){this.state={numMonths:1,firstSelected:null,secondSelected:null,popover:!1},typeof document<"u"&&this.calculateNumMonths()}onMount(){this.expander=new pe(this.el,{hostSelector:".ebay-date-textbox--main > .icon-btn",contentSelector:".date-textbox__popover",expandOnClick:!0,autoCollapse:!0})}onDestroy(){var e;(e=this.expander)==null||e.destroy()}onInput(e){e.value!==void 0&&(this.state.firstSelected=L(e.value)),e.rangeEnd&&(this.state.secondSelected=L(e.rangeEnd)),e.range||(this.state.secondSelected=null)}calculateNumMonths(){this.state.numMonths=document.documentElement.clientWidth<fe?1:2}handleInputChange(e,{value:t}){let a=oe(t,this.input.locale);if(a===null){this.emit("invalid-date",{value:t,index:e});return}e===0?this.state.firstSelected=a:this.state.secondSelected=a,this.emitSelectedChange()}openPopover(){this.state.popover=!0}closePopover(){this.state.popover=!1}onPopoverSelect({iso:e}){const{firstSelected:t,secondSelected:a}=this.state;if(this.state.firstSelected=e,this.input.range){const n=t||a;t&&a?this.state.secondSelected=null:n&&(n<e?(this.state.firstSelected=n,this.state.secondSelected=e):this.state.secondSelected=n,this.input.collapseOnSelect&&(this.expander.expanded=!1))}else this.input.collapseOnSelect&&(this.expander.expanded=!1);this.emitSelectedChange()}onInputKeyup({originalEvent:e}){if(!/^\d$/.test(e.key))return;const t=e.target,{value:a}=t;if(t.selectionStart===a.length){const{o:n,s:d}=re(this.input.locale);let r=0,s=0;for(let c;~(c=a.indexOf(d[r],s));)s=c+d[r].length,r++;a.length-s===(n[r]==="y"?4:2)&&(t.value+=d[r]??"")}}emitSelectedChange(){this.emit("change",this.input.range?{rangeStart:this.state.firstSelected,rangeEnd:this.state.secondSelected}:{selected:this.state.firstSelected})}}const E="z$UMkxUh",i=v(E);_.r(E,()=>i);const G=ye;i._=T(function(o,e,t,a,n,d){const{a11yOpenPopoverText:r="open calendar",range:s,inputPlaceholderText:c=le(o.locale),disabled:V,textbox:b,...Q}=o,[X,Z]=Array.isArray(c)?c:[c,c],[ee,te]=Array.isArray(b)?b:[b,b],$=h=>h?se(h,o.locale):"";e.be("span",{class:"date-textbox"},"0",a,null,1,{"onexpander-expand":t.d("expander-expand","openPopover",!1),"onexpander-collapse":t.d("expander-collapse","closePopover",!1)}),s&&l(Y,{placeholder:X,disabled:V,value:$(n.firstSelected),...ee},e,t,"1",[["blur","handleInputChange",!1,[0]],["keyup","onInputKeyup",!1]]),l(Y,I(()=>{g("postfixIcon",{renderBody:h=>{l(ie,{},h,t,"3")}})},{class:"ebay-date-textbox--main",placeholder:Z,buttonAriaLabel:r,value:$(s?n.secondSelected:n.firstSelected),disabled:V,...te,postfixIcon:void 0}),e,t,"2",[["blur","handleInputChange",!1,[s?1:0]],["keyup","onInputKeyup",!1]]),e.be("div",{hidden:!n.popover,class:"date-textbox__popover"},"@popover",a,null,0),n.popover&&l(de,{to:typeof window=="object"&&window,__events:["on","resize"]},e,t,"4",[["resize","calculateNumMonths",!1]]),l(ce,{...Q,range:s,interactive:!0,navigable:!0,numMonths:n.numMonths,selected:n.firstSelected&&n.secondSelected?[n.firstSelected,n.secondSelected]:n.firstSelected||n.secondSelected||void 0},e,t,"5",[["select","onPopoverSelect",!1]]),e.ee(),e.ee()},{t:E},G);i.Component=k(G,i._);const M="QzKMlHPh",S=v(M);_.r(M,()=>me);const K={};S._=T(function(o,e,t,a,n,d){l(i,I(()=>{g("textbox",{placeholder:"JJJJ/MM/DD",floatingLabel:"Begin"}),g("textbox",{placeholder:"JJJJ/MM/DD",floatingLabel:"Einde"})},{disableBefore:new Date,range:!0,locale:"af",getA11yShowMonthText:r=>`Gaan na ${r}`,a11ySelectedText:"Geselekteerde",a11yRangeStartText:"Reeks begin",a11yInRangeText:"Binne bereik",a11yRangeEndText:"Reeks einde",localizeFormat:!0,...o,textbox:void 0}),e,t,"0",[["change","emit",!1,["change"]]])},{t:M,s:!0},K);S.Component=k(K,S._);const xe=`<ebay-date-textbox
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
`,w="YxomGrbk",m=v(w);_.r(w,()=>m);const q={onCreate(){this.state={value:null}},handleChange({selected:o}){this.state.value=o},clear(){this.state.value=null}};m._=T(function(o,e,t,a,n,d){l(i,{value:n.value,...o},e,t,"0",[["change","handleChange",!1]]),l(ue,{renderBody:r=>{r.t("Clear",a)}},e,t,"1",[["click","clear",!1]])},{t:w},q);m.Component=k(q,m._);const ge=`class {
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
`,D="UIzvJTKh",u=v(D),Se=be("strong",null,1).t("YYYY-MM-DD");_.r(D,()=>u);const H={onCreate(){this.state={invalid:!1}},onError(){this.state.invalid=!0},onChange(){this.state.invalid=!1}};u._=T(function(o,e,t,a,n,d){e.be("div",{class:"field"},"0",a,null,1),e.be("label",{for:t.elId("textbox")},"1",a,null,0),e.t("Enter Date",a),e.ee(),e.be("div",null,"2",a,null,0),l(i,I(()=>{g("textbox",{id:t.elId("textbox"),invalid:n.invalid,ariaLabelledby:t.elId("error-label")})}),e,t,"3",[["invalid-date","onError",!1],["change","onChange",!1]]),e.ee(),n.invalid&&(e.be("div",{class:"field__description field__description--attention",id:t.elId("error-label")},"4",a,null,1),e.t("Use ",a),e.n(Se,a),e.t(" format",a),e.ee()),e.ee()},{t:D},H);u.Component=k(H,u._);const ve=`class {
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
`,_e=o=>({input:ae(o)}),at={title:"form input/ebay-date-textbox",component:i,parameters:{docs:{description:{component:he}}},argTypes:{value:{type:"date",control:{type:"date"},description:"Selected date",table:{defaultValue:{summary:"undefined"}}},range:{type:"boolean",control:{type:"boolean"},description:"True if selecting a range, false if a single value",table:{defaultValue:{summary:"false"}}},todayISO:{type:"date",control:{type:"date"},description:"The current date in ISO format",table:{defaultValue:{summary:"Today's date"}}},floatingLabel:{type:"text|array",control:{type:"object"},description:'If set then shows this text as the floating label. If separate floating labels are required for a range display, use an array of two strings (i. e. `["Start", "End"]`)..'},rangeEnd:{type:"date",control:{type:"date"},description:"If range is true, the end of the selected range",table:{defaultValue:{summary:"undefined"}}},locale:{type:"text",control:{type:"text"},description:"Locale of the date picker",table:{defaultValue:{summary:"navigator.language || 'en-US'"}}},disabled:{type:"boolean",control:{type:"boolean"},description:"If true, the textbox is disabled and popover cannot be opened.",table:{defaultValue:{summary:"false"}}},disableBefore:{type:"date",control:{type:"date"},description:"First date that may be selected. Should be an ISO string, but also accepts a timestamp or `Date` object",table:{defaultValue:{summary:"undefined"}}},disableAfter:{type:"date",control:{type:"date"},description:"Last date that may be selected. Should be an ISO string, but also accepts a timestamp or `Date` object",table:{defaultValue:{summary:"undefined"}}},disableWeekdays:{type:"array",control:{type:"array"},description:"List of weekdays that are disabled. Must be an array of numbers, where Sunday is `0` and Saturday is `6`",table:{defaultValue:{summary:"undefined"}}},disableList:{type:"array",control:{type:"array"},description:"List of specific days that are disabled. Should be a list of ISO strings, but also accepts timestamps or `Date` objects",table:{defaultValue:{summary:"undefined"}}},collapseOnSelect:{type:"boolean",control:{type:"boolean"},description:"Whether the calendar should collapse after a date is selected",table:{defaultValue:{summary:"false"}}},getA11yShowMonthText:{type:"callback",control:{type:"callback"},description:"Function used to get the text for showing previous and next months",table:{defaultValue:{summary:"(monthName) => `Show ${monthName}`"}}},a11ySelectedText:{type:"text",control:{type:"text"},description:"Text to be read by screen readers when a date is selected",table:{defaultValue:{summary:"selected"}}},a11yRangeStartText:{type:"text",control:{type:"text"},description:"Text to be read by screen readers when a date is the start of a range",table:{defaultValue:{summary:"start of range"}}},a11yInRangeText:{type:"text",control:{type:"text"},description:"Text to be read by screen readers when a date is in a range",table:{defaultValue:{summary:"in range"}}},a11yRangeEndText:{type:"text",control:{type:"text"},description:"Text to be read by screen readers when a date is the end of a range",table:{defaultValue:{summary:"end of range"}}},a11ySeparator:{type:"text",control:{type:"text"},description:"Text to be read by screen readers to separate properties",table:{defaultValue:{summary:" - "}}},a11yOpenPopoverText:{type:"text",control:{type:"text"},description:"A11y label for the button that opens the calendar popover",table:{defaultValue:{summary:"open calendar"}}},inputPlaceholderText:{type:"text|array",control:{type:"object"},description:'Text for the input placeholder. Should indicate that users need to enter dates in ISO format. If separate placeholders are required for a range display, use an array of two strings (i. e. `["Start (MM/DD/YYYY)", "End (MM/DD/YYYY)"]`).',table:{defaultValue:{summary:'"MM/DD/YYYY"'}}},localizeFormat:{type:"boolean",control:{type:"boolean"},description:"_**Deprecated— will be default after next major release**_ Localize the date format",table:{defaultValue:{summary:"false"}}},textbox:{name:"@textbox",description:"Proxy for textbox attributes— includes all attributes for `<ebay-textbox>`",table:{category:"@attribute tags"}},onChange:{action:"on-change",description:"Triggered when the selection changes",table:{category:"Events",defaultValue:{summary:"{ selected } | { rangeStart, rangeEnd }"}}},"onInvalid-date":{action:"on-invalid-date",description:"Triggered when the user manually types an invalid date",table:{category:"Events"}}}},p=_e.bind({});p.parameters={docs:{source:{code:ne("ebay-date-textbox",{})}}};const f=C(S,xe),y=C(m,ge),x=C(u,ve);var J,O,R;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(R=(O=p.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var z,P,B;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:"buildExtensionTemplate(LocalizedTemplate, LocalizedTemplateCode)",...(B=(P=f.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var A,F,N;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:"buildExtensionTemplate(WithClearTemplate, WithClearTemplateCode)",...(N=(F=y.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var W,j,U;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:"buildExtensionTemplate(InField, InFieldCode)",...(U=(j=x.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};const nt=["Default","Localized","WithClear","InFieldExample"];export{p as Default,x as InFieldExample,f as Localized,y as WithClear,nt as __namedExportsOrder,at as default};
