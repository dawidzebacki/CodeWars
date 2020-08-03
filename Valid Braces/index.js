function validBraces(braces = braces) {
  
    const bracesLength = braces.length;
  
    for (let i = 0; i < bracesLength / 2; i++) {
        braces = braces.replace("{}", "");
        braces = braces.replace("()", "");
        braces = braces.replace("[]", "");
    }
  
    return !Boolean(braces.length);
  
}