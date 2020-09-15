/*
    O(log n) - Average and worst case
    O(1) - Best Case, the first search item just so happens to be in the middle
 */
function BinarySearch(list: number[], item: number): number | null {
    let low = 0;
    let high = list.length;
    let mid: number;
    let guess: number;

    while (low < high) {
        mid = Math.floor((low + high) / 2);
        guess = list[mid];

        if (guess === item) return mid;
        if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return null;
}
const testData = [1, 3, 5, 7, 9];
console.log(BinarySearch(testData, 5));
console.log(BinarySearch(testData, 100));
