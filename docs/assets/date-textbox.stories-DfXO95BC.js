import{b as I,a as ne}from"./utils-DWCsNc5l.js";import{t as oe}from"./index-CCz6reEH.js";import{t as v,r as _,b as T,d as C}from"./registry-B-klnak9.js";import{p as re,g as le,a as se,f as ie}from"./index-CD9SHNZJ.js";import{C as L}from"./index-CnQCvcVr.js";import{_ as s}from"./render-tag-BBOJ9dEX.js";import{_ as de}from"./index-IzpeCRMP.js";import{i as E,a as g}from"./attr-tag-DphMQldM.js";import{_ as ce}from"./index-C_i8Cqa-.js";import{d as J,_ as pe}from"./index-D0LEcrud.js";import{s as me}from"./index-D7B88Psz.js";import{_ as ue}from"./empty-component-BCB5DEsP.js";import{_ as be}from"./index-Z345IjKG.js";import{_ as he}from"./const-element-Usj7mXQw.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";/* empty css             */import"./index-htxwKVWG.js";/* empty css                    */import"./dynamic-tag-DQCvkDdb.js";import"./index-BJEuXy1Q.js";import"./index-BoUQmtU4.js";import"./index-PNIKNjCK.js";/* empty css               *//* empty css             */import"./index-B6IacUrT.js";import"./index-blmbJU0z.js";import"./of-fallback-C2gEBeKK.js";import"./index-D7GlLQHj.js";import"./index--35j0Bzx.js";import"./index-UKJ8Gf5v.js";import"./index-B4yY3Lf-.js";import"./index-1olqwswF.js";const fe=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,ye=600;class xe extends Marko.Component{onCreate(){this.state={numMonths:1,firstSelected:null,secondSelected:null,popover:!1},typeof document<"u"&&this.calculateNumMonths()}onMount(){this.expander=new me(this.el,{hostSelector:".ebay-date-textbox--main > .icon-btn",contentSelector:".date-textbox__popover",expandOnClick:!0,autoCollapse:!0})}onDestroy(){var e;(e=this.expander)==null||e.destroy()}onInput(e){e.value!==void 0&&(this.state.firstSelected=J(e.value)),e.rangeEnd&&(this.state.secondSelected=J(e.rangeEnd)),e.range||(this.state.secondSelected=null)}calculateNumMonths(){this.state.numMonths=document.documentElement.clientWidth<ye?1:2}handleInputChange(e,{value:t}){let a=re(t,this.input.locale);if(a===null){this.emit("invalid-date",{value:t,index:e});return}e===0?this.state.firstSelected=a:this.state.secondSelected=a,this.emitSelectedChange()}openPopover(){this.state.popover=!0}closePopover(){this.state.popover=!1}onPopoverSelect({iso:e}){const{firstSelected:t,secondSelected:a}=this.state;if(this.state.firstSelected=e,this.input.range){const n=t||a;t&&a?this.state.secondSelected=null:n&&(n<e?(this.state.firstSelected=n,this.state.secondSelected=e):this.state.secondSelected=n,this.input.collapseOnSelect&&(this.expander.expanded=!1))}else this.input.collapseOnSelect&&(this.expander.expanded=!1);this.emitSelectedChange()}onInputKeyup({originalEvent:e}){if(!/^\d$/.test(e.key))return;const t=e.target,{value:a}=t;if(t.selectionStart===a.length){const{o:n,s:i}=le(this.input.locale);let r=0,l=0;for(let d;~(d=a.indexOf(i[r],l));)l=d+i[r].length,r++;console.log(r,l),a.length-l===(n[r]==="y"?4:2)&&(t.value+=i[r]??"")}}emitSelectedChange(){this.emit("change",this.input.range?{rangeStart:this.state.firstSelected,rangeEnd:this.state.secondSelected}:{selected:this.state.firstSelected})}}const M="z$UMkxUh",p=v(M),k=p;_.r(M,()=>p);const K=xe;p._=T(function(o,e,t,a,n,i){const{a11yOpenPopoverText:r="open calendar",range:l,inputPlaceholderText:d=se(o.locale),disabled:Y,textbox:b,...X}=o,[Z,ee]=Array.isArray(d)?d:[d,d],[te,ae]=Array.isArray(b)?b:[b,b],$=h=>h?ie(h,o.locale):"";e.be("span",{class:"date-textbox"},"0",a,null,1,{"onexpander-expand":t.d("expander-expand","openPopover",!1),"onexpander-collapse":t.d("expander-collapse","closePopover",!1)}),l&&s(L,{placeholder:Z,disabled:Y,value:$(n.firstSelected),...te},e,t,"1",[["blur","handleInputChange",!1,[0]],["keyup","onInputKeyup",!1]]),s(L,E(()=>{g("postfixIcon",{renderBody:h=>{s(de,{},h,t,"3")}})},{class:"ebay-date-textbox--main",placeholder:ee,buttonAriaLabel:r,value:$(l?n.secondSelected:n.firstSelected),disabled:Y,...ae,postfixIcon:void 0}),e,t,"2",[["blur","handleInputChange",!1,[l?1:0]],["keyup","onInputKeyup",!1]]),e.be("div",{hidden:!n.popover,class:"date-textbox__popover"},"@popover",a,null,0),n.popover&&s(ce,{to:typeof window=="object"&&window,__events:["on","resize"]},e,t,"4",[["resize","calculateNumMonths",!1]]),s(pe,{...X,range:l,interactive:!0,navigable:!0,numMonths:n.numMonths,selected:n.firstSelected&&n.secondSelected?[n.firstSelected,n.secondSelected]:n.firstSelected||n.secondSelected||void 0},e,t,"5",[["select","onPopoverSelect",!1]]),e.ee(),e.ee()},{t:M},K);p.Component=C(K,p._);const w="QzKMlHPh",S=v(w);_.r(w,()=>ue);const q={};S._=T(function(o,e,t,a,n,i){s(k,E(()=>{g("textbox",{placeholder:"JJJJ/MM/DD",floatingLabel:"Begin"}),g("textbox",{placeholder:"JJJJ/MM/DD",floatingLabel:"Einde"})},{disableBefore:new Date,range:!0,locale:"af",getA11yShowMonthText:r=>`Gaan na ${r}`,a11ySelectedText:"Geselekteerde",a11yRangeStartText:"Reeks begin",a11yInRangeText:"Binne bereik",a11yRangeEndText:"Reeks einde",localizeFormat:!0,...o,textbox:void 0}),e,t,"0",[["change","emit",!1,["change"]]])},{t:w,s:!0},q);S.Component=C(q,S._);const ge=`<ebay-date-textbox
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
`,D="YxomGrbk",m=v(D);_.r(D,()=>m);const H={onCreate(){this.state={value:null}},handleChange({selected:o}){this.state.value=o},clear(){this.state.value=null}};m._=T(function(o,e,t,a,n,i){s(k,{value:n.value,...o},e,t,"0",[["change","handleChange",!1]]),s(be,{renderBody:r=>{r.t("Clear",a)}},e,t,"1",[["click","clear",!1]])},{t:D},H);m.Component=C(H,m._);const Se=`class {
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
`,V="UIzvJTKh",u=v(V),ve=he("strong",null,1).t("YYYY-MM-DD");_.r(V,()=>u);const Q={onCreate(){this.state={invalid:!1}},onError(){this.state.invalid=!0},onChange(){this.state.invalid=!1}};u._=T(function(o,e,t,a,n,i){e.be("div",{class:"field"},"0",a,null,1),e.be("label",{for:t.elId("textbox")},"1",a,null,0),e.t("Enter Date",a),e.ee(),e.be("div",null,"2",a,null,0),s(k,E(()=>{g("textbox",{id:t.elId("textbox"),invalid:n.invalid,ariaLabelledby:t.elId("error-label")})}),e,t,"3",[["invalid-date","onError",!1],["change","onChange",!1]]),e.ee(),n.invalid&&(e.be("div",{class:"field__description field__description--attention",id:t.elId("error-label")},"4",a,null,1),e.t("Use ",a),e.n(ve,a),e.t(" format",a),e.ee()),e.ee()},{t:V},Q);u.Component=C(Q,u._);const _e=`class {
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
`,Te=o=>({input:ne(o)}),nt={title:"form input/ebay-date-textbox",component:k,parameters:{docs:{description:{component:fe}}},argTypes:{value:{type:"date",control:{type:"date"},description:"Selected date",table:{defaultValue:{summary:"undefined"}}},range:{type:"boolean",control:{type:"boolean"},description:"True if selecting a range, false if a single value",table:{defaultValue:{summary:"false"}}},todayISO:{type:"date",control:{type:"date"},description:"The current date in ISO format",table:{defaultValue:{summary:"Today's date"}}},floatingLabel:{type:"text|array",control:{type:"object"},description:'If set then shows this text as the floating label. If separate floating labels are required for a range display, use an array of two strings (i. e. `["Start", "End"]`)..'},rangeEnd:{type:"date",control:{type:"date"},description:"If range is true, the end of the selected range",table:{defaultValue:{summary:"undefined"}}},locale:{type:"text",control:{type:"text"},description:"Locale of the date picker",table:{defaultValue:{summary:"navigator.language || 'en-US'"}}},disabled:{type:"boolean",control:{type:"boolean"},description:"If true, the textbox is disabled and popover cannot be opened.",table:{defaultValue:{summary:"false"}}},disableBefore:{type:"date",control:{type:"date"},description:"First date that may be selected. Should be an ISO string, but also accepts a timestamp or `Date` object",table:{defaultValue:{summary:"undefined"}}},disableAfter:{type:"date",control:{type:"date"},description:"Last date that may be selected. Should be an ISO string, but also accepts a timestamp or `Date` object",table:{defaultValue:{summary:"undefined"}}},disableWeekdays:{type:"array",control:{type:"array"},description:"List of weekdays that are disabled. Must be an array of numbers, where Sunday is `0` and Saturday is `6`",table:{defaultValue:{summary:"undefined"}}},disableList:{type:"array",control:{type:"array"},description:"List of specific days that are disabled. Should be a list of ISO strings, but also accepts timestamps or `Date` objects",table:{defaultValue:{summary:"undefined"}}},collapseOnSelect:{type:"boolean",control:{type:"boolean"},description:"Whether the calendar should collapse after a date is selected",table:{defaultValue:{summary:"false"}}},getA11yShowMonthText:{type:"callback",control:{type:"callback"},description:"Function used to get the text for showing previous and next months",table:{defaultValue:{summary:"(monthName) => `Show ${monthName}`"}}},a11ySelectedText:{type:"text",control:{type:"text"},description:"Text to be read by screen readers when a date is selected",table:{defaultValue:{summary:"selected"}}},a11yRangeStartText:{type:"text",control:{type:"text"},description:"Text to be read by screen readers when a date is the start of a range",table:{defaultValue:{summary:"start of range"}}},a11yInRangeText:{type:"text",control:{type:"text"},description:"Text to be read by screen readers when a date is in a range",table:{defaultValue:{summary:"in range"}}},a11yRangeEndText:{type:"text",control:{type:"text"},description:"Text to be read by screen readers when a date is the end of a range",table:{defaultValue:{summary:"end of range"}}},a11ySeparator:{type:"text",control:{type:"text"},description:"Text to be read by screen readers to separate properties",table:{defaultValue:{summary:" - "}}},a11yOpenPopoverText:{type:"text",control:{type:"text"},description:"A11y label for the button that opens the calendar popover",table:{defaultValue:{summary:"open calendar"}}},inputPlaceholderText:{type:"text|array",control:{type:"object"},description:'Text for the input placeholder. Should indicate that users need to enter dates in ISO format. If separate placeholders are required for a range display, use an array of two strings (i. e. `["Start (MM/DD/YYYY)", "End (MM/DD/YYYY)"]`).',table:{defaultValue:{summary:'"MM/DD/YYYY"'}}},localizeFormat:{type:"boolean",control:{type:"boolean"},description:"_**Deprecated— will be default after next major release**_ Localize the date format",table:{defaultValue:{summary:"false"}}},textbox:{name:"@textbox",description:"Proxy for textbox attributes— includes all attributes for `<ebay-textbox>`",table:{category:"@attribute tags"}},onChange:{action:"on-change",description:"Triggered when the selection changes",table:{category:"Events",defaultValue:{summary:"{ selected } | { rangeStart, rangeEnd }"}}},"onInvalid-date":{action:"on-invalid-date",description:"Triggered when the user manually types an invalid date",table:{category:"Events"}}}},c=Te.bind({});c.parameters={docs:{source:{code:oe("ebay-date-textbox",{})}}};const f=I(S,ge),y=I(m,Se),x=I(u,_e);var O,R,z;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(z=(R=c.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var P,B,A;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:"buildExtensionTemplate(LocalizedTemplate, LocalizedTemplateCode)",...(A=(B=f.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var F,N,W;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:"buildExtensionTemplate(WithClearTemplate, WithClearTemplateCode)",...(W=(N=y.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var j,U,G;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:"buildExtensionTemplate(InField, InFieldCode)",...(G=(U=x.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};const ot=["Default","Localized","WithClear","InFieldExample"];export{c as Default,x as InFieldExample,f as Localized,y as WithClear,ot as __namedExportsOrder,nt as default};
