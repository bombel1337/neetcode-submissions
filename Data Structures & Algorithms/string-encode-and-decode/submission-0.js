class Solution {
    /**
     * Encodes a list of strings to a single string.
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        console.log(strs.map(str => str.length + '#' + str).join(''))
        return strs.map(str => str.length + '#' + str).join('');
    }

    /**
     * Decodes a single string back to a list of strings.
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') j++; // Find delimiter
            let length = parseInt(str.substring(i, j), 10); // Get length of word
            i = j + 1 + length; // Move index past the current word
            res.push(str.substring(j + 1, i));
        }

        return res;
    }
}