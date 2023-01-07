function numbersTo987(start, end){
    if(start === end){
        return console.log(start);
    }

    let string = start + '';

    if(string[0] !== string[1] && string[0] !== string[2] && string[1] !== string[2]){
    console.log(start);
    }

    return numbersTo987(++start, end);
}

numbersTo987(102,987)