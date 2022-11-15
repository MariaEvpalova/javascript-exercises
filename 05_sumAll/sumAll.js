const sumAll = function(n1, n2) {
    if (typeof n1 != 'number' || typeof n2 != 'number'
        || n2 < 0|| n1 < 0) return 'ERROR'
    return ((n2 > n1 ? n2-n1 : n1-n2)+1) * (n1 + n2) / 2;
};

// Do not edit below this line
module.exports = sumAll;
