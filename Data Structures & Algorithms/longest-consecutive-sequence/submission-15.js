class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length == 1) {
            return 1
        } else if (nums.length == 0) {
            return 0
        }

        nums.sort((a,b)=>  a-b )
        let output = []
        let sequence = 1
        output.push(sequence)

        for (let i = 0; i< nums.length - 1; i++) {

            if (nums[i+1] === nums[i]) {
                continue
            } else if (nums[i] + 1 === nums[i+1]) {
                console.log(nums[i], nums[i+1], sequence)
                sequence++
            } else {
                sequence = 1
            }
            output.push(sequence)

            
        }
        console.log(nums)
        return Math.max(...output)
    }
}
