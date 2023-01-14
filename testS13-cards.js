let pairs = 0;
let count = 0;
let allCards = "123456789PETJQKA";
let validCards = "23456789TJQKA";

while (pairs < 4) {
  let cardOne = allCards[Math.floor(Math.random() * allCards.length)];
  let cardTwo = allCards[Math.floor(Math.random() * allCards.length)];
  let cardThree = allCards[Math.floor(Math.random() * allCards.length)];
  let cardFour = allCards[Math.floor(Math.random() * allCards.length)];
  let cardFive = allCards[Math.floor(Math.random() * allCards.length)];
  let input = "" + cardOne + cardTwo + cardThree + cardFour + cardFive;
    count++;

    console.log(input);

  for (let i = 0; i < input.length; i++) {
        if(!validCards.includes(input[i])){
            console.log("Invalid cards given!");
            pairs = 0;
            count--;
            break;
        } else if(input.indexOf(input[i]) !== input.lastIndexOf(input[i])){
        if(input.indexOf(input[i]) !== input.lastIndexOf(input[i])){
            pairs++;
            break;
        }
    }
  }
}

console.log(pairs);
console.log(`Number of tries: ${count}`);
