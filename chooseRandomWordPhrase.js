// ????? Combine the 3 words into a phrase in RANDOM ORDER
// (Hint: we can use Math.random()  to get a random number, n, where 0.0 <= n <= 1.0)
// Log the phrase

//can print any order/frequency of the three words
// 1 words, randomorder

function chooseRandomWord(word1, word2, word3) {
  var wordNum = 3;
  var randomNum = Math.random() * wordNum;
  var flooredRandomNum = Math.floor(randomNum);
  var randomWordNum = flooredRandomNum + 1;
  var chosenWord;
  //instead of assigning value manually, what if we make the chooser choose the value
  //how do we make it choose the word?

  if (randomWordNum === 1) {
    chosenWord = word1;
  } else if (randomWordNum === 2) {
    chosenWord = word2;
  } else if (randomWordNum === 3) {
    chosenWord = word3;
  }
  return chosenWord;
}

//makeRandomPhrase("I", "like", "cake");
var a = chooseRandomWord("I", "like", "cake");
var b = chooseRandomWord("I", "like", "cake");
var c = chooseRandomWord("I", "like", "cake");

console.log(a + b + c);

/**
 * function Math.random() {
 *   var n = system.getRandom;
 *   return n; // THIS IS THE CRITICAL LINE
 * }
 */

//var a = Math.random(); // returns a random number
//var b = Math.random();
//console.log(Math.floor(Math.random() * max) + 1));
// 1, 2, 3

//  console.log(Math.floor(Math.random() * 2) + 1);
//figure out how to get a random number for my var wordNum = ??between 1, 2, or 3 (should be a whole number)

//- word(n)
//console.log(Math.random(word1, word2, word3));
//tried switching the two
//console.log(Math.random))
//  Math.floor(Math.random())???

// if (randomWordNum === 1) {
// return word1;
//   } else if (randomWordNum === 2) {
//   return word2;
// } else if (randomWordNum === 3) {
//   return word3;
// }
// }
