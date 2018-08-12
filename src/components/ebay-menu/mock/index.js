const iconRenderBody = (stream) => stream.write('icon');
const renderBody = text => stream => stream.write(text);
const twoItems = [{ renderBody: renderBody('1') }, { renderBody: renderBody('2') }];
const threeItems = [{ renderBody: renderBody('1') }, { renderBody: renderBody('2') }, { renderBody: renderBody('3') }];

module.exports = { iconRenderBody, renderBody, twoItems, threeItems };
