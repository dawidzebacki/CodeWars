function sumTwoSmallestNumbers(numbers) {
    const first = Math.min(...numbers);
    
    numbers.splice(numbers.indexOf(Math.min(...numbers)), 1);

    return first + Math.min(...numbers);
}