const processHtmlAttributes = require('../../common/html-attributes');
const template = require('./template.marko');

function getInitialState(input) {
    const {
        style,
        type = 'tooltip',
        location = 'bottom',
        icon,
        iconTag,
        styleTop,
        styleLeft,
        styleRight,
        styleBottom,
        ariaLabel,
        a11yCloseText } = input;

    const hosts = (input.hosts || []).map(content => ({
        htmlAttributes: processHtmlAttributes(content),
        classes: content.class,
        style: content.style,
        renderBody: content.renderBody
    }));

    const headings = (input.headings || []).map(heading => ({
        htmlAttributes: processHtmlAttributes(heading),
        classes: heading.class,
        style: heading.style,
        renderBody: heading.renderBody
    }));

    const contents = (input.contents || []).map(content => ({
        htmlAttributes: processHtmlAttributes(content),
        classes: content.class,
        style: content.style,
        renderBody: content.renderBody
    }));

    return {
        htmlAttributes: processHtmlAttributes(input),
        class: input.class,
        hostSelector: `.${type}__host`,
        overlaySelector: `.${type}__overlay`,
        style,
        type,
        icon,
        iconTag: iconTag && iconTag.renderBody,
        location,
        styleTop,
        styleLeft,
        styleRight,
        styleBottom,
        expanded: type === 'tourtip',
        expandInit: false,
        ariaLabel,
        a11yCloseText,
        hosts,
        headings,
        contents
    };
}

function getTemplateData(state) {
    return state;
}

function handleExpand() {
    this.setState('expandInit', true);
    this.setState('expanded', true);
}

function handleCollapse() {
    this.setState('expanded', false);
}

function handleTooltipClose() {
    this.handleCollapse();
}

module.exports = require('marko-widgets').defineComponent({
    template,
    getInitialState,
    getTemplateData,
    handleExpand,
    handleCollapse,
    handleTooltipClose
});
