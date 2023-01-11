let input = [
  "3 A T 4 Q",
  "J A A T T",
  "1 T Q K A",
  "A J Q K A",
  "4 8 T K K",
  "4 4 T Q Q",
  "2 Q 7 T A",
  "2 Q 7 T A",
  "2 2 7 6 T",
  "A 4 7 A 9",
  "2 Q 7 Q K",
  "4 7 8 4 A",
];

let packs = 0;
let count = 0;



  while (packs !== 4) {
    for (let j = 0; j < input.length; j++) {
        let array = input[j].split(" ");
        
    for (let i = 0; i <= array.length + 1; i++) {
      let card = array[0];
      array.shift();
      
    //   if(card !== 2)

      if (array.includes(card)) {
        packs++;
        break;
      }

      if (i === array.length + 1) {
        packs = 0;
      }
    }
  }
}

console.log(packs);
console.log(count);
