function getCount(str) {
  let vowelsCount = 0;

  const vowels = ["a", "e", "u", "i", "o"];

  const text = str.split("");

  for (let i = 0; i <= text.length; i++) {
    if (vowels.includes(text[i])) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}