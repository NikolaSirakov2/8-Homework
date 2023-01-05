function fact(n) {
  while (n > 0) {
    return n * fact(n - 1);
    n--;
  }
}

console.log(fact(5));
