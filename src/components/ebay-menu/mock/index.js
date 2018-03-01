const renderBody = (stream) => stream.write('text');
const item = { renderBody };
const items = [item, item, item];

module.exports = { renderBody, item, items };
