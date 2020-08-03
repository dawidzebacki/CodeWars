function bouncingBall(h,  bounce,  window) {
    if ( h > 0 && (bounce > 0 && bounce < 1) && window < h) {
        let howManyTimes = 1;
        h = h * bounce;
        while ( h > window) {
            h = h * bounce;
            howManyTimes += 2;
        }
        return howManyTimes;
    }
    return -1;
  }