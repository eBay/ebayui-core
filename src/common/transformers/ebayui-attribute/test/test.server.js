const fs = require('fs');
const path = require('path');
const expect = require('chai').expect;
const transformer = require('../');
const testUtils = require('../../../test-utils/server');

describe('when the ebay-button template is transformed', () => {
    let outputTemplate;

    beforeEach(() => {
        const rootTag = 'ebay-button';
        const templatePath = path.join(__dirname, `../../../../components/${rootTag}/template.marko`);
        const templateSrc = fs.readFileSync(templatePath, 'utf8');
        outputTemplate = testUtils.getTransformedTemplate(transformer, templateSrc, templatePath);
    });

    test('transforms the ebay-button template to include a data-ebayui attribute', () => {
        expect(outputTemplate).to.contain('data-ebayui=true');
    });
});
