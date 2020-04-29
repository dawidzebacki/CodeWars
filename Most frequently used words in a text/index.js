function topThreeWords(text) {
  const arrayOfText = text.toLowerCase().split(" ");
  const objectOfText = {};
  const arrayOfWordsAndCount = [];
  const arrayOfWords = [];

  for (let i = 0; i < arrayOfText.length; i++) {
    if (arrayOfText[i].match(/[\W\s\d]/g)) {
      if (arrayOfText[i].match(/'/g) && arrayOfText[i].match(/[a-z]/g)) {

      } else {
        arrayOfText[i] = arrayOfText[i].replace(/[\W\s\d]/g, "");
      }
    }
    if (arrayOfText[i] === "") {
      continue;
    }
    if (objectOfText.hasOwnProperty(arrayOfText[i])) {
      objectOfText[arrayOfText[i]]++;
    } else {
      objectOfText[arrayOfText[i]] = 1;
    }
  }

  for (key in objectOfText) {
    arrayOfWordsAndCount.push([key, objectOfText[key]]);
  }

  arrayOfWordsAndCount.sort(function (a, b) {
    return b[1] - a[1];
  });

  for (let i = 0; i <= arrayOfWordsAndCount.length - 1 && i <= 2; i++) {
    arrayOfWords.push(arrayOfWordsAndCount[i][0]);
  }

  return arrayOfWords;
}