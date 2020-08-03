String.prototype.toJadenCase = function () {
  return this.split(' ').map(element => element[0].toUpperCase() + element.slice(1, element.length)).join(' ');
};