Math.round = function (number) {
  
    if (!String(number).includes('.')) return number;

    number = String(number).split('.');

    if (Number(number[1][0] >= 5)) return Number(number[0]) + 1;

    else return Number(number[0]);
};

Math.ceil = function (number) {
  
    if (!String(number).includes('.')) return number;

    else return Number(String(number).split('.')[0]) + 1;
  
};

Math.floor = function (number) {
  
    if (!String(number).includes('.')) return number;

    else return Number(String(number).split('.')[0]);
  
};