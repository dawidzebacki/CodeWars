function deleteNth(arr, n) {
  const sortedArray = [];
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
    if (obj[arr[i]] <= n) {
      sortedArray.push(arr[i]);
    }
  }
  return sortedArray;
}