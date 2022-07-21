"use strict";
/** 走る */
function Runnable(Base) {
    return class extends Base {
        run() {
            console.log('Running!');
        }
    };
}
/** 鳴く */
function Cryable(Base) {
    return class extends Base {
        cry() {
            console.log('Cring!');
        }
    };
}
/** 飛ぶ */
function Flyable(Base) {
    return class extends Base {
        fly() {
            console.log('Flying!');
        }
    };
}
class Dog {
    call() {
        console.log('Dog call');
    }
}
const RunDog = Runnable(Dog);
const RunAndCryDog = Cryable(RunDog);
const AnimalDog = Flyable(RunAndCryDog);
const useDog = new AnimalDog();
useDog.run();
useDog.fly();
useDog.cry();
useDog.call();
