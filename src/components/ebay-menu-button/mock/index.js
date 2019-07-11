const iconRenderBody = (stream) => stream.write('icon');
const renderBody = text => stream => stream.write(text);
const customLabel = { renderBody: renderBody('<span class="custom_label">customLabel</span>') };
const twoItems = [{ renderBody: renderBody('a') }, { renderBody: renderBody('b') }];
const threeItems = [{ renderBody: renderBody('a') }, { renderBody: renderBody('b') }, { renderBody: renderBody('c') }];

module.exports = { iconRenderBody, renderBody, customLabel, twoItems, threeItems };
