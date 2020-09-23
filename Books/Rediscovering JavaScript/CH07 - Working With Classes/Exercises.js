'use strict';
/*
    EX:1 - implement a class that produces the expected result
 */

// my code goes
class Book {
    get pages() {
        return this._pages;
    }

    get copiesSold() {
        return this._copiesSold;
    }
    set copiesSold(value) {
        if (value >= 0) {
            this._copiesSold = value;
        } else {
            throw new Error('copiesSold cannot be less than 0');
        }
    }

    constructor(title, author, pages, copiesSold = 0) {
        this.title = title;
        this.author = author;
        this._pages = pages;
        this._copiesSold = copiesSold;
    }
}
// There Code
const book = new Book('who moved my cheese?', 'spencer johnson', 96);
console.log(book.title); // who moved my cheese
console.log(book.pages); // 96

try {
    book.pages = 96;
} catch (ex) {
    console.log(ex.message);
    // pages should only have a getter
}
console.log(book.copiesSold); // 0
book.copiesSold = 1;
console.log(book.copiesSold); // 1

try {
    book.copiesSold = -2;
} catch (ex) {
    console.log(ex.message);
    //value can't be negative
}

console.log(book.copiesSold); // 1

/*
    EX:2  - Classes with static members
    Note - will not run on ts playground, okay in browser
 */

// my code goes  here
class Tax {
    static forAmount(value) {
        return value * Tax.stateRate;
    }
}
Tax.stateRate = 0.08;

// There Code
console.log(Tax.stateRate); // 0.08
console.log(Tax.forAmount(100)); // 8

const forAmount = Tax.forAmount;
this.stateRate = 0.01;
console.log(forAmount.call(this, 100)); // 8

/*
    EX: 3 - Use computed properties
 */

// my code goes  here
class Todo {
    constructor() {
        this['learn JavaScript'] = 'done';
        this['write elegant code'] = 'work in progress';
        this['automate tests'] = 'work in progress';
    }
    get completedCount() {
        let count = 0;
        Object.values(this).forEach((x) => {
            if (x === 'done') count++;
        });
        return count;
    }
}

// There Code

const todo = new Todo();
console.log(todo['learn JavaScript']); // done
console.log(todo['write elegant code']); // work in progress
console.log(todo['automate tests']); // work in progress
console.log(todo.completedCount); // 1

/*
    EX: 4 - Use Map
 */

// my code goes  here
function createTodo() {
    let map = new Map();
    map.set('learn JavaScript', 'done');
    map.set('write elegant code', 'work in progress');
    map.set('automate tests', 'work in progress');
    return map;
}

function completedCount(todo) {
    let count = 0;

    // deconstruct the map
    for (const [book, progress] of todo.entries()) {
        if (progress === 'done') count++;
    }

    return count;
}
// There Code

const todoMap = createTodo(); // returns a map
console.log(todoMap.get('learn JavaScript')); // done
console.log(todoMap.get('write elegant code')); // work in progress
console.log(todoMap.get('automate tests')); // work in progress
console.log(completedCount(todoMap)); // 1
