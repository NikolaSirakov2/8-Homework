let string =
  "Today is a good day for test. The sun is shining. The students are happy. The birds are blue.";
let array = string.split(". ");

console.log(`Total sentences: ${array.length}`);

let longestSentence = 0;
let longestWord = 0;
let sentenceWithLongestWord = 0;

for (let i = 0; i < array.length; i++) {
    if (i > 0) {
    if (array[i].length > array[i-1].length && array[i].length > array[0].length) {
      longestSentence = i;
    }
  }

  let wordArray = array[i].split(" ");

  for(let j = 0; j < wordArray.length; j++){
    if (wordArray[j].length > longestWord) {
        longestWord = wordArray[j].length;
        sentenceWithLongestWord = i;
      }
  }
}

console.log(`Longest sentence: ${array[longestSentence]}.`);
console.log(`Sentence with the longest word: ${array[sentenceWithLongestWord]}.`);