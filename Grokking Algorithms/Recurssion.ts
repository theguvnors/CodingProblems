type box = { name: string; hasTreasure: boolean; boxes: box[] };

let boxes: box = {
    name: 'a',
    hasTreasure: false,
    boxes: [
        { name: 'a1', hasTreasure: false, boxes: [] },
        { name: 'a2', hasTreasure: false, boxes: [] },
        {
            name: 'a3',
            hasTreasure: false,
            boxes: [
                { name: 'a3-1', hasTreasure: false, boxes: [] },
                { name: 'a3-2', hasTreasure: false, boxes: [] },
                { name: 'a3-3', hasTreasure: true, boxes: [] },
            ],
        },
    ],
};

let boxes2: box = {
    name: 'a',
    hasTreasure: false,
    boxes: [
        {
            name: 'a1',
            hasTreasure: false,
            boxes: [
                {
                    name: 'a2',
                    hasTreasure: false,
                    boxes: [
                        { name: 'a21', hasTreasure: false, boxes: [{ name: 'a22', hasTreasure: false, boxes: [] }] },
                    ],
                },
            ],
        },
        {
            name: 'aa1',
            hasTreasure: false,
            boxes: [
                {
                    name: 'aa2',
                    hasTreasure: true,
                    boxes: [
                        { name: 'aa21', hasTreasure: false, boxes: [{ name: 'aa22', hasTreasure: false, boxes: [] }] },
                    ],
                },
            ],
        },
    ],
};

let loopCounter = 0;

function lookForTreasure(box: box) {
    loopCounter++;
    for (let i = 0; i < box?.boxes.length; i++) {
        if (box.hasTreasure) {
            console.log('We have found treasure in box!!: ', box.name);
            return box;
        } else {
            lookForTreasure(box.boxes[i]);
        }
    }
}

lookForTreasure(boxes2);

/* 4.1 - 4-4 */

function sum(values, runningTotal = 0) {
    //base case
    if (values.length == 0) {
        return 0;
    } else {
        runningTotal += values[0];
        return values.length > 1 ? sum(values.splice(1), runningTotal) : runningTotal;
    }
}

console.log(sum([2, 4, 6]));

/*
    4.2 - a recursive function to count the number of items in a list
 */

const items = [2, 5, 216, 2, 62, 4156, 515, 1515, 15, 1, 51, 51, 5];

function count(items, counter = 0) {
    // base case
    if (items.length === 0) {
        return counter;
    } else {
        counter += 1;
        count(items.splice(1), counter);
    }
}

count(items);

/*
    4.3 - find the maximum number in a list
 */

const itemsForMax = [2, 5, 216, 2, 62, 4156, 515, 1515, 15, 1, 51, 51, 5];
function findMax(items, max = 0) {
    if (items.length === 0) {
        return max;
    } else {
        if (items[0] > max) {
            max = items[0];
        }
        return findMax(items.splice(1), max);
    }
}

console.log(findMax(itemsForMax));

/*
    4.4 - Recursive Binary Search
*/

function binarySearchRecursive(list: number[], item: number) {
    let low = 0;
    let high = list.length;
    let mid: number;
    let guess: number;

    mid = Math.floor((low + high) / 2);
    guess = list[mid];

    if (guess === item) return mid;
    if (guess > item) {
        high = mid - 1;
    } else {
        low = mid + 1;
    }
}
