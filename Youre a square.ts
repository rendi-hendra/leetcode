function isPerfectSquare(num: number): boolean {
  if (num < 0) return false;
  const sqrt = Math.sqrt(num);
  return Number.isInteger(sqrt);
}

// Examples
console.log(isPerfectSquare(-1)); // false
console.log(isPerfectSquare(0)); // true
console.log(isPerfectSquare(3)); // false
console.log(isPerfectSquare(4)); // true
console.log(isPerfectSquare(25)); // true
console.log(isPerfectSquare(26)); // false
