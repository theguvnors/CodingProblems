/*
    Check if a string has all unique characters
 */
class Unique {
    private input = 'deana';

    test() {
        console.log(`Is ${this.input} unique? - ${this.isUnique()}`);
        this.input = 'aa';
        console.log(`Is ${this.input} unique? - ${this.isUnique()}`);
        this.input = 'dean';
        console.log(`Is ${this.input} unique? - ${this.isUnique()}`);
    }

    private isUnique(): boolean {
        let myMap = new Map<string, number>();

        for (let i = 0; i < this.input.length; i++) {
            if (myMap.has(this.input.charAt(i))) {
                return false;
            } else {
                myMap.set(this.input.charAt(i), 1);
            }
        }
        return true;
    }
}

new Unique().test();
