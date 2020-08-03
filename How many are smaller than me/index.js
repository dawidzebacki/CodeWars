function smaller(nums) {
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
        let howMuch = 0;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) howMuch++;
        }
        arr.push(howMuch);
    }
    return arr;
}