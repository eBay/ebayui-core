
const { createIconFromAttribute } = require('../../common/migrators');

function transform(el, context) {
    createIconFromAttribute(el, context, 'icon');
}

module.exports = transform;
