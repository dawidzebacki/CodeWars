const isPrime = num => {
    const sqrt = Math.sqrt(num)
    for (let i = 2 ; i <= sqrt; i++) {
      if(num % i === 0) return false; 
    }
    return num > 1;
}