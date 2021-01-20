var climbStairs = function(n) {
    let steps = {1: 1, 2: 2}
    return helper(n, steps)
};

function helper(n, steps) {
    if (n === 1) {
        return 1
    } else if (n === 2) {
        return 2
    }
    if (!steps[n-1]) {
        steps[n-1] = helper(n-1, steps)
    }
    if (!steps[n-2]) {
        steps[n-2] = helper(n-2, steps)
    }
    let option1 = steps[n-1]
    let option2 = steps[n-2]
    return option1 + option2
}