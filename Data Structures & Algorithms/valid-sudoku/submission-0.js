class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i = 0; i < board.length; i++) {
            const rowMap = new Set()
            const columnMap = new Set()

            for (let j = 0; j < board[i].length; j++) {
                const rowMapLengthBefore = rowMap.size
                const columnMapLengthBefore = columnMap.size

                if (!isNaN(board[i][j])) {
                    rowMap.add(board[i][j])
                    const rowMapLengthAfter = rowMap.size
                    if (rowMapLengthBefore === rowMapLengthAfter) return false
                   
                }
                if (!isNaN(board[j][i])) {
                    columnMap.add(board[j][i])
                    const columnMapLengthAfter = columnMap.size
                    if (columnMapLengthBefore === columnMapLengthAfter) return false
                }
            }
        }


        for (let row = 0; row < board.length; row+=3) {
            for (let column = 0; column < board[row].length; column+=3) {
                const squareSet = new Set()
                for (let i=0; i<3; i++) {
                    for (let j=0; j<3; j++) {
                        const squareSizeBefore = squareSet.size
                        if (!isNaN(board[row+i][column+j])) {
                            squareSet.add(board[row+i][column+j])
                            const squareSizeAfter = squareSet.size
                            if (squareSizeAfter === squareSizeBefore) return false
                        }
                        
                    }
                }
                
            }

        }
        return true
    }
}
