let input = [
  "3 A T 4 Q",
  "J A A T T",
  "A T Q K 1",
  "A J Q K A",
  "4 8 T K K",
  "4 4 T Q Q",
  "2 Q 7 T 1",
  "2 2 7 6 T",
  "A 4 7 A 9",
  "2 Q 7 Q K",
  "4 7 8 4 A",
];

let packs = 0;
let count = 0;
let correctInput = "23456789TJQKA";

for (let j = 0; j < input.length; j++) {
  let array = input[j].split(" ");
  count++;

  for (let i = 0; i <= array.length + 1; i++) {
    let last = array.length + 1;
    let card = array[0];
    array.shift();
    

    if (correctInput.includes(card)) {
      if (array.includes(card)) {
        packs++;
        if (packs === 4) {
          console.log(`Number of tries: ${count}`);
        }
        break;
      }

      if (i === last) {
        packs = 0;
      }
    } else {
      console.log("Invalid cards given!");
      packs = 0;
      count = count -1;
      break;
    }
  }
}
