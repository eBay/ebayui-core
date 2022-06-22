import { render, prettyDOM } from '@marko/testing-library';
import snap from 'mocha-snap';

function snapshotNode(dirname) {
    return (container) => snap(container, '.html', dirname);
}

function snapshotHTML(dirname) {
    const localSnap = snapshotNode(dirname);
    return async (template, input) => {
        const { container } = await render(template, input);
        await localSnap(prettyDOM(container));
    };
}

export { snapshotHTML, snapshotNode };
