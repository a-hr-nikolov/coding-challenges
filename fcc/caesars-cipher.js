function cipher13(str) {
  let newString = str.split('');
  newString = newString.map(item => {
    if (/[A-Z]/.test(item)) return item.charCodeAt(0);
    else return item;
  });
  for (let i = 0; i < newString.length; i++) {
    if (typeof newString[i] == 'number') {
      newString[i] += 13;
      if (newString[i] > 90) newString[i] -= 26;
    }
  }
  newString = newString
    .map(item => {
      if (/[0-9]+/.test(item)) return String.fromCharCode(item);
      else return item;
    })
    .join('');

  return newString;
}

console.log(cipher13('SERR PBQR PNZC'));
