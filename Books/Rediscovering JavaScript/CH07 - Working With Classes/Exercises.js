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
