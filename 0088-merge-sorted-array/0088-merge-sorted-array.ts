/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let newNums1 = nums1.slice(0, m);
    
    const merged = [...newNums1, ...nums2].sort((a, b) => a - b);

    for (let i = 0; i < merged.length; i++) {
        nums1[i] = merged[i];
    }
};