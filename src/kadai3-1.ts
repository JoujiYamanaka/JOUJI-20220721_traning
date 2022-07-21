/* eslint-disable @typescript-eslint/no-explicit-any */
type Constructor<T extends Record<string, unknown>> = new (...args: any[]) => T;

/** 走る */
function Runnable<TBase extends Constructor<{}>>(Base: TBase) {
    return class extends Base {
        run() {
            console.log('Running!');
        }
    };
}

/** 鳴く */
function Cryable<TBase extends Constructor<{}>>(Base: TBase) {
    return class extends Base {
        cry() {
            console.log('Cring!');
        }
    };
}

/** 飛ぶ */
function Flyable<TBase extends Constructor<{}>>(Base: TBase) {
    return class extends Base {
        fly() {
            console.log('Flying!');
        }
    };
}

class Dog {
    call() {
        console.log('Dog call')
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

