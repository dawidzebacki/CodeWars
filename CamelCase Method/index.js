String.prototype.camelCase=function(){
  return this.length > 0 ? this.trim().split(' ').map(element => element[0].toUpperCase() + element.slice(1, element.length)).join('') : "";
}