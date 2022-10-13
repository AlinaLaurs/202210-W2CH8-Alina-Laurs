import { mySome, myLength, myIndexOf, myPop } from './sample.js';

describe('Given mySome function', () => {
    test(`When parameters are array and ${test}, then result should be true.`, () => {
        const array = [1, 2, 3];
        function test(element) {
            return element > 2;
        }
        const result = mySome(array, test);
        expect(result).toBe(true);
    });

    test('If the array is invalid, should throw an "Error"', () => {
        const array = 'string';
        try {
            mySome(array);
        } catch (e) {
            expect(e.message).toBe('Error, el array no es válido.');
        }
    });

    test('If the array is empty, should throw an "Error"', () => {
        const array = [];
        try {
            mySome(array);
        } catch (e) {
            expect(e.message).toBe('Error, el array está vacio.');
        }
    });
});

describe('Given myLength function', () => {
    test(`When parameters is array, then result should be 3`, () => {
        const array = [1, 2, 3];
        const result = myLength(array);
        const expectedResult = 3;
        expect(result).toBe(expectedResult);
    });
    test('If the array is empty, should throw an "Error"', () => {
        const array = [];
        try {
            myLength(array);
        } catch (e) {
            expect(e.message).toBe('Error, el array está vacio.');
        }
    });
});

describe('Given myIndexOf function', () => {
    test(`When parameters are array and 3, then result should be 2`, () => {
        const array = [1, 2, 3];
        const result = myIndexOf(array, 3);
        const expectedResult = 2;
        expect(result).toBe(expectedResult);
    });
    test(`When parameters are array and 3, then result should be pepe`, () => {
        const array = [1, 2, 3];
        const result = myIndexOf(array);
        const expectedResult = -1;
        expect(result).toBe(expectedResult);
    });
    test('If the array is empty, should throw an "Error"', () => {
        const array = [];
        try {
            myIndexOf(array, 5);
        } catch (e) {
            expect(e.message).toBe('Error, el array está vacio.');
        }
    });
});

describe('Given myPop function', () => {
    test(`When parameters is array, then result should be 1, 2`, () => {
        const array = [1, 2, 3];
        const result = myPop(array);
        const expectedResult = 3;
        expect(result).toBe(expectedResult);
    });
    test(`When parameters is array, then result should be 1, 2`, () => {
        const array = [1, 2, 3];
        myPop(array);
        expect(array).toEqual([1, 2]);
    });
});
