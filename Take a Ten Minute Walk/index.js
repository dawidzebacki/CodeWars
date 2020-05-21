function isValidWalk(walk) {
  let sum = 0;
  const walkObject = {
    n: 0,
    s: 0,
    w: 0,
    e: 0,
  };

  walk.forEach((element) => {
    walkObject[element]++;
  });

  for (const key in walkObject) {
    sum += walkObject[key];
  }

  if (sum === 10) {
    return walkObject.n === walkObject.s && walkObject.w === walkObject.e
      ? true
      : false;
  }
  return false;
}