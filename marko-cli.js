'use strict';

const isTravis = require('is-travis');

module.exports = markoCli => {
    markoCli.config.browserBuilder = {
        flags: ['skin-ds6'],
        plugins: [
            'lasso-marko',
            'lasso-less'
        ]
    };

    if (isTravis) {
        markoCli.config.puppeteerOptions = { args: ['--no-sandbox'] };
    }
};
