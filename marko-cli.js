'use strict';

module.exports = ({ config }) => {
    config.mochaOptions = { timeout: 60000 };

    config.lassoOptions = {
        flags: [],
        plugins: ['lasso-less'],
    };

    config.wdioOptions = {
        idleTimeout: 60000,
        timeout: 60000,
        capabilities: [
            {
                browser: 'Chrome',
                os: 'Windows',
                os_version: '10',
            },
            {
                browser: 'Chrome',
                os: 'OS X',
                os_version: 'Big Sur',
            },
            {
                browser: 'Safari',
                os: 'OS X',
                os_version: 'Big Sur',
            },
            {
                browser: 'Safari',
                os: 'OS X',
                os_version: 'Catalina',
            },
        ].map((capability) => {
            capability['browserstack.local'] = true;

            return capability;
        }),
    };
};
