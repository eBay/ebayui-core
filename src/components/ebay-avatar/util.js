const backgroundColors = [
    "teal",
    "light-teal",
    "green",
    "lime",
    "yellow",
    "orange",
    "magenta",
];

/**
 * It will hash the username and find the color based on the hash
 * @param {string} username Username to hash
 * @param {string} color Color to use to override the hash
 */
function getColorForText(username, color) {
    if (color) return color;

    let hash = 0,
        chr,
        i;
    if (username && username.length > 0) {
        for (i = 0; i < username.length; i++) {
            chr = username.charCodeAt(i);
            hash = (hash << 5) - hash + chr;
            hash |= 0; // Convert to 32bit integer
        }
    }
    const colorCount = backgroundColors.length;
    const index = hash % colorCount;
    return backgroundColors[index];
}
export { getColorForText };
