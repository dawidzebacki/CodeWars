function countPositivesSumNegatives(input) {
  
    if (input === null || !input.length) {
      return [];
    }
    
    const positive = input.filter(element => element > 0);
    const sumOfNegative = input.filter(element => element < 0).reduce((prev,curr) => prev + curr);
    
    return [positive.length, sumOfNegative];
    

}