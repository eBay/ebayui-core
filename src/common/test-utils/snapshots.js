import { render, prettyDOM } from "@marko/testing-library";
import { expect } from "vitest";

function snapshotHTML() {
    return async (template, input) => {
        const { container } = await render(template, input);
        expect(prettyDOM(container)).toMatchSnapshot();
    };
}

export { snapshotHTML };
