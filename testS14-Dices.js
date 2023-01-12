let biggestRoll = 0;
let tryes = 0;

while(biggestRoll !== 6){
    let rollOne = Math.ceil(Math.random()*6);
    let rollTwo = Math.ceil(Math.random()*6);
    let rollThree =  Math.ceil(Math.random()*6);

    if(rollOne + rollTwo + rollThree === 18){
        biggestRoll++;
    }
    tryes++;
}

console.log(`Отне ${tryes} опита да хвърля ${biggestRoll} последователни зара с
максимален брой!`);
