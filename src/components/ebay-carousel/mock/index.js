const renderBody = (stream) => stream.write('text');
const itemWidth = 200;
const item = { renderBody, '*': { style: `width:${itemWidth}px` } };
const threeItems = [item, item, item];
const sixItems = threeItems.concat(threeItems);
const twelveItems = sixItems.concat(sixItems);

// mocks for visual debugging
const debugItem = { renderBody, '*': { style: `height:200px;width:400px;background:gray` } };
const debugItems = [debugItem, debugItem, debugItem, debugItem, debugItem, debugItem];

module.exports = { renderBody, itemWidth, item, threeItems, sixItems, twelveItems, debugItems };
