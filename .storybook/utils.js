let fileMather = /([^\/]+)\/examples\/(?:(?:\d+-)?([^\/]+)\/)?\d+-([^\/]+)/;

function parseFile(file) {
    const match = fileMather.exec(file);
    if (match) {
        const [, tag, group, title] = match;
        let fulltag = tag;
        let fulltagId = tag;
        if (group) {
            fulltag = `${tag}/${group}`;
            fulltagId = `${tag}-${group}`;
        }
        return { tag, group, title, fulltag, fulltagId };

    }
    return {};

}

module.exports = {
    parseFile
};
