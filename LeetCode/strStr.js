var strStr = function(haystack, needle) {
    if (needle.length === 0) {
        return 0
    }
    return haystack.indexOf(needle)
}

//construct the indexOf function

// var strStr = function(haystack, needle) {
//     if (needle.length === 0) {
//         return 0
//     }
//     let result = -1
//     for (let i = 0; i < haystack.length; i ++) {
//         if (haystack[i] === needle[0]) {
//             let pointer = i
//             let j = 0
//             result = i
//             while (j < needle.length) {
//                 if (needle[j] !== haystack[pointer]) {
//                     result = -1
//                     break;
//                 }
//                 j++
//                 pointer++
//             }
//         }
//         if (result !== -1) {
//             break;
//         }
//     }
//     return result
// }