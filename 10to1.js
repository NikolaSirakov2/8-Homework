let num = 1;
let startNum = 10;

function oneToHundred(number, start){
    if(start === number - 1){
        return;
    }

    console.log(start);
    oneToHundred(number, --start);
}

oneToHundred(num, startNum);