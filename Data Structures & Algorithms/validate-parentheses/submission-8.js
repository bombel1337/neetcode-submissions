class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const keys = {
            "(": ")",
            "{": "}",
            "[": "]",
        };
    

        const stack = [];
        for (let i = 0; i < s.length; i++) {
            if (keys[s[i]]) {
                stack.push(keys[s[i]]);
            } else {
                if (stack.at(-1) != s[i]) {
                    return false;
                } else {
                    stack.pop();
                }
            }
        }
        
        return stack.length === 0;
    }
}
