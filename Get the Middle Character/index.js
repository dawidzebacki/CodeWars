function getMiddle(s) {
  const text = s.split("");
  let returnedText;
  if (text.length % 2 === 0) {
    returnedText = text[text.length / 2 - 1] + text[text.length / 2];
  } else {
    returnedText = text[text.length / 2 - 0.5];
  }
  return returnedText;
}