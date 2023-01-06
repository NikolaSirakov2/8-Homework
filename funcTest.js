function something(a,b,c) {
    return c(a) + c(b);
}

let beta = (param) => {
    return param.length;
}

console.log(something("Nikola", "Sirakov", beta));