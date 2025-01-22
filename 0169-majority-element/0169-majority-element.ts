function majorityElement(nums: number[]): number {
    let count = 0;
    let major = 0;

    for (let num of nums) {
        if (count === 0) {
            major = num;
        }

        if (num === major) {
            count++;
        } else {
            count--;
        }
    }

    return major;
};