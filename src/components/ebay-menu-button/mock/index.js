const FIRST_ITEM_TEXT = 'a';
const SECOND_ITEM_TEXT = 'b';
const THIRD_ITEM_TEXT = 'c';
const getInput = text => ({ renderBody: stream => stream.write(text) });
const twoItems = [getInput(FIRST_ITEM_TEXT), getInput(SECOND_ITEM_TEXT)];
const threeItems = [getInput(FIRST_ITEM_TEXT), getInput(SECOND_ITEM_TEXT), getInput(THIRD_ITEM_TEXT)];

module.exports = { twoItems, threeItems, FIRST_ITEM_TEXT, SECOND_ITEM_TEXT, THIRD_ITEM_TEXT };
