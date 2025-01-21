function strStr(haystack: string, needle: string): number {
    let needleSize = needle.length;
    for (let i = 0; i < haystack.length; i++) {
        const endIndex = i + needleSize;
        let sub = haystack.substring(i, endIndex);
        if (sub === needle) {
            return i;
        }        
    }

    return -1;
};