
// 1. Looping a triangle
// Write a loop that makes seven calls to console.log to output the following triangle:
// ```js
// #
// ##
// ###
// ####
// #####
// ######
// #######
// ```

// After this exercise, you should be familiar with loop, string's methods
// > Hint: after every loop, add one more `#` to your string and console.log()



function triangleBuilding() {
    var string = "#";
    var repeatedString = "";
    for (var i = 0; i < 7; i++) {
        repeatedString = repeatedString + string;
        console.log(repeatedString);
    }
}
