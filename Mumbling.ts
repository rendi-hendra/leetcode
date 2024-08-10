function accum(s: string): string {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        result += s[i].toUpperCase() + s[i].repeat(i).toLowerCase() + '-';
    }
    return result.slice(0, -1);
}

console.log(accum('abcd'));
