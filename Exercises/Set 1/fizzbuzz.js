
// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"for numbers divisible by only one of those).

// x % 3 = 0
// x % 5 = 0
// x % 3 = 0 && x % 5 = 0


// function fizzBuzz() {
//     var numbers = [];
//     for (var i = 1; i < 101; i++){  
//         if (i % 3 === 0 && i % 5 === 0) {
//         numbers.push("FizzBuzz");  //Moving this if statement to be in front of the other statement because js files render from top to bottom    
//         } else if (i % 3 === 0) {
//             numbers.push("Fizz");
//         } else if (i % 5 === 0) {
//             numbers.push("Buzz"); 
//         } else {
//             numbers.push(i);  //Add an increment of 1 into the "numbers" array
//         }
//     }
//     console.log(numbers);
// }

function fizzBuzz(){
    var numbers = [];
    for (var i=1; i<101; i++){
        switch(numbers){
        case i % 3 === 0:
            numbers.push("Fizz");
        break;
        case i % 5 === 0:
            numbers.push("Buzz");
        break;
        case i % 3 === 0 && i % 5 === 0:
            numbers.push("FizzBuzz");  
        break;
        default: numbers.push(i);
        
    }
    
}
    console.log(numbers);
}

//Help! I'm stuck : ( Can't figure out why the code above couldn't return the correct result.