// var search = function(nums, target) {
//     return nums.indexOf(target)
// };

var search = function(nums, target) {
    if (nums.length === 1) {
        return nums[0] === target ? 0 : -1
    }
    let result = -1
    let i = 0
    while (i < nums.length ) {
        if (nums[i] === target) {
            result = i
            break;
        }
        i++
    }
    return result
};
