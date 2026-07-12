class Solution {
    /**
     * Encodes a list of strings to a single string.
     * @param {string[]} strs
     * @returns {string}
     */

    encode(strs) {
        // const encoded_strs = []
        // for (let i =0; i < strs.length; i++) {
        //     const word = strs[i].split("")
        //     const encodedWord = []
        //     for (const index in word) {
        //         if (word[index+1] === undefined) {
        //             encodedWord.push(word[index+1 - word.length])
        //         } else {
        //             encodedWord.push(word[index+1])
        //         }
        //     }
        //     encoded_strs.push(encodedWord.join(""))
        // }
        // return encoded_strs
        let encoded = ""
        for (let i = 0; i<strs.length; i++) {
            encoded +=  strs[i] + "|x|"
        }


        return encoded

    }

    /**
     * Decodes a single string back to a list of strings.
     * @param {string} str
     * @returns {string[]}
     */
    decode(encoded_string) {
        // const decoded_strs = []

        // for (let i =0; i < encoded_string.length; i++) {
        //     const word = encoded_string[i].split("")
        //     const encodedWord = []
        //     for (const index in word) {
        //         if (word[index-1] === undefined) {
        //             encodedWord.push(word[index-1 + word.length])
        //         } else {
        //             encodedWord.push(word[index-1])
        //         }
        //     }
        //     decoded_strs.push(encodedWord.join(""))
        // }
        // return decoded_strs

        if (encoded_string.length === 0) {
            return []
        }
        return encoded_string.split("|x|").slice(0, -1);
    }
}