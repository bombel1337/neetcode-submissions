class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */

    evalRPN(tokens) {
        const mathFunctions = {
            "+": function(a,b){ return a+b},
            "-": function(a,b){ return a-b},
            "/": function(a,b){ return Math.trunc(a / b) },
            "*": function(a,b){ return Math.floor(a*b)},
        }

        const operators = ["+","-", "/", "*"]
        const stack = []
        for (let i = 0; i<tokens.length; i++) {
            console.log(stack)
            if (operators.includes(tokens[i])) {
                const secondValue = stack.at(-1)
                stack.pop()
                const firstValue = stack.at(-1)
                stack.pop()
                const operator = tokens.at(i)
                const result = mathFunctions[operator](parseInt(firstValue), parseInt(secondValue))
                stack.push(result)

            } else {
                stack.push(tokens[i])
            }
        }
        return stack[0]
    }
}
