nums: [1, 2, 4, 6];
result: [1, 1, 2, 8];
class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = new Array(nums.length);
        let prefixSum = 0;
        for (let i = 0; i < nums.length; i++) {
            if (i == 0) {
                prefixSum = 1;
            } else {
                prefixSum = prefixSum * nums[i-1];
            }
            prefix[i] = prefixSum;
        }
        const suffix = new Array(nums.length);
        let suffixSum = 0;

        for (let i = nums.length - 1; i>=0;i--) {
                      if (i == nums.length - 1) {
                suffixSum = 1;
            } else {
                suffixSum = suffixSum * nums[i+1];
            }
            suffix[i] = suffixSum;
        } 
        const result = new Array(nums.length)

        for (let i = 0; i<nums.length;i++){
          result[i] = suffix[i] * prefix[i]
        }
        return result
    }
}
