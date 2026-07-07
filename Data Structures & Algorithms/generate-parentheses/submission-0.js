class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const results = []

        const addingBracket = (currentString, openings, closers) => {
            if (currentString.length === n*2) {
                results.push(currentString)
                return
            }

            if (n > openings) {
                addingBracket(currentString + "(", openings + 1, closers)
            }
            if (openings > closers) {
                addingBracket(currentString + ")", openings, closers+1)
            }
        }
        addingBracket("",0,0)
        return results
    }   
}
