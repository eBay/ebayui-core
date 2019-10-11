const path = require('path');
const iconStampTransformer = require('../../common/transformers/icon-stamp');

function transform(el, context) {
    const iconPath = path.join(__dirname, 'symbols');

    return iconStampTransformer(el, context, iconPath);
}

module.exports = transform;
