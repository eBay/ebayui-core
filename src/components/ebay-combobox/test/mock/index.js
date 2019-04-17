module.exports = {
    renderBody: (stream) => stream.write('text'),
    options: [{
        value: 1,
        text: 'option 1'
    }, {
        value: 2,
        text: 'option 2'
    }, {
        value: 3,
        text: 'option 3'
    }],
    zeroOptions: []
};
