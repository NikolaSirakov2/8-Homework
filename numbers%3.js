let n = 7;
let count = 0;
let string = '';

function numbers3(num, i = 3){
    count++;

    if(count === num){
        return string + i;
    }

    string += i + ",";

    return numbers3(num, i+3);
}

console.log(numbers3(n));
