class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];


        // temperatures = [2, 1, 1, 3]
        // results = [, , 1, ]
        // i = 0; temp[i]=2 stack = []
        // i = 1; temp[i]=1 stack =[0] for: -
        // i = 2; temp[i]=1 stack = [0,1] for: -
        // i = 3; temp[i]=3 stack = 0,1,2 for: + 3>2 stack =0,1,2 -> 0,1 results[2] = 3 - 2; = 1
        //                                 for: + 3>1 stack 0,1 -> 0 results[1] = 3 - 1 = 2
        //                                 for: + 3>0 stack 0 -> [] results[0] = 3 - 0 = 3
        //                                 for: -
        
        const results = new Array(temperatures.length).fill(0);
        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length > 0 && temperatures[i] > temperatures[stack.at(-1)]) {
                const previousIndex = stack.pop();

                results[previousIndex] = i - previousIndex
            }
            stack.push(i)
        }
        return results
    }
}
