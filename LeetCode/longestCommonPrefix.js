/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function(strs) {
//     if (!strs || strs.length === 0) {
//         return ""
//     }
//     let prefix = ""
//     let i = 0
//     while (strs.every(str => i < str.length)) {
//         let char = strs[0][i]
//         if (strs.every(str => str[i] === char)) {
//             prefix += char
//         } else {
//             break;
//         }
//         i++
//     }
//     return prefix
// };

var longestCommonPrefix = function(strs) {
    if (!strs || strs.length === 0) {
        return ""
    }
    let minLen = strs.reduce((a, c) => c.length > a ? a : c.length, strs[0].length)
    let low = 1
    let high = minLen
    while (low <= high) {
        let mid = Math.floor((low + high)/2)
        if (isCommon(strs, mid)) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return strs[0].slice(0, Math.floor((low+high)/2))
}

function isCommon(strs, len) {
    let subString = strs[0].slice(0, len)
    return strs.every(str => str.startsWith(subString))
}