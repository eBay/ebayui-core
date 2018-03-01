'use strict';

module.exports = markoCli => {
    markoCli.config.browserBuilder = {
        plugins: [
            'lasso-marko',
            'lasso-less'
        ]
    };
};
