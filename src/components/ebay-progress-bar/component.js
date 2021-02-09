module.exports = {
    getValue(value, min, max) {
        const parsedValue = parseInt(value);
        if (parsedValue <= min) {
            return min + 1;
        } else if (parsedValue >= max) {
            return max - 1;
        }
        return parsedValue;
    }
};
