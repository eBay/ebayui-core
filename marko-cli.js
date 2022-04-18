'use strict';

module.exports = ({ config }) => {
    config.mochaOptions = {
        timeout: 60000,
        require: ['@babel/register', 'mocha-snap', './src/common/test-utils/require-extensions.js'],
    };

    config.lassoOptions = {
        flags: [],
        plugins: ['./src/common/test-utils/lasso-require-extensions.js', 'lasso-less'],
        require: {
            transforms: [
                {
                    transform: './src/common/test-utils/lasso-require-transform.js',
                },
                {
                    transform: 'lasso-babel-transform',
                },
            ],
        },
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
