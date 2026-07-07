class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i+1; j <= nums.length; j++) {
                if (nums[i] + nums [j] == target) {
                    return [i,j]
                }
            }
        }
    }
}

[0,1]

i = 0 
j = 1

i = 1 
j = 2