
const {
    FizzBuzz
} = require('./fizzBuzz')


describe('Testing Game FizzBuzz', () => {
    
    test('Testing FizzBuzz return' , () =>{
        expect(FizzBuzz(15)).toBe("FizzBuzz");
    })
    test('Testing Fizz return' , () =>{
        expect(FizzBuzz(3)).toBe("Fizz");
    })
    test('Testing Buzz return' , () =>{
        expect(FizzBuzz(5)).toBe("Buzz");
    })
})