const renderBody = (stream) => stream.write('text');
const itemWidth = 200;
const item = { renderBody, '*': { style: `width:${itemWidth}px` } };
const items = [item, item, item, item, item, item];

// mocks for visual debugging
const debugItem = { renderBody, '*': { style: `height:200px;width:400px;background:gray` } };
const debugItems = [debugItem, debugItem, debugItem, debugItem, debugItem, debugItem];

module.exports = { renderBody, itemWidth, item, items, debugItems };
