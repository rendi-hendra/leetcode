function findOddOccurrence(nums: number[]): number {
  // Objek untuk menyimpan frekuensi kemunculan setiap bilangan
  const frequency: Record<number, number> = {};

  // Hitung frekuensi setiap bilangan
  for (const num of nums) {
    if (frequency[num]) {
      frequency[num]++;
    } else {
      frequency[num] = 1;
    }
  }

  // Temukan bilangan yang frekuensinya ganjil
  for (const num in frequency) {
    if (frequency[num] % 2 !== 0) {
      return Number(num); // Konversi kunci objek dari string ke number
    }
  }

  throw new Error("No number with odd occurrences found"); // Bila tidak ditemukan, lemparkan error
}

// Contoh penggunaan
console.log(findOddOccurrence([7])); // Output: 7
console.log(findOddOccurrence([0])); // Output: 0
console.log(findOddOccurrence([1, 1, 2])); // Output: 2
console.log(findOddOccurrence([0, 1, 0, 1, 0])); // Output: 0
console.log(findOddOccurrence([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // Output: 4
