function removeDuplicates(nums: number[]): number {
    // have a variable that stores index of first found element
    // iterate until current index value is different, then slice array from firs tindex+1 until the difference between curr index and found index, meaning the amount of positions the idnex moved.

    if (nums.length === 0) return 0;

        let k = 1; // Pointer for the position of the next unique element

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] !== nums[i - 1]) {
                nums[k] = nums[i]; // Move the unique element to the correct position
                k++;
            }
        }

        return k; // The length of the array with unique elements
};