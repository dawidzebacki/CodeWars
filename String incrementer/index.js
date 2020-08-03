function incrementString(strng) {

    const numbers = strng.split('').map(element => Number(element)).filter(element => element > -1);
    const letters = strng.split('').map(element => element >= 0 ? " " : element);

    for (let i = numbers.length - 1  ; i >= 0 ; i--) {
        if (numbers[i] === 9) {
            numbers[i] = 0;
            if ( i === 0) {
                numbers.unshift(1);
            }
        } else {
            numbers[i]++;
            break;
        }
    }

    if (numbers.length === 0 ) {
        numbers.push(1);
    }
    
    return letters.join('').trim()+numbers.join('');
}