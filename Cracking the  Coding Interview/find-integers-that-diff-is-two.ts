/*
    find pairs of integers that are 2 apart
* */
const input = [1, 7, 5, 9, 2, 12, 3];

let orderedInput = input.sort((a, b) => a - b);

function findPairs() {
    let pairs = [];
    for (let i = 0; i < orderedInput.length - 1; i++) {
        const difference = orderedInput[i + 1] - orderedInput[i];
        if (difference === 2) {
            pairs.push(`(${orderedInput[i]}, ${orderedInput[i + 1]})`);
        }
    }
    return pairs;
}

console.log('Pairs');
console.log(findPairs());
