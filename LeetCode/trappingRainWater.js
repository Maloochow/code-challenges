var trap = function(height) {
    let i = 0
    let j = height.length - 1
    let lMax = 0
    let rMax = 0
    let sum = 0
    while (i < j) {
        //for the left hand side
        if (height[i] < lMax) {
            sum += Math.min(lMax, rMax) - height[i]
        } else {
            lMax = height[i]
        }
        //for the left hand side
        if (height[j] < rMax) {
            sum += Math.min(lMax, rMax) - height[j]
        } else {
            rMax = height[j]
        }
        if (lMax < rMax) {
            i++
        } else {
            j--
        }
    }
    return sum
};