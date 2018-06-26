const renderBody = (stream) => stream.write('text');
const options = [{
    value: 1,
    label: 'option 1'
}, {
    value: 2,
    label: 'option 2'
}, {
    value: 3,
    label: 'option 3'
}];

module.exports = {
    renderBody,
    options
};
