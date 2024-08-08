function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  let prefix = strs[0];
  console.log(prefix);

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      
      if (prefix === "") return "";
    }
  }

  return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));