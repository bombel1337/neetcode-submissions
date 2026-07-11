class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const results = new Map();
        outer: for (const word of strs) {
            const sorted = word.split("").sort().join("");
            for (let i = 0; i < results.size; i++) {
                for (const str of results.get(i)) {
                    const sortedStr = str.split("").sort().join("");
                    if (sortedStr == sorted) {
                        results.set(i, [...results.get(i), word]);
                        continue outer;
                    }
                }
            }
            results.set(results.size, [word]);
        }
        return Array.from(results.values());
    }
}
