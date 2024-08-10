function printerError(s: string): string {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] > "m") {
      count++;
    }
  }
  return `${count}/${s.length}`;
}

console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));
