// var maxArea = function(height) {
//     let max = 0
//     for (let i = 0; i < height.length - 1; i++) {
//         let j = 1
//         while (j < height.length) {
//             let volume = (j-i)*Math.min(height[i], height[j])
//             max = volume > max ? volume : max
//             j++
//         }
//     }
//     return max
// };

var maxArea = function(height) {
    let max = 0
    let i = 0
    let j = height.length - 1
    while (i < j) {
        let volume = (j-i)*Math.min(height[i], height[j])
        max = volume > max ? volume : max
        if (height[i] < height[j]) {
            i++
        } else {
            j--
        }
    }
    return max
};