class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const openings = ["(", "{", "["];
        const closers = [")", "}", "]"];

        for (let el of s) {
            if (openings.includes(el)) {
                stack.push(closers[openings.indexOf(el)])
            } else if (closers.includes(el)) {
                if (el === stack[stack.length -1]) {
                  stack.pop()
                } else {
                    return false
                }
            }
            
        }
        return stack.length === 0
    }
}
