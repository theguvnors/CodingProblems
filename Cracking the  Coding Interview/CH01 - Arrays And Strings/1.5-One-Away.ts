/*
    There are 3 types of edit that can be performed om strings: insert/remove/replace a char.
    Given two strings check if they are 0 or 1 edits away
 */

class OneAway {
    test() {
        console.log(this.isOneOrLessAway('pale', 'ple')); // true
        console.log(this.isOneOrLessAway('pales', 'pale')); // true
        console.log(this.isOneOrLessAway('pale', 'bale')); // true
        console.log(this.isOneOrLessAway('pale', 'bake')); // false
        console.log(this.isOneOrLessAway('', '')); // false
    }

    private isOneOrLessAway(a: string, b: string): boolean {
        let changesCount = 0;
        let modified: string = '';

        // walk the array
        for (let i = 0; i < a.length; i++) {
            if (a.charAt(i) !== b.charAt(i)) {
                // insert/ remove /replace
                if (a.length === b.length) {
                    modified += b.charAt(i);
                    changesCount += 1;
                } else {
                    // only insert/remove if the length differs
                    if (a.length > b.length) {
                        // do remove
                        modified += '';
                        changesCount += 1;
                    } else {
                        // we can only insert
                        if (i + 1 < b.length && a.charAt(i) === b.charAt(i + 1)) {
                            modified += b.charAt(i);
                            changesCount += 1;
                        }
                    }
                }
            } else {
                modified += b.charAt(i);
            }
        }

        return changesCount <= 1;
    }
}

new OneAway().test();
