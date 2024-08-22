function duplicateCount(text: string): number{
    const textArr = text.toLowerCase().split('');
    let result: string[] = [];

    console.log(textArr);

    for (let i = 0; i < textArr.length; i++) {
        for (let j = i + 1; j < textArr.length; j++) {
            if (textArr[i] == textArr[j]){
                if (!result.includes(textArr[i])){
                    result.push(textArr[i]);
                }
                break
            }
        }
    }
    
    return result.length;
  }

  console.log(duplicateCount("INdivisibility"));
  console.log(duplicateCount("INdivisibilitys"));
  console.log(duplicateCount("test"));
  