function sortArray(array) {

  const odds = [];
  let j = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      odds.push(array[i]);
      array[i] = "";
    }
  }

  odds.sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "") {
      array[i] = odds[j];
      j++;
    }
  }

  return array;

}