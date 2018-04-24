const template = require('./template.marko');

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
            // push for bfs, unshift for dfs
            currentNode.children.forEach(child => queue.push(child));
        }
    }
}

module.exports = (input, out) => {
    // TODO: better way to get top level cached module?
    const root = require.cache[Object.keys(require.cache)[0]];
    let rootMarkoNode;
    traverse(root, currentNode => {
        if (currentNode.id.endsWith('.marko')) {
            rootMarkoNode = currentNode;
            return true;
        }
    });

    const icons = [];
    traverse(rootMarkoNode, currentNode => {
        if (currentNode.id.includes('/components/ebay-icon/internal/')) {
            icons.push(currentNode.id.substring(currentNode.id.lastIndexOf('/') + 1).replace('.txt', ''));
        }
    });

    template.render({ icons }, out);
};
