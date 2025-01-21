function removeDuplicates(nums: number[]): number {
    let i = 0;
    
    // iterate through each number
    for (const ele of nums) {
        // if current number is equal to previous one
        if (i === 0 || i === 1 || nums[i-2] != ele) {
            nums[i] = ele
            i++;
        }
    }
    return i;
};