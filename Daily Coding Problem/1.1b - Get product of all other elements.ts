class GetProductOfAllOtherElements {
    private quickWayLoopCount = 0;
    private properWayLoopCount = 0;

    public test() {
        //    console.log('Test 1a: ', this.getAllProducts([1, 2, 3, 4, 5]), 'quickWayLoopCount',  quickWayLoopCount); // === [120,60,40,30,24]
        // console.log('Test 2a: ', this.getAllProducts([3, 2, 1])); //  === [2,3,6]

        console.log('Test 1b: ', this.bestWay([1, 2, 3, 4, 5]), 'properWayLoopCount', properWayLoopCount); // === [120,60,40,30,24]
        // console.log('Test 2b: ', this.bestWay([3, 2, 1])); //  === [2,3,6]
    }

    getAllProducts(oldArray: number[]): number[] {
        let newArray = new Array<number>(oldArray.length);

        for (let i = 0; i < oldArray.length; i++) {
            newArray[i] = 0;
            this.quickWayLoopCount++;
            for (let j = 0; j < oldArray.length; j++) {
                this.quickWayLoopCount++;
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

    bestWay(numbers: number[]) {
        let prefixProducts = generateArray(numbers);

        const reversedNumbers = numbers.reverse();
        let suffixProducts = generateArray(reversedNumbers).reverse();

        return this.generateResultsNumbers(numbers, prefixProducts, suffixProducts);
    }

    generateArray(numbers: number[]): number[] {
        let retVal: number[] = [];
        for (let i = 0; i < numbers.length; i++) {
            console.log('n:', numbers[i]);
            properWayLoopCount++;
            if (retVal.length > 0) {
                retVal.push(retVal[retVal.length - 1] * numbers[i]);
            } else {
                retVal.push(numbers[i]);
            }

            console.log('retval', retVal[i]);
        }
        console.log(retVal);
        return retVal;
    }

    generateResultsNumbers(numbers: number[], prefixProducts: number[], suffixProducts: number[]): number[] {
        console.log('numbers:', numbers, 'prefixProducts:', prefixProducts, 'suffixProducts:', suffixProducts);

        let result = [];
        for (let i = 0; i < numbers.length; i++) {
            properWayLoopCount++;
            if (i === 0) {
                result.push(suffixProducts[i + 1]);
            } else if (i === numbers.length - 1) {
                console.log('does it happen just the once per', i, numbers.length - 1);
                result.push(prefixProducts[i - 1]);
            } else {
                console.log(
                    'p:',
                    prefixProducts[i - 1],
                    's:',
                    suffixProducts[i + 1],
                    't:',
                    prefixProducts[i - 1] * suffixProducts[i + 1]
                );
                result.push(prefixProducts[i - 1] * suffixProducts[i + 1]);
            }
        }
        return result;
    }
}

new GetProductOfAllOtherElements().test();
