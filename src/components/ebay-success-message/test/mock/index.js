const assign = require('core-js-pure/features/object/assign');
const { createRenderBody } = require('../../../../common/test-utils/shared');

exports.Base = {
    iconA11yText: 'Success',
    title: 'Title',
    content: {
        renderBody: createRenderBody('Content')
    },
    renderBody: createRenderBody('<button class="success-message__button">Button</button>')
};

exports.Full_TitleAsH3 = assign({}, exports.Base, {
    full: true,
    titleHeadingTag: 'h3'
});
