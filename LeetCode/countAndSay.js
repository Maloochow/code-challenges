var countAndSay = function(n) {
    if (n === 1) {
        return "1"
    }
    let digits = countAndSay(n-1)
    let map = []
    let result = ""
    for (let i = 0; i < digits.length; i++) {
        if (map[0] !== digits[i]) {
            result += map[0] ? map[1] + map[0] : ""
            map = [digits[i], 1]
        } else {
            map[1] ++          
        }
    }
    return result + map[1] + map[0]
};