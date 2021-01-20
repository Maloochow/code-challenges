var setZeroes = function(matrix) {
    let col0 = false
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                if (i !== 0 && j === 0 ) {
                    col0 = true
                } else if (i === 0 && j === 0) {
                    matrix[0][0] = 0
                    col0 = true
                } else {
                    matrix[i][0] = 0
                    matrix[0][j] = 0   
                }
            }
        }
    }
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
        if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0
            }
        }
    }
    if (matrix[0][0] === 0) {
        for (let j = 1; j < matrix[0].length; j++) {
            matrix[0][j] = 0
        }
    }
    if (col0) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0
        }
    }
    
};