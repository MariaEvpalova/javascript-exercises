const palindromes = function (str) {
    let strLocal = str.toLowerCase().replace(/[^\w\s\']|_/g, "").split(' ').join('');;
    return strLocal.split("").reverse().join("") == strLocal;
};

// Do not edit below this line
module.exports = palindromes;
