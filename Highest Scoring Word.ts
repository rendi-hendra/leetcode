// 1. str menjadi arr
// 2. loop arr
// 3. cari huruf terbesar
// 4. return huruf terbesar

const high = (str: string): string => {
  const word: string = "abcdefghijklmnopqrstuvwxyz";
  const strArr: string[] = str.split(" ");
  let temp: number[] = [];

  for (let i = 0; i < strArr.length; i++) {
    const newArr: number[] = [];
    for (let j = 0; j < strArr[i].length; j++) {
      newArr.push(word.indexOf(strArr[i][j]) + 1);
    }
    temp.push(newArr.reduce((a, b) => a + b, 0));
  }
  const maxWord: number = Math.max(...temp);
  const indexMaxWord: number = temp.indexOf(maxWord);
  
  return strArr[indexMaxWord];
};

console.log(high("man i need a taxi up to ubud")); // "taxi"
console.log(high('what time are we climbing up the volcano')); // "volcano"
