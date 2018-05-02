require('marko/node-require').install();
const fs = require('fs');
const lasso = require('lasso');
const express = require('express');
const highlight = require('gh-highlight');
const MobileDetect = require('mobile-detect');
const demoUtils = require('./utils.js');
const template = require('./template.marko');

const app = express();

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
    res.redirect(301, '/ebay-button');
});

app.get('/:component?', (req, res) => {
    const name = req.params.component;
    const componentsPath = `${__dirname}/../src/components`;
    const examplesPath = `${componentsPath}/${name}/examples`;
    const model = {
        name: req.params.component,
        examples: fs.readdirSync(examplesPath).map(example => ({
            num: parseInt(example.split('-')[0]),
            name: example.split('-').slice(1, example.length).join(' '),
            code: highlight.sync(fs.readFileSync(`${examplesPath}/${example}/template.marko`, 'utf8'), 'marko'),
            sources: [`${componentsPath}/${name}`, examplesPath, `${examplesPath}/${example}`],
            path: `${examplesPath}/${example}`
        })).filter(demoUtils.isDirectory),
        components: demoUtils.getComponentsWithExamples('src')
    };

    // allow .only in example folder name
    model.examples.some((example) => {
        if (example.name.includes('.only')) {
            model.examples = model.examples.filter(ex => ex.name.includes('.only'));
            return true;
        }
    });

    req.model = model;

    const md = new MobileDetect(req.headers['user-agent']);
    const lassoFlags = ['skin-ds6'];
    if (md.mobile() || md.tablet()) {
        lassoFlags.push('touch');
    } else {
        lassoFlags.push('no-touch');
    }
    req.lassoFlags = lassoFlags;

    template.render(req, res);
});

app.listen(3000, () => {
    if (process.send) {
        process.send('online'); // browser-refresh
    }
});
