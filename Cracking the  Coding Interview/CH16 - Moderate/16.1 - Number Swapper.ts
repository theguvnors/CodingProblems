/*
    Swap two numbers, while only using two variables
 */

class NumberSwapper {
    test() {
        console.log('Simple way, find the diffrence');
        this.swapper(5, 200);

        console.log('Bit Manipulation!');
        this.swapperBitManipulation(5, 200);

        console.log('Js Destructor');
        this.swapperDestructor(5, 200);
    }

    private swapper(a: number, b: number): void {
        const aWas = a;
        const bWas = b;

        if (a !== b) {
            a = a - b;
            b = b + a;
            a = b - a;
        }

        console.log(a, b);
    }

    /*
        Using XOR to do bit manipulation has the benefit of working with more data types.
     */
    private swapperBitManipulation(a: number, b: number): void {
        const aWas = a;
        const bWas = b;

        if (a !== b) {
            a = a ^ b;
            b = a ^ b;
            a = a ^ b;
        }

        console.log(a, b);
    }

    private swapperDestructor(a: number, b: number): void {
        let [a1, b1] = [a, b];
        [a1, b1] = [b1, a1];
        console.log([a1, b1]);
    }
}

new NumberSwapper().test();
