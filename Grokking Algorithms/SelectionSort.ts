/*
    O(n x 1/2 x n)
    O(n x n)
    O(n^2) aka O(n2)

 */

function selectionSort(arr: number[]): number[] {
    let newArr: number[] = [];
    let oldArr: number[] = [...arr];
    for (let i = 0; i < arr.length; i++) {
        const smallest = findSmallestIndex(oldArr);
        newArr.push(oldArr[smallest]);
        oldArr.splice(smallest, 1);
    }

    return newArr;
}
function findSmallestIndex(arr: number[]): number {
    let smallest: number = arr[0];
    let smallestIndex: number = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }

    return smallestIndex;
}

console.log(selectionSort([5, 3, 6, 2, 10, 20]));
