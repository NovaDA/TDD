function FizzBuzz(num){
    let output = "fz";

    console.log(num % 3 === 0);
    switch(num){
        
        case ((num % 3 === 0) && (num % 5 === 0)):
            output = "FizzBuzz";
            break;
        case (num % 3 === 0):
            output = "Fizz";
            break;
        case (num % 5 === 0):
            output = "Fizz";
            break;
    }

    return output;
}

console.log(FizzBuzz(3));