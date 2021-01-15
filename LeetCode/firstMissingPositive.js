var firstMissingPositive = function(nums) {
    let i = 0
    while (i < nums.length) {
        //nums[i] !== nums[nums[i] - 1] has to be these two compare. If compare with i+1 instead, cases like nums = [1,1] will have infinate loop
        if (nums[i] > 0 && nums[i] < nums.length && nums[i] !== nums[nums[i] - 1]) {
            let temp = nums[nums[i] - 1]
            nums[nums[i] - 1] = nums[i]
             nums[i] = temp
        } else {
            i++
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i+1) {
            return i+1
        }
    }
  return i+1  
};
