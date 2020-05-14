function digital_root(n) {
  const arrayOfNumbers = n.toString().split('');

  if ( arrayOfNumbers.length > 1 ) {
    const number = arrayOfNumbers.reduce((a, b) => parseInt(a) + parseInt(b));
    return digital_root(number);
  }

  return n;
}