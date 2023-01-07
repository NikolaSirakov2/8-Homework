let num = 20;

function ifSumEqualNum(start, end){
    if(start === end){
        return;
    }

    let string = start + "";
    // console.log(Number(string[0]) + Number(string[1]) + Number(string[2]));

    if(num === Number(string[0]) + Number(string[1]) + Number(string[2])){
        console.log(string);
    }

    return ifSumEqualNum(++start,end);
}

ifSumEqualNum(100, 1000);