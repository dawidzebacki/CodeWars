function createPhoneNumber(numbers) {
  const phoneNumber = ["("];
  for (let i = 0; i < numbers.length; i++) {
    if (i === 2) {
      phoneNumber.push(`${numbers[i]}) `);
    } else if (i === 5) {
      phoneNumber.push(`${numbers[i]}-`);
    } else {
      phoneNumber.push(numbers[i]);
    }
  }
  return phoneNumber.join('');
}