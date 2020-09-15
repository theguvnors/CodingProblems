/*
    Dont use ==  use === instead.
    == will coerce the values so they are both the same type

    != is okay when comparing nulls and undefined

    Dont Use var - Use const or let if you need the value to change
    var doesnt have block scope, const and let does

    All ways terminate lines with ';' other the JS engine will add them for you. - Dont need to after '}'



 */

/* EX:3 */
function canVote(age) {
    age = +age;
    if (typeof age === 'number') {
        if (age === 18) {
            return 'yay, can vote';
        } else if (age > 18) {
            return 'please vote';
        }
    }

    return 'no, cant vote';
}

console.log(canVote(12));
console.log(canVote('12'));
console.log(canVote(17));
console.log(canVote('@18'));
console.log(canVote(18));
console.log(canVote(28));

/*EX:4*/
/*
// Original Broken code
var isPrime = function (n) {
    for (i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return n > 1;
};

var sumOfPrimes = function (n) {
    var sum = 0;
    for (i = 1; i <= n; i++) {
        if (isPrime(i)) sum += 1;
    }
    return sum;
};
*/
const isPrime = function (n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return n > 1;
};

const sumOfPrimes = function (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) sum += i;
    }
    return sum;
};

console.log(sumOfPrimes(10));

/*EX:5*/
/*
var isPerfect = function (number) {
    var sumOfFactors = 0;

    for (index = 1; index <= number; index++) {
        if (number % index == 0) {
            sumOfFactors += index;
        }
    }

    return sumOfFactors
        == number * 2; //needs to be o line underneath for error
};

for (i = 1; i <= 10; i++) {
    console.log('is ' + i + ' perfect?: ' + isPerfect(i));
}

is 1 perfect?: false
is 2 perfect?: false
is 3 perfect?: false
is 4 perfect?: false
is 5 perfect?: false
is 6 perfect?: true
is 7 perfect?: false
is 8 perfect?: false
is 9 perfect?: false
*/

const isPerfect = function (number) {
    let sumOfFactors = 0;

    for (let index = 1; index <= number; index++) {
        if (number % index === 0) {
            sumOfFactors += index;
        }
    }

    return sumOfFactors === number * 2; //needs to be o line underneath for error
};

for (let i = 1; i <= 10; i++) {
    console.log('is ' + i + ' perfect?: ' + isPerfect(i));
}
