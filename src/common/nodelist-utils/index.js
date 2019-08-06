const findIndex = require('core-js-pure/features/array/find-index');
// returns index of first node in NodeList with matching first character (case-insenstive)
function findNodeWithFirstChar(nodeList, char) {
    return findIndex(nodeList, (el) => el.innerText.charAt(0).toLowerCase() === char.toLowerCase());
}

module.exports = {
    findNodeWithFirstChar
};
