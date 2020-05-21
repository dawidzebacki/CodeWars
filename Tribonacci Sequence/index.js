function tribonacci(signature, n) {
  let nextRun = 0;
  let number = 0;

  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [signature[0]];
  } else if (n === 2) {
    return signature.slice(0, 2);
  } else if (n === 3) {
    return signature;
  } else {
    for (let i = 3; i <= n; i++) {
      number = signature[0 + nextRun] + signature[1 + nextRun] + signature[2 + nextRun];
      signature.push(number);
      nextRun++;
    }
    return signature.slice(0, n);
  }
}