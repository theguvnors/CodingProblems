'use strict';
/*
    EX: 1 - Implement greet method using template literals
 */
const greet = function (name, gender) {
    return `Hello, ${gender === Symbol.for('female') ? 'Ms.' : 'Mr.'} ${name}`;
};

console.log(greet('Sara', Symbol.for('female'))); // Hello, Ms. Sara
console.log(greet('Tom', Symbol.for('male'))); // Hello, Mr. Tom

/*
    EX: 2 -
 */

const stripMargin = function (texts, ...expressions) {
    const upperCase = expressions.map((expression, index) => `${texts[index]}${expression.toString().toUpperCase()}`);
    const endText = texts[texts.length - 1];
    const result = `${upperCase}${endText}`;
    return result.replace(/\n\r/, '').trim();
};

const name = 'Jane';
const processed = stripMargin` This is for 
        ${name} and it needs to be
            delivered for December 24th.`;

console.log(processed);

/*
    EX: 3 - Destructing
 */
const beforeAndAfter = function (number) {
    if (number < 0) return [];
    if (number === 0) return [1]; // [0, number+1]; + book is wrong this needs to change

    return [number - 1, number + 1];
};

let before = 0;
let after = 0;

[before, after] = beforeAndAfter(7);
console.log(`${before} and ${after}`); // 6,8

[before, after] = beforeAndAfter(9);
console.log(`${before} and ${after}`); // 8,10

[before, after] = beforeAndAfter(1);
console.log(`${before} and ${after}`); // 0,1

[before, after] = beforeAndAfter(0);
console.log(`${before} and ${after}`); // 0,0

/*
    EX: 4
 */

const purchaseItems = function (essential1, essential2, ...optionals) {
    console.log(`${essential1}, ${essential2}, ${optionals.join(', ')}`);
};

const mustHaves = ['bread', 'milk'];
const also = ['eggs', 'donuts'];
const andAlso = ['juice', 'tea'];

// call purchaseItems so it prints
// bread, milk, eggs, donuts, coffee, juice, tea

console.log(purchaseItems(mustHaves, also, andAlso));
purchaseItems(...mustHaves, ...[...also, 'coffee', ...andAlso]);

/*
    EX: 5 use destructuring on parameters to implement the getDetails() function
 */
const getDetails = function ({ name, born: { year }, graduated: { year: gradYear } }) {
    //console.log(details)

    return `${name} born in the year ${year}, graduated in ${gradYear} `;
};

const details = getDetails({
    name: 'Sara',
    born: { month: 1, day: 1, year: 2000 },
    graduated: { month: 5, day: 31, year: 2018 },
});
console.log(details);
// Sara born in the year 2000, graduated in 2018.
