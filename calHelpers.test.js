
const {
    multiplyBy3,
    add4 } = require('./calcHelper');

describe('calculator helper test suite', () => {
    test('testing test', () => {
        expect(2+5).toBe(7);
    })
    test('it exist', () =>{
        expect(multiplyBy3).toBeDefined();
    })
    test('it contains the number multiply by 3', () => {
        expect(multiplyBy3(3)).toBe(9);
    })

    describe('this function adds 4', () => {
        expect(add4).toBeDefined();
    })

})