function groupByCommas(n) {
  
    n = String(n).split('');
  
    for (let i = n.length - 3 ; i > 0 ; i -= 3) {
        n[i] = "," + n[i];
    }

    return n.join('');
  
}