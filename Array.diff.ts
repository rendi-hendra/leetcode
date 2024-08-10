function arrayDiff(a: number[], b: number[]): number[] {
  //   return a.filter((x) => !b.includes(x));

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        a.splice(i, 1);
        i--;
        break;
      }
    }
  }
  return a;
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
