function componentToHex(c) {
  if (c > 255) {
    c = 255;
  } else if (c < 0) {
    c = 0;
  }
  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex.toUpperCase() : hex.toUpperCase();
}
  
function rgb(r, g, b) {
  return componentToHex(r) + componentToHex(g) + componentToHex(b);
}