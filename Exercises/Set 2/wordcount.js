// 1. Write a function which count the number of occurrence of words in a paragraph or a sentence.The function countWords takes a paragraph and two words as parameters. It compare which word is most frequently occurred in the paragraph.

// ```js
// const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';
// console.log(countWords(paragraph,'love', 'you'));
// The word love more frequently occurred than you.

// ```

var paragraph = "";

function wordCount(paragraph,word1,word2) {
    var newParagraph = paragraph.replace(/./g, ""); //remove special characters from the paragraph
    var paragraphWordList = newParagraph.split(" "); 
    var wordCount1 = 0;
    var wordCount2 = 0;
    for (var i = 0; i < paragraphWordList.length; i++) {
        if (word1 == paragraphWordList[i]){
            wordCount1++;
        }
        if (word2 == paragraphWordList[i]){
            wordCount2++;
        }
    }
    switch(true) {
        case wordCount1 > wordCount2:
            console.log("The word " + word1 + " more frequently occured than " + word2);
            break;
        case wordCount2 > wordCount1:
            console.log("The word " + word2 + " more frequently occured than " + word1);
            break;
        default:
            console.log("The word " + word1 + " and " + word2 + " occured equally");

    } 
}


// I don't understand why my replace method doesn't work. Reference: https://www.w3schools.com/jsref/jsref_replace.asp 
