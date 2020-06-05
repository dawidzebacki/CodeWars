function rot13(message) {
  const messageASCII = [];
  const result = [];
  const splittedMessage = message.split("");
  for (let i = 0; i < splittedMessage.length; i++) {
    if (
      splittedMessage[i].charCodeAt() >= 65 &&
      splittedMessage[i].charCodeAt() <= 90
    ) {
      if (splittedMessage[i].charCodeAt() + 13 > 90) {
        let temp = 91 - splittedMessage[i].charCodeAt();
        messageASCII.push(65 + (13 - temp));
      } else {
        messageASCII.push(splittedMessage[i].charCodeAt() + 13);
      }
    }
    else if (
      splittedMessage[i].charCodeAt() >= 97 &&
      splittedMessage[i].charCodeAt() <= 122
    ) {
      if (splittedMessage[i].charCodeAt() + 13 > 122) {
        let temp = 123 - splittedMessage[i].charCodeAt();
        messageASCII.push(97 + (13 - temp));
      } else {
        messageASCII.push(splittedMessage[i].charCodeAt() + 13);
      }
    } else {
      messageASCII.push(splittedMessage[i]);
    }
  }
  for (let i = 0; i < messageASCII.length; i++) {
    if (
      (messageASCII[i] >= 65 && messageASCII[i] <= 90) ||
      (messageASCII[i] >= 97 && messageASCII[i] <= 122)
    ) {
      result.push(String.fromCharCode(messageASCII[i]));
    } else {
      result.push(messageASCII[i]);
    }
  }
  return result.join("");
}