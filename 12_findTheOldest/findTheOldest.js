const findTheOldest = function(array) {
    return array.reduce((oldestPerson, currentPerson) => {
        const oldestAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return currentAge > oldestAge ? currentPerson : oldestPerson;
    })
};

const getAge = function (yearOfBirth, yearOfDeath) {
    if (!yearOfDeath) yearOfDeath = (new Date()).getFullYear();
    return yearOfDeath - yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
