var plusOne = function(digits) {
    let i = digits.length -1
    digits[i]++
    while (digits[i] > 9 && i >=0) {
        digits[i] = 0
        digits[i - 1] ? digits[i-1] ++ : digits.unshift(1)
        i--
    }
    return digits
};