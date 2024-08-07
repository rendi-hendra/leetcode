function isPalindrome(x: number): boolean {
  let xS = x.toString();
  for (let i = 0 - 1; i < xS.length / 2; i++) {
    if (xS[i] != xS[xS.length - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(121));
