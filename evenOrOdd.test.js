const { evenOrOdd } = require('./evenOrOdd.js');

describe('Test the quiz puzzle', () =>{
    test('Test if number is even', () =>{
        expect(evenOrOdd(2)).toBe(true);
    })

    test('Test if number is odd', () =>{
        expect(evenOrOdd(3)).toBe(false);
    })
})