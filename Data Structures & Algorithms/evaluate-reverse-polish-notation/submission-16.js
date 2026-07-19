class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const operators = new Set(["+", "-", "*", "/"]);
        const numbersArr = [];
        for (let i = 0; i < tokens.length; i++) {
            const val = tokens[i];
            if (operators.has(val)) {
                let score;
                const right = +numbersArr.pop();
                const left = +numbersArr.pop();
                if (val == "+") {
                    score = left + right;
                } else if (val == "*") {
                    score = left * right;
                } else if (val == "-") {
                    score = left - right;
                } else if (val == "/") {
                    score = Math.trunc(left / right);
                }
                numbersArr.push(score)
            } else {
                numbersArr.push(Number(tokens[i]));
            }
        }

        return numbersArr[0];
    }
}
