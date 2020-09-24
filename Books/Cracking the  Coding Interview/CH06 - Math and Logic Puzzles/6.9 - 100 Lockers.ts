namespace lockersProblem {
    enum LockerState {
        Opened,
        Closed,
    }

    class Locker {
        public get DoorState(): LockerState {
            return this.doorState;
        }

        constructor(private doorState: LockerState = LockerState.Closed) {}

        openLocker() {
            this.doorState = LockerState.Opened;
        }

        closeLocker() {
            this.doorState = LockerState.Closed;
        }

        toggleLocker() {
            this.doorState = this.doorState === LockerState.Closed ? LockerState.Opened : LockerState.Closed;
        }
    }

    class LockersTest {
        public lockers: Locker[] = [];

        constructor() {
            this.lockers = this.setupLockers();

            // first pass - open all lockers
            for (let i = 0; i < 100; i++) {
                this.lockers[i].openLocker();
            }

            // close every second locker
            for (let i = 2; i < 100; i += 2) {
                this.lockers[i].closeLocker();
            }

            // toggles every third locker
            for (let i = 3; i < 100; i++) {
                for (let j = i; j < 100; j += i) {
                    this.lockers[j].toggleLocker();
                }
            }

            console.log(`There are ${this.countOpenLockers()} lockers opened`);
        }

        private setupLockers(): Locker[] {
            let lockers: Locker[] = [];
            for (let i = 0; i < 100; i++) {
                lockers.push(new Locker());
            }
            return lockers;
        }

        private countOpenLockers(): number {
            return this.lockers.filter((x) => x.DoorState === LockerState.Opened).length;
        }
    }
    new LockersTest();
}
