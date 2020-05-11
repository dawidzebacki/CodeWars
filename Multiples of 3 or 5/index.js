function solution(number){  
  const arrayOfNumbers = [0];

  for (let i = number - 1 ; i > 0 ; i--) {
    if ( i % 3 === 0 ) {
      arrayOfNumbers.push(i);
    }
    if ( i % 5 === 0 && i % 3 !== 0) {
      arrayOfNumbers.push(i);
    }
  }

  return arrayOfNumbers.reduce((a, b) => a + b);
}