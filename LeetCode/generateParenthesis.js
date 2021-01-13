var generateParenthesis = function(n) {
    let output = ["("]
    return helper(output, n-1, 1)
};

function helper(array, n, i) {
    if (n <= 0) {
        let addition = new Array(i).fill(")")
        array[0] += addition.join("")
        return array
    }
    let array1 = array.map(str => str += "(")
    let newArray1 = helper(array1, n-1, i+1)
    let array2 = []
    let newArray2 = []
    if (i > 0) {
        array2 = array.map(str => str += ")")
        newArray2 = helper(array2, n, i-1)
    }
    return newArray1.concat(newArray2)
}