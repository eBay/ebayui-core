import { render, prettyDOM } from '@marko/testing-library';
import snap from 'mocha-snap';

function snapshotNode(dirname) {
    return (container) => snap(container, '.html', dirname);
}

async function snapshotHTML(template, input, dirname) {
    const localSnap = snapshotNode(dirname);
    const { container } = await render(template, input);
    await localSnap(prettyDOM(container));
}

export { snapshotHTML, snapshotNode };
