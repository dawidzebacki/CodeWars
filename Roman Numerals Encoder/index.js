function solution(number) {
    const romanNumberList = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
  
    let romanString = "";
    let a;
  
    for (let romanNumber in romanNumberList) {
        a = Math.floor(number / romanNumberList[romanNumber]);
        if (a >= 0) {
            for (let i = 0; i < a; i++) {
                romanString += romanNumber;
            }
        }
        number = number % romanNumberList[romanNumber];
    }
    return romanString;
}