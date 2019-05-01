module.exports = function(query = '') {
    return new RegExp(query.trim().replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'i');
};
