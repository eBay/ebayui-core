function tagToString(
    tagName: string,
    args: any,
    plurarls: Record<string, string> = {},
    indent = "",
    fromAttribute = false,
) {
    const nextIndex = indent + "\t";
    const { body, attrs } = argsToString(args, plurarls, nextIndex);
    let formattedTagName = tagName;
    if (fromAttribute) {
        formattedTagName = `@${plurarls[formattedTagName] || formattedTagName}`;
    }
    return `<${
        formattedTagName +
        attrs +
        (body
            ? `>\n${body.replace(
                  /^|\n/gm,
                  `$&${nextIndex}`,
              )}\n</${formattedTagName}>`
            : `/>`)
    }`;
}

function argsToString(
    args: any,
    plurarls: Record<string, string>,
    indent: string,
) {
    let attrs = "";
    let body = "";
    for (const key in args) {
        if (
            Object.prototype.hasOwnProperty.call(args, key) &&
            key !== "renderBody"
        ) {
            const val = args[key];
            const dashCaseKey = key.replace(
                /([a-z])([A-Z])/g,
                (m, m1, m2) => `${m1}-${m2.toLowerCase()}`,
            );
            if (Array.isArray(val)) {
                for (const item of val) {
                    body += tagToString(
                        dashCaseKey,
                        item,
                        plurarls,
                        indent,
                        true,
                    );
                }
            } else if (val && typeof val === "object") {
                if (key === "spread") {
                    Object.keys(val).forEach((spreadKey) => {
                        attrs += ` ${spreadKey}=${JSON.stringify(
                            val[spreadKey],
                        )}`;
                    });
                } else
                    body += tagToString(
                        dashCaseKey,
                        val,
                        plurarls,
                        indent,
                        true,
                    );
            } else {
                attrs += ` ${dashCaseKey}=${JSON.stringify(val)}`;
            }
        }
    }
    if (args.renderBody) {
        body += args.renderBody;
    }

    return { attrs, body };
}

export { tagToString };
