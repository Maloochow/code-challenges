var reverse = function(x) {
    let xStr = x.toString()
    let result = ""
    if (xStr[0] === "-") {
        result+= "-"
        xStr.slice(1)
    }
    let resultArray = []
    for (let i = 0, j = xStr.length - 1; i <=j; i++, j--) {
        resultArray[j] = xStr[i]
        resultArray[i] = xStr[j]
    }
    result = parseInt(result += resultArray.join(""), 10)
    if (result > Math.pow(2, 31) || result < -Math.pow(2, 31)) {
  return 0;
    }
    return result
};

// method 2:
// // Name argument n instead of x, as that latter is commonly used for decimal numbers 
// function reverse(n) {
//     // Array#reverse method takes no argument.
//     // You can use `Math.abs()` instead of changing the sign if negative.
//     // Conversion of string to number can be done with unary plus operator.
//     var reverseN = +String(Math.abs(n)).split('').reverse().join('');
//     // Use a number constant instead of calculating the power
//     if (reverseN > 0x7FFFFFFF) {
//         return 0;
//     }
//     // As we did not change the sign, you can do without the boolean isNegative.
//     // Don't multiply with -1, just use the unary minus operator.
//     // The ternary operator might interest you as well (you could even use it
//     //    to combine the above return into one return statement)
//     return n < 0 ? -reverseN : reverseN;
// }