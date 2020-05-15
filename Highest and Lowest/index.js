function highAndLow(numbers){

  const arrayOfNumbers = numbers.split(' ');
  let highest = arrayOfNumbers[0];
  let lowest = arrayOfNumbers[0];

  arrayOfNumbers.forEach(element => {
    if ( parseInt(element) > highest ) {
      highest = element;
    }
    if ( parseInt(element) < lowest ) {
      lowest = element;
    }
  }); 
  
  return `${highest} ${lowest}`

}