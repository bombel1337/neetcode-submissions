function mergeSort(arr) {
    if (arr.length<=1) {
        return arr
    }
    const mid =  Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)


    const right = arr.slice(mid)
    const sortedLeft = mergeSort(left)
    const sortedRight = mergeSort(right)

    let sorted = []
    let leftIndex = 0
    let rightIndex = 0
    while (
    leftIndex < sortedLeft.length &&
    rightIndex < sortedRight.length
    ) {
        if (sortedLeft[leftIndex] <= sortedRight[rightIndex]) {
            sorted.push(sortedLeft[leftIndex])
            leftIndex++
        } else {
            sorted.push(sortedRight[rightIndex])
            rightIndex++
        }
    }
    for (let i = leftIndex; i<sortedLeft.length;i++) {
        sorted.push(sortedLeft[i])
    }
    for (let i = rightIndex; i<sortedRight.length;i++) {
        sorted.push(sortedRight[i])
    }
    return sorted

}
class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        // Input: target = 10, position = [4,1,0,7], speed = [3,4,1,1]
        // position 7,4,1,0 speed 1,3,4,1
        // 8,7,5,1
        // 9,9,9,2// cant overtake
        // 10,10,10,3

        for (let i =1; i<position.length;i++) {
            let j = i - 1
            while (j >=0 && position[j + 1] > position[j]) {
                const changer = position[j + 1]
                position[j+1] = position[j]
                position[j] = changer
                const speedchanger = speed[j + 1]
                speed[j+1] = speed[j]
                speed[j] = speedchanger
                j--
            }
        }
        const time = []
        for (let i = 0;i<position.length;i++) {
            time.push((target - position[i]) / speed[i])
        }
        let lastFleetTime = time[0]
        let fleets = 1

        for (let i =1; i<position.length;i++) { 
            if (time[i] > lastFleetTime) {
                lastFleetTime = time[i]
                fleets++
            } 
        }
        return fleets

    }
}
