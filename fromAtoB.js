let a = 15;
let b = 12;
let string = "";

function oneToHundred(number, start){
    if(start === number + 1){
        return;
    }

    string += start + " ";
    oneToHundred(number, ++start);
}

oneToHundred(a, b);

console.log(string);