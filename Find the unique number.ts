function findUniq(arr: number[]): number {
  const result: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if(arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
        result.push(arr[i]);
    }
  }
    
    return Number(result.join());   
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));
