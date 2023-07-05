function factorial(n) {
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    throw new Error('Factorial is not defined for negative numbers');
  } else {
    return n * factorial(n - 1);
  }
}


console.log(factorial(2));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(7));
