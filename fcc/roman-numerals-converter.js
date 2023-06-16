function convertToRoman(num) {
  let newString = num.toString().split('');
  newString.reverse();
  let mappedString = [];
  let romanNum = '';

  let decimal = 1 / 10;

  for (let i = 0; i < newString.length; i++) {
    decimal *= 10;
    switch (newString[i]) {
      case '2':
        mappedString.push([1 * decimal, 1 * decimal]);
        continue;
      case '3':
        mappedString.push([1 * decimal, 1 * decimal, 1 * decimal]);
        continue;
      case '4':
        mappedString.push([1 * decimal, 5 * decimal]);
        continue;
      case '6':
        mappedString.push([5 * decimal, 1 * decimal]);
        continue;
      case '7':
        mappedString.push([5 * decimal, 1 * decimal, 1 * decimal]);
        continue;
      case '8':
        mappedString.push([5 * decimal, 1 * decimal, 1 * decimal, 1 * decimal]);
        continue;
      case '9':
        mappedString.push([1 * decimal, 10 * decimal]);
        continue;
      default:
        mappedString.push([newString[i] * decimal]);
    }
  }
  mappedString = mappedString.reverse().flat(Infinity);
  mappedString = mappedString.filter(item => item != 0);

  for (let i = 0; i < mappedString.length; i++) {
    switch (mappedString[i]) {
      case 1:
        romanNum = romanNum + 'I';
        continue;
      case 5:
        romanNum = romanNum + 'V';
        continue;
      case 10:
        romanNum = romanNum + 'X';
        continue;
      case 50:
        romanNum = romanNum + 'L';
        continue;
      case 100:
        romanNum = romanNum + 'C';
        continue;
      case 500:
        romanNum = romanNum + 'D';
        continue;
      case 1000:
        romanNum = romanNum + 'M';
        continue;
    }
  }

  console.log(mappedString);
  console.log(romanNum);
  return romanNum;
}

convertToRoman(1981);
