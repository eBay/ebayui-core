const template = require('./template.marko');

const icons = {};

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
    const rootMarkoNode = require.cache[out.global.pageTemplate.path.replace('.marko.js', '.marko')];
    // TODO: cache icons per pageTemplate
    if (Object.keys(icons).length === 0) {
        traverse(rootMarkoNode, currentNode => {
            if (currentNode.id.includes('/components/ebay-icon/internal/')) {
                icons[currentNode.id.substring(currentNode.id.lastIndexOf('/') + 1).replace('.js', '')] = 1;
            }
        });
    }
    const hasIcons = Object.keys(icons).length > 0;
    template.render({ icons, hasIcons }, out);
};
