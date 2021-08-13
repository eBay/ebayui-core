function tagToString(tagName, args, fromArray = false) {
    const { body, attrs } = argsToString(args);
    let formattedTagName = tagName;
    if (fromArray) {
        formattedTagName = `@${formattedTagName.slice(0, formattedTagName.length - 1)}`;
    }
    return `\n\t<${formattedTagName + attrs + (body ? `>${body}\n</${formattedTagName}>` : `/>`)}`;
}

function argsToString(args) {
    let attrs = '';
    let body = '';
    for (const key in args) {
        if (Object.prototype.hasOwnProperty.call(args, key)) {
            const val = args[key];
            const dashCaseKey = key.replace(/(?<=[a-z])[A-Z]/g, (m) => `-${m.toLowerCase()}`);
            if (Array.isArray(val)) {
                for (const item of val) {
                    body += tagToString(dashCaseKey, item, true);
                }
            } else {
                attrs += ` ${dashCaseKey}=${JSON.stringify(val)}`;
            }
        }
    }

    return { attrs, body };
}

module.exports = { tagToString };
