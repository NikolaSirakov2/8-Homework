
let pairs = 0;
let count = 0;
let validCards = "123456789PETJQKA";

while(pairs < 4){
    let cardOne = validCards[Math.ceil(Math.random())*17 - 1];
    let cardTwo = validCards[Math.ceil(Math.random())*17 - 1];
    let cardThree = validCards[Math.ceil(Math.random())*17 - 1];
    let cardFour = validCards[Math.ceil(Math.random())*17 - 1];
    let cardFive = validCards[Math.ceil(Math.random())*17 - 1];
    let input = "" + cardOne + cardTwo + cardThree + cardFour + cardFive;

    console.log(input);

    pairs++;
}

// let array = input.split(" ");

// for(let i = 0; i < array.length; i++){
    
// }