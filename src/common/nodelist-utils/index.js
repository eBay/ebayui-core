// returns index of first node in NodeList with matching first character (case-insenstive)
function findNodeWithFirstChar(nodeList, char) {
    return [...nodeList].findIndex((el) => el.innerText.charAt(0).toLowerCase() === char.toLowerCase());
}

module.exports = {
    findNodeWithFirstChar
};
