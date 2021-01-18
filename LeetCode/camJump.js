var canJump = function(nums) {
    let maxJump = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let newJump = i + Number(nums[i])
            maxJump = newJump > maxJump ? newJump : maxJump
        } else {
            if (maxJump <= i && i !== nums.length -1) {
                return false
            }
        }
    }
    return true
};


canJump([0])
canJump([3,2,1,0,2])