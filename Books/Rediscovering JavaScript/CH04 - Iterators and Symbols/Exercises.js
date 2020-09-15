/*
    Ex: 1
 */
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g,', 'h'];

for (let i = 0; i < letters.length; i = i + 3) {
    console.log(letters[i]);
}

/*
    Convert the loop above into an enhanced for loop
 */
for (const [i, letter] of letters.entries()) {
    if (i % 3 === 0) {
        console.log(letter);
    }
}

/*
    Ex: 2
 */

const numbers = [1, 2, 3];
console.log('The Symbol properties in arrays are:');
console.log(Object.getOwnPropertySymbols(Object.getPrototypeOf(numbers)));

/*
    Ex: 3
 */

class Message {
    constructor(text) {
        this.text = text;
    }

    [Symbol.replace](word, substitute) {
        return this.text.replace(word, substitute);
    }
}

const message = new Message('There are no stupid questions.');
console.log('stupid'.replace(message, 's*****'));
//there are no s***** questions.

console.log(''.replace(message, 'Yes, '));
//Yes, There are no stupid questions

/*
    Ex: 4 - Create a generator function to produce a Fibonacci series not exceeding the desired value
 */

//my code goes here

function* fibonacciSeries() {
    let currentTerm = 0;
    let previousTerm = 0;

    while (true) {
        if (currentTerm === 0) {
            yield currentTerm;
            currentTerm = 1;
            yield currentTerm;
        } else {
            currentTerm = previousTerm + currentTerm;
            previousTerm = currentTerm - previousTerm;
            yield currentTerm;
        }
    }
}
for (const value of fibonacciSeries()) {
    if (value > 25) break;
    console.log(value + ', ');
}

const fibonacciSeries_book_example = function* () {
    let current = 1;
    let next = 1;

    yield* [current, next];

    while (true) {
        const temp = current;
        current = next;
        next = next + temp;
        yield next;
    }
};
for (const value of fibonacciSeries_book_example()) {
    if (value > 25) break;
    console.log(value + ', ');
}

/*
    Ex:5 - Limit by a certain number of values
 */

function* fibonacciSeries_limit() {
    let currentTerm = 0;
    let previousTerm = 0;
    let index = 0;

    yield [
        [index++, currentTerm],
        [index++, currentTerm++],
    ];

    while (true) {
        currentTerm = previousTerm + currentTerm;
        previousTerm = currentTerm - previousTerm;
        yield [index++, currentTerm];
    }
}
for (const [index, value] of fibonacciSeries_limit()) {
    if (index > 8) break;
    console.log(value + ', ');
}

const fibonacciSeries_limit_book_example = function* () {
    let current = 1;
    let next = 1;
    let index = 0;

    yield* [
        [index++, current],
        [index++, next],
    ];

    while (true) {
        const temp = current;
        current = next;
        next = next + temp;
        yield [index++, next];
    }
};
for (const [index, value] of fibonacciSeries_limit_book_example()) {
    if (index > 8) break;
    console.log(value + ', ');
}
