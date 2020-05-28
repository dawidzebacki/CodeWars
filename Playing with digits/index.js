function digPow(n, p) {
  let number = 0;
  let nextRun = 0;

  n.toString()
    .split("")
    .forEach((element) => {
      number = number + Math.pow(element, p + nextRun);
      nextRun++;
    });

  return number % n === 0 ? number / n : -1;
}