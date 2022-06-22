import { expect } from 'chai';
import * as testUtils from '../../../test-utils/server';
import { snapshotNode } from '../../../../common/test-utils/snapshots';
const transformer = require('../');

const snapDOM = snapshotNode(__dirname);

describe('when the ebay-menu-separator tag is transformed', () => {
    let outputTemplate;
    let code;

    beforeEach(() => {
        const templatePath = `src/components/ebay-menu/index.marko`;
        if (testUtils.isMarko5) {
            code = testUtils.runTransformer(
                transformer,
                '<ebay-menu><@separator/></ebay-menu>',
                templatePath
            ).code;
        } else {
            outputTemplate = testUtils.getTransformedTemplate(
                transformer,
                '@separator',
                templatePath
            );
        }
    });

    it('transforms the ebay-menu-separator', async () => {
        if (code) {
            await snapDOM(code);
        } else {
            expect(outputTemplate).to.deep.equal('<@item separator=true/>');
        }
    });
});
