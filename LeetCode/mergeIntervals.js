var merge = function(intervals) {
    let orders = []
    let result = []
    for (const array of intervals) {
        if (array[1] === 0) {
            orders.push(0.5)
            orders.push(-0.5)
        } else {
            orders.push(array[0])
            orders.push(-array[1])      
        }
    }
    orders.sort((a, b) => {
        if (Math.abs(a) === Math.abs(b)) {
            if (a > 0) {
                return -1
            } else {
                return 1
            }
        } else {
            return Math.abs(a) - Math.abs(b)   
        }
    })
    let stack = []
    for (let i = 0; i < orders.length; i++) {
        if (orders[i] >= 0) {
            stack.push(orders[i])
        } else {
            if (stack.length === 1) {
                result.push([Math.floor(stack[0]), Math.floor(Math.abs(orders[i]))])
                stack.pop()
            } else {
                stack.pop()
            }
        }
        
    }
    return result
};