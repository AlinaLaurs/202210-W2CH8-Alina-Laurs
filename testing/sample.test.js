import { strictEquals } from './sample.js';

// gherkin - Given -when - Then

describe('Given strictEquals function', () => {
    // Arrage
    const cases = [
        { a: 1, b: 1, r: true },
        { a: NaN, b: NaN, r: false },
        { a: 0, b: -0, r: true },
        { a: -0, b: 0, r: true },
        { a: 1, b: '1', r: false },
        { a: true, b: false, r: false },
        { a: false, b: false, r: true },
        { a: 'water', b: 'oil', r: false },
    ];

    cases.forEach((testCase) => {
        test(`When parameters are ${testCase.a} and ${testCase.b}, then result should be ${testCase.r}`, () => {
            // Arrange

            // Act
            let result = strictEquals(testCase.a, testCase.b);
            // Asset
            expect(result).toBe(testCase.r);
        });
    });

    /*test('When parameters are 1 and 1, then result should be true', () => {
        // Arrange
        const a = 1;
        const b = 1;
        const expectedResult = true;
        // Act
        const result = strictEquals(a, b);
        // Asset
        expect(result).toBe(expectedResult);
    });

    test('When parameters are NaN and NaN, then result should be false', () => {
        // Arrange
        const a = NaN;
        const b = NaN;
        const expectedResult = false;
        // Act
        const result = strictEquals(a, b);
        // Asset
        expect(result).toBe(expectedResult);
    });

    test('When parameters are 0 and -0, then result should be true', () => {
        // Arrange
        const a = 0;
        const b = -0;
        const expectedResult = true;
        // Act
        const result = strictEquals(a, b);
        // Asset
        expect(result).toBe(expectedResult);
    });

    test('When parameters are -0 and 0, then result should be true', () => {
        // Arrange
        const a = -0;
        const b = 0;
        const expectedResult = true;
        // Act
        const result = strictEquals(a, b);
        // Asset
        expect(result).toBe(expectedResult);
    });

    test('When parameters are 1 and "1", then result should be false', () => {
        // Arrange
        const a = 1;
        const b = '1';
        const expectedResult = false;
        // Act
        const result = strictEquals(a, b);
        // Asset
        expect(result).toBe(expectedResult);
    });

    test('When parameters are true and false, then result should be false', () => {
        // Arrange
        const a = true;
        const b = false;
        const expectedResult = false;
        // Act
        const result = strictEquals(a, b);
        // Asset
        expect(result).toBe(expectedResult);
    });

    test('When parameters are false and false, then result should be true', () => {
        // Arrange
        const a = false;
        const b = false;
        const expectedResult = true;
        // Act
        const result = strictEquals(a, b);
        // Asset
        expect(result).toBe(expectedResult);
    });

    test('When parameters are water and oil, then result should be false', () => {
        // Arrange
        const a = 'water';
        const b = 'oil';
        const expectedResult = false;
        // Act
        const result = strictEquals(a, b);
        // Asset
        expect(result).toBe(expectedResult);
    });*/
});

// console.log(strictEquals(1, 1));
// console.log(strictEquals(NaN, NaN));
// console.log(strictEquals(0, -0));
// console.log(strictEquals(-0, 0));
// console.log(strictEquals(1, '1'));
// console.log(strictEquals(true, false));
// console.log(strictEquals(false, false));
// console.log(strictEquals('water', 'oil'));
