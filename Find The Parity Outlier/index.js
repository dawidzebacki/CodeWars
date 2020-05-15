function findOutlier(integers) {
  let index = 0;

  const oddNumbers = [];
  const evenNumbers = [];

  for (let i = 0; i < integers.length; i++) {
    if (index < 3) {
      if (integers[i] % 2 === 0) {
        evenNumbers.push(integers[i]);
      } else {
        oddNumbers.push(integers[i]);
      }
      index++;
      if (index >= integers.length) {
        if (evenNumbers.length === 1) {
          return evenNumbers[0];
        } else if (oddNumbers.length === 1) {
          return oddNumbers[0];
        }
      }
    } else {
      if (integers[i] % 2 === 0) {
        evenNumbers.push(integers[i]);
      } else {
        oddNumbers.push(integers[i]);
      }
      if (evenNumbers.length === 1) {
        return evenNumbers[0];
      } else if (oddNumbers.length === 1) {
        return oddNumbers[0];
      }
    }
  }
}