function maxScore(s: string): number {

    let leftCount = 0;
    let rightCount = [...s].reduce((acc, char) => acc + (char === '1' ? 1 : 0), 0)
    let maxCount = 0;

    for (let i = 0; i < s.length -1; i++) {
        let digit = s[i];
        if (parseInt(digit) === 0) {
            leftCount++;
        } else {
            rightCount--;
        }
        
        let score = leftCount + rightCount
        if (score > maxCount) {
            maxCount = score;
        }
    }

    return maxCount;
};