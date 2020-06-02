function anagrams(word, words) {
  const sortedWord = word.split('').sort().join('');
  const whichWords = [];
  words.forEach(element => {
    if (sortedWord === element.split('').sort().join('')) {
      whichWords.push(element);
    };
  });
  return whichWords;
}