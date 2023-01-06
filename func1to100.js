let num = y;
let startNum = x;

function oneToHundred(number, start){
    if(start === number + 1){
        return;
    }

    console.log(start);
    oneToHundred(number, ++start);
}

oneToHundred(num, startNum);