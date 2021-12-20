const defaultDS = '6';

const DSData = [
    {
        name: '6',
    },
    {
        name: '4',
        flags: 'ds-4',
    },
];

const dsList = DSData.map((ds) => ds.name);
const dsIconThemes = dsList.map((key) => `ds${key}`);

const dsFilenames = {};
const dsFlags = {};
const flagToDS = [];

DSData.forEach((data) => {
    const key = data.name;
    const flag = data.flags || '';
    let text = '';
    dsFlags[key] = [];
    if (flag) {
        dsFlags[key].push(flag);
        text = `[${flag}]`;
    }

    dsFilenames[key] = `./symbol${text}.js`;
    flagToDS.push(flag);
});

const requireRemap = dsList
    .filter((key) => key !== defaultDS)
    .map((key) =>
        Object.assign(
            {
                from: dsFilenames[defaultDS],
                to: dsFilenames[key],
            },
            { 'if-flag': dsFlags[key].join('') }
        )
    );

requireRemap.reverse();

function getDSVersion(dsV) {
    const dsVFull = dsV || defaultDS;
    const dsVCheck = dsVFull.startsWith('ds') ? dsVFull.substring(2) : dsVFull;
    return dsVCheck;
}

function getDSFlags(dsV) {
    const dsVCheck = getDSVersion(dsV);
    const currentA = dsFlags[dsVCheck] || dsFlags[defaultDS];
    const selectedDS = currentA.join('');
    const ret = {};
    if (selectedDS) {
        ret[selectedDS] = true;
    }
    return ret;
}

function getIndexFromFlag(flags) {
    const obj = DSData.findIndex((data) => flags && flags.indexOf(data.flags) > -1);
    return obj === -1 ? 0 : obj;
}

module.exports = {
    getDSFlags,
    getDSVersion,
    getDSFromFlag: getIndexFromFlag,
    dsFlags,
    dsList,
    dsFilenames,
    requireRemap,
    dsIconThemes,
    defaultDS,
};
