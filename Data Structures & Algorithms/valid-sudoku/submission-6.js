class Solution {
    // board =
    // [["1","2",".",".","3",".",".",".","."],
    //  ["4",".",".","5",".",".",".",".","."],
    //  [".","9","8",".",".",".",".",".","3"],
    //  ["5",".",".",".","6",".",".",".","4"],
    //  [".",".",".","8",".","3",".",".","5"],
    //  ["7",".",".",".","2",".",".",".","6"],
    //  [".",".",".",".",".",".","2",".","."],
    //  [".",".",".","4","1","9",".",".","8"],
    //  [".",".",".",".","8",".",".","7","9"]]

    isValidSudoku(board) {
        const obj = {};
        for (let col = 0; col < board.length; col++) {
            const rowValues = [];
            const colValues = [];
            for (let row = 0; row < board.length; row++) {
                const rowValue = board[col][row];
                const colValue = board[row][col];

                if (rowValues.includes(rowValue) || colValues.includes(colValue)) {
                    return false;
                }

                if (rowValue != ".") {
                    rowValues.push(rowValue);
                }
                if (colValue != ".") {
                    colValues.push(colValue);
                }
            }
        }
        for (let col = 0; col < board.length; col += 3) {
            for (let row = 0; row < board.length; row += 3) {
                const arr = [];
                for (let j = 0; j < 3; j++) {
                    for (let i = 0; i < 3; i++) {
                        if (board[col + j][row + i] != ".") {
                            arr.push(board[col + j][row + i]);
                        }
                    }
                }
                if (arr.length != new Set(arr).size) {
                    return false;
                }
            }
        }
        return true;
    }
}
