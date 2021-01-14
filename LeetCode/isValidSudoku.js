//the idea is to go through the board once and check the criteria for all three sides

var isValidSudoku = function(board) {
    let checks = new Set
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] !== ".") {
                let checkRow = board[i][j] + "in Row " + i
                let checkCol = board[i][j] + "in Col " + j
                let checkBox = board[i][j] + "in Box " + Math.floor(i/3) + Math.floor(j/3)
                if (checks.has(checkRow) || checks.has(checkCol) || checks.has(checkBox)) {
                    return false
                } else {
                    checks.add(checkRow)
                    checks.add(checkCol)
                    checks.add(checkBox)
                }   
            }
        }
    }
    return true
}