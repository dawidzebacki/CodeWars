function factorial(n) {
    if (n > 12 || n < 0) {
        throw new RangeError("The argument must be between 0 and 12.");
    }
    
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }

}