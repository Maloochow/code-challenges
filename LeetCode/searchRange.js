var searchRange = function(nums, target) {
    if (nums.length === 0) {
        return [-1, -1]
    } else if (nums.length === 1) {
        return nums[0] === target ? [0, 0] : [-1, -1]
    }
    return helper(nums, 0, nums.length-1, target)
};

function helper(nums, left, right, target) {
    let result = [-1, -1]
    if (right < left) {
        return result
    } else if ( left === right ) {
        return nums[left] === target ? [left, right] : result
    }
    let mid = Math.floor((left + right)/2)
    if (nums[mid] === target) {
        let i = mid - 1
        let l = mid + 1
        while (nums[i] === target) {
            i--
        }
        while(nums[l] === target) {
            l++
        }
        result = [i+1, l-1]
    } else if (nums[mid] > target) {
        result = helper(nums, left, mid -1, target)
    } else {
        result = helper(nums, mid+1, right, target)
    }
    return result
}