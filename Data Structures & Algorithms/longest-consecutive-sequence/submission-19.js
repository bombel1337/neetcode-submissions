class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // [0,3,2,5,4,6,1,1] - > [0, 1, 2, 3, 4, 5, 6]
    // h=0 c=1
    // for:
    //     i=0: c>h(1>0) h=c(1) c=1
    // i=1 sorted[0] + 1 == sorted[1] -> c++(2); c>h (2>1)
    // i=2 sorted[1] + 1 == sorted[2] ->

    longestConsecutive(nums) {
        let highest = 0;
        let current = 1;
        const sorted = [...new Set(nums)].sort((a, b) => a - b);
        for (let i = 0; i < sorted.length; i++) {
            if (i > 0 && sorted[i - 1] + 1 == sorted[i]) {
                current++;
                if (current > highest) {
                    highest = current;
                }
            } else {
                current = 1;
            }
            if (highest == 0) {
                highest = 1;
            }
        }
        return highest;
    }
}
