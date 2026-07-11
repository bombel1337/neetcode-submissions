class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let results = new Map()
        for (let i = 0; i<nums.length; i++) {
            if (results.has(nums[i])) {
                results.set(nums[i], results.get(nums[i])+1)
            } else {
                results.set(nums[i],1)
            }
        }
        results = new Map([...results].sort((a,b)=>b[1]-a[1]))
        return Array.from(results.keys()).slice(0, k);
    }
}
