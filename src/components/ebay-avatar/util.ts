const backgroundColors = [
    "teal",
    "light-teal",
    "green",
    "lime",
    "yellow",
    "orange",
    "magenta",
    "pink",
];

function getColorForText(username?: string, color?: string) {
    if (color) return color;

    let hash = 0,
        chr: number,
        i: number;
    if (username && username.length > 0) {
        for (i = 0; i < username.length; i++) {
            chr = username.charCodeAt(i);
            hash = (hash << 5) - hash + chr;
            hash |= 0; // Convert to 32bit integer
        }
    }
    const colorCount = backgroundColors.length;
    const index = Math.abs(hash) % colorCount;
    return backgroundColors[index];
}

export { getColorForText };
