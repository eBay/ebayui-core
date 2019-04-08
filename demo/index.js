require('marko/node-require').install();
const fs = require('fs');
const path = require('path');
const lasso = require('lasso');
const express = require('express');
const highlight = require('gh-highlight');
const demoUtils = require('./utils.js');
const template = require('./template.marko');

const app = express();
const defaultComponentRoute = 'ebay-button';

let transforms;
if (process.env.NODE_ENV === 'production') {
    transforms = [{ transform: 'lasso-babel-transform' }];
}

lasso.configure({
    outputDir: `${__dirname}/static`,
    plugins: ['lasso-marko', 'lasso-less'],
    require: { transforms }
});

app.use(require('lasso/middleware').serveStatic());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.redirect(301, '/ds6');
});

app.get('/ds4', (req, res) => {
    res.redirect(301, `/ds4/${defaultComponentRoute}`);
});

app.get('/ds6', (req, res) => {
    res.redirect(301, `/ds6/${defaultComponentRoute}`);
});

app.get('/:designSystem/:component?', (req, res) => {
    const name = req.params.component;
    const componentsPath = path.join(__dirname, '/../src/components');
    const componentPath = path.join(componentsPath, name);
    const examplesPath = path.join(componentPath, 'examples');
    const model = {
        name: req.params.component,
        examples: fs.readdirSync(examplesPath).map(example => {
            const examplePath = path.join(examplesPath, example);
            const exampleTemplatePath = path.join(examplePath, 'template.marko');
            return {
                num: parseInt(example.split('-')[0]),
                name: example.split('-').slice(1, example.length).join(' '),
                code: highlight.sync(fs.readFileSync(exampleTemplatePath, 'utf8'), 'marko'),
                sources: [componentPath, examplePath],
                templatePath: exampleTemplatePath,
                template: require(exampleTemplatePath)
            };
        }).filter(demoUtils.isDirectory),
        components: demoUtils.getComponentsWithExamples('src')
    };

    const dsFlag = req.params.designSystem === 'ds6' ? 'skin-ds6' : '';
    const lassoFlags = ['ebayui-no-bg-icons'];

    // allow .only in example folder name
    model.examples.some((example) => {
        if (example.name.includes('.only')) {
            model.examples = model.examples.filter(ex => ex.name.includes('.only'));
            return true;
        }
    });

    model.dependencies = model.examples.map(example => example.templatePath);

    req.model = model;

    lassoFlags.push(dsFlag);

    req.lassoFlags = lassoFlags;

    template.render(req, res);
});

app.listen(3000, () => {
    if (process.send) {
        process.send('online'); // browser-refresh
    }
});
