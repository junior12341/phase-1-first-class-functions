const eatFood = () => {};

const age = 5;

eatFood();

const wakeUp = () => {
    console.log("wake");
};

const alarm = (wakeup) => {
    wakeup();
};

alarm(wakeUp);

const newAlarm = () => {
    return function () {
        console.log("I am inside the new Alarm yet I am a function");
    };
};

newAlarm()()

const sumArray = (array) => {
    return array.reduce((a, b)=> a + b);
};

const numbers = [1,2,3,4,5];

console.log(sumArray(numbers));

const findItemInArray = (array, item) => {
    const found = array.find((itm) => itm === item);

    if(found) {
        return true;
    } else {
        false;
    }
};

const newNumbers = [1,2,3,4,5];

console.log(findItemInArray(newNumbers, 1));

const recievesAFunction = (callback) => {
   callback();
};

const returnsANamedFunction = () => {
    return function namedFunction() {};
};

const returnsAnAnonymousFunction = () => {
    return function () {};
}