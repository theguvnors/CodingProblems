/*
    EX: 1 -
    Anonymous function have dynamic and lexical scoping
    Arrow functions have only lexical scoping

    **Lexical Scoping**
    The variable may come from where the function is defined

    **Dynamic Scoping**
    The variable is provided by the caller to the function
    (Need to copy this to variable when using an anonymous function)
 */

/*
    EX: 2 - Refactor the following code to make it concise and use arrow function

    'use strict';

    const success = function (value) {
        return { value: value };
    };
    const blowup = function (value) {
        throw new Error('blowing up with value ' + value);
    };
    const process = function (successFn, errorFn) {
        const value = Math.round(Math.random() * 100);
        if (value > 50) {
            return successFn(value);
        } else {
            return errorFn(value);
        }
    };
    try {
        console.log(process(success, blowup));
    } catch (ex) {
        console.log(ex.message());
    }
 */
'use strict';

const success = (value) => ({ value: value });
const blowup = (value) => {
    throw new Error('blowing up with value ' + value);
};
const process = (successFn, errorFn) => {
    const value = Math.round(Math.random() * 100);
    if (value > 50) {
        return successFn(value);
    } else {
        return errorFn(value);
    }
};
try {
    console.log(process(success, blowup));
} catch (ex) {
    console.log(ex.message());
}

/*
    EX: 3 - Convert the below function to an arrow function
    const greet = function (...names) {
        console.log(this + ' ' + names.join(', '));
    };
    const helloJackJill = greet.bind('hello', 'Jack', 'Jill');
    helloJackJill();

    bind/call/reply relies on this, but this is defined in the lexical scope on arrow function so must pass null instead

 */

const greet = (message, ...names) => {
    console.log(message + ' ' + names.join(', '));
};
const helloJackJill = greet.bind(null, 'hello', 'Jack', 'Jill');
helloJackJill();

/*
    EX: 4 - Fix this code
    const sam = { name: 'Sam', age: 2, play: (toy) => 'I Am ' + this.name + ', age ' + this.age + ' with ' + toy };
    console.log(sam.play('ball'));

    ** We had to convert the arrow function to an anonymous function due to thw way dynamic scope works with 'this'
 */

const sam = {
    name: 'Sam',
    age: 2,
    play: function (toy) {
        return 'I Am ' + this.name + ', age ' + this.age + ' with ' + toy;
    },
};
console.log(sam.play('ball'));

/*
    EX: 5 - Rewrite the following imperative code to functional style.
    const numbers = [1, 5, 0.2, 6, 8, 3, 4, 9, 7, 6];
    let totalOfDoubleOfEven = 0;

    for (const number of numbers) {
        if (number % 2 === 0) {
            totalOfDoubleOfEven += number * 2;
        }
    }
    console.log(totalOfDoubleOfEven);
 */

const numbers = [1, 5, 0.2, 6, 8, 3, 4, 9, 7, 6];
let totalOfDoubleOfEven = 0;

for (const number of numbers) {
    if (number % 2 === 0) {
        totalOfDoubleOfEven += number * 2;
    }
}
const total = function (numbers) {
    return numbers
        .filter((x) => x % 2 === 0)
        .map((x) => x * 2)
        .reduce((total, x) => total + x);
};

console.log(totalOfDoubleOfEven);
console.log(total(numbers));
