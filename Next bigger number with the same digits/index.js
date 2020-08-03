function nextBigger(n) {

    const nums = n.toString().split('');
    let temp = -1;
    let root;

    for (let i = nums.length; i > 0; i--) {
        if (nums[i] > nums[i - 1]) {
            temp = i - 1;
            break;
        }

    }

    if (temp === -1) return temp;

    let right = nums.splice(temp);

    root = right.splice(0, 1)[0];

    let lowest = null, lowestIndex = null;
  
    for (let i = 0; i < right.length; i++) {
        if (right[i] > root) {
            if (lowest == null || right[i] < lowest) {
                lowest = right[i];
                lowestIndex = i;
            }
        }
    }

    if (lowestIndex == null) return -1;

    right.splice(lowestIndex, 1);
    right.push(root);
    right = right.sort();

    let result = Number(nums.concat([lowest]).concat(right).join(''));

    return result > n ? result : -1;
}