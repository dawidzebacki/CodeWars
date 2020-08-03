Array.prototype.square = function() {
  return this.map(element => element * element)
};

Array.prototype.cube = function() {
  return this.map(element => element * element * element)
};

Array.prototype.sum = function() {
  return this.length ? this.reduce((prev, curr) => prev + curr) : 'Wrong sum';
};

Array.prototype.average = function() {
  return this.length ? this.reduce((prev, curr) => prev + curr) / this.length : 'Wrong average';
};

Array.prototype.even = function() {
  return this.filter(element => element % 2 === 0)
};

Array.prototype.odd = function() {
  return this.filter(element => element % 2 === 1)
};