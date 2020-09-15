let slowWayLoopCount = 0;
let properWayLoopCount = 0;

function test() {
    console.log(
        'Test 1a: ',
        getAllProductsSlowly([1, 2, 3, 4, 5]),
        'slowWayLoopCount',
        slowWayLoopCount
    ); // === [120,60,40,30,24]
    //   console.log('Test 2a: ', getAllProducts([3, 2, 1])); //  === [2,3,6]

    console.log(
        'Test 1b: ',
        bestWay([1, 2, 3, 4, 5]),
        'properWayLoopCount',
        properWayLoopCount
    ); // === [120,60,40,30,24]
    // console.log('Test 2b: ', bestWay([3, 2, 1])); //  === [2,3,6]

    let testArray: number[] = [];

    for (let i = 1; i < 25; i++) {
        testArray.push(i);
    }

    console.log(testArray);
    console.log(
        'Test 1b: ',
        bestWay([...testArray]),
        'properWayLoopCount',
        properWayLoopCount
    ); // === [120,60,40,30,24]
    console.log(
        'Test 1a: ',
        getAllProductsSlowly([...testArray]),
        'quickWayLoopCount',
        slowWayLoopCount
    ); // === [120,60,40,30,24]
}

// This is O(N2)
function getAllProductsSlowly(oldArray: number[]): number[] {
    let newArray = new Array<number>(oldArray.length);

    for (let i = 0; i < oldArray.length; i++) {
        newArray[i] = 0;
        slowWayLoopCount++;
        for (let j = 0; j < oldArray.length; j++) {
            slowWayLoopCount++;
            if (i !== j) {
                if (newArray[i] === 0) {
                    newArray[i] = oldArray[j];
                } else {
                    newArray[i] = newArray[i] * oldArray[j];
                }
            }
        }
    }
    return newArray;
}

// this is O(N)
function bestWay(numbers: number[]) {
    let prefixProducts = generateArray(numbers);

    const reversedNumbers = numbers.reverse();
    let suffixProducts = generateArray(reversedNumbers).reverse();

    return generateResultsNumbers(numbers, prefixProducts, suffixProducts);
}

function generateArray(numbers: number[]): number[] {
    let retVal: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        properWayLoopCount++;
        if (retVal.length > 0) {
            // multiply previous value by current
            retVal.push(retVal[retVal.length - 1] * numbers[i]);
        } else {
            retVal.push(numbers[i]);
        }
    }
    return retVal;
}

function generateResultsNumbers(
    numbers: number[],
    prefixProducts: number[],
    suffixProducts: number[]
): number[] {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        properWayLoopCount++;
        if (i === 0) {
            // for the first item - when results array is empty add the next item to the array
            result.push(suffixProducts[i + 1]);
        } else if (i === numbers.length - 1) {
            // for the last item
            result.push(prefixProducts[i - 1]);
        } else {
            // for ever item between first and last, multiply them
            result.push(prefixProducts[i - 1] * suffixProducts[i + 1]);
        }
    }
    return result;
}

test();
