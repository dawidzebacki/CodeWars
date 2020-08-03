function perimeter(n) {

    let sumOfNums = 1;
    let firstNum = 0;
    let secondNum = 1;

    for (let i = 0; i < n; i++) {
        let temporaryNumber;

        sumOfNums += firstNum + secondNum;
      
        temporaryNumber = secondNum;
      
        secondNum += firstNum;
      
        firstNum = temporaryNumber;

    }

    return 4 * sumOfNums;
    
}