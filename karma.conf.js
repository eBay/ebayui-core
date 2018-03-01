module.exports = config => {
    config.set({
        singleRun: true, // set to false for debugging
        autoWatch: false,
        frameworks: ['lasso', 'mocha', 'chai'],
        files: ['**/test/fps.js'],
        browsers: ['Chrome'],
        plugins: [
            'karma-lasso',
            'karma-chai',
            'karma-mocha',
            'karma-chrome-launcher'
        ],
        lasso: {
            plugins: [
                'lasso-less',
                'lasso-marko'
            ],
            tempdir: '.karma'
        }
    });
};
