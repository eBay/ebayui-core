function _getType(step) {
    let type = step.type;
    if (step.number) {
        type = 'default';
    }
    return type;
}

module.exports = {
    getCurrent(step) {
        return (step || []).findIndex((item) => item.current);
    },
    getStepClass(index, current, list) {
        const step = list[index];
        let itemClass = _getType(step);
        const next = list && list[index + 1];
        const transition = next && _getType(next);

        if (!itemClass) {
            if (index < current) {
                itemClass = 'confirmation';
            } else if (index === current) {
                itemClass = 'current';
            } else {
                itemClass = 'upcoming';
            }
        }
        return {
            itemClass,
            transition,
        };
    },
};
