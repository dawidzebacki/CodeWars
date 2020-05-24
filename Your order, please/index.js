function order(words) {
  const finalArray = [];

  for (let i = 1; i <= 9; i++) {
    words.split(" ").forEach((element) => {
      if (element.includes(i)) {
        finalArray.push(element);
      }
    });
  }

  return finalArray.join(" ");
}