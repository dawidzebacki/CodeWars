const countBits = function (n) {
  const binary = [];

  while (n >= 1) {
    if (n % 2 === 0) {
      binary.push(0);
      n = n / 2;
    } else {
      binary.push(1);
      n = n / 2 - 0.5;
    }
  }
  return binary.length ? binary.reverse().reduce((prev, curr) => prev + curr) : 0;
};