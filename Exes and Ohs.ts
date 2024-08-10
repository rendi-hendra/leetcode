function xo(str: string) : boolean {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == 'x' || str[i] == 'X') {
        count++;
      } else if (str[i] == 'o' || str[i] == 'O') {
        count--;
      }
    }
    if (count == 0) {
      return true;
    } else {
      return false;
    }
  }

  console.log(xo('xoooxx'));
  