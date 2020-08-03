function narcissistic(value) {
    const numbers = value.toString().split('');
    return numbers.map(element => Math.pow(element, numbers.length)).reduce((accumulator, currentValue) => accumulator + currentValue) === value;
}