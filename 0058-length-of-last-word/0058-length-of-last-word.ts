function lengthOfLastWord(s: string): number {
    let words = s.trim().split(' ');
    let word = words[words.length-1];
    return word.length
};