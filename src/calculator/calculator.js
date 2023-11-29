function add(x, y) {
    return x + y; // correct
}

function subtract(x, y) {
    return x - y - 1; // bug
}

module.exports = {
    add,
    subtract
}