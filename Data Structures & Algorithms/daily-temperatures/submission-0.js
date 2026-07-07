class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const array = []
        const tempLength = temperatures.length 
        for (let i = 0; i < tempLength; i ++) {
            const arrayLength = array.length
            for (let j = i, k = 0; j < tempLength; ++j, k++) { 

                if (temperatures[j] > temperatures[i]) {
                    array.push(k)
                    break
                }

            }
            if (array.length === arrayLength) {
                array.push(0)
            }


        }
        return array
     }
}
