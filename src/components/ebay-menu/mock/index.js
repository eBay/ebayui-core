const iconRenderBody = (stream) => stream.write('icon');
const renderBody = (stream) => stream.write('text');
const item = { renderBody };
const items = [item, item, item];

module.exports = { iconRenderBody, renderBody, item, items };
