function tickets(peopleInLine) {
  const money = {
    25: 0,
    50: 0,
    100: 0,
  };

  for (let i = 0; i <= peopleInLine.length; i++) {
    if (peopleInLine[i] === 25) {
      money[peopleInLine[i]]++;
    } else if (peopleInLine[i] === 50) {
      if (money[25] > 0) {
        money[25]--;
        money[peopleInLine[i]]++;
      } else {
        return "NO";
      }
    } else if (peopleInLine[i] === 100) {
      if (money[50] > 0 && money[25] > 0) {
        money[50]--;
        money[25]--;
        money[peopleInLine[i]]++;
      } else if (money[25] >= 3) {
        money[25] -= 3;
        money[peopleInLine[i]]++;
      } else {
        return "NO";
      }
    }
  }
  return "YES";
}