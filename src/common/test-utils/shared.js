export function createRenderBody(html, text) {
    renderBody.text = typeof text === "string" ? text : html;
    return renderBody;
    function renderBody(out) {
        out.write(html);
    }
}
export function getNItems(n, getAttrs) {
    return Array.from({ length: n }).map((_, i) => getAttrs(i));
}

// Helper method to render pagination items
export function getPaginationItems(
    n,
    href,
    selected,
    navDisabled,
    skipPrevNext,
) {
    const items = [];
    if (!skipPrevNext) {
        items.push({
            renderBody: createRenderBody(``),
            type: "previous",
            href: href ? "#" : null,
            disabled: navDisabled,
        });
    }
    for (let i = 0; i < n; i++) {
        items.push({
            renderBody: createRenderBody(`item ${i}`),
            href: href ? "#" : null,
            current: i === selected,
        });
    }
    if (!skipPrevNext) {
        items.push({
            renderBody: createRenderBody(``),
            type: "next",
            href: href ? "#" : null,
            disabled: navDisabled,
        });
    }
    return items;
}
