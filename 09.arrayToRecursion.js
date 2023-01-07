let a = 13;
let b = 50;
let string = "";
let sum = 0;

function fromAtoB(end, i) {
  if (i === end) {
    return (string += i * i);
  }

  if (i % 3 === 0) {
    string += `skip ${i}, `;
  } else {
    sum += i * i;
    if (sum <= 2000) {
      string += i * i + ", ";
    } else {
      return (string += i * i);
    }
  }

  return fromAtoB(end, ++i);
}

console.log(fromAtoB(b, a));
