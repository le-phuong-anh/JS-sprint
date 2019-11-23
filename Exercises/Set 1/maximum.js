// 3. Maximum
// Math.max returns its largest argument. We can build something like that now. Write a function findMax that takes three arguments and returns their maxiumum. Without method Math.max method.
// ```js
// console.log(findMax(0, 10, 5));
// 10
// console.log(findMax(0, -10,-2));
// 0
// ```

// function findMax(x,y,z) {
//     if (x > y && x > z) {
//         console.log(x);
//     } else if (y > x && y > z) {
//         console.log(y);
//     } else if (z > x && z > y) {
//         console.log(z);
//     } else if (x = y = z) {
//         console.log(x);
//     } else {
//         console.log();
//     }
// }

//What if we have an array of number, rather than just 3 integer numbers?

function anotherFindMax(...args) {
  //args is an object
  //   if (x > args) {
  //     console.log(x);
  //   }
  console.log("args", args);
  console.log("typeof:", typeof args);
  let val = args[0];
  for (i = 1; i <= args.length; i++) {
    if (val < args[i]) {
      val = args[i];
    }
  }
  console.log(val);
}

anotherFindMax(1, 4, 67, 7, 31, 13);

//i'm still thinking how to use the rest parameter
//another direction i was thinking of is to create a ray of number, and then use the loop function to check if a number in the array is bigger than any other number, then we return that number
