class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequencyMap = new Map();

        for (let num of nums) {
            frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
        }
        return Array.from(frequencyMap.entries()).sort((a, b) => b[1] - a[1]).slice(0,k).map(k => k[0])
    }
}
