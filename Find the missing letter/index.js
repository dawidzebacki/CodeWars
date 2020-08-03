function findMissingLetter(array) {
  
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    for (let i = 0; i < array.length - 1; i++) {
      
        if (alphabet.indexOf(array[i + 1].toLowerCase()) - 1 !== alphabet.indexOf(array[i].toLowerCase())) {
          
            if (array[0].charCodeAt() < 97) {
              
                return alphabet[alphabet.indexOf(array[i].toLowerCase()) + 1].toUpperCase();
              
            } else {
              
                return alphabet[alphabet.indexOf(array[i]) + 1];
              
            }
        }
    }
}