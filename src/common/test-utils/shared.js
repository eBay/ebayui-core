export function createRenderBody(html, text) {
    renderBody.text = typeof text === 'string' ? text : html;
    return renderBody;
    function renderBody(out) {
        out.write(html);
    }
}
export function getNItems(n, getAttrs) {
    return Array.from({ length: n }).map((_, i) => getAttrs(i));
}
