import{b as k,a as E}from"./utils-DWCsNc5l.js";import{t as B}from"./index-CCz6reEH.js";import{_ as c,t as _}from"./index-DJUGRItq.js";import{r as S,b as T,d as V,t as D}from"./registry-D0x2Lw0V.js";import{_ as v}from"./render-tag-Buaq4gMc.js";import"./index-BytFP5YX.js";import"./index-BZpHAKBe.js";/* empty css             */import"./index-D-Xj9adi.js";/* empty css                    *//* empty css               *//* empty css             */import"./dynamic-tag-BSuzyz1c.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-ClYQ9iWr.js";import"./index-blmbJU0z.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const M=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-calendar
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.2.0
    </span>
</h1>

Calendar component, used for displaying dates and date ranges.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/dialogs-ebay-date-textbox)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/dialogs-ebay-date-textbox)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-date-textbox/examples)
`,d="CqDUkq7F",a=D(d);S.r(d,()=>a);const I={};a._=T(function(e,s,i,O,C,W){v(c,{...e,linkBuilder:l=>`https://www.ebay.com/sch/i.html?_nkw=${l}`},s,i,"0",[["select","emit",!1,["select"]],["month-change","emit",!1,["month"]],["focus","emit",!1,["focus"]]])},{t:d,i:!0},I);a.Component=V(I,a._);const $=`<ebay-calendar
    ...input
    linkBuilder=(iso) => {
        return \`https://www.ebay.com/sch/i.html?_nkw=\${iso}\`;
    }
    on-select("emit", "select")
    on-month-change("emit", "month")
    on-focus("emit", "focus")
    />
`,m="VCfNMhRN",o=D(m),R=_(new Date(Date.now()-24*60*60*1e3)),F=_(new Date(Date.now()+24*60*60*1e3)),N={[R]:"https://www.ebay.com/sch/i.html?_nkw=yesterday",[F]:"https://www.ebay.com/sch/i.html?_nkw=tomorrow"};S.r(m,()=>o);const L={};o._=T(function(e,s,i,O,C,W){v(c,{...e,linkBuilder:l=>N[l]},s,i,"0",[["select","emit",!1,["select"]],["month-change","emit",!1,["month"]],["focus","emit",!1,["focus"]]])},{t:m,i:!0},L);o.Component=V(L,o._);const j=`import { toISO } from "../date-utils";
static const yesterdayISO = toISO(new Date(Date.now() - 24 * 60 * 60 * 1000));
static const tomorrowISO = toISO(new Date(Date.now() + 24 * 60 * 60 * 1000));
static const linkMap = {
    [yesterdayISO]: "https://www.ebay.com/sch/i.html?_nkw=yesterday",
    [tomorrowISO]: "https://www.ebay.com/sch/i.html?_nkw=tomorrow"
};

<ebay-calendar
    ...input
    linkBuilder=(iso) => {
        return linkMap[iso];
    }
    on-select("emit", "select")
    on-month-change("emit", "month")
    on-focus("emit", "focus")
    />
`,q=e=>({input:E(e)}),re={title:"building blocks/ebay-calendar",component:c,parameters:{docs:{description:{component:M}}},argTypes:{navigable:{type:"boolean",control:{type:"boolean"},description:"If true, a header is included that allows for navigation between months",table:{defaultValue:{summary:"false"}}},interactive:{type:"boolean",control:{type:"boolean"},description:"Date cells are contained in buttons for interactive calendars, and spans otherwise",table:{defaultValue:{summary:"false"}}},numMonths:{type:"number",control:{type:"number"},description:"Number of months to be displayed at once",table:{defaultValue:{summary:"false"}}},range:{type:"boolean",control:{type:"boolean"},description:"True if selecting a range, false if a single value",table:{defaultValue:{summary:"false"}}},selected:{type:"text|array",control:{type:"object"},description:"Date or list of dates that are selected, represented as an ISO string or an array of ISO strings",table:{defaultValue:{summary:"undefined"}}},locale:{type:"text",control:{type:"text"},description:"Locale of the date picker",table:{defaultValue:{summary:"navigator.language"}}},disableBefore:{type:"date",control:{type:"date"},description:"First date that may be selected",table:{defaultValue:{summary:"undefined"}}},disableAfter:{type:"date",control:{type:"date"},description:"Last date that may be selected",table:{defaultValue:{summary:"undefined"}}},disableWeekdays:{type:"array",control:{type:"array"},description:"List of weekdays that are disabled. Must be an array of numbers, where Sunday is `0` and Saturday is `6`",table:{defaultValue:{summary:"undefined"}}},disableList:{type:"array",control:{type:"array"},description:"List of specific days that are disabled. Should be a list of ISO strings, but also accepts timestamps or `Date` objects",table:{defaultValue:{summary:"undefined"}}},linkBuilder:{type:"callback",control:{type:"callback"},description:"Function used to build the href for each date. The function is passed the date as a `Date` object, and should return a url string. For dates that don't have a link, the function should return a falsy value",table:{defaultValue:{summary:"undefined"}}},getA11yShowMonthText:{type:"callback",control:{type:"callback"},description:"Function used to get the text for showing previous and next months",table:{defaultValue:{summary:"(monthName) => `Show ${monthName}`"}}},a11ySelectedText:{type:"text",control:{type:"text"},description:"Text to be read by screen readers when a date is selected",table:{defaultValue:{summary:"selected"}}},a11yRangeStartText:{type:"text",control:{type:"text"},description:"Text to be read by screen readers when a date is the start of a range",table:{defaultValue:{summary:"start of range"}}},a11yInRangeText:{type:"text",control:{type:"text"},description:"Text to be read by screen readers when a date is in a range",table:{defaultValue:{summary:"in range"}}},a11yRangeEndText:{type:"text",control:{type:"text"},description:"Text to be read by screen readers when a date is the end of a range",table:{defaultValue:{summary:"end of range"}}},a11yTodayText:{type:"text",control:{type:"text"},description:"Text to be read by screen readers when a date is the current date",table:{defaultValue:{summary:"today"}}},a11yDisabledText:{type:"text",control:{type:"text"},description:"Text to be read by screen readers when a date is disabled",table:{defaultValue:{summary:"inactive"}}},a11ySeparator:{type:"text",control:{type:"text"},description:"Text to be read by screen readers to separate properties",table:{defaultValue:{summary:" - "}}},onSelect:{action:"on-select",description:"Triggered when a date is selected",table:{category:"Events",defaultValue:{summary:"{ iso }"}}},"onMonth-change":{action:"on-month-change",description:"Triggered during month navigation",table:{category:"Events",defaultValue:{summary:"{ iso }"}}},onFocus:{action:"on-focus",description:"Triggered when a day is focused on, typically via keyboard events",table:{category:"Events",defaultValue:{summary:"{ iso }"}}}}},t=q.bind({});t.parameters={docs:{source:{code:B("ebay-calendar",{})}}};const n=k(a,$),r=k(o,j);var p,u,y;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(y=(u=t.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var b,h,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:"buildExtensionTemplate(WithLinksTemplate, WithLinksTemplateCode)",...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,w,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:"buildExtensionTemplate(WithSpecificLinksTemplate, WithSpecificLinksTemplateCode)",...(x=(w=r.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const se=["Default","WithLinks","WithSpecificLinks"];export{t as Default,n as WithLinks,r as WithSpecificLinks,se as __namedExportsOrder,re as default};
