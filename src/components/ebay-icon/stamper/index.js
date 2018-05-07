const fs = require('fs');
const template = require('./template.marko');

const pageCache = {};
const markupCache = {};
const markoFileReg = /\.marko(?:\.js)?$/;

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
    const pageTemplatePathMarko = pageTemplatePath.replace('.marko.js', '.marko');
    const pageTemplateNode = require.cache[pageTemplatePath] || require.cache[pageTemplatePathMarko];

    if (!pageTemplateNode) {
        return;
    }

    const pageTemplateId = pageTemplateNode.id;
    let icons = pageCache[pageTemplateId];

    // only traverse icon paths once per page template
    if (icons) {
        return icons;
    }

    icons = pageTemplateNode._ebay_icons || [];
    traverse(pageTemplateNode, currentNode => {
        if (markoFileReg.test(currentNode.id)) {
            const foundIcons = currentNode.exports && currentNode.exports._ebay_icons;

            if (foundIcons) {
                icons.push(...foundIcons);
            }
        }
    });

    // remove duplicates
    pageCache[pageTemplateId] = icons.filter((value, index) => icons.indexOf(value) === index);

    return pageCache[pageTemplateId];
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
    const icons = findIcons(out);
    if (icons && icons.length) {
        template.render({ stamp: icons.map(iconName => markupCache[iconName]).join('') }, out);
    }
};

module.exports.privates = { findIcons, pageCache };
