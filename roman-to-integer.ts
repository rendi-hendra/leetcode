function romanToDecimal(roman: string): number {
  const valueMap = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let decimal = 0;
  let prevValue = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    const currentValue = valueMap.get(roman[i]);
    console.log(currentValue);

    if (currentValue === undefined) {
      throw new Error(`Invalid roman numeral: ${roman[i]}`);
    }

    if (currentValue >= prevValue) {
      decimal += currentValue;
    } else {
      decimal -= currentValue;
    }

    prevValue = currentValue;
  }

  return decimal;
}

const romanNumeral = "XV";

console.log(romanToDecimal(romanNumeral));

function fromRoman(roman: string): number {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let num = 0;
  let prevValue = 0;

  // Iterasi dari kiri ke kanan untuk menambah dan mengurangi sesuai aturan angka Romawi
  for (let i = roman.length - 1; i >= 0; i--) {
    const currentValue = romanNumerals[roman[i]];

    console.log(num);

    if (currentValue < prevValue) {
      num -= currentValue;
    } else {
      num += currentValue;
    }

    prevValue = currentValue;
  }

  console.log(num);
  console.log(prevValue);

  return num;
}

fromRoman("IV");

// Contoh penggunaan
// console.log(fromRoman("CXCIX")); // Output: 199
// console.log(fromRoman("MMXXIII")); // Output: 2023
// console.log(fromRoman("LVIII")); // Output: 58
// console.log(fromRoman("IV")); // Output: 4
// console.log(fromRoman("IX")); // Output: 9
