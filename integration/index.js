const fs = require('fs');
const execSync = require('child_process').execSync;
const express = require('express');
const async = require('async');
const lasso = require('lasso');
const markoNodeHook = require('marko/node-require');
const port = 9999;
const request = require('supertest')(`http://localhost:${port}`);
const demoUtils = require('../demo/utils');

execSync('npm run prepublishOnly');
async.forEachSeries([4], (markoVersion, callback) => {
    // need to manually call install() in v3
    if (markoNodeHook.install) {
        markoNodeHook.install();
    }

    lasso.configure({ plugins: ['lasso-marko', 'lasso-less'], outputDir: `${__dirname}/static` });
    let template = require('./base.marko');

    const app = express();
    app.use(require('lasso/middleware').serveStatic());
    app.use(express.static(__dirname));
    app.get('/', (req, res) => {
        template.render({}, res);
    });

    describe(`integration with marko v${markoVersion}`, () => {
        let server;

        before((done) => {
            server = app.listen(port, done);
        });

        demoUtils.getComponentsWithExamples('dist').forEach((componentName) => {
            describe(componentName, () => {
                const examplesPath = `${__dirname}/../dist/components/${componentName}/examples`;
                // TODO need to fix this for nested examples
                // Use glob pattern to get nested examples
                // This is broken for marko 4 because of classes, and is not needed until we use marko 5
                fs.readdirSync(examplesPath).map(example => ({
                    example,
                    markup: fs.readFileSync(`${examplesPath}/${example}/template.marko`, 'utf8')
                })).forEach((exampleData) => {
                    let templateMarkup = fs.readFileSync(`${__dirname}/base.marko`, 'utf8');
                    templateMarkup = templateMarkup.replace('#INJECT#', exampleData.markup);
                    fs.writeFileSync(`${__dirname}/template.marko`, templateMarkup);

                    // clear cache of previously loaded template
                    delete require.cache[require.resolve('./template.marko')];
                    template = require('./template.marko');

                    it(`loads page with ${exampleData}`, (done) => {
                        request.get('/').expect(200, done);
                    });
                });
            });
        });

        after(function() { // eslint-disable-line prefer-arrow-callback
            this.timeout(60000);
            server.close();
            callback();
        });
    });
}, () => {
    execSync('npm run postpublish');
});
