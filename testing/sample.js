export const mySome = (array, func) => {
    let isFinded = false;
    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {
            isFinded = true;
        }
    }
    return isFinded;
};

export const myLength = (array) => {
    let result = 0;
    for (let value of array) {
        result++;
    }
    return result;
};

export const myIndexOf = (array, element) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return i;
        }
    }
    return -1;
};

let array = [1, 2, 3];
export const myPop = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length - 1; i++) {
        newArray.push(array[i]);
    }
    return newArray;
};
console.log(myPop(array));
