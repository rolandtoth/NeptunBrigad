module.exports = (collection) => {
    return collection.filter(item => item.data.active !== false);
}