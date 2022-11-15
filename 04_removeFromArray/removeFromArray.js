const removeFromArray = function(...args) {
    const array = args[0];
    let new_array = []
    for (item of array) {
        if (!args.includes(item)) new_array.push(item);
    }
    return new_array;
};

// Do not edit below this line
module.exports = removeFromArray;
