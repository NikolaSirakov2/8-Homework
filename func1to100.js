let num = 100;

function oneToHundred(number, start){
    if(start === number + 1){
        return;
    }

    console.log(start);
    oneToHundred(number, ++start);
}

oneToHundred(num, 1);