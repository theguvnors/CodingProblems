/*
    A text string a-z so aaabbcccc becomes a3b2c4;
 */
type outputChar = { char: string; count: number };

class BasicStringCompression {
    private input = 'qqqqqdwsqaafffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaqqqqqq';
    private outputChars: outputChar[] = [];

    public test() {
        this.populateOutputChars();

        let compressedString = this.createCompressedString();
        console.log(compressedString.length < this.input.length ? compressedString : this.input);
    }

    populateOutputChars() {
        for (let i = 0; i < this.input.length; i++) {
            if (this.outputChars.length === 0) {
                this.outputChars.push({ char: this.input.charAt(i), count: 1 });
            } else {
                if (this.outputChars[this.outputChars.length - 1].char === this.input.charAt(i)) {
                    this.outputChars[this.outputChars.length - 1].count += 1;
                } else {
                    this.outputChars.push({
                        char: this.input.charAt(i),
                        count: 1,
                    });
                }
            }
        }
    }

    createCompressedString() {
        let compressedString: string = '';
        for (let i = 0; i < this.outputChars.length; i++) {
            if (this.outputChars[i].count == 1) {
                compressedString += `${this.outputChars[i].char}`;
            } else {
                compressedString += `${this.outputChars[i].char}${this.outputChars[i].count}`;
            }
        }

        return compressedString;
    }

    //  decompressString();
}

class AltBasicStringCompression {
    private input = 'qqqqqdwsqaafffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaqqqqqq';

    public test() {
        this.populateOutputChars();
    }

    populateOutputChars() {
        let compressedString: string = '';
        let currentOutputChar: outputChar = { char: '', count: 0 };
        for (let i = 0; i < this.input.length; i++) {
            if (this.input.charAt(i) !== currentOutputChar.char) {
                currentOutputChar = { char: this.input.charAt(i), count: 1 };
            }

            if (i < this.input.length) {
                if (currentOutputChar.char !== this.input.charAt(i + 1)) {
                    compressedString += `${currentOutputChar.char}${currentOutputChar.count}`;
                } else {
                    currentOutputChar.count += 1;
                }
            } else {
                compressedString += `${currentOutputChar.char}${currentOutputChar.count}`;
            }
        }

        console.log(compressedString);
    }
}

new BasicStringCompression().test();
new AltBasicStringCompression().test();
