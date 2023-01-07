let n = 7;

function from1toN(num, i = 1){
    if(i === num){
        return num;
    }

    return i + from1toN(n, i+1);
}

console.log(from1toN(n));