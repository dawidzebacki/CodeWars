function persistence(num) {
  let arrayOfNumbers = num.toString().split("");
  let number = 1;
  let index = 0;

  while (arrayOfNumbers.length > 1) {
    for (let i = 0; i < arrayOfNumbers.length; i++) {
      number = number * arrayOfNumbers[parseInt(i)];
    }
    index++;
    arrayOfNumbers = number.toString().split("");
    number = 1;
  }

  return index;
}