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
});

describe('Given myLength function', () => {
    test(`When parameters is array, then result should be 3`, () => {
        const array = [1, 2, 3];
        const result = myLength(array);
        const expectedResult = 3;
        expect(result).toBe(expectedResult);
    });
});

describe('Given myIndexOf function', () => {
    test(`When parameters are array and 3, then result should be 2`, () => {
        const array = [1, 2, 3];
        const result = myIndexOf(array, 3);
        const expectedResult = 2;
        expect(result).toBe(expectedResult);
    });
});

describe('Given myPop function', () => {
    test(`When parameters is array, then result should be 1, 2`, () => {
        const array = [1, 2, 3];
        const result = myPop(array);
        const expectedResult = [1, 2];
        expect(result).toStrictEqual(expectedResult);
    });
});
