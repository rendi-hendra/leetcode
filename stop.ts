function spinWords(words: string): string {
    const wordsArray = words.split(' ');
    const result: string[] = [];
    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i].length < 5) {
            result.push(wordsArray[i]);
        } else {
            result.push(wordsArray[i].split('').reverse().join(''));
        }
    }
    return result.join(' ');
}

console.log(spinWords('This is another test'));
