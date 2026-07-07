class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramsMap = new Map();

        for (let word of strs) {
            let sortedWord = word.split('').sort().join(''); // Sortujemy słowo jako klucz

            if (!anagramsMap.has(sortedWord)) {
                anagramsMap.set(sortedWord, []);
            }
            
            anagramsMap.get(sortedWord).push(word);
        }

        return Array.from(anagramsMap.values());
    }
}