function quickSort(array: number[]): number[] {
    if (array == null || array.length < 2) {
        return array || [];
    }

    // find pivot
    const pivotIndex = 0;
    const pivot = array[pivotIndex];

    // ****  Partition the array ******
    const less = [];
    const greater = [];
    for (let i = 0; i < array.length; i++) {
        if (i !== pivotIndex) {
            // find elements smaller than the pivot
            if (array[i] <= pivot) {
                less.push(array[i]);
            } else {
                // find elements larger than the pivot
                greater.push(array[i]);
            }
        }
    }

    return [...quickSort(less), pivot, ...quickSort(greater)];
}

//console.log(quickSort());
console.log(quickSort([]));
console.log(quickSort([20]));
console.log(quickSort([1, 7]));
console.log(quickSort([33, 15, 10]));
