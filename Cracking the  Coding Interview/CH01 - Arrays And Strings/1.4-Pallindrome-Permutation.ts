class PalindromePermutation {
    test() {
        let input = 'dqw';
        console.log(input, this.createPalindromePermutation(input));
    }

    createPalindromePermutation(value: string): string {
        value = value.toLowerCase();

        // calculate count of possible permutation
        const maxPermutations = value.replaceAll(' ', '').length * 2;
        console.log(maxPermutations);

        // get position of all spaces
        let spacePositions: number[] = [];
        for (let i = 0; i < value.length; i++) {
            if (value.charAt(i) === ' ') {
                spacePositions.push(i);
            }
        }
        console.log(spacePositions);

        let permutations: number[] = [];

        while (permutations.length < maxPermutations) {}
    }

    generatePermutation() {}
}

new PalindromePermutation().test();
