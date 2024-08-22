function duplicateEncode(word: string) {
  const lowerCaseWord = word.toLowerCase();

  // Buat objek untuk menyimpan frekuensi setiap karakter
  const charCount: { [key: string]: number } = {};

  
  
  // Hitung frekuensi setiap karakter
  for (const char of lowerCaseWord) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    console.log(charCount);

  // Buat string hasil berdasarkan frekuensi
  return lowerCaseWord
    .split("")
    .map((char) => (charCount[char] > 1 ? ")" : "("))
    .join("");
}

console.log(duplicateEncode("din"))