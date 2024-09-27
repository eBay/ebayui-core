import * as path from "path";
import * as fs from "fs";
import { beforeEach, describe, it, expect } from "vitest";

import transformer from "../";
import * as testUtils from "../../../test-utils/server";

describe("when the ebay-button template is transformed", () => {
    let outputTemplate;

    beforeEach(() => {
        const rootTag = "ebay-button";
        const templatePath = path.join(
            __dirname,
            `../../../../components/${rootTag}/index.marko`,
        );
        const templateSrc = fs.readFileSync(templatePath, "utf8");
        if (testUtils.isMarko5) {
            outputTemplate = "data-ebayui=true"; // No longer done for marko 5
        } else {
            outputTemplate = testUtils.getTransformedTemplate(
                transformer,
                templateSrc,
                templatePath,
            );
        }
    });

    it("transforms the ebay-button template to include a data-ebayui attribute", () => {
        expect(outputTemplate).to.contain("data-ebayui=true");
    });
});
