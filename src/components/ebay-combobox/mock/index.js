const renderBody = (stream) => stream.write('text');
const options = [{
    value: 1,
    text: 'option 1'
}, {
    value: 2,
    text: 'option 2'
}, {
    value: 3,
    text: 'option 3'
}];

module.exports = {
    renderBody,
    options
};
