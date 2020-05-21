decodeMorse = function (morseCode) {
  const alphabet = {
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    "/": " ",
    "-.-.--": "!",
    ".-.-.-": ".",
    "--.--": ",",
    "...---...": "SOS",
  };

  const translatedMessage = [];

  morseCode
    .trim()
    .split(" ")
    .forEach((element) => {
      if (alphabet.hasOwnProperty(element)) {
        translatedMessage.push(alphabet[element]);
      } else {
        translatedMessage.push(" ");
      }
    });

  return translatedMessage.join("").toUpperCase().replace(/\s+/g, " ");
};