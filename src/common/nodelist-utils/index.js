// returns first node in list with matching first character (case-insenstive)
function findNodeWithFirstChar(nodeList, char) {
    // e.g. <li>A</li><li>B</li><li></li><li>B</li><li>A</li>

    const keyValuePairList = [...nodeList].map((el, index) => ({ [el.innerText.charAt(0).toLowerCase()]: index }));
    // e.g. [{a: 0}, {b: 1}, {'': 2}, {b: 3}, {a: 4}]

    const charMap = Object.assign(...keyValuePairList.reverse());
    // e.g. {a: 0, b: 1, '': 2}

    return charMap[char];
}

module.exports = {
    findNodeWithFirstChar
};
