'use strict';

/*
    EX: 1 - Create FunctionalSet to provide some extensions (filter, map and reduce)
 */

// my code goes here
class FunctionalSet extends Set {
    filter(predicate) {
        return new FunctionalSet([...this].filter(predicate));
    }
    map(mapper) {
        return new FunctionalSet([...this].map(mapper));
    }
    reduce(accumulator, identity) {
        return new FunctionalSet([...this].reduce(accumulator, identity));
    }
}

// my code ends goes here

const set = new FunctionalSet(['Jack', 'Jill', 'Tom', 'Jerry']);

const jSet = set.filter((name) => name.startsWith('J'));
const allCaps = set.map((name) => name.toUpperCase());

const totalLengthOfJWords = set.filter((name) => name.startsWith('J')).reduce((total, word) => total + word.length, 0);

console.log(jSet); // FunctionalSet { 'Jack', 'Jill', 'Jerry' }
console.log(allCaps); // FunctionalSet { 'JACK', 'JILL', 'JERRY' }
console.log(totalLengthOfJWords); // 13
