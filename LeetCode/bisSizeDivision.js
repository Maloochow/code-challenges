// JavaScript bitwise op is for signed 32-bit, so

// while ((base << 1) <= dividend) {
// doesn't work. Because "base" overflows.

// while (base <= (dividend >> 1)) {
// works.



var divide = function(dividend, divisor) {
    if (dividend === -Math.pow(2, 31) && divisor === -1) {
        return Math.pow(2, 31) - 1
    }
    let counter = 0
    let sign = dividend > 0 ^ divisor > 0 ? -1 : 1
    let currentDividend = Math.abs(dividend)
    let currentDivisor = Math.abs(divisor)
    while (currentDividend >= currentDivisor) {
        let m = 1
        while (currentDividend >> 1 >= currentDivisor) {
            currentDivisor <<= 1
            m <<= 1
        }
        counter += m
        currentDividend -= currentDivisor
        currentDivisor = Math.abs(divisor)
    }
    return sign*counter
}