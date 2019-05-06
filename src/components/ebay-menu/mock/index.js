const iconRenderBody = (stream) => stream.write('icon');
const renderBody = text => stream => stream.write(text);
const twoItems = [{ renderBody: renderBody('a') }, { renderBody: renderBody('b') }];
const threeItems = [{ renderBody: renderBody('a') }, { renderBody: renderBody('b') }, { renderBody: renderBody('c') }];

module.exports = { iconRenderBody, renderBody, twoItems, threeItems };
