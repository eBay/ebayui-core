const template = require('./template.marko');

const iconCache = {};

/**
 * Traverse the require tree, starting at a specified rootNode
 * @param {*} rootNode: starting node for traversal
 * @param {*} fn: function to execute on every child
 */
function traverse(rootNode, fn) {
    const visited = {};
    const queue = [rootNode];

    while (queue.length > 0) {
        const currentNode = queue.shift();
        if (!currentNode || visited[currentNode.id]) {
            continue;
        }
        visited[currentNode.id] = 1;
        fn(currentNode);

        if (currentNode.children && currentNode.children.length) {
            // unshift for dfs, push for bfs
            currentNode.children.forEach(child => queue.unshift(child));
        }
    }
}

/**
 * Use traversal to find icons in the require cache for this page
 * @param {*} pageTemplateNode: first require cache module of the page
 * @param {*} pageTemplateId: require cache ID of the page module
 */
function findIcons(pageTemplateNode, pageTemplateId) {
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
}

module.exports = (input, out) => {
    const pageTemplatePath = out.global && out.global.pageTemplate && out.global.pageTemplate.path || '';
    const pageTemplateNode = require.cache[pageTemplatePath.replace('.marko.js', '.marko')];
    const pageTemplateId = pageTemplateNode && pageTemplateNode.id;

    findIcons(pageTemplateNode, pageTemplateId);
    const iconsInPage = iconCache[pageTemplateId];
    const hasIcons = pageTemplateId && iconsInPage && Object.keys(iconsInPage).length > 0;

    template.render({ icons: iconsInPage, hasIcons }, out);
};

module.exports.privates = { findIcons, iconCache };
