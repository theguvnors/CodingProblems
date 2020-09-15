// not complete

class Urilify {
    private input: string = '              Mr John Smith  ';
    test() {
        console.log(this.input.trim().replaceAll(' ', '%20'));
        console.log(this.leftTrim(), this.leftTrim().length);
        //        console.log(this.input.length);
    }

    leftTrim() {
        let character: string = '';

        let leadingPadFinished = false;
        for (let i = 0; i < this.input.length; i++) {
            if (!leadingPadFinished && this.input.charAt(i) !== ' ') {
                leadingPadFinished = true;
            }
            if (leadingPadFinished) {
                character += this.input.charAt(i);
            }
        }
        return character;
    }

    // rightTrim() {
    //     let character: string = '';
    //
    //     let leadingPadFinished = false;
    //     let revInput = this.input.reve;
    //     for (let i = 0; i < this.input.length; i++) {
    //         if (!leadingPadFinished && this.input.charAt(i) !== ' ') {
    //             leadingPadFinished = true;
    //         }
    //         if (leadingPadFinished) {
    //             character += this.input.charAt(i);
    //         }
    //     }
    //     return character;
    // }
}

new Urilify().test();
