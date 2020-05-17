function duplicateEncode(word) {
  const arrayOfLetters = word.toLowerCase().split("");
  const finalArray = [];

  for (let i = 0; i < arrayOfLetters.length; i++) {
    let index = 0;
    for (let j = 0; j < arrayOfLetters.length; j++) {
      if (arrayOfLetters[i] === arrayOfLetters[j]) {
        index++;
        if (index === 2) {
          finalArray.push(")");
        }
      }
      if (j === arrayOfLetters.length - 1 && index <= 1) {
        finalArray.push("(");
      }
    }
  }

  return finalArray.join("");
}