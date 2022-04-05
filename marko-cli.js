'use strict';

module.exports = ({ config }) => {
    config.mochaOptions = {
        timeout: 60000,
        require: ['mocha-snap'],
    };

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
        ].map((capability) => {
            capability['browserstack.local'] = true;

            return capability;
        }),
    };
};
