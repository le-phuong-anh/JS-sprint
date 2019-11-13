// 3. Maximum
// Math.max returns its largest argument. We can build something like that now. Write a function findMax that takes three arguments and returns their maxiumum. Without method Math.max method.
// ```js
// console.log(findMax(0, 10, 5));
// 10
// console.log(findMax(0, -10,-2));
// 0
// ```


function findMax(x,y,z) {
    if (x > y && x > z) {
        console.log(x);
    } else if (y > x && y > z) {
        console.log(y);
    } else if (z > x && z > y) {
        console.log(z); 
    } else if (x = y = z) {
        console.log(x);
    } else {
        console.log();
    }
}

//What if we have an array of number, rather than just 3 integer numbers? 

