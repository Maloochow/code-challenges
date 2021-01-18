var rotate = function(matrix) {
    let n = 0
    let length = matrix.length
    while (n < length) {
        let row = []
        for (let i = length - 1; i >= 0; i--) {
            row.push(matrix[i][n])
        }
        matrix.push(row)
        n++
    }
    matrix.splice(0, length)
    return matrix
};