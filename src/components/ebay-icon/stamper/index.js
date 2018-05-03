const fs = require('fs');
const template = require('./template.marko');

const pageCache = {};
const markupCache = {};

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
function findIcons(out) {
    const pageTemplatePath = out && out.global && out.global.pageTemplate && out.global.pageTemplate.path || '';
    const pageTemplateNode = require.cache[pageTemplatePath.replace('.marko.js', '.marko')];
    const pageTemplateId = pageTemplateNode && pageTemplateNode.id;

    // only traverse icon paths once per page template
    if (pageTemplateId && !pageCache.hasOwnProperty(pageTemplateId)) {
        pageCache[pageTemplateId] = [];
        traverse(pageTemplateNode, currentNode => {
            if (currentNode.id.includes('/components/ebay-icon/internal/')) {
                const iconName = currentNode.id.substring(currentNode.id.lastIndexOf('/') + 1).replace('.js', '');
                pageCache[pageTemplateId].push(iconName);
            }
        });
    }

    return pageTemplateId;
}

// cache icon markup at app startup
const markupPath = `${__dirname}/markup`;
fs.readdirSync(markupPath).forEach(file => {
    if (file.endsWith('.html')) {
        const iconName = file.replace('.html', '');
        markupCache[iconName] = fs.readFileSync(`${markupPath}/${file}`, 'utf-8').replace(/\n/g, '');
    }
});

module.exports = (input, out) => {
    const pageTemplateId = findIcons(out);
    template.render({ stamp: (pageCache[pageTemplateId] || []).map(iconName => markupCache[iconName]).join('') }, out);
};

module.exports.privates = { findIcons, pageCache };
