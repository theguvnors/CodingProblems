let counter = 0;
function swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    console.log('partition', pivot, i, j, items, left, right);
    while (i <= j) {
        counter++;
        while (items[i] < pivot) {
            counter++;
            i++;
        }
        while (items[j] > pivot) {
            counter++;
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    console.log('partition', pivot, i, j, items, left, right);
    return i;
}

function quickSortweb(items, left, right) {
    counter++;
    var index;

    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) {
            //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
// first call to quick sort
let items = [33, 15, 10, 441, 4848, 4848, 9, 894984598, 84848, 48484, 151, 44, 5, 7878, 848];

counter = 0;
console.log(quickSortweb(items, 0, items.length - 1));
console.log('counter:', counter); // 23
// counter =0;
