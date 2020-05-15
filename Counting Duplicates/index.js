function duplicateCount(text) {
  const arrayOfSplittedText = text.toLowerCase().split("");
  const objectOfText = {};
  const arrayOfCount = [];
  let count = 0;

  arrayOfSplittedText.forEach((element) => {
    if (objectOfText.hasOwnProperty(element)) {
      objectOfText[element]++;
    } else {
      objectOfText[element] = 0;
    }
  });

  for (key in objectOfText) {
    arrayOfCount.push(objectOfText[key]);
  }

  arrayOfCount.forEach((element) => {
    if (element > 0) {
      count++;
    }
  });

  return count;
}