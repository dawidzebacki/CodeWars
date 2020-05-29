function iqTest(numbers) {
  let sumEven = 0;
  let sumOdd = 0;
  const numArray = numbers.split(" ");
  const numObject = {
    even: [0, 0],
    odd: [0, 0],
  };

  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 === 0) {
      numObject.even = [(sumEven += sumEven + 1), i + 1];
    } else {
      numObject.odd = [(sumOdd += sumOdd + 1), i + 1];
    }

    if (numObject.even[0] >= 2 && numObject.odd[0] === 1) {
      return numObject.odd[1];
    }

    if (numObject.odd[0] >= 2 && numObject.even[0] === 1) {
      return numObject.even[1];
    }
  }
}