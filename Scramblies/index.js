function scramble(str1, str2) {
  const obj1 = {};
  const obj2 = {};

  for (let i = 0; i < str1.length; i++) {
    if (!obj1[str1[i]]) {
      obj1[str1[i]] = 1;
    } else {
      obj1[str1[i]]++;
    }
  }

  for (let j = 0; j < str2.length; j++) {
    if (!obj2[str2[j]]) {
      obj2[str2[j]] = 1;
    } else {
      obj2[str2[j]]++;
    }
  }

  for (let key in obj2) {
    if (!obj1[key] || obj1[key] < obj2[key]) {
      return false;
    }
  }

  return true;
}