/*
    Default Function Parameter values
    We can now supply default values for function parameters. function (foo = bar) {}
    Can have functions as default parameters

    Rest operator Parameter
    We can now use the rest operator at the end of function parameter lists, this allows us to
    send and optional array of parameters function restTest (foo, ...bar){}. restTest(1, [1,2,3])

    Spread operator (...)
    We can use the spread operator to expand or spread the contained values into discrete values
    We can use the spread operator to copy, concatenate and manipulate arrays
    const foo = [1,2];
    const bar = [...foo, 3, 4]; // 1,2,3,4

    const person = {name: dean, age: 35}
    {...person, age: 25 } // change a property
    {..person, gender:'male'}  // add a property

 */

// EX1
const amountAfterTaxes = function (amount, ...taxes) {
    const computeTaxForAmount = function (tax) {
        return (amount * tax) / 100.0;
    };
    const totalValues = function (total, value) {
        return total + value;
    };
    return taxes.map(computeTaxForAmount).reduce(totalValues, amount).toFixed(2);
};

const amount = 25.12;
const fedTax = 10;
const stateTax = 2;
const localTax = 0.5;

console.log(amountAfterTaxes(amount)); // 25.12 .
console.log(amountAfterTaxes(amount, fedTax)); // 27.63 .
console.log(amountAfterTaxes(amount, fedTax, stateTax)); // 28.13
console.log(amountAfterTaxes(amount, fedTax, stateTax, localTax)); // 28.26

// EX2
const purchaseItems = function (essential1, essential2, ...optionals) {
    console.log(essential1 + ', ' + essential2 + ', ' + optionals.join(', '));
};
purchaseItems('bread', 'milk');
purchaseItems('bread', 'milk', 'jelly');

const mustHaves = ['bread', 'milk'];
const andAlso = ['eggs', 'donuts', 'tea'];

// call purchaseItems so it prints bread, milk, eggs, donuts, tea
purchaseItems(mustHaves[0], mustHaves[1], ...andAlso);
purchaseItems(...mustHaves, ...andAlso); // use spread on mustHaves so it populates first two param values

// EX3
const purchaseItems_EX3 = function (essential1 = 'milk', essential2 = 'bread', ...optionals) {
    console.log(essential1 + ', ' + essential2 + ', ' + optionals.join(', '));
};

const items = ['cheese', 'milk'];
purchaseItems_EX3('cheese'); //cheese, bread
purchaseItems_EX3(...items); // cheese, milk
purchaseItems_EX3(); // milk, bread

// EX4
const placeOrder = function (id, amount, shipping = amount < 20 ? 5 : 10, date = new Date()) {
    console.log(' shipping charge for id: ' + id + ' is $' + shipping + ' Date:' + date.getDate());
};
placeOrder(1, 12.1, 3, new Date('05/15/2018'));
placeOrder(1, 25.2, 10);
placeOrder(1, 12.05);
placeOrder(1, 25.3);
placeOrder(1, 25.2);
