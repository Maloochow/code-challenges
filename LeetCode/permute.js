var permute = function(nums) {
    if (nums.length <= 1) {
        return [nums]
    }
    let result = []
    
    //by creating a function inside of the function, it eliminates the trouble of passing in a constant arguments
    function helper(nums, array) {
        if (nums.length === 0) {
            result.push(array.slice())
        }
        for (let i = 0; i < nums.length; i++) {
            let path = array.slice()
            path.push(nums[i])
            let newNums = nums.slice()
            newNums.splice(i, 1)
            helper(newNums, path)
        }
    }
    
    helper(nums, [])
    return result
}