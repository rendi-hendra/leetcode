function isTriangle(a: number, b: number, c: number): boolean {
  //   if(a >=0 && b >=0 && c >=0) false
  if (a + b > c && a + c > b && b + c > a) return true;
  return false;
}

console.log(isTriangle(1, 2, 2)); // true
console.log(isTriangle(7, 2, 2)); // false
console.log(isTriangle(0, 0, 0)); // false
