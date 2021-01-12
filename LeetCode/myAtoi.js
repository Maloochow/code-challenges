var myAtoi = function(s) {
    let i = 0
    let result = ""
    while (s[i] && !s[i].match(/[a-zA-Z]/i)) {
        if (/^\d+$/.test(s[i])) {
            result+= s[i]
        } else if (s[i] === "+" && result.length === 0) {
            result += s[i]
        } else if (s[i] === "-" && result.length === 0) {
            result += s[i]   
        } else if (s[i] === " " && result.length === 0) {
            result += ""   
        } else {
            break;
        }
        i++
    }
    if (result.length === 0 || result === "+" || result === "-") {
        return 0
    }
    if (Math.abs(parseInt(result, 10)) > 0x7FFFFFFF) {
        return result < 0 ? -Math.pow(2, 31) : Math.pow(2, 31) - 1
    }
    return parseInt(result, 10)
};

// testCases:
// myAtoi("+-12")
// myAtoi("1234567890123456789012345678901234567890")
// myAtoi("-91283472332") //expected: -2147483648
// myAtoi("3.14159")