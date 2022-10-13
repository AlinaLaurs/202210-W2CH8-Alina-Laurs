export const mySome = (array, func) => {
    let isFinded = false;

    const arrayError = new Error('Error, el array no es válido.');
    const arrayEmpty = new Error('Error, el array está vacio.');
    if (!Array.isArray(array)) {
        throw arrayError;
    }
    if (array.length < 1) {
        throw arrayEmpty;
    }
    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {
            isFinded = true;
        }
    }
    return isFinded;
};

export const myLength = (array) => {
    let result = 0;
    const arrayEmpty = new Error('Error, el array está vacio.');
    if (array.length < 1) {
        throw arrayEmpty;
    }
    for (let value of array) {
        result++;
    }
    return result;
};

export const myIndexOf = (array, element) => {
    const arrayEmpty = new Error('Error, el array está vacio.');
    if (array.length < 1) {
        throw arrayEmpty;
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return i;
        }
    }
    return -1;
};

export const myPop = (array) => {
    const element = array[array.length - 1];
    array.length = array.length - 1;
    return element;
};
