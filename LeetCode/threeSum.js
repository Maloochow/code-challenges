/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
    if (!nums || nums.length < 3) {
        return []
    }
    
    nums.sort((a, b) => a - b)
    let i = 0
    let triplets = []
    while (i < nums.length - 2) {
        if (i-1 >= 0 && nums[i] === nums[i-1]) {
            i++
        } else {
            let l = i + 1
            let r = nums.length - 1
            while (l < r) {
                if (nums[i] + nums[l] + nums[r] === 0) {
                    triplets.push([nums[i], nums[l], nums[r]])
                    l ++
                    r --
                } else if (nums[l] + nums[r] > 0 - nums[i]) {
                    r--
                } else if (nums[l] + nums[r] < 0 - nums[i]) {
                    l++
                }
            }
            i++
        }
    }
    let stringArray = triplets.map( array => JSON.stringify(array.sort()));
    let uniqueStringArray = new Set(stringArray);
    return Array.from(uniqueStringArray, JSON.parse)
}


// var threeSum = function(nums) {
//     if (!nums || nums.length < 3) {
//         return []
//     }
//     //sums = {1:[1]}
//     let sums = {}
//     //last = { 1:[[0, -1], [-2, 1]]}
//     let last = {}
//     let triplets = []
//     for (let i = 0; i < nums.length; i++) {
//         if (last[nums[i]]) {
//             for (const array of last[nums[i]]) {
//                 triplets.push(array.concat(nums[i]))
//             }
//         }
//         for (const k in sums) {
//             let lastKey = k - nums[i]
//             if (last[lastKey] ) {
//                 if (!last[lastKey].find(array => array.sort().join("") === [1, 0, 0].sort().join(""))) {
//                  last[lastKey].push(sums[k].concat(nums[i]))   
//                 }
//             } else {
//                 last[lastKey] = [sums[k].concat(nums[i])]
//             }
//         }
        
//         if (!sums[0 - nums[i]]) {
//             sums[0 - nums[i]] = [nums[i]]
//         }
//     }
//     let stringArray = triplets.map( array => JSON.stringify(array.sort()));
//     let uniqueStringArray = new Set(stringArray);
//     return Array.from(uniqueStringArray, JSON.parse)
// };

