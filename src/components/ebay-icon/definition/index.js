const template = require('./template.marko');

const iconCache = {};

function traverse(rootNode, fn) {
    const visited = {};
    const queue = [rootNode];
    let stop = false;

    while (queue.length > 0 && !stop) {
        const currentNode = queue.shift();
        if (!currentNode || visited[currentNode.id]) {
            continue;
        }
        visited[currentNode.id] = 1;
        stop = fn(currentNode);

        if (currentNode.children && currentNode.children.length) {
            // unshift for dfs, push for bfs
            currentNode.children.forEach(child => queue.unshift(child));
        }
    }
}

module.exports = (input, out) => {
    const pageTemplateNode = require.cache[out.global.pageTemplate.path.replace('.marko.js', '.marko')];
    const pageTemplateId = pageTemplateNode && pageTemplateNode.id;

    // only traverse icon paths once per page template
    if (pageTemplateId && !iconCache.hasOwnProperty(pageTemplateId)) {
        iconCache[pageTemplateId] = {};
        traverse(pageTemplateNode, currentNode => {
            if (currentNode.id.includes('/components/ebay-icon/internal/')) {
                const iconName = currentNode.id.substring(currentNode.id.lastIndexOf('/') + 1).replace('.js', '');
                iconCache[pageTemplateId][iconName] = 1;
            }
        });
    }
    const hasIcons = pageTemplateId && iconCache[pageTemplateId] && Object.keys(iconCache[pageTemplateId]).length > 0;

    template.render({ icons: iconCache[pageTemplateId], hasIcons }, out);
};
