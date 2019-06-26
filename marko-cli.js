'use strict';

const isTravis = require('is-travis');
const buildID = `${process.env.TRAVIS_BUILD_NUMBER}.${process.env.TRAVIS_JOB_NUMBER}`;

module.exports = ({ config }) => {
    config.mochaOptions = { timeout: 20000 };
    config.lassoOptions = {
        flags: ['skin-ds6'],
        plugins: ['lasso-less'],
        require: isTravis && {
            transforms: [{
                transform: 'lasso-babel-transform'
            }]
        }
    };

    config.wdioOptions = {
        browserstackOpts: {
            force: true,
            onlyAutomate: isTravis,
            localIdentifier: buildID
        },
        capabilities: [{
            browser: 'Chrome',
            os: 'Windows',
            os_version: '10'
        // }, {
        //     // Browser tries to navigate from `<ebay-breadcrumb>` tests.
        //     browser: 'Chrome',
        //     browser_version: '49.0',
        //     os: 'Windows',
        //     os_version: '7'
        }, {
            browser: 'Firefox',
            os: 'Windows',
            os_version: '10'
        // }, {
        //     // Escape keypress not handled from `<ebay-menu>` tests.
        //     browser: 'Firefox',
        //     browser_version: '48.0',
        //     os: 'Windows',
        //     os_version: '7'
        }, {
            // Browser tries to navigate from `<ebay-breadcrumb>` tests.
            browser: 'Safari',
            os: 'OS X',
            os_version: 'Mojave'
        // }, {
        //     // Unknown error.
        //     browser: 'Safari',
        //     browser_version: '6.0',
        //     os: 'OS X',
        //     os_version: 'Lion'
        // }, {
        //     // Browser tries to navigate from `<ebay-breadcrumb>` tests.
        //     browser: 'Edge',
        //     os: 'Windows',
        //     os_version: '10'
        // }, {
        //     // Browser tries to navigate from `<ebay-breadcrumb>` tests.
        //     browser: 'Edge',
        //     browser_version: '14.0',
        //     os: 'Windows',
        //     os_version: '10'
        // }, {
        //     // Not compiling properly.
        //     browser: 'IE',
        //     os: 'Windows',
        //     os_version: '10'
        // }, {
        //     // Does not support custom viewport sizing.
        //     browser: 'Opera',
        //     browser_version: '12.16',
        //     os: 'Windows',
        //     os_version: '7'
        }].map(capability => {
            capability.build = buildID;
            capability.project = 'ebayui-core';
            capability['browserstack.local'] = true;
            capability['browserstack.debug'] = true;
            capability['browserstack.localIdentifier'] = buildID;
            return capability;
        })
    };
};
