'use strict';
/*
    EX: 1 - Implement greet method using template literals
 */
const greet = function (name, gender) {
    return `Hello, ${gender === Symbol.for('female') ? 'Ms.' : 'Mr.'} ${name}`;
};

console.log(greet('Sara', Symbol.for('female'))); // Hello, Ms. Sara
console.log(greet('Tom', Symbol.for('male'))); // Hello, Mr. Tom
