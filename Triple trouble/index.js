function tripledouble(num1, num2) {
  
    num1 = String(num1);
    num2 = String(num2);
  
    for (let i = 0; i < num1.length; i++) {
      
        if (num1[i] === num1[i + 1] && num1[i] === num1[i+2]) {
          
            for (let j = 0; j < num2.length; j++) {
              
                if (num2[j] === num2[j + 1] && num2[j] === num1[i]) return 1;
              
            }
          
        }
      
    }
  
    return 0;
}