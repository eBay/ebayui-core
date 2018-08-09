const iconRenderBody = (stream) => stream.write('icon');
const renderBody = text => stream => stream.write(text);
const items = [{ renderBody: renderBody('1') }, { renderBody: renderBody('2') }];
const items2 = [{ renderBody: renderBody('3') }];

module.exports = { iconRenderBody, renderBody, items, items2 };
