let num = 50;
let startNum = -20;

function oneToHundred(number, start){
    if(start === number + 1){
        return;
    }

    console.log(start);
    oneToHundred(number, ++start);
}

oneToHundred(num, startNum);