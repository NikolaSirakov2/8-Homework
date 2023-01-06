let num = 10;
let startNum = -10;

function oneToHundred(number, start){
    if(start === number + 1){
        return;
    }

    if(start % 2 !== 0){
    console.log(start);
    };
    oneToHundred(number, ++start);
}

oneToHundred(num, startNum);