var isValid = function(s) {
    let stack = []
    let length = 0
    for (const char of s) {
        if (tokens[char]) {
            stack.push(tokens[char])
            length++
        } else {
            if (length > 0 && stack[length - 1] === char) {
                stack.pop()
                length--
            } else {
                return false
            }
        }
    }
    return stack.length === 0
};


const tokens = {
    '(': ')', 
    '{': '}', 
    '[': ']'
}