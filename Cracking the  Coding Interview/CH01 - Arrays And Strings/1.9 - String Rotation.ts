/*
    Is s1 a rotation of s2.
    'waterbottle' -> 'elttobretaw'

 */
class StringRotation {
    public isReversed(s1: string, s2: string): boolean {
        if (s1?.length !== s2?.length) return false;
        for (let i = s1.length - 1; i >= 0; i--) {
            if (s1.charAt(i) !== s2.charAt(s2.length - 1 - i)) {
                return false;
            }
        }

        return true;
    }
}

console.log(new StringRotation().isReversed('dean', 'naad'));
console.log(new StringRotation().isReversed('dean', 'naed'));
