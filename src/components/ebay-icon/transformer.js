const path = require('path');

/**
 * @description
 * Inlines the symbol component as the body of the `ebay-icon` component (inline components only).
 *
 * @example
 * <ebay-icon type="inline" name="close"/>
 *
 * Becomes
 *
 * <ebay-icon type="inline" name="close"><include('$DIRNAME/symbols/close.marko')/></ebay-icon>
 */

function transform(el, context) {
    const { builder } = context;
    const nameAttribute = el.getAttribute('name');
    const typeAttribute = el.getAttribute('type');
    const symbolPathAttribute = el.getAttribute('path');
    const isInline = typeAttribute && typeAttribute.value.value === 'inline';
    const iconName = nameAttribute && nameAttribute.value.value;
    if (isInline && iconName) {
        const symbolPath = isSupportedCustomPathAttr(symbolPathAttribute) ? extractPathFromAttr(symbolPathAttribute, context) : path.join(__dirname, 'symbols');
        const iconPath = path.join(symbolPath, iconName);
        const ds4Path = path.join(iconPath, 'index.marko');
        const ds6Path = path.join(iconPath, 'index[skin-ds6].marko');
        if (!el.hasAttribute('w-id') && context.compilerVersion && context.compilerVersion.indexOf('4.') !== 0) {
            // can be removed in Marko 4
            el.setAttributeValue('id',
                builder.expression(`typeof widget !== "undefined" && widget.elId("use_icon_${iconName}")`));
        }
        el.setAttributeValue('_themes', context.addStaticVar(`icon_${iconName}`, builder.arrayExpression([
            toRequire(ds4Path),
            toRequire(ds6Path)
        ])));
    }

    return context;

    function toRequire(file) {
        return `require(${JSON.stringify(context.getRequirePath(file))})`;
    }
}

function extractPathFromAttr(symbolPathAttribute, context) {
    const symbolPath = symbolPathAttribute.value.value;
    if (path.isAbsolute(symbolPath)) {
        return symbolPath;
    } else {
        return path.join(context.dirname, symbolPath);
    }
}

function isSupportedCustomPathAttr(symbolPathAttribute) {
    const isSupported = symbolPathAttribute && symbolPathAttribute.value && symbolPathAttribute.value.value;
    if (symbolPathAttribute && !isSupported) {
        console.warn('The entered path format is not supported. Valid example: <ebay-icon type="inline" name="custom-add" path="./custom-symbols" />');
    }
    return isSupported;
}

module.exports = transform;



git reset -- docs/ds4/main.3b221178541d2abad87f.bundle.js
git reset -- docs/ds4/main.761d1b36a14e7772b043.bundle.js
git reset -- docs/ds4/runtime~main.3b221178541d2abad87f.bundle.js
git reset -- docs/ds4/vendors~main.3b221178541d2abad87f.bundle.js
git reset -- docs/ds4/vendors~main.7a59dc686ceb14be642b.bundle.js
git reset -- docs/iframe.html
git reset -- docs/index.html
git reset -- docs/main.761d1b36a14e7772b043.bundle.js
git reset -- docs/main.d1c195dd35e6c5f4c057.bundle.js
git reset -- docs/runtime~main.d1c195dd35e6c5f4c057.bundle.js
git reset -- docs/vendors~main.7a59dc686ceb14be642b.bundle.js
git reset -- docs/vendors~main.d1c195dd35e6c5f4c057.bundle.js
git reset -- src/components/ebay-button/examples/01-primary/template.marko
git reset -- src/components/ebay-button/examples/02-raw/template.marko
git reset -- src/components/ebay-button/examples/03-delete/template.marko
git reset -- src/components/ebay-button/examples/04-large/template.marko
git reset -- src/components/ebay-button/examples/05-fake/template.marko
git reset -- src/components/ebay-button/examples/06-disabled/template.marko
git reset -- src/components/ebay-button/examples/07-partially-disabled/template.marko
git reset -- src/components/ebay-button/examples/08-fluid/template.marko
git reset -- src/components/ebay-button/examples/09-primary-large-fluid/template.marko
git reset -- src/components/ebay-button/examples/10-fixed-height/template.marko
git reset -- src/components/ebay-button/examples/12-truncated/template.marko
git reset -- src/components/ebay-button/examples/11-icon-button/template.marko

git reset --   .idea/codeStyles/Project.xml
git reset --   .idea/codeStyles/codeStyleConfig.xml
git reset --   .idea/inspectionProfiles/Project_Default.xml
git reset --   docs/ds4/index.html
