// let a = 5;
// let c = a;

// c = 3;

// console.log(a);
// console.log(c);

// let ar = [2,4,5];
// let ca = [2,4,5];

// ca[2] = 10;

// console.log(ar);
// console.log(ca);

let n = 4;
let m = 5;

let matrix = [];

for (let i = 0; i < n; i++) {
  for (let k = 0; k < m; k++) {
    matrix.push(new Array(4, 4));
  }
}

console.table(matrix);
