const positiveSum = arr => {
    let sum = 0;

    arr.forEach(element => {
       if (element > 0) {
           sum += element;
       } 
    });

    return sum;
}