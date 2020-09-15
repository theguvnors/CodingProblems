/*
    given two strings check that one string is not a permutation of another.
 */

class Permutation {
    test() {
        console.log('Is ', this.isPermutation('asaa', 'ass')); // false
        console.log('Is ', this.isPermutation('asaa', 'asss')); //false
        console.log('Is ', this.isPermutation('asaa', 'asaa')); // true
        console.log('Is ', this.isPermutation('asaa', 'aasa')); // true
        console.log('Is ', this.isPermutation('Asaa', 'asaa')); // false
        console.log('Is ', this.isPermutation('asaa   ', 'asaa')); // false
    }

    isPermutation(a: string, b: string): boolean {
        if (a.length !== b.length) return false;
        if (a === b) return true;

        let mapA = this.mapString(a);
        let mapB = this.mapString(b);

        return this.areMapsEqual(mapA, mapB);
    }

    mapString(value: string): Map<string, number> {
        let map = new Map<string, number>();

        for (let i = 0; i < value.length; i++) {
            if (map.has(value.charAt(i))) {
                let previousCount = map.get(value.charAt(i));
                map.set(value.charAt(i), (previousCount || 0) + 1);
            } else {
                map.set(value.charAt(i), 1);
            }
        }

        return map;
    }

    areMapsEqual(mapA: Map<string, number>, mapB: Map<string, number>): boolean {
        if (mapA.size !== mapB.size) return false;

        for (let [key, value] of mapA) {
            if (value !== mapB.get(key)) return false;
        }

        return true;
    }
}

new Permutation().test();
