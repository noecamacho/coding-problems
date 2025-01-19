function vowelStrings(words: string[], queries: number[][]): number[] {
    /* SOLUTION 1 - TAKES TOO MUCH TIME!
    // delcare a map where vowels are stored
    const vowelMap: Record<string, boolean> = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true,
    };

    let ans = new Array<number>();

    // initiate iterator of words
    queries.forEach((query, index) => {
        const queryStart = query[0]
        const queryEnd = query[1]
        let vowelsCount = 0;
        // start a loop that starts on queries[currentWordIndex][0] and ends on queries[currentWordIndex][1]
        for (let i = queryStart; i <= queryEnd; i++) {
                let word = words[i];
                const startChar = word[0];
                const endChar = word[word.length-1];
                // check if current character is in vowelsMap
                if (startChar in vowelMap && endChar in vowelMap) {
                    // if it is then vowels count increases
                    vowelsCount++;
                }
        }
        // when iterator ands add add to ans array the vowels found
        ans.push(vowelsCount);
    });
        
    return ans;
    */

    /* SOLUTION 2 */
    let n = words.length;
    let Prefix = new Array(n + 1).fill(0);
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    for (let i = 0; i < n; i++) {
        Prefix[i + 1] = Prefix[i];
        if (vowels.has(words[i][0]) && vowels.has(words[i][words[i].length - 1])) {
            Prefix[i + 1]++;
        }
    }

    let result = new Array(queries.length);
    for (let i = 0; i < queries.length; i++) {
        result[i] = Prefix[queries[i][1] + 1] - Prefix[queries[i][0]];
    }
    
    return result;
};