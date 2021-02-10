module.exports = {
    getValue(value, min) {
        const parsedValue = parseInt(value, 10);
        if (parsedValue <= min) {
            return min + 1;
        }
        return parsedValue;
    }
};
