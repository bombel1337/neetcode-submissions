class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const results = new Map()
        for (let i = 0; i<nums.length; i++) {
            if (results.has(nums[i])) {
                results.set(nums[i], results.get(nums[i])+1)
            } else {
                results.set(nums[i],1)
            }
        }
        const sorted = [...results.entries()].sort((a,b)=>b[1]-a[1])
        const arr = []
        for (let i = 0; i<k; i++) {
            arr.push(sorted[i][0])
        }
        return arr
    }
}
